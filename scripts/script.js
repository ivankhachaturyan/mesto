const initialCards = [
  {
    name: 'Архыз',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/arkhyz.jpg'
  },
  {
    name: 'Челябинская область',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/chelyabinsk-oblast.jpg'
  },
  {
    name: 'Иваново',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/ivanovo.jpg'
  },
  {
    name: 'Камчатка',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kamchatka.jpg'
  },
  {
    name: 'Холмогорский район',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kholmogorsky-rayon.jpg'
  },
  {
    name: 'Байкал',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/baikal.jpg'
  }
];

// Открытие попап ПР4
const popupBtnOpen = document.querySelector('.profile__button');
const popupContainer = document.querySelector('.popup_type_form');
const popupBtnClose = document.querySelector('.popup__close_type_form');
const profileName = document.querySelector('.profile__name');
const profileText = document.querySelector('.profile__text');
const nameInput = document.querySelector('.popup__text_form_name');
const jobInput = document.querySelector('.popup__text_form_prof');

const formElement = document.querySelector('.popup__form_type_form'); 

// Открытие попап для карточек. 

const popupCardContainer = document.querySelector('.popup_type_card');
const popupCardBtnOpen = document.querySelector('.profile__add-button');
const popupCardBtnClose = document.querySelector('.popup__close_type_card');

const titleInput = document.querySelector('.popup__text_title_card');
const linkInput = document.querySelector('.popup__text_link_card');


// Нашли переменную которую мы будем копировать(клонировать)
const template = document.querySelector('#card-elements').content.querySelector('.element');

// Нашли переменную В которую будем вкладывать карточки
const elements = document.querySelector('.elements');

const formCardElement = document.querySelector('.popup__form_type_card');

// Открытие попап для картинок.

const popupImageContainer = document.querySelector('.popup_type_image');
const popupImageBtnClose = document.querySelector('.popup__close_type_image');

const popupImage = document.querySelector('.popup__image');
const popupImgSubtitle = document.querySelector('.popup__subtitle');

// Функции ПР4

function openPopup (item) {
    item.classList.add("popup_opened");
    document.addEventListener('mousedown', closePopupWindow);
    document.addEventListener('keydown', closePopupEsc);
}

function closePopup (item) {
  item.classList.remove("popup_opened");
  document.removeEventListener('mousedown', closePopupWindow);
  document.removeEventListener('keydown', closePopupEsc);
}


popupBtnOpen.addEventListener('click', function(){
  nameInput.value = profileName.textContent;
  jobInput.value = profileText.textContent;
  openPopup(popupContainer);
  // Добавили проверку на валидность при открытии
  // Функция блокировки кнопки "сохранить"
  validationPopupErrors(popupContainer, configObjectValidation);
  notActivBtn (popupContainer, configObjectValidation);
});


popupBtnClose.addEventListener('click', function() {
  closePopup(popupContainer);
});


function handleFormSubmit (evt) {
    evt.preventDefault();
    profileName.textContent = nameInput.value; 
    profileText.textContent = jobInput.value;
    closePopup (popupContainer);

}

formElement.addEventListener('submit', handleFormSubmit); 

// Функции ПР5
popupCardBtnOpen.addEventListener('click', function(){
  titleInput.value = titleInput.textContent;
  linkInput.value =  linkInput.textContent;
  // Добавили проверку на валидность при открытии
  // Функция блокировки кнопки "сохранить"
  openPopup(popupCardContainer);
  validationPopupErrors(popupCardContainer, configObjectValidation);
  notActivBtn (popupCardContainer, configObjectValidation);
});

popupCardBtnClose.addEventListener('click', function(){
  closePopup(popupCardContainer);
});

// Создаем функцию для рендеринга карторчек 
function renderCards () {
    const cards = initialCards.map ((item) => {
    return createCard(item);
    })
    elements.append(...cards);
}

renderCards();

formCardElement.addEventListener('submit', (evt) => {
    evt.preventDefault();
    const itemTitleInput = titleInput.value;
    const itemLinkInput = linkInput.value;
    const card = createCard({name:itemTitleInput, link:itemLinkInput});
    elements.prepend(card);
    closePopup(popupCardContainer);
});

function createCard (item) {
  const card = template.cloneNode(true);
  card.querySelector('.element__title').textContent = item.name;
  card.querySelector('.element__image').alt = item.name;
  card.querySelector('.element__image').src = item.link;

  card.querySelector('.element__delete').addEventListener('click', () => {
    card.remove();
  })
  card.querySelector('.element__like').addEventListener('click', function(evt){
    evt.target.classList.toggle('element__like_active');
  })

  card.querySelector('.element__image').addEventListener('click', openPopupImage);


  return card;
}

function openPopupImage (evt) {
  popupImgSubtitle.textContent = evt.target.closest('.element').querySelector('.element__title').textContent;
  popupImage.src = evt.target.closest('.element').querySelector('.element__image').src;
  popupImage.alt = evt.target.closest('.element').querySelector('.element__image').alt;
  openPopup (popupImageContainer);
}

popupImageBtnClose.addEventListener('click', function(){
  closePopup (popupImageContainer);
});

function closePopupWindow (evt) { 
  if (evt.target === document.querySelector('.popup_opened')) {
    closePopup(evt.target);
  }
};

function closePopupEsc (evt) {
  if (evt.code === "Escape" && document.querySelector('.popup_opened')){
    closePopup(document.querySelector('.popup_opened'));
  }
};

function notActivBtn (item, configValidation) {
  const submitBtn = item.querySelector(configValidation.submitButtonSelector);
  submitBtn.disabled = true;
}