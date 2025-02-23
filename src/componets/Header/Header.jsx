import "./Header.scss";
import { Link } from "react-router-dom";
import { useState } from "react";

export default function Header(){

    const [isSignedup, setSignedUp] = useState(false);

    return (
        <header className="header">
            <div className="header__container">
                <Link to="/">
                    <h1 className="header__logo">Fit4All</h1>
                </Link>
                <ul className="header__links">
                    <Link to='search' className="cta-action cta-action--secondary">
                        SEARCH
                    </Link>
                    {(isSignedup) ? (<Link to='/create' className="cta-action cta-action--secondary">
                        CREATE
                    </Link>)  : (<Link to="/sign-in" className="cta-action">
                        SIGN UP
                    </Link>)}

                </ul>
            </div>


        </header>
    )

}