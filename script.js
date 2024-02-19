// Setting current year in copyright section
const yearEl = document.querySelector(".year");
const currentYear = new Date().getFullYear();
yearEl.textContent = currentYear;

// Open nav for mobile devices
const header = document.querySelector(".header");
const btnMobileMenu = document.querySelector(".btn-mobile-nav");
btnMobileMenu.addEventListener("click", function () {
  header.classList.toggle("nav-open");
});

// Smooth scrolling
const allLinks = document.querySelectorAll("a");
allLinks.forEach(function (link) {
  link.addEventListener("click", function (e) {
    e.preventDefault();
    const href = link.getAttribute("href");
    if (href === "#")
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });

    if (href !== "#" && href.startsWith("#")) {
      const sectionEl = document.querySelector(href);
      sectionEl.scrollIntoView({ behavior: "smooth" });
      if (link.classList.contains("main-nav-link")) {
        header.classList.remove("nav-open");
      }
    }
  });
});

// sticky header

const sectionHeroEl = document.querySelector(".section-hero");

const observer = new IntersectionObserver(
  function (entries) {
    const ent = entries[0];
    if (!ent.isIntersecting) {
      document.body.classList.add("sticky");
    }
    if (ent.isIntersecting) {
      document.body.classList.remove("sticky");
    }
  },
  {
    root: null,
    threshold: 0,
    rootMargin: '-96px'
  }
);
observer.observe(sectionHeroEl);
