require('dotenv').config()
const axios = require('axios');

const current = async (latitude, longitude) => {
    const response = await axios.get(
        `https://api.openweathermap.org/data/2.5/weather?lat=${ latitude }&lon=${ longitude }&appid=${ process.env.OPEN_WEATHER_MAP_KEY }&units=metric`
    );

    return response.data.main;
}

module.exports = {
    current
}