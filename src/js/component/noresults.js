const noResultsMessage = (originalQuery) => {
  return `
    <div class="no-results-message">
      <p>Oops… no encontramos resultados para “${originalQuery}”.</p>
      <p>Pero no te preocupes, te mostramos imágenes de “gatos” 🐱</p>
      <p>Prueba con otra palabra más específica.</p>
    </div>
  `;
};

export { noResultsMessage };

