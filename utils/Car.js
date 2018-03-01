let allCars = [];
let id = 0;

class Car {
  static all() {
    return allCars.sort((a, b) => {
      return a.time - b.time;
    });
  };

  static clear() {
    allCars = [];
  }

  constructor() {
    this.id = id++;
    this.x = 0;
    this.y = 0;
    this.time = 0;
    this.score = 0;
    this.count = 0;
    this.rides = [];
    allCars.push(this);
  }  
}

module.exports = Car;