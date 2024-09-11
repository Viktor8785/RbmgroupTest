import {header} from './header.js';
import {initMap, createMarkerList, deleteMarkerList, changeCenter, ZOOM} from './map.js';

const photos = document.querySelectorAll(".photos_picture");
const objectPhotos = document.querySelectorAll(".object-sale_picture");
const data = {
  lon: 30.349012,
  lat: 59.930534,
};

initMap().then(map => {
  const location = {
    center: [data.lon, data.lat],
    zoom: ZOOM
  }
  changeCenter(location);
  deleteMarkerList(map);
  createMarkerList([data], map);
});

photos.forEach((photo, index) => {
  photo.addEventListener('click', (ev) => {
    objectPhotos.forEach(objectPhoto => {
      if(objectPhoto.classList.contains('object-sale_picture--active')) {
        objectPhoto.classList.remove('object-sale_picture--active');
      }
    });
    [...objectPhotos][index].classList.add('object-sale_picture--active');
  });
});

header();
