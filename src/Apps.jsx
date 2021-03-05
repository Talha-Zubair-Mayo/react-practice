import React from 'react';
import Home from "./Home";
import Contact from "./Contact";
import About from "./About";
import Service from "./Service";
import Navbar from './Navbar';
import "../node_modules/bootstrap/dist/css/bootstrap.css";
import { Switch, Route, Redirect } from "react-router-dom";

const Apps = ()=>
{
    return<>

    <Navbar />
       
        <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/about" component={About} />
        <Route exact path="/service" component={Service} />
        <Route exact path="/contact" component={Contact} />
        <Redirect to="/" />
      </Switch>

     

      
      
    </>
}

export default Apps;