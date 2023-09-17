import React, { Dispatch, Fragment, SetStateAction } from "react";
import { useDispatch, useSelector } from "react-redux";
import { AiOutlineClose } from "react-icons/ai";
import { Transition, Dialog, Tab } from "@headlessui/react";
import { SET_TEMPERATURE_UNIT, TemperatureTypes, unit } from "redux/features/temperatureSlice";
import { SET_ACCENT_COLOR, List_ColorAccent, accent } from "redux/features/accentColorSlice";
// import { TemperatureContext, TemperatureTypes } from "contexts/temperatureContext";
// import { AccentColorContext, List_ColorAccent } from "contexts/accentColorContext";

const TabData = [
	{ unit: TemperatureTypes.c, symbol: "C" },
	{ unit: TemperatureTypes.f, symbol: "F" },
];

type PropTypes = {
	isOpen: boolean;
	setIsOpen: Dispatch<SetStateAction<boolean>>;
};

export default function SettingsModal({ isOpen, setIsOpen }: PropTypes) {
	// const temp_ctx = useContext(TemperatureContext);
    const temperatureUnit = useSelector(unit);
    const accentColor = useSelector(accent);
    const dispatch = useDispatch();
    
	function save() {
		// Perform settings save actions

		setIsOpen(false);
	}

	return (
		<Transition appear show={isOpen} as={Fragment}>
			<Dialog as="div" className="relative z-20" onClose={() => setIsOpen(false)}>
				<Transition.Child
					as={Fragment}
					enter="ease-out duration-300"
					enterFrom="opacity-0"
					enterTo="opacity-100"
					leave="ease-in duration-200"
					leaveFrom="opacity-100"
					leaveTo="opacity-0">
					<div className="fixed inset-0 bg-black bg-opacity-90" />
				</Transition.Child>
				<div className="fixed inset-0 flex overflow-y-auto">
					<Transition.Child
						as={Fragment}
						enter="ease-out duration-300"
						enterFrom="opacity-0 scale-95"
						enterTo="opacity-100 scale-100"
						leave="ease-in duration-200"
						leaveFrom="opacity-100 scale-100"
						leaveTo="opacity-0 scale-95">
						<Dialog.Panel
							className={`mx-auto my-auto flex flex-col w-full max-w-md transform overflow-hidden rounded-lg bg-neutral-900 text-left align-middle transition-all
									`}>
							<button
								type="button"
								className={`ml-auto justify-center rounded-bl-lg border border-transparent bg-${accentColor}-500 px-1 py-1 text-2xl font-medium text-${accentColor}-900 hover:text-rose-100 focus:outline-none focus-visible:ring-2 focus-visible:ring-${accentColor}-500 focus-visible:ring-offset-2`}
								onClick={() => setIsOpen(false)}>
								<AiOutlineClose />
							</button>
							<section className="px-6 pt-0 py-3">
								<Dialog.Title as="h3" className="text-lg font-medium leading-6 text-gray-300">
									Settings
								</Dialog.Title>
							</section>
							<div className={`w-full h-[1px] bg-${accentColor}-500`} />
							<section>
								<div className="p-6 w-full flex gap-6 items-center">
									<span>Temperature unit:</span>
									<Tab.Group>
										<Tab.List className="w-fit flex space-x-1 bg-black/30 rounded-md">
											{TabData.map((temp) => (
												<Tab
													key={temp.unit}
													className={({
														selected,
													}) => `w-full py-1 px-5 text-sm font-medium rounded-md
														${
															temperatureUnit === temp.unit
																? `bg-${accentColor}-300 text-${accentColor}-900`
																: "bg-transparent text-white"
														}`}
													// onClick={() => temp_ctx?.changeTemperatureUnit(temp.unit)}>
													onClick={() => dispatch(SET_TEMPERATURE_UNIT(temp.unit))}>
													&deg;{temp.symbol}
												</Tab>
											))}
										</Tab.List>
									</Tab.Group>
								</div>
							</section>
							{/* Accent Color section */}
							<section className="mt-4 flex">
								<div className="p-6 w-full flex flex-col gap-y-2">
									<span>Accent color:</span>
									<div className="grid grid-cols-4 gap-2 space-x-2">
										{List_ColorAccent.map((color) => (
											<button
												key={`color-list-${color}`}
												type="button"
												className={`relative py-1 px-2 bg-${color}-500 bg-opacity-10 text-${color}-500 outline-none ring-1 ring-${color}-500 ring-opacity-10 border-none capitalize
                                                before:absolute before:w-2 before:h-full before:top-0 before:left-0
                                                before:bg-${color}-500
                                            ${
												accentColor === color
													? `before:bg-opacity-100 before:saturate-100`
													: `before:bg-opacity-5 before:saturate-50`
											}
                                            hover:ring-opacity-50 hover:before:bg-opacity-80 hover:text-${color}-100 hover:transition-opacity duration-300 text-base font-semibold`}
												onClick={() => dispatch(SET_ACCENT_COLOR(color))}>
												{color}
											</button>
										))}
									</div>
								</div>
							</section>
							<div className="mt-4 flex">
								<button
									type="button"
									className={`ml-auto inline-flex justify-center rounded-tl-lg border border-transparent bg-${accentColor}-200 px-4 py-2 text-sm font-medium text-${accentColor}-900 hover:bg-${accentColor}-500 hover:text-${accentColor}-100 focus:outline-none focus-visible:ring-2 focus-visible:ring-${accentColor}-500 focus-visible:ring-offset-2`}
									onClick={save}>
									Save
								</button>
							</div>
						</Dialog.Panel>
					</Transition.Child>
				</div>
			</Dialog>
		</Transition>
	);
}
