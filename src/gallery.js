import img1 from './images/1.jpg';
import img2 from './images/2.jpg';
import img3 from './images/3.jpg';
import img4 from './images/4.jpg';
import img5 from './images/5.jpg';
import img6 from './images/6.jpg';

export default function loadGallery() {
  const content = document.getElementById('content');
  content.textContent = '';

  const section = document.createElement('section');
  section.classList.add('gallery-section');

  const title = document.createElement('h2');
  title.textContent = 'Gallery';
  title.classList.add('gallery__title');

  const subtitle = document.createElement('p');
  subtitle.textContent = 'A glimpse into the art of authentic shawarma';
  subtitle.classList.add('gallery__subtitle');

  const galleryGrid = document.createElement('div');
  galleryGrid.classList.add('gallery__grid');

  const images = [img1, img2, img3, img4, img5, img6];
  
  images.forEach((imgSrc, index) => {
    const imgWrapper = document.createElement('div');
    imgWrapper.classList.add('gallery__item');
    
    const img = document.createElement('img');
    img.src = imgSrc;
    img.alt = `Habibi Shawarma Gallery Image ${index + 1}`;
    img.classList.add('gallery__img');
    
    imgWrapper.appendChild(img);
    galleryGrid.appendChild(imgWrapper);
  });

  const credit = document.createElement('p');
  credit.textContent = 'Supported by Unsplash - Free Images (2025)';
  credit.classList.add('gallery__credit');

  section.append(title, subtitle, galleryGrid, credit);
  content.appendChild(section);
}

