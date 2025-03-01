import { useRouteError } from "react-router";

const Error =()=>{
    const err=useRouteError();
    console.log(err);
    return(
    <div>
        <h1>Opps!</h1>
        <h2>this is a error page</h2>
        {err && <p>{err.message}</p> }
    </div>

    );
};

export default Error;