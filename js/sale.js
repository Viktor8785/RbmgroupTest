import {header} from './header.js';
import {sliderInit} from './slider.js'
import {cardSale} from './card-sale-template.js';

const map = document.querySelector(".map_img");
const dropdownSale = document.querySelector("#sale-dropdown");
const inputSale = document.querySelector("#sale-input");
const options = document.querySelectorAll(".options_item")
const cardList = document.querySelector('.card-list');
const cards = cardList.children;

const windowHeight = document.documentElement.clientHeight;
map.style.height = windowHeight + 'px';

for(let j = 0; j < 2; j++) {
  for(let i=0; i < 4; i++) {
    const div = document.createElement('div');
    div.innerHTML = cardSale;
    const container = div.querySelector(".slider_container");
    const pictures = container.querySelectorAll(".card_picture");
    const picture = [...pictures][i].cloneNode(true);
    picture.classList.add('card_picture--active');
    [...pictures][i].remove();
    container.insertAdjacentElement('afterbegin', picture);
    const li = div.firstElementChild;
    li.classList.add('card--deal');
    cardList.insertAdjacentElement('afterbegin', li);
  }
}

[...cards].forEach(card => {
  const slider = card.querySelector('.card_wrapper');
  sliderInit(slider, card, 5);
})

options.forEach(option => {
  option.addEventListener('click', (ev) => {
    inputSale.value = ev.target.innerText;
  });
});

dropdownSale.onclick = function() {
  dropdownSale.classList.toggle("active");
};

window.addEventListener('click', (ev) => {
  if (!ev.composedPath().includes(dropdownSale) && dropdownSale.classList.contains("active")) {
    dropdownSale.classList.toggle("active");
  }
});

window.addEventListener('touchstart', (ev) => {
  if (!ev.composedPath().includes(dropdownSale) && dropdownSale.classList.contains("active")) {
    dropdownSale.classList.toggle("active");
  }
});

header();
