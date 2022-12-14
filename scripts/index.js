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

const profileEditingIcon = document.querySelector('.profile__editor');
const iconAddCard = document.querySelector('.profile__add-mesto');
const popupProfile = document.querySelector('#profile-popup');
const formProfile = popupProfile.querySelector('.popup__form');
const popupCards = document.querySelector('#cards-popup');
const formCards = popupCards.querySelector('.popup__form');
const popupImageZoom = document.querySelector('#image-popup');
const popupImageZoomDescription = popupImageZoom.querySelector('.popup__description');
const popupImageZoomImage = popupImageZoom.querySelector('.popup__image');
const profileName = document.querySelector('.profile__name');
const profileDescription = document.querySelector('.profile__description');
const nameInput = popupProfile.querySelector('#username-input');
const nameCardInput = popupCards.querySelector('#place-name-input');
const descriptionInput = popupProfile.querySelector('#description-input');
const linkCardInput = popupCards.querySelector('#place-image-input');
const cardsArea = document.querySelector('.cards');
const iconCloseButtons = document.querySelectorAll('.popup__close');
const popupElements = document.querySelectorAll('.popup');
const contentCardTemplate = document.querySelector('#card-template').content;
const popupSubmit = popupCards.querySelector('.popup__submit');

const openPopup = function (popupName) {
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
const addCards = function (name, link) {
  const templateCardCopy = contentCardTemplate.querySelector('.cards__item').cloneNode(true);
  const cardsImage = templateCardCopy.querySelector('.cards__image');
  const cardDescription = templateCardCopy.querySelector('.cards__description');


  cardDescription.textContent = name;
  cardsImage.src = link;
  cardsImage.alt = name;

  templateCardCopy.querySelector('.cards__like').addEventListener('click', function (evt) {
    evt.target.classList.toggle('cards__like_active');
  });

  templateCardCopy.querySelector('.cards__delete').addEventListener('click', function (evt) {
    evt.target.closest('.cards__item').remove();
  });

  const getZoomImages = function () {
    popupImageZoomDescription.textContent = name;
    popupImageZoomImage.src = link;
    popupImageZoomImage.alt = name;
    openPopup(popupImageZoom);
  }

  cardsImage.addEventListener('click', getZoomImages);

  return templateCardCopy;
}

const addNewCard = function (evt) {
  evt.preventDefault();
  cardsArea.prepend(addCards(nameCardInput.value, linkCardInput.value));
  evt.target.reset()
  closePopup(popupCards);
  toggleButtonState(formCards, popupSubmit, classListForm);
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
