import User from "./User";
import UserClass from "./UserClass";
import React from "react";



class About extends React.Component{
 
    constructor(props){
    super(props);
 }
 

    render(){ 
        return(
            <div>
           <h1>About</h1>
           <h2>I am learning Reactjs</h2>
           <UserClass/>
       </div>
        )
    }
}


/*
const About=()=>{
    return(
       <div>
           <h1>About</h1>
           <h2>I am learning Reactjs</h2>
           <UserClass name={"prashant bahtt (class)"} location= {"Srinagar garhwal}"}/>
       </div>
    );
}; 
*/
export default About;