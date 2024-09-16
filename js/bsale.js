import {header} from './header.js';
import {footer} from './footer.js';
import {sliderInit} from './slider.js'
import {initMap, createMarkerList, deleteMarkerList, markerList} from './map.js';

const cardList = document.querySelector('.card-list');
const cards = cardList.children;
const buttonWrapper = document.querySelector('.pagination-site-number-wrapper');
const filterBSale = document.querySelector('#filter-bsale');
const buttons = buttonWrapper.querySelectorAll('button');

const map = document.querySelector("#map");
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
const bSalePrice = document.querySelector("#bsale-price-min");
const bSalePriceMax = document.querySelector("#bsale-price-max");
const profit = document.querySelector("#profit");

const windowHeight = document.documentElement.clientHeight;
map.style.height = windowHeight + 'px';
let loadMap = false;

bSalePriceMax.addEventListener('keypress', (evt) => {
  if (evt.which < 48 || evt.which > 57) {
      evt.preventDefault();
  }
});

bSalePriceMax.addEventListener('input', (evt) => {
  evt.target.value = evt.target.value.replace(/[^0-9]/g, '');
  evt.target.value = evt.target.value.replace(/\B(?=(\d{3})+(?!\d))/g, " ");
});


bSalePrice.addEventListener('keypress', (evt) => {
  if (evt.which < 48 || evt.which > 57) {
      evt.preventDefault();
  }
});

bSalePrice.addEventListener('input', (evt) => {
  evt.target.value = evt.target.value.replace(/[^0-9]/g, '');
  evt.target.value = evt.target.value.replace(/\B(?=(\d{3})+(?!\d))/g, " ");
});

profit.addEventListener('keypress', (evt) => {
  if (evt.which < 48 || evt.which > 57) {
      evt.preventDefault();
  }
});

profit.addEventListener('input', (evt) => {
  evt.target.value = evt.target.value.replace(/[^0-9]/g, '');
  evt.target.value = evt.target.value.replace(/\B(?=(\d{3})+(?!\d))/g, " ");
});


filterBSale.addEventListener('submit', (evt) => {
  evt.preventDefault();
});

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
  bSalePrice.value = '500 000';
});
budget2.addEventListener('click', (ev) => {
  bSalePrice.value = '1 000 000';
});
budget3.addEventListener('click', (ev) => {
  bSalePrice.value = '2 000 000';
});
budget4.addEventListener('click', (ev) => {
  bSalePrice.value = '3 000 000';
});
budget5.addEventListener('click', (ev) => {
  bSalePrice.value = '5 000 000';
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
footer();
