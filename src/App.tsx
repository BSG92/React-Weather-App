import { useState, useRef, useTransition, ChangeEvent, Fragment, useMemo, useEffect } from "react";
import { useSelector } from "react-redux";
import { useDebounce } from "hooks/useDebounce";
import { BsSearch } from "react-icons/bs";
import { AiOutlineLoading, AiOutlineDown } from "react-icons/ai";
import { CiSettings } from "react-icons/ci";
// import countries from "./assets/countries.min.json";
import { getAllCities } from "rc-geographic";
import { Combobox, Transition } from "@headlessui/react";
import WeatherScreen from "./screens/WeatherScreen";
import TimeScreen from "screens/TimeScreen";
// import { GeoLocationType } from "utils/types/GeoLocationType";
import Type_City from "utils/types/CityType";
import { CityContext } from "contexts/cityContext";
import { accent } from "redux/features/accentColorSlice";
import SettingsModal from "screens/SettingsModal";
import MapScreen from "screens/MapScreen";
import MiscDataScreen from "screens/MiscDataScreen";

function App() {
	const accentColor = useSelector(accent);
	const data: Type_City[] = useMemo(() => getAllCities(), []);
	const [searchQuery, setSearchQuery] = useState<string | null>(null);
	const [delaySearch, isTyping] = useDebounce(searchQuery);
	const [filteredCities, setFilteredCities] = useState<Type_City[] | []>([]);
	const [selectedCity, setSelectedCity] = useState<Type_City | null>(null); // use redux for this
	const [isPending, startTransition] = useTransition();
	const [isSettingsModalOpen, setIsSettingsModalOpen] = useState<boolean>(false);
	const inputRef = useRef<HTMLInputElement | null>(null);

	function onInputChange(e: ChangeEvent<HTMLInputElement>) {
		if (e.target.value.length < 3) {
			return; // To improve performance.
		}

		setSearchQuery(e.target.value);
	}

	function filterCities(q: string) {
		startTransition(() => {
			let query: Type_City[] | null = [];
			for (const city in data) {
				// console.log('cities', data[city]);
				const _city: Type_City = data[city];
				// console.log('city name:', _city.name);
				if (_city.name.toLowerCase().includes(q.toLowerCase())) {
					query.push(_city);
				}
			}
			setFilteredCities(query);
		});
	}

	useEffect(() => {
		// Set focus to search input box on initial page render
		if (inputRef.current) {
			inputRef.current.focus();
		}

		if (delaySearch) filterCities(delaySearch);
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [delaySearch]);

	return (
		<>
			<section className="relative">
				<Combobox>
					<div
						className={`relative mx-auto my-5 flex w-[85vw] md:max-w-[50vw] lg:max-w-[30vw] items-center shadow-even shadow-black/20 rounded-xl focus-within:shadow-${accentColor}-500/20`}>
						<div className="relative flex flex-row items-center w-full cursor-default overflow-hidden rounded-lg text-left shadow-md focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75 focus-visible:ring-offset-2 focus-visible:ring-offset-teal-300 sm:text-sm">
							<span className="ml-3 w-fit text-neutral-500">
								<span>
									{isPending || isTyping ? (
										<AiOutlineLoading className="animate-spin" />
									) : (
										<BsSearch />
									)}
								</span>
							</span>
							<Combobox.Input
								ref={inputRef}
								className={`relative w-full py-2 pl-3 bg-inherit caret-${accentColor}-500 selection:bg-${accentColor}-500 text-neutral-200 placeholder:text-neutral-400 outline-none`}
								// displayValue={(city: string) => city}
								displayValue={(city: any) => city.name + ", " + city.cCode}
								onChange={onInputChange}
								onFocus={(e) => e.target.select()}
								onKeyUp={(e) => {
									if (e.key === "Enter") {
										const value = e.currentTarget.value.split(",", 2);
										const city = data.find(
											(c) => c.name === value[0] && c.cCode === value[1].trim()
										);
										setSelectedCity(city || null);
									}
								}}
								placeholder="City name"
								aria-placeholder="Type city name"
							/>
							<Combobox.Button className="absolute inset-y-0 right-0 pr-2 flex items-center">
								<AiOutlineDown className="h-4 w-4 text-gray-400" aria-hidden="true" />
							</Combobox.Button>
						</div>
						<Transition
							as={Fragment}
							leave="transition ease-in duration-100"
							leaveFrom="opacity-100"
							leaveTo="opacity-0"
							// afterLeave={() => setQuery('')}
						>
							<div className="absolute top-10 w-full z-10">
								<div
									className={`relative before:absolute before:top-0 before:left-0 before:w-2 before:h-full ${
										isTyping ? "before:bg-yellow-500" : "before:bg-rose-500"
									} shadow-lg shadow-black/50 rounded-md overflow-clip`}>
									<Combobox.Options className="max-h-[50vh] w-full overflow-auto bg-dark text-base focus:outline-none sm:text-sm rounded-md">
										{/* {filteredCities.length === 0 && query !== '' ? ( */}
										{/* {isPending && <div className="cursor-default select-none py-2 px-4 text-gray-700">Loading</div>} */}
										{filteredCities.length === 0 && !isPending ? (
											<div className="relative cursor-default select-none py-2 px-4 text-rose-500">
												Nothing found.
											</div>
										) : filteredCities.length >= 0 && isTyping ? (
											<div className="relative cursor-default select-none py-2 px-4 text-yellow-500">
												Searching...
											</div>
										) : (
											filteredCities.map((data, idx) => (
												<Combobox.Option
													key={data.sCode + idx}
													className={({ active }) =>
														`cursor-default select-none py-2 pl-10 pr-4 first:rounded-t-md last:rounded-b-md ${
															active
																? "bg-rose-500/10 ring-1 ring-inset ring-rose-500/20 text-white font-semibold"
																: "ring-0 text-neutral-300 font-normal"
														}`
													}
													value={data}
													onClick={() => setSelectedCity(data)}>
													{({ selected, active }) => (
														<>
															<span
																className={`block truncate ${
																	selected ? "font-bold text-rose-500" : "font-normal"
																}`}>
																{data.name}, {data.cCode}
															</span>
															{selected ? (
																<span
																	className={`absolute inset-y-0 left-0 flex items-center pl-3 ${
																		active ? "text-white" : "text-teal-600"
																	}`}>
																	{/* <CheckIcon className="h-5 w-5" aria-hidden="true" /> */}
																</span>
															) : null}
														</>
													)}
												</Combobox.Option>
											))
										)}
									</Combobox.Options>
								</div>
							</div>
						</Transition>
					</div>
				</Combobox>
				<button
					type="button"
					className={`absolute -top-3 right-1 md:top-1 md:right-5 text-2xl text-${accentColor}-500 transition-transform duration-500 hover:rotate-45`}
					onClick={() => setIsSettingsModalOpen(!isSettingsModalOpen)}>
					<CiSettings />
				</button>
			</section>
			{/* <button
				type="button"
				//   *ngIf="!isFetching && (isCitySelected && timezoneData.length < 1)"
				//   (click)="callGeolocationApi()"
				className="relative mx-auto py-2 px-3 w-fit flex flex-row items-center gap-4 text-white lg:max-w-[30vw]
        border-t border-b border-r border-rose-500/20 bg-rose-900/5
        before:absolute before:top-0 before:left-0 before:w-3 before:h-full before:bg-rose-500 before:ring-1 before:ring-rose-500"
			>
				<div className="pl-4 flex flex-col text-start">
					<div className="font-semibold uppercase text-rose-500">Geo location data not available</div>
					<div className="text-sm text-neutral-400">Click to search with geolocation API</div>
				</div>
				<h1 className="ml-auto font-bold text-5xl text-rose-500">!</h1>
			</button> */}

			{/* <section className="border"> */}
				<CityContext.Provider value={selectedCity}>
					{selectedCity && (
						<div className="w-full flex flex-col gap-10 md:gap-6">
							<div className="mx-auto md:mx-10 flex flex-col md:flex-row gap-6 items-center md:items-start justify-evenly">
								<TimeScreen />
								<div className="">
									<WeatherScreen />
								</div>
							</div>
							<div className="mb-5 lg:mt-0 mx-10 flex flex-col md:flex-row gap-4 justify-between">
								<MiscDataScreen />
								{/* Map */}
								<div className="z-0 w-full h-[80vh] rounded-md overflow-clip">
									<MapScreen />
								</div>
							</div>
						</div>
					)}
				</CityContext.Provider>
			{/* </section> */}

            {/* Marker for map */}
            

			{/* Settings Modal */}
			<SettingsModal isOpen={isSettingsModalOpen} setIsOpen={setIsSettingsModalOpen} />
		</>
	);
}

export default App;
