import React from 'react';
import {useNavigate} from "react-router-dom";

function Login({ToggleIsAuthenticated}) {
    const Navigate = useNavigate();

    function goToHomeScreen() {
        ToggleIsAuthenticated(true);
        Navigate("/");
    }

    return (
        <>
            <h1>Login pagina</h1>
            <p>Druk op de knop om in te loggen</p>
            <button onClick={goToHomeScreen}>Inloggen</button>
        </>
    );
}

export default Login;
