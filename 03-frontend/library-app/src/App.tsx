import React from 'react';
import './App.css';
import {Navbar} from "./layouts/NavbarAndFooter/Navbar";
import {Footer} from "./layouts/NavbarAndFooter/Footer";
import {SearchBooksPage} from "./layouts/SearchBooksPage/SearchBooksPage";
import {Redirect, Route, Switch} from "react-router-dom";
import {HomePage} from "./layouts/HomePage/HomePage";

export const App = () => {
    return (
        <div>
            <Navbar/>
            <Switch>
                <Route path='/' exact>
                    <Redirect to='/home'/>
                </Route>

                <Route path='/search'>
                    <SearchBooksPage/>
                </Route>

                <Route path='/home'>
                    <HomePage/>
                </Route>
            </Switch>
            <Footer/>
        </div>
    );
}