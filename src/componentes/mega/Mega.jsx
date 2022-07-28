import React, {useState} from "react";

// eslint-disable-next-line import/no-anonymous-default-export
export default props => {

    // eslint-disable-next-line no-unused-vars
    const [numeros, setnumeros] = useState(Array(props.qtdNumero).fill(0)); // useState retornan um array e dois elementos, o primeiro o valor e segundo a função que altera o valor

    // eslint-disable-next-line no-unused-vars
    function gerarNumerosNaoContido(array){
        const min = 1
        const max = 60
        // eslint-disable-next-line no-unused-vars
        const novoNumero = (Math.random() * (max - min)) + min

        return array.includes(novoNumero) 
        ? gerarNumerosNaoContido(array) : novoNumero
        
    }

    // eslint-disable-next-line no-unused-vars
    function gerarNuemros(){
        const novoArray = Array(props.qtdNumero)
            .fill(0)
            .reduce((a, e) => {
                const novoNumero = gerarNumerosNaoContido(a)
                console.log(a, e, novoNumero)
                return [...a, novoNumero]
            }, [])
            .sort((a,b)=>a-b)
        setnumeros(novoArray)
    }

    return (
        <>
        <h3>Mega</h3>
        <h4>{numeros.join(' ')}</h4>
        <button quanclica>Gerar Número</button>
        </>
    );

};
