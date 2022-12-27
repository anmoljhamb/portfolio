import React, { useContext, useEffect } from "react";
import { IfLoading, NextArrow } from "../../components";
import Context from "../../context/Context";
import "./Portfolio.scss";

const Portfolio = () => {
    const setLoading = useContext(Context).loadingState[1];

    useEffect(() => {
        setTimeout(() => {
            setLoading(false);
        }, 1000);
    });

    return (
        <IfLoading>
            <>
                <h1>Portfolio Page</h1>
                <p>hello how you doing sir??</p>
            </>
            <NextArrow next="/utilities"></NextArrow>
        </IfLoading>
    );
};

export default Portfolio;
