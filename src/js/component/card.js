export const cardTemplate = (item) => {
  const date = new Date(item.created_at).toLocaleDateString();

  return `
    <li class="gallery-item">
      <div class="image-wrapper">
        <img 
          class="gallery-img" 
          src="${item.urls.regular}" 
          loading="lazy"
          alt="Imagen de ${item.user.name}" 
        />
        <div class="info">
          <a href="${item.links.html}" target="_blank" class="btn">Visitar</a>
        </div>
        <div class="likes-badge">
          ❤️
          <span>${item.likes}</span>
        </div>
      </div>

      <img 
        class="author-photo" 
        src="${item.user.profile_image.large}" 
        loading="lazy"
        alt="Foto de ${item.user.name}"
        style="color: ${item.color};"
      />

      <div class="author-info">
        <p class="author-name">${item.user.name}</p>
        <p class="photo-date">${date}</p>
      </div>
    </li>
  `;
};
