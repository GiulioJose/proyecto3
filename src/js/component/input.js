import { fetchAndRender } from '../gallery.js';

const setupSearchListeners = () => {
  const searchBtn = document.querySelector('#searchbtn');
  const searchInput = document.querySelector('#searchinput');

  // Búsqueda con botón
  searchBtn.addEventListener('click', () => {
    const query = searchInput.value.trim();
    if (query) {
      fetchAndRender(query);
      searchInput.value = '';
    }
  });

  // Búsqueda con Enter
  searchInput.addEventListener('keydown', (e) => {
    if (e.key === 'Enter') {
      const query = searchInput.value.trim();
      if (query) {
        fetchAndRender(query);
        searchInput.value = '';
      }
    }
  });
};

// Ejecutar primera búsqueda al cargar
fetchAndRender('carros');

export { setupSearchListeners };
