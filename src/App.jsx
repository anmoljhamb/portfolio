import "./App.scss";
import { useContext, useState } from "react";
import { About, Contact, Utilities, Portfolio, Navbar } from "./containers";
import { Route, Routes } from "react-router-dom";
import Context from "./context/Context";

function App() {
    /**
     * * App will have multiple pages, but no navbar. Just left and right swipes. On Home Page, it will have a sidebar of my linkedin, github and instagram. On the right side, I will have a right icon. Default is the about page.
     *
     *
     * * / - About
     * * / Portfolio All the projects, worth showing.
     * * / Utils. Just some stuff I built for my own use.
     * * / Contact. Really important tho. Must mail me the stuff.
     * * Loading animation on page
     * * Top Bar slide show.
     * * Fade in out.
     *
     */

    const context = useContext(Context);
    const loading = context.loadingState[0];
    const { nav, setNav } = context.navState;
    console.log(loading);

    const handleOnClick = (event) => {
        event.preventDefault();
        setNav((val) => !val);
    };

    return (
        <>
            {!loading && (
                <button className="navBtn" onClick={handleOnClick}>
                    {nav ? "hidenav" : "shownav"}
                </button>
            )}
            {nav && <Navbar></Navbar>}
            {!nav && (
                <Routes>
                    <Route exact path="/" element={<About></About>}></Route>
                    <Route
                        exact
                        path="/contact"
                        element={<Contact></Contact>}
                    ></Route>
                    <Route
                        exact
                        path="/portfolio"
                        element={<Portfolio></Portfolio>}
                    ></Route>
                    <Route
                        exact
                        path="/utilities"
                        element={<Utilities></Utilities>}
                    ></Route>
                </Routes>
            )}
        </>
    );
}

export default App;
