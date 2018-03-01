const createArray = (w, h, val) => {
  var arr = [];
  for(i = 0; i < h; i++) {
      arr[i] = [];
      for(j = 0; j < w; j++) {
          arr[i][j] = val;
      }
  }
  return arr;
}

module.exports = createArray;