//Body container 
import ResturantCard from "./ResturantCard";
import {useState , useEffect} from "react"; //named import
import Shimmer from "./Shimmer";
import {Link} from "react-router";
import useOnlineStatus from "../utils/useOnlineStatus";

const Body=()=>{
    //local state variable -support powerful variable   
     
    
    const [listOfRestaurants,setListOfRestraunt]=useState([]);
    const [filteredRestaurant,setfilteredRestaurant]=useState([]);

    const[searchText,setsearchText]= useState("");
       
    useEffect(()=>{
        fetchData();  
      },[]);

    const fetchData=async ()=>{
        const data= await fetch(" https://www.swiggy.com/dapi/restaurants/list/v5?lat=30.7630356&lng=76.6528225&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING");

        const json=await data.json();
        console.log(json);

        //Optional chaining
        setListOfRestraunt(json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants);

        setfilteredRestaurant(json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
    };
   
    const OnlineStatus=useOnlineStatus(); // own  custom hook

    if(OnlineStatus===false)
    return(
        <h1>
            Looks like you're offline!! Please check your internet connection.
        </h1>   
    );


    return listOfRestaurants.length===0 ? (       //ternary operator
    <Shimmer/>

    ): ( 
    <div className="search-container p-1  my-5"> 
        <div className="filters">
            <div className="search bg-gray-200 shadow-lg ">
                <input type="text" placeholder="Search Restaurats" className="search-Box px-3 m-2" value={searchText}
                onChange={(e)=>{
                    setsearchText(e.target.value);
                }}
                />
                <button className="p-2 m-2 bg-purple-800 hover:bg-gray-900 text-white rounded-md" 
                onClick={()=>{
                    console.log(searchText);
                    
                    const filteredRestaurant=listOfRestaurants.filter
                 ((res)=>res.info.name.toLowerCase().includes(searchText.toLowerCase()));

                 setfilteredRestaurant(filteredRestaurant);


                }}>Search</button>
            </div>
            <button className="filter-btn  p-2 m-2 bg-blue-400 hover:bg-gray-900 text-white rounded-md"
            onClick={()=>{
                //filter logic here
                const filteredList=listOfRestaurants.filter ( 
                    (res)=>res.info.avgRating>4.5
                );
                setfilteredRestaurant(filteredList)
                console.log(filteredList);
            }}
            >
                Top Rated Resturant </button>
        </div>
        <div><h1 className="font-bold m-4 text-3xl text-gray-600">Top Rated Restaurants of Chandigarh</h1></div>
        <div className=" flex flex-wrap gap-4 p-4 mx-1">
         {
           filteredRestaurant.map((restaurant)=>(
           <Link
           key={restaurant.info.id} to= {"/resturants/"+restaurant.info.id}>
               <ResturantCard resinfo={restaurant}/></Link>
           ))} 
                   
        </div>
    </div>
);
};

export default Body;


