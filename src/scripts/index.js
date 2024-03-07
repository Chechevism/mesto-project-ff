import '../pages/index.css';
import { initialCards } from './cards';
import { cardList, popupEdit, popupAddCard, popupTypeImage, popupImage, cardCaption, editButton, addButton, formElement, popupAddCardForm, inputAddCardName, inputAddCardLink, nameInput, jobInput, profileTitle, profileDesc } from './constants';
import { createCard, activeLike, removeCard } from '../components/card';
import { openModal, closeModal } from '../components/modal';

initialCards.forEach((item) => {
  const card = createCard(item.name, item.link, removeCard, openPopupImg, activeLike);
  cardList.append(card);
})

editButton.addEventListener('click', function() {
  nameInput.value = profileTitle.textContent;
  jobInput.value = profileDesc.textContent;
  openModal(popupEdit);
});

addButton.addEventListener('click', function() {
  openModal(popupAddCard);
});

function openPopupImg (name, link) {
  popupImage.src = link;
  popupImage.alt = name;
  cardCaption.textContent = name;
  openModal(popupTypeImage);
};

function handleProfileFormSubmit(evt) {
  evt.preventDefault(); 
  profileTitle.textContent = nameInput.value;
  profileDesc.textContent = jobInput.value;
  closeModal(popupEdit);
};

function handleImageSubmit(evt) {
  evt.preventDefault(); 
  cardList.prepend(createCard(inputAddCardName.value, inputAddCardLink.value, removeCard, openPopupImg, activeLike));
  popupAddCardForm.reset();
  closeModal(popupAddCard);
}

formElement.addEventListener('submit', handleProfileFormSubmit);
popupAddCardForm.addEventListener('submit', handleImageSubmit);