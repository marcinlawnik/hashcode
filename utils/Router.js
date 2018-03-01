const Car = require('../utils/Car');
const pathCost = require('../utils/pathCost');

class Router {
  constructor(rides, deadline, bonus) {
    this.rides = rides;
    this.deadline = deadline;
    this.bonus = bonus;
  }

  route() {
    for (let t = 0; t < this.deadline; t++) {
      for (let car of Car.all()) {
        if (car.time <= t) {
          this.pick(car, t);
        }
      }
    }
  }

  pick(car, t) {
    let best = { r: 0, index: -1, score: 0 }
    //console.log(this.rides)
    if(this.rides.length <= 0) return;
    this.rides.forEach((ride, i) => {
      const costToStart = pathCost(car.x, car.y, ride.start.x, ride.start.y);
      const wholeCost = costToStart + ride.distance;
      let score = ride.distance;

      if (t + costToStart < ride.eariest) {
        score += this.bonus;
       }

       const endTime = Math.max(wholeCost, ride.eariest + ride.distance);
       const r = score;
       score /= endTime;

      //console.log(best.score, score, best.score < score)
      if( this.deadline > t + endTime && best.score < score ) {
        //console.log('best')
        best.index = i;
        best.r = r;
        best.score = ride.distance + this.bonus;
        best.endTime = endTime;
        //console.log(best)
      }
    });

    if(best.index === -1) return;
    
    const ride = this.rides[best.index];
    car.x = ride.end.x;
    car.y = ride.end.y;
    car.time += best.endTime;
    car.score += best.r;
    car.count += 1;
    car.rides.push(ride.id);
    this.rides.splice(best.index, 1);
  }
}

module.exports = Router;