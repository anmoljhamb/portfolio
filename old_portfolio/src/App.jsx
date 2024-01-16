import "./App.scss";
import { useContext } from "react";
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
                <div
                    className={nav ? "open" : ""}
                    id="nav-icon"
                    onClick={handleOnClick}
                >
                    <span></span>
                    <span></span>
                    <span></span>
                </div>
            )}
            {nav && <Navbar />}
            {!nav && (
                <Routes>
                    <Route exact path="/" element={<About />}></Route>
                    <Route exact path="/contact" element={<Contact />}></Route>
                    <Route
                        exact
                        path="/portfolio"
                        element={<Portfolio />}
                    ></Route>
                    <Route
                        exact
                        path="/utilities"
                        element={<Utilities />}
                    ></Route>
                </Routes>
            )}
        </>
    );
}

export default App;
