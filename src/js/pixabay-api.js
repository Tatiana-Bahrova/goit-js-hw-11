const BASE_URL = 'https://pixabay.com/api/';

export const fetchPhotos = inputValue => {
  const photosParams = new URLSearchParams({
    key: '45736267-1794b9732fa70958098f9f4da',
    q: inputValue,
    image_type: 'photo',
    orientation: 'horizontal',
    safesearch: true,
  });

  return fetch(`${BASE_URL}?${photosParams}`).then(response => {
    if (!response.ok) {
      throw new Error(response.status);
    }
    return response.json();
  });
};
