const RestaurantCard = (props) => {
    console.log(props)
  const { resData } = props;
  const { name, cuisines, avgRating, costForTwo, sla } = resData?.info;

  let cloudinaryImageId =
    "https://www.foodiesfeed.com/wp-content/uploads/ff-images/2025/01/delicious-mushroom-soup-with-fresh-herbs.png";

  return (
    <div className="res-card w-[250] h-[400] p-2 m-2 text-left bg-orange-50 hover:bg-orange-200 rounded-lg">
      <img className="rounded-lg " src={cloudinaryImageId} />
      <h3 className="font-extrabold text-lg p-1"> {name}</h3>
      <h5 className="font-medium text-m truncate p-1">{cuisines.join(", ")}</h5>
      <h5 className="font-medium text-m p-1">{costForTwo}</h5>
      <h5 className="font-medium text-m p-1">{avgRating}</h5>
      <h6 className="font-medium  text-m p-1">{sla.deliveryTime} minutes</h6>
    </div>
  );
};

export const withPromotedList = (RestaurantCard) => {
    
   return(props)=>{
    const { resData } = props;
    return(<div className="relative">
      <label className="absolute p-2 mx-4 bottom-0 left-0 text-lg rounded-lg bg-orange-100"> {resData.info?.aggregatedDiscountInfoV3?.header + ' '+resData.info?.aggregatedDiscountInfoV3?.subHeader  }</label>
      <RestaurantCard {...props}/>
    </div>)
   }
};

export default RestaurantCard;
