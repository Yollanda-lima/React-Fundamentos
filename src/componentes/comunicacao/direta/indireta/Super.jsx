import React, {useState} from "react";
import Sub from "./Sub";

// eslint-disable-next-line import/no-anonymous-default-export
export default props => {

    const [num, setNum] = useState(0)

    function quandoClicar(valorGerado, texto){
        setNum(valorGerado)
    }

    return (
        <div>
            <h4>Valor: {num}</h4>
            <Sub quanClica={quandoClicar}></Sub>
        </div>
    );
};
