import React, { useContext, useEffect } from "react";
import { IfLoading, NextArrow, SideBar } from "../../components";
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
                <NextArrow next="/portfolio"></NextArrow>
            </div>
            <section>
                <div className="contact">
                    <h1>Get in Touch</h1>
                    <p>
                        If you wanna get in touch, talk to me about a project
                        collaboration or just say hi, you can reach out to me on
                        my socials or mail me at{" "}
                        <a href="mailto:talktoanmol@outlook.com">
                            <span className="highlight">
                                talktoanmol@outlook.com
                            </span>
                        </a>
                    </p>
                    <SideBar></SideBar>
                </div>
            </section>
        </IfLoading>
    );
};

export default Contact;
