import { createContext } from "react";

const GlobalContext = createContext({
	breakpoint: () => {},
	isLoading: "",
	setIsLoading: () => {},
	isAuthenticated: "",
	setIsAuthenticated: () => {},
	axiosInstance: undefined,
	machineId:"",
	setMachineId:()=>{},
	geoLocation:"",setGeoLocation:()=>{}
});

export default GlobalContext;
