import React from 'react';
import {NavLink} from "react-router-dom";
import "./Navigation.css";

function Navigation({IsAuthenticated, ToggleIsAuthenticated}) {
    return (
        <nav>
            <ul>
                <li><NavLink to="/">Home</NavLink></li>
                {IsAuthenticated === true && <li><NavLink to="/blogpost">Blogpost</NavLink></li>}
                {IsAuthenticated === false ? <li><NavLink to="/login">Login</NavLink></li> : <button onClick={() => ToggleIsAuthenticated(false)}>Uitloggen</button>}
            </ul>
        </nav>
    );
}

export default Navigation;

