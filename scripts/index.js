import { objectListCard, classListForm } from './objectList.js';
import { FormValidator } from './FormValidator.js';
import { Card } from "./Card.js";


const profileEditingIcon = document.querySelector('.profile__editor');
const iconAddCard = document.querySelector('.profile__add-mesto');
const popupProfile = document.querySelector('#profile-popup');
const formProfile = popupProfile.querySelector('.popup__form');
const popupCards = document.querySelector('#cards-popup');
const formCards = popupCards.querySelector('.popup__form');
export const popupImageZoom = document.querySelector('#image-popup');
export const popupImageZoomDescription = popupImageZoom.querySelector('.popup__description');
export const popupImageZoomImage = popupImageZoom.querySelector('.popup__image');
const profileName = document.querySelector('.profile__name');
const profileDescription = document.querySelector('.profile__description');
const nameInput = popupProfile.querySelector('#username-input');
const nameCardInput = popupCards.querySelector('#place-name-input');
const descriptionInput = popupProfile.querySelector('#description-input');
const linkCardInput = popupCards.querySelector('#place-image-input');
const cardsArea = document.querySelector('.cards');
const popupElements = document.querySelectorAll('.popup');


export const openPopup = function (popupName) {
  popupName.classList.add('popup_opened');
  document.addEventListener('keydown', closePopupThroughEsc)
}
const openPopupProfile = function () {
  nameInput.value = profileName.textContent;
  descriptionInput.value = profileDescription.textContent;
  openPopup(popupProfile);
}
const closePopup = function (popupName) {
  popupName.classList.remove('popup_opened');
  document.removeEventListener('keydown', closePopupThroughEsc);
}
const closePopupThroughEsc = function (evt) {
  if (evt.key === "Escape") {
    const popupOpened = document.querySelector('.popup_opened')
    closePopup(popupOpened);
  }
}

const renderCard = function (object, template) {
  const card = new Card(object, template);
  return card.makeCard();
}

const addNewCard = function (evt) {
  evt.preventDefault();
  cardsArea.prepend(renderCard({
    name: nameCardInput.value,
    link: linkCardInput.value
  }, '#card-template'));
  evt.target.reset();
  closePopup(popupCards);
  addCardValidate.disableSubmitButton();
}

const renderInitialCards = function () {
  objectListCard.forEach(function (card) {
    cardsArea.append(renderCard(card, '#card-template'));
  });
}

renderInitialCards();

const handleProfileFormSubmit = function (evt) {
  evt.preventDefault();
  profileName.textContent = nameInput.value;
  profileDescription.textContent = descriptionInput.value;
  closePopup(popupProfile);
}


const addCardValidate = new FormValidator(classListForm, popupCards);
addCardValidate.enableValidationCheck();
const editProfileValidate = new FormValidator(classListForm, formProfile);
editProfileValidate.enableValidationCheck();

profileEditingIcon.addEventListener('click', openPopupProfile);

iconAddCard.addEventListener('click', () => openPopup(popupCards));

popupElements.forEach(popupElement => {
  popupElement.addEventListener('mousedown', (evt) => {
    if (evt.target.classList.contains('popup_opened') || evt.target.classList.contains('popup__close')) {
      closePopup(popupElement);
    }
  });
});

formProfile.addEventListener('submit', handleProfileFormSubmit);
formCards.addEventListener('submit', addNewCard);
