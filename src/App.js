import React, { useEffect } from 'react';
import './App.css';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Header from './Header';
import Home from './Home';
import Checkout from './Checkout';
import Login from './Login';
import { useStateValue } from "./StateProvider";
import { auth } from "./firebase";
function App() {
  const [{ user }, dispatch] = useStateValue();
  //useEffect Hook (tremendously powerful must learn it helps to re-write class based comp's to func based)
  //piece of code which runs based on a given condition
  useEffect(() => {
     //if anything changes or for some reason it renders again,we need to clean this up
    //so this listener returns unsubscribe
    const unsubscribe = auth.onAuthStateChanged((authUser) => {
      if(authUser) {
        // the user is logged in
        dispatch({
          type: "SET_USER",
          user: authUser,
          //when we log in we are pushing user into data layer
        });
      }
      else{
        // the user is logged out
        dispatch({
          type: "SET_USER",
          user: null,
          //when we log out we are setting user to null
        });
      }
    });
    return () => {
      //Any cleanup operations go in here
      unsubscribe();
      //if app re-rendered for any reason,it will detach it and re-attach it to new listener
    }
  }, []);
  console.log("USER IS : ",user);
  return (
    <Router>
      <div className="app">
      <Switch>
        <Route path="/checkout">
        <Header />
        <Checkout />
          {/* <h1>Checkout</h1> */}
        </Route>
        <Route path="/login">
          <Login />
          {/* <h1>Login Page</h1> */}
        </Route>
        {/* This is default path or route, / */}
        <Route path="/">
          <Header />
          {/* <h1>Home Page</h1> */}
          <Home />
        </Route>
      </Switch>

    </div>
    </Router>
    
  );
}


export default App;
