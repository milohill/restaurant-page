import header from './header';
import home from './home';
import menu from './menu';
import contact from './contact';
import './styles/style.css';

const body = document.querySelector('body');
const content = document.querySelector('#content');

body.insertBefore(header(), content);
content.appendChild(home());

function changeTabs() {
  const el = this.dataset.tab;

  if (el === 'home') {
    content.innerHTML = '';
    content.appendChild(home());
  }
  if (el === 'menu') {
    content.innerHTML = '';
    content.appendChild(menu());
  }
  if (el === 'contact') {
    content.innerHTML = '';
    content.appendChild(contact());
  }
}

const headerButtons = document.querySelectorAll('.nav-button');
headerButtons.forEach(headerButton => headerButton.addEventListener('click', changeTabs));