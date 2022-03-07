import { Card } from './Card.js';
import { FormValidator, config } from './FormValidator.js';


const initialCards = [
  {
    name: 'Архыз',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/arkhyz.jpg'
  },
  {
    name: 'Челябинская область',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/chelyabinsk-oblast.jpg'
  },
  {
    name: 'Иваново',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/ivanovo.jpg'
  },
  {
    name: 'Камчатка',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kamchatka.jpg'
  },
  {
    name: 'Холмогорский район',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kholmogorsky-rayon.jpg'
  },
  {
    name: 'Байкал',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/baikal.jpg'
  }
];

const popupEditButton = document.querySelector('.profile__edit-button');
const popupProfile = document.querySelector('.popup-profile');
const popupProfileCloseButton = document.querySelector('.popup-profile__close');
const nameProfile = document.querySelector('.profile__title');
const postProfile = document.querySelector('.profile__subtitle');
const nameForm = document.querySelector('.popup__item_name');
const postForm = document.querySelector('.popup__item_post');
const formResume = document.forms.resume;
const popupAddButton = document.querySelector('.profile__add-button');
const popupMesto = document.querySelector('.popup-mesto');
const buttonCloseMesto = document.querySelector('.popup-mesto__close');
const formMesto = document.forms.mesto;
const nameImageForm = document.querySelector('.popup__item_name-image');
const linkImageForm = document.querySelector('.popup__item_link');
export const popupImage = document.querySelector('.image-popup');
export const popupCloseImageButton = document.querySelector('.image-popup__close');
const ESC_CODE = 'Escape';
const creatButtonFormMesto = formMesto.elements.creat;
export const linkImagePopup = document.querySelector('.image-popup__image');

function openGeneralPopup(item) {
  item.classList.add('popup_opened');
  //document.addEventListener('keydown', closeByEsc);
}

function closeGeneralPopup(item) {
  item.classList.remove('popup_opened');
  //document.removeEventListener('keydown', closeByEsc);
}

function openPopupProfile() {
  openGeneralPopup(popupProfile);
  nameForm.value = nameProfile.textContent;
  postForm.value = postProfile.textContent;
}

function editFormPopup(evt) {
  evt.preventDefault();
  nameProfile.textContent = nameForm.value;
  postProfile.textContent = postForm.value;
  closeGeneralPopup(popupProfile);
}

function addNewCard(evt) {
  evt.preventDefault();

  const name = nameImageForm.value;
  const link = linkImageForm.value;
  const card = new Card(name, link);
  const cardElement = card.generateCard();
  document.querySelector('.elements__container').prepend(cardElement);
  closeGeneralPopup(popupMesto);
  formMesto.reset();
  creatButtonFormMesto.classList.add('popup__button_inactive');
  creatButtonFormMesto.setAttribute('disabled', true);
} 

function closeByOverlayClick(evt) {
  if (evt.target.classList.contains('popup')) {
    const openedPopup = document.querySelector('.popup_opened');
    closeGeneralPopup(openedPopup);
  }
}

function closeByEsc(evt) {
  if (evt.key === ESC_CODE && popupProfile.classList.contains('popup_opened') || popupMesto.classList.contains('popup_opened') || popupImage.classList.contains('popup_opened')) {
    const openedPopup = document.querySelector('.popup_opened');
    closeGeneralPopup(openedPopup);
  }
}

popupEditButton.addEventListener('click', openPopupProfile);
popupProfileCloseButton.addEventListener('click', () => closeGeneralPopup(popupProfile));
formResume.addEventListener('submit', editFormPopup);
popupAddButton.addEventListener('click', () => openGeneralPopup(popupMesto));
buttonCloseMesto.addEventListener('click', () => closeGeneralPopup(popupMesto));
formMesto.addEventListener('submit', addNewCard);
//popupCloseImageButton.addEventListener('click', () => closeGeneralPopup(popupImage));
popupProfile.addEventListener('mousedown', closeByOverlayClick);
popupMesto.addEventListener('mousedown', closeByOverlayClick);
popupImage.addEventListener('mousedown', closeByOverlayClick);
document.addEventListener('keydown', closeByEsc);



initialCards.forEach((item) => {
  const card = new Card(item.name, item.link);
  const cardElement = card.generateCard();

  document.querySelector('.elements__container').prepend(cardElement);
});

const resumeFormValidate = new FormValidator(config, '#resume');
resumeFormValidate.enableValidation();

const mestoFormValidate = new FormValidator(config, '#mesto');
mestoFormValidate.enableValidation();