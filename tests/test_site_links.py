from html.parser import HTMLParser
from pathlib import Path
from urllib.parse import urlsplit


ROOT = Path(__file__).resolve().parents[1]


class ReferenceParser(HTMLParser):
    def __init__(self) -> None:
        super().__init__()
        self.ids: set[str] = set()
        self.references: list[str] = []

    def handle_starttag(self, tag: str, attrs: list[tuple[str, str | None]]) -> None:
        values = dict(attrs)
        if values.get("id"):
            self.ids.add(str(values["id"]))
        ref = values.get("href") or values.get("src")
        if ref:
            self.references.append(ref)


def test_all_local_html_references_and_fragments_resolve() -> None:
    documents: dict[Path, ReferenceParser] = {}
    for path in ROOT.rglob("*.html"):
        parser = ReferenceParser()
        parser.feed(path.read_text(encoding="utf-8"))
        documents[path.resolve()] = parser

    failures: list[str] = []
    for source, parser in documents.items():
        for reference in parser.references:
            split = urlsplit(reference)
            if split.scheme or split.netloc or reference.startswith(("mailto:", "data:")):
                continue
            target = source if not split.path else (
                ROOT / split.path.lstrip("/")
                if split.path.startswith("/")
                else source.parent / split.path
            )
            target = target.resolve()
            if target.is_dir() or split.path.endswith("/"):
                target = target / "index.html"
            if not target.is_file():
                failures.append(f"{source.relative_to(ROOT)} -> {reference}: missing")
                continue
            if split.fragment and split.fragment not in documents[target].ids:
                failures.append(f"{source.relative_to(ROOT)} -> {reference}: fragment")
    assert failures == []
