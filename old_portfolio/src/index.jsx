import React, { useEffect, useState } from "react";
import ReactDOM from "react-dom/client";
import "./index.scss";
import { BrowserRouter } from "react-router-dom";
import App from "./App";
import ContextHandler from "./context/ContextHandler";
import { AppLoader } from "./components";
import { Analytics } from "@vercel/analytics/react";

const root = ReactDOM.createRoot(document.getElementById("root"));

const Loading = (props) => {
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        setTimeout(() => {
            setLoading(false);
        }, 1500);
    }, []);

    if (loading) {
        return (
            <div className="full_fit">
                <AppLoader></AppLoader>
            </div>
        );
    } else {
        return <>{props.children}</>;
    }
};
const Root = () => {
    return (
        <Loading>
            <ContextHandler>
                <BrowserRouter>
                    <Analytics />
                    <App />
                </BrowserRouter>
            </ContextHandler>
        </Loading>
    );
};

root.render(Root());
