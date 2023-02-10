(()=>{"use strict";var e={formSelector:".popup__form",inputSelector:".popup__input",submitButtonSelector:".popup__submit",inactiveButtonClass:"popup__submit_disabled",inputErrorClass:"popup__input_type_error",errorClass:"popup__input_type_visible"};function t(e){return t="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},t(e)}function r(e,r){for(var n=0;n<r.length;n++){var o=r[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,(void 0,i=function(e,r){if("object"!==t(e)||null===e)return e;var n=e[Symbol.toPrimitive];if(void 0!==n){var o=n.call(e,"string");if("object"!==t(o))return o;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(e)}(o.key),"symbol"===t(i)?i:String(i)),o)}var i}var n=function(){function e(t,r){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this._validationSettings=t,this._formElement=r,this._submitButton=this._formElement.querySelector(this._validationSettings.submitButtonSelector),this._inputList=Array.from(this._formElement.querySelectorAll(this._validationSettings.inputSelector))}var t,n;return t=e,(n=[{key:"_showValidationError",value:function(e,t){var r=this._formElement.querySelector(".".concat(e.id,"-error"));e.classList.add(this._validationSettings.inputErrorClass),r.textContent=t,r.classList.add(this._validationSettings.errorClass)}},{key:"_hideValidationError",value:function(e){var t=this._formElement.querySelector(".".concat(e.id,"-error"));e.classList.remove(this._validationSettings.inputErrorClass),t.classList.remove(this._validationSettings.errorClass),t.textContent=""}},{key:"_checkInputValidity",value:function(e){!1===e.validity.valid?this._showValidationError(e,e.validationMessage):this._hideValidationError(e)}},{key:"_setEventListeners",value:function(){var e=this;this._toggleButtonState(),this._inputList.forEach((function(t){t.addEventListener("input",(function(){e._checkInputValidity(t),e._toggleButtonState()}))}))}},{key:"_hasInvalidInput",value:function(){return this._inputList.some((function(e){return!e.validity.valid}))}},{key:"enableValidationCheck",value:function(){this._setEventListeners()}},{key:"disableSubmitButton",value:function(){this._submitButton.setAttribute("disabled","true"),this._submitButton.classList.add(this._validationSettings.inactiveButtonClass)}},{key:"_enableSubmitButton",value:function(){this._submitButton.classList.remove(this._validationSettings.inactiveButtonClass),this._submitButton.removeAttribute("disabled")}},{key:"_toggleButtonState",value:function(){this._hasInvalidInput()?this.disableSubmitButton():this._enableSubmitButton()}}])&&r(t.prototype,n),Object.defineProperty(t,"prototype",{writable:!1}),e}();function o(e){return o="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},o(e)}function i(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,a(n.key),n)}}function u(e,t,r){return(t=a(t))in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e){var t=function(e,t){if("object"!==o(e)||null===e)return e;var r=e[Symbol.toPrimitive];if(void 0!==r){var n=r.call(e,"string");if("object"!==o(n))return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(e)}(e);return"symbol"===o(t)?t:String(t)}var c=function(){function e(t,r,n){var o=this;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),u(this,"_likeCard",(function(){o._likeIcon.classList.toggle("cards__like_active")})),u(this,"_addEventHandlers",(function(){o._likeIcon.addEventListener("click",(function(){return o._likeCard()})),o._deleteIcon.addEventListener("click",(function(){return o._deleteCard()})),o._elementImages.addEventListener("click",(function(){return o._handleCardClick(o._name,o._image)}))})),this._name=t.name,this._image=t.link,this._template=r,this._handleCardClick=n}var t,r;return t=e,(r=[{key:"_createCard",value:function(){return document.querySelector(this._template).content.querySelector(".cards__item").cloneNode(!0)}},{key:"_deleteCard",value:function(){this._cardElement.remove()}},{key:"makeCard",value:function(){return this._cardElement=this._createCard(),this._elementImages=this._cardElement.querySelector(".cards__image"),this._elementName=this._cardElement.querySelector(".cards__description"),this._likeIcon=this._cardElement.querySelector(".cards__like"),this._deleteIcon=this._cardElement.querySelector(".cards__delete"),this._elementName.textContent=this._name,this._elementImages.src=this._image,this._elementImages.alt=this._name,this._addEventHandlers(),this._cardElement}}])&&i(t.prototype,r),Object.defineProperty(t,"prototype",{writable:!1}),e}();function l(e){return l="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},l(e)}function s(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,(void 0,o=function(e,t){if("object"!==l(e)||null===e)return e;var r=e[Symbol.toPrimitive];if(void 0!==r){var n=r.call(e,"string");if("object"!==l(n))return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(e)}(n.key),"symbol"===l(o)?o:String(o)),n)}var o}var p=function(){function e(t,r){var n=t.items,o=t.renderer;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this._renderedItems=n,this._renderer=o,this._templateContainer=document.querySelector(r)}var t,r;return t=e,(r=[{key:"renderItems",value:function(){var e=this;this._renderedItems.forEach((function(t){e._renderer(t)}))}},{key:"addItem",value:function(e){this._templateContainer.prepend(e)}}])&&s(t.prototype,r),Object.defineProperty(t,"prototype",{writable:!1}),e}();function f(e){return f="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},f(e)}function y(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,m(n.key),n)}}function m(e){var t=function(e,t){if("object"!==f(e)||null===e)return e;var r=e[Symbol.toPrimitive];if(void 0!==r){var n=r.call(e,"string");if("object"!==f(n))return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(e)}(e);return"symbol"===f(t)?t:String(t)}var d=function(){function e(t){var r,n,o,i=this;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),r=this,o=function(e){"Escape"===e.key&&i.close()},(n=m(n="_handleEscClose"))in r?Object.defineProperty(r,n,{value:o,enumerable:!0,configurable:!0,writable:!0}):r[n]=o,this._popupItem=document.querySelector(t)}var t,r;return t=e,(r=[{key:"open",value:function(){this._popupItem.classList.add("popup_opened"),document.addEventListener("keydown",this._handleEscClose)}},{key:"close",value:function(){this._popupItem.classList.remove("popup_opened"),document.removeEventListener("keydown",this._handleEscClose)}},{key:"setEventListeners",value:function(){var e=this;this._popupItem.addEventListener("mousedown",(function(t){(t.target.classList.contains("popup_opened")||t.target.classList.contains("popup__close"))&&e.close()}))}}])&&y(t.prototype,r),Object.defineProperty(t,"prototype",{writable:!1}),e}();function v(e){return v="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},v(e)}function b(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,(void 0,o=function(e,t){if("object"!==v(e)||null===e)return e;var r=e[Symbol.toPrimitive];if(void 0!==r){var n=r.call(e,"string");if("object"!==v(n))return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(e)}(n.key),"symbol"===v(o)?o:String(o)),n)}var o}function h(){return h="undefined"!=typeof Reflect&&Reflect.get?Reflect.get.bind():function(e,t,r){var n=_(e,t);if(n){var o=Object.getOwnPropertyDescriptor(n,t);return o.get?o.get.call(arguments.length<3?e:r):o.value}},h.apply(this,arguments)}function _(e,t){for(;!Object.prototype.hasOwnProperty.call(e,t)&&null!==(e=w(e)););return e}function S(e,t){return S=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(e,t){return e.__proto__=t,e},S(e,t)}function g(e,t){if(t&&("object"===v(t)||"function"==typeof t))return t;if(void 0!==t)throw new TypeError("Derived constructors may only return object or undefined");return function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e)}function w(e){return w=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(e){return e.__proto__||Object.getPrototypeOf(e)},w(e)}var k=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),t&&S(e,t)}(u,e);var t,r,n,o,i=(n=u,o=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}(),function(){var e,t=w(n);if(o){var r=w(this).constructor;e=Reflect.construct(t,arguments,r)}else e=t.apply(this,arguments);return g(this,e)});function u(e){var t;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,u),(t=i.call(this,e))._popupDescription=document.querySelector(".popup__description"),t._popupImage=document.querySelector(".popup__image"),t}return t=u,(r=[{key:"open",value:function(e,t){this._popupDescription.textContent=e,this._popupImage.src=t,this._popupImage.alt=e,h(w(u.prototype),"open",this).call(this)}}])&&b(t.prototype,r),Object.defineProperty(t,"prototype",{writable:!1}),u}(d);function E(e){return E="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},E(e)}function j(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,(void 0,o=function(e,t){if("object"!==E(e)||null===e)return e;var r=e[Symbol.toPrimitive];if(void 0!==r){var n=r.call(e,"string");if("object"!==E(n))return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(e)}(n.key),"symbol"===E(o)?o:String(o)),n)}var o}function O(){return O="undefined"!=typeof Reflect&&Reflect.get?Reflect.get.bind():function(e,t,r){var n=P(e,t);if(n){var o=Object.getOwnPropertyDescriptor(n,t);return o.get?o.get.call(arguments.length<3?e:r):o.value}},O.apply(this,arguments)}function P(e,t){for(;!Object.prototype.hasOwnProperty.call(e,t)&&null!==(e=L(e)););return e}function C(e,t){return C=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(e,t){return e.__proto__=t,e},C(e,t)}function I(e,t){if(t&&("object"===E(t)||"function"==typeof t))return t;if(void 0!==t)throw new TypeError("Derived constructors may only return object or undefined");return function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e)}function L(e){return L=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(e){return e.__proto__||Object.getPrototypeOf(e)},L(e)}var q=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),t&&C(e,t)}(u,e);var t,r,n,o,i=(n=u,o=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}(),function(){var e,t=L(n);if(o){var r=L(this).constructor;e=Reflect.construct(t,arguments,r)}else e=t.apply(this,arguments);return I(this,e)});function u(e,t){var r,n=t.callbackFormSubmit;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,u),(r=i.call(this,e))._callbackFormSubmit=n,r._popupFormItem=r._popupItem.querySelector(".popup__form"),r}return t=u,(r=[{key:"_getInputValues",value:function(){var e=this;return this._inputList=Array.from(this._popupFormItem.querySelectorAll(".popup__input")),this._formValues={},this._inputList.forEach((function(t){e._formValues[t.name]=t.value})),this._formValues}},{key:"setEventListeners",value:function(){var e=this;O(L(u.prototype),"setEventListeners",this).call(this),this._popupFormItem.addEventListener("submit",(function(t){t.preventDefault(),e._callbackFormSubmit(e._getInputValues())}))}},{key:"close",value:function(){O(L(u.prototype),"close",this).call(this),this._popupFormItem.reset()}}])&&j(t.prototype,r),Object.defineProperty(t,"prototype",{writable:!1}),u}(d);function B(e){return B="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},B(e)}function x(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,(void 0,o=function(e,t){if("object"!==B(e)||null===e)return e;var r=e[Symbol.toPrimitive];if(void 0!==r){var n=r.call(e,"string");if("object"!==B(n))return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(e)}(n.key),"symbol"===B(o)?o:String(o)),n)}var o}var R=function(){function e(t){var r=t.usernameSelector,n=t.userDescriptionSelector;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this._username=document.querySelector(r),this._userDescription=document.querySelector(n)}var t,r;return t=e,(r=[{key:"getUserInfo",value:function(){return{username:this._username.textContent,description:this._userDescription.textContent}}},{key:"setUserInfo",value:function(e){var t=e.username,r=e.description;this._username.textContent=t,this._userDescription.textContent=r}}])&&x(t.prototype,r),Object.defineProperty(t,"prototype",{writable:!1}),e}(),T=document.querySelector(".profile__editor"),V=document.querySelector(".profile__add-mesto"),D=document.querySelector("#profile-popup"),F=D.querySelector(".popup__form"),A=document.querySelector("#cards-popup").querySelector(".popup__form"),U=D.querySelector("#username-input"),N=D.querySelector("#description-input"),H=new k("#image-popup");H.setEventListeners();var z=new R({usernameSelector:".profile__name",userDescriptionSelector:".profile__description"}),M=new q("#profile-popup",{callbackFormSubmit:function(e){z.setUserInfo({username:e.username,description:e.description}),M.close()}});M.setEventListeners();var G=function(e,t){H.open(e,t)},J=function(e){return new c(e,"#card-template",G).makeCard()},K=new p({items:[{name:"Архыз",link:"https://pictures.s3.yandex.net/frontend-developer/cards-compressed/arkhyz.jpg"},{name:"Челябинская область",link:"https://pictures.s3.yandex.net/frontend-developer/cards-compressed/chelyabinsk-oblast.jpg"},{name:"Иваново",link:"https://pictures.s3.yandex.net/frontend-developer/cards-compressed/ivanovo.jpg"},{name:"Камчатка",link:"https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kamchatka.jpg"},{name:"Холмогорский район",link:"https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kholmogorsky-rayon.jpg"},{name:"Байкал",link:"https://pictures.s3.yandex.net/frontend-developer/cards-compressed/baikal.jpg"}],renderer:function(e){K.addItem(J(e))}},".cards");K.renderItems();var Q=new q("#cards-popup",{callbackFormSubmit:function(e){K.addItem(J({name:e.placename,link:e.placeimage})),Q.close()}});Q.setEventListeners();var W=new n(e,A);W.enableValidationCheck(),new n(e,F).enableValidationCheck(),T.addEventListener("click",(function(){M.open();var e=z.getUserInfo();U.setAttribute("value",e.username),N.setAttribute("value",e.description)})),V.addEventListener("click",(function(){Q.open(),W.disableSubmitButton()}))})();