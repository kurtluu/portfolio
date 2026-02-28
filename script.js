const menuToggle = document.querySelector(".menu-toggle");
const sectionNav = document.querySelector(".section-nav");
const navLinks = Array.from(document.querySelectorAll(".nav-link"));
const sections = Array.from(document.querySelectorAll(".content-section"));
const year = document.getElementById("year");

if (year) {
  year.textContent = new Date().getFullYear();
}

if (menuToggle && sectionNav) {
  menuToggle.addEventListener("click", () => {
    sectionNav.classList.toggle("open");
    const isOpen = sectionNav.classList.contains("open");
    menuToggle.setAttribute("aria-expanded", String(isOpen));
  });

  navLinks.forEach((link) => {
    link.addEventListener("click", () => {
      sectionNav.classList.remove("open");
      menuToggle.setAttribute("aria-expanded", "false");
    });
  });
}

const setActiveLink = (id) => {
  navLinks.forEach((link) => {
    const isActive = link.getAttribute("href") === `#${id}`;
    link.classList.toggle("active", isActive);
  });
};

if (sections.length && navLinks.length) {
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveLink(entry.target.id);
        }
      });
    },
    {
      threshold: 0.45,
      rootMargin: "-10% 0px -35% 0px",
    }
  );

  sections.forEach((section) => observer.observe(section));
  setActiveLink(sections[0].id);
}
