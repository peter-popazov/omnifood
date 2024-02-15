const yearEl = document.querySelector(".year");
const currentYear = new Date().getFullYear();
yearEl.textContent = currentYear;

const header = document.querySelector(".header");

const btnMobileMenu = document.querySelector(".btn-mobile-nav");

btnMobileMenu.addEventListener("click", function () {
  header.classList.toggle("nav-open");
});
