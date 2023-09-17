import React, { useState, useEffect, useContext } from "react";
import { useSelector } from "react-redux";
import { CityContext } from "contexts/cityContext";
import { accent } from "redux/features/accentColorSlice";

export default function TimeScreen() {
	const selectedCity = useContext(CityContext);
	const accentColor = useSelector(accent);
	const [dateTime, setDateTime] = useState<string>("");

	useEffect(() => {
		// console.log("selectedCity", selectedCity);
		if (selectedCity) {
			const options: Intl.DateTimeFormatOptions = {
				timeZone: selectedCity.tZone,
				weekday: "long",
				year: "numeric",
				month: "numeric",
				day: "2-digit",
				hour: "2-digit",
				minute: "2-digit",
				timeZoneName: "long",
				hour12: false,
			};

			const formatter = new Intl.DateTimeFormat("en-EN", options);
			const tzData = formatter.format(new Date());
			setDateTime(tzData);
			// console.log('tzg',tzData);
		}
	}, [selectedCity]);

	return (
		<div className="w-full md:max-w-[70vw] lg:max-w-[30vw]">
			<div
				className={`relative flex flex-col gap-0 w-full text-white before:absolute before:top-0 before:-left-4 before:w-2 before:h-full before:bg-${accentColor}-500`}>
				<div className={`space-x-3 text-sm text-${accentColor}-500 font-semibold`}>
					<span className="space-x-1">
						<span>Lat:</span>
						<span className="text-neutral-400">{selectedCity?.lat}</span>
					</span>
					<span className="space-x-1">
						<span>Lon:</span>
						<span className="text-neutral-400">{selectedCity?.lng}</span>
					</span>
				</div>
				<h2 className="text-3xl md:text-4xl font-bold">{selectedCity?.name + ", " + selectedCity?.cCode}</h2>
				{dateTime && <span className="text-neutral-400">{dateTime}</span>}
			</div>
		</div>
	);
}
