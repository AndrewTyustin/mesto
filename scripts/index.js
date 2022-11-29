const initialCards = [
  {
    name: 'Архыз',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/arkhyz.jpg'
  },
  {
    name: 'Челябинская область',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/chelyabinsk-oblast.jpg'
  },
  {
    name: 'Иваново',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/ivanovo.jpg'
  },
  {
    name: 'Камчатка',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kamchatka.jpg'
  },
  {
    name: 'Холмогорский район',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kholmogorsky-rayon.jpg'
  },
  {
    name: 'Байкал',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/baikal.jpg'
  }
];

const editProfileIcon = document.querySelector('.profile__editor');
const addCardIcon = document.querySelector('.profile__add-mesto');
const popupProfile = document.querySelector('#profile-popup');
const popupCards = document.querySelector('#cards-popup');
const popupImageZoom = document.querySelector('#image-popup');
const popupImageZoomDescription = popupImageZoom.querySelector('.popup__description');
const popupImageZoomImage = popupImageZoom.querySelector('.popup__image');
const popupProfileCloseIcon = popupProfile.querySelector('.popup__close');
const popupCardsCloseIcon = popupCards.querySelector('.popup__close');
const popupImageZoomCloseIcon = popupImageZoom.querySelector('.popup__close');
const profileName = document.querySelector('.profile__name');
const profileDescription = document.querySelector('.profile__description');
const nameInput = popupProfile.querySelector('.popup__input_item_name');
const nameCardInput = popupCards.querySelector('.popup__input_item_name');
const descriptionInput = popupProfile.querySelector('.popup__input_item_description');
const linkCardInput = popupCards.querySelector('.popup__input_item_description');
const cardsArea = document.querySelector('.cards');
const closeButtons = document.querySelectorAll('.popup__close');

const openPopup = function (popupName) {
  popupName.classList.add('popup_opened');
}

const openPopupProfile = function () {
  nameInput.value = profileName.textContent;
  descriptionInput.value = profileDescription.textContent;
  openPopup(popupProfile);
}

const closePopup = function (popupName) {
  popupName.classList.remove('popup_opened');
}


const addCards = function (name, link) {
  const contentCardTemplate = document.querySelector('#card-template').content;
  const copyCardTemplate = contentCardTemplate.querySelector('.cards__item').cloneNode(true);

  const cardsImage = copyCardTemplate.querySelector('.cards__image');
  const cardDescription = copyCardTemplate.querySelector('.cards__description');

  cardDescription.textContent = name;
  cardsImage.src = link;
  cardsImage.alt = name;

  copyCardTemplate.querySelector('.cards__like').addEventListener('click', function (evt) {
    evt.target.classList.toggle('cards__like_active');
  });

  copyCardTemplate.querySelector('.cards__delete').addEventListener('click', function (evt) {
    evt.target.closest('.cards__item').remove();
  });

  const getZoomImages = function () {
    popupImageZoomDescription.textContent = name;
    popupImageZoomImage.src = link;
    popupImageZoomImage.alt = name;
    openPopup(popupImageZoom);
  }

  cardsImage.addEventListener('click', getZoomImages);

  return copyCardTemplate;
}

const addNewCard = function (evt) {
  evt.preventDefault();
  cardsArea.prepend(addCards(nameCardInput.value, linkCardInput.value));
  evt.target.reset();
  closePopup(popupCards);
}
const renderInitialCards = function () {
  initialCards.forEach(function (card) {
    cardsArea.append(addCards(card.name, card.link));
  });
}

renderInitialCards();

const handleProfileFormSubmit = function (evt) {
  evt.preventDefault();
  profileName.textContent = nameInput.value;
  profileDescription.textContent = descriptionInput.value;
  closePopup(popupProfile);
}

editProfileIcon.addEventListener('click', () => openPopup(popupProfile));
addCardIcon.addEventListener('click', () => openPopup(popupCards));
closeButtons.forEach((button) => {
  const popup = button.closest('.popup');
  button.addEventListener('click', () => closePopup(popup));
});
popupProfile.addEventListener('submit', handleProfileFormSubmit);
popupCards.addEventListener('submit', addNewCard);
