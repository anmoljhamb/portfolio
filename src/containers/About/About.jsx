import React, { useContext, useEffect } from "react";
import Context from "../../context/Context";
import { IfLoading, SideBar } from "../../components";
import "./About.scss";

const About = () => {
    const setLoading = useContext(Context).loadingState[1];

    useEffect(() => {
        setTimeout(() => {
            setLoading(false);
        }, 1000);
    });

    return (
        <IfLoading>
            <SideBar></SideBar>
            <section>
                <div className="content">
                    <h1>Hello, I am Anmol Jhamb</h1>
                    <p>
                        hello how you <span className="highlight">doing</span>{" "}
                        sir??
                    </p>
                </div>
            </section>
        </IfLoading>
    );
};

export default About;
