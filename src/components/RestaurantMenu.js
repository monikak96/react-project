import { useParams } from "react-router";
import useRestaurantMenu from "../utils/userRestaurantMenu";
import Shimmer from "./Shimmer";
import RestaurantCategory from "./RestaurantCategory";
import { useState } from "react";

const RestaurantMenu = () => {
  const { resId } = useParams();

  const [menu, menuList] = useRestaurantMenu(resId);

  const [ showIndex,setShowIndex] = useState(0);

  if (menuList === null) return <Shimmer />;
  //console.log(menuList)
  const updatedMenuList = menuList.filter((item)=>
    item?.card?.card?.["@type"] === "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
  )
//console.log(updatedMenuList)
  return (
    <div>
      <h1 className="border-2 shadow-lg border-orange-100 bg-orange-100 p-4 m-4 rounded-lg font-bold font-mono">
        {menu.name}
      </h1>
      <div className=" p-4 m-4 rounded-lg font-semibold font-mono">
        <h2>{menu.cuisines.join(", ")} </h2>
        <h2>{menu.costForTwo / 100 + " For two"}</h2>
      </div>

      <h3 className="text-center font-mono font-black">Menu</h3>
      <div className="border-4 px-4 mx-4 rounded-lg border-orange-100"></div>
      <ul className="p-4 m-4 ">
        {updatedMenuList.map((item,index) => {
          return (
            <RestaurantCategory key ={item?.card?.card?.title} data={item}
            showItems={index === showIndex ? true : false} setShowIndex={()=>setShowIndex(index)}/>
          ) ;
        })}
      </ul>
    </div>
  );
};

export default RestaurantMenu;
