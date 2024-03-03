import {RENT, SALE, BSALE} from './deals.js';

function getObjectsData(deal) {
  let count = 0;
  let data = [];
  switch (deal) {
    case RENT: {
      count = 255;
      data = [];
      for(let i=0; i < count; i++) {
        data.push(i);
      }
      break;
    }
    case SALE: {
      count = 241;
      data = [];
      for(let i=0; i < count; i++) {
        data.push(i);
      }
      break;
    }
    case BSALE: {
      count = 32;
      data = [];
      for(let i=0; i < count; i++) {
        data.push(i);
      }
      break;
    }
  }
  return {
    count: count,
    data: data
  }
}

export function getObjects(deal, page, pageSize) {
  const objects = getObjectsData(deal);
  const start = page * pageSize;
  if(start < 0 || start >= objects.data.length) {
    return {
      count: objects.count,
      data: []
    }
  }
  let end = (page + 1) * pageSize;
  if(end < 0 ) {
    return {
      count: objects.count,
      data: []
    }
  }
  if(end >= objects.data.length) {
    end = objects.data.length
  }

  return {
    count: objects.count,
    data: objects.data.slice(start, end)
  }
}
