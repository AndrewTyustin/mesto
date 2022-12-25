import { openPopup, popupImageZoom as popupZoom, popupImageZoomDescription as popupDescription, popupImageZoomImage as popupImage } from './index.js';

class Card {
  constructor(object, templateElem) {
    this._name = object.name;
    this._image = object.link;
    this._template = templateElem;
  }
  _addLikeCard = (event) => {
    event.target.classList.toggle('cards__like_active');
  }
  _deleteCard = (event) => {
    event.target.closest('.cards__item').remove();
  }
  _getZoomImages() {
    popupDescription.textContent = this._name;
    popupImage.src = this._image;
    popupImage.alt = this._name;
    openPopup(popupZoom);
  }
  makeCard() {
    const elementCard = document.querySelector(this._template).content.querySelector('.cards__item').cloneNode(true);
    elementCard.querySelector('.cards__description').textContent = this._name;
    elementCard.querySelector('.cards__image').src = this._image;
    elementCard.querySelector('.cards__image').alt = this._name;
    this._addEventHandler(elementCard);
    return elementCard;
  }
  _addEventHandler = (elementCard) => {
    elementCard.querySelector('.cards__like').addEventListener('click', event => this._addLikeCard(event))
    elementCard.querySelector('.cards__delete').addEventListener('click', event => this._deleteCard(event));
    elementCard.querySelector('.cards__image').addEventListener('click', () => this._getZoomImages())
  }
}
export { Card };
