const ridesParser = require('./utils/ridesParser');
const configParser = require('./utils/configParser');
class SelfDrivingRidesAnalizer {
  constructor(filename) {
    this.rides = [];
    fs.readFileSync(filename)
      .toString()
      .split('\n')
      .forEach((line, index, a) => {
        if(index === 0) {
          this.config = configParser(line.split(' '));
        } else {
          this.rides.push(ridesParser(line.split(' ')));
        }
      });
  }
}