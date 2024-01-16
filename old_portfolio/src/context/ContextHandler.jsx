import React, { useState } from "react";
import Context from "./Context";

const LoadingState = (props) => {
    const [loading, setLoading] = useState(false);
    const [nav, setNav] = useState(false);

    return (
        <Context.Provider
            value={{
                loadingState: [loading, setLoading],
                navState: { nav, setNav },
            }}
        >
            {props.children}
        </Context.Provider>
    );
};

export default LoadingState;
