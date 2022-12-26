import React from "react";
import HashLoader from "react-spinners/HashLoader";
import { loadingColor, pageloadingSize } from "../../constants";

const Loader = ({ loading }) => {
    return (
        <HashLoader
            size={pageloadingSize}
            color={loadingColor}
            loading={loading}
        />
    );
};

export default Loader;
