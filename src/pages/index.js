import './index.css';
import {
  Card
} from '../components/Card.js';
import {
  FormValidator
} from '../components/FormValidator.js';
import {
  config
} from '../components/config.js';
import {
  popupEditButton,
  nameProfile,
  postProfile,
  avatarProfile,
  nameForm,
  postForm,
  popupAddButton,
  avatarEdit
} from '../components/utils.js';
import Section from '../components/Section.js';
import UserInfo from '../components/UserInfo.js';
import PopupWithImage from '../components/PopupWithImage.js';
import PopupWithForm from '../components/PopupWithForm.js';
import {
  api
} from '../components/Api.js';

let userId;

api.getProfile()
  .then((res) => {
    userInfo.setUserInfo(res);
    userInfo.setUserAvatar(res);
    userId = res._id;
  });


api.getInitialCards()
  .then((cardList) => {
    cardList.forEach(data => {
      creatNewCard.addItem(creatCard(data.name, data.link, data.likes, data._id, userId, data.owner._id, '#new-card'));
    });
  });




const userInfo = new UserInfo(nameProfile, postProfile, avatarProfile);
const popupProfile = new PopupWithForm('.popup-profile', {
  submitEvent: (item) => {
    popupProfile.renderLoading(true);
    api.editProfile(item.name, item.about)
      .then(() => {
        userInfo.setUserInfo(item);
        popupProfile.close();
      });
  }
});

const popupAvatar = new PopupWithForm('.popup-avatar',{
  submitEvent: (item) => {
    popupProfile.renderLoading(true);
    api.editAvatar(item.avatar)
      .then(() => {
        userInfo.setUserAvatar(item);
        popupAvatar.close();
      });
  }
});

popupAvatar.setEventListeners();

avatarEdit.addEventListener('click', () => {
  popupAvatar.open();
});

popupEditButton.addEventListener('click', () => {
  const userPost = userInfo.getUserInfo();
  nameForm.value = userPost.name;
  postForm.value = userPost.info;
  popupProfile.open();
  resumeFormValidate.toggleButtonState();
});

popupProfile.setEventListeners();

const creatCard = (name, link, likes, id, userId, ownerId, templateSelector) => {
  const card = new Card(name, link, likes, id, userId, ownerId, templateSelector, handleCardClick, (id) => {
      popupDelete.open();
      popupDelete.replaceSubmitEvent(() => {
        console.log(id);
        api.deleteCardMesto(id)
          .then(() => {
            card.removeCard();
            popupDelete.close();
          });
      });
    },
    (id) => {
      if (card.isLiked()) {
        api.deleteLike(id)
          .then((res) => {
            card.setLikes(res.likes);
          });
      } else {
        api.addLike(id)
          .then((res) => {
            card.setLikes(res.likes);
          });
      }
    });
  return card.generateCard();
};

const popupMesto = new PopupWithForm('.popup-mesto', {
  submitEvent: (item) => {
    popupProfile.renderLoading(true);
    api.addCardMesto(item.name, item.link)
      .then((res) => {
        creatNewCard.addItem(creatCard(res.name, res.link, res.likes, res._id, userId, res.owner._id, '#new-card'));
        popupMesto.close();
      });
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

const popupDelete = new PopupWithForm('.popup-delete', {});

popupDelete.setEventListeners();

const creatNewCard = new Section({
  renderer: (item) => {
    creatNewCard.addItem(creatCard(item.name, item.link, item.likes, item._id, '#new-card'));
  }
}, '.elements__container');

const resumeFormValidate = new FormValidator(config, '#resume');
resumeFormValidate.enableValidation();

const mestoFormValidate = new FormValidator(config, '#mesto');
mestoFormValidate.enableValidation();