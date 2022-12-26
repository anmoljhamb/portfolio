import React, { useContext, useEffect } from "react";
import { IfLoading } from "../../components";
import Context from "../../context/Context";
import "./Contact.scss";

const Contact = () => {
    const setLoading = useContext(Context).loadingState;

    useEffect(() => {
        setTimeout(() => {
            setLoading(false);
        }, 1000);
    });

    return (
        <IfLoading>
            <>
                <h1>Contact Page</h1>
                <p>hello how you doing sir??</p>
            </>
        </IfLoading>
    );
};

export default Contact;
