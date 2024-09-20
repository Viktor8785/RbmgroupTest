import {header} from './header.js';
import {footer} from './footer.js';
import {sliderInit} from './slider.js';
import {initMap, createMarkerList, deleteMarkerList, markerList} from './map.js';

const map = document.querySelector("#map");
const cardList = document.querySelector('.card-list');
const cards = cardList.children;
const recall = document.querySelector('.favourites_recall');

const watchList = JSON.parse(localStorage.getItem('favorites'));

// if(!cards || !cards.length) {
//   recall.classList.add('favourites_recall--opened');
// }

if(!watchList || !watchList.length) {
  recall.classList.add('favourites_recall--opened');
} else {
  cardList.classList.remove('card-list--empty');
}
[...cards].forEach(card => {
  const slider = card.querySelector('.card_wrapper');
  sliderInit(slider, card, 5);
})

let loadMap = false;

initMap().then(map => {
  loadMap = true;
  if([...cards].length && !markerList.length) {
    deleteMarkerList(map);
    if(watchList && watchList.length) {
      createMarkerList([...cards], map);
    }
  }
});

header();
footer();
