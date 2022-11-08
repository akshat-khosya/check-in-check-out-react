import { useState } from "react";
import { v4 as uuidv4 } from 'uuid';
import axios from "axios";
const onLoad = async(setMachineId,setGeoLocation)=>{
    // const [machineid,] = useState("");
  let machineId=  window.localStorage.getItem("machineId");
  if(machineId==null){
   
    machineId =uuidv4();
    window.localStorage.setItem("machineId",machineId);
   


  }
  setMachineId(()=>machineId);
  try {
    const res = await axios.get("http://ipwho.is");
    // console.log(res.data);
    setGeoLocation(()=>JSON.stringify(res.data))
    
  } catch (error) {
    // alert(error.response.data.msg);
    console.log(error);
  }
//   setMachineId(()=>"sadhashd");
    // console.log(v)
}
export default onLoad;