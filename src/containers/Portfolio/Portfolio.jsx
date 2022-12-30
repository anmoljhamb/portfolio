import React, { useContext, useEffect } from "react";
import { IfLoading, NextArrow, Project } from "../../components";
import Context from "../../context/Context";
import "./Portfolio.scss";
import GitHubCalendar from "react-github-calendar";
import { DiPython } from "react-icons/di";
import { colorVariables } from "../../constants";

const Portfolio = () => {
    const setLoading = useContext(Context).loadingState[1];

    useEffect(() => {
        setTimeout(() => {
            fetch("https://api.github.com/users/anmoljhamb/repos").then(
                (resp) =>
                    resp.json().then((data) => {
                        console.log(data);
                    })
            );
            setLoading(false);
        }, 1000);
    });

    return (
        <IfLoading>
            <div className="reverse">
                <NextArrow next="/"></NextArrow>
            </div>
            <section className="portfolio">
                <h1>Portfolio</h1>
                <div className="techStacks">
                    <div className="techStack">all</div>
                    {/* Sorted by most used in my projects. */}
                    <DiPython className="techStack"></DiPython>
                    <DiPython className="techStack"></DiPython>
                    <DiPython className="techStack"></DiPython>
                    <DiPython className="techStack"></DiPython>
                    <DiPython className="techStack"></DiPython>
                    <DiPython className="techStack"></DiPython>
                    <DiPython className="techStack"></DiPython>
                    <DiPython className="techStack"></DiPython>
                    <DiPython className="techStack"></DiPython>
                    <DiPython className="techStack"></DiPython>
                    <DiPython className="techStack"></DiPython>
                    <DiPython className="techStack"></DiPython>
                    <DiPython className="techStack"></DiPython>
                    <DiPython className="techStack"></DiPython>
                    <DiPython className="techStack"></DiPython>
                    <DiPython className="techStack"></DiPython>
                    <DiPython className="techStack"></DiPython>
                    <DiPython className="techStack"></DiPython>
                    <DiPython className="techStack"></DiPython>
                    <DiPython className="techStack"></DiPython>
                </div>
                <div className="container">
                    <div className="projectRow">
                        <Project />
                    </div>
                    <div className="projectRow">
                        <Project />
                    </div>
                    <div className="projectRow">
                        <Project />
                    </div>
                    <div className="projectRow">
                        <Project />
                    </div>
                </div>
            </section>
            <section className="githubCalendar">
                <h1>Github Calendar</h1>
                <GitHubCalendar
                    username="anmoljhamb"
                    color={colorVariables.color3}
                    fontSize={20}
                ></GitHubCalendar>
            </section>
            <NextArrow next="/utilities"></NextArrow>
        </IfLoading>
    );
};

export default Portfolio;
