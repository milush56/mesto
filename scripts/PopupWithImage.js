import Popup from "./Popup.js";

export default class PopupWithImage extends Popup {
  constructor(popupSelector) {
    super(popupSelector);
    this._link = document.querySelector('.image-popup__image');
    this._name = document.querySelector('.image-popup__title');
  }

  open(name, link) {
    this._link.src = link;
    this._name.textContent = name;
    super.open();
  } 
  
}