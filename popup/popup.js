const DEFAULTS = {
  enabled: true,
  headerStyle: "dark",
  titleStyle: "base1"
};

document.addEventListener("DOMContentLoaded", () => {
  const enabledToggle = document.getElementById("enabledToggle");
  const headerStyleSelect = document.getElementById("headerStyle");
  const titleStyleSelect = document.getElementById("titleStyle");
  const controlsSection = document.getElementById("controlsSection");

  function updateUIState(enabled) {
    controlsSection.classList.toggle("disabled", !enabled);
  }

  chrome.storage.local.get(DEFAULTS, (items) => {
    enabledToggle.checked = Boolean(items.enabled);
    headerStyleSelect.value = items.headerStyle || DEFAULTS.headerStyle;
    titleStyleSelect.value = items.titleStyle || DEFAULTS.titleStyle;
    updateUIState(enabledToggle.checked);
  });

  enabledToggle.addEventListener("change", () => {
    const enabled = enabledToggle.checked;
    updateUIState(enabled);
    chrome.storage.local.set({ enabled });
  });

  headerStyleSelect.addEventListener("change", () => {
    chrome.storage.local.set({ headerStyle: headerStyleSelect.value });
  });

  titleStyleSelect.addEventListener("change", () => {
    chrome.storage.local.set({ titleStyle: titleStyleSelect.value });
  });
});

