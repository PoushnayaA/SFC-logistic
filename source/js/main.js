import {iosVhFix} from './utils/ios-vh-fix';
import {initModals} from './modules/modals/init-modals';
import {Form} from './modules/form-validate/form';

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

  iosVhFix();

  window.addEventListener('load', () => {
    initModals();
    const form = new Form();
    window.form = form;
    form.init();
  });
});
