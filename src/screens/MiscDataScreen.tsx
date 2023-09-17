import React from "react";
import { useSelector } from "react-redux";
import { currentWeather } from "redux/features/weatherSlice";
import { accent } from "redux/features/accentColorSlice";

function MiscDataScreen() {
	const weatherData = useSelector(currentWeather);
	const accentColor = useSelector(accent);

	if(typeof weatherData === 'object' && weatherData?.wind) return (
		<section className="flex flex-col text-white">
			{/* <!-- First data set --> */}
			<section className="relative text-sm before:absolute before:-top-6 before:left-0 before:content-['Wind_data'] before:text-xs before:text-white">
				<div className="grid grid-cols-3 md:grid-cols-1 md:grid-flow-row gap-4 text-neutral-400 hover:cursor-default">
					<div
						className={`relative px-4 py-1 flex flex-col gap-0 items-start after:absolute after:top-0 after:left-0 after:w-1 after:h-full after:bg-${accentColor}-500 ring-1 ring-inset ring-white/10 bg-white bg-opacity-5 hover:bg-white transition-colors duration-300  [&>*:nth-child(2)]:hover:text-neutral-900 [&>*:nth-child(2)]:hover:font-semibold`}>
						{weatherData.wind.speed >= 1000 ? (
							<span className={`space-x-2 font-mono text-${accentColor}-500`}>
								<span className="text-2xl font-semibold">{weatherData.wind.speed / 1000 || "-"}</span>
								<span>km/s</span>
							</span>
						) : (
							<span className={`space-x-2 font-mono text-${accentColor}-500`}>
								<span className="text-2xl font-semibold">{weatherData.wind.speed || "-"}</span>
								<span>m/s</span>
							</span>
						)}
						<span>Speed</span>
					</div>
					<div
						className={`relative px-4 py-1 flex flex-col gap-0 items-start after:absolute after:top-0 after:left-0 after:w-1 after:h-full after:bg-${accentColor}-500 ring-1 ring-inset ring-white/10 bg-white bg-opacity-5 hover:bg-white transition-colors duration-300  [&>*:nth-child(2)]:hover:text-neutral-900 [&>*:nth-child(2)]:hover:font-semibold`}>
						<span className={`space-x-2 font-mono text-${accentColor}-500`}>
							<span className="text-2xl font-semibold">
								{weatherData.wind.deg || "-"}
								{/* wind deg */}
							</span>&nbsp;<span>deg</span>
						</span>
						<span>Direction</span>
					</div>
					<div
						className={`relative px-4 py-1 flex flex-col gap-0 items-start after:absolute after:top-0 after:left-0 after:w-1 after:h-full after:bg-${accentColor}-500 ring-1 ring-inset ring-white/10 bg-white bg-opacity-5 hover:bg-white transition-colors duration-300  [&>*:nth-child(2)]:hover:text-neutral-900 [&>*:nth-child(2)]:hover:font-semibold`}>
						{weatherData.wind.gust >= 1000 ? (
							<span className={`space-x-2 font-mono text-${accentColor}-500`}>
								<span className="text-2xl font-semibold">{weatherData.wind.gust / 1000 || "-"}</span>
								<span>km/s</span>
							</span>
						) : (
							<span className={`space-x-2 font-mono text-${accentColor}-500`}>
								<span className="text-2xl font-semibold">{weatherData.wind.gust || "-"}</span>
								<span>m/s</span>
							</span>
						)}
						<span>Gust</span>
					</div>
				</div>
			</section>

			{/* <!-- Second data set --> */}
			<section className="relative mt-12 text-sm before:absolute before:-top-6 before:left-0 before:content-['Misc.'] before:text-xs before:text-white">
				<div className="grid grid-cols-3 md:grid-cols-1 md:grid-flow-row gap-4 text-neutral-300 hover:cursor-default">
					<div
						className={`relative px-4 py-1 flex flex-col gap-0 items-start after:absolute after:top-0 after:left-0 after:w-1 after:h-full after:bg-${accentColor}-500 ring-1 ring-inset ring-white/10 bg-white bg-opacity-5 hover:bg-white transition-colors duration-300  [&>*:nth-child(2)]:hover:text-neutral-900 [&>*:nth-child(2)]:hover:font-semibold`}>
						{weatherData.visibility >= 1000 ? (
							<span className={`space-x-2 font-mono text-${accentColor}-500`}>
								<span className="text-2xl font-semibold">{weatherData.visibility / 1000 || "-"}</span>
								<span>km</span>
							</span>
						) : (
							<span className={`space-x-2 font-mono text-${accentColor}-500`}>
								<span className="text-2xl font-semibold">{weatherData.visibility || "-"}</span>
								<span>m</span>
							</span>
						)}
						<span>Visibility</span>
					</div>
					<div
						className={`relative px-4 py-1 flex flex-col gap-0 items-start after:absolute after:top-0 after:left-0 after:w-1 after:h-full after:bg-${accentColor}-500 ring-1 ring-inset ring-white/10 bg-white bg-opacity-5 hover:bg-white transition-colors duration-300  [&>*:nth-child(2)]:hover:text-neutral-900 [&>*:nth-child(2)]:hover:font-semibold`}>
						<span className={`space-x-2 font-mono text-${accentColor}-500`}>
							<span className="text-2xl font-semibold">{weatherData.main.pressure || "-"}</span>
							<span>hpa</span>
						</span>
						<span>Pressure</span>
					</div>
					<div
						className={`relative px-4 py-1 flex flex-col gap-0 items-start after:absolute after:top-0 after:left-0 after:w-1 after:h-full after:bg-${accentColor}-500 ring-1 ring-inset ring-white/10 bg-white bg-opacity-5 hover:bg-white transition-colors duration-300  [&>*:nth-child(2)]:hover:text-neutral-900 [&>*:nth-child(2)]:hover:font-semibold`}>
						<span className={`space-x-2 font-mono text-${accentColor}-500`}>
							<span className="text-2xl font-semibold">{weatherData.main.humidity || "-"}</span>
							<span>%</span>
						</span>
						<span>Humidity</span>
					</div>
				</div>
			</section>
		</section>
	);
    else return <></>
}

export default MiscDataScreen;
