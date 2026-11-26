(() => {
  'use strict';
  const key = 'portfolio-language';
  const normalize = text => text.trim().replace(/\s+/g, ' ');
  const translations = new Map();
  for (const [en, ko] of [...(window.PORTFOLIO_TRANSLATIONS || []), ...(window.PORTFOLIO_PAGE_TRANSLATIONS || [])]) {
    const pair = { en, ko };
    translations.set(normalize(en), pair);
    translations.set(normalize(ko), pair);
  }
  let language = 'en';
  try { if (localStorage.getItem(key) === 'ko') language = 'ko'; } catch { /* Storage is optional. */ }

  function t(text) {
    if (typeof text !== 'string') return text;
    const pair = translations.get(normalize(text));
    if (!pair) return text;
    const target = pair[language];
    const leading = text.match(/^\s*/)[0] || target.match(/^\s*/)[0];
    const trailing = text.match(/\s*$/)[0] || target.match(/\s*$/)[0];
    return leading + target.trim() + trailing;
  }
  const attributes = ['aria-label', 'title', 'placeholder', 'alt', 'data-explanation', 'data-tip', 'data-lab', 'data-title'];
  const selector = attributes.map(name => `[${name}]`).join(',') + ',meta[name="description"]';
  const protectedElement = element => element?.closest('script,style,[data-no-translate],[contenteditable]:not([contenteditable="false"])');
  function protectedText(element) {
    return protectedElement(element) || element?.closest('textarea') ||
      (element?.closest('pre,code') && !element.closest('[data-i18n-copy]'));
  }
  let observer;
  const observe = () => observer?.observe(document.documentElement, {
    subtree: true, childList: true, characterData: true,
    attributes: true, attributeFilter: attributes,
  });
  function apply(root = document) {
    observer?.disconnect();
    try {
      const translateNode = node => {
        if (protectedText(node.parentElement)) return;
        const value = t(node.nodeValue);
        if (value !== node.nodeValue) node.nodeValue = value;
      };
      if (root.nodeType === Node.TEXT_NODE) translateNode(root);
      else {
        const walker = document.createTreeWalker(root, NodeFilter.SHOW_TEXT);
        while (walker.nextNode()) translateNode(walker.currentNode);
      }
      const elements = root.querySelectorAll ? [...root.querySelectorAll(selector)] : [];
      if (root.matches?.(selector)) elements.unshift(root);
      for (const element of elements) {
        if (protectedElement(element)) continue;
        for (const attr of [...attributes, ...(element.matches('meta[name="description"]') ? ['content'] : [])]) {
          if (!element.hasAttribute(attr)) continue;
          const old = element.getAttribute(attr), value = t(old);
          if (old !== value) element.setAttribute(attr, value);
        }
      }
    } finally { observe(); }
  }
  function setLanguage(next, persist = true) {
    if (!['en', 'ko'].includes(next)) return;
    language = next;
    document.documentElement.lang = language;
    apply();
    document.querySelectorAll('[data-lang]').forEach(button => {
      button.setAttribute('aria-pressed', String(button.dataset.lang === language));
    });
    if (persist) { try { localStorage.setItem(key, language); } catch { /* Keep the page selection. */ } }
    window.dispatchEvent(new CustomEvent('portfolio:languagechange', { detail: language }));
  }
  // Available before legacy inline scripts render their first view.
  window.portfolioI18n = { t, apply, get language() { return language; } };
  function initialize() {
    document.querySelectorAll('.lang-switch').forEach(element => { element.hidden = false; });
    document.querySelectorAll('[data-lang]').forEach(button => button.addEventListener('click', () => setLanguage(button.dataset.lang)));
    setLanguage(language, false);
    observer = new MutationObserver(() => apply());
    observe();
  }
  window.addEventListener('storage', event => { if (event.key === key) setLanguage(event.newValue === 'ko' ? 'ko' : 'en', false); });
  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', initialize, { once: true });
  else initialize();
})();
