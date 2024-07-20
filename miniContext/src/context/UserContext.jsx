import React from "react";

const UserContext = React.createContext();

export default UserContext;

// Context is a provider for a global variable type
{/* <UserContext>
    <Login />
    <Card>
        .....
    </Card>
</UserContext> */}
// Nested inside this wrapper, all components can access the states

// Along with User Context, we need to make a provider too that provides