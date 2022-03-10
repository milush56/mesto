import {
  Card
} from './Card.js';
import {
  FormValidator,
  config
} from './FormValidator.js';
import {
  popupImage,
  openGeneralPopup,
  popupCloseImageButton,
  closeGeneralPopup
} from './utils.js';
import {
  initialCards
} from './initialCards.js';

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
const elementContainer = document.querySelector('.elements__container');
const creatButtonFormMesto = formMesto.elements.creat;



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
  creatNewCard(name, link, '#new-card');
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

function creatNewCard(name, link, templateSelector) {
  const card = new Card(name, link, templateSelector);
  const cardElement = card.generateCard();

  elementContainer.prepend(cardElement);
}

popupEditButton.addEventListener('click', openPopupProfile);
popupProfileCloseButton.addEventListener('click', () => closeGeneralPopup(popupProfile));
formResume.addEventListener('submit', editFormPopup);
popupAddButton.addEventListener('click', () => openGeneralPopup(popupMesto));
buttonCloseMesto.addEventListener('click', () => closeGeneralPopup(popupMesto));
formMesto.addEventListener('submit', addNewCard);
popupCloseImageButton.addEventListener('click', () => closeGeneralPopup(popupImage));
popupProfile.addEventListener('mousedown', closeByOverlayClick);
popupMesto.addEventListener('mousedown', closeByOverlayClick);
popupImage.addEventListener('mousedown', closeByOverlayClick);


initialCards.forEach((item) => {
  creatNewCard(item.name, item.link, '#new-card');
});

const resumeFormValidate = new FormValidator(config, '#resume');
resumeFormValidate.enableValidation();

const mestoFormValidate = new FormValidator(config, '#mesto');
mestoFormValidate.enableValidation();