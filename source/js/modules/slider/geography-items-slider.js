const sliderGeographyItems = document.querySelector('[data-slider="geography-items-swiper"]');

const initGeographyItemsSlider = () => {
  if (sliderGeographyItems) {
    // eslint-disable-next-line
    new Swiper(sliderGeographyItems, {
      keyboard: true,
      spaceBetween: 16,
      // loop: true,
      slidesPerView: 1,
      pagination: {
        el: '.swiper-pagination',
        clickable: true,
      },
      speed: 1000,
      autoplay: {
        enabled: true,
        delay: 5000,
      },
      breakpoints: {

        768: {
          slidesPerView: 6,
          spaceBetween: 20,
        },

        320: {
          slidesPerView: 1,
          spaceBetween: 40,
        },
      },
    });
  }
};

export {initGeographyItemsSlider};
