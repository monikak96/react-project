import { FOOD_IMAGE } from "../utils/constants";

const ItemsList = (props) => {
  const { data } = props;
  //console.log(data);
  return (
    <div className="flex justify-between  border-orange-300 border-b-2">
      <div className="p-2 m-4 text-left text-balance" key={data.card.info.id}>
        <li className="text-medium font-semibold">{data.card.info.name}</li>
        <li className="text-normal">
          {"₹ " +
            (data.card.info.price / 100 || data.card.info.defaultPrice / 100)}
        </li>
        <p  className="py-2 my-2">{data.card.info.description}</p>
      </div>
      <div className="relative p-2 m-auto h-40 w-40 object-fill">
        <img className="rounded-lg m-1" src={FOOD_IMAGE}></img>
        <label className="absolute border-2 bg-black text-white rounded-lg mx-2 px-2 bottom:0 left:0">Add+</label>
      </div>
    </div>
  );
};

export default ItemsList;
