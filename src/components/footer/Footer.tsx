import React from "react";
import "./footer.css";
import logo from "../header/logo-2-cień.png";
import {NavLink} from "react-router-dom";

export const Footer = () => {
    return (
        <footer className="footer-container light-green">
            <div className="footer-content">
                <div className="footer-logo">
                    <NavLink to="/">
                        <img src={logo} alt="Gagalon" className="footer-icon"/>
                        <div className="footer-separator-mobile"></div>

                    </NavLink>
                </div>

                <div className="footer-links">
                <div className="footer-separator"></div>
                    <div className="footer-column">
                        <p className="footer-link">O nas</p>
                        <p className="footer-link">Blog</p>
                        <p className="footer-link">Obecne promocje</p>
                        <p className="footer-link">Nasze sklepy</p>
                        <p className="footer-link">Kontakt</p>
                    </div>
                </div>

                <div className="footer-separator-mobile"></div>
                <div className="footer-links">
                    <div className="footer-separator"></div>
                    <div className="footer-column">
                        <h5 className="footer-title">Informacje kontaktowe</h5>
                        <p >"Gagalon" Spółka Jawna</p>
                        <p >Bogumiła Wicherek, Zbigniew Wicherek</p>
                        <p >43-190 Mikołów, ul. Słoneczna 41</p>
                        <p >NIP: 6351006362</p>
                    </div>
                </div>

            </div>
        </footer>
    );
};
