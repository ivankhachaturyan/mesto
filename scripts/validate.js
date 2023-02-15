
//Проект работа 6
configValidation({
  // formSelector: '.popup__form',
  // inputSelector: '.popup__input',
  // submitButtonSelector: '.popup__button',
  // inactiveButtonClass: 'popup__button_disabled',
  // inputErrorClass: 'popup__input_type_error',
  // errorClass: 'popup__error_visible'
});

 // Функция, которая добавляет класс с ошибкой
 const showInputError = (formElement, inputElement, errorMessage) => {
    const errorElement = formElement.querySelector(`.${inputElement.id}-error`);
    inputElement.classList.add('popup__text_type_error');
     // Заменим содержимое span с ошибкой на переданный параметр
     errorElement.textContent = errorMessage;
     // Показываем сообщение об ошибке
     errorElement.classList.add('popup__input-error_active');
 };
 
 // Функция, которая удаляет класс с ошибкой
 const hideInputError = (formElement, inputElement) => {
    const errorElement = formElement.querySelector(`.${inputElement.id}-error`);
    inputElement.classList.remove('popup__text_type_error');
     // Скрываем сообщение об ошибке
     errorElement.classList.remove('popup__input-error_active');
      // Очистим ошибку
     errorElement.textContent = '';
 };
 
 // Функция, которая проверяет валидность поля
 
 const checkInputValidity = (formElement, inputElement) => {
     if (!inputElement.validity.valid) {
         // Если поле не проходит валидацию, покажем ошибку
         showInputError(formElement, inputElement, inputElement.validationMessage);
     } else {
         // Если проходит, скроем
         hideInputError(formElement, inputElement);
     }
 };

  const hasInvalidInput = (inputList) => {
    return inputList.some ((inputElement)=>{
      return !inputElement.validity.valid;
    });
 };

  const toggleButtonState = (inputList, buttonElement) => {
    if (hasInvalidInput(inputList)) {
      buttonElement.classList.add('popup__save_type_inactive');
      buttonElement.disabled = true;
    } else {
      buttonElement.classList.remove('popup__save_type_inactive');
      buttonElement.disabled = false;
    }
  };

  const setEventListeners = (formElement) => {
    const inputList = Array.from(formElement.querySelectorAll('.popup__text'));
    const buttonElement = formElement.querySelector('.popup__save');
    toggleButtonState(inputList, buttonElement);
    
    inputList.forEach ((inputElement) => {
        inputElement.addEventListener('input', ()=>{
            checkInputValidity(formElement, inputElement);
            toggleButtonState(inputList, buttonElement);
        });
    });
  };
 
  const enableValidation = () => {
    const formList = Array.from(document.querySelectorAll('.popup__form'));
    formList.forEach((formElement) => {
      formElement.addEventListener('submit', function (evt) {
        evt.preventDefault();
      });
      const fieldsetList = Array.from(formElement.querySelectorAll('.popup__fieldset'));
      fieldsetList.forEach((fieldSet) => {
      setEventListeners(fieldSet);
  }); 
    });
  };

 enableValidation();

//  очищает ошибки в popup
 function validationPopupErrors (valid) { 
  const deleteErrors = Array.from(valid.querySelectorAll('.popup__text')); 
  deleteErrors.forEach(function (item) { 
    hideInputError(valid, item); 
  }); 
  setEventListeners(valid); 
 }