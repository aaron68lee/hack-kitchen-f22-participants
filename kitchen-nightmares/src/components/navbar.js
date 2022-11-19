import React from 'react';
import { NavLink } from 'react-router-dom';

export default function NavBar() {
    return (
        <div>
            <NavLink to="/awards">Home</NavLink>
            <NavLink to="/">About</NavLink>
            <NavLink to="/gallery">Awards</NavLink>
            <NavLink to="/about">Gallery</NavLink>
        </div>
    );
}