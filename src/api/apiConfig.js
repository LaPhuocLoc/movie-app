const apiConfig = {
  baseUrl: 'https://api.themoviedb.org/3/',
  apiKey: 'dd78a3b697fa90f68438b62065e19aa1',
  originalImage: (imgPath) => `https://image.tmdb.org/t/p/original/${imgPath}`,
  w500Image: (imgPath) => `https://image.tmdb.org/t/p/w500/${imgPath}`,
};
export default apiConfig;
