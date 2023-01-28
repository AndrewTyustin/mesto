import { objectListCard, classListForm } from './components/utils/objectList.js';
import { FormValidator } from './components/FormValidator.js';
import { Card } from './components/Card.js';
import { Section } from './components/Section.js';
import { PopupWithImage } from './components/PopupWithImage.js';
import { PopupWithForm } from './components/PopupWithForm.js';
import { UserInfo } from './components/UserInfo.js';
import './pages/index.css';
import {
  profileEditingIcon, iconAddCard,
  popupCards, formProfile,
  nameCardInput, linkCardInput,
  nameInput, descriptionInput
} from './components/utils/constants.js';
const popupImageZoom = new PopupWithImage('#image-popup');
popupImageZoom.setEventListeners();
const userInfo = new UserInfo({
  usernameSelector: '.profile__name',
  userDescriptionSelector: '.profile__description'
});
const popupEditeProfile = new PopupWithForm('#profile-popup', {
  callbackFormSubmit: (profileData) => {
    userInfo.setUserInfo({
      username: profileData.username,
      description: profileData.description
    });
    popupEditeProfile.close();
  }
});
popupEditeProfile.setEventListeners();
const handleCardClick = function (name, image) {
  popupImageZoom.open(name, image);
}
const renderInitialCards = new Section({
  items: objectListCard,
  renderer: (cardData) => {
    const card = new Card(cardData, '#card-template', handleCardClick);
    renderInitialCards.addItem(card.makeCard());
  }
}, '.cards');
renderInitialCards.renderItems();
const renderCard = function (cardData) {
  const renderCardItem = new Card(cardData, '#card-template', handleCardClick);
  return renderCardItem.makeCard();
}
const popupAddCard = new PopupWithForm('#cards-popup', {
  callbackFormSubmit: () => {
    renderInitialCards.addItem(renderCard({
      name: nameCardInput.value,
      link: linkCardInput.value
    }, '#card-template', handleCardClick));
    popupAddCard.close();
  }
});
popupAddCard.setEventListeners();
const addCardValidate = new FormValidator(classListForm, popupCards);
addCardValidate.enableValidationCheck();
const editProfileValidate = new FormValidator(classListForm, formProfile);
editProfileValidate.enableValidationCheck();
profileEditingIcon.addEventListener('click', function () {
  popupEditeProfile.open();
  nameInput.setAttribute('value', userInfo.getUserInfo().username);
  descriptionInput.setAttribute('value', userInfo.getUserInfo().description);
});
iconAddCard.addEventListener('click', function () {
  popupAddCard.open();
  addCardValidate.disableSubmitButton();
});




