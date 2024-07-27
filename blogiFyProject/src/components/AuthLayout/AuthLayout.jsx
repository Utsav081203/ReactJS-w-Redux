// Mechanism to protect pages and routes
// Protected Container

import React, {useEffect, useState} from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";


/*
authentication: Represents the requirement or policy for accessing a specific route or component. 
This prop allows you to specify whether a particular page or component requires an authenticated user or should only be accessible to unauthenticated users.
authentication is a prop
*/
export default function Protected({children, authentication = true}) {
    const navigate = useNavigate();
    const [loader, setLoader] = useState(true);
    const authStatus = useSelector(state => state.autth.status);
    // check if user logged in

    useEffect(() => {
        // if(authStatus)
        // {
        //     navigate('/');
        // }
        // else
        // {
        //     navigate('/login');
        // }

        if(authentication && authStatus !== authentication)
        {
            navigate('/login');
        }
        else if(!authentication && authStatus !== authentication)
        {
            navigate('/');
        }
        setLoader(false);
    }, [authStatus, navigate, authentication]);
    // useEffect for checking where to redirect user
    // depending on nagivate changes, authstatus changes, authentication

    return (
        loader? <h1>Loading....</h1> : <>{children}</>
    );
}

// This component guards specific routes or components based on the user's authentication status