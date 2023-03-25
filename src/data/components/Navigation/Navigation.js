import React from 'react';
import {NavLink} from "react-router-dom";
import "./Navigation.css";

function Navigation() {
    return (
        <nav>
            <ul>
                <li><NavLink to="/">Home</NavLink></li>
                <li><NavLink to="/blogpost">Blogpost</NavLink></li>
                <li><NavLink to="/login">Login</NavLink></li>
            </ul>
        </nav>
    );
}

export default Navigation;

