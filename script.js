const toggleButton = document.getElementById("theme-toggle");
const body = document.body;

toggleButton.addEventListener("click", () => {
  const currentTheme = body.getAttribute("data-theme");
  const isDark = currentTheme === "dark";

  body.setAttribute("data-theme", isDark ? "light" : "dark");
  toggleButton.textContent = isDark ? "🌙" : "☀️";
});

// Default to light
body.setAttribute("data-theme", "light");
