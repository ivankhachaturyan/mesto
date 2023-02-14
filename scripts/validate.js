
 // Проект работа 6
 const popupFormElement = document.querySelector('.popup__form_type_form');
 const formInput = popupFormElement.querySelector('.popup__text');

 // Выбираем элемент ошибки на основе уникального класса 
const formError = popupFormElement.querySelector(`.${formInput.id}-error`);

 // Функция, которая добавляет класс с ошибкой
 const showInputError = (element, errorMessage) => {
     element.classList.add('popup__text_type_error');
     // Заменим содержимое span с ошибкой на переданный параметр
     formError.textContent = errorMessage;
     // Показываем сообщение об ошибке
     formError.classList.add('popup__input-error_active');
 };
 
 // Функция, которая удаляет класс с ошибкой
 const hideInputError = (element) => {
     element.classList.remove('popup__text_type_error');
     // Скрываем сообщение об ошибке
     formError.classList.remove('popup__input-error_active');
      // Очистим ошибку
     formError.textContent = '';
 };
 
 // Функция, которая проверяет валидность поля
 
 const isValid = () => {
     if (!formInput.validity.valid) {
         // Если поле не проходит валидацию, покажем ошибку
         showInputError(formInput, formInput.validationMessage);
     } else {
         // Если проходит, скроем
         hideInputError(formInput);
     }
 };
 
 formInput.addEventListener('input', isValid);