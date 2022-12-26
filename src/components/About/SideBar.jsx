import React from "react";
import {
    twitterLink,
    githubLink,
    instagramLink,
    linkedInLink,
} from "../../constants";

const SideBar = () => {
    return (
        <div className="sideBar">
            <li>
                <a href={twitterLink} target="_blank">
                    <i
                        className="fa-brands fa-twitter fa-5x"
                        style={{ backgroundColor: "#1DA1F2" }}
                    ></i>
                </a>
            </li>
            <li>
                <a href={githubLink} target="_blank">
                    <i
                        className="fa-brands fa-github fa-5x"
                        style={{ backgroundColor: "#333" }}
                    ></i>
                </a>
            </li>
            <li>
                <a href={linkedInLink} target="_blank">
                    <i
                        className="fa-brands fa-linkedin fa-5x"
                        style={{ backgroundColor: "#0A66C2" }}
                    ></i>
                </a>
            </li>
            <li>
                <a href={instagramLink} target="_blank">
                    <i
                        className="fa-brands fa-instagram fa-5x"
                        style={{ backgroundColor: "#e95950" }}
                    ></i>
                </a>
            </li>
        </div>
    );
};

export default SideBar;
