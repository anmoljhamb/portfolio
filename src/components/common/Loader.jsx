import React from "react";
import HashLoader from "react-spinners/HashLoader";

const Loader = ({ loading }) => {
    return <HashLoader size={150} color="#8758ff" loading={loading} />;
};

export default Loader;
