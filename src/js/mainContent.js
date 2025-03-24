import uploadIcon from '@/assets/icons/upload.png';
import moreIcon from '@/assets/icons/more.png';

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

// Renderizador
const renderGallery = (items) => {
  const gallery = document.createElement('ul');
  gallery.classList.add('gallery');

  items.forEach(item => {
    gallery.innerHTML += cardTemplate(item);
  });

  document.querySelector('main').appendChild(gallery);
};

// 🔄 Datos de prueba para probar visualmente
const dummyItems = [
  {
    urls: {
      regular: 'https://picsum.photos/id/1015/400/300',
      full: 'https://picsum.photos/id/1015/800/600'
    },
    links: {
      html: 'https://unsplash.com/photos/example1'
    },
    color: '#e60022'
  },
  {
    urls: {
      regular: 'https://picsum.photos/id/1016/400/300',
      full: 'https://picsum.photos/id/1016/800/600'
    },
    links: {
      html: 'https://unsplash.com/photos/example2'
    },
    color: '#1abc9c'
  }
];

// Ejecutar para probar
renderGallery(dummyItems);
