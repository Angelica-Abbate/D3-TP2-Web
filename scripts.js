// Cambiar navbar al hacer scroll
window.addEventListener("scroll", function () {
  const navbar = document.querySelector(".navbar");
  navbar.classList.toggle("scrolled", window.scrollY > 50);
});

// Inicializar wow
new WOW().init();

// Inicializar swiper
var swiper = new Swiper(".mySwiper", {
  slidesPerView: "auto",
  spaceBetween: 30,
  loop: true,
  autoplay: {
    delay: 5000,
    disableOnInteraction: false,
  },
  centeredSlides: true,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
});

// inicializar GSAP
// use a script tag or an external JS file
document.addEventListener("DOMContentLoaded", (event) => {
  gsap.registerPlugin(ScrollTrigger, ScrollSmoother);
  // gsap code here!
});

// script de intro

document.addEventListener("DOMContentLoaded", () => {
  const container = document.getElementById("bubble-container");
  const bubbles = container.querySelectorAll(".bubble");

  bubbles.forEach((bubble) => {
    const size = Math.random() * 40 + 20; // 20 a 60px
    bubble.style.width = `${size}px`;
    bubble.style.height = `${size}px`;
    bubble.style.left = `${Math.random() * 100}%`;

    gsap.to(bubble, {
      y: -350,
      duration: 5 + Math.random() * 4,
      repeat: -1,
      ease: "sine.inOut",
      delay: Math.random() * 2,
      onRepeat: () => {
        bubble.style.left = `${Math.random() * 100}%`;
      },
    });
  });
});
