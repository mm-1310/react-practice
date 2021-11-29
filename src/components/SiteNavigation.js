import React from "react";
import { Link } from "react-router-dom";

export const SiteNavigation = () => (
    //link will allow to change URLs = <a href>
    <nav className="nav-container">
        <Link className="links" to="/">Home</Link>
        <Link className="links" to="/characters">Charcters</Link>
        <Link className="links" to="/series">Series</Link>
    </nav>
);