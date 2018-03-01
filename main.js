const fs = require('fs');
const configParser = require('./utils/configParser');
const pathCost = require('./utils/pathCost');
const sets = [
  './sets/a_example.in',
  './sets/b_should_be_easy.in',
  './sets/c_no_hurry.in',
  './sets/d_metropolis.in',
  './sets/e_high_bonus.in'
]

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
            earliest: data[4],
            latest:  data[5],
            distance: pathCost(data[0], data[1], data[2], data[3])
          });
        }
      });
  }
}

const analizers = [];

if(process.argv.length == 2) {
  //if there is no console parameter, run for every input set
  sets.forEach(set => {
    analizers.push(new SelfDrivingRidesAnalizer(set));
  });

} else {
  for(let i=2; i<process.argv.length; i++) {
    switch(process.argv[i]) {
      case 'a': analizers.push(new SelfDrivingRidesAnalizer(sets[0])); break;
      case 'b': analizers.push(new SelfDrivingRidesAnalizer(sets[1])); break;
      case 'c': analizers.push(new SelfDrivingRidesAnalizer(sets[2])); break;
      case 'd': analizers.push(new SelfDrivingRidesAnalizer(sets[3])); break;
      case 'e': analizers.push(new SelfDrivingRidesAnalizer(sets[4])); break;
    }
  }
}

//TODO ALL THE CALCULATIONS!
analizers.forEach(analizer => {
  console.log(JSON.stringify(analizer, null, 2));
});
