import React from "react";
import ClipLoader from "react-spinners/ClipLoader";
import { loadingColor, appLoadingSize } from "../../constants";

const Loader = ({ loading }) => {
    return (
        <ClipLoader
            size={appLoadingSize}
            color={loadingColor}
            loading={loading}
        />
    );
};

export default Loader;
