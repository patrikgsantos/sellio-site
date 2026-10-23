// Escolhe o idioma: ?lang=pt|en (a app envia-o), depois a última escolha, depois o do navegador.
(function () {
  var root = document.documentElement;
  function pick() {
    var q = new URLSearchParams(location.search).get("lang");
    if (q === "pt" || q === "en") return q;
    try {
      var s = localStorage.getItem("sellio-lang");
      if (s === "pt" || s === "en") return s;
    } catch (e) {}
    var nav = (navigator.languages && navigator.languages[0]) || navigator.language || "en";
    return /^pt\b/i.test(nav) ? "pt" : "en";
  }
  function apply(lang) {
    root.setAttribute("data-lang", lang);
    root.lang = lang === "pt" ? "pt-PT" : "en-US";
    var t = root.getAttribute("data-title-" + lang);
    if (t) document.title = t;
    document.querySelectorAll(".lang button").forEach(function (b) {
      b.setAttribute("aria-pressed", String(b.getAttribute("data-set") === lang));
    });
    // Os links entre páginas mantêm o idioma.
    document.querySelectorAll("a[data-keep]").forEach(function (a) {
      var u = new URL(a.getAttribute("href"), location.href);
      u.searchParams.set("lang", lang);
      a.href = u.pathname.split("/").pop() + u.search + u.hash;
    });
  }
  var initial = pick();
  root.setAttribute("data-lang", initial); // já no <head>, para não piscar os dois idiomas
  document.addEventListener("DOMContentLoaded", function () { apply(initial); });
  document.addEventListener("click", function (e) {
    var b = e.target.closest && e.target.closest(".lang button");
    if (!b) return;
    var lang = b.getAttribute("data-set");
    try { localStorage.setItem("sellio-lang", lang); } catch (err) {}
    var u = new URL(location.href);
    u.searchParams.set("lang", lang);
    history.replaceState(null, "", u);
    apply(lang);
  });
})();
