const popupEditButton = document.querySelector('.profile__edit-button');
const popup = document.querySelector('.popup');
const popupCloseButton = document.querySelector('.popup__close');
let savePopupButton = document.querySelector('.popup__button');
let nameProfile = document.querySelector('.profile__title');
let postProfile = document.querySelector('.profile__subtitle');
let nameForm = document.getElementById('name');
let postForm = document.getElementById('post');

popupEditButton.addEventListener('click', function() {
  popup.classList.add('popup_opened')
});

function popupClose() {
  popup.classList.remove('popup_opened');
}

popupCloseButton.addEventListener('click', popupClose);

nameForm.value = nameProfile.textContent;
postForm.value = postProfile.textContent;

function formPopup (evt) {
  evt.preventDefault();

  nameProfile.textContent = nameForm.value;
  postProfile.textContent = postForm.value;
  popupClose();
}

savePopupButton.addEventListener('click', formPopup); 
