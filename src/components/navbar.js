import React from 'react';
import {NavLink} from 'react-router-dom';

const NavBar=(props)=>(

    <nav>
        <h2><NavLink className="logo-link" to="#">{props.title}</NavLink></h2>
                <ul className="nav-menu">
                <li><NavLink className="nav-menu-link" exact to="/">Home</NavLink></li>
                <li><NavLink className="nav-menu-link"  to="/places">Places</NavLink></li>
                <li><NavLink className="nav-menu-link" to="/temples">Temples</NavLink></li>
                <li><NavLink className="nav-menu-link" to="/foods">Foods</NavLink></li>
                </ul>
    </nav>


)

export default NavBar;

//activeClassName ="active" -custom active link