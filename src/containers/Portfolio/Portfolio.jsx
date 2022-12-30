import React, { useContext, useEffect } from "react";
import { IfLoading, NextArrow, Project } from "../../components";
import Context from "../../context/Context";
import "./Portfolio.scss";
import GitHubCalendar from "react-github-calendar";
import { colorVariables } from "../../constants";
import projectsData, { getTechStacks } from "../../constants/ProjectsData";

const Portfolio = () => {
    const setLoading = useContext(Context).loadingState[1];

    useEffect(() => {
        setTimeout(() => {
            setLoading(false);
        }, 1000);
    });

    console.log(projectsData);
    console.log(getTechStacks());

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
                    {getTechStacks().map((stack) => stack.image)}
                </div>
                <div className="container">
                    {projectsData.map((projectData) => {
                        return (
                            <div className="projectRow">
                                <Project
                                    key={projectData.projectName}
                                    project={projectData}
                                ></Project>
                            </div>
                        );
                    })}
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
