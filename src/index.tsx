import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { Provider } from "react-redux";
import { store } from "redux/store";

const root = ReactDOM.createRoot(document.getElementById("root") as HTMLElement);
root.render(
	<React.StrictMode>
		<Provider store={store}>
			<App />
		</Provider>
        {/* Needed for the colors to render properly */}
			<div className="hidden">
				{/* <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-blue-500 to-white"></span>
				<span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-white"></span>
				<span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-indigo-500"></span>
				<span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-yellow-500"></span>
				<span className="text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-red-700"></span>
				<span className="bg-rose-500 shadow-rose-500/20  text-rose-500 ring-rose-500"></span>
				<span className="bg-sky-500 shadow-sky-500/20  text-sky-500 ring-sky-500"></span>
				<span className="bg-green-500 shadow-green-500/20  text-green-500 ring-green-500"></span>
				<span className="bg-teal-500 shadow-teal-500/20  text-teal-500 ring-teal-500"></span>
				<span className="bg-orange-500 shadow-orange-500/20  text-orange-500 ring-orange-500"></span>
				<span className="bg-yellow-500 shadow-yellow-500/20  text-yellow-500 ring-yellow-500"></span>
				<span className="bg-violet-500 shadow-violet-500/20  text-violet-500 ring-violet-500"></span>
				<span className="bg-indigo-500 shadow-indigo-500/20  text-indigo-500 ring-indigo-500"></span> */}
				{/* <span className="bg-rose-300 text-rose-200"></span>
				<span className="bg-sky-300 text-sky-200"></span>
				<span className="bg-green-300 text-green-200"></span>
				<span className="bg-teal-300 text-teal-200"></span>
				<span className="bg-orange-300 text-orange-200"></span>
				<span className="bg-yellow-300 text-yellow-200"></span>
				<span className="bg-violet-300 text-violet-200"></span>
				<span className="bg-indigo-300 text-indigo-200"></span> */}
				<span className="before:bg-rose-500 after:bg-rose-500 hover:before:bg-rose-500"></span>
				<span className="before:bg-sky-500 after:bg-sky-500 hover:before:bg-sky-500"></span>
				<span className="before:bg-green-500 after:bg-green-500 hover:before:bg-green-500"></span>
				<span className="before:bg-teal-500 after:bg-teal-500 hover:before:bg-teal-500"></span>
				<span className="before:bg-orange-500 after:bg-orange-500 hover:before:bg-orange-500"></span>
				<span className="before:bg-yellow-500 after:bg-yellow-500 hover:before:bg-yellow-500"></span>
				<span className="before:bg-violet-500 after:bg-violet-500 hover:before:bg-violet-500"></span>
				<span className="before:bg-indigo-500 after:bg-indigo-500 hover:before:bg-indigo-500"></span>

				<span className="selection:bg-rose-500"></span>
				<span className="selection:bg-sky-500"></span>
				<span className="selection:bg-green-500"></span>
				<span className="selection:bg-teal-500"></span>
				<span className="selection:bg-orange-500"></span>
				<span className="selection:bg-yellow-500"></span>
				<span className="selection:bg-violet-500"></span>
				<span className="selection:bg-indigo-500"></span>

				<span className="focus-within:shadow-rose-500/20"></span>
				<span className="focus-within:shadow-sky-500/20"></span>
				<span className="focus-within:shadow-green-500/20"></span>
				<span className="focus-within:shadow-teal-500/20"></span>
				<span className="focus-within:shadow-orange-500/20"></span>
				<span className="focus-within:shadow-yellow-500/20"></span>
				<span className="focus-within:shadow-violet-500/20"></span>
				<span className="focus-within:shadow-indigo-500/20"></span>
				
                <span className="hover:bg-rose-500"></span>
				<span className="hover:bg-sky-500"></span>
				<span className="hover:bg-green-500"></span>
				<span className="hover:bg-teal-500"></span>
				<span className="hover:bg-orange-500"></span>
				<span className="hover:bg-yellow-500"></span>
				<span className="hover:bg-violet-500"></span>
				<span className="hover:bg-indigo-500"></span>
				
                {/* <span className="caret-rose-900"></span> */}
				{/* <span className="caret-sky-900"></span> */}
				{/* <span className="caret-green-900"></span> */}
				{/* <span className="caret-teal-900"></span> */}
				{/* <span className="caret-orange-900"></span> */}
				{/* <span className="caret-yellow-900"></span> */}
				{/* <span className="caret-violet-900"></span> */}
				{/* <span className="caret-indigo-900"></span> */}

                <span className="hover:text-rose-900"></span>
				<span className="hover:text-sky-900"></span>
				<span className="hover:text-green-900"></span>
				<span className="hover:text-teal-900"></span>
				<span className="hover:text-orange-900"></span>
				<span className="hover:text-yellow-900"></span>
				<span className="hover:text-violet-900"></span>
				<span className="hover:text-indigo-900"></span>
				
                <span className="hover:text-rose-100"></span>
				<span className="hover:text-sky-100"></span>
				<span className="hover:text-green-100"></span>
				<span className="hover:text-teal-100"></span>
				<span className="hover:text-orange-100"></span>
				<span className="hover:text-yellow-100"></span>
				<span className="hover:text-violet-100"></span>
				<span className="hover:text-indigo-100"></span>
				{/* <span className="text-rose-100"></span>
				<span className="text-sky-100"></span>
				<span className="text-green-100"></span>
				<span className="text-teal-100"></span>
				<span className="text-orange-100"></span>
				<span className="text-yellow-100"></span>
				<span className="text-violet-100"></span>
				<span className="text-indigo-100"></span> */}
			</div>
	</React.StrictMode>
);
