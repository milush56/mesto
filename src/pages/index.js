import './index.css';
import {
  Card
} from '../components/Card.js';
import {
  FormValidator
} from '../components/FormValidator.js';
import { config } from '../components/config.js';
import {
  popupEditButton,
  nameProfile,
  postProfile,
  nameForm,
  postForm,
  popupAddButton
} from '../components/utils.js';
import {
  initialCards
} from '../components/initialCards.js';
import Section from '../components/Section.js';
import UserInfo from '../components/UserInfo.js';
import PopupWithImage from '../components/PopupWithImage.js';
import PopupWithForm from '../components/PopupWithForm.js';


const userInfo = new UserInfo(nameProfile, postProfile);
const popupProfile = new PopupWithForm('.popup-profile', {
  submitEvent: (item) => {
    userInfo.setUserInfo(item);
    popupProfile.close();
  }
});

popupEditButton.addEventListener('click', () => {
  const userPost = userInfo.getUserInfo();
  nameForm.value = userPost.name;
  postForm.value = userPost.info;
  popupProfile.open();
  resumeFormValidate.toggleButtonState();
});

popupProfile.setEventListeners();

const creatCard = (name, link, templateSelector) => {
  const card = new Card(name, link, templateSelector, handleCardClick); 
  const cardElement = card.generateCard();
  creatNewCard.addItem(cardElement);
};

const popupMesto = new PopupWithForm('.popup-mesto', {
  submitEvent: (item) => {
    creatCard(item.name, item.link, '#new-card', handleCardClick);
    popupMesto.close();
  }
});
popupAddButton.addEventListener('click', () => {
  popupMesto.open();
  mestoFormValidate.toggleButtonState();
});

popupMesto.setEventListeners();

const popupWithImage = new PopupWithImage('.image-popup');
const handleCardClick = (name, link) => {
  popupWithImage.open(name, link);
};

popupWithImage.setEventListeners();

const creatNewCard = new Section({
  renderer: (item) => {
    creatCard(item.name, item.link, '#new-card', handleCardClick);
  }
}, '.elements__container');
creatNewCard.renderItems(initialCards);

const resumeFormValidate = new FormValidator(config, '#resume');
resumeFormValidate.enableValidation();

const mestoFormValidate = new FormValidator(config, '#mesto');
mestoFormValidate.enableValidation();