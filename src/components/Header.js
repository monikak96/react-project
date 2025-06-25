import { LOGO_URL } from "../utils/constants";

const Header = () => {
    return (
        <div className="header">
            <div className="logo">
                <img className="logo-img" src={LOGO_URL}/>
            </div>
            <div className="nav-items">
                <ul>
                    <li>About</li>
                    <li>Contact</li>
                    <li>Blog</li>
                    <li>Cart</li>
                </ul>
            </div>
        </div>
    )
}

export default Header;