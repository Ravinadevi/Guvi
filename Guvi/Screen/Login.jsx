import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios"

const Login = () => {
useEffect(()=>{
    localStorage.clear()
},[])
    const nav=useNavigate()
    const [Email,setemail]=useState("");
    const[Password,setpassword]=useState("");
    const check = () => {
        var k = { Email: Email, Password: Password };
        axios.post("http://127.0.0.1:5000/Check", k).then((Response) => {
          if (Response.data === "No user found") {
            alert(Response.data);
          } else {
            setemail("");
            setpassword("");
            localStorage.setItem("userid", Response.data["id"]);
            localStorage.setItem("Name", Response.data["Name"]); 
          

            nav("/Details");
          
          }
        });
      };
    return ( 
        <>
        <div className="main">
        <h3 style={{marginLeft:"47%",marginTop:"4%", color:"black"}}>LOGIN</h3>
          <div className="log">
        <label htmlFor="email">
              <b>Email ID:</b>
            </label>
            <br />
            <input className="box"
              type="text"
              placeholder=" Enter your Email"
              value={Email}
              onChange={(e) => setemail(e.target.value)}
            />
            <br /><br />
            <label htmlFor="psd">
              <b>Password:</b>
            </label>
            <br />
            <input className="box"
              type="password"
              placeholder=" Enter your Password"
              value={Password}
              onChange={(e) => setpassword(e.target.value)}
            />

            <br /><br /><br /><br />
            <input onClick={check} type="Submit" style={{marginLeft:"15%",width:"10%",backgroundColor:"black",color:"white",border:"4px",height:"30px"}}/>
            <br />
            <br />
            <text onClick={()=>nav("/Registration")} style={{marginLeft:"6%",width:"30%",color:"white",border:"4px",height:"40px"}}>Don't have an account? Signup now</text>
            </div>
        </div>
        </>
     );
}
 
export default Login;