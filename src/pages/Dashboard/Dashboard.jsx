import React, { useContext } from "react";
import GlobalContext from "../../context/GlobalContext";
import "./dashboard.scss";
// import React from "react";
<<<<<<< HEAD
// import ReactDOM from "react-dom";
import QRCode from "react-qr-code";
// import { QrReader } from 'react-qr-reader';
// import QRscanner from "./Qrscan";
=======
import ReactDOM from "react-dom";
import QRCode from "react-qr-code";
import { QrReader } from 'react-qr-reader';
import QRscanner from "./Qrscan";
>>>>>>> c679d44a28ccc497936544647b41010f1198391c
// import Test from "./Qrscan";
import App1 from "./Qrscan";
// function QRScan()
function Student (){
	return <div style={{ height: "auto", margin: "35vh 45vw", maxWidth: 64, width: "100%" }}><QRCode value="hey" /></div>

}
function GateGuard(){

return <h1>gateGuard</h1>
}
function Admin(){
	return <App1 />
	}

const Dashboard = () => {
	const { accessToken,refreshToken,userData} = useContext(GlobalContext);
	console.log(accessToken)
	console.log(refreshToken)
	console.log(userData)
	const  {email,role}=userData;
	let person;
	console.log(role);
	// if(role == 0){
	// 	person= <h1>admin</h1>
	// }
	// else if(role ==1){
	// 	person=
	// }
	// else if(role ==2){
	// 	person=
	// }
	return (<main>Dashboard {
		role==1 && <GateGuard/>
	}
	{
		role ==0 && <Admin/>
	}
	{
		role==2 && <Student/>
	}
	</main>
<<<<<<< HEAD

=======
	
>>>>>>> c679d44a28ccc497936544647b41010f1198391c
	);
};

export default Dashboard;