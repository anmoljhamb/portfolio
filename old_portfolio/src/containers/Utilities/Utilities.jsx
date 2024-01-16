import React, { useContext, useEffect } from "react";
import { IfLoading, NextArrow } from "../../components";
import Context from "../../context/Context";
import "./Utilities.scss";

const Utilities = () => {
    const setLoading = useContext(Context).loadingState[1];

    useEffect(() => {
        setTimeout(() => {
            setLoading(false);
        }, 1000);
    });

    // This page can later be converted to experience once I have more than enough.
    return (
        <IfLoading>
            <div className="reverse">
                <NextArrow next="/portfolio"></NextArrow>
            </div>
            <>
                <h1>Utilities Page</h1>
            </>
            <NextArrow next="/contact"></NextArrow>
        </IfLoading>
    );
};

export default Utilities;
