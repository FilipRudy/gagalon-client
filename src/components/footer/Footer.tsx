import React from "react";
import "./footer.css";
import { NavLink } from "react-router-dom";

export const Footer = () => {
    return (
        <footer className="footer-container light-green">
            <div className="footer-content">
                <div className="footer-logo">
                    <NavLink to="/">
                        <img src={"https://gagalon-images.s3.eu-north-1.amazonaws.com/logos/logo-thin.png"} alt="Gagalon" className="footer-icon" />
                        <div className="footer-separator-mobile"></div>
                    </NavLink>
                </div>

                <div className="footer-links">
                    <div className="footer-separator"></div>
                    <div className="footer-column">
                        <NavLink to="/o-nas" className="nav-link ">O nas</NavLink>
                        <NavLink to="/aktualnosci" className="nav-link">Blog</NavLink>
                        <NavLink to="/promocje" className="nav-link">Obecne promocje</NavLink>
                        <NavLink to="/lokalizacje" className="nav-link">Nasze sklepy</NavLink>
                        <NavLink to="/kontakt" className="nav-link">Kontakt</NavLink>
                    </div>
                </div>

                <div className="footer-separator-mobile"></div>
                <div className="footer-links">
                    <div className="footer-separator"></div>
                    <div className="footer-column">
                        <h5 className="footer-title">Informacje kontaktowe</h5>
                        <p>"Gagalon" Spółka Jawna</p>
                        <p>Bogumiła Wicherek, Zbigniew Wicherek</p>
                        <p>43-190 Mikołów, ul. Słoneczna 41</p>
                        <p>NIP: 6351006362</p>
                    </div>
                </div>
            </div>
        </footer>
    );
};
