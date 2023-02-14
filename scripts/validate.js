
 // Проект работа 6
 const form = document.querySelector('.popup__form_type_form');
 const formInput = form.querySelector('.popup__text');

 // Выбираем элемент ошибки на основе уникального класса 
const formError = form.querySelector(`.${formInput.id}-error`);

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
 
 form.addEventListener('submit', function (evt) {
    evt.preventDefault();
  });
  
  formInput.addEventListener('input', function () {
    checkInputValidity(form, formInput);
  });

  const hasInvalidInput = (inputList) => {
    return inputList.some ((inputElement)=>{
      return !inputElement.validity.valid;
    });
 };

  const toggleButtonState = (inputList, buttonElement) => {
    if (hasInvalidInput(inputList)) {
      buttonElement.classList.add('popup__save_type_inactive');
    } else {
      buttonElement.classList.remove('popup__save_type_inactive');
    }
  };

  const setEventListeners = (formElement) => {
    const inputList = Array.from(formElement.querySelectorAll('.popup__text'));
    const buttonElement = formElement.querySelector('.popup__save');
    toggleButtonState(inputList, buttonElement);

    inputList.forEach ((inputElement) => {
        inputElement.addEventListener('input', ()=>{
            checkInputValidity(formElement,inputElement );
            toggleButtonState(inputList, buttonElement);
        });
    });
  };
 

  const enableValidation = () => {
    const formList = Array.from(document.querySelectorAll('.popup__form'));
    formList.forEach((formElement)=>{
        setEventListeners(formElement);
    });
  };

 


 enableValidation(); 