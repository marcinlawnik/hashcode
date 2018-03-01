const fs = require('fs');

class SelfDrivingRidesAnalizer {
  constructor(filename) {
    this.rides = [];
    fs.readFileSync(filename)
      .toString()
      .split('\n')
      .forEach((line, index) => {
        if(index === 0) {
          this.config = line.split(' ');
        } else {
          const data = line.split(' ');
          this.rides.push({
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
          });
        }
      });
  }
}

const analizer = new SelfDrivingRidesAnalizer('./sets/a_example.in');

console.log(JSON.stringify(analizer, null, 2));