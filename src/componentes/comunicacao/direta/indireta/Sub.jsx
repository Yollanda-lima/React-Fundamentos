import React from "react";

// eslint-disable-next-line import/no-anonymous-default-export
export default props => {
    function acao() {
        props.quanclica(Math.round, 'Gerado');
    }

    return (
        <div>
            <button quanclica={acao}>Alterar</button>
        </div>
    );
};
