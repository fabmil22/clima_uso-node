const argv =  require('./config/yargs').argv;

const { completeInformation } = require('./funciones.js');

  let datos = completeInformation(argv.direccion);


