import React, { useContext, useEffect } from "react";
import { IfLoading, NextArrow } from "../../components";
import Context from "../../context/Context";
import "./Portfolio.scss";

const Portfolio = () => {
    const setLoading = useContext(Context).loadingState[1];

    useEffect(() => {
        setTimeout(() => {
            fetch("https://api.github.com/users/anmoljhamb/repos").then(
                (resp) =>
                    resp.json().then((data) => {
                        console.log(data);
                    })
            );
            setLoading(false);
        }, 1000);
    });

    return (
        <IfLoading>
            <div className="reverse">
                <NextArrow next="/"></NextArrow>
            </div>
            <>
                <h1>Portfolio</h1>
            </>
            <NextArrow next="/utilities"></NextArrow>
        </IfLoading>
    );
};

export default Portfolio;
