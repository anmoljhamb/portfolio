import React, { useContext, useEffect } from "react";
import { IfLoading, NextArrow, SideBar } from "../../components";
import Context from "../../context/Context";
import { codingGif } from "../../assets";
import { Cursor, useTypewriter } from "react-simple-typewriter";
import "./About.scss";
import { colorVariables } from "../../constants";

const About = () => {
    const setLoading = useContext(Context).loadingState[1];

    useEffect(() => {
        setTimeout(() => {
            setLoading(false);
        }, 1000);
    });

    const [text, count] = useTypewriter({
        words: [
            "Full Stack",
            "IoT",
            "Python Scripting",
            "Android App Development",
        ],
        loop: true,
        delaySpeed: 1200,
    });

    return (
        <IfLoading>
            <SideBar></SideBar>
            <section>
                <header className="header">
                    <div className="heading">
                        <h1>
                            Hi there! <span className="wave">👋🏻</span>
                        </h1>
                        <h1>
                            I'm <span className="name">Anmol Jhamb</span>
                        </h1>
                        <h1>
                            {text}
                            <span>
                                <Cursor cursorColor={colorVariables.color4} />
                            </span>
                        </h1>
                    </div>
                    <div className="codingGif">
                        <img src={codingGif} alt="Coding GIF" />
                    </div>
                    {/* <p>
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
                        real-world experience. Checkout the{" "}
                        <span className="highlight">projects</span> that I've
                        workd on. Or the{" "}
                        <span className="highlight">Utilities</span> I made to
                        make my life easier.
                    </p> */}
                </header>
            </section>
            <NextArrow next="/portfolio"></NextArrow>
        </IfLoading>
    );
};

export default About;
