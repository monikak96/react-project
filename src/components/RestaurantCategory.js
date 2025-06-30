import { useState } from "react";
import ItemsList from "./ItemsList";

const RestaurantCategory = (props) => {
  //console.log(props)
  const { data ,showItems,setShowIndex} = props;
  
  return (
    <div className=" hover:bg-orange-100 rounded-lg font-mono  p-2 m-4 border-8  border-orange-50 bg-orange-50 hover:cursor-pointer shadow-lg">
      <div
        className="flex font-medium justify-between"
        key={data.card.card.title}
        onClick={() => setShowIndex(true)}
      >
        <li className="text-lg font-bold">{data.card.card.title}</li>
        <li> ⬇</li>
      </div>
      {showItems && (
        <div className="font-normal text-center p-4">
          {data?.card?.card?.itemCards.map((item) => (
            <ItemsList key={item?.card?.info?.id} data={item} />
          ))}
        </div>
      )}
    </div>
  );
};
export default RestaurantCategory;