const classListForm = {
  formSelector: '.popup__form',
  inputSelector: '.popup__input',
  submitButtonSelector: '.popup__submit',
  inactiveButtonClass: 'popup__submit_disabled',
  inputErrorClass: 'popup__input_type_error',
  errorClass: 'popup__input_type_visible',
};

const showValidationError = function (formItem, inputItem, errorMessage) {
  const errorItem = formItem.querySelector(`.${inputItem.id}-error`)
  inputItem.classList.add(classListForm.inputErrorClass);
  errorItem.textContent = errorMessage;
  errorItem.classList.add(classListForm.errorClass);
};

const hideValidationError = function (formItem, inputItem) {
  const errorItem = formItem.querySelector(`.${inputItem.id}-error`)
  inputItem.classList.remove(classListForm.inputErrorClass);
  errorItem.classList.remove(classListForm.errorClass);
  errorItem.textContent = '';
};

const checkInputValidity = function (formItem, inputItem) {
  if (inputItem.validity.valid === false) {
    showValidationError(formItem, inputItem, inputItem.validationMessage);
  } else {
    hideValidationError(formItem, inputItem);
  }
};

const setEventListeners = function (formItem) {
  const inputList = Array.from(formItem.querySelectorAll(classListForm.inputSelector));
  const buttonItem = formItem.querySelector(classListForm.submitButtonSelector);
  toggleButtonState(inputList, buttonItem);
  inputList.forEach((inputItem) => {
      inputItem.addEventListener('input', function () {
      checkInputValidity(formItem, inputItem);
      toggleButtonState(inputList, buttonItem);
    });
  });
}
const hasInvalidInput = function (inputList) {
  return inputList.some((item) => {
    return !item.validity.valid;
  });
}

const enableValidationCheck = function () {
  const formList = Array.from(document.querySelectorAll(classListForm.formSelector));
  formList.forEach((formItem) => {
      formItem.addEventListener('submit', function (evt) {
      evt.preventDefault();
    });
    setEventListeners(formItem);
  });
}

const toggleButtonState = function (inputList, buttonItem) {
  if (hasInvalidInput(inputList)) {
    buttonItem.classList.add(classListForm.inactiveButtonClass);
  } else {
    buttonItem.classList.remove(classListForm.inactiveButtonClass);
  }
}
enableValidationCheck();
