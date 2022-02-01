const popupEditButton = document.querySelector('.profile__edit-button');
const popup = document.querySelector('.popup');
const popupCloseButton = document.querySelector('.popup__close');
const nameProfile = document.querySelector('.profile__title');
const postProfile = document.querySelector('.profile__subtitle');
const nameForm = document.getElementById('name');
const postForm = document.getElementById('post');
const formResume = document.getElementById('resume');

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

//5 спринт
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

const newCardTemplate = document.querySelector('#new-card').content;
const elementContainer = document.querySelector('.elements__container');

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

  elementContainer.appendChild(addCardElement);
};

function render () {
  initialCards.forEach(addCard);
};

render();

 
//попап
const popupAddButton = document.querySelector('.profile__add-button');
const popupMesto = document.getElementById('popup-mesto');
const closeMesto = document.getElementById('close-mesto');

function openPopupMesto() {
  popupMesto.classList.add('popup_opened');
}

function closePopupMesto() {
  popupMesto.classList.remove('popup_opened');
}

popupAddButton.addEventListener('click', openPopupMesto);
closeMesto.addEventListener('click', closePopupMesto);

// добавить карточку и лайк
const formMesto = document.getElementById('mesto');
const nameImageForm = document.getElementById('name-image');
const linkImageForm = document.getElementById('link-image');


function addNewCard (evt) {
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

  elementContainer.prepend(newCardElement);
  closePopupMesto();

};

formMesto.addEventListener('submit', addNewCard);

//лайк
const likeCard = document.querySelectorAll('.element__like');

function like(evt) {
  evt.target.classList.toggle('element__like_active');
};

likeCard.forEach((elem) =>{
  elem.addEventListener('click', like);
})

//удалить
const deleteButton = document.querySelectorAll('.element__delete');

function deleteCard(event) {
  event.target.closest('.element').remove();
}

deleteButton.forEach((elem) => {
  elem.addEventListener('click', deleteCard);
})

// фото
function openImage() {
  popupImage.classList.add('image-popup_opened');
}

function closeImagePopup() {
  popupImage.classList.remove('image-popup_opened');
}


const popupImage = document.querySelector('.image-popup');
const popupCloseImageButton = document.querySelector('.image-popup__close');
const nameElements = document.querySelectorAll('.element__place-name');
 
popupCloseImageButton.addEventListener('click', closeImagePopup);