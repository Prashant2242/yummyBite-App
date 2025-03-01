import { createSlice } from "@reduxjs/toolkit";


const cartSlice=createSlice({
    name:'cart',               //this is our slice name
    initialState:{
        items:[],     //this is initial value of of the cart
    },
    reducers:{                     //its an object
            addItem: (state,action)=>{                       //reducer is a function and its a reducer function
              state.items.push(action.payload)                 //state is present value of cart
            },
            removeItem:(state,action)=>{
                state.items.pop();
            },
            clearCart:(state)=>{
                state.items=[];
            },
    },
});
export const {addItem,removeItem,clearCart}=cartSlice.actions; //named export pf additem removeitem and clearcart
export default cartSlice.reducer;



// till now i have created a cart slice for my store
// create cart slice by creating reducers
//state is just which is present  currenlty
//action is something which we dispatch
/*
CartSlice={
    actions:{
        addItems,
        removeItems,
        clearCart
    },
    reducer:reducers
}*/