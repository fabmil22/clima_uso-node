 const argv =  require('yargs').option({
    direccion: {
       alias : 'd',
       desc:'direccion de la ciudad',
       demand: true
    }
} ).argv;

module.exports={
    argv
}