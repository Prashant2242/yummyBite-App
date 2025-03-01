import  {lazy,Suspense} from "react";
//import React from "react";
import ReactDOM from  "react-dom/client";
import Header from "./components/Header";  
import Body  from "./components/Body";
import Footer from "./components/footer";
import  About from "./components/About";
import Contact from "./components/Contact";
import Cart from "./components/Cart";
import Error from "./components/Error";
import ResturantMenu from "./components/ResturantMenu";
import { BrowserRouter, Routes, Route, } from "react-router";
import { Outlet } from "react-router";
import {Provider} from "react-redux";
import store from "./utils/store";
//import Grocery from "./components/Grocery";


//Chunking 
// Code Splitting
//Dynamic Bundling
//Lazy Loading
//on demand loading 

const Grocery=lazy(()=> import("./components/Grocery"));


const AppLayout = ()=>{

    return (
      <Provider store ={store}>     
        <div className="app ">
         <Header/>
         <Outlet/>  {/* This is where child routes will render */}
         <Footer/>     
        </div>
      </Provider>
    );
};


const root = document.getElementById("root");

ReactDOM.createRoot(root).render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<AppLayout />} errorElement={<Error />}>
        <Route path="/" element={<Body/>} />
        <Route path="about" element={<About />} />
        <Route path="contact" element={<Contact />} />
        <Route path="cart" element={<Cart />} />
        <Route path="Grocery" element={<Suspense fallback={<h1>Loading...</h1>}><Grocery /></Suspense>} />
      <Route path="resturants/:resID" element={<ResturantMenu />} />
      </Route> //:resid is dynamic here
    </Routes>
  </BrowserRouter>
);




//const root =ReactDOM.createRoot(document.getElementById("root"))
//root.render(<AppLayout/>);
