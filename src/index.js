import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
// import * as serviceWorker from "./serviceWorker";
import {StateProvider} from "./StateProvider";
// import reportWebVitals from './reportWebVitals';
import reducer, { initialState } from "./reducer";

ReactDOM.render(
  <React.StrictMode>
    {/* StateProvider is a higherordercomponent,it injects props into children remember
     we took children in SP.js,children represents app in this case bcus it's the child */}

    <StateProvider initialState={initialState} reducer={reducer}> 
    <App />
    </StateProvider>
    
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();
// serviceWorker.unregister();
