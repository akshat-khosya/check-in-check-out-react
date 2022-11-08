import React, { useContext } from "react";
import { useState } from "react";
import GlobalContext from "../../context/GlobalContext";
import {
  BrowserRouter,
  Routes, //replaces "Switch" used till v5
  Route,
  useNavigate
} from "react-router-dom";
import "./Login.scss";

function Login() {
  const { axiosInstance, machineId, geoLocation,setIsAuthenticated,setUserData,setAccessToken,setRefreshToken } = useContext(GlobalContext);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  let navigate = useNavigate();

  function handleChange1(event) {
    setEmail(event.target.value);
    // setPassword()
    // console.log(email)
  }
  function handleChange2(event) {
    setPassword(event.target.value);
    // setPassword()
    // console.log(password);
  }
  async function handleSubmit(event) {
    event.preventDefault();
    let s = email;
    let p = password;
    
    // console.log(email);
    if (email.length == 0 && password.length < 6) {
      // console.log("submit")
      alert("fill again");
    } else {
      // axios send
      console.log(machineId)
      console.log(geoLocation)

      try {
        const res = await axiosInstance.post("/api/session/create", {
          email: email,
          password: password,
          machineId: machineId,
          geoLocation: geoLocation,
        });
        console.log(res.data);
        setIsAuthenticated(true)
        const {accessToken,refreshToken,userData}=res.data;
        // console.log(accessToken);
        setAccessToken(accessToken);
        setRefreshToken(refreshToken);
        setUserData(userData);
        window.localStorage.setItem('refreshToken', refreshToken);
        
          navigate("/dashboard");
        
        
      } catch (error) {
        alert(error.response.data.msg);
        console.log(error);
      }
      // context geo location and machine id
    }
  }
  return (
    <div className="container">
      <h1>Login {email}</h1>

      <form onSubmit={handleSubmit}>
        <input
          onChange={handleChange1}
          name="email"
          // value={contact.email}
          placeholder="Email"
        />
        <input
          onChange={handleChange2}
          name="password"
          type="password"
          // value={contact.lName}
          placeholder="Password"
        />

        <button>Submit</button>
      </form>
    </div>
  );
}

export default Login;
