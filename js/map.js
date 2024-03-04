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
  const {YMapMarker} = ymaps3;
  const markerElement = document.createElement('div');
  markerElement.classList.add('marker');
  markerElement.innerText = '340 000 ₽';
  const marker = new YMapMarker({coordinates: [object.lon, object.lat]}, markerElement);
  return marker;
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
