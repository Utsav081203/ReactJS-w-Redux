import React, {useState, useContext} from "react";
import UserContext from "../context/UserContext";

export default function Login(){
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const {setUser} = useContext(UserContext);
    // access methods from context
    // extracted from context of userContext
    // in UserContextProvider, we have passed this attribute in props
    // values passed in props could be used anywhere using useContext() syntax

    const handleSubmit = (e) =>{
        // e is event
        e.preventDefault();
        // setUser(username, password);.
        setUser(username);
    }

return(
    <>
        <h2>Login</h2>
        <input type="text" 
        value={username} 
        onChange={(e) => setUsername(e.target.value)}
        placeholder="username" />
        {"   "}
        <input type="text" 
        value={password} 
        onChange={(e) => setPassword(e.target.value)}
        placeholder="password" />
        {"   "}
        <button onClick={handleSubmit}>Submit</button>
    </>
)
}