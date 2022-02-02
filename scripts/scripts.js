const popupEditButton = document.querySelector('.profile__edit-button');
const popup = document.querySelector('.popup');
const popupCloseButton = document.querySelector('.popup__close');
const nameProfile = document.querySelector('.profile__title');
const postProfile = document.querySelector('.profile__subtitle');
const nameForm = document.getElementById('name');
const postForm = document.getElementById('post');
const formResume = document.getElementById('resume');
const newCardTemplate = document.querySelector('#new-card').content;
const elementContainer = document.querySelector('.elements__container');
const popupAddButton = document.querySelector('.profile__add-button');
const popupMesto = document.getElementById('popup-mesto');
const buttonCloseMesto = document.getElementById('close-mesto');
const formMesto = document.getElementById('mesto');
const nameImageForm = document.getElementById('name-image');
const linkImageForm = document.getElementById('link-image');
const popupImage = document.querySelector('.image-popup');
const popupCloseImageButton = document.querySelector('.image-popup__close');
const nameElements = document.querySelectorAll('.element__place-name');

function openGeneralPopup(item) {
  item.classList.add('popup_opened');
}

function closeGeneralPopup(item) {
  item.classList.remove('popup_opened');
} 

function openPopup() {
  openGeneralPopup(popup);
  nameForm.value = nameProfile.textContent;
  postForm.value = postProfile.textContent;
}

function closePopup() {
  closeGeneralPopup(popup);
} 

function editFormPopup(evt) {
  evt.preventDefault();
  nameProfile.textContent = nameForm.value;
  postProfile.textContent = postForm.value;
  closePopup();
}

function addCard(element) {
  const addCardElement = newCardTemplate.cloneNode(true);

  addCardElement.querySelector('.element__place-name').textContent = element.name;
  addCardElement.querySelector('.element__image').src = element.link;
  addCardElement.querySelector('.element__image').alt = element.name;

  addCardElement.querySelector('.element__image').addEventListener('click', function() {
    openImage();
    document.querySelector('.image-popup__image').src = element.link;
    document.querySelector('.image-popup__title').textContent = element.name;
  })

  addCardElement.querySelector('.element__like').addEventListener('click', function(evt) {
    evt.target.classList.toggle('element__like_active');
  })

  addCardElement.querySelector('.element__delete').addEventListener('click', function(event) {
    event.target.closest('.element').remove();
  })

  elementContainer.append(addCardElement);
};

function render() {
  initialCards.forEach(addCard);
};

render();


function openPopupMesto() {
  openGeneralPopup(popupMesto);
}

function closePopupMesto() {
  closeGeneralPopup(popupMesto);
}

function addNewCard(evt) {
  evt.preventDefault();
  
  const newCardElement = newCardTemplate.querySelector('.element').cloneNode(true);

  newCardElement.querySelector('.element__image').src = linkImageForm.value;
  newCardElement.querySelector('.element__image').alt = nameImageForm.value;
  newCardElement.querySelector('.element__place-name').textContent = nameImageForm.value;
  newCardElement.querySelector('.element__like').addEventListener('click', function(evt) {
    evt.target.classList.toggle('element__like_active');
    })
  newCardElement.querySelector('.element__delete').addEventListener('click', function(evt) {
    event.target.closest('.element').remove();
    })
  newCardElement.querySelector('.element__image').addEventListener('click', function() {
    openImage();
    document.querySelector('.image-popup__image').src = newCardElement.querySelector('.element__image').src;
    document.querySelector('.image-popup__title').textContent = newCardElement.querySelector('.element__place-name').textContent;
  })
  newCardElement.querySelector('.element__like').addEventListener('click', function() {
    evt.target.classList.toggle('element__like_active');
  })
  newCardElement.querySelector('.element__delete').addEventListener('click', function(event) {
    event.target.closest('.element').remove();
  })

  elementContainer.prepend(newCardElement);
  closePopupMesto();
};

function openImage() {
  popupImage.classList.add('image-popup_opened');
}

function closeImagePopup() {
  popupImage.classList.remove('image-popup_opened');
}

popupEditButton.addEventListener('click', openPopup);
popupCloseButton.addEventListener('click', closePopup);
formResume.addEventListener('submit', editFormPopup);
popupAddButton.addEventListener('click', openPopupMesto);
buttonCloseMesto.addEventListener('click', closePopupMesto);
formMesto.addEventListener('submit', addNewCard);
popupCloseImageButton.addEventListener('click', closeImagePopup);