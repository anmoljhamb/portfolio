import {
    DiPython,
    DiNodejsSmall,
    DiCss3,
    DiJavascript,
    DiReact,
    DiMongodb,
    DiSass,
} from "react-icons/di";
import ExpressLogo from "../assets/expressLogo";

class TechStack {
    constructor(name, image) {
        this.name = name;
        this.image = image;
    }
}

const python = new TechStack(
    "python",
    <DiPython key="python" className="techStack" title="Python" />
);
const nodejs = new TechStack(
    "nodejs",
    <DiNodejsSmall key="nodejs" className="techStack" title="NodeJS" />
);
const css = new TechStack("css", <DiCss3 key="css" className="techStack" />);
const javascript = new TechStack(
    "javascript",
    <DiJavascript key="javascript" className="techStack" title="JavaScript" />
);
const react = new TechStack(
    "react",
    <DiReact key="react" className="techStack" title="React" />
);
const mongodb = new TechStack(
    "mongodb",
    <DiMongodb key="mongodb" className="techStack" title="MongoDB" />
);
const sass = new TechStack(
    "sass",
    <DiSass key="sass" className="techStack" title="sass" />
);
const express = new TechStack(
    "express",
    <ExpressLogo key="express" className="techStack"></ExpressLogo>
);

// export default TechStack;
export default {
    python,
    nodejs,
    css,
    express,
    javascript,
    react,
    mongodb,
    sass,
};
