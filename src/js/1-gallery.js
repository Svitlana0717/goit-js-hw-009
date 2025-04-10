import { galleryItems } from './images.js';
import SimpleLightbox from "simplelightbox";
import "simplelightbox/dist/simple-lightbox.min.css";

// 1. Знаходимо список галереї
const galleryList = document.querySelector('.gallery');

// 2. Генеруємо розмітку
const galleryMarkup = galleryItems.map(({ preview, original, description }) => {
  return `
    <li class="gallery-item">
      <a class="gallery-link" href="${original}">
        <img class="gallery-image" src="${preview}" alt="${description}" />
      </a>
    </li>
  `;
}).join('');

// 3. Додаємо розмітку до DOM
galleryList.innerHTML = galleryMarkup;

// 4. Ініціалізуємо бібліотеку SimpleLightbox
const lightbox = new SimpleLightbox('.gallery a', {
  captionsData: 'alt',
  captionPosition: 'bottom',
  captionDelay: 250,
});
