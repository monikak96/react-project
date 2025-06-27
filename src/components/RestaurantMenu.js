import { useEffect, useState } from "react";
import { useParams } from "react-router";
import { MENU_URL } from "../utils/constants";

import Shimmer from "./Shimmer";

const RestaurantMenu = () => {
  useEffect(() => {
    fetchData();
  }, []);

  const { resId } = useParams();

  const [menuList, setMenuList] = useState(null);
  const [menu, setMenu] = useState(null);

  const fetchData = async () => {
    let response = await fetch(MENU_URL + resId);
    let data = await response.json();
    setMenu(data?.data?.cards[2]?.card?.card?.info);
    console.log(
      data?.data?.cards[4]?.groupedCard.cardGroupMap?.REGULAR?.cards[2].card
        .card.itemCards
    );
    setMenuList(
      data?.data?.cards[4]?.groupedCard.cardGroupMap?.REGULAR?.cards[2].card
        .card.itemCards
    );
  };
  if (menuList === null) return <Shimmer />;

  return (
    <div>
      <h1>{menu.name}</h1>
      <h2>{menu.cuisines.join(", ") + " : " + menu.costForTwo / 100} </h2>
      <h3>Menu:</h3>
      <ul>
        {menuList.map((item) => {
          return (
            <li key={item.card.info.id}>
              {item.card.info.name +
                " - Rs:" +
                (item.card.info.price / 100 ||
                  item.card.info.defaultPrice / 100)}
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default RestaurantMenu;
