const allCars = [];
let id = 0;

class Car {
  static all() {
    return allCars.sort((a, b) => {
      return a.time - b.time;
    });
  };

  constructor() {
    this.id = id++;
    this.x = 0;
    this.y = 0;
    this.time = 0;
    allCars.push(this);
  }  
}

module.exports = Car;