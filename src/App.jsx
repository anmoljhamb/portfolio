import "./App.scss";
import { useContext, useEffect, useState } from "react";
import Loader from "./components/common/Loader";
import { About } from "./containers";
import { Navbar } from "./components";
import { Route, Routes } from "react-router-dom";
import LoadingState from "./context/LoadingState";
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
    console.log(context);

    return (
        <>
            <Navbar></Navbar>
            <Routes>
                <Route exact path="/" element={<About></About>}></Route>
            </Routes>
        </>
    );
}

export default App;
