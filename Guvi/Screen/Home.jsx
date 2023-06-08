import { useState } from "react";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
const Home = () => {
    const [data, setdata]= useState([]);
    const nav= useNavigate()
useEffect(()=>{
   if (localStorage.getItem("Name")===null){
    nav("/Login")
   }
    var k={id:localStorage.getItem("userid")}
    axios.post("http://127.0.0.1:5000/getdetails", k).then((Response) =>{
        if (Response.data.length!=0){
            setdata(Response.data[0])
         
        }
   
    
    })
},[])
     

    return (
     <>
     <div className="main">
      <h4 style={{marginLeft:"46%",marginTop:'3%',color:"black"}}>PROFILE</h4>
       <div className="home">
       <div className="bor">
       <p> Age: {data[1]}</p>
       <p> Gender: {data[2]}</p>
       <p>DOB: {data[3]}</p>
       <p>Phone No : {data[4]}</p>
       <p>City: {data[5]}</p>
       </div>
       </div>
       

       <div>
       <button onClick={()=>nav("/Login")} style={{backgroundColor:"black",color:"white",width:"5%",marginTop:"4%",marginLeft:"46%", border:"4px",height:"33px"}}>Logout</button>
       </div>
       </div>
    </> 
    );
}
 
export default Home;