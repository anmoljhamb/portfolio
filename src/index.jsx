import React from "react";
import ReactDOM from "react-dom/client";
import "./index.scss";
import { BrowserRouter } from "react-router-dom";
import App from "./App";
import LoadingState from "./context/LoadingState";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
    <LoadingState>
        <BrowserRouter>
            <App />
        </BrowserRouter>
    </LoadingState>
);
