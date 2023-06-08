import { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
const Details = () => {
    const nav=useNavigate();
    const[age,setage]=useState();
    const[Gender,setGender]=useState("Male");
    const[dob,setdob]=useState();
    const[ph,setph]=useState();
    const[City,setcity]=useState("");
    
useEffect(()=>{
    var k={id:localStorage.getItem("userid")}
    axios.post("http://127.0.0.1:5000/getdetails", k).then((Response) =>{
        console.log(Response.data)
        if (Response.data.length!=0){
            nav("/")
    
        }
    
    })
},[])
const add=()=>{
    if (age!="" && Gender!="" && dob!="" && ph!=""
    && City!="") {
        var k={id:localStorage.getItem("userid"), Age:age, Gender:Gender, dob:dob, phone:ph, City:City}
        axios.post("http://127.0.0.1:5000/details", k).then((Response) => {
            if (Response.data === "ok") {
              alert("Added Successfully");
              setage("");
              setGender("");
              setdob("");
              setph("");
              setcity("")
              nav("/")
    }
    else{
        alert("Error")
    }
    })
  }
    else{
        alert("Fill the all details")
    }
}
    
    
    return ( 
    <>
      <div className="main">
        <h3 style={{marginLeft:"43%",marginTop:'3%',color:"black"}}>Additional Details</h3>
            <div className="details">
            <label htmlFor="age">
              <b>Age:</b>
            </label>
            <br />
            <input className="box"
              type="text"
              placeholder=" Enter your age (eg: 22)"
              classage="form-control"
              value={age}
              onChange={(e) => setage(e.target.value)}
            />
            <br /><br />
            <label htmlFor="Gender">
              <b>Gender:</b>
            </label>
            <br />
            <select
              value={Gender}
              onChange={(e) => setGender(e.target.value)}>
                <option value="Male">Male</option>
                <option value="Female">Female</option>
            </select><br /><br />
            <label htmlFor="Dob">
              <b>Date of Birth:</b>
            </label>
            <br />
            <input className="box"
              type="date"
              placeholder=" Enter your Date of Birth"
              value={dob}
              onChange={(e) => setdob(e.target.value)}
            />

            <br /><br />
            <label htmlFor="Phone Number">
              <b>Phone Number:</b>
            </label>
            <br />
            <input className="box"
              type="text"
              placeholder=" Enter your Phone Number (eg: 1234567890)"
              value={ph}
              onChange={(e) => setph(e.target.value)}
            /> <br /><br />
             <label htmlFor="City">
              <b>City:</b>
            </label>
            <br />
            <input className="box"
              type="text"
              placeholder=" Enter your City"
              value={City}
              onChange={(e) => setcity(e.target.value)}
            />
           
            <br />
            <br />
            <input type="Submit" onClick={add} style={{marginLeft:"15%",marginTop:"3%", width:"10%",backgroundColor:"black",color:"white",border:"4px",height:"32px"}} />
           
          

            
          </div>
          </div>
    </> );
}
 
export default Details;