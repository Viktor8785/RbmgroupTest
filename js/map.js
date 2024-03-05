import { balloonCard } from "./balloon-template.js";

export var loadMap;
export var markerList = [];

export async function initMap() {
  await ymaps3.ready;

  const {YMap, YMapDefaultSchemeLayer, YMapDefaultFeaturesLayer} = ymaps3;

  const map = new YMap(
      document.getElementById('map'),
      {
        location: {
          center: [30.349012, 59.930534],
          zoom: 13
        }
      }
  );
  map.addChild(new YMapDefaultSchemeLayer({}));
  map.addChild(new YMapDefaultFeaturesLayer({}));
  return new Promise(resolve => {
    loadMap = map;
    resolve(map);
  });
}

function createMarker(object) {
  let markerCurrent = null;
  const {YMapMarker} = ymaps3;
  const markerElement = document.createElement('div');
  markerElement.classList.add('marker');
  markerElement.innerText = object.price;
  const balloonElement = createBalloon(object);
  markerElement.appendChild(balloonElement);
  markerElement.addEventListener('click', () => {
    balloonElement.classList.add('balloon--open');
    markerElement.parentElement.style.zIndex = 1;
    markerCurrent = markerElement;
  });
  document.addEventListener('click', (e) => {
    if(!e.composedPath().includes(markerElement) && balloonElement.classList.contains('balloon--open')) {
      markerCurrent.parentElement.style.zIndex = 0;
      markerCurrent = null;
      balloonElement.classList.remove('balloon--open');
    }
  })
  const marker = new YMapMarker({coordinates: [object.lon, object.lat]}, markerElement);
  return marker;
}

function createBalloon(object) {
  const balloonElement = document.createElement('div');
  balloonElement.classList.add('balloon');
  balloonElement.innerHTML = balloonCard;
  balloonElement.querySelector('.ballon-price').innerText = object.price;
  return balloonElement;
}

export function createMarkerList(objects, map) {
  objects.forEach(object => {
    const marker = createMarker(object);
    map.addChild(marker);
    markerList.push(marker);
  })
}

export function deleteMarkerList(map) {
  markerList.forEach(marker => {
    map.removeChild(marker);
  })
  markerList = [];
}
