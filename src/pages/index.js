import { classListForm } from '../utils/objectList.js';
import { apiFindings } from '../utils/apiFindings.js';
import { FormValidator } from '../components/FormValidator.js';
import { Card } from '../components/Card.js';
import { Section } from '../components/Section.js';
import { popupNotice } from '../components/popupNotice.js';
import { PopupWithImage } from '../components/PopupWithImage.js';
import { PopupWithForm } from '../components/PopupWithForm.js';
import { UserInfo } from '../components/UserInfo.js';
import { Api } from '../components/Api.js';
import './index.css';
import {
  profileEditingIcon, iconAddCard,
  formCards, formProfile,
  nameInput, descriptionInput,
  popupAvatarEditForm, iconAvatarEdit
} from '../utils/constants.js';
const apiConnect = new Api(apiFindings);
let userId;
const userInfo = new UserInfo({
  usernameSelector: '.profile__name',
  userDescriptionSelector: '.profile__description'
});
const renderCard = function (cardObject) {
  const renderCardItem = new Card(cardObject, '#card-template', userId, { cardId: cardObject._id, authorId: cardObject.owner._id, }, {
    handleCardZoom: (name, image) => { popupImageZoom.open(name, image) },
    handleCardDelete: (cardObject, cardId) => { popupNoticeDelete.open(cardObject, cardId) },
    handleCardLike: (cardId) => { apiConnect.putCardLike(cardId)
        .then((res) => {
          renderCardItem.renderCardLike(res)
        })
        .catch((err) => {
          console.log(`При лайке карточки возникла ошибка, ${err}`)
        })
    },
    handleCardDeleteLike: (cardId) => { apiConnect.deleteCardLike(cardId)
        .then((res) => {
          renderCardItem.renderCardLike(res)
        })
        .catch((err) => {
          console.log(`При дизлайке карточки возникла ошибка, ${err}`)
        })
    },
  });
  return renderCardItem.makeCard();
}
const cardsSection = new Section({
  items: objectListCard,
  renderer: (cardObject) => {
    renderInitialCards.addItem(renderCard(cardObject));
  }
}, '.cards');
Promise.all([ apiConnect.getUserData(), apiConnect.getInitialCards() ]).then(([ userProfileData, cardObject ]) => {
  userId = userProfileData._id;
  userInfo.setUserInfo({ username: userProfileData.name, description: userProfileData.about })
  renderInitialCards.renderItems(cardObject.reverse())
  userInfo.setUserAvatar(userProfileData.avatar)
})
.catch((err) => { console.log(`Возникла глобальная ошибка, ${err}`) })
const popupImageZoom = new PopupWithImage('#image-popup');
popupImageZoom.setEventListeners();
const popupEditeAvatar = new PopupWithForm('#avatar-popup', {
callbackFormSubmit: (userProfileData) => { popupEditeAvatar.putSavingProcessText(); apiConnect.sendAvatarData(userProfileData)
    .then((res) => {
      userInfo.setUserAvatar(res.avatar);
    })
    .catch((err) => {
      console.log(`При обновлении аватара возникла ошибка, ${err}`)
    })
    .finally(() => {
      popupEditeAvatar.returnSavingProcessText(); popupEditeAvatar.close()
    })
}
});
popupEditeAvatar.setEventListeners();
const popupNoticeDelete = new popupNotice("#delete-card", {
callbackNotice: (cardElement, cardId) => {
  apiConnect.deleteCard(cardId)
    .then(() => { popupNoticeDelete.close(); cardElement.remove(); })
    .catch((err) => { console.log(`При удалении карточки возникла ошибка, ${err}`) })
}
});
popupNoticeDelete.setEventListeners();
const popupEditeProfile = new PopupWithForm('#profile-popup', {
callbackFormSubmit: (userProfileData) => {
  popupEditeProfile.putSavingProcessText();
  apiConnect.sendUserData(userProfileData)
    .then((res) => { userInfo.setUserInfo({ username: res.name, description: res.about }) })
    .catch((err) => { console.log(`При редактировании профиля возникла ошибка, ${err}`) })
    .finally(() => {
      popupEditeProfile.returnSavingProcessText();
      popupEditeProfile.close()
    })
}
});
popupEditeProfile.setEventListeners();
const popupAddCard = new PopupWithForm('#cards-popup', {
  callbackFormSubmit: (formValues) => {
    popupAddCard.putSavingProcessText();
    apiConnect.addNewCard({ name: formValues.placename, link: formValues.placeimage })
      .then((card) => { renderInitialCards.addItem(renderCard(card)) })
      .catch((err) => { console.log(`При добавлении новой карточки возникла ошибка, ${err}`) })
      .finally(() => {
        popupAddCard.returnSavingProcessText();
        popupAddCard.close()
      })
  }
});
popupAddCard.setEventListeners();
const cardAddValidate = new FormValidator(classListForm, formCards);
cardAddValidate.enableValidationCheck();
const profileEditValidate = new FormValidator(classListForm, formProfile);
profileEditValidate.enableValidationCheck();
const editProfileAvatarValidate = new FormValidator(classListForm, popupAvatarEditForm);
editProfileAvatarValidate.enableValidationCheck();
profileEditingIcon.addEventListener('click', function () {
  popupEditeProfile.open();
  editProfileValidate.resetValidate();
  const actualUserInfo = userInfo.getUserInfo();
  nameInput.setAttribute('value', actualUserInfo.username);
  descriptionInput.setAttribute('value', actualUserInfo.description);
});
iconAvatarEdit.addEventListener('click', function () {
  popupEditeAvatar.open();
  editProfileAvatarValidate.resetValidate();
});
iconAddCard.addEventListener('click', function () {
  popupAddCard.open();
  cardAddValidate.resetValidate();
});





