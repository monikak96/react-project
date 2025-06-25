import React from "react";
import ReactDOM from "react-dom/client"

/**
 * Header
 *  - logo
 *  - list
 * Body
 *  - search
 *  - restuarant container
 *      - res card
 *          - image
 *          - res name
 *          - cuisine
 *          - rating
 * Footer
 *  - address
 *  - phonenumber
 *  - 
 */
const Header = () => {
    return (
        <div className="header">
            <div className="logo">
                <img className="logo-img" src="https://img.freepik.com/premium-vector/food-ordering-app-logo-with-points-fork-shapes-center_666184-195.jpg"/>
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

const Body = () => {
    return (
        <div className="body">
            <div className="search">Search bar</div>
            <div className="res-container">
                <RestaurantCard/>
                <RestaurantCard/>
                <RestaurantCard/>
                <RestaurantCard/>
                <RestaurantCard/>
                <RestaurantCard/>
                <RestaurantCard/>
                <RestaurantCard/>
                <RestaurantCard/>
                <RestaurantCard/>
            </div>
        </div>
    )
}

const RestaurantCard = () =>{
    return(
        <div className="res-card">
            <img className="res-logo" src="https://easyindiancookbook.com/wp-content/uploads/2023/06/chicken-biryani.jpg"/>
            <h3>Bunny Foods</h3>
            <h5>Biriyani,Andhra,South Indian</h5>
            
                <h5>4.4 stars</h5>
                <h6>37 min</h6>
            
        </div>
    )
}

const AppComponent = () => (
    (
        <div className="main">
        <Header/>
        <Body/>
        </div>
    )
)
const root = ReactDOM.createRoot(document.getElementById("root"))

root.render(< AppComponent/>)