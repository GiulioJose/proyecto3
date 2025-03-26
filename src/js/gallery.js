// API
import { searchPhotos } from './api/unsplash.js';

// Componentes
import { cardTemplate } from './component/card.js';
import { loaderTemplate } from './component/loader.js';

// Referencia al <main>
const main = document.querySelector('main');

// Renderizador de galería
const renderGallery = (items) => {
  const gallery = document.createElement('ul');
  gallery.classList.add('gallery');

  items.forEach(item => {
    gallery.innerHTML += cardTemplate(item);
  });

  main.innerHTML = ''; // limpia el loader
  main.appendChild(gallery);
};

// Búsqueda con loader (async/await)
const fetchAndRender = async (query) => {
  main.innerHTML = loaderTemplate();

  const items = await searchPhotos(query);
  renderGallery(items);
};

// Primera carga
fetchAndRender('carros');

export { renderGallery, fetchAndRender };
