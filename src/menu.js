import menuOne from './images/menu-01.jpg';
import menuTwo from './images/menu-02.jpg';

export default function addMenu() {
  const wrapper = document.createElement('div');
  wrapper.classList.add('menu');

  const imgOne = document.createElement('img');
  const imgTwo = document.createElement('img');
  const paraOne = document.createElement('p');
  const paraTwo = document.createElement('p');

  imgOne.src = menuOne;
  imgTwo.src = menuTwo;
  paraOne.textContent = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut eros ipsum, ullamcorper eget accumsan et, interdum eu metus. Suspendisse ornare gravida mi, nec condimentum velit malesuada a. Vestibulum ornare tortor risus, vel laoreet odio pretium a. Duis ut nibh magna. Nam eget justo nisi. Aliquam venenatis massa felis, sed vulputate dolor posuere vel. Nulla sapien sapien, consectetur sit amet libero nec, elementum sollicitudin urna. In euismod rutrum leo sit amet mollis. Etiam faucibus ligula in eros commodo, ac pellentesque massa laoreet. Aenean eros elit, tincidunt a mauris iaculis, gravida porta dui.';
  paraTwo.textContent = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut eros ipsum, ullamcorper eget accumsan et, interdum eu metus. Suspendisse ornare gravida mi, nec condimentum velit malesuada a. Vestibulum ornare tortor risus, vel laoreet odio pretium a. Duis ut nibh magna. Nam eget justo nisi. Aliquam venenatis massa felis, sed vulputate dolor posuere vel. Nulla sapien sapien, consectetur sit amet libero nec, elementum sollicitudin urna. In euismod rutrum leo sit amet mollis. Etiam faucibus ligula in eros commodo, ac pellentesque massa laoreet. Aenean eros elit, tincidunt a mauris iaculis, gravida porta dui.';

  wrapper.appendChild(imgOne);
  wrapper.appendChild(imgTwo);
  wrapper.appendChild(paraOne);
  wrapper.appendChild(paraTwo);

  return wrapper;
}