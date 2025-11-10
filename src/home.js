// home page
import wrapImg from './images/wrap.png';
import spitImg from './images/spit.png';

export default function loadHome() {
  const content = document.getElementById('content');
  content.textContent = '';

  const hero = document.createElement('section');
  hero.classList.add('hero');

  // left image
  const leftImg = document.createElement('img');
  leftImg.src = wrapImg;
  leftImg.alt = 'Shawarma wrap in hand';
  leftImg.classList.add('hero__img', 'hero__img--left');

  // right image
  const rightImg = document.createElement('img');
  rightImg.src = spitImg;
  rightImg.alt = 'Shawarma turning on the spit';
  rightImg.classList.add('hero__img', 'hero__img--right');
 
  // center text
  const textBox = document.createElement('div');
  textBox.classList.add('hero__text');
 
  const headline = document.createElement('h1');
  headline.textContent = 'Juicy. Flame-Grilled. Authentic.';
 
  const intro = document.createElement('p');
  intro.textContent = 'An invitation to savor the art of real shawarma. At ';
 
  const strong = document.createElement('span');
  strong.textContent = 'Habibi Shawarma';
  strong.classList.add('hero__name');
 
  intro.appendChild(strong);
  intro.append(
    ', every wrap turns slowly on the spit, marinated in bold spices, grilled to perfection, and served fresh with warmth and flavor.'
  );
 
  const ctaBtn = document.createElement('button');
  ctaBtn.textContent = 'Order Now';
  ctaBtn.classList.add('hero__cta');
 
  textBox.append(headline, intro, ctaBtn);
  hero.append(leftImg, textBox, rightImg);
 
  content.appendChild(hero);
}
