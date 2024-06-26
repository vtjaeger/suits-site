import React from "react";
import { Link } from "react-router-dom";
import './Header.css';

export const Header = () => {
    return (
        <header className="header">
            <Link to="/">
                <img src="/imgs/suits.png" alt="logo"></img>
            </Link>
            <nav>
                <ul className="menu">
                    <li><Link to="/character">Personagens</Link></li>
                    <li><Link to="/season">Temporadas</Link></li>
                    <li><Link to="/">Sobre </Link></li>
                </ul>
            </nav>
        </header>
    );
};
