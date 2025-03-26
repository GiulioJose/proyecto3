const noResultsMessage = (originalQuery) => {
  return `
    <div class="no-results-message">
      <p>No se encontraron resultados para "<strong>${originalQuery}</strong>".</p>
      <p>Mostrando resultados para "<strong>gatos</strong>".</p>
      <p>Intenta con otra palabra o frase más específica.</p>
    </div>
  `;
};

export { noResultsMessage };
