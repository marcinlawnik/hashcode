const fs = require('fs');
const configParser = require('./utils/configParser');

class SelfDrivingRidesAnalizer {
  constructor(filename) {
    this.rides = [];
    fs.readFileSync(filename)
      .toString()
      .split('\n')
      .forEach((line, index) => {
        if(index === 0) {
          this.config = configParser(line.split(' '));
        } else {
          this.rides.push(line.split(' '));
        }
      });
  }
}

const analizer = new SelfDrivingRidesAnalizer('./sets/a_example.in');

console.log(analizer);