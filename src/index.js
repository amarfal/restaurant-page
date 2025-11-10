import './style.css';
import loadHome from './home';
import loadMenu from './menu';
import loadContact from './contact';

function setActiveButton(tabName) {
  const buttons = document.querySelectorAll('.nav__btn');
  buttons.forEach((btn) => {
    btn.classList.toggle('nav__btn--active', btn.dataset.tab === tabName);
  });
}

function initNav() {
  const buttons = document.querySelectorAll('.nav__btn');

  buttons.forEach((button) => {
    button.addEventListener('click', () => {
      const tab = button.dataset.tab;

      if (tab === 'home') {
        loadHome();
      } else if (tab === 'menu') {
        loadMenu();
      } else if (tab === 'contact' || tab === 'order') {
        loadContact();
      }

      setActiveButton(tab);
    });
  });
}

// initial page load
document.addEventListener('DOMContentLoaded', () => {
  initNav();
  loadHome();    
  setActiveButton('home');
});