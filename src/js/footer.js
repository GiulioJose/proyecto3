const templateFooter = () => {
  return `
    <h4>Copyright 2025 - Inspirest & Rock the Code - by Giulio Spaziani</h4>
  `;
};

export const printFooterTemplate = () => {
  document.querySelector("footer").innerHTML = templateFooter();
};

printFooterTemplate();


