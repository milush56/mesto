export const popupImage = document.querySelector('.image-popup');
export const popupCloseImageButton = document.querySelector('.image-popup__close');
export const linkImagePopup = document.querySelector('.image-popup__image');
const ESC_CODE = 'Escape';

export function openGeneralPopup(item) {
  item.classList.add('popup_opened');
  document.addEventListener('keydown', closeByEsc);
}

export function closeGeneralPopup(item) {
  item.classList.remove('popup_opened');
  document.removeEventListener('keydown', closeByEsc);
}

export function closeByEsc(evt) {
  if (evt.key === ESC_CODE) {
    const openedPopup = document.querySelector('.popup_opened');
    closeGeneralPopup(openedPopup);
  }
}

