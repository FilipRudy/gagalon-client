import React from "react";
import "../header/header.css";
import { NavLink } from "react-router-dom";
import logo from "../../../src/components/header/logo-2-cień.png";
import {useNavbarBackground} from "../../hooks/useNavbarBackground";

export const Header = () => {
    const { isExpanded, handleToggle } = useNavbarBackground();

    return (
        <nav className={`navbar navbar-expand-lg ${isExpanded ? 'expanded' : ''}`}>
            <div className="container-fluid">
                <NavLink to="/" className="navbar-brand">
                    <img src={logo} alt="Gagalon" className="header-logo" />
                </NavLink>
                <button
                    className="navbar-toggler"
                    type="button"
                    aria-expanded={isExpanded}
                    onClick={handleToggle}
                    aria-label="Toggle navigation"
                >
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className={`collapse navbar-collapse ${isExpanded ? 'show' : ''}`} id="navbarSupportedContent">
                    <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <NavLink to="/o-nas" className="nav-link">O nas</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink to="/aktualnosci" className="nav-link">Aktualności</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink to="/promocje" className="nav-link">Promocje</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink to="/lokalizacje" className="nav-link">Gdzie jesteśmy</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink to="/kontakt" className="nav-link">Kontakt</NavLink>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
};
