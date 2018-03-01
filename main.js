const fs = require('fs');
const SelfDrivingRidesAnalizer = require('./analizer');
const sets = [
  './sets/a_example.in',
  './sets/b_should_be_easy.in',
  './sets/c_no_hurry.in',
  './sets/d_metropolis.in',
  './sets/e_high_bonus.in'
];

const ridesParser = require('./utils/ridesParser');
const Router = require('./utils/Router');
const Car = require('./utils/Car');

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
        } else if(index < a.length - 1) {
          this.rides.push(ridesParser(line.split(' ')));
        }
      });
    for(let i = 0; i < this.config.vehicles; i += 1) {
      new Car();
    }
  }
}

const analizers = [];

if(process.argv.length == 2) {
  //if there is no console parameter, run for every input set
  sets.forEach(set => {
    analizers.push(new SelfDrivingRidesAnalizer(set));
    Car.clear();
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
  const router = new Router(analizer.rides, analizer.config.numberOfSteps, +analizer.config.bonus);
  router.route();
  // Car.all().forEach((car) => console.log(car.score))
  const score = Car.all().reduce((a,c) => {
    return a + c.score;
  }, 0);
  let text = "";
  Car.all().forEach((car) => {
    text += `${car.rides.length} ` + car.rides.join(' ') + '\n';
  });
  fs.writeFileSync("./results/"+analizer.filename, text);
  //console.log(JSON.stringify(analizer, null, 2));
});
