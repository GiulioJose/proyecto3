import { createApi } from 'unsplash-js';

const unsplash = createApi({
  accessKey: import.meta.env.VITE_ACCESS_KEY,
});

export const searchPhotos = async (keyword) => {
  const response = await unsplash.search.getPhotos({
    query: keyword,
    page: 1,
    perPage: 30,
  });

  return response.response.results; // optimizado: directamente los resultados
};

export const getRandomPhotos = async (count = 10) => {
  try {
    const response = await unsplash.photos.getRandom({ count });
    return response.response;
  } catch (error) {
    console.error("Error al obtener fotos aleatorias:", error);
    return [];
  }
};

