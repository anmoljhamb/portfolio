import React, { useState } from "react";
import Context from "./Context";

const LoadingState = (props) => {
    const [loading, setLoading] = useState(false);

    return (
        <Context.Provider value={{ loadingState: [loading, setLoading] }}>
            {props.children}
        </Context.Provider>
    );
};

export default LoadingState;
