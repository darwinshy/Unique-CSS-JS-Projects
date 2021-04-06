const panels = document.querySelectorAll(".panel");

panels.forEach((panel) => panelListeners(panel));

function panelListeners(panel) {
  panel.addEventListener("mouseover", () => {
    if (panel.classList.contains("active")) panel.classList.remove("active");
    else {
      removeActiveClasses(panel);
      panel.classList.add("active");
    }
  });
}
function removeActiveClasses() {
  panels.forEach((panel) => panel.classList.remove("active"));
}
