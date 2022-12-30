import React, { useContext, useEffect, useState } from "react";
import { IfLoading, NextArrow, Project } from "../../components";
import Context from "../../context/Context";
import "./Portfolio.scss";
import GitHubCalendar from "react-github-calendar";
import { colorVariables } from "../../constants";
import projectsData, { getTechStacks } from "../../constants/ProjectsData";

const Portfolio = () => {
    const setLoading = useContext(Context).loadingState[1];
    const [projects, setProjects] = useState(projectsData);
    const [active, setActive] = useState("all");

    useEffect(() => {
        setTimeout(() => {
            setLoading(false);
        }, 1000);
    });

    const handleOnClick = (stack) => {
        const _util = (event) => {
            setActive(stack.name);
            const current_projects = [];

            projectsData.forEach((project) => {
                if (project.techStacks.includes(stack)) {
                    current_projects.push(project);
                }
            });

            setProjects(current_projects);
        };
        return _util;
    };

    return (
        <IfLoading>
            <div className="reverse">
                <NextArrow next="/"></NextArrow>
            </div>
            <section className="portfolio">
                <h1>Portfolio</h1>
                <div className="techStacks">
                    <div
                        className={
                            active == "all" ? "techStack active" : "techStack"
                        }
                        onClick={() => {
                            setProjects(projectsData);
                            setActive("all");
                        }}
                    >
                        all
                    </div>
                    {/* Sorted by most used in my projects. */}
                    {getTechStacks().map((stack) => {
                        return (
                            <React.Fragment key={stack.name}>
                                <span
                                    className={
                                        active == stack.name ? "active" : ""
                                    }
                                    onClick={handleOnClick(stack)}
                                >
                                    {stack.image}
                                </span>
                            </React.Fragment>
                        );
                    })}
                </div>
                <div className="container">
                    {projects.map((projectData) => {
                        return (
                            <div
                                className="projectRow"
                                key={projectData.projectName}
                            >
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
