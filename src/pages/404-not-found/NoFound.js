import './no-found.css'

import React from "react";
import { Link } from "react-router-dom";

export const NoFound = () => {
    return(
        <div className="container-404">
            <h1>Whoaa....what did you do?</h1>
            <h4>You weren't supposed to be here.</h4>
            <p> Let's take you back to <Link to="/">Home Page</Link> </p>
        </div>
    );
}