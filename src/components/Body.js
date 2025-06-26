import RestaurantCard from "./RestaurantCard";
import resList from "../utils/mockData";
import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";

const Body = () => {
  const [restaurantList,setRestaurantList] = useState([])
  const [ filteredRestaurantList,setFilteredRestaurantList] = useState([]);

  const [ searchtext , setSearchText] = useState('');
  
  useEffect(()=>{
    fetchData()
  },[])

  const fetchData = () =>{
    // you can change the restauarant list from here , but swiggys api's dont work anymore
    console.log(resList);
    setRestaurantList(resList)
    setFilteredRestaurantList(resList)
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
          <RestaurantCard key={restaurant.info.id} resData={restaurant} />
        ))}
      </div>
    </div>
  );
};

export default Body;
