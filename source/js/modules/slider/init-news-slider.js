const sliderNews = document.querySelector('[data-slider="news-swiper"]');

const initNewsSlider = () => {
  if (sliderNews) {
    // eslint-disable-next-line
    new Swiper(sliderNews, {
      keyboard: true,
      spaceBetween: 16,
      loop: true,
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
    });
  }
};

export {initNewsSlider};
