require('dotenv').config();
const axios = require('axios');

const getLatLng = async (location) => {
    const http = axios.create({
        baseURL: `https://devru-latitude-longitude-find-v1.p.rapidapi.com/latlon.php?location=${ encodeURI(location) }`,
        timeout: 1000,
        headers: { 'x-rapidapi-key': process.env.RAPIDAPI_KEY }
    });
    
    const response = await http.get();

    if (response.data.Results.length === 0) {
        throw new Error(`There is not results for ${ location }`);
    }

    const data = response.data.Results[0];

    return { 
        location : data.name,
        lat: data.lat,
        lng: data.lon
    }
}

module.exports = {
    getLatLng
}