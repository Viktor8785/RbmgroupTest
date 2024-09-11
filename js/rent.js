import {header} from './header.js';
import {sliderInit} from './slider.js'
import {initMap, createMarkerList, deleteMarkerList, markerList} from './map.js';

const cardList = document.querySelector('.card-list');
const cards = cardList.children;
const buttonWrapper = document.querySelector('.pagination-site-number-wrapper');
const buttons = buttonWrapper.querySelectorAll('button');

const map = document.querySelector("#map");
const dropdownRent = document.querySelector("#rent-dropdown");
const inputRent = document.querySelector("#rent-input")
const options = document.querySelectorAll(".options_item")
const bSale = document.querySelector("#bsale");
const bSaleMobile = document.querySelector("#bsale-mobile");
const bSaleTitle = document.querySelector("#bsale-title");
const bSaleInput1 = document.querySelector("#bsale-input1");
const bSaleInput2 = document.querySelector("#bsale-input2");

const windowHeight = document.documentElement.clientHeight;

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
    bSaleInput1.disabled = true;
    bSaleInput2.disabled = true;
    bSaleInput1.value = '';
    bSaleInput2.value = '';
  } else {
    bSaleTitle.classList.remove('business-sale_disabled');
    bSaleInput1.disabled = false;
    bSaleInput2.disabled = false;
  }
});

bSaleMobile.addEventListener('click', (ev) => {
  if (!bSaleMobile.checked) {
    bSaleTitle.classList.add('business-sale_disabled');
    bSaleInput1.disabled = true;
    bSaleInput2.disabled = true;
    bSaleInput1.value = '';
    bSaleInput2.value = '';
  } else {
    bSaleTitle.classList.remove('business-sale_disabled');
    bSaleInput1.disabled = false;
    bSaleInput2.disabled = false;
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
