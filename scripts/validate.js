
//  // Проект работа 6
const configObjectValidation = ({
  formSelector: '.popup__form',   
  inputSelector: '.popup__text',
  submitButtonSelector: '.popup__save',
  inactiveButtonClass: 'popup__save_type_inactive',
  inputErrorClass: 'popup__text_type_error',
  errorClass: 'popup__input-error_active',
  fieldsetSelector: '.popup__fieldset'
}); 

 // Функция, которая добавляет класс с ошибкой
 const showInputError = (formElement, inputElement, errorMessage, configValidation) => {
    const errorElement = formElement.querySelector(`.${inputElement.id}-error`);
    inputElement.classList.add(configValidation.inputErrorClass);
     // Заменим содержимое span с ошибкой на переданный параметр
     errorElement.textContent = errorMessage;
     // Показываем сообщение об ошибке
     errorElement.classList.add(configValidation.errorClass);
 };
 
 // Функция, которая удаляет класс с ошибкой
 const hideInputError = (formElement, inputElement, configValidation) => {
    const errorElement = formElement.querySelector(`.${inputElement.id}-error`);
    inputElement.classList.remove(configValidation.inputErrorClass);
     // Скрываем сообщение об ошибке
     errorElement.classList.remove(configValidation.errorClass);
      // Очистим ошибку
     errorElement.textContent = '';
 };
 
 // Функция, которая проверяет валидность поля
 
 const checkInputValidity = (formElement, inputElement, configValidation) => {
     if (!inputElement.validity.valid) {
         // Если поле не проходит валидацию, покажем ошибку
         showInputError(formElement, inputElement, inputElement.validationMessage, configValidation);
     } else {
         // Если проходит, скроем
         hideInputError(formElement, inputElement, configValidation);
     }
 };
 


  const hasInvalidInput = (inputList) => {
    return inputList.some ((inputElement)=>{
      return !inputElement.validity.valid;
    });
 };

  const toggleButtonState = (inputList, buttonElement, configValidation) => {
    if (hasInvalidInput(inputList, configValidation)) {
      buttonElement.classList.add(configValidation.inactiveButtonClass);
      buttonElement.disabled = true;
    } else {
      buttonElement.classList.remove(configValidation.inactiveButtonClass);
      buttonElement.disabled = false;
    }
  };

  const setEventListeners = (formElement, configValidation) => {
    const inputList = Array.from(formElement.querySelectorAll(configValidation.inputSelector));
    const buttonElement = formElement.querySelector(configValidation.submitButtonSelector);
    toggleButtonState(inputList, buttonElement, configValidation);
    
    inputList.forEach ((inputElement) => {
        inputElement.addEventListener('input', ()=>{
            checkInputValidity(formElement, inputElement, configValidation);
            toggleButtonState(inputList, buttonElement, configValidation);
        });
    });
  };
 
  const enableValidation = (configValidation) => {
    const formList = Array.from(document.querySelectorAll(configValidation.formSelector));
    formList.forEach((formElement) => {
      formElement.addEventListener('submit', function (evt) {
        evt.preventDefault();
      });
      const fieldsetList = Array.from(formElement.querySelectorAll(configValidation.fieldsetSelector));
      fieldsetList.forEach((fieldSet) => {
      setEventListeners(fieldSet, configValidation);
  }); 
    });
  };
 // Добавляем новое название переменной в цункцию. 
 enableValidation(configObjectValidation);

 function validationPopupErrors (valid, configValidation) { 
  const deleteErrors = Array.from(valid.querySelectorAll(configValidation.inputSelector)); 
  deleteErrors.forEach(function (elem) { 
    hideInputError(valid, elem, configValidation); 
  });  
 }