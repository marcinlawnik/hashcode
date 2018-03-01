const pathCost = require('../utils/pathCost');

let id = 0;

const ridesParser = (data) => {
  let obj = {
    id: id++,
    start: {
      x: parseInt(data[0]),
      y: parseInt(data[1])
    },
    end: {
      x: parseInt(data[2]),
      y: parseInt(data[3])
    },
    eariest: parseInt(data[4]),
    latest:  parseInt(data[5])
  }
  obj.distance = pathCost(obj.start.x, obj.start.y, obj.end.x, obj.end.y);
  return obj;
};
  
module.exports = ridesParser;