// swiper
const swiper = new Swiper(".swiper", {
  direction: "horizontal",
  speed: 800,
  effect: "fade",
  fadeEffect: {
    crossFade: true,
  },

  breakpoints: {
    320: {
      slidesPerView: 1,
      spaceBetween: 10,
    },
    480: {
      slidesPerView: 1,
      spaceBetween: 10,
    },
    640: {
      slidesPerView: 1,
      spaceBetween: 10,
    },
    1024: {
      slidesPerView: 1,
      spaceBetween: 10,
    },
  },

  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});


// menu mobile
const menu = document.getElementById("mobile");
const open = document.getElementById("open");
const close = document.getElementById("closed");
const links = document.querySelectorAll('.menu_link');

open.addEventListener('click', () => {
    menu.classList.add('show');
});

close.addEventListener('click', () => {
    menu.classList.remove('show');
});

links.forEach(link => {
    link.addEventListener('click', () => {
        menu.classList.remove('show');
    });
});