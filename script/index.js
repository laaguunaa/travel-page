// !ОбЪявляем переменные
// Попап
let popupForm = document.querySelector ('.popup');
// Формы ввода в попапе
let inputName = popupForm.querySelector ('.popup__input_type_name');
let inputAboutMe = popupForm.querySelector ('.popup__input_type_about-me');
// Поля в профайле
let profileName = document.querySelector ('.profile__name');
let profileAboutMe = document.querySelector ('.profile__about-me');
// Кнопки открытия и закрытия попапа
let editButton = document.querySelector('.profile__edit-button');
let closeButton = document.querySelector('.popup__close-button');

//! Связываем значения полей ввода с содержимым полей в профайле

// !Функция открытия попапа, чтобы использовать в событиях
function openPopup() {
    inputName.value=profileName.textContent;
    inputAboutMe.value=profileAboutMe.textContent;
    popupForm.classList.add('popup_opened');
};

// !Функция закрытия попапа, чтобы использовать в событиях
function closePopup() {
    popupForm.classList.remove('popup_opened');
};

// ! Функция обработки формы редактирования
function formSubmitHandler (evt) {
    evt.preventDefault(); // Отмена стандартной отправки формы.
    profileName.textContent = inputName.value;
    profileAboutMe.textContent = inputAboutMe.value;
    closePopup();
}

// ! События
editButton.addEventListener ('click', openPopup);
closeButton.addEventListener ('click', closePopup);
popupForm.addEventListener('submit', formSubmitHandler); 