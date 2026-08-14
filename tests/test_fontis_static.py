from html.parser import HTMLParser
from pathlib import Path


ROOT = Path(__file__).resolve().parents[1]
SCENES = (
    "problem", "corpus", "pipeline", "evidence",
    "retrieval", "citation", "refusal", "evaluation",
)


class IdAndLinkParser(HTMLParser):
    def __init__(self) -> None:
        super().__init__()
        self.ids: set[str] = set()
        self.links: list[str] = []

    def handle_starttag(self, tag: str, attrs: list[tuple[str, str | None]]) -> None:
        values = dict(attrs)
        if values.get("id"):
            self.ids.add(str(values["id"]))
        if tag in {"a", "script", "img"}:
            ref = values.get("href") or values.get("src")
            if ref:
                self.links.append(ref)


def test_fontis_is_first_agent_system_card() -> None:
    landing = (ROOT / "index.html").read_text(encoding="utf-8")
    section = landing.split('<section id="agent-systems">', 1)[1].split(
        "</section>", 1
    )[0]
    assert section.index("fontis-real-estate-rag") < section.index("docpilot")
    assert 'href="fontis/"' in section
    assert "21/23" in section
    assert "retrieval" in section.lower()
    assert "answer accuracy" in section.lower()


def test_presentation_has_eight_scenes_and_accessible_controls() -> None:
    html = (ROOT / "fontis" / "index.html").read_text(encoding="utf-8")
    parser = IdAndLinkParser()
    parser.feed(html)
    assert set(SCENES) <= parser.ids
    assert html.count('class="scene') == 8
    assert 'aria-live="polite"' in html
    assert 'aria-label="이전 장면"' in html
    assert 'aria-label="다음 장면"' in html
    assert "prefers-reduced-motion" in html
    assert "https://github.com/jinhyunan/fontis-real-estate-rag" in parser.links


def test_presentation_uses_approved_claims_and_no_source_assets() -> None:
    html = (ROOT / "fontis" / "index.html").read_text(encoding="utf-8")
    for value in ("136", "401", "215", "49", "137", "21/23", "0.9565", "5/5"):
        assert value in html
    assert "retrieval coverage" in html.lower()
    assert ".pdf" not in html.lower()
    assert "OPENROUTER_API" not in html
    assert "data/processed" not in html
