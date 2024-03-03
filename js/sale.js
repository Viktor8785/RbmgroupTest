import {header} from './header.js';
import { Pagination } from './paginator.js';
import {SALE} from './deals.js';

const map = document.querySelector(".map_img");
const dropdownSale = document.querySelector("#sale-dropdown");
const inputSale = document.querySelector("#sale-input");
const options = document.querySelectorAll(".options_item")

const windowHeight = document.documentElement.clientHeight;
map.style.height = windowHeight + 'px';
const startPage = 1;
const pageSize = 20;

new Pagination(SALE, document.querySelector(".card-list"), document.querySelector(".pagination-wrapper"), startPage, pageSize);

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
