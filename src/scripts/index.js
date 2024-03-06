import '../pages/index.css';
import { initialCards } from './cards';
import { createCard, activeLike,  } from '../components/card';
import { openPopupImg, openModal, closeModal, } from '../components/modal';

const cardList = document.querySelector('.places__list');
const popupEdit = document.querySelector('.popup_type_edit');
const popupAddCard = document.querySelector('.popup_type_new-card');
const editButton = document.querySelector('.profile__edit-button');
const addButton = document.querySelector('.profile__add-button');
const formElement = document.forms['edit-profile'];
const popupAddCardForm = document.forms['new-place'];
const inputAddCardName = document.querySelector('.popup__input_type_card-name'); 
const inputAddCardLink = document.querySelector('.popup__input_type_url');
const nameInput = formElement.elements.name;
const jobInput = formElement.elements.description;
const profileTitle = document.querySelector('.profile__title');
const profileDesc= document.querySelector('.profile__description');

initialCards.forEach((item) => {
  const card = createCard(item.name, item.link, activeLike, openPopupImg);
  cardList.append(card);
})

editButton.addEventListener('click', function() {
  openModal(popupEdit);
});

addButton.addEventListener('click', function() {
  openModal(popupAddCard);
});


nameInput.value = profileTitle.textContent
jobInput.value = profileDesc.textContent

function handleFormSubmit(evt) {
  evt.preventDefault(); 
  profileTitle.textContent = nameInput.value;
  profileDesc.textContent = jobInput.value;
  closeModal(popupEdit);
};

function handleImageSubmit(evt) {
  evt.preventDefault(); 
  cardList.prepend(createCard(inputAddCardName.value, inputAddCardLink.value));
  popupAddCardForm.reset();
  closeModal(popupAddCard);
}

formElement.addEventListener('submit', handleFormSubmit);
popupAddCardForm.addEventListener('submit', handleImageSubmit);