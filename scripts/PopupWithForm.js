import Popup from "./Popup.js";

export default class PopupWithForm extends Popup {
  constructor(popupSelector, { submitEvent } ) {
    super(popupSelector);
    this._callBack = submitEvent;
    this._element = this._popupSelector.querySelector('.popup__form');
  }

  _getInputValues() {
    this._inputList = this._element.querySelectorAll('.popup__item');
    this._formValues = {};

    this._inputList.forEach(input => {
      this._formValues[input.name] = input.value;
    });

    return this._formValues;
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

}