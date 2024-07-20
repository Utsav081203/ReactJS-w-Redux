import React from "react";
import UserContext from "./UserContext";

const UserContextProvider = ({children}) =>{
    // children is prop/div
    const [user, setUser] = React.useState(null);
    return (
        <>
        {/* prop used here too but object passed (set of values) */}
        <UserContext.Provider value={{user, setUser}}>
        {children}
        </UserContext.Provider>
        </>
    )
}

export default UserContextProvider;
// method one