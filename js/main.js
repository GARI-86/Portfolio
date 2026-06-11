// JavaScript básico para interactividad
document.addEventListener("DOMContentLoaded", function () {
  // Menú móvil
  const mobileMenuBtn = document.querySelector(".mobile-menu-btn");
  const navLinks = document.querySelector(".nav-links");

  if (mobileMenuBtn) {
    mobileMenuBtn.addEventListener("click", function () {
      navLinks.classList.toggle("active");
      const icon = this.querySelector("i");
      icon.classList.toggle("fa-bars");
      icon.classList.toggle("fa-times");
    });
  }

  // Cerrar menú al hacer clic en un enlace
  const navItems = document.querySelectorAll(".nav-links a");
  navItems.forEach((item) => {
    item.addEventListener("click", function () {
      navLinks.classList.remove("active");
      if (mobileMenuBtn) {
        const icon = mobileMenuBtn.querySelector("i");
        icon.classList.remove("fa-times");
        icon.classList.add("fa-bars");
      }
    });
  });

  // Animación al hacer scroll
  function checkScroll() {
    const elements = document.querySelectorAll(
      ".card, .project-card, .skills-list",
    );

    elements.forEach((el) => {
      const elementTop = el.getBoundingClientRect().top;
      const windowHeight = window.innerHeight;

      if (elementTop < windowHeight - 100) {
        el.style.opacity = "1";
        el.style.transform = "translateY(0)";
      }
    });
  }

  // Establecer estado inicial para animaciones
  document
    .querySelectorAll(".card, .project-card, .skills-list")
    .forEach((el) => {
      el.style.opacity = "0";
      el.style.transform = "translateY(20px)";
      el.style.transition = "opacity 0.5s ease, transform 0.5s ease";
    });

  window.addEventListener("scroll", checkScroll);
  checkScroll(); // Verificar al cargar la página
});
