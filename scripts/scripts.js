const popupEditButton = document.querySelector('.profile__edit-button');
const popupProfile = document.querySelector('.popup-profile');
const popupProfileCloseButton = document.querySelector('.popup-profile__close');
const nameProfile = document.querySelector('.profile__title');
const postProfile = document.querySelector('.profile__subtitle');
const nameForm = document.querySelector('.popup__item_name');
const postForm = document.querySelector('.popup__item_post');
const formResume = document.forms.resume;
const newCardTemplate = document.querySelector('#new-card').content;
const elementContainer = document.querySelector('.elements__container');
const popupAddButton = document.querySelector('.profile__add-button');
const popupMesto = document.querySelector('.popup-mesto');
const buttonCloseMesto = document.querySelector('.popup-mesto__close');
const formMesto = document.forms.mesto;
const nameImageForm = document.querySelector('.popup__item_name-image');
const linkImageForm = document.querySelector('.popup__item_link');
const popupImage = document.querySelector('.image-popup');
const popupCloseImageButton = document.querySelector('.image-popup__close');
const nameElements = document.querySelectorAll('.element__place-name');
const ESC_CODE = 'Escape';
const creatButtonFormMesto = formMesto.elements.creat;

function openGeneralPopup(item) {
  item.classList.add('popup_opened');
  document.addEventListener('keydown', closeByEsc);
}

function closeGeneralPopup(item) {
  item.classList.remove('popup_opened');
  document.removeEventListener('keydown', closeByEsc);
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

function createCard(name, link) {
  const addCardElement = newCardTemplate.cloneNode(true);
  const linkImagePopup = document.querySelector('.image-popup__image');
  const textImagePopup = document.querySelector('.image-popup__title');
  const imageCardElement = addCardElement.querySelector('.element__image');
  
  addCardElement.querySelector('.element__place-name').textContent = name;
  imageCardElement.src = link;
  imageCardElement.alt = name;

  addCardElement.querySelector('.element__image').addEventListener('click', () => {
    openGeneralPopup(popupImage);
    linkImagePopup.src = link;
    textImagePopup.textContent = name;
  });

  addCardElement.querySelector('.element__like').addEventListener('click', function(evt) {
    evt.target.classList.toggle('element__like_active');
  });

  addCardElement.querySelector('.element__delete').addEventListener('click', function(event) {
    event.target.closest('.element').remove();
  });

  return addCardElement;
}

function addCard(card) {
  elementContainer.prepend(card);
}

function render() {
  initialCards.forEach(elem => {
    const card = createCard(elem.name, elem.link);    
    addCard(card);
  });
}

render();

function addNewCard(evt) {
  evt.preventDefault();
  createCard(nameImageForm.value, linkImageForm.value);
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
  if (evt.key === ESC_CODE) {
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
popupCloseImageButton.addEventListener('click', () => closeGeneralPopup(popupImage));
popupProfile.addEventListener('mousedown', closeByOverlayClick);
popupMesto.addEventListener('mousedown', closeByOverlayClick);
popupImage.addEventListener('mousedown', closeByOverlayClick);