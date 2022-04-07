export class Card {
  constructor(name, link, likes, id, userId, ownerId, templateSelector, handleCardClick, handleDeleteClick, handleLikeClick) {
    this._name = name;
    this._link = link;
    this._templateSelector = templateSelector;
    this._handleCardClick = handleCardClick;
    this._likes = likes;
    this._handleDeleteClick = handleDeleteClick;
    this._id = id;
    this._userId = userId;
    this._ownerId = ownerId;
    this._handleLikeClick = handleLikeClick;
  }

  _getTemplate() {
    return document.querySelector(this._templateSelector)
      .content
      .querySelector('.element')
      .cloneNode(true);
  }

  isLiked() {
    const likeCount = this._likes.find(user => user._id === this._userId);
    return likeCount;
  }

  setLikes(newLikes) {
    this._likes = newLikes;
    const likeCount = this._element.querySelector('.element__like-counter');
    likeCount.textContent = this._likes.length;

    if(this.isLiked()) {
      this._likeCard();
    } else {
      this._dislikeCard();
    }
  }

  generateCard() {
    this._element = this._getTemplate();

    this._image = this._element.querySelector('.element__image');
    this._image.src = this._link;
    this._element.querySelector('.element__place-name').textContent = this._name;
    this._image.alt = this._name;
    this._like = this._element.querySelector('.element__like');
    this._remove = this._element.querySelector('.element__delete');    
    this._element.querySelector('.element__like-counter').textContent = this._likes.length;

    if (this._ownerId !== this._userId) {
      this._remove.style.display = 'none';
    }

    if(this.isLiked()) {
      this._likeCard();
    } else {
      this._dislikeCard();
    }


    /* this._likes.forEach((user) => {
      if(user._id === this._ownerId) {
        this._likeCard();
      }
    }); */

    /* if(this._likes.find(user => user._id === this._userId)) {
      this._likeCard();
    } */
    

    this._setEventListeners();
    return this._element;
  }

  _likeCard() {
    this._like.classList.add('element__like_active');
  }

  _dislikeCard() {
    this._like.classList.remove('element__like_active');
  }

  removeCard() {
    this._element.remove();
    this._element = null;
  }

  _setEventListeners() {
    this._like.addEventListener('click', () => {
      this._handleLikeClick(this._id);
      //his._likeCard();
    });

    this._remove.addEventListener('click', () => {
      this._handleDeleteClick(this._id);
      //this._removeCard();
    });

    this._image.addEventListener('click', () => {
      this._handleCardClick(this._name, this._link);
    });
  }
}