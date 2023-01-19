const popupBtnopen = document.querySelector('.profile__button');
const popupContainer = document.querySelector('.popup');
const popupBtnclose = document.querySelector('.popup__close');

popupBtnopen.addEventListener('click', openPopup);
popupBtnclose.addEventListener('click', closePopup);

function openPopup () {
    popupContainer.classList.add("popup_opened");
}

function closePopup () {
    popupContainer.classList.remove("popup_opened");
}

const profileName = document.querySelector('.profile__name');
const profileText = document.querySelector('.profile__text');

console.log(profileName.textContent);
console.log(profileText.textContent);

const nameInput = document.querySelector('.popup__text_name');
const jobInput = document.querySelector('.popup__text_prof');

nameInput.value = profileName.textContent;
jobInput.value = profileText.textContent;

console.log(nameInput.value);
console.log(jobInput.value);

const formElement = document.querySelector('.popup__container');

function handleFormSubmit (evt) {
    evt.preventDefault();
    const nameInputnew = nameInput.value;
    const jobInputnew = jobInput.value;
    profileName.textContent = nameInputnew; 
    profileText.textContent = jobInputnew;
    closePopup ();
}

formElement.addEventListener('submit', handleFormSubmit); 
