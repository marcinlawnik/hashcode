const fs = require('fs');
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

//TODO ALL THE CALCULATIONS!
analizers.forEach(analizer => {
  console.log(JSON.stringify(analizer, null, 2));
});
