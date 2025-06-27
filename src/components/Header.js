import { useState } from "react";
import { LOGO_URL } from "../utils/constants";
import {Link} from "react-router"

const Header = () => {
    const [loginbtn,setLoginButton] = useState("Login")
    return (
      <div className="header">
        <div className="logo">
          <img className="logo-img" src={LOGO_URL} />
        </div>
        <div className="nav-items">
          <ul>
            <li><Link to ="/">Home</Link></li>
            <li><Link to ="/contact">Contact</Link></li>
            <li><Link to="/about">About</Link></li>
            <li>Cart</li>
          </ul>
          <button
            className="login"
            onClick={() => {
              loginbtn === "Login"
                ? setLoginButton("Logout")
                : setLoginButton("Login");
            }}
          >
            {loginbtn}
          </button>
        </div>
      </div>
    );
}

export default Header;