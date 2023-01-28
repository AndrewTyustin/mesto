import { objectListCard, classListForm } from '../utils/objectList.js';
import { FormValidator } from '../components/FormValidator.js';
import { Card } from '../components/Card.js';
import { Section } from '../components/Section.js';
import { PopupWithImage } from '../components/PopupWithImage.js';
import { PopupWithForm } from '../components/PopupWithForm.js';
import { UserInfo } from '../components/UserInfo.js';
import './index.css';
import {
  profileEditingIcon, iconAddCard,
  formCards, formProfile,
  nameInput, descriptionInput
} from '../utils/constants.js';
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
const renderCard = function (cardData) {
  const renderCardItem = new Card(cardData, '#card-template', handleCardClick);
  return renderCardItem.makeCard();
}
//согласно ТЗ необходимо создать класс Section
const renderInitialCards = new Section({
  items: objectListCard,
  //исправил на renderCard
  renderer: (cardData) => {
    renderInitialCards.addItem(renderCard(cardData));
  }
}, '.cards');
renderInitialCards.renderItems();
//исправил название добавление карты с renderCard на popupAddCard
const popupAddCard = new PopupWithForm('#cards-popup', {
  callbackFormSubmit: (formValues) => {
    renderInitialCards.addItem(renderCard({
      name: formValues.placename,
      link: formValues.placeimage
    }));
    popupAddCard.close();
  }
});
popupAddCard.setEventListeners();
const addCardValidate = new FormValidator(classListForm, formCards);
addCardValidate.enableValidationCheck();
const editProfileValidate = new FormValidator(classListForm, formProfile);
editProfileValidate.enableValidationCheck();
profileEditingIcon.addEventListener('click', function () {
  popupEditeProfile.open();
  const actualUserInfo = userInfo.getUserInfo();
  nameInput.setAttribute('value', actualUserInfo.username);
  descriptionInput.setAttribute('value', actualUserInfo.description);
});
iconAddCard.addEventListener('click', function () {
  popupAddCard.open();
  addCardValidate.disableSubmitButton();
});





