import { LOGO_URL } from "../Utils/Common";
import { useState } from "react";
  
const Header = () => {

    
    const [btnNameReact , setbtnNameReact]= useState("Login");
    return (
    <div className="header">
    <div className="log-container">
    <img  className="logo" src={LOGO_URL}/>
    </div>
    
    <div className="nav-items">
    <ul>
    <li>Home</li>
    <li>About us</li>
    <li>Contact Us</li>
    <li>Cart</li>
     <li><button className="login" onClick={()=>
     { btnNameReact === "Login" ? setbtnNameReact("Logout") : setbtnNameReact("Login")
     }}>
    {btnNameReact}
    </button>
    </li>
    </ul>
    </div>
    </div>
    )
    }

    export default Header;