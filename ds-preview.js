/* Preview loader.
   In a compiled design system the components arrive via _ds_bundle.js under a
   generated namespace. These preview files also need to render on their own
   (before the first compile, or when opened straight from disk), so this loader
   falls back to fetching the component sources and evaluating them with Babel.
   Nothing here ships to consumers. */
(function () {
  function resolveNamespace(names) {
    var direct = names.every(function (n) { return typeof window[n] !== "undefined"; });
    if (direct) {
      var o = {};
      names.forEach(function (n) { o[n] = window[n]; });
      return o;
    }
    for (var k in window) {
      try {
        var v = window[k];
        if (v && typeof v === "object" && names.every(function (n) { return typeof v[n] === "function"; })) return v;
      } catch (e) {}
    }
    return null;
  }

  window.__ds = function (names) {
    var ns = resolveNamespace(names);
    if (!ns) throw new Error("Design system components not found: " + names.join(", "));
    return ns;
  };

  window.__dsReady = function (sources, ready) {
    var pending = sources.slice();

    function step() {
      if (!pending.length) return ready();
      var src = pending.shift();
      fetch(src)
        .then(function (r) { return r.ok ? r.text() : Promise.reject(new Error(src)); })
        .then(function (text) {
          var code = text
            .replace(/^\s*import[^;]+;\s*$/gm, "")
            .replace(/^export\s+(function|const|class)/gm, "$1");
          var names = [];
          text.replace(/export\s+(?:function|const|class)\s+([A-Za-z0-9_$]+)/g, function (_, n) { names.push(n); return _; });
          var compiled = window.Babel.transform(code, { presets: ["react"] }).code;
          var factory = new Function("React", compiled + "\nreturn {" + names.map(function (n) { return n + ": typeof " + n + " !== 'undefined' ? " + n + " : undefined"; }).join(",") + "};");
          var exported = factory(window.React) || {};
          Object.keys(exported).forEach(function (n) {
            if (exported[n] !== undefined && typeof window[n] === "undefined") window[n] = exported[n];
          });
        })
        .catch(function () { /* a missing source just means the bundle should provide it */ })
        .then(step);
    }

    step();
  };
})();
