import {
  Card
} from './Card.js';
import {
  FormValidator,
  config
} from './FormValidator.js';
import {
  popupEditButton,
  nameProfile,
  postProfile,
  nameForm,
  postForm,
  popupAddButton
} from './utils.js';
import {
  initialCards
} from './initialCards.js';
import Section from './Section.js';
import UserInfo from './UserInfo.js';
import PopupWithImage from './PopupWithImage.js';
import PopupWithForm from './PopupWithForm.js';


const userInfo = new UserInfo(nameProfile, postProfile);
const popupProfile = new PopupWithForm('.popup-profile', {
  submitEvent: (item) => {
    console.log(item);
    userInfo.setUserInfo(item);
    popupProfile.close();
  }
});

popupEditButton.addEventListener('click', () => {
  const userPost = userInfo.getUserInfo();
  nameForm.value = userPost.name;
  postForm.value = userPost.info;
  popupProfile.open();
  console.log(userPost);
});

popupProfile.setEventListeners();

const popupMesto = new PopupWithForm('.popup-mesto', {
  submitEvent: (item) => {
    console.log(item);
    const card = new Card(item.name, item.link, '#new-card', handleCardClick);
    const cardElement = card.generateCard();
    creatNewCard.addItem(cardElement);
    popupMesto.close();
  }
});
popupAddButton.addEventListener('click', () => {
  popupMesto.open();
});

popupMesto.setEventListeners();

const popupWithImage = new PopupWithImage('.image-popup');
const handleCardClick = (name, link) => {
  popupWithImage.open(name, link);
  popupWithImage.setEventListeners();
};

const creatNewCard = new Section({
  items: initialCards,
  renderer: (item) => {
    const card = new Card(item.name, item.link, '#new-card', handleCardClick);
    const cardElement = card.generateCard();
    creatNewCard.addItem(cardElement);
  }
}, '.elements__container');
creatNewCard.renderItems();

const resumeFormValidate = new FormValidator(config, '#resume');
resumeFormValidate.enableValidation();

const mestoFormValidate = new FormValidator(config, '#mesto');
mestoFormValidate.enableValidation();