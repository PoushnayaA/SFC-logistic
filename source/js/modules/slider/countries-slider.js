const sliderCountries = document.querySelector('[data-slider="countries-swiper"]');

const initCountriesSlider = () => {
  if (sliderCountries) {
    // eslint-disable-next-line
    new Swiper(sliderCountries, {
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

export {initCountriesSlider};
