(() => {
  'use strict';
  const key = 'portfolio-language';
  const translations = new Map();
  for (const [en, ko] of window.PORTFOLIO_TRANSLATIONS) {
    const pair = { en, ko };
    translations.set(en, pair);
    translations.set(ko, pair);
  }
  let language = 'en';
  try { if (localStorage.getItem(key) === 'ko') language = 'ko'; } catch { /* English also works without storage. */ }

  function t(text) {
    if (typeof text !== 'string') return text;
    const clean = text.trim(), pair = translations.get(clean);
    return pair ? text.replace(clean, pair[language]) : text;
  }
  function apply(root = document) {
    const walker = document.createTreeWalker(root, NodeFilter.SHOW_TEXT);
    while (walker.nextNode()) {
      const node = walker.currentNode;
      if (!node.parentElement?.closest('script,style,[data-no-translate]')) {
        const value = t(node.nodeValue);
        if (value !== node.nodeValue) node.nodeValue = value;
      }
    }
    for (const element of root.querySelectorAll('[aria-label],[title],[data-explanation],meta[name="description"]')) {
      for (const attr of ['aria-label', 'title', 'data-explanation', 'content']) {
        if (element.hasAttribute(attr)) element.setAttribute(attr, t(element.getAttribute(attr)));
      }
    }
  }
  function setLanguage(next, persist = true) {
    if (!['en', 'ko'].includes(next)) return;
    language = next;
    document.documentElement.lang = language;
    apply();
    document.querySelectorAll('[data-lang]').forEach(button => {
      button.setAttribute('aria-pressed', String(button.dataset.lang === language));
    });
    if (persist) { try { localStorage.setItem(key, language); } catch { /* Keep the selection for this page. */ } }
    window.dispatchEvent(new CustomEvent('portfolio:languagechange', { detail: language }));
  }
  window.portfolioI18n = { t, apply, get language() { return language; } };
  document.querySelectorAll('.lang-switch').forEach(element => { element.hidden = false; });
  document.querySelectorAll('[data-lang]').forEach(button => button.addEventListener('click', () => setLanguage(button.dataset.lang)));
  window.addEventListener('storage', event => { if (event.key === key) setLanguage(event.newValue === 'ko' ? 'ko' : 'en', false); });
  setLanguage(language, false);
})();
