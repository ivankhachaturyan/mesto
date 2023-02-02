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
const popupBtnopen = document.querySelector('.profile__button');
const popupContainer = document.querySelector('.popup_type_form');
const popupBtnclose = document.querySelector('.popup__close_type_form');
const profileName = document.querySelector('.profile__name');
const profileText = document.querySelector('.profile__text');
const nameInput = document.querySelector('.popup__text_form_name');
const jobInput = document.querySelector('.popup__text_form_prof');
const formElement = document.querySelector('.popup__form_type_form'); 

// Открытие попап для карточек. 

const popupCardContainer = document.querySelector('.popup_type_card');
const popupCardBtnopen = document.querySelector('.profile__add-button');
const popupCardBtnclose = document.querySelector('.popup__close_type_card');

const titleInput = document.querySelector('.popup__text_title_card');
const linkInput = document.querySelector('.popup__text_link_card');


// Нашли переменную которую мы будем копировать(клонировать)
const template = document.querySelector('#card-elements').content.querySelector('.element');

// Нашли переменную В которую будем вкладывать карточки
const elements = document.querySelector('.elements');

const formCardElement = document.querySelector('.popup__form_type_card');

// Открытие попап для картинок.

const popupImageContainer = document.querySelector('.popup_type_image');
const popupImageBtnclose = document.querySelector('.popup__close_type_image');

const popupImage = document.querySelector('.popup__image');
const popupImgSubtitle = document.querySelector('.popup__subtitle');

// Функции ПР4

function openPopup (item) {
    item.classList.add("popup_opened");
}

function closePopup (item) {
  item.classList.remove("popup_opened");
}


popupBtnopen.addEventListener('click', function(){
  nameInput.value = profileName.textContent;
  jobInput.value = profileText.textContent;
  openPopup(popupContainer);
});


popupBtnclose.addEventListener('click', function() {
  closePopup(popupContainer);
});


function handleFormSubmit (evt) {
    evt.preventDefault();
    profileName.textContent = nameInput.value; 
    profileText.textContent = jobInput.value;
    closePopup ();
}

formElement.addEventListener('submit', handleFormSubmit); 

// Функции ПР5
popupCardBtnopen.addEventListener('click', function(){
  titleInput.value = titleInput.textContent;
  linkInput.value =  linkInput.textContent;
  openPopup(popupCardContainer);
});

popupCardBtnclose.addEventListener('click', function(){
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

popupImageBtnclose.addEventListener('click', function(){
  closePopup (popupImageContainer);
});