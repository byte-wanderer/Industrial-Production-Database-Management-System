import React, {Strict, Mode} from "react"; //see 
import ReactDOM from "react-dom"; //see 
import "./index.css"; 
import App from "./App.JS"; 
import { BrowserRouter } from "react-router-dom"; 
import ContextProvider from "./component/context/ContextProvider"; 
const root = ReactDOM.createRoot(document.getElementById("root")); 
root.render( 
    <ContextProvider> 
        <BrowserRouter> 
            <App /> 
        </BrowserRouter> 
    </ContextProvider>, 
    document.getElementById("root") 
);
