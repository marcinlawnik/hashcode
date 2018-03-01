const fs = require('fs');
const createArray = require('./utils/createArray');
const SelfDrivingRidesAnalizer = require('./analizer');
const sets = [
  './sets/a_example.in',
  './sets/b_should_be_easy.in',
  './sets/c_no_hurry.in',
  './sets/d_metropolis.in',
  './sets/e_high_bonus.in'
];

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

// ~~~ GENETIC

const POPULATION_SIZE = 100;
const GENERATION_LIMIT = 100000;

const MUTATION_RATE = 0.1;

//TODO ALL THE CALCULATIONS!
analizers.forEach(analizer => {
  let generationNumber = 0;
  const cityMap = createArray(analizer.config.columns, analizer.config.rows, 0);
  // const cityMap = createArray(analizer.config.rows, analizer.config.columns, 0);

  function Population() {
    this.size = POPULATION_SIZE;
    this.roads = createArray(analizer.config.numberOfSteps, analizer.config.vehicles, 0);
  }

  let population = new Population();
  console.log(population.roads);
});
