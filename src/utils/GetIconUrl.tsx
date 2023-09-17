import IconMapType from "./types/IconMapType";
// import icon_01d from "../assets/weather-icons/day-clear.png";
// import icon_02d from "../assets/weather-icons/cloudy.png";
// import icon_03d from "../assets/weather-icons/clouds.png";
// import icon_04d from "../assets/weather-icons/heavy-clouds.png";
// import icon_09d from "../assets/weather-icons/heavy-rain.png";
// import icon_10d from "../assets/weather-icons/cloudy-rain.png";
// import icon_11d from "../assets/weather-icons/heavy-storm.png";
// import icon_13d from "../assets/weather-icons/snow.png";
// import icon_50d from "../assets/weather-icons/mist.png";
// import icon_01n from "../assets/weather-icons/night-clear.png";
// import icon_02n from "../assets/weather-icons/night-clouds.png";
// // import icon_03n from '../assets/weather-icons/night-clouds.png';
// import icon_04n from "../assets/weather-icons/night-heavy-clouds.png";
// import icon_09n from "../assets/weather-icons/night-heavy-rain.png";
// // import icon_10n from '../assets/weather-icons/heavy-rain.png';
// import icon_11n from "../assets/weather-icons/storm.png";
// import icon_13n from "../assets/weather-icons/night-snow.png";
// import icon_50n from "../assets/weather-icons/night-mist.png";
// import icon_undefined from "../assets/weather-icons/cloud-error.png";
import { ReactNode } from "react";

// const icons = {
// 	iconUrl: "src/assets/weather-icons/",
// 	iconMap: {
// 		"01d": icon_01d,
// 		"02d": icon_02d,
// 		"03d": icon_03d,
// 		"04d": icon_04d,
// 		"09d": icon_09d,
// 		"10d": icon_10d,
// 		"11d": icon_11d,
// 		"13d": icon_13d,
// 		"50d": icon_50d,
// 		"01n": icon_01n,
// 		"02n": icon_02n,
// 		"03n": icon_02n,
// 		"04n": icon_04n,
// 		"09n": icon_09n,
// 		"10n": icon_09d,
// 		"11n": icon_11n,
// 		"13n": icon_13n,
// 		"50n": icon_50n,
// 		undefined: icon_undefined,
// 	} as IconMapType,
// };

const icons = {
    iconUrl: '/assets/weather-icons/', // images are in the "public" directory
    iconMap: {
      '01d': 'day-clear.png',
      '02d': 'cloudy.png',
      '03d': 'clouds.png',
      '04d': 'heavy-clouds.png',
      '09d': 'heavy-rain.png',
      '10d': 'cloudy-rain.png',
      '11d': 'heavy-storm.png',
      '13d': 'snow.png',
      '50d': 'mist.png',
      '01n': 'night-clear.png',
      '02n': 'night-clouds.png',
      '03n': 'night-clouds.png',
      '04n': 'night-heavy-clouds.png',
      '09n': 'night-heavy-rain.png',
      '10n': 'heavy-rain.png',
      '11n': 'storm.png',
      '13n': 'night-snow.png',
      '50n': 'night-mist.png',
      undefined: 'cloud-error.png'
    } as IconMapType,
  };

export default function getIconUrl(iconCode: string | undefined): ReactNode {
	if (iconCode !== undefined) {
		return <img src={icons.iconUrl + icons.iconMap[iconCode]} alt="could not load weather icon" />
	}

	return <img src={icons.iconUrl + icons.iconMap['undefined']} alt="no weather icon" />
	

  // Legacy code from My Angular weather app
	// if (iconCode !== undefined)
	//   return icons.iconUrl + icons.iconMap[iconCode];
	// return icons.iconUrl + icons.iconMap['undefined'];
}
