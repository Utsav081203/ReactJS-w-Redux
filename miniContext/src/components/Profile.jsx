import React from "react";
import UserContext from "../context/UserContext";
import { useContext } from "react";

export default function Profile(){
    const {user} = useContext(UserContext);
    // same way we can access data from context
    if(!user)
    {
        return <div>Please Login</div>
    }
    return(
        <>
            Welcome {user}
        </>
    );
}