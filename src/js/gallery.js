import { searchPhotos, getRandomPhotos } from './api/unsplash.js';
import { cardTemplate } from './component/card.js';
import { loaderTemplate } from './component/loader.js';
import { noResultsMessage } from './component/noresults.js';

const main = document.querySelector('main');

const renderGallery = (photos) => {
  // Elimina galería anterior si existe
  const existingGallery = document.querySelector('.gallery');
  if (existingGallery) existingGallery.remove();

  // Elimina loader si está presente
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
    renderGallery(items);
  } else {
    // Limpia todo
    main.innerHTML = '';

    // Muestra mensaje de no resultados
    const messageWrapper = document.createElement('div');
    messageWrapper.innerHTML = noResultsMessage(query);
    main.appendChild(messageWrapper);

    // Muestra loader
    main.innerHTML += loaderTemplate();

    // Espera resultados para "gatos"
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
