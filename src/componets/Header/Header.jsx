import "./Header.scss";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";

export default function Header(){
    
    return (
        <header className="header">
            <div className="header__container">
                <Link to="/">
                    <h1 className="header__logo logo">FIT4ALL</h1>
                </Link>
                <ul className="header__links">
                    <Link to='create-guide/' className="cta-action cta-action--secondary">
                        CREATE
                    </Link>
                    <Link to="/sign-in" className="cta-action">
                        SIGN UP
                    </Link>
                </ul>
            </div>


        </header>
    )

}