import "./App.scss";
import { useEffect, useState } from "react";
import Loader from "./components/common/Loader";
import { About } from "./containers";

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

    let [loading, setLoading] = useState(true);
    useEffect(() => {
        setTimeout(() => {
            setLoading(false);
        }, 3000);
    }, []);

    return (
        <>
            <section className="flex_c">
                {loading ? (
                    <Loader loading={loading}></Loader>
                ) : (
                    <About></About>
                )}
            </section>
        </>
    );
}

export default App;
