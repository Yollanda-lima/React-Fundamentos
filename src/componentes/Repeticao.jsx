import React from "react";
import produtos from '../data/produtos'


// eslint-disable-next-line import/no-anonymous-default-export
export default props =>{
    function getProdutosListItem(){
        return produtos.map(produtos => {
            return <li key={produtos.id}>
                {produtos.id} - {produtos.nome} -{">"} R$ {produtos.preco}
            </li>
        })
    }
    return(
    <div>
        <h2>Retição</h2>
        <ul>
            {getProdutosListItem()}
        </ul>
    </div>
    )
}