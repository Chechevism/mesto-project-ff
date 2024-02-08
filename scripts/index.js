// @todo: Темплейт карточки

// @todo: DOM узлы

// @todo: Функция создания карточки

// @todo: Функция удаления карточки

// @todo: Вывести карточки на страницу

const cardList = document.querySelector('.places__list');
const cardTemplate = document.querySelector('#card-template').content;

initialCards.forEach((item) => {
  const card = createCard(item.name, item.link);
  cardList.append(card);
})

function createCard(name, link) {
  const cardElement = cardTemplate.cloneNode(true);
  cardElement.querySelector('.card__title').textContent = name;
  cardElement.querySelector('.card__image').alt = name;
  cardElement.querySelector('.card__image').src = link;
  cardElement.querySelector('.card__delete-button').addEventListener('click', deleteCard);
  return cardElement;
}

function deleteCard(event) {
  event.target.closest('.card').remove();
}