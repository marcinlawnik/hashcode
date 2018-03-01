const fs = require('fs');

class SelfDrivingRidesAnalizer {
  constructor(filename) {
    this.rides = [];
    fs.readFileSync(filename)
      .toString()
      .split('\n')
      .forEach((line, index, a) => {
        if(index === 0) {
          this.config = line.split(' ');
        } else if(index != a.length - 1) {
          const data = line.split(' ');
          const ride = {
            start: {
              x: data[0],
              y: data[1]
            },
            end: {
              x: data[2],
              y: data[3]
            },
            eariest: data[4],
            latest:  data[5],
          };
          ride.distance = require('./utils/pathCost')(ride.start.x, ride.start.y, ride.end.x, ride.end.y);
          this.rides.push(ride);
        }
      });
  }
}

const analizer = new SelfDrivingRidesAnalizer('./sets/a_example.in');

console.log(JSON.stringify(analizer, null, 2));