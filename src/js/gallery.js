import { searchPhotos, getRandomPhotos } from './api/unsplash.js';
import { cardTemplate } from './component/card.js';
import { loaderTemplate } from './component/loader.js';
import { noResultsMessage } from './component/noresults.js';
import { setFirstSearch } from './component/input.js';

const main = document.querySelector('main');

const renderGallery = (photos) => {
  const existingGallery = document.querySelector('.gallery');
  if (existingGallery) existingGallery.remove();

  const loader = document.querySelector('.loader');
  if (loader) loader.remove();

  const gallery = document.createElement('ul');
  gallery.classList.add('gallery');

  photos.forEach(photo => {
    gallery.innerHTML += cardTemplate(photo);
  });

  main.appendChild(gallery);
};

export const fetchAndRender = async (query) => {
  main.innerHTML = loaderTemplate();

  const items = await searchPhotos(query);

  if (items.length > 0) {
    setFirstSearch(query); // ✅ Guardar solo si hubo resultados
    renderGallery(items);
  } else {
    main.innerHTML = '';

    const messageWrapper = document.createElement('div');
    messageWrapper.innerHTML = noResultsMessage(query);
    main.appendChild(messageWrapper);

    main.innerHTML += loaderTemplate();

    const fallbackItems = await searchPhotos('gatos');
    renderGallery(fallbackItems);
  }
};

const loadInitialPhotos = async () => {
  main.innerHTML = loaderTemplate();

  const items = await getRandomPhotos(30);
  renderGallery(items);
};

loadInitialPhotos();
