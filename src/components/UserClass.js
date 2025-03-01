 import React from "react";

 class UserClass extends React.Component{
     constructor(props){
         super(props);

         this.state={         //big State variable like hooks
             useInfo:{
                 name:"Dummy",             //inital default value 
                 location:"Default",
             }
         }
     }
     async componentDidMount(){          // it mount at end;
     
        const data=await fetch("https://api.github.com/users/Prashant2242");
        const json=await data.json();
        this.setState({
            useInfo:json
        })
     }

     render(){
         const {name,location,avatar_url}=this.state.useInfo;    //destucture

         return(
            <div className="user-card">
            <img src={avatar_url}/>
            <h2>Name:{name}</h2>
            <h3>Location:{location}</ h3>
            <h4>Contact:@prashantbhatt227</h4>
        </div>
         );
     }

 }
 export default UserClass;