const configParser = (config) => {
    let obj = {
        rows: config[0],
        columns: config[1],
        vehicles: config[2],
        numberOfRides: config[3],
        bonus: config[4],
        numberOfSteps: config[5]
    }
    return obj;
  };
  
  module.exports = configParser;