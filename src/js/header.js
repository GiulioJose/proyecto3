import searchIcon from '@/assets/icons/search.png';
import darkIcon from '@/assets/icons/dark.png';
import lightIcon from '@/assets/icons/light.png';
import profileImg from '@/assets/images/profile.png';
import logoIcon from '@/assets/icons/logo.png';

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
};

const listeners = () => {
  const darkmodebtn = document.querySelector("#darkmodebtn");
  darkmodebtn.addEventListener("click", () => {
    themeSwitch();
    const theme = document.body.classList.contains("dark");
    if (theme) {
      document.querySelector("#darkmodeicon").src = lightIcon;
    } else {
      document.querySelector("#darkmodeicon").src = darkIcon;
    }
  });
};

const printHeaderTemplate = () => {
  document.querySelector("header").innerHTML = headerTemplate();
  listeners();
};

printHeaderTemplate();
