/* ************ START: Browser call to API Endpoint ************ */
/* import { UndefinedOrNull } from "utils/undefinedOrNull";

const apiUrlWeatherNow = "https://api.openweathermap.org/data/2.5/weather";
const apiKeyName = "appid";
const apiKeyValue = "api key";

export default async function getWeatherNow(lat: string, lon: string) {
	if (UndefinedOrNull(lat) || UndefinedOrNull(lon)) return;

	try {
		const response = await fetch(`${apiUrlWeatherNow}/?lat=${lat}&lon=${lon}&${apiKeyName}=${apiKeyValue}`, {
			method: "GET",
		});

		if (!response.ok) {
			throw new Error(`HTTP error with status: ${response.status}`);
		} else {
			return response.json();
		}
	} catch (error) {
		return error;
	}
} */
/* ************ END: Browser call to API Endpoint ************ */
import axios from "axios";

export default async function getWeatherNow(lat:string, lon: string) {
    if(lat == null || lon == null) return;

    try {
        const response = await axios.get(`.netlify/functions/get-weather-now`, {
            params:{
                lat,
                lon
            }
        });
        return await response.data;
        
        /* if (!response.ok) {
			throw new Error(`HTTP error with status: ${response.status}`);
		} else {
            console.log(response);
			return await response.json();
		} */
    } catch (error) {
        return JSON.stringify(error);
    }
}

