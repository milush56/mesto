import {
  linkImagePopup,
  popupImage,
  popupCloseImageButton,
  openGeneralPopup
} from './utils.js';

export class Card {
  constructor(name, link) {
    this._name = name;
    this._link = link;
    this._cardElement = document
      .querySelector('#new-card')
      .content
      .querySelector('.element')
      .cloneNode(true);
  }

  generateCard() {
    this._element = this._cardElement;

    this._element.querySelector('.element__image').src = this._link;
    this._element.querySelector('.element__place-name').textContent = this._name;
    this._element.querySelector('.element__image').alt = this._name;
    //this._element.querySelector('.element__like') = this._like;
    this._like = this._element.querySelector('.element__like');
    this._remove = this._element.querySelector('.element__delete');
    this._image = this._element.querySelector('.element__image');

    this._setEventListeners();
    return this._element;
  }

  _handleOpenImagePopup() {
    linkImagePopup.src = this._link;
    openGeneralPopup(popupImage);
  }

  _likeCard() {
    this._like.classList.toggle('element__like_active');
  }

  _removeCard() {
    this._element.remove();
    this._element = null;
  }

  _setEventListeners() {
    this._image.addEventListener('click', () => {
      this._handleOpenImagePopup();
    });

    this._like.addEventListener('click', () => {
      this._likeCard();
    });

    this._remove.addEventListener('click', () => {
      this._removeCard();
    });
  }
}