export function GetTemperatureStyle(temperature: number | undefined): string {
	const defaultColor = "text-white";

	if (typeof temperature === "undefined" || temperature === null) {
		// console.log("temp undefined", temperature);
		return defaultColor;
	}
	const temp = Kelvin2Celcius(temperature);

	switch (temp.color) {
		case "ice-cold":
			return "text-transparent bg-clip-text bg-gradient-to-r from-white via-sky-500 to-white";
		case "cold":
			return "text-transparent bg-clip-text bg-gradient-to-r from-sky-500 to-white";
		case "warm":
			return "text-transparent bg-clip-text bg-gradient-to-r from-white to-indigo-500";
		case "hot":
			return "text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-yellow-500";
		case "damn-hot":
			return "text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-red-700";
		default:
			return defaultColor;
	}
}

export function Kelvin2Celcius(kelvin: number | undefined): { celcius: string; color: string } {
	if (kelvin !== undefined) {
		const celcius = kelvin - 273.15;
		let color: string = "";
		if (celcius < -17) {
			color = "ice-cold";
		} else if (celcius < 6) {
			color = "cold";
		} else if (celcius <= 21) {
			color = "warm";
		} else if (celcius <= 26) {
			color = "hot";
		} else {
			color = "damn-hot";
		}
		return { celcius: celcius.toFixed(1), color: color };
	}
	return { celcius: "-", color: "" };
}

export function Kelvin2Fahrenheit(kelvin: number | undefined): { fahrenheit: string; color: string } {
	if (kelvin !== undefined) {
		const { celcius, color } = Kelvin2Celcius(kelvin);
		const fahrenheit = ((parseFloat(celcius) * 9) / 5 + 32).toFixed(1);
		return { fahrenheit, color };
	}
	return { fahrenheit: "-", color: "" };
}
