import React, { useContext } from "react";
import { Link } from "react-router-dom";
import Context from "../../context/Context";

const NextArrow = (props) => {
    const setLoading = useContext(Context).loadingState[1];
    const { setNav } = useContext(Context).navState;

    const handleOnClick = () => {
        setLoading(true);
        setNav(false);
    };

    return (
        <Link to={props.next} onClick={handleOnClick}>
            <div className="arrow">
                <div className="arrow-top"></div>
                <div className="arrow-bottom"></div>
            </div>
        </Link>
    );
};

export default NextArrow;
