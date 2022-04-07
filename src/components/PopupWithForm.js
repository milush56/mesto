import Popup from "./Popup.js";

export default class PopupWithForm extends Popup {
  constructor(popupSelector, { submitEvent } ) {
    super(popupSelector);
    this._callBack = submitEvent;
    this._element = this._popup.querySelector('.popup__form');
    this._button = this._element.querySelector('.popup__button');
  }

  _getInputValues() {
    this._inputList = this._element.querySelectorAll('.popup__item');
    this._formValues = {};

    this._inputList.forEach(input => {
      this._formValues[input.name] = input.value;
    });

    return this._formValues;
  }

  replaceSubmitEvent(newSubmitEvent) {
    this._callBack = newSubmitEvent;
  }

  setEventListeners() {
    super.setEventListeners();
    this._element.addEventListener('submit', (evt) => {
      evt.preventDefault();
      this._callBack(this._getInputValues());
    });
  }

  close() {
    super.close();
    this._element.reset();
  }
  
  renderLoading(isLoading) {
    if (isLoading) {
      this._button.textContent = 'Сохранение...';
    } else {
      this._button.textContent = this._button.value;
    }
  }

}