const ridesParser = require('./utils/ridesParser');
const configParser = require('./utils/configParser');
const Car = require('./utils/Car');
const fs = require('fs');
class SelfDrivingRidesAnalizer {
  constructor(filename) {
    this.filename = filename.split('/')[2].split('.')[0]+'.out';
    this.rides = [];
    fs.readFileSync(filename)
      .toString()
      .split('\n')
      .forEach((line, index, a) => {
        if(index === 0) {
          this.config = configParser(line.split(' '));
        } else if (index < a.length - 1 ) {
          this.rides.push(ridesParser(line.split(' ')));
        }
      });
    for(let i = 0; i < this.config.vehicles; i++) {
      new Car();
    }
  }
}

module.exports = SelfDrivingRidesAnalizer;