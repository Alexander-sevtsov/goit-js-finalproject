import { galleryItems } from './gallery-items.js';

const galleryList = document.querySelector('.gallery');

const markUp = galleryItems
  .map(({ preview, original, description }) => {
    return `<li class="gallery__item">
  <a class="gallery__link" href=${original}>
    <img
      class="gallery__image"
      src=${preview}
      data-source=${original}
      alt=${description}
    />
  </a>
</li>`;
  })
  .join('');

galleryList.insertAdjacentHTML('afterbegin', markUp);
galleryList.addEventListener('click', handleClick);

function handleClick(evt) {
  evt.preventDefault();
  const { target } = evt;
  if (!target.classList.contains('gallery__image')) {
    return;
  }
  toggleModal(target.dataset.source, target.getAttribute('alt'));
}

function toggleModal(url, description) {
  const instance = basicLightbox.create(
    `
      <img
        class="gallery__image"
        src=${url}
        alt=${description}
      />>
  `,
    {
      onShow: () => {
        window.addEventListener('keydown', handleKeyboardPress);
      },
      onClose: () => {
        window.removeEventListener('keydown', handleKeyboardPress);
      },
    }
  );
  instance.show();

  function handleKeyboardPress(evt) {
    if (evt.code === 'Escape') {
      instance.close();
    }
  }
}
