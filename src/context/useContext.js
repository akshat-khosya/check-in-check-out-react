import axios from "axios";
import { useState } from "react";

export const useContextData = () => {
	// Loading State
	const [isLoading, setIsLoading] = useState(false);

	// Global Authentication State
	const [isAuthenticated, setIsAuthenticated] = useState(false);

	// Axios Instance Configurations
	const axiosInstance = axios.create({
		baseURL: "https://check-in-check-out-backend.up.railway.app",
		headers: {
			"Content-Type": "application/json",
		},
	});
	// machine id
	const [machineId,setMachineId]=useState("");
	const [geoLocation,setGeoLocation]=useState("");
	// access token user data ,refresh token
	const [accessToken,setAccessToken]=useState("")
	const [refreshToken,setRefreshToken]=useState("")
	const [userData,setUserData]=useState("")
	// Media Breakpoints
	const mediaQuerySm = window.matchMedia("(max-width: 672px)");
	const mediaQueryMd = window.matchMedia("(max-width: 880px)");
	const mediaQueryLg = window.matchMedia("(min-width: 880px)");
	const breakpoint = (device) => {
		if (device === "mobile") return mediaQuerySm.matches;
		else if (device === "tab") return mediaQueryMd.matches;
		else return mediaQueryLg.matches;
	};
	mediaQuerySm.addListener(breakpoint);
	mediaQueryMd.addListener(breakpoint);
	mediaQueryLg.addListener(breakpoint);

	return {
		breakpoint,
		isLoading,
		setIsLoading,
        isAuthenticated,
        setIsAuthenticated,
		axiosInstance,
		machineId,setMachineId,
		geoLocation,setGeoLocation,
		userData,setUserData,
		accessToken,setAccessToken,
		refreshToken,setRefreshToken
	};
};
