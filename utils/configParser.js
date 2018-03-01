const configParser = (config) => {
    let obj = {
        rows: parseInt(config[0]),
        columns: parseInt(config[1]),
        vehicles: parseInt(config[2]),
        numberOfRides: parseInt(config[3]),
        bonus: parseInt(config[4]),
        numberOfSteps: parseInt(config[5])
    }
    return obj;
  };
  
  module.exports = configParser;