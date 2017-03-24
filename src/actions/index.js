import axios from 'axios';

const OPEN_WEATHER_API_KEY = '9b1e26b7dac3c0f0fec461c2d3d01883';
const ROOT_URL = `https://api.openweathermap.org/data/2.5/forecast?appid=${OPEN_WEATHER_API_KEY}`;

export const FETCH_WEATHER = 'FETCH_WEATHER';

export function fetchWeather(city) {
  const url = `${ROOT_URL}&q=${city},es`;
  const request = axios.get(url);

  return {
    type: FETCH_WEATHER,
    payload: request
  };
}
