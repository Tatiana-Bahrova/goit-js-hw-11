import iziToast from 'izitoast';
import SimpleLightbox from 'simplelightbox';

import { createGallery } from './js/render-functions';
import { fetchPhotos } from './js/pixabay-api';

const form = document.querySelector('.js-search-form');
const gallery = document.querySelector('.js-gallery');
const loader = document.querySelector('.js-loader');

const onForm = event => {
  event.preventDefault();

  const userInputValue = form.elements.user_query.value;

  loader.classList.remove('is-hidden');

  fetchPhotos(userInputValue)
    .then(data => {
      if (data.total === 0) {
        iziToast.error({
          message:
            'Sorry, there are no images matching your search query. Please try again!',
        });
      }

      const galleryCardList = data.hits
        .map(imgInfo => createGallery(imgInfo))
        .join('');

      gallery.innerHTML = galleryCardList;

      let lightbox = new SimpleLightbox('.gallery a', {
        captions: true,
        captionsData: 'alt',
        captionDelay: 250,
      });

      lightbox.refresh();
    })
    .catch(error => {
      console.log(error);
    });
  loader.classList.add('is-hidden');
  form.reset();
};

form.addEventListener('submit', onForm);
