import chefImage from './images/chef.jpg'

export default function addContact() {
  const wrapper = document.createElement('div');
  wrapper.classList.add('contact');

  const img = document.createElement('img');
  const para = document.createElement('button');
  img.src = chefImage;
  para.textContent = 'Reserve';

  wrapper.appendChild(img);
  wrapper.appendChild(para);

  return wrapper;
}