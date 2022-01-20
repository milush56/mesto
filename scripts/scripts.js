const popupEditButton = document.querySelector('.profile__edit-button');
const popup = document.querySelector('.popup');
const popupCloseButton = document.querySelector('.popup__close');
/*let savePopupButton = document.querySelector('.popup__button');*/
let nameProfile = document.querySelector('.profile__title');
let postProfile = document.querySelector('.profile__subtitle');
let nameForm = document.getElementById('name');
let postForm = document.getElementById('post');
let formResume = document.getElementById('resume');

function openPopup() {
  popup.classList.add('popup_opened');
  nameForm.value = nameProfile.textContent;
  postForm.value = postProfile.textContent;
}

function closePopup() {
  popup.classList.remove('popup_opened');
}

function formPopup (evt) {
  evt.preventDefault();
  nameProfile.textContent = nameForm.value;
  postProfile.textContent = postForm.value;
  closePopup();
}
popupEditButton.addEventListener('click', openPopup);
popupCloseButton.addEventListener('click', closePopup);
formResume.addEventListener('submit', formPopup); 
