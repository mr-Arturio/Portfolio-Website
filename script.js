function toggleMenu() {
  const menu = document.querySelector(".menu-links");
  const icon = document.querySelector(".hamburger-icon");
  menu.classList.toggle("open");
  icon.classList.toggle("open");
}

// Dark / light mode

const btn = document.getElementById("modeToggle");
const btn2 = document.getElementById("modeToggle2");
const themeIcons = document.querySelectorAll(".icon");
const currentTheme = localStorage.getItem("theme");

if (currentTheme === "dark") {
  setDarkMode();
}

btn.addEventListener("click", function () {
  setTheme();
});

btn2.addEventListener("click", function () {
  setTheme();
});

function setTheme() {
  let currentTheme = document.body.getAttribute("theme");

  if (currentTheme === "dark") {
    setLightMode();
  } else {
    setDarkMode();
  }
}

function setDarkMode() {
  document.body.setAttribute("theme", "dark");
  localStorage.setItem("theme", "dark");

  themeIcons.forEach((icon) => {
    icon.src = icon.getAttribute("src-dark");
  });
}

function setLightMode() {
  document.body.removeAttribute("theme");
  localStorage.setItem("theme", "light");

  themeIcons.forEach((icon) => {
    icon.src = icon.getAttribute("src-light");
  });
}

// JavaScript for dynamic tooltip positioning and accessibility features
document.addEventListener('DOMContentLoaded', (event) => {
  const tooltips = document.querySelectorAll('.tooltip');

  tooltips.forEach((tooltip) => {
    const tooltipText = tooltip.querySelector('.tooltiptext');

    // Make tooltips focusable
    tooltip.setAttribute('tabindex', '0');

    // Show tooltip on focus for keyboard accessibility
    tooltip.addEventListener('focus', () => {
      tooltipText.style.visibility = 'visible';
      tooltipText.style.opacity = '1';
    });

    // Hide tooltip on blur
    tooltip.addEventListener('blur', () => {
      tooltipText.style.visibility = 'hidden';
      tooltipText.style.opacity = '0';
    });

    // Show tooltip on touch for touch devices
    tooltip.addEventListener('touchstart', () => {
      tooltipText.style.visibility = 'visible';
      tooltipText.style.opacity = '1';
    });

    // Hide tooltip on touch end
    tooltip.addEventListener('touchend', () => {
      setTimeout(() => {
        tooltipText.style.visibility = 'hidden';
        tooltipText.style.opacity = '0';
      }, 1500); // Delay to allow reading before hiding
    });
  });

  // Dismiss tooltips on outside click
  document.addEventListener('click', (e) => {
    if (!e.target.matches('.tooltip') && !e.target.matches('.tooltiptext')) {
      tooltips.forEach((tooltip) => {
        const tooltipText = tooltip.querySelector('.tooltiptext');
        tooltipText.style.visibility = 'hidden';
        tooltipText.style.opacity = '0';
      });
    }
  });
});
