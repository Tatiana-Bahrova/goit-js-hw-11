export const createGallery = img => {
  return `
  <li class="gallery-card">
  <a href="${img.largeImageURL}" class="gallery-link">
  <img src="${img.webformatURL}" alt="${img.tags}" class="gallery-img" />
  </a>
  <ul class='gallery-li'>
  <li class='gallery-li-info'>
  <span class="gallery-text">Likes</span>
  <span class="gallery-img-info">${img.likes}</span>
  </li>
  <li class='gallery-li-info'>
  <span class="gallery-text">Views</span>
  <span class="gallery-img-info">${img.views}</span>
  </li>
  <li class='gallery-li-info'>
  <span class="gallery-text">Comments</span>
   <span class="gallery-img-info">${img.comments}</span>
   </li>
  <li class='gallery-li-info'>
  <span class="gallery-text">Downloads</span>
  <span class="gallery-img-info">${img.downloads}</span>
  </li>
</ul>
</li>
    `;
};
