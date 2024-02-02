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
        languageButton.classList.remove('active');
        languageButton.dataset.value = element.dataset.language;
        languageButton.querySelector('span').textContent = element.textContent;
        document.querySelector('.active').classList.remove('active');
        element.classList.add('active');
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
      })
    });
  }

  setTimeout(initServicesSlider(), 1000);
  setTimeout(initNewsSlider(), 1000);
  setTimeout(initAccordions(), 1000);
  setTimeout(initGeographyItemsSlider(), 1000);
  setTimeout(initCountriesSlider(), 1000);

  const EMAIL_REGEXP = /^[^@\s]+@[^@\s]+\.[^@\s]+$/iu;
  const form = document.querySelector('.form');
  const emailInput = document.querySelector('[data-input="email"]');
  const nameInput = document.querySelector('[data-input="name"]');
  const checkBoxInput = document.querySelector('[data-input="checkbox"]');

  if (form) {

    form.querySelectorAll('input').forEach(element => {
      element.addEventListener('input', function () {
        if (element.value !== "") {
          element.classList.add('valid-input');
        } else {
          element.classList.remove('valid-input');
        }
        emailInput.querySelector('input').addEventListener('input', function () {
          if (emailInput.querySelector('input').value=="") {
            emailInput.querySelector('.error-message').classList.add('visually-hidden');
            emailInput.querySelector('input').classList.remove('error-input');
            emailInput.querySelector('input').classList.remove('valid-input');
            document.querySelector('.transparent-button.transparent-button-form').classList.remove('transparent-button--active');
          }
          if (EMAIL_REGEXP.test(emailInput.querySelector('input').value)) {
            emailInput.querySelector('.error-message').classList.add('visually-hidden');
            emailInput.querySelector('input').classList.remove('error-input');
            emailInput.querySelector('input').classList.add('valid-input');
          };
          if (!EMAIL_REGEXP.test(emailInput.querySelector('input').value) && emailInput.querySelector('input').value !=="") {
            emailInput.querySelector('.error-message').classList.remove('visually-hidden');
            emailInput.querySelector('input').classList.add('error-input');
            emailInput.querySelector('input').classList.remove('valid-input');
            document.querySelector('.transparent-button.transparent-button-form').classList.remove('transparent-button--active');
            emailInput.querySelector('input').classList.remove('valid-input');
          }
          if (
          EMAIL_REGEXP.test(emailInput.querySelector('input').value) &&
          checkBoxInput.querySelector('input').checked &&
          nameInput.querySelector('input').value!=="") {
            document.querySelector('.transparent-button.transparent-button-form').classList.add('transparent-button--active');
            emailInput.querySelector('input').classList.add('valid-input');
          }
          if (document.querySelector('.transparent-button--active')) {
            document.querySelector('.transparent-button--active').addEventListener('click', function () {
              document.querySelector('.container--default').classList.add('visually-hidden');
              document.querySelector('.container--modal').classList.remove('visually-hidden');
            })
          }
        });
        nameInput.querySelector('input').addEventListener('input', function () {
          if (
            EMAIL_REGEXP.test(emailInput.querySelector('input').value) &&
            checkBoxInput.querySelector('input').checked &&
            nameInput.querySelector('input').value!=="") {
            document.querySelector('.transparent-button.transparent-button-form').classList.add('transparent-button--active');
            nameInput.querySelector('input').classList.add('valid-input');
          }
          if (nameInput.querySelector('input').value!=="") {
            nameInput.querySelector('input').classList.add('valid-input');
          } else {
            nameInput.querySelector('input').classList.remove('valid-input');
          }
          if (document.querySelector('.transparent-button--active')) {
            document.querySelector('.transparent-button--active').addEventListener('click', function () {
              document.querySelector('.container--default').classList.add('visually-hidden');
              document.querySelector('.container--modal').classList.remove('visually-hidden');
            })
          }
        });
        checkBoxInput.querySelector('input').addEventListener('click', function () {
          if (
          EMAIL_REGEXP.test(emailInput.querySelector('input').value) &&
          checkBoxInput.querySelector('input').checked) {
            document.querySelector('.transparent-button.transparent-button-form').classList.add('transparent-button--active');
          }
          if (document.querySelector('.transparent-button--active')) {
            document.querySelector('.transparent-button--active').addEventListener('click', function () {
              document.querySelector('.container--default').classList.add('visually-hidden');
              document.querySelector('.container--modal').classList.remove('visually-hidden');
            })
          }
        });
      });
    })
  }




  iosVhFix();

  window.addEventListener('load', () => {

  });
});


