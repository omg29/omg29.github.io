document.addEventListener("DOMContentLoaded", function () {
  const hamburger = document.getElementById("hamburger");
  const navMenu = document.getElementById("nav-menu");
  const navLinks = navMenu.querySelectorAll("a");

  if (hamburger && navMenu) {
    hamburger.addEventListener("click", () => {
      navMenu.classList.toggle("active");
    });

    navLinks.forEach(link => {
      link.addEventListener("click", () => {
        navMenu.classList.remove("active"); // Close menu after click
      });
    });
  }
});

document.addEventListener("click", (e) => {
  if (!navMenu.contains(e.target) && e.target !== hamburger) {
    navMenu.classList.remove("active");
  }
});