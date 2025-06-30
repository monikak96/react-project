import RestaurantCard, { withPromotedList } from "./RestaurantCard";
import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";
import { SWIGGY_URL } from "../utils/constants";
import { Link } from "react-router";

const Body = () => {
  const [restaurantList, setRestaurantList] = useState([]);
  const [filteredRestaurantList, setFilteredRestaurantList] = useState([]);

  const [searchtext, setSearchText] = useState("");

  useEffect(() => {
    fetchData();
  }, []);

  const PromotedRestaurantList = withPromotedList(RestaurantCard);

  const fetchData = async () => {
    // you can change the restauarant list from here , but swiggys api's dont work anymore
    let restaurantList = await fetch(SWIGGY_URL);
    let data = await restaurantList.json();
 
    setRestaurantList(
      data.data.cards[4].card.card.gridElements.infoWithStyle.restaurants
    );
    setFilteredRestaurantList(
      data.data.cards[4].card.card.gridElements.infoWithStyle.restaurants
    );
  };

  if (restaurantList.length === 0) {
    return <Shimmer />;
  }

  return (
    <div className="body ">
      <div className="filter flex justify-between">
        <div className="search ">
          <input
            className="px-2 m-2 border-[1] rounded bg-amber-100"
            type="Text"
            value={searchtext}
            onChange={(e) => {
              setSearchText(e.target.value);
            }}
          />
          <button
            className="search-btn px-2 m-2 font-mono border-[1] rounded-lg bg-amber-200 hover:bg-amber-300 hover:cursor-pointer"
            onClick={() => {
              let filteredList = restaurantList.filter((restaurant) =>
                restaurant.info.name
                  .toLowerCase()
                  .includes(searchtext.toLowerCase())
              );
              setFilteredRestaurantList(filteredList);
            }}
          >
            Search
          </button>
        </div>
        <button
          className="filter-btn px-20 m-2 border-[1] rounded-lg bg-amber-200  hover:bg-amber-300 hover:cursor-pointer font-mono"
          onClick={() => {
            let filteredList = restaurantList.filter(
              (restaurant) => restaurant.info.avgRating < 4.4
            );
            setFilteredRestaurantList(filteredList);
          }}
        >
          Top Rated Restaurants
        </button>
      </div>
      <div className="res-container px-2 flex flex-wrap">
        {filteredRestaurantList.map((restaurant) => (
          <Link
            to={"/restaurant/" + restaurant.info.id}
            key={restaurant.info.id}
          >
            {restaurant.info?.aggregatedDiscountInfoV3 ? (
              <PromotedRestaurantList resData={restaurant} />
            ) : (
              <RestaurantCard resData={restaurant} />
            )}
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Body;
