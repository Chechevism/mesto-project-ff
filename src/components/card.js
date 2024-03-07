import { cardTemplate } from '../scripts/constants';

export function createCard(name, link, deleteCardCallback, openImageCallback, toggleLikeCallback) {
  const cardElement = cardTemplate.querySelector('.card').cloneNode(true);
  const cardImage = cardElement.querySelector('.card__image');
  const likeButton = cardElement.querySelector('.card__like-button');
  likeButton.addEventListener('click',() => toggleLikeCallback(likeButton));
  cardImage.addEventListener('click',() => openImageCallback(name, link));
  cardImage.alt = `Картинка карточки: ${name}`;
  cardImage.src = link;
  cardElement.querySelector('.card__title').textContent = name;
  cardElement.querySelector('.card__delete-button').addEventListener('click', () => deleteCardCallback(cardElement));
  return cardElement;
}

export function activeLike(like) {
  like.classList.toggle('card__like-button_is-active');
}

export function removeCard(card) {
  card.remove();
}