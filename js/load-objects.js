function objectsData() {
  const count = 255;
  const data = [];
  for(let i=0; i < count; i++) {
    data.push(i);
  }
  return {
    count: count,
    data: data
  }
}

export function getObjects(page, pageSize) {
  const objects = objectsData();
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
