import { fetchAndRender } from '../gallery.js';

let firstSearch = null;

const setupSearchListeners = () => {
  const searchBtn = document.querySelector('#searchbtn');
  const searchInput = document.querySelector('#searchinput');

  // Búsqueda con botón
  searchBtn.addEventListener('click', () => {
    const query = searchInput.value.trim();
    if (query) {
      if (!firstSearch) firstSearch = query;
      fetchAndRender(query);
      searchInput.value = '';
    }
  });

  // Búsqueda con Enter
  searchInput.addEventListener('keydown', (e) => {
    if (e.key === 'Enter') {
      const query = searchInput.value.trim();
      if (query) {
        if (!firstSearch) firstSearch = query;
        fetchAndRender(query);
        searchInput.value = '';
      }
    }
  });
};

export { setupSearchListeners, firstSearch };

