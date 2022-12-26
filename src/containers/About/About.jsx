import React, { useContext, useEffect } from "react";
import Context from "../../context/Context";
import { IfLoading } from "../../components";
import "./About.scss";

const About = () => {
    const setLoading = useContext(Context).loadingState;

    useEffect(() => {
        setTimeout(() => {
            setLoading(false);
        }, 1000);
    });

    return (
        <IfLoading>
            <>
                <h1>Hello World!</h1>
                <p>hello how you doing sir??</p>
            </>
        </IfLoading>
    );
};

export default About;
