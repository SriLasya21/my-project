// set up data layer 
// we need this to track the basket
import React, { createContext, useContext, useReducer } from "react";
// this is the data layer 
export const StateContext = createContext();
// it creates the data layer which is empty we call that as Context 
// in order to do that we need to import bunch of stuff
// now we should create provider so that way we can wrap entire app inside this provider
//and give access to this data layer which is created up
//So it's like creating global var's that can be passed around in a react app 
//instead of passing props from grandparent to parent to child and so on
// Build a PROVIDER
// below initialState is how data layer looks at beginning
// useReducer is a hook
export const StateProvider = ({ reducer, initialState, children}) => (
    <StateContext.Provider value={useReducer(reducer, initialState )}>
        {children}
    </StateContext.Provider>
);
// this is how we use it inside of a component
export const useStateValue = () => useContext(StateContext);
// this code is used instead of redux