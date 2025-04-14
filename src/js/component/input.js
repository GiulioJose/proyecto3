import { fetchAndRender } from '../gallery.js';

let firstSearch = null;

const setFirstSearch = (query) => {
  if (!firstSearch) firstSearch = query;
};

const getFirstSearch = () => firstSearch;

const setupSearchListeners = () => {
  const searchBtn = document.querySelector('#searchbtn');
  const searchInput = document.querySelector('#searchinput');

  searchBtn.addEventListener('click', () => {
    const query = searchInput.value.trim();
    if (query) {
      fetchAndRender(query);
      searchInput.value = '';
    }
  });

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

export { setupSearchListeners, setFirstSearch, getFirstSearch };
