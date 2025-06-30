import { useState } from "react";
import ItemsList from "./ItemsList";

const RestaurantCategory = (props) => {
    //console.log(props)
    const {data} = props;
    const [showItems,setShowItems] = useState(false) 
    return(
        <div className=" hover:bg-orange-100 rounded-lg font-mono  p-2 m-4 border-8  border-orange-50 bg-orange-50 hover:cursor-pointer shadow-lg">

            <div className="flex font-medium justify-between"
              key={data.card.card.title} onClick={()=>setShowItems(!showItems)}
            >
              <li className="text-lg font-bold">{data.card.card.title}</li>
              <li> ⬇</li>
            </div>
            {
                showItems && (<div className="font-normal text-center p-4">
                {
                    data?.card?.card?.itemCards.map((item) => 
                        <ItemsList key={item?.card?.info?.id} data={item}/>
                    )
                }
            </div>)
            }
            
            
        </div>
    )
}
export default RestaurantCategory;

/**
 * <div
              className="flex font-medium hover:bg-orange-100 rounded-lg font-mono justify-between p-2 m-4 border-8  border-orange-50 bg-orange-50 hover:cursor-pointer"
              key={item.card.info.id}
            >
              <li className="">{item.card.info.name}</li>
              <li>
                {"Rs:" +
                  (item.card.info.price / 100 ||
                    item.card.info.defaultPrice / 100)}
              </li>
            </div>
 */