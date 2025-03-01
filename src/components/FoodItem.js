import {CDN_URL} from "../utils/constants"; //named import /export 
const FoodItem= ({imageId,
    name,
    description,
    category,price}) => {  
    return(
       <div className="card w-44 h-96 p-2 mx-2 shadow-lg bg-gray-100 overflow-hidden" >
           <img className="res-logo h-40 w-44" 
            alt="res-logo" src={CDN_URL + imageId } />
           <h3 className="font-bold  text-xl">{name}</h3>
           <h5>{category}</h5>
           <h5>price:{price/100}</h5>
        </div>
    );
};

export default FoodItem; 
