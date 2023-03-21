const API_KEY = "53856916aecd99f0cfd4eb0ebbbda13e";
const BASE_URL = "http://api.openweathermap.org/data/2.5/forecast";

const http = new slHTTP();
async function getWeather(cityName) {
    let queryString = `?units=metric&q=${cityName}&appid=${API_KEY}`;
    const URL = BASE_URL + queryString;
    const data = await http.get(URL);
    return data;
}
