import { galleryItems } from './gallery-items.js';

// Change code below this line
const galleryList = document.querySelector('.gallery');
console.log(galleryList);

const markUp = galleryItems
  .map(({ preview, original, description }) => {
    return `
    <li class="gallery__item">
        <a class="gallery__link" href=${original}>
            <img class="gallery__image"
            src=${preview}
            alt=${description} />
        </a>
    </li>`;
  })
  .join('');

galleryList.insertAdjacentHTML('afterbegin', markUp);

  let galleryModal = new SimpleLightbox('.gallery__link', {
    captions: true,
    captionType: 'attr',
    captionsData: `alt`,
    captionDelay: 250,
  });

