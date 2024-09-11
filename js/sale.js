import {header} from './header.js';
import {sliderInit} from './slider.js'
import {initMap, createMarkerList, deleteMarkerList, markerList} from './map.js';

const cardList = document.querySelector('.card-list');
const cards = cardList.children;
const buttonWrapper = document.querySelector('.pagination-site-number-wrapper');
const buttons = buttonWrapper.querySelectorAll('button');

const map = document.querySelector("#map");
const dropdownSale = document.querySelector("#sale-dropdown");
const inputSale = document.querySelector("#sale-input");
const options = document.querySelectorAll(".options_item")

const windowHeight = document.documentElement.clientHeight;
map.style.height = windowHeight + 'px';
let loadMap = false;

buttons.forEach(button => {
  button.addEventListener('click', () => {
    buttons.forEach(item => {
      if(item.classList.contains('active')) {
        item.classList.remove('active');
      }
    })
    button.classList.add('active');
  });
});

[...cards].forEach(card => {
  const slider = card.querySelector('.card_wrapper');
  sliderInit(slider, card, 5);
});

initMap().then(map => {
  loadMap = true;
  if([...cards].length && !markerList.length) {
    deleteMarkerList(map);
    createMarkerList([...cards], map);
  }
});

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
