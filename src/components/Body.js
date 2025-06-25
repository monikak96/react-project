import RestaurantCard from "./RestaurantCard";
import resList from "../utils/mockData";
import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";

const Body = () => {
  const [restaurantList,setRestaurantList] = useState([])

  useEffect(()=>{
    fetchData()
  },[])

  const fetchData = () =>{
    // you can change the restauarant list from here , but swiggys api's dont work anymore
    setRestaurantList(resList)
  }
  

  if(restaurantList.length === 0){
    return <Shimmer/>
  }
  
  return (
    <div className="body">
      <div className="filter">
        <button
          className="filter-btn"
          onClick={() => {
            let filteredList = restaurantList.filter(
              (restaurant) => restaurant.info.avgRating < 4.4
            );
            console.log(filteredList);
            setRestaurantList(filteredList);
          }}
        >
          Top Rated Restaurants
        </button>
      </div>
      <div className="res-container">
        {
        restaurantList.map((restaurant) => (
          <RestaurantCard key={restaurant.info.id} resData={restaurant} />
        ))
        }
      </div>
    </div>
  );
};

export default Body;
