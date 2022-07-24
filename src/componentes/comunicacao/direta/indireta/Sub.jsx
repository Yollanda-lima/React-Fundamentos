import React from "react";

// eslint-disable-next-line import/no-anonymous-default-export
export default props => {
    return (
        <div>
            <button quanClica={() => {
                props.quanClica(Math.random())
            }}>Alterar</button>
        </div>
    );
};
