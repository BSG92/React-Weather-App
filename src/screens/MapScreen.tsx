// @ts-nocheck
import React, { useContext, useState, useEffect } from "react";
import { CityContext } from "contexts/cityContext";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import { useMap } from "react-leaflet";
import "leaflet/dist/leaflet.css";

function ChangeMapView({ coordinates }) {
	const map = useMap();
	map.setView(coordinates, map.getZoom());
}

function MarkerIcon() {
	return (
		<div
			className={`relative before:pulse-before after:pulse-after
                before:w-16 before:h-16 before:absolute before:top-0 before:bottom-0 before:left-0 before:right-0 before:rounded-full before:bg-rose-500 before:-z-10
                after:w-16 after:h-16 after:absolute after:top-0 after:bottom-0 after:left-0 after:right-0 after:rounded-full after:bg-rose-500 after:-z-10
            `}>
			<div className="w-10 h-10 translate-x-[30%] translate-y-[30%] rounded-full bg-dark" />
		</div>
	);
}

function MapScreen() {
	const selectedCity = useContext(CityContext);
	const [coordinates, setCoordinates] = useState<{ lat: number; lng: number }>({
		lat: selectedCity.lat,
		lng: selectedCity.lng,
	});

	useEffect(() => {
		setCoordinates({ lat: selectedCity?.lat, lng: selectedCity?.lng });
	}, [selectedCity]);

	return (
		<MapContainer center={[coordinates?.lat, coordinates?.lng]} zoom={12} style={{ height: "70vh", width: "100%" }}>
			{/* <TileLayer
					url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
					attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
				/> */}
			<TileLayer
				url="http://{s}.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}.png"
				attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a>, <a href="https://alexurquhart.github.io/free-tiles/#">@alexurquhart</a>  contributors'
			/>
			{/* <TileLayer
					url="https://tiles.stadiamaps.com/tiles/alidade_smooth_dark/{z}/{x}/{y}{r}.png"
					attribution='&copy; <a href="https://www.stadiamaps.com/" target="_blank">Stadia Maps</a> &copy; <a href="https://openmaptiles.org/" target="_blank">OpenMapTiles</a> &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
				/> */}
			{/* <Marker position={[6.52, 8.1245]}>
					<Popup>
						A pretty CSS3 popup. <br /> Easily customizable.
					</Popup>
				</Marker> */}
			<Marker position={[coordinates.lat, coordinates.lng]} />
			<ChangeMapView coordinates={coordinates} />
		</MapContainer>
	);
}

export default MapScreen;
