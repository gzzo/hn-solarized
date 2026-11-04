(() => {
  const DEFAULTS = {
    enabled: true,
    headerStyle: "dark", // "dark" (#073642) or "orange" (#cb4b16)
    titleStyle: "base1"  // "base1" (#93a1a1) or "blue" (#268bd2)
  };

  function applySettings(settings) {
    const root = document.documentElement;
    if (!root) return;

    const enabled = settings.enabled !== undefined ? settings.enabled : DEFAULTS.enabled;
    const headerStyle = settings.headerStyle || DEFAULTS.headerStyle;
    const titleStyle = settings.titleStyle || DEFAULTS.titleStyle;

    root.setAttribute("data-hn-solarized", enabled ? "on" : "off");
    root.setAttribute("data-hn-header", headerStyle);
    root.setAttribute("data-hn-titles", titleStyle);
  }

  if (typeof chrome !== "undefined" && chrome.storage && chrome.storage.local) {
    chrome.storage.local.get(DEFAULTS, (items) => {
      applySettings(items);
    });

    chrome.storage.onChanged.addListener((changes, areaName) => {
      if (areaName === "local") {
        chrome.storage.local.get(DEFAULTS, (items) => {
          applySettings(items);
        });
      }
    });
  }
})();

