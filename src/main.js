const themeToggleDarkIcon = document.getElementById("theme-toggle-dark-icon");
const themeToggleLightIcon = document.getElementById("theme-toggle-light-icon");

localStorage.getItem("color-theme") === "dark" ||
(!("color-theme" in localStorage) &&
  window.matchMedia("(prefers-color-scheme: dark)").matches)
  ? themeToggleLightIcon.classList.remove("hidden")
  : themeToggleDarkIcon.classList.remove("hidden");

const themeToggleButton = document.getElementById("theme-toggle");

themeToggleButton.addEventListener("click", () => {
  themeToggleDarkIcon.classList.toggle("hidden");
  themeToggleLightIcon.classList.toggle("hidden");

  if (localStorage.getItem("color-theme")) {
    if (localStorage.getItem("color-theme") === "light") {
      document.documentElement.classList.add("dark");
      localStorage.setItem("color-theme", "dark");
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("color-theme", "light");
    }
  } else {
    if (document.documentElement.classList.contains("dark")) {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("color-theme", "light");
    } else {
      document.documentElement.classList.add("dark");
      localStorage.setItem("color-theme", "dark");
    }
  }
});

const redVal = document.getElementById("redVal");
const redRange = document.getElementById("redRange");
const greenVal = document.getElementById("greenVal");
const greenRange = document.getElementById("greenRange");
const blueVal = document.getElementById("blueVal");
const blueRange = document.getElementById("blueRange");

redVal.innerText = redRange.value;
greenVal.innerText = greenRange.value;
blueVal.innerText = blueRange.value;

redRange.addEventListener("change", () => {
  redVal.innerText = redRange.value;
  changeColor();
});
greenRange.addEventListener("change", () => {
  greenVal.innerText = greenRange.value;
  changeColor();
});
blueRange.addEventListener("change", () => {
  blueVal.innerText = blueRange.value;
  changeColor();
});

const colorFrame = document.getElementById("colorFrame");

const changeColor = () => {
  if (redRange.value && greenRange.value && blueRange.value) {
    rgbColor = `rgb(${redRange.value},${greenRange.value},${blueRange.value})`;

    colorFrame.style.backgroundColor = rgbColor;
  }
};
