import React from "react";
import "../header/header.css";
import { NavLink } from "react-router-dom";
import logo from "../../../src/components/header/logo-białe.png";

export const Header: React.FC = () => {
    return (
        <nav className="navbar navbar-expand-lg">
            <div className="container-fluid">
                <NavLink to="/" className="navbar-brand">
                    <img src={logo  } alt="Gagalon" className="header-logo" />
                </NavLink>
                <button
                    className="navbar-toggler"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#navbarSupportedContent"
                    aria-controls="navbarSupportedContent"
                    aria-expanded="false"
                    aria-label="Toggle navigation"
                >
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <NavLink to="/o-nas" className="nav-link">O nas</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink to="/blog" className="nav-link">Blog</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink to="/promocje" className="nav-link">Obecne promocje</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink to="/lokalizacje" className="nav-link">Nasze sklepy</NavLink>
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
