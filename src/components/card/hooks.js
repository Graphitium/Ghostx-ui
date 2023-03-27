const matrixCache = new Map();

export const useMatrix = (size = {}, center = {}) => {
  const key = `${size.x}|${size.y}|${center.x}|${center.y}`;

  if (matrixCache.has(key)) {
    return matrixCache.get(key);
  }

  let array = [];

  for (let x = 0; x < size.x; x++) {
    array[x] = [];

    for (let y = 0; y < size.y; y++) {
      array[x][y] = Math.sqrt(Math.pow(x - center.y, 2) + Math.pow(y - center.x, 2));
    }
  }

  array = array.flat();

  matrixCache.set(key, array);

  return array;
};