/* создание списка используя шаблонизатор */
import dishMenuTpl from './templates/dish-menu.hbs';
import dishMenu from './dish-menu.json';
import './styles/styles.css';

/* покороче */
const menuListEl = document.querySelector('.js-menu');
menuListEl.insertAdjacentHTML('beforeend', dishMenuTpl(dishMenu));

/* попонятнее */
// const menuMarkup = createDishMenu(dishMenu);
// menuListEl.insertAdjacentHTML('beforeend', menuMarkup);
// function createDishMenu(menu) {
//   return dishMenuTpl(menu);
// };


/* функционал изменения и сохранения темы */
const Theme = {
  LIGHT: 'light-theme',
  DARK: 'dark-theme',
  body: document.querySelector('body'),
  themeSwitch: document.querySelector('#theme-switch-toggle')
};
let themeSet = false;

window.addEventListener('DOMContentLoaded', localStorageInsert);
Theme.themeSwitch.addEventListener('change', onChangeTheme);

function onChangeTheme(e) {
  e.currentTarget.checked ?
    Theme.body.classList.replace(Theme.LIGHT, Theme.DARK) :
    Theme.body.classList.replace(Theme.DARK, Theme.LIGHT);

  // if (e.currentTarget.checked) {
  //   bodyEl.classList.replace(Theme.LIGHT, Theme.DARK)
  //   // bodyEl.classList.remove(Theme.LIGHT)
  //   // bodyEl.classList.add(Theme.DARK)
  // } else {
  //   bodyEl.classList.replace(Theme.DARK, Theme.LIGHT)
  //   // bodyEl.classList.remove(Theme.DARK)
  //   // bodyEl.classList.add(Theme.LIGHT)
  // };
  localStorage.setItem('theme-setting', JSON.stringify(Theme.themeSwitch.checked));
  themeSet = JSON.parse(localStorage.getItem('theme-setting'));
}

function localStorageInsert() {
  themeSet = JSON.parse(localStorage.getItem('theme-setting'));
  Theme.themeSwitch.checked = themeSet;

  themeSet ? Theme.body.classList.add(Theme.DARK) : Theme.body.classList.add(Theme.LIGHT);
};

console.log("Привіт, світ! Життя брутальне!");
