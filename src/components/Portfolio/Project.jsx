import React from "react";
import { python } from "../../utils/TechStacks";

const Project = ({ project, activeStack }) => {
    return (
        <div className="project">
            <div className="projectImage">
                <img src={project.projectImage} alt="Project Image" />
            </div>
            <div className="projectInfo">
                <div className="projectName">
                    {project.projectName}
                    <div className="techStacks">
                        {project.techStacks.map((stack) => {
                            return (
                                <React.Fragment key={stack.name}>
                                    <span
                                        className={
                                            activeStack == stack.name
                                                ? "active"
                                                : ""
                                        }
                                    >
                                        {stack.image}
                                    </span>
                                </React.Fragment>
                            );
                        })}
                    </div>
                </div>
                <div className="projectInfo">{project.projectInfo}</div>
                <div className="projectCallToAction">
                    <a href={project.sourceCode} target="_blank">
                        Source Code
                    </a>

                    {project.demo && (
                        <a href={project.demo} target="_blank">
                            Demo
                        </a>
                    )}
                </div>
            </div>
        </div>
    );
};

export default Project;
