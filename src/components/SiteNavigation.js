import React from "react";
import { Link } from "react-router-dom";

export const SiteNavigation = () => (
    <nav style={{display: 'flex', justifyContent: 'center'}} className="nav-container">
        <Link style={{marginRight: 20}} to="/">Home</Link>
        <Link style={{marginRight: 20}} to="/characters">Charcters</Link>
        <Link to="/series">Series</Link>
    </nav>
)