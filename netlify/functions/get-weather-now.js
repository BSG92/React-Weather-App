require("dotenv").config();
const axios = require("axios");

const apiUrlWeatherNow = "https://api.openweathermap.org/data/2.5/weather";
const apiKeyName = "appid";
const apiKeyValue = process.env.APPID;
const localURI = process.env.LOCAL_URI;

exports.handler = async (event, context) => {
	try {
		if (
			!(
				("origin" in event.headers && event.headers.origin === localURI) ||
				("referer" in event.headers && event.headers.referer === localURI)
			)
		) {
			return {
				statusCode: 403, // Forbidden
				headers: {
					"Content-Type": "application/json",
				},
				body: JSON.stringify({ error: "Bad Origin" }),
			};
		}

		const { lat, lon } = event.queryStringParameters;
		const fullUrl = `${apiUrlWeatherNow}/?lat=${lat}&lon=${lon}&${apiKeyName}=${apiKeyValue}`;
		const response = await axios.get(fullUrl);
		const data = await response.data;
		return {
			statusCode: 200,
			headers: {
				"Content-Type": "application/json",
			},
			body: JSON.stringify(data),
		};
	} catch (error) {
		return {
			statusCode: 200,
			headers: {
				"Content-Type": "application/json",
			},
			body: JSON.stringify(error),
		};
	}
};