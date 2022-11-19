import React from 'react';
import { NavLink } from 'react-router-dom';

export default function NavBar() {
    return (
        <div class = "navbar">
            <NavLink to="/">Home </NavLink>
            <NavLink to="/about">About </NavLink>
            <NavLink to="/awards">Awards </NavLink>
            <NavLink to="/gallery">Gallery </NavLink>
        </div>
    );
}