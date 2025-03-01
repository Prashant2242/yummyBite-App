import { useContext } from "react";
import UserContext from "../utils/userContext";

const footer=()=>{

       const {user}=useContext(UserContext);

    return(
      <div className="flex flex-col min-h-screen">
      <main className="flex-grow"></main>
    
      
      <footer className="bg-gray-300 text-black py-4">
        <div className="max-w-7xl mx-auto px-6 flex justify-between space-x-8">
          <div className="flex-1">
            <h3 className="font-bold text-lg">Company</h3>
            <ul className="space-y-2">
              <li><a href="#" className="hover:text-gray-400">About Us</a></li>
              <li><a href="#" className="hover:text-gray-400">Careers</a></li>
              <li><a href="#" className="hover:text-gray-400">Privacy Policy</a></li>
              <li><a href="#" className="hover:text-gray-400">Terms of Service</a></li>
            </ul>
          </div>
          <div className="flex-1">
            <h3 className="font-bold text-lg">Services</h3>
            <ul className="space-y-2">
              <li><a href="#" className="hover:text-gray-400">Food Delivery</a></li>
              <li><a href="#" className="hover:text-gray-400">Grocery</a></li>
              <li><a href="#" className="hover:text-gray-400">Fresh Food</a></li>
              <li><a href="#" className="hover:text-gray-400">Hot Food</a></li>
            </ul>
          </div>
          <div className="flex-1">
            <h3 className="font-bold text-lg">Contact</h3>
            <ul className="space-y-2">
              <li><a href="#" className="hover:text-gray-400">mail:{user.email}</a></li>
              <li><a href="#" className="hover:text-gray-400">Phone:{user.phoneNo}</a></li>
              <li><a href="#" className="hover:text-gray-400">Location</a></li>
            </ul>
          </div>
        </div>
      </footer>
    </div>
    
    
      
    )
};


export default footer;