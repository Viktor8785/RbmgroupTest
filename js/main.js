import {header} from './header.js';
import {footer} from './footer.js';
import {sliderInit} from './slider.js'

const cardList = document.querySelector('.card-list');
const cards = cardList.children;

[...cards].forEach(card => {
  const slider = card.querySelector('.card_wrapper');
  sliderInit(slider, card, 5);
})

header();
footer();
