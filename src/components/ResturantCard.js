import {CDN_URL} from "../utils/constants"; //named import /export 
const ResturantCard= (props) => {
    const { resinfo }=props;
    const {
        cloudinaryImageId,
        name,
        avgRating,
        cuisines,
        costForTwo,
        deliveryTime
      }=resinfo?.info; 

      
    return(
       <div className="card w-44 h-96 p-2 mx-2 shadow-lg bg-gray-100 overflow-hidden" >
           <img className="res-logo h-40 w-44" 
            alt="res-logo" src={CDN_URL + cloudinaryImageId } />
           <h3 className="font-bold  text-xl">{name}</h3>
           <h5>{cuisines.join(",")}</h5>
           <h5>{avgRating} stars</h5>
           <h5>{costForTwo}</h5>
           <h5>{deliveryTime}</h5>
        </div>
    );
};

export default ResturantCard; 