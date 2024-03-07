import { popups } from '../scripts/constants';

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