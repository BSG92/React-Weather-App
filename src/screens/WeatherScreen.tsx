import React, { useState, useRef, useEffect, useContext } from "react";
import { useSelector, useDispatch } from "react-redux";
import { unit, TemperatureTypes } from "redux/features/temperatureSlice";
import { CityContext } from "contexts/cityContext";
import { SET_CURRENT_WEATHER } from "redux/features/weatherSlice";
import getIconUrl from "utils/GetIconUrl";
import { GetTemperatureStyle, Kelvin2Celcius, Kelvin2Fahrenheit } from "utils/GetTemperature";
import getWeatherNow from "API_calls/weatherNow";
import { CurrentWeatherType } from "utils/types/CurrentWeatherType";
// import MiscDataScreen from "./MiscDataScreen";
// import { TemperatureContext, TemperatureTypes } from "contexts/temperatureContext";


function WeatherScreen() {
	const selectedCity = useContext(CityContext);
	// const temp_ctx = useContext(TemperatureContext);
    const temp_ctx = useSelector(unit);
	const initialRender = useRef(true);
	const [weatherData, setWeatherData] = useState<CurrentWeatherType | null | undefined>(null);
    const dispatch = useDispatch();

	async function _weatherNow() {
		if (selectedCity) {
			const weatherResult = await getWeatherNow(selectedCity.lat, selectedCity.lng);
			setWeatherData(weatherResult);
            dispatch(SET_CURRENT_WEATHER(weatherResult));
			// setTemperatureCelcius(GetTemperatureStyle())
			// console.log("Weather screen:", weatherResult);
		}
	}

	/*************** START: Utility functions *****************/
	function convertEpochToUTC(epoch: number | undefined): string {
		if (epoch === undefined || epoch === null) return "";
		if (!weatherData) return "";

		let date;
		const timezoneOffsetInSeconds = weatherData.timezone;
		if (timezoneOffsetInSeconds !== undefined) {
			date = new Date((epoch + timezoneOffsetInSeconds) * 1000);
			return date.getUTCHours() + " : " + date.getUTCMinutes();
		}
		return "";
	}

	function getTimeZoneOffsetHours_Minutes(offsetInSeconds: number | undefined): string {
		if (!offsetInSeconds) return "---";

		const sign = offsetInSeconds >= 0 ? "+" : "-";
		const hours = Math.floor(Math.abs(offsetInSeconds) / 3600);
		const minutes = Math.floor((Math.abs(offsetInSeconds) % 3600) / 60);
		return `${sign}${hours.toString()}:${minutes.toString()}`;
	}
	/*************** END: Utility functions *****************/

	useEffect(() => {
		if (initialRender.current) {
			// On Initial render, selectedCity has data, so, we don't want to make 2 api calls.
			initialRender.current = false;
		} else {
			_weatherNow();
		}
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [selectedCity]);

	if(typeof weatherData === 'object') return (
        <div className="w-full flex flex-col gap-6 justify-evenly md:flex-row">
			<section className="flex gap-4 lg:gap-8 items-center">
				<section>
					<div className="w-[150px] md:w-[256px]">{getIconUrl(weatherData?.weather[0].icon)}</div>
					<div className="flex items-center justify-between text-neutral-400 text-xs">
						<div className="flex flex-col items-center">
							<div className="text-orange-500 font-semibold text-sm">
								{convertEpochToUTC(weatherData?.sys.sunrise)}
							</div>
							<div>Sunrise</div>
						</div>
						<div className="text-xs">[GMT {getTimeZoneOffsetHours_Minutes(weatherData?.timezone)}]</div>
						<div className="flex flex-col items-center">
							<div className="text-orange-500 font-semibold text-sm">
								{convertEpochToUTC(weatherData?.sys.sunset)}
							</div>
							<div>Sunset</div>
						</div>
					</div>
				</section>

				<div className="text-white">
					<div className="font-semibold capitalize">{weatherData?.weather[0].description}</div>
					<div className={`flex gap-0 items-start ${GetTemperatureStyle(weatherData?.main.temp)}`}>
						<span className="font-extrabold text-8xl">
							{temp_ctx === TemperatureTypes.c
								? Kelvin2Celcius(weatherData?.main.temp).celcius
								: Kelvin2Fahrenheit(weatherData?.main.temp).fahrenheit}
						</span>
						<span className="text-4xl font-bold">
							&deg;{temp_ctx === TemperatureTypes.c ? "C" : "F"}
						</span>
					</div>
					<div className="space-x-4">
						<span>Feels like:</span>
						<span>
							{temp_ctx === TemperatureTypes.c
								? Kelvin2Celcius(weatherData?.main.feels_like).celcius
								: Kelvin2Fahrenheit(weatherData?.main.feels_like).fahrenheit}
							&deg;
						</span>
					</div>
					<div className="mt-3 flex justify-between text-sm text-neutral-400">
						<span className="space-x-2">
							<span>Min:</span>
							<span>
								{temp_ctx === TemperatureTypes.c
									? Kelvin2Celcius(weatherData?.main.temp_min).celcius
									: Kelvin2Fahrenheit(weatherData?.main.temp_min).fahrenheit}
								&deg;
							</span>
						</span>
						<span className="space-x-4">
							<span>Max:</span>
							<span>
								{temp_ctx === TemperatureTypes.c
									? Kelvin2Celcius(weatherData?.main.temp_max).celcius
									: Kelvin2Fahrenheit(weatherData?.main.temp_max).fahrenheit}
								&deg;
							</span>
						</span>
					</div>
					<div className="w-full flex">
						<span className="ml-auto text-end font-bold">{weatherData?.name}</span>
					</div>
				</div>
			</section>
            {/* <MiscDataScreen /> */}
		</div>
	);
    else return <></>;
}

export default WeatherScreen;
