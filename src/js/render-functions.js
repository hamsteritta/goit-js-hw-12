import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';

export function render(imgList) {
  const galleryBox = document.querySelector('.gallery');
  const renderItems = imgList
    .map(
      ({
        webformatURL,
        largeImageURL,
        tags,
        likes,
        views,
        comments,
        downloads,
      }) => `
        <div class="gallery-item">
          <a href="${largeImageURL}">
            <img src="${webformatURL}" alt="${tags}" loading="lazy" />
          </a>
          <div class="info">
            <p><b>Likes</b><span>${likes}</span></p>
            <p><b>Views</b><span>${views}</span></p>
            <p><b>Comments</b><span>${comments}</span></p>
            <p><b>Downloads</b><span>${downloads}</span></p>
          </div>
        </div>
    `
    );
  galleryBox.innerHTML = renderItems.join('');

  new SimpleLightbox('.gallery-item a', {
    captionsData: 'alt',
    captionDelay: 250,
  }).refresh();
}