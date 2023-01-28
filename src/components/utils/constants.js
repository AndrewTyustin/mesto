const profileEditingIcon = document.querySelector('.profile__editor');
const iconAddCard = document.querySelector('.profile__add-mesto');
const popupProfile = document.querySelector('#profile-popup');
const formProfile = popupProfile.querySelector('.popup__form');
const popupCards = document.querySelector('#cards-popup');
const nameCardInput = popupCards.querySelector('#place-name-input');
const linkCardInput = popupCards.querySelector('#place-image-input');
const nameInput = popupProfile.querySelector('#username-input');
const descriptionInput = popupProfile.querySelector('#description-input');

export {
  profileEditingIcon, iconAddCard, popupProfile,
  popupCards, formProfile, nameCardInput,
  linkCardInput, nameInput, descriptionInput,
};
