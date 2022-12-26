import React, { useContext, useEffect } from "react";
import Context from "../../context/Context";
import { IfLoading, SideBar } from "../../components";
import "./About.scss";

const About = () => {
    const setLoading = useContext(Context).loadingState[1];

    useEffect(() => {
        setTimeout(() => {
            setLoading(false);
        }, 1000);
    });

    return (
        <IfLoading>
            <SideBar></SideBar>
            <>
                <h1>Hello World!</h1>
                <p>hello how you doing sir??</p>
            </>
        </IfLoading>
    );
};

export default About;
