// API
import { searchPhotos } from './api/unsplash.js';

// Componentes
import { cardTemplate } from './component/card.js';

// Renderizador de galería
const renderGallery = (items) => {
  const gallery = document.createElement('ul');
  gallery.classList.add('gallery');

  items.forEach(item => {
    gallery.innerHTML += cardTemplate(item);
  });

  document.querySelector('main').appendChild(gallery);
};

// Ejecutar búsqueda real
searchPhotos('carros').then(items => {
  renderGallery(items);
});

export { renderGallery };
