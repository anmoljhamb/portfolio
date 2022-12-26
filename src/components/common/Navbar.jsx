import React, { useContext } from "react";
import { NavLink } from "react-router-dom";
import Context from "../../context/Context";
import "./Navbar.scss";

const Navbar = () => {
    const [loading, setLoading] = useContext(Context).loadingState;
    const handleOnClick = () => {
        setLoading(true);
    };

    return (
        <section className="flex">
            <div className="navbar">
                Navbar
                <NavLink to="/" onClick={handleOnClick}>
                    About
                </NavLink>
                <NavLink to="/contact" onClick={handleOnClick}>
                    Contact
                </NavLink>
                <NavLink to="/portfolio" onClick={handleOnClick}>
                    portfolio
                </NavLink>
                <NavLink to="/utilities" onClick={handleOnClick}>
                    utilities
                </NavLink>
            </div>
        </section>
    );
};

export default Navbar;
