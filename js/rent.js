import {header} from './header.js';
import {footer} from './footer.js';
import {sliderInit} from './slider.js'
import {initMap, createMarkerList, deleteMarkerList, markerList} from './map.js';

const cardList = document.querySelector('.card-list');
const cards = cardList.children;
const buttonWrapper = document.querySelector('.pagination-site-number-wrapper');
const filterRent = document.querySelector('#filter-rent');
const buttons = buttonWrapper.querySelectorAll('button');

const map = document.querySelector("#map");
const dropdownRent = document.querySelector("#rent-dropdown");
const inputRent = document.querySelector("#rent-input")
const options = document.querySelectorAll(".options_item")
const bSale = document.querySelector("#bsale");
const bSaleMobile = document.querySelector("#bsale-mobile");
const bSaleTitle = document.querySelector("#bsale-title");
const priceBSale = document.querySelector("#price-bsale");
const priceBSaleMax = document.querySelector("#price-bsale-max");
const priceRent = document.querySelector("#price-rent");
const priceRentMax = document.querySelector("#price-rent-max");
const squareMin = document.querySelector('#square-min');
const squareMax = document.querySelector('#square-max');
const actual = document.querySelector('#actual');

const windowHeight = document.documentElement.clientHeight;

actual.checked = true;

priceRentMax.addEventListener('keypress', (evt) => {
  if (evt.which < 48 || evt.which > 57) {
      evt.preventDefault();
  }
});

priceRentMax.addEventListener('input', (evt) => {
  evt.target.value = evt.target.value.replace(/[^0-9]/g, '');
  evt.target.value = evt.target.value.replace(/\B(?=(\d{3})+(?!\d))/g, " ");
});


priceRent.addEventListener('keypress', (evt) => {
  if (evt.which < 48 || evt.which > 57) {
      evt.preventDefault();
  }
});

priceRent.addEventListener('input', (evt) => {
  evt.target.value = evt.target.value.replace(/[^0-9]/g, '');
  evt.target.value = evt.target.value.replace(/\B(?=(\d{3})+(?!\d))/g, " ");
});

squareMin.addEventListener('keypress', (evt) => {
  if ((evt.which < 48 || evt.which > 57) && String.fromCharCode(evt.which) !== ',') {
      evt.preventDefault();
  }
});

squareMax.addEventListener('keypress', (evt) => {
  if ((evt.which < 48 || evt.which > 57) && String.fromCharCode(evt.which) !== ',') {
      evt.preventDefault();
  }
});

priceBSaleMax.addEventListener('keypress', (evt) => {
  if (evt.which < 48 || evt.which > 57) {
      evt.preventDefault();
  }
});

priceBSaleMax.addEventListener('input', (evt) => {
  evt.target.value = evt.target.value.replace(/[^0-9]/g, '');
  evt.target.value = evt.target.value.replace(/\B(?=(\d{3})+(?!\d))/g, " ");
});


priceBSale.addEventListener('keypress', (evt) => {
  if (evt.which < 48 || evt.which > 57) {
      evt.preventDefault();
  }
});

priceBSale.addEventListener('input', (evt) => {
  evt.target.value = evt.target.value.replace(/[^0-9]/g, '');
  evt.target.value = evt.target.value.replace(/\B(?=(\d{3})+(?!\d))/g, " ");
});

filterRent.addEventListener('submit', (evt) => {
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

map.style.height = windowHeight + 'px';
let loadMap = false;

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
    inputRent.value = ev.target.innerText;
  });
})

dropdownRent.onclick = function() {
  dropdownRent.classList.toggle("active");
};

bSale.addEventListener('click', (ev) => {
  if (!bSale.checked) {
    bSaleTitle.classList.add('business-sale_disabled');
    priceBSale.disabled = true;
    priceBSaleMax.disabled = true;
    priceBSale.value = '';
    priceBSaleMax.value = '';
  } else {
    bSaleTitle.classList.remove('business-sale_disabled');
    priceBSale.disabled = false;
    priceBSaleMax.disabled = false;
  }
});

bSaleMobile.addEventListener('click', (ev) => {
  if (!bSaleMobile.checked) {
    bSaleTitle.classList.add('business-sale_disabled');
    priceBSale.disabled = true;
    priceBSaleMax.disabled = true;
    priceBSale.value = '';
    priceBSaleMax.value = '';
  } else {
    bSaleTitle.classList.remove('business-sale_disabled');
    priceBSale.disabled = false;
    priceBSaleMax.disabled = false;
  }
});

window.addEventListener('click', (ev) => {
  if (!ev.composedPath().includes(dropdownRent) && dropdownRent.classList.contains("active")) {
    dropdownRent.classList.toggle("active");
  }
});

window.addEventListener('touchstart', (ev) => {
  if (!ev.composedPath().includes(dropdownRent) && dropdownRent.classList.contains("active")) {
    dropdownRent.classList.toggle("active");
  }
});

header();
footer();
