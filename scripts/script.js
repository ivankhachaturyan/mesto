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
// Нашли переменную которую мы будем копировать(клонировать)
const template = document.querySelector('#card-elements').content.querySelector('.element');

// Нашли переменную В которую будем вкладывать карточки

const elements = document.querySelector('.elements');

// Создаем функцию для рендеринга карторчек 

function renderCards () {
    initialCards.forEach ((item) => {
        const card = template.cloneNode(true);
        card.querySelector('.element__title').textContent = item.name;
        card.querySelector('.element__image').src = item.link;

        elements.append(card)
    })
}

renderCards();


// Открытие попап ПР4
const popupBtnopen = document.querySelector('.profile__button');
const popupContainer = document.querySelector('.popup');
const popupBtnclose = document.querySelector('.popup__close');
const profileName = document.querySelector('.profile__name');
const profileText = document.querySelector('.profile__text');
const nameInput = document.querySelector('.popup__text_form_name');
const jobInput = document.querySelector('.popup__text_form_prof');
const formElement = document.querySelector('.popup__form'); 


function openPopup () {
    popupContainer.classList.add("popup_opened");
    nameInput.value = profileName.textContent;
    jobInput.value = profileText.textContent;
}

function closePopup () {
    popupContainer.classList.remove("popup_opened");
}

popupBtnopen.addEventListener('click', openPopup);
popupBtnclose.addEventListener('click', closePopup);



function handleFormSubmit (evt) {
    evt.preventDefault();
    profileName.textContent = nameInput.value; 
    profileText.textContent = jobInput.value;
    closePopup ();
}

formElement.addEventListener('submit', handleFormSubmit); 