import {linkImagePopup, popupImage, popupCloseImageButton} from './index.js';

export class Card {
  constructor(name, link) {
    this._name = name;
    this._link = link;
  }
  _getTemplate() {
    const cardElement = document
      .querySelector('#new-card')
      .content
      .querySelector('.element')
      .cloneNode(true);


    return cardElement;
  }

  generateCard() {
    this._element = this._getTemplate();
    
    this._element.querySelector('.element__image').src = this._link;
    this._element.querySelector('.element__place-name').textContent = this._name;
    //this._element.querySelector('.element__like') = this._like;
    this._like = this._element.querySelector('.element__like');
    this._remove = this._element.querySelector('.element__delete');
    this._image = this._element.querySelector('.element__image');

    this._setEventListeners();
    return this._element;
  }

  _handleOpenImagePopup() {
    linkImagePopup.src = this._link;
    popupImage.classList.add('popup_opened');
  }

  _handleCloseImagePopup() {
    popupImage.src = '';
    popupImage.classList.remove('popup_opened');
  }

  _likeCard() {
    this._like.classList.toggle('element__like_active');
  }

  _removeCard() {
    this._remove.closest('.element').remove();
  }

  _setEventListeners() {
    this._image.addEventListener('click', () => {
      this._handleOpenImagePopup();
    });

    popupCloseImageButton.addEventListener('click', () => {
      this._handleCloseImagePopup();
    });

    this._like.addEventListener('click', () => {
      this._likeCard();
    });

    this._remove.addEventListener('click', () => {
      this._removeCard();
    });
  }
}