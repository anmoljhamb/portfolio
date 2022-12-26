import React, { useContext } from "react";
import { PageLoader } from "..";
import Context from "../../context/Context";

const IfLoading = (props) => {
    const loading = useContext(Context).loadingState[0];

    if (loading) {
        return (
            <div className="full_fit">
                <PageLoader></PageLoader>
            </div>
        );
    }
    return <>{props.children}</>;
};

export default IfLoading;
