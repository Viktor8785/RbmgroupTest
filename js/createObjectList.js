import {sliderInit} from './slider.js'
import {cardRent} from './card-rent-template.js';

function createObject(object) {
  const div = document.createElement('div');
    div.innerHTML = cardRent;
    const container = div.querySelector(".slider_container");
    const pictures = container.querySelectorAll(".card_picture");
    [...pictures][0].classList.add('card_picture--active');
    const card = div.firstElementChild;
    const slider = card.querySelector('.card_wrapper');
    sliderInit(slider, card, 5);
    card.classList.add('card--deal');
    return card;
}

export function createObjectList(objects, cardList) {
  const cards = cardList.children;
  if(cards && cards.length) {
    for(let i = cards.length - 1; i >= 0; i--)
    cards[i].remove();
  }
  for(let i = 0; i < objects.length; i++) {
    const card = createObject(objects[i]);
    cardList.insertAdjacentElement('afterbegin', card);
  }
}
