import "./APP1 .JS/index.js"; 
import "../node_modules/bootstrap/dist/css/bootstrap.min.css"; 
import "../node_modules/bootstrap/dist/js/bootstrap.bundle.min.js"; 
import NavBar from "./component/NavBar.js"; 
import Home from "./component/Home.js"; 
import Register from "./component/Register.js"; 
import {Routes, Route } from "react-router-dom"; 
import Edit from "./component/Edit.js"; 
import Details from "./component/Details.js"; 
import Shop1 from "./component/Shop1.js"; 
import Shop1Register from "./component/Shop1Register.js"; 
import Shop1Details from "./component/Shop1Details.js"; 
import Shop1Edit from "./component/Shop1Edit.js"; 
function App() { 
    return ( 
    <> 
    <NavBar /> 
    <Routes> 
    <Route exact path="/" Component={Home} /> 
    <Route path="/register" Component={Register} /> 
    <Route path="/edit/:id" Component={Edit} /> 
    <Route path="/view/:id" Component={Details} /> 
    <Route path="/Shop1" Component={Shop1} /> 
    <Route path="/Shop1register" Component={Shop1Register} /> 
    <Route path="/Shop1/Shop1view/:id" Component={Shop1Details} /> 
    <Route path="/Shop1/Shop1edit/:id" Component={Shop1Edit} /> 
    </Routes> 
    </> 
    ); 
} 
export default App;
