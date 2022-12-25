class FormValidator {
  constructor(objectList, elementValidation) {
    this._object = objectList;
    this._element = elementValidation;
    this._submitElement = this._element.querySelector(this._object.submitButtonSelector)
  }

  _showValidationError(inputItem, errorMessage) {
    const errorItem = this._element.querySelector(`.${inputItem.id}-error`)
    inputItem.classList.add(this._object.inputErrorClass);
    errorItem.textContent = errorMessage;
    errorItem.classList.add(this._object.errorClass);
  }
  _hideValidationError(inputItem) {
    const errorItem = this._element.querySelector(`.${inputItem.id}-error`)
    inputItem.classList.remove(this._object.inputErrorClass);
    errorItem.classList.remove(this._object.errorClass);
    errorItem.textContent = '';
  }
  _checkInputValidity(inputItem) {
    if (inputItem.validity.valid === false) {
      this._showValidationError(inputItem, inputItem.validationMessage);
    } else {
      this._hideValidationError(inputItem);
    }
  }

  _setEventListeners() {
    const inputList = Array.from(this._element.querySelectorAll(this._object.inputSelector));
    this._toggleButtonState();
    inputList.forEach((inputItem) => {
      inputItem.addEventListener('input', () => {
        this._checkInputValidity(inputItem);
        this._toggleButtonState();
      });
    });
  }
  _hasInvalidInput() {
    return Array.from(this._element.querySelectorAll(this._object.inputSelector)).some((inputItem) => {
      return !inputItem.validity.valid;
    });
  }
  enableValidationCheck() {
    const formList = Array.from(document.querySelectorAll(this._object.formSelector));
    formList.forEach((formItem) => {
      this._setEventListeners(formItem);
    });
  }
  _toggleButtonState() {
    if (this._hasInvalidInput()) {
        this._submitElement.setAttribute('disabled', 'true');
        this._submitElement.classList.add(this._object.inactiveButtonClass);
    } else {
      this._submitElement.classList.remove(this._object.inactiveButtonClass);
      this._submitElement.removeAttribute('disabled');
    }
  }
}

export { FormValidator };
