
const axios = require('axios');
const color= require('colors');


let completeInformation = async ( direccion) =>{

  let city =       await getInfolugar(direccion);
  console.log(color.green( JSON.stringify( city, undefined, 2)));
  console.log(color.green( city.lat));
  console.log(color.green( city.lng));
  const Weather =  await getWeather(city.lat, city.lng);
  console.log(color.green( JSON.stringify(Weather)));
  let max= Weather.temp_max;
  let min= Weather.temp_min;
  let TEM= Weather.temp;
  let pressure= Weather.pressure;
 console.log(color.bgGreen(`---------- DATOS DE CLIMA  DE ${direccion}--------`));
 console.log(color.green(` Ciudad: ${direccion}`));

 
 console.log(color.grey(` PRESION: ${pressure}`));
 console.log(color.cyan(` TEMPERATURA MINIMA: ${min}`));
 console.log(color.cyan(` TEMPERATURA ACTUAL: ${TEM}`));
 console.log(color.cyan(` TEMPERATURA MAXIMA: ${max}`));
}



/**getInfoludra ()
 * * por medio de esta fuhncion  obtenemos los datos
 * *de ciudad  , latitud , altitud
 * Creada por Fabian Miliani
*/


let  getInfolugar =  async (direccion = 'madrid')=>{
  
    // Make a request for a user with a given ID
    let url1="https://maps.googleapis.com/maps/api/geocode/json?address=";
    let key ="AIzaSyDMNKF0FjtHUE4IOVbprFWzxBotisnQL4U"
    
    let resp =  await axios.get(`${url1}${direccion}&key=${key}&units=metric`);

    if (resp.data.status != 'OK'){
        throw new Error(`NO se obtine datos de la ciudad ${direccion} ` )
    }
    

    let dataurl = resp.data.results[0];
    let dataGeometry = dataurl.geometry.location;
    
    return{
        direccion :dataurl.formatted_address ,
        lat : dataGeometry.lat ,
        lng : dataGeometry.lng
    }
   }

/**getWeather ()
 * * por medio de esta funcion obtenemos los datos del clima segun latitud y altitud
 * Creada por Fabian Miliani
 * http://api.openweathermap.org/data/2.5/weather?lat=35&lon=139&appid=0f373e8b09069fa1d80286fbadc6e665
*/

let getWeather = async ( lat ,lon) =>{

    let urlp1= 'http://api.openweathermap.org/data/2.5/weather?';
    let key= '0f373e8b09069fa1d80286fbadc6e665';
    let resp1 =  await axios.get(`${urlp1}lat=${lat}&lon=${lon}&appid=${key}&units=metric`);
//console.log(resp1.data);
     return resp1.data.main;


}
    module.exports={
        completeInformation
    }