import searchIcon from '@/assets/icons/search.png';
import darkIcon from '@/assets/icons/dark.png';
import lightIcon from '@/assets/icons/light.png';
import profileImg from '@/assets/images/profile.png';
import logoIcon from '@/assets/icons/logo.png';

import { setupSearchListeners, getFirstSearch } from './component/input.js';
import { fetchAndRender } from './gallery.js';

const Header = (() => {
  const headerTemplate = () => {
    return `
      <img src="${logoIcon}" alt="Logo" class="logo" />
      <input type="text" placeholder="Search" id="searchinput"/>
      <button id="searchbtn">
        <img src="${searchIcon}" alt="Search icon"/>
      </button>
      <button id="darkmodebtn">
        <img src="${darkIcon}" alt="Dark mode icon" id="darkmodeicon" />
      </button>
      <img src="${profileImg}" alt="Profile image" class="profileimg"/>
    `;
  };

  const themeSwitch = () => {
    document.body.classList.toggle("dark");
    const isDark = document.body.classList.contains("dark");
    document.querySelector("#darkmodeicon").src = isDark ? lightIcon : darkIcon;
  };

  const listeners = () => {
    const darkmodebtn = document.querySelector("#darkmodebtn");
    darkmodebtn.addEventListener("click", themeSwitch);

    const logo = document.querySelector(".logo");
    logo.addEventListener("click", () => {
      const firstSearch = getFirstSearch();
      if (firstSearch) {
        fetchAndRender(firstSearch);
      } else {
        location.reload();
      }
    });
  };

  const init = () => {
    document.querySelector("header").innerHTML = headerTemplate();
    listeners();
    setupSearchListeners();
  };

  return { init };
})();

Header.init();
