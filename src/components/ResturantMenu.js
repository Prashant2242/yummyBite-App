// for api call use useEffect hook

//import { useState,useEffect } from "react"; // NAMED IMPORT
import Shimmer from "./Shimmer";
import {useParams} from "react-router";
import useResturantMenu from "../utils/useResturantMenu";
import { useDispatch } from "react-redux";
import {addItem} from "../utils/cartSlice"
import {CDN_URL} from "../utils/constants";
//import { MENU_API } from "../utils/constants"; 

const ResturantMenu=()=>{
  
     const {resID}= useParams(); //give resid 
     
     const  resInfo =useResturantMenu(resID); // check this in custom hook

     const dispatch=useDispatch();  //Hook and it comes from react-redux
 
     const addFoodItem=(item)=>{
        dispatch(addItem(item));                //this dispatch is come from above useDispatch hook     //this item then add on cartslice
     };                                                    //this item is go as a action.payload
    
    if(resInfo===null){
       return (
          <Shimmer/>
       )
    }
 
  const{ name, cuisines,costForTwoMessage,area,city,avgRating,cloudinaryImageId,}= resInfo?.cards[2]?.card?.card?.info ;

  const { itemCards }= resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card;

   console.log(itemCards);

    return  (
       <div className="menu flex bg-gray-200 ">
          <div>
           <h1 className="font-bold p-5">{name}</h1>
           <h1 className="px-5">{area}</h1>
           <h1 className="px-5">{city}</h1>
           <h1 className="px-5">{avgRating}</h1>
           <p className="px-5">
              {cuisines.join(" ,")}-{costForTwoMessage}
           </p>
           <img className="res-logo h-40 w-44 px-5" 
            alt="res-logo" src={CDN_URL + cloudinaryImageId } />
           </div>  

           <div className="p-5">
            <h1 className="font-bold  ">Menu</h1>
            <ul>
                 {itemCards.map((item)=>(
                     <li  key={item.card.info.id}>
                         {item.card.info.name}-{" Rs. "}
                         {item.card.info.price/100 || item.card.info.defaultPrice/100}--<button className="bg-green-200 p-1" onClick={
                   ()=>addFoodItem(item)}>Add </button>
                     </li>
                 ))}                
            </ul>     
       </div>  
       </div>
    );
};

export default ResturantMenu;