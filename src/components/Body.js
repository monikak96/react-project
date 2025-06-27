import RestaurantCard from "./RestaurantCard";
import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";
import { SWIGGY_URL } from "../utils/constants";
import {Link} from "react-router";

const Body = () => {
  const [restaurantList,setRestaurantList] = useState([])
  const [ filteredRestaurantList,setFilteredRestaurantList] = useState([]);

  const [ searchtext , setSearchText] = useState('');
  
  useEffect(()=>{
    fetchData()
  },[])

  const fetchData = async () => {
    // you can change the restauarant list from here , but swiggys api's dont work anymore
    let restaurantList = await fetch(SWIGGY_URL);
    let data = await restaurantList.json()
    console.log(data.data.cards[4].card.card.gridElements.infoWithStyle.restaurants);

    setRestaurantList(data.data.cards[4].card.card.gridElements.infoWithStyle.restaurants)
    setFilteredRestaurantList(data.data.cards[4].card.card.gridElements.infoWithStyle.restaurants)
  }
  

  if(restaurantList.length === 0){
    return <Shimmer/>
  }
  
  return (
    <div className="body">
      <div className="filter">
        <div className="search">
          <input
            className="search-box"
            type="Text"
            value={searchtext}
            onChange={(e) => {
              setSearchText(e.target.value);
            }}
          />
          <button
            className="search-btn"
            onClick={() => {
              let filteredList = restaurantList.filter((restaurant)=>
                restaurant.info.name.toLowerCase().includes(searchtext.toLowerCase())
              )
              console.log(filteredList)
              setFilteredRestaurantList(filteredList)
            }}
          >Search</button>
        </div>
        <button
          className="filter-btn"
          onClick={() => {
            let filteredList = restaurantList.filter(
              (restaurant) => restaurant.info.avgRating < 4.4
            );
            console.log(filteredList);
            setFilteredRestaurantList(filteredList);
          }}
        >
          Top Rated Restaurants
        </button>
      </div>
      <div className="res-container">
        {filteredRestaurantList.map((restaurant) => (
          <Link to={"/restaurant/"+restaurant.info.id} key={restaurant.info.id}> <RestaurantCard  resData={restaurant} /></Link>
        ))}
      </div>
    </div>
  );
};

export default Body;
