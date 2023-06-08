import { useState } from "react";
import { useNavigate } from "react-router-dom";
import validator from "validator";
import axios from "axios"
const Registration = () => {
  const nav= useNavigate();
  const [Name, setname] = useState("");
  const [Password, setpassword] = useState("");
  const [confirmpassword, setconfirmpassword] = useState("");
  const [Email, setemail] = useState("");
  const [error, setError] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const register = () => {
    if (
      validator.isStrongPassword(Password, {
        minLength: 8,
        minLowercase: 1,
        minUppercase: 1,
        minNumbers: 1,
        minSymbols: 1,
      })
    ) {
      setErrorMessage("");
      if (Password !== confirmpassword) {
        setError("Passwords do not match");
        return;
      } else {
        setError("");
        var k = { Name: Name,Email: Email, Password: Password };
        axios.post("http://127.0.0.1:5000/register", k).then((Response) => {
          if (Response.data === "ok") {
            alert("Account created Successfully");
            setname("");
            setpassword("");
            setemail("");
            setconfirmpassword("");
            setError("");
            setErrorMessage("");
            nav("/Login")
          } else {
            alert(Response.data);
          }
        });
      }
    } else {
      setErrorMessage("Is Not Strong Password");
    }
  };
    return ( 
        <>
        <div className="main">
        <h3 style={{marginLeft:"44%",marginTop:"4%", color:"black"}}>REGISTRATION</h3>
            <div className="reg">
            <label htmlFor="Name">
              <b>Name:</b>       
            </label>
            <br />
            <input className="box"
              type="text"
              placeholder=" Enter your Name"
              value={Name}
              onChange={(e) => setname(e.target.value)}
            />
            <br /><br />
            <label htmlFor="Email">
              <b>Email ID:</b>
            </label>
            <br />
            <input className="box"
              type="text"
              placeholder=" Enter your Email (eg: abc@gmail.com)"
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

            {errorMessage === "" ? null : (
              <span style={{ color: "red" }}>{errorMessage}</span>
            )}
            <br /><br />
            <label htmlFor="confirm password">
              <b>Confirm Password:</b>
            </label>
            <br />
            <input className="box"
              type="password"
              placeholder=" Enter your Password again"
              value={confirmpassword}
              onChange={(e) => setconfirmpassword(e.target.value)}
            />
            {error && <p style={{ color: "red" }}>{error}</p>}
            <br />
            <br />
            <br />
            <input type="Submit" style={{marginLeft:"15%",width:"10%",backgroundColor:"black",color:"white",border:"4px",height:"30px"}} onClick={register} />
            <br /><br />
            <text onClick={()=>nav("/Login")} style={{marginLeft:"6%",width:"34%",color:"white",border:"4px",height:"40px"}}>Already have an account? Login now</text>
           
          

            
          </div>
        
        </div>
        </>
     );
}
 
export default Registration;