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