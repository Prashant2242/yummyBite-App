
//import { LOGO_URL } from "../utils/constants";
import { useState, useContext } from "react";
import { Link } from "react-router";
import { Menu, X } from "lucide-react";
import useOnlineStatus from "../utils/useOnlineStatus";
import UserContext from "../utils/userContext";
import { useSelector } from "react-redux";
import Logo from "../assets/img/YummyBite.png";

const Header = () => {
  const [btnNameReact, setBtnNameReact] = useState("Login");
  const [menuOpen, setMenuOpen] = useState(false);

  const onlineStatus = useOnlineStatus();
  const { user } = useContext(UserContext);
  const cartItems = useSelector((store) => store.cart.items);

  return (
    <div className=" shadow-lg">
      <div className="flex items-center justify-between px-6 py-3 md:px-6 relative">
       
        <div className="flex items-center">
          <img className="h-14 md:h-24" src={Logo} alt="Logo" />
        </div>

        <div className="md:hidden flex flex-col items-end text-sm font-semibold">
          <p>👤 {user.name}</p>
          <p>📶 {onlineStatus ? "Online ✅" : "Offline ❌"}</p>
        </div>

        <button
          className="md:hidden p-2 text-gray-800"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>

        <div
          className={`absolute left-0 top-14 w-full bg-gray-300 md:static md:w-auto md:bg-transparent 
          md:flex md:items-center md:space-x-3 transition-all duration-300 ease-in-out ${
            menuOpen ? "flex flex-col py-3 space-y-2" : "hidden"
          }`}
        >
          <ul className="flex flex-col md:flex-row md:space-x-3 space-y-2 md:space-y-0 font-bold text-lg md:items-center">
            <li><Link to="/" className="hover:text-blue-500" onClick={() => setMenuOpen(false)}>Home</Link></li>
            <li><Link to="/about" className="hover:text-blue-500" onClick={() => setMenuOpen(false)}>About</Link></li>
            <li><Link to="/contact" className="hover:text-blue-500" onClick={() => setMenuOpen(false)}>Contact</Link></li>
            <li><Link to="/grocery" className="hover:text-blue-500" onClick={() => setMenuOpen(false)}>Grocery</Link></li>
            <li><Link to="/cart" className="hover:text-blue-500" onClick={() => setMenuOpen(false)}> Cart-{cartItems.length}🛒</Link></li>
            
            <button
              className="font-bold px-2 py-1 bg-green-400 hover:bg-gray-900 text-white rounded-md text-sm md:text-base"
              onClick={() => {
                setBtnNameReact(btnNameReact === "Login" ? "Logout" : "Login");
                setMenuOpen(false);
              }}
            >
              {btnNameReact}
            </button>
          </ul>
        </div>

    
        <div className="hidden md:flex md:items-center md:space-x-3 text-sm font-semibold">
          <p>👤 {user.name}</p>
          <p>📶 {onlineStatus ? "Online ✅" : "Offline ❌"}</p>
        </div>
      </div>
    </div>
  );
};

export default Header;
