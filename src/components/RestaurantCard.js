const RestaurantCard = (props) =>{
    let {resData} = props
    let {name,cuisines,avgRating,costForTwo,sla} = resData?.info;
    let cloudinaryImageId = "https://www.foodiesfeed.com/wp-content/uploads/ff-images/2025/01/delicious-mushroom-soup-with-fresh-herbs.png"
    return(
        <div className="res-card">
            <img className="res-logo"  src={cloudinaryImageId}/>
            <h3>{name}</h3>
            <h5>{cuisines.join(", ")}</h5>
            <h5>{costForTwo}</h5>
            <h5>{avgRating}</h5>
            <h6>{sla.deliveryTime} minutes</h6>  
        </div>
    )
}

export default RestaurantCard;