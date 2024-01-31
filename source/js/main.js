import { iosVhFix } from './utils/ios-vh-fix';

import { initServicesSlider } from './modules/slider/init-services-slider';
import { initNewsSlider } from './modules/slider/init-news-slider';
import { initGeographyItemsSlider } from './modules/slider/geography-items-slider';
import { initCountriesSlider } from './modules/slider/countries-slider';



import { initAccordions } from './modules/accordion/init-accordion';

// ---------------------------------

window.addEventListener('DOMContentLoaded', () => {

  // Utils
  // ---------------------------------
  const languageButton = document.querySelector('.navigation-language').querySelector('button');
  const languagesList = document.querySelector('.navigation-language__list');
  if (languageButton) {
    languageButton.addEventListener('click', function () {
      languageButton.classList.toggle('active');
      languagesList.classList.toggle('navigation-language__list--active');
    })
    const language = languagesList.querySelectorAll('li');
    language.forEach(element => {
      element.addEventListener('click', function () {
        languagesList.classList.remove('navigation-language__list--active');
        languageButton.dataset.value = element.dataset.language;
        languageButton.querySelector('span').textContent = element.textContent;
      })
    });
  }

  const navigationOpenButton = document.querySelector('.navigation').querySelector('button');
  if (navigationOpenButton) {
    navigationOpenButton.addEventListener('click', function () {
      document.querySelector('.navigation__list').classList.toggle('navigation__list--active');
      navigationOpenButton.classList.toggle('active');
      document.querySelector('.wrapper').classList.toggle('wrapper--dark');
    })
  }

  const serviceList = document.querySelector('.service__list');
  if (serviceList) {
    serviceList.querySelectorAll('li').forEach(element => {
      element.addEventListener('click', function () {
        element.querySelector('p').classList.toggle('active-text');
        console.log(1);
      })
    });
  }

  setTimeout(initServicesSlider(), 1000);
  setTimeout(initNewsSlider(), 1000);
  setTimeout(initAccordions(), 1000);
  setTimeout(initGeographyItemsSlider(), 1000);
  setTimeout(initCountriesSlider(), 1000);




  iosVhFix();

  window.addEventListener('load', () => {

  });
});
