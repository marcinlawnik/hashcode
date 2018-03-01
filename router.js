class Router {
  constructor(deadline) {
    this.deadline = deadline;
  }

  route() {
    for (var t = 0; t < this.deadline; t++) {
      for (car in cars) {
        if (car.time <= t) {
          pick(car, t);
        }
      }
    }
  }

  pick(car, t) {

  }
}

module.exports = Router;