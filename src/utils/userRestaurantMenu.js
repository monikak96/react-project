import { useEffect,useState } from "react";
import { MENU_URL } from "../utils/constants";

const useRestaurantMenu = (resId) => {

  useEffect(() => {
    fetchData();
  }, []);

  const [menuList, setMenuList] = useState(null);
  const [menu, setMenu] = useState(null);

  const fetchData = async () => {
    let response = await fetch(MENU_URL + resId);
    let data = await response.json();

    //console.log(data?.data?.cards[4]?.groupedCard?.REGULAR?.cards)
    setMenu(data?.data?.cards[2]?.card?.card?.info);
    
    setMenuList(
      data?.data?.cards[4]?.groupedCard.cardGroupMap?.REGULAR?.cards
    );
    //.card.card.itemCards
  };
  return[menu,menuList]
};

export default useRestaurantMenu;
