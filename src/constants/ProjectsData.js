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
        projectName: "TheAsteroids",
        projectImage:
            "https://raw.githubusercontent.com/anmoljhamb/TheAsteroids/main/screenshot.png",
        projectInfo:
            "A travel blog website. Developed for my Web Programming Course. 3rd Semester, Computer Science. MERN Stack.",
        sourceCode: "https://github.com/anmoljhamb/TheAsteroids",
        demo: "https://the-asteroids.vercel.app/",
        techStacks: [
            techStacks.mongodb,
            techStacks.express,
            techStacks.react,
            techStacks.nodejs,
            techStacks.sass,
        ],
    },
    {
        projectName: "FedoraMediaWriter-Linux",
        projectImage:
            "https://raw.githubusercontent.com/anmoljhamb/fedora_media_writer_linux/master/screenshot.png",
        projectInfo:
            "Fedora Media Writer for Linux. A script that allows the automation of downloading the ISO file, and burning it to a USB.",
        sourceCode: "https://github.com/anmoljhamb/fedora_media_writer_linux",
        demo: "",
        techStacks: [techStacks.python],
    },
    {
        projectName: "Typing Simulator",
        projectImage:
            "https://raw.githubusercontent.com/anmoljhamb/simulate_typing/main/screenshot.png",
        projectInfo:
            "A python app, that could allow you to simulate typing as if you were writing it yourself. The app can be controlled over the internet with the help of a Telegram Bot.",
        sourceCode: "https://github.com/anmoljhamb/simulate_typing",
        demo: "",
        techStacks: [techStacks.python],
    },
    {
        projectName: "NoteMate",
        projectImage:
            "https://raw.githubusercontent.com/anmoljhamb/NoteMate/main/screenshot.jpeg",
        projectInfo:
            "An app that allows you to share your notes, and ask doubts.",
        sourceCode: "https://github.com/anmoljhamb/NoteMate",
        demo: "",
        techStacks: [techStacks.python],
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
