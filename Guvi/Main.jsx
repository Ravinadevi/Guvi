import { Route, Routes } from "react-router-dom";
import Login from "./Screen/Login";
import Registration from "./Screen/Registration"
import Home from "./Screen/Home"
import Details from "./Screen/Details";
import "./style.css";
const Main = () => {
    return ( 
        <>
        <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="/Registration" element={<Registration/>}/>
            <Route path="/Login" element={<Login/>}/>
            <Route path="/Details" element={<Details/>}/>
            
        </Routes>
        </>
     );
}
 
export default Main;