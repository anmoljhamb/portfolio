import React from "react";
import { python } from "../../utils/TechStacks";

const Project = () => {
    return (
        <div className="project">
            <div className="projectImage">
                <img
                    src="https://raw.githubusercontent.com/anmoljhamb/CSS2JS/main/screenshot.png"
                    alt="Project Image"
                />
            </div>
            <div className="projectInfo">
                <div className="projectName">Project 1</div>
                <div className="projectInfo">
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                    Tempora commodi velit iusto repellendus voluptas excepturi
                    aut labore quisquam? Temporibus, ipsum.
                </div>
                <div className="projectCallToAction">
                    <a
                        href="https://github.com/anmoljhamb/CSS2JS"
                        target="_blank"
                    >
                        Source Code
                    </a>

                    <div className="techStacks">
                        {python.image}
                        {python.image}
                        {python.image}
                        {python.image}
                    </div>

                    <a href="https://css2js.vercel.app/" target="_blank">
                        Demo
                    </a>
                </div>
            </div>
        </div>
    );
};

export default Project;
