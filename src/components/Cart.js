import { useDispatch, useSelector } from "react-redux";
import FoodItem from "./FoodItem";
import { clearCart } from "../utils/cartSlice";

const Cart=()=>{
    const cartItems=useSelector(store=> store.cart.items) //store is subscribing to items
    const dispatch=useDispatch();

    const handleClearCart=()=>{
        dispatch(clearCart());
    };

    return(
        <div>
        <h1 className="font-bold">Cart items-{cartItems.length}</h1>
            <button className="bg-green-300 p-2 m-4"
            onClick={()=>handleClearCart()}>
             clearCart
            </button>

            <div className="flex">
                {cartItems.map((item)=>(
                    <FoodItem key={item?.card?.info?.id} {...item.card.info}/>
               ) )}
            </div>
        </div>
        
    );
};

export default Cart;