import React, { useContext } from "react";
import { NavLink } from "react-router-dom";
import Context from "../../context/Context";
import "./Navbar.scss";

const Navbar = () => {
    const setLoading = useContext(Context).loadingState[1];
    const { setNav } = useContext(Context).navState;

    const handleOnClick = () => {
        setLoading(true);
        setNav(false);
    };

    return (
        <div className="navbar">
            <NavLink to="/" onClick={handleOnClick}>
                About
            </NavLink>
            <NavLink to="/portfolio" onClick={handleOnClick}>
                Portfolio
            </NavLink>
            <NavLink to="/contact" onClick={handleOnClick}>
                Contact
            </NavLink>
            <a href="https://github.com/anmoljhamb" onClick={handleOnClick}>
                Github
            </a>
        </div>
    );
};

export default Navbar;
