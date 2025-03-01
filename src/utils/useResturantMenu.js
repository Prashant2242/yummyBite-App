import {useEffect,useState} from "react";
import { MENU_API } from "../utils/constants"; 

//custom hook
const useResturantMenu=(resID)=>{

  const [resInfo,setResInfo]=useState(null);    
   
  useEffect(()=>{
          fetchData();
   },[]);

   const fetchData= async()=>{
    const api=MENU_API+resID+"&catalog_qa=undefined&submitAction=ENTER";
    const data=await fetch(api
    );
    const json=await data.json();
    console.log(json);
    if (json.data.cards)
    setResInfo(json.data);
};

    return resInfo;
};

export default useResturantMenu;

