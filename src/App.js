import React, { useState } from 'react';
import './App.css';
import Navigation from "./data/components/Navigation/Navigation";
import Home from "./data/pages/Home/Home";
import Login from "./data/pages/Login/Login";
import Blog from "./data/pages/Blog/Blog";
import Blogpost from "./data/pages/Blogpost/Blogpost";
import {Navigate, Route, Routes} from "react-router-dom";

function App() {
  // We houden in de state bij of iemand is "ingelogd" (simpele versie)
  const [isAuthenticated, toggleIsAuthenticated] = useState(false);

  return (
      <>
        <Navigation
            IsAuthenticated = {isAuthenticated}
            ToggleIsAuthenticated = {toggleIsAuthenticated}
        />
        <Routes>
          <Route path="/" element={ <Home/> } />
          <Route path="/login" element={ <Login
              IsAuthenticated = {isAuthenticated}
              ToggleIsAuthenticated = {toggleIsAuthenticated}
          /> }
          />
          <Route path="/Blogpost" element={ isAuthenticated === true ? <Blogpost /> : <Navigate to="/" /> } />
          <Route path="/Blog/:blogId" element={ isAuthenticated === true ? <Blog /> : <Navigate to="/" /> } />
        </Routes>
      </>
  );
}

export default App;