import React from 'react';
import {Route, Switch} from 'react-router-dom';
import Menu from "./Menu";
import About from "./About";
import Links from "./Links";
import Footer from "./Footer";

const Navbar = () => {
    return (
        <>
            <div className="body">
            <Links />
            <Switch>
                <Route exact path = '/' component = {Menu} />
                <Route exact path = '/about' component = {About} />
            </Switch>
            <Footer />
            </div>
        </>
    )
}

export default Navbar;