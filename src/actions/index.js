import axios from 'axios';

const API_KEY = "0548275ff13c853a55395230261f21e1";
const ROOT_URL = `http://api.openweathermap.org/data/2.5/forecast?appid=${API_KEY}&q=`;

export const FETCH_WEATHER = "FETCH_WEATHER";

export function fetchWeather(city){
    let url = `${ROOT_URL}${city}, ng`;
    const request = axios.get(url);

    return {
        type: FETCH_WEATHER,
        payload: request
    }
}