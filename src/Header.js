import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';

class Header extends Component {
    render() {
        return(
            <header>
            <nav className="navbar navbar-expand-md navbar-dark fixed-top bg-dark">
                <span className="navbar-brand">ComunidadTIC</span>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarCollapse" aria-controls="navbarCollapse" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarCollapse">
                <ul className="navbar-nav mr-auto">
                    <li className="nav-item">
                    <NavLink className="nav-link" to="./inicio">Inicio</NavLink>
                    </li>
                    <li className="nav-item">
                    <NavLink className="nav-link" to="./nosotros">Nosotros</NavLink>
                    </li>
                    <li className="nav-item">
                    <NavLink className="nav-link" to="./eventos">Eventos</NavLink>
                    </li>
                    <li className="nav-item">
                    <NavLink className="nav-link" to="/contacto">Contacto</NavLink>
                    </li>
                </ul>
                </div>
            </nav>
            </header>
        );
    }
}

export default Header;
