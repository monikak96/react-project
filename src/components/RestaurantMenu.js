import { useParams } from "react-router";
import useRestaurantMenu from "../utils/userRestaurantMenu";
import Shimmer from "./Shimmer";

const RestaurantMenu = () => {

  const { resId } = useParams();

  const [menu, menuList] = useRestaurantMenu(resId);
  
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
