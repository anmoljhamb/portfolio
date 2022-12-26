import React from "react";

const SideBar = () => {
    return (
        <div className="sideBar">
            <li>
                <i
                    className="fa-brands fa-twitter fa-5x"
                    style={{ backgroundColor: "#1DA1F2" }}
                ></i>
            </li>
            <li>
                <i
                    className="fa-brands fa-github fa-5x"
                    style={{ backgroundColor: "#333" }}
                ></i>
            </li>
            <li>
                <i
                    className="fa-brands fa-linkedin fa-5x"
                    style={{ backgroundColor: "#0A66C2" }}
                ></i>
            </li>
            <li>
                <i
                    className="fa-brands fa-instagram fa-5x"
                    style={{ backgroundColor: "#e95950" }}
                ></i>
            </li>
        </div>
    );
};

export default SideBar;
