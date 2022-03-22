import {
  ESC_CODE
} from './utils.js';

export default class Popup {
  constructor(popupSelector) {
    this._popupSelector = document.querySelector(popupSelector);
    this._closeButton = this._popupSelector.querySelector('.popup__close');
  }

  open() {
    this._popupSelector.classList.add('popup_opened');
    document.addEventListener('keydown', (evt) => {
      this._handleEscClose(evt);
    });    
  }

  close() {
    this._popupSelector.classList.remove('popup_opened');
    document.removeEventListener('keydown', (evt) => {
      this._handleEscClose(evt);
    }); 
  }

  _handleEscClose(evt) {
    if (evt.key === ESC_CODE) {
      this.close();
    }
  }

  _closeByOverlayClick(evt) {
    if (evt.target.classList.contains('popup_opened')) {
      this.close();
    }
  }

  setEventListeners() {
    this._closeButton.addEventListener('click', () => {
      this.close();
    });

    this._popupSelector.addEventListener('click', (evt) => {
      this._closeByOverlayClick(evt);
    });

    this._popupSelector.addEventListener('keydown', (evt) => {
      this._handleEscClose(evt);
    });
  }
}