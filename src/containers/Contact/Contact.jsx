import React, { useContext, useEffect } from "react";
import { IfLoading, NextArrow } from "../../components";
import Context from "../../context/Context";
import "./Contact.scss";

const Contact = () => {
    const setLoading = useContext(Context).loadingState[1];

    useEffect(() => {
        setTimeout(() => {
            setLoading(false);
        }, 1000);
    });

    return (
        <IfLoading>
            <div className="reverse">
                <NextArrow next="/utilities"></NextArrow>
            </div>

            <>
                <h1>Contact Page</h1>
                <p>hello how you doing sir??</p>
            </>
        </IfLoading>
    );
};

export default Contact;
