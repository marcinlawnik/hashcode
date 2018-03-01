const pathCost = require('../utils/pathCost');

const ridesParser = (data) => {
  let obj = {
    start: {
      x: data[0],
      y: data[1]
    },
    end: {
      x: data[2],
      y: data[3]
    },
    eariest: data[4],
    latest:  data[5]
  }
  obj.distance = pathCost(obj.start.x, obj.start.y, obj.end.x, obj.end.y);
  return obj;
};
  
module.exports = ridesParser;