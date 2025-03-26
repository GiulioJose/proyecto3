import { searchPhotos, getRandomPhotos } from './api/unsplash.js';
import { cardTemplate } from './component/card.js';
import { loaderTemplate } from './component/loader.js';

const main = document.querySelector('main');

const renderGallery = (photos) => {
  const gallery = document.createElement('ul');
  gallery.classList.add('gallery');

  photos.forEach(photo => {
    gallery.innerHTML += cardTemplate(photo);
  });

  main.innerHTML = '';
  main.appendChild(gallery);
};

export const fetchAndRender = async (query) => {
  main.innerHTML = loaderTemplate();

  const items = await searchPhotos(query);
  renderGallery(items);
};

const loadInitialPhotos = async () => {
  main.innerHTML = loaderTemplate();

  const items = await getRandomPhotos(30);
  renderGallery(items);
};

loadInitialPhotos();
