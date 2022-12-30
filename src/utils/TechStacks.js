import { DiPython, DiNodejsSmall, DiCss3, DiJavascript } from "react-icons/di";
import ExpressLogo from "../assets/expressLogo";

class TechStack {
    constructor(name, image) {
        this.name = name;
        this.image = image;
    }
}

const python = new TechStack(
    "python",
    <DiPython key="python" className="techStack" />
);
const nodejs = new TechStack(
    "nodejs",
    <DiNodejsSmall key="nodejs" className="techStack" />
);
const css = new TechStack("css", <DiCss3 key="css" className="techStack" />);
const javascript = new TechStack(
    "javascript",
    <DiJavascript key="javascript" className="techStack" />
);
const express = new TechStack(
    "express",
    <ExpressLogo key="express" className="techStack"></ExpressLogo>
);

// export default TechStack;
export default { python, nodejs, css, express, javascript };
