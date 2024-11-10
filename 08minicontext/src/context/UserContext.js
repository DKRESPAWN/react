import React from "react";

const UserContext = React.createContext();

export default UserContext;

// context gives a provider... UserContext is a provider so we will use a wrapper
// <UserContext>
//     <Login />
//     <Card />
// </UserContext>
// as soon as we use UserContext as a wrapper , it becomes a provider, means ab koi bhi iske andar jo componenet hai.. usko global UserContext ka access hoga
