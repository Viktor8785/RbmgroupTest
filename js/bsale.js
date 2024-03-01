import {header} from './header.js';
import {sliderInit} from './slider.js'
import {cardBsale} from './card-bsale-template.js';

const map = document.querySelector(".map_img");
const inputBsale = document.querySelector("#bsale-input");
const dropdownBsale = document.querySelector("#bsale-dropdown");
const options = document.querySelectorAll(".options_item")
const dropdownPyback = document.querySelector("#payback-dropdown");
const inputPayback = document.querySelector("#payback-input")
const optionsPayback = document.querySelectorAll(".options_item--payback")
const budget1 = document.querySelector("#budget1");
const budget2 = document.querySelector("#budget2");
const budget3 = document.querySelector("#budget3");
const budget4 = document.querySelector("#budget4");
const budget5 = document.querySelector("#budget5");
const budgetInput = document.querySelector("#bsale-price-min");
const cardList = document.querySelector('.card-list');
const cards = cardList.children;

const windowHeight = document.documentElement.clientHeight;
map.style.height = windowHeight + 'px';

for(let j = 0; j < 2; j++) {
  for(let i=0; i < 4; i++) {
    const div = document.createElement('div');
    div.innerHTML = cardBsale;
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
    inputBsale.value = ev.target.innerText;
  });
});

dropdownBsale.onclick = function() {
  dropdownBsale.classList.toggle("active");
}

optionsPayback.forEach(option => {
  option.addEventListener('click', (ev) => {
    inputPayback.value = ev.target.innerText;
  });
});

dropdownPyback.onclick = function() {
  dropdownPyback.classList.toggle("active");
}

budget1.addEventListener('click', (ev) => {
  budgetInput.value = '500 000';
});
budget2.addEventListener('click', (ev) => {
  budgetInput.value = '1 000 000';
});
budget3.addEventListener('click', (ev) => {
  budgetInput.value = '2 000 000';
});
budget4.addEventListener('click', (ev) => {
  budgetInput.value = '3 000 000';
});
budget5.addEventListener('click', (ev) => {
  budgetInput.value = '5 000 000';
});

window.addEventListener('click', (ev) => {
  if (!ev.composedPath().includes(dropdownBsale) && dropdownBsale.classList.contains("active")) {
    dropdownBsale.classList.toggle("active");
  }
  if (!ev.composedPath().includes(dropdownPyback) && dropdownPyback.classList.contains("active")) {
    dropdownPyback.classList.toggle("active");
  }
});

window.addEventListener('touchstart', (ev) => {
  if (!ev.composedPath().includes(dropdownBsale) && dropdownBsale.classList.contains("active")) {
    dropdownBsale.classList.toggle("active");
  }
  if (!ev.composedPath().includes(dropdownPyback) && dropdownPyback.classList.contains("active")) {
    dropdownPyback.classList.toggle("active");
  }
});

header();
