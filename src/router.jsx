import React from 'react';
import { Route, Switch, BrowserRouter} from 'react-router-dom';

import App from './App';
import {HomePage} from "../src/components/HomePage";

export const MainRouter = () =>{
    return(
        <BrowserRouter>
        <Switch>
            <Route path="/" exact component = {HomePage}></Route>
            <Route path="/picker" component = {App}></Route>
        </Switch>
        </BrowserRouter>
    )
}