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
            <section style={{ border: "0rem" }}>
                <div className="content">
                    <h1>Hello, I am Anmol Jhamb</h1>
                    <p>
                        I am a 20-year-old tech enthusiast. I had been coding
                        for a while before I got to pursue it as a career. I am
                        a{" "}
                        <span className="highlight">
                            Google-Code-in 2019 Grand Prize Winner.
                        </span>{" "}
                        I have experience working in{" "}
                        <span className="highlight">
                            Full Stack Development
                        </span>
                        , <span className="highlight"> Python Scripting</span>,
                        <span className="highlight">
                            {" "}
                            Android App Development
                        </span>
                        , and <span className="highlight">IoT</span>. I am
                        currently looking to find a good remote internship that
                        would allow me the chance to work with a team and get
                        real-world experience.
                        <br />
                        Checkout the <span className="highlight">
                            projects
                        </span>{" "}
                        that I've workd on. Or the{" "}
                        <div className="highlight">Utilities</div> I made to
                        make my life easier.
                    </p>
                </div>
            </section>
        </IfLoading>
    );
};

export default About;
