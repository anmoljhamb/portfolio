import techStacks from "../utils/TechStacks";

const projectsData = [
    {
        projectName: "CSS2JS",
        projectImage:
            "https://raw.githubusercontent.com/anmoljhamb/CSS2JS/main/screenshot.png",
        projectInfo:
            "An app to convert simple CSS code to Javascript DOM Manipulation code.",
        sourceCode: "https://github.com/anmoljhamb/CSS2JS",
        demo: "https://css2js.vercel.app/",
        techStacks: [
            techStacks.nodejs,
            techStacks.css,
            techStacks.express,
            techStacks.javascript,
        ],
    },
    {
        projectName: "CSS2JS12",
        projectImage:
            "https://raw.githubusercontent.com/anmoljhamb/CSS2JS/main/screenshot.png",
        projectInfo:
            "An app to convert simple CSS code to Javascript DOM Manipulation code.",
        sourceCode: "https://github.com/anmoljhamb/CSS2JS",
        demo: "",
        techStacks: [
            techStacks.nodejs,
            techStacks.css,
            techStacks.express,
            techStacks.python,
        ],
    },
];

const getTechStacks = () => {
    let stacks = [];
    projectsData.forEach((project) => {
        project.techStacks.forEach((stack) => {
            if (!stacks.includes(stack)) {
                stacks.push(stack);
            }
        });
    });
    return stacks;
};

export default projectsData;
export { getTechStacks };
