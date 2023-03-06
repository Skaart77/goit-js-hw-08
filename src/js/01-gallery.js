// Add imports above this line
import { galleryItems } from './gallery-items';
import SimpleLightbox from "simplelightbox";
import "simplelightbox/dist/simple-lightbox.min.css";
// Change code below this line

console.log(galleryItems);

const picturesContainer = document.querySelector('.gallery');

// Формуємо розмітку галереї на основі масиву даних
const createGalleryMarkup = galleryItems => {
    return galleryItems.map(({ original, preview, description })=> {
        return `
       <a class="gallery__item" href="${original}">
  <img class="gallery__image" src=${preview} alt="${description}" />
</a>`;
    }).join('');
};

picturesContainer.insertAdjacentHTML('beforeend', createGalleryMarkup(galleryItems));

var lightbox = new SimpleLightbox('.gallery a', {
    overlayOpacity: 0.5,
    captionDelay: 250,
    captionsData: 'alt',
});