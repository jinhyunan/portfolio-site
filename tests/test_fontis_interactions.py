from __future__ import annotations

import functools
import threading
from http.server import SimpleHTTPRequestHandler, ThreadingHTTPServer
from pathlib import Path

import pytest
from playwright.sync_api import Page, sync_playwright


ROOT = Path(__file__).resolve().parents[1]


@pytest.fixture(scope="module")
def site_url():
    handler = functools.partial(SimpleHTTPRequestHandler, directory=ROOT)
    server = ThreadingHTTPServer(("127.0.0.1", 0), handler)
    thread = threading.Thread(target=server.serve_forever, daemon=True)
    thread.start()
    try:
        yield f"http://127.0.0.1:{server.server_port}"
    finally:
        server.shutdown()
        thread.join(timeout=5)


@pytest.fixture()
def page():
    with sync_playwright() as playwright:
        browser = playwright.chromium.launch(headless=True)
        page = browser.new_page(viewport={"width": 1024, "height": 768})
        yield page
        browser.close()


def test_scene_navigation_restores_history_aria_and_focus(page: Page, site_url: str) -> None:
    page.goto(f"{site_url}/fontis/#pipeline")
    assert page.locator("body").get_attribute("data-scene") == "pipeline"
    page.get_by_role("button", name="다음 장면").click()
    assert page.url.endswith("#evidence")
    page.go_back()
    assert page.url.endswith("#pipeline")
    assert page.locator("#pipeline").get_attribute("aria-hidden") == "false"
    assert page.locator("#evidence").get_attribute("aria-hidden") == "true"
    assert page.locator('[data-scene-target="pipeline"]').get_attribute("aria-current") == "step"
    page.go_forward()
    assert page.url.endswith("#evidence")
    page.keyboard.press("PageUp")
    assert page.url.endswith("#pipeline")
    page.locator('[data-stage="parsing"]').click()
    page.keyboard.press("ArrowRight")
    assert page.url.endswith("#pipeline")
    page.keyboard.press("End")
    assert page.url.endswith("#evaluation")
    assert page.locator("#evaluation h2").evaluate("el => document.activeElement === el")
    page.goto(f"{site_url}/fontis/#not-a-scene")
    page.wait_for_url("**/#problem")
    assert page.url.endswith("#problem")


def test_history_restore_does_not_repeat_live_status_updates(page: Page, site_url: str) -> None:
    page.goto(f"{site_url}/fontis/#pipeline")
    page.get_by_role("button", name="다음 장면").click()
    page.evaluate(
        """
        window.statusUpdateCount = 0;
        new MutationObserver((records) => { window.statusUpdateCount += records.length; })
          .observe(document.querySelector('#scene-status'), { childList: true, subtree: true, characterData: true });
        """
    )
    page.go_back()
    assert page.url.endswith("#pipeline")
    assert page.evaluate("window.statusUpdateCount") == 1


def test_each_next_scene_control_advances_the_presentation(page: Page, site_url: str) -> None:
    page.goto(f"{site_url}/fontis/#problem")
    page.locator("#problem").get_by_role("button", name="다음 장면").click()
    assert page.url.endswith("#corpus")
    page.get_by_role("button", name="다음 장면", exact=True).click()
    assert page.url.endswith("#pipeline")


def test_pipeline_retrieval_and_refusal_controls_update_live_regions(
    page: Page, site_url: str
) -> None:
    page.goto(f"{site_url}/fontis/#pipeline")
    page.locator('[data-stage="retrieval"]').click()
    assert page.locator("#pipeline-detail").get_attribute("data-active") == "retrieval"
    page.goto(f"{site_url}/fontis/#retrieval")
    page.locator('[data-mode="rrf"]').click()
    assert page.locator("#retrieval-results").get_attribute("data-mode") == "rrf"
    page.goto(f"{site_url}/fontis/#refusal")
    page.locator('[data-evidence="insufficient"]').click()
    assert page.locator("#answer-state").get_attribute("data-state") == "insufficient"
    assert "확인할 수 없습니다" in page.locator("#answer-state").inner_text()


def test_touch_navigation_honors_threshold_direction_boundaries_and_motion(site_url: str) -> None:
    with sync_playwright() as playwright:
        browser = playwright.chromium.launch(headless=True)
        context = browser.new_context(
            viewport={"width": 640, "height": 800},
            reduced_motion="reduce",
        )
        page = context.new_page()
        page.goto(f"{site_url}/fontis/#problem")

        def swipe(end_x: int, end_y: int = 400) -> None:
            page.locator("main").dispatch_event(
                "pointerdown",
                {"pointerId": 1, "pointerType": "touch", "clientX": 550, "clientY": 400},
            )
            page.locator("main").dispatch_event(
                "pointerup",
                {"pointerId": 1, "pointerType": "touch", "clientX": end_x, "clientY": end_y},
            )

        swipe(487)
        assert page.url.endswith("#problem")
        swipe(454, 464)
        assert page.url.endswith("#problem")
        swipe(670)
        assert page.url.endswith("#problem")
        swipe(430)
        assert page.url.endswith("#corpus")
        swipe(670)
        assert page.url.endswith("#problem")
        page.keyboard.press("End")
        swipe(430)
        assert page.url.endswith("#evaluation")
        assert page.evaluate("document.documentElement.scrollWidth <= window.innerWidth")
        assert page.locator(".scene.is-current").evaluate(
            "el => getComputedStyle(el).transitionDuration"
        ) in {"0s", "0ms"}
        context.close()
        browser.close()


def test_javascript_disabled_keeps_all_scenes_readable(site_url: str) -> None:
    with sync_playwright() as playwright:
        browser = playwright.chromium.launch(headless=True)
        context = browser.new_context(java_script_enabled=False)
        page = context.new_page()
        page.goto(f"{site_url}/fontis/")
        assert page.locator("section.scene").count() == 8
        assert all(page.locator("section.scene").nth(i).is_visible() for i in range(8))
        context.close()
        browser.close()
