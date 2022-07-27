import React from "react";

// eslint-disable-next-line import/no-anonymous-default-export
export default (props) => {
    return(
        <div>
        <button quanclica={props.quaninc}>+</button>
        <button quanclica={props.quandec}>-</button>
    </div>
    );
};