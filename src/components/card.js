import { openPopupImg } from "./modal"; 
 
const cardTemplate = document.querySelector('#card-template').content;

export function createCard(name, link) {
  const cardElement = cardTemplate.querySelector('.card').cloneNode(true);
  const cardImage = cardElement.querySelector('.card__image');
  const likeButton = cardElement.querySelector('.card__like-button');
  likeButton.addEventListener('click', activeLike);
  cardImage.addEventListener('click', openPopupImg);
  cardImage.alt = `Картинка карточки: ${name}`;
  cardImage.src = link;
  cardElement.querySelector('.card__title').textContent = name;
  cardElement.querySelector('.card__delete-button').addEventListener('click', () => removeCard(cardElement));
  return cardElement;
}

export function activeLike(evt) {
  evt.target.classList.toggle('card__like-button_is-active');
}

function removeCard(card) {
  card.remove();
}