import { useState,useContext } from "react";
import { LOGO_URL } from "../utils/constants";
import {Link} from "react-router"
import useOnlineStatus from "../utils/useOnlineStatus";
import UserContext from "../utils/UserContext";

const Header = () => {
    const [loginbtn,setLoginButton] = useState("Login")
    const onlineStatus  = useOnlineStatus();
    const {loggedInUser}  = useContext(UserContext);

    return (
      <div className="header p-4 m-2 flex justify-between bg-orange-50 shadow-lg">
        <div className="w-28 shadow-lg rounded-xl">
          <img className="logo-img rounded" src={LOGO_URL} />
        </div>
        <div className="nav-items flex px-4">
          <ul className="flex items-center">
            <li className="px-1 mx-2 font-semibold rounded-lg">Status : { onlineStatus? "✅" : "❌" } </li>
            <li className="px-1 mx-2 font-semibold hover:bg-amber-200 rounded-lg hover:cursor-pointer"><Link to ="/">Home</Link></li>
            <li className="px-1 mx-2 font-semibold hover:bg-amber-200 rounded-lg"><Link to ="/contact">Contact</Link></li>
            <li className="px-1 mx-2 font-semibold hover:bg-amber-200 rounded-lg"><Link to="/about">About</Link></li>
            <li className="px-1 mx-2 font-semibold hover:bg-amber-200 rounded-lg"><Link to ="/grocery">Grocery</Link></li>
            <li className="px-1 mx-2 font-semibold hover:bg-amber-200 hover:cursor-pointer rounded-lg">Cart</li>
            <li className="px-1 mx-2 font-semibold hover:bg-amber-200 rounded-lg">
              <button
            className="px-1 mx-1 font-semibold hover:cursor-pointer"
            onClick={() => {
              loginbtn === "Login"
                ? setLoginButton("Logout")
                : setLoginButton("Login");
            }}
          >
            {loginbtn}
          </button>
            </li>
            <li className="px-1 mx-2 font-semibold hover:bg-amber-200 hover:cursor-pointer rounded-lg">{loggedInUser}</li>
          </ul>
          
        </div>
      </div>
    );
}

export default Header;