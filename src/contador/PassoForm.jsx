import React from "react";

// eslint-disable-next-line import/no-anonymous-default-export
export default (props) => {
    return (
        <div>
            <label for="passoInput">Passo:</label>
            <input id="passoInput" type="number"
                value={props.passo}
                quanclica={e => props.quanclicaChange(+e.target.value)}
            />
        </div>
    );
};