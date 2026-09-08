/* GROUP-AI 공용 덱 초기화
 *
 * 각 덱의 index.html은 콘텐츠만 담는다. 슬라이드 동작·진행 바·목차 레일·하단 내비·
 * 테마·모션은 전부 여기가 맡는다. reveal.js는 assets/vendor/에서 로드된다. 외부 요청 0.
 *
 * index.html이 제공해야 하는 것:
 *   <body data-deck-topic="01 · Agent란 무엇인가">
 *   <div class="reveal"><div class="slides">
 *     <section data-title="표지"> … </section>      ← data-title 이 레일의 라벨
 *   </div></div>
 *
 * 등장 모션: 슬라이드가 현재가 되면 <section>에 .run 을 붙인다. h1/h2 의 단어는 .w 로 감싸고,
 * .blur / .io / .draw 의 자식에는 --i 순번을 자동으로 준다. 콘텐츠는 --i 를 손으로 적지 않는다.
 * 키: ← → Space 이동 · T 테마 · M 모션 끔/켬 · Esc 개요. 레일 안에서는 Space/Enter 가 그 요소의 것이다.
 */

(function () {
  "use strict";

  var THEME_KEY = "group-ai-deck-theme";
  var MOTION_KEY = "group-ai-deck-motion";
  var reduced = window.matchMedia("(prefers-reduced-motion: reduce)");

  /* ── 저장소 (사생활 보호 모드에서는 접근 자체가 던진다) ────── */

  function load(key) { try { return localStorage.getItem(key); } catch (e) { return null; } }
  function save(key, value) {
    try { if (value) localStorage.setItem(key, value); else localStorage.removeItem(key); } catch (e) { /* 이번 세션만 */ }
  }

  /* ── 테마: 기본은 시스템, T 키로 light → dark → 시스템 순환 ── */

  function applyTheme(value) {
    if (value === "light" || value === "dark") document.documentElement.setAttribute("data-theme", value);
    else document.documentElement.removeAttribute("data-theme");
  }
  function cycleTheme() {
    var cur = document.documentElement.getAttribute("data-theme");
    var next = cur === "light" ? "dark" : cur === "dark" ? null : "light";
    applyTheme(next); save(THEME_KEY, next);
  }
  applyTheme(load(THEME_KEY));

  /* ── 모션: OS 설정을 따르되 M 키·버튼으로 끌 수 있다 ──────── */

  var motionBtn, motionLabel;
  function motionOff() { return document.body.classList.contains("no-motion"); }
  function setMotion(off) {
    document.body.classList.toggle("no-motion", off);
    if (motionBtn) { motionBtn.setAttribute("aria-pressed", String(off)); motionLabel.textContent = off ? "모션 꺼짐" : "모션 켜짐"; }
  }
  // 저장값은 3상태다: "on" / "off" / 없음. 없으면 OS 설정을 따른다.
  // (OS가 reduce인데 M으로 켠 뒤 저장이 안 되면 다음 로드에서 다시 꺼진다 — 그래서 명시 저장한다.)
  function effectiveMotionOff() {
    var stored = load(MOTION_KEY);
    if (stored === "on") return false;
    if (stored === "off") return true;
    return reduced.matches;
  }
  function toggleMotion() {
    var off = !motionOff();
    setMotion(off); save(MOTION_KEY, off ? "off" : "on");
  }
  var onReducedChange = function () { if (!load(MOTION_KEY)) setMotion(reduced.matches); };
  if (reduced.addEventListener) reduced.addEventListener("change", onReducedChange);
  else if (reduced.addListener) reduced.addListener(onReducedChange);

  /* ── 등장 모션 준비: 단어 마스크와 순번 ─────────────────── */

  function wrapWords(el) {
    // 텍스트 노드만 단어 단위로 감싼다. <br>는 그대로 두고, <em> 같은 자식 안쪽도 감싼다.
    var i = 0;
    function walk(node) {
      Array.prototype.slice.call(node.childNodes).forEach(function (child) {
        if (child.nodeType === 3) {
          var frag = document.createDocumentFragment();
          child.nodeValue.split(/(\s+)/).forEach(function (part) {
            if (!part) return;
            if (/^\s+$/.test(part)) { frag.appendChild(document.createTextNode(part)); return; }
            var w = document.createElement("span"); w.className = "w";
            var inner = document.createElement("span"); inner.style.setProperty("--i", i++); inner.textContent = part;
            w.appendChild(inner); frag.appendChild(w);
          });
          node.replaceChild(frag, child);
        } else if (child.nodeType === 1 && child.tagName !== "BR" && !child.classList.contains("w")) {
          walk(child);
        }
      });
    }
    walk(el);
  }

  function numberChildren(section) {
    // .blur / .io 안의 요소에 --i 순번. 같은 슬라이드 안에서 그룹이 여럿이면 이어서 센다.
    var n = 0;
    section.querySelectorAll(".blur, .io").forEach(function (group) {
      Array.prototype.forEach.call(group.children, function (c) { if (!c.style.getPropertyValue("--i")) c.style.setProperty("--i", n++); });
    });
    section.querySelectorAll(".draw").forEach(function (fig) {
      var k = 0;
      fig.querySelectorAll(".node, .path").forEach(function (el) { if (!el.style.getPropertyValue("--i")) el.style.setProperty("--i", k++); });
    });
  }

  function prepare(sections) {
    sections.forEach(function (s) {
      s.querySelectorAll("h1, h2").forEach(wrapWords);
      numberChildren(s);
    });
  }

  /* ── 크롬: 진행 바 · 목차 레일 · 하단 내비 ───────────────── */

  function buildChrome(sections) {
    var pbar = document.createElement("div"); pbar.className = "pbar";
    var bar = document.createElement("i"); pbar.appendChild(bar);

    var rail = document.createElement("nav"); rail.className = "rail"; rail.setAttribute("aria-label", "슬라이드 목차");
    var links = sections.map(function (s, idx) {
      var a = document.createElement("a"); a.href = "#/" + idx;
      var b = document.createElement("b"); b.textContent = String(idx + 1).padStart(2, "0");
      a.appendChild(b); a.appendChild(document.createTextNode(s.dataset.title || ("슬라이드 " + (idx + 1))));
      rail.appendChild(a); return a;
    });
    var sp = document.createElement("span"); sp.className = "sp"; rail.appendChild(sp);
    motionBtn = document.createElement("button"); motionBtn.className = "ctrl"; motionBtn.type = "button";
    var dot = document.createElement("span"); dot.className = "dot";
    motionLabel = document.createElement("span"); motionLabel.textContent = "모션 켜짐";
    motionBtn.appendChild(dot); motionBtn.appendChild(motionLabel);
    motionBtn.addEventListener("click", toggleMotion);
    rail.appendChild(motionBtn);

    var navbar = document.createElement("div"); navbar.className = "navbar";
    var cnt = document.createElement("span"); cnt.className = "cnt";
    var hint = document.createElement("span"); hint.className = "hint"; hint.textContent = "← → · Space · T 테마 · M 모션";
    navbar.appendChild(cnt); navbar.appendChild(hint);

    document.body.appendChild(pbar); document.body.appendChild(rail); document.body.appendChild(navbar);
    return { bar: bar, links: links, cnt: cnt };
  }

  function updateChrome(chrome, deck, sections) {
    var total = sections.length;
    var idx = deck.getIndices().h;
    chrome.bar.style.width = ((idx + 1) / total * 100) + "%";
    chrome.links.forEach(function (a, i) {
      a.classList.toggle("on", i === idx);
      if (i === idx) { a.setAttribute("aria-current", "page"); a.scrollIntoView({ block: "nearest", inline: "center", behavior: motionOff() ? "auto" : "smooth" }); }
      else a.removeAttribute("aria-current");
    });
    chrome.cnt.innerHTML = "";
    var b = document.createElement("b"); b.textContent = String(idx + 1).padStart(2, "0");
    chrome.cnt.appendChild(b); chrome.cnt.appendChild(document.createTextNode(" / " + String(total).padStart(2, "0")));
    chrome.cnt.setAttribute("aria-label", total + "장 중 " + (idx + 1) + "장");
  }

  function runEntrance(sections, current) {
    sections.forEach(function (s) { if (s !== current) s.classList.remove("run"); });
    // 초기 상태(숨김)를 한 번 그리게 한 뒤 .run 을 붙여야 전이가 시작된다.
    // requestAnimationFrame 은 탭이 비활성이면 안 돌아서 클래스가 영영 안 붙는다 — 리플로우로 강제한다.
    current.classList.remove("run");
    void current.offsetWidth;
    current.classList.add("run");
  }

  /* ── 기동 ───────────────────────────────────────────── */

  document.addEventListener("DOMContentLoaded", function () {
    var sections = Array.prototype.slice.call(document.querySelectorAll(".reveal .slides > section"));
    prepare(sections);
    var chrome = buildChrome(sections);
    setMotion(effectiveMotionOff());

    var deck = new Reveal({
      hash: true, history: false,
      controls: false, progress: false, slideNumber: false,   // 크롬은 우리가 그린다
      center: false, transition: "none", backgroundTransition: "none",
      fragmentInURL: true,
      // 레일·버튼에 포커스가 있을 때 Space/Enter 는 그 요소의 것이다. reveal 이 가로채 슬라이드를 넘기지 않게 한다.
      keyboardCondition: function (event) {
        var t = event.target;
        return !(t && t.closest && t.closest(".rail, .navbar"));
      },
      width: 1280, height: 720, margin: 0.07, minScale: 0.2, maxScale: 2.0,
    });

    deck.initialize().then(function () {
      updateChrome(chrome, deck, sections);
      runEntrance(sections, deck.getCurrentSlide());
    });
    deck.on("slidechanged", function (e) {
      updateChrome(chrome, deck, sections);
      runEntrance(sections, e.currentSlide);
    });
    // 개요(Esc/O)에서는 모든 장이 완성 상태로 보여야 한다
    deck.on("overviewshown", function () { sections.forEach(function (s) { s.classList.add("run"); }); });
    deck.on("overviewhidden", function () { runEntrance(sections, deck.getCurrentSlide()); });

    document.addEventListener("keydown", function (event) {
      if (event.metaKey || event.ctrlKey || event.altKey) return;
      var k = event.key.toLowerCase();
      if (k === "t") { event.preventDefault(); cycleTheme(); }
      if (k === "m") { event.preventDefault(); toggleMotion(); }
    });
  });
})();
