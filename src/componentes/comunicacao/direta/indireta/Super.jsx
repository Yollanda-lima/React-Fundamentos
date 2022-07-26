import React, {useState} from "react";
import Sub from "./Sub";

// eslint-disable-next-line import/no-anonymous-default-export
export default props => {

    const [texto, setTexto] = useState('Ola')
    const [num, setNum] = useState(20)

    function quandoClicar(valorGerado, texto){
        setNum(valorGerado)
        setTexto(texto)
    }

    return (
        <div>
            <h4>{texto}: {num}</h4>
            <Sub quanclica={quandoClicar}></Sub>
        </div>
    );
};
