export default function addHeader() {
  const header = document.createElement('div');
  const logo = document.createElement('div');
  const nav = document.createElement('div');
  const navButtonOne = document.createElement('div');
  const navButtonTwo = document.createElement('div');
  const navButtonThree = document.createElement('div');

  header.classList.add('header');
  logo.classList.add('logo');
  nav.classList.add('nav');
  navButtonOne.classList.add('nav-button');
  navButtonTwo.classList.add('nav-button');
  navButtonThree.classList.add('nav-button');

  logo.textContent = "Steak House";

  nav.appendChild(navButtonOne);
  nav.appendChild(navButtonTwo);
  nav.appendChild(navButtonThree);

  navButtonOne.textContent = 'Home';
  navButtonTwo.textContent = 'Menu';
  navButtonThree.textContent = 'Contact';

  navButtonOne.dataset.tab = 'home';
  navButtonTwo.dataset.tab = 'menu';
  navButtonThree.dataset.tab = 'contact';

  header.appendChild(logo);
  header.appendChild(nav);

  return header;
}