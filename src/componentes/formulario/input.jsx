import React, {useState} from "react";

// eslint-disable-next-line import/no-anonymous-default-export
export default props => {

    const [nome, alteraNome] = useState('Nome:'); // useState retornan um array e dois elementos, o primeiro o valor e segundo a função que altera o valor

    return (
        <>
        <h3>{nome}</h3>
            <input type="text" value={nome}
            onChange={e=>alteraNome(e.target.value)} /> 
        </>
    )

}
