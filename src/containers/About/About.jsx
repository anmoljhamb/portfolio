import React, { useContext, useEffect } from "react";
import Context from "../../context/Context";
import "./About.scss";

const About = () => {
    const [loading, setLoading] = useContext(Context).loadingState;

    useEffect(() => {
        // console.log("Setting loading to false");
        setLoading(false);
    });

    return (
        <>
            <h1>Hello World!</h1>
            <p>hello how you doing sir??</p>
        </>
    );
};

export default About;
