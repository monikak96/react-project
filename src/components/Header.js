import { useState } from "react";
import { LOGO_URL } from "../utils/constants";

const Header = () => {
    const [loginbtn,setLoginButton] = useState("Login")
    return (
      <div className="header">
        <div className="logo">
          <img className="logo-img" src={LOGO_URL} />
        </div>
        <div className="nav-items">
          <ul>
            <li>About</li>
            <li>Contact</li>
            <li>Blog</li>
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