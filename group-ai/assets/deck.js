/* GROUP-AI 공용 덱 초기화
 *
 * 각 덱의 index.html은 콘텐츠만 담고, 슬라이드 동작·표제란·테마는 전부 여기가 맡는다.
 * 외부 요청 0. reveal.js는 assets/vendor/에서 로드된다. INTENT.md §7 참조.
 *
 * index.html이 제공해야 하는 것:
 *   <body data-deck-topic="01 · Agent란 무엇인가">
 *   <div class="reveal"><div class="slides"> … </div></div>
 */

(function () {
  "use strict";

  var THEME_KEY = "group-ai-deck-theme";

  /* ── 테마 ───────────────────────────────────────────────
   * 기본은 뷰어의 시스템 설정을 따른다(속성 없음).
   * T 키로 light → dark → 시스템 순환. 발표장 프로젝터가 어느 쪽일지 모르므로
   * 현장에서 한 손으로 바꿀 수 있어야 한다.
   */

  function readStoredTheme() {
    try {
      return localStorage.getItem(THEME_KEY);
    } catch (e) {
      return null;   // 사생활 보호 모드 등에서 접근 자체가 던진다
    }
  }

  function storeTheme(value) {
    try {
      if (value) localStorage.setItem(THEME_KEY, value);
      else localStorage.removeItem(THEME_KEY);
    } catch (e) {
      /* 저장 못 해도 이번 세션 동안은 동작한다 */
    }
  }

  function applyTheme(value) {
    if (value === "light" || value === "dark") {
      document.documentElement.setAttribute("data-theme", value);
    } else {
      document.documentElement.removeAttribute("data-theme");
    }
  }

  function cycleTheme() {
    var current = document.documentElement.getAttribute("data-theme");
    var next = current === "light" ? "dark" : current === "dark" ? null : "light";
    applyTheme(next);
    storeTheme(next);
    return next;
  }

  applyTheme(readStoredTheme());

  /* ── 도면 테두리와 표제란 ───────────────────────────────
   * 진행 표시를 진행바가 아니라 도면의 표제란으로 한다.
   * "10장 중 4장째"라는 실제 정보를 이 청중이 매일 보는 형식으로 보여준다.
   */

  function buildChrome() {
    var frame = document.createElement("div");
    frame.className = "sheet-frame";
    frame.setAttribute("aria-hidden", "true");

    var block = document.createElement("div");
    block.className = "title-block";

    var topic = document.createElement("div");
    topic.className = "tb-topic";
    topic.textContent = document.body.dataset.deckTopic || "";

    var count = document.createElement("div");
    count.className = "tb-count";

    block.appendChild(topic);
    block.appendChild(count);
    document.body.appendChild(frame);
    document.body.appendChild(block);

    return count;
  }

  function updateCount(node, deck) {
    var total = deck.getTotalSlides();
    var current = deck.getSlidePastCount() + 1;
    node.innerHTML = "";

    var b = document.createElement("b");
    b.textContent = String(current).padStart(2, "0");
    node.appendChild(b);
    node.appendChild(document.createTextNode(" / " + String(total).padStart(2, "0")));

    // 스크린리더에는 숫자만으로 부족하므로 문장으로 다시 알린다
    node.setAttribute("aria-label", total + "장 중 " + current + "장");
  }

  /* ── 기동 ───────────────────────────────────────────── */

  document.addEventListener("DOMContentLoaded", function () {
    var countNode = buildChrome();

    var deck = new Reveal({
      hash: true,
      history: false,
      controls: false,          // 표제란이 위치를 알려주므로 화살표 UI는 군더더기
      progress: false,
      slideNumber: false,
      center: false,            // 조판은 CSS가 맡는다
      transition: "none",       // 유일한 모션은 "빈칸이 채워진다" 하나뿐
      backgroundTransition: "none",
      fragmentInURL: true,
      width: 1280,
      height: 720,
      margin: 0.06,
      minScale: 0.2,
      maxScale: 2.0,
      // 발표자 화면(notes 플러그인)은 쓰지 않는다. reveal의 발표자 화면은
      // 슬라이드 안의 <aside class="notes">를 읽는데, 이 저장소는 NOTES.md를
      // 노트의 정본으로 두기 때문이다(INTENT.md §8). 두 곳에 같은 노트를 두면
      // 반드시 어긋난다. 노트는 NOTES.md를 따로 띄워놓고 본다.
    });

    deck.initialize().then(function () {
      updateCount(countNode, deck);
    });

    deck.on("slidechanged", function () {
      updateCount(countNode, deck);
    });

    document.addEventListener("keydown", function (event) {
      if (event.metaKey || event.ctrlKey || event.altKey) return;
      if (event.key === "t" || event.key === "T") {
        event.preventDefault();
        cycleTheme();
      }
    });
  });
})();
