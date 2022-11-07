import React, { useContext, useEffect, useState } from "react";
import { Route, Routes } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";
import "./style.scss";
import { useContextData } from "./context/useContext";
import GlobalContext from "./context/GlobalContext";
import routes from "./routes";
import onLoad from "./onLoad";


const Wrapper = () => {
	const {machineId,setMachineId,setGeoLocation}=useContext(GlobalContext);
	AOS.init();
	useEffect(()=>{
		 onLoad(setMachineId,setGeoLocation);
	},[])
	return (
		<>
			<Routes>
				{routes.map((route, index) => {
					return (
						<Route
							key={index}
							path={route.path}
							element={route.component}
						/>
					);
				})}
			</Routes>
		</>
	);
};

const App = () => {
	const context = useContextData();
	return (
		<GlobalContext.Provider value={context}>
			<Wrapper />
		</GlobalContext.Provider>
	);
};

export default App;
