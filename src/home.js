import backgroundImageOne from './images/front-image-01.jpg';
import backgroundImageTwo from './images/front-image-02.jpg';
import backgroundImageThree from './images/front-image-03.jpg';

export default function addHome() {
  const wrapper = document.createElement('div');
  const frontImageOne = document.createElement('img');
  const frontImageTwo = document.createElement('img');
  const frontImageThree = document.createElement('img');

  frontImageOne.src = backgroundImageOne;
  frontImageTwo.src = backgroundImageTwo;
  frontImageThree.src = backgroundImageThree;

  wrapper.classList.add('home');
  wrapper.appendChild(frontImageOne);
  wrapper.appendChild(frontImageTwo);
  wrapper.appendChild(frontImageThree);

  return wrapper;
}