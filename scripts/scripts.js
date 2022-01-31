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

//4 спринт

const firstCardTemplate = document.querySelector('#first-card').content;
const firstCardElement = firstCardTemplate.querySelector('.element').cloneNode(true);
const elementContainer = document.querySelector('.elements__container');
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

firstCardElement.querySelector('.element__image').src = 'images/arkhyz.jpg';
firstCardElement.querySelector('.element__place-name').textContent = 'Архыз';

elementContainer.append(firstCardElement);

const secondCardTemplate = document.querySelector('#second-card').content;
const secondCardElement = secondCardTemplate.querySelector('.element').cloneNode(true);

secondCardElement.querySelector('.element__image').src = 'images/chelyabinsk-oblast.jpg';
secondCardElement.querySelector('.element__place-name').textContent = 'Челябинская область';

elementContainer.append(secondCardElement);

const thirdCardTemplate = document.querySelector('#third-card').content;
const thirdCardElement = thirdCardTemplate.querySelector('.element').cloneNode(true);

thirdCardElement.querySelector('.element__image').src = 'images/ivanovo.jpg';
thirdCardElement.querySelector('.element__place-name').textContent = 'Иваново';

elementContainer.append(thirdCardElement);

const fourthCardTemplate = document.querySelector('#fourth-card').content;
const fourthCardElement = fourthCardTemplate.querySelector('.element').cloneNode(true);

fourthCardElement.querySelector('.element__image').src = 'images/kamchatka.jpg';
fourthCardElement.querySelector('.element__place-name').textContent = 'Камчатка';

elementContainer.append(fourthCardElement);

const fifthCardTemplate = document.querySelector('#fifth-card').content;
const fifthCardElement = fifthCardTemplate.querySelector('.element').cloneNode(true);

fifthCardElement.querySelector('.element__image').src = 'images/kholmogorsky-rayon.jpg';
fifthCardElement.querySelector('.element__place-name').textContent = 'Холмогорский район';

elementContainer.append(fifthCardElement);

const sixthCardTemplate = document.querySelector('#sixth-card').content;
const sixthCardElement = sixthCardTemplate.querySelector('.element').cloneNode(true);

sixthCardElement.querySelector('.element__image').src = 'images/baikal.jpg';
sixthCardElement.querySelector('.element__place-name').textContent = 'Байкал';

elementContainer.append(sixthCardElement);

//попап
const popupAddButton = document.querySelector('.profile__add-button');
const popupMesto = document.getElementById('popup-mesto');
let closeMesto = document.getElementById('close-mesto');

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

  const newCardTemplate = document.querySelector('#new-card').content;
  const newCardElement = firstCardTemplate.querySelector('.element').cloneNode(true);

  newCardElement.querySelector('.element__image').src = linkImageForm.value;
  newCardElement.querySelector('.element__image').alt = nameImageForm.value;
  newCardElement.querySelector('.element__place-name').textContent = nameImageForm.value;
  newCardElement.querySelector('.element__like').addEventListener('click', function(evt) {
    evt.target.classList.toggle('element__like_active');
    })
  newCardElement.querySelector('.element__delete').addEventListener('click', function(evt) {
    event.target.closest('.element').remove();
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
const imageElement = document.querySelectorAll('.element__image');
const popupImage = document.querySelector('.image-popup');
const popupCloseImageButton = document.querySelector('.image-popup__close');
const nameElements = document.querySelectorAll('.element__place-name');

function openImage() {
  popupImage.classList.add('image-popup_opened');
}

function closeImagePopup() {
  popupImage.classList.remove('image-popup_opened');
}

/* imageElement.forEach(image => {
  image.onclick = () =>{
    openImage();
    document.querySelector('.image-popup__image').src = image.getAttribute('src');
    nameElements.forEach(name => {
      document.querySelector('.image-popup__title').textContent = name.textContent;
    })
    //document.querySelector('.image-popup__title').textContent 
    
  };

}); */
 
popupCloseImageButton.addEventListener('click', closeImagePopup);

function createCard(name, link){
  document.querySelector('.element__place-name').textContent = name;
  document.querySelector('.element__image').src = link;

  document.querySelector('.element__image').addEventListener('click', function() {
    openImage();
    document.querySelector('.image-popup__image').src = link;
    document.querySelector('.image-popup__title').textContent = name;
  });
}

initialCards.forEach(function(item) { 
  //Создание карточки
   let card = createCard(item.name, item.link); 
    
 // Добавление карточки в разметку
   addNewCard(card); 
 }); 


/* // Функция создания карточки
function createCard(name, link){
  Ты здесь находишь все необходимые поля у заготовки
  и им присваиваешь переданные name/link

  Тут же у заготовки находишь тег img, на который вешаешь слушатель клика, в колбеке у тебя функция.
Функция открывает попап и берет у карточки название и ссылку и подставляет в попап.
}

initialCards.forEach(function(item) { 
 //Создание карточки
  let card = createCard(item.name, item.link); 
   
// Добавление карточки в разметку
  addNewCard(card); 
}); */