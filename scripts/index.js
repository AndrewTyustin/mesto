const editProfile = document.querySelector('.profile__editor');
const popupEditProfile = document.querySelector('.popup');
const popupCloseIcon = popupEditProfile.querySelector('.popup__close');
const profileName = document.querySelector('.profile__name');
const profileDescription = document.querySelector('.profile__description');
const nameInput = popupEditProfile.querySelector('.popup__input_item_name');
const descriptionInput = popupEditProfile.querySelector('.popup__input_item_description');
const popupOpen = function () {
  popupEditProfile.classList.add('popup_opened');
  nameInput.value = profileName.textContent;
  descriptionInput.value = profileDescription.textContent;
}
const popupClose = function () {
  popupEditProfile.classList.remove('popup_opened');
}
const formSubmitHandler = function (evt) {
  evt.preventDefault();
  profileName.textContent = nameInput.value;
  profileDescription.textContent = descriptionInput.value;
  popupClose();
}
editProfile.addEventListener('click', popupOpen);
popupCloseIcon.addEventListener('click', popupClose);
popupEditProfile.addEventListener('submit', formSubmitHandler);
