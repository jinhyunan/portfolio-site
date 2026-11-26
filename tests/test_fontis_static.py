from html.parser import HTMLParser
from pathlib import Path


ROOT = Path(__file__).resolve().parents[1]
SCENES = (
    "problem", "corpus", "pipeline", "evidence",
    "retrieval", "citation", "refusal", "evaluation",
)
SCENE_CONTRACTS = (
    ("problem", "Evidence contract", "01/08", "Return to the document and page before trusting a summary"),
    ("corpus", "Corpus boundary", "02/08", "Turn source reports into verifiable retrieval units without redistributing them"),
    ("pipeline", "Pipeline controls", "03/08", "Keep provenance intact, from parsing to the answer gate"),
    ("evidence", "Evidence mix", "04/08", "Separate 401 chunks by evidence type"),
    ("retrieval", "Hybrid retrieval", "05/08", "Compare three rankings for the same synthetic question"),
    ("citation", "Page provenance", "06/08", "Every answer must lead back to a document and page"),
    ("refusal", "Evidence gate", "07/08", "Refuse unsupported answers instead of filling the gaps"),
    ("evaluation", "Evaluation limits", "08/08", "Measure retrieval without presenting it as answer accuracy"),
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


class SceneContractParser(HTMLParser):
    def __init__(self) -> None:
        super().__init__()
        self.scenes: list[dict[str, str]] = []
        self._scene_depth = 0
        self._capture: str | None = None

    def handle_starttag(self, tag: str, attrs: list[tuple[str, str | None]]) -> None:
        values = dict(attrs)
        classes = set((values.get("class") or "").split())
        if tag == "section" and "scene" in classes:
            self._scene_depth = 1
            self.scenes.append({"id": str(values.get("id") or ""), "kicker": "", "heading": ""})
            return
        if self._scene_depth:
            self._scene_depth += 1
            if tag == "p" and "kicker" in classes:
                self._capture = "kicker"
            elif tag in {"h1", "h2"}:
                self._capture = "heading"

    def handle_endtag(self, tag: str) -> None:
        if not self._scene_depth:
            return
        if tag in {"p", "h1", "h2"}:
            self._capture = None
        self._scene_depth -= 1

    def handle_data(self, data: str) -> None:
        if self._scene_depth and self._capture:
            self.scenes[-1][self._capture] += data


def test_fontis_is_first_agent_system_card() -> None:
    landing = (ROOT / "archive.html").read_text(encoding="utf-8")
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
    assert 'aria-label="Previous scene"' in html
    assert 'aria-label="Next scene"' in html
    assert "prefers-reduced-motion" in html
    assert "https://github.com/jinhyunan/fontis-real-estate-rag" in parser.links


def test_presentation_locks_scene_order_labels_ordinals_and_headings() -> None:
    html = (ROOT / "fontis" / "index.html").read_text(encoding="utf-8")
    parser = SceneContractParser()
    parser.feed(html)
    actual = []
    for scene in parser.scenes:
        label, ordinal = (part.strip() for part in scene["kicker"].split("·", 1))
        actual.append((scene["id"], label, ordinal, scene["heading"].strip()))
    assert tuple(actual) == SCENE_CONTRACTS


def test_presentation_uses_approved_claims_and_no_source_assets() -> None:
    html = (ROOT / "fontis" / "index.html").read_text(encoding="utf-8")
    for value in ("136", "401", "215", "49", "137", "21/23", "0.9565", "5/5"):
        assert value in html
    assert "retrieval coverage" in html.lower()
    assert ".pdf" not in html.lower()
    assert "OPENROUTER_API" not in html
    assert "data/processed" not in html
