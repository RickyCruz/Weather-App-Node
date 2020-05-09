const location = require('./services/location');
const weather = require('./services/weather');

const argv = require('yargs').options({
    location: {
        alias: 'l',
        desc: 'Name of the city',
        demand: true
    }
}).argv;

const weatherInfo = async (city) => {
    try {
        const coords = await location.getLatLng(city);
        const temp = await weather.current(coords.lat, coords.lng);

        return `${ coords.location } 
          Temp: ${ temp.temp }º
          Min: ${ temp.temp_min }º
          Max: ${ temp.temp_max }º,
          Feels Like: ${ temp.feels_like }º`;
    } catch (error) {
        return `There is not results for ${ city }`;
    }
}

weatherInfo(argv.location)
    .then(console.log)
    .catch(console.error);