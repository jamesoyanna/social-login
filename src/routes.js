import React from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import Home from "../src/components/Home/Home";
import Welcome from "../src/components/Welcome/Welcome";
import Error from "../src/components/Error/Error";

const routes = () => {
    
    return <BrowserRouter>
    <Switch>
        <Route exact path="/" component={Home} />
        <Rooute path="/error" component={Error} />
        <Route path="/home" component={Error} />
    </Switch>
    </BrowserRouter>;
}

export default routes;
