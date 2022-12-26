import React, { useContext, useEffect, useState } from "react";
import Context from "../../context/Context";
import "./About.scss";

const AboutPage = () => {
    const context = useContext(Context);

    console.log(context);

    return (
        <>
            <h1>Hello World!</h1>
            <p>hello how you doing sir??</p>
        </>
    );
};

export default AboutPage;
