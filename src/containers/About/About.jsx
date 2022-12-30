import React, { useContext, useEffect } from "react";
import { Link } from "react-router-dom";
import { IfLoading, NextArrow, SideBar } from "../../components";
import Context from "../../context/Context";
import { avatar, codingGif } from "../../assets";
import { Cursor, useTypewriter } from "react-simple-typewriter";
import { colorVariables } from "../../constants";
import { motion } from "framer-motion";
import "./About.scss";

const About = () => {
    const setLoading = useContext(Context).loadingState[1];

    useEffect(() => {
        setTimeout(() => {
            setLoading(false);
        }, 1000);
    });

    const text = useTypewriter({
        words: [
            "<Full Stack />",
            "<IoT />",
            "<Python Scripting />",
            "<Android App Development />",
        ],
        loop: true,
        delaySpeed: 1200,
    })[0];

    const handleOnClick = (event) => {
        setLoading(true);
    };

    return (
        <IfLoading>
            <SideBar></SideBar>
            <section>
                <header className="header">
                    <div className="main_header">
                        <motion.div
                            initial={{
                                opacity: 0,
                            }}
                            animate={{
                                opacity: 1,
                            }}
                            transition={{
                                duration: 0.5,
                            }}
                            className="heading"
                        >
                            <h1>
                                Hi there! <span className="wave">👋🏻</span>
                            </h1>
                            <h1>
                                I'm <span className="name">Anmol Jhamb</span>
                            </h1>
                            <h1>
                                {text}
                                <span>
                                    <Cursor
                                        cursorColor={colorVariables.color4}
                                    />
                                </span>
                            </h1>
                        </motion.div>
                        <motion.div
                            initial={{
                                opacity: 0,
                            }}
                            animate={{
                                opacity: 1,
                            }}
                            transition={{
                                duration: 0.5,
                            }}
                            className="codingGif"
                        >
                            <img src={codingGif} alt="Coding GIF" />
                        </motion.div>
                    </div>
                    <div className="sub_header">
                        <h1>
                            Let me <span className="colored">introduce</span>{" "}
                            myself
                        </h1>
                        <div className="container">
                            <div className="avatar">
                                <img src={avatar} alt="codingAvatar" />
                            </div>
                            <div className="content">
                                I am a 20-year-old tech enthusiast. I had been
                                coding for a while before I got to pursue it as
                                a career. I am a{" "}
                                <Link
                                    onClick={handleOnClick}
                                    to="/portfolio"
                                    className="highlight"
                                >
                                    Google Code-in Grand Prize Winner.
                                </Link>{" "}
                                I have experience working with{" "}
                                <Link
                                    onClick={handleOnClick}
                                    to="/portfolio"
                                    className="highlight"
                                >
                                    Full Stack Development
                                </Link>
                                ,{" "}
                                <Link
                                    onClick={handleOnClick}
                                    to="/portfolio"
                                    className="highlight"
                                >
                                    {" "}
                                    Python Scripting
                                </Link>
                                ,
                                <Link
                                    onClick={handleOnClick}
                                    to="/portfolio"
                                    className="highlight"
                                >
                                    {" "}
                                    Android App Development
                                </Link>
                                , and{" "}
                                <Link
                                    onClick={handleOnClick}
                                    to="/portfolio"
                                    className="highlight"
                                >
                                    IoT
                                </Link>
                                . Checkout the{" "}
                                <Link
                                    onClick={handleOnClick}
                                    to="/portfolio"
                                    className="highlight"
                                >
                                    Projects
                                </Link>{" "}
                                that I've workd on. Or the{" "}
                                <Link
                                    onClick={handleOnClick}
                                    to="/portfolio"
                                    className="highlight"
                                >
                                    Utilities
                                </Link>{" "}
                                I made to make my life easier.
                            </div>
                        </div>
                    </div>
                </header>
            </section>
            <NextArrow next="/portfolio"></NextArrow>
        </IfLoading>
    );
};

export default About;
