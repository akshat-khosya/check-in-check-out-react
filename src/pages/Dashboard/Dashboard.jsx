import React, { useContext } from "react";
import GlobalContext from "../../context/GlobalContext";
import "./dashboard.scss";

const Dashboard = () => {
	const { accessToken,refreshToken,userData} = useContext(GlobalContext);
	console.log(accessToken)
	console.log(refreshToken)
	console.log(userData)
	return <main>Dashboard</main>;
};

export default Dashboard;
