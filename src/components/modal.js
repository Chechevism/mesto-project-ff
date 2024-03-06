const popupTypeImage = document.querySelector('.popup_type_image');
const popupImage =  document.querySelector(".popup__image");
const cardCaption = document.querySelector(".popup__caption");
const popups = document.querySelectorAll('.popup');

export function openPopupImg (evt) {
  popupImage.src = evt.target.src;
  popupImage.alt = evt.target.alt;
  cardCaption.textContent = evt.target.alt;
  openModal(popupTypeImage);
};
  
export function openModal(popup){
  popup.classList.toggle('popup_is-opened');
  document.addEventListener('keydown', closePopupEsc);
};

export function closeModal(popup){
  document.removeEventListener('keydown', closePopupEsc);
  popup.classList.remove('popup_is-opened');
};

function closePopupEsc(evt) {
  if (evt.key === 'Escape') {
    const popupIsOpened = document.querySelector('.popup_is-opened');
    closeModal(popupIsOpened);
  }
}

popups.forEach((popup) => {
  popup.addEventListener('mousedown', (evt) => { 
    if(evt.target.classList.contains('popup_is-opened')){
      closeModal(popup);
    }
    
    if(evt.target.classList.contains('popup__close')){
      closeModal(popup);
    }
  })  
})