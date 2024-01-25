const sliderServices = document.querySelector('[data-slider="services-swiper"]');

const initServicesSlider = () => {
  if (sliderServices ) {
    // eslint-disable-next-line
    new Swiper(sliderServices , {
      keyboard: true,
      loop: true,
      pagination: {
        el: '.swiper-pagination',
        clickable: true,
      },
      speed: 1000,
      autoplay: {
        enabled: true,
        delay: 5000,
      },
    });
  }
};

export {initServicesSlider};
