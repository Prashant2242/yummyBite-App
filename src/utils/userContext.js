import { createContext } from "react";

const UserContext= createContext({
    user:{
        name:"Prashant Bhatt",
        email:"prashantbhatt488@gmail.com",
        phoneNo:"725383....." ,
    },
});


export default UserContext;