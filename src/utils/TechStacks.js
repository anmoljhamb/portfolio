import { DiPython } from "react-icons/di";

class TechStack {
    constructor(name, image) {
        this.name = name;
        this.image = image;
    }
}

const python = new TechStack("python", DiPython({ className: "techStack" }));

// export default TechStack;
export { python };
