// API
import { searchPhotos } from './api/unsplash.js';

// Assets
import uploadIcon from '@/assets/icons/upload.png';
import moreIcon from '@/assets/icons/more.png';

// Plantilla para cada tarjeta
const cardTemplate = (item) => {
  return `
    <li class="gallery-item" style="background-image: url(${item.urls.regular}); border: 10px solid ${item.color}">
      <div class="info">
        <div class="save-btn">
          <button>Guardar</button>
        </div>
        <div class="links">
          <a href="${item.links.html}" class="full-link">${item.links.html}</a>
          <div>
            <a href="${item.urls.full}" target="_blank" class="links-icon">
              <img src="${uploadIcon}" alt="Upload icon" />
            </a>
            <a href="#null" class="links-icon">
              <img src="${moreIcon}" alt="More icon" />
            </a>    
          </div>
        </div>
      </div>
    </li>
  `;
};

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
searchPhotos('nature').then(items => {
  renderGallery(items);
});

export { renderGallery };