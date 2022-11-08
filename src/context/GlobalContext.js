import { createContext } from "react";

const GlobalContext = createContext({
	breakpoint: () => { },
	isLoading: "",
	setIsLoading: () => { },
	isAuthenticated: "",
	setIsAuthenticated: () => { },
	axiosInstance: undefined,
	machineId: "",
	setMachineId: () => { },
	geoLocation: "", setGeoLocation: () => { },
	userData: null
	, setUserData: () => { },
	accessToken: "",
	setAccessToken: () => { },
	refreshToken: ""
	, setRefreshToken:()=>{}
});

export default GlobalContext;
