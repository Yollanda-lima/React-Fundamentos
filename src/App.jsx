/* eslint-disable react/jsx-no-undef */
import React from "react";
import './App.css'

import Primeiro from './componentes/Primeiro'
import ComParametro from './componentes/ComParametro'
import ComFilhos from './componentes/ComFilhos'
import Card from './componentes/layout/Card'
import Repeticao from "./componentes/Repeticao";
import Condicional from "./componentes/Condicional";
import CondicionalComIf from "./componentes/CondicionalComIf";

// eslint-disable-next-line import/no-anonymous-default-export
export default (props) => (
    <div className="App">
        <Card titulo="#06 - Condicional v2">
           <CondicionalComIf numero={10}></CondicionalComIf> 
        </Card>
        <Card titulo="#05 - Condicional v1">
           <Condicional numero={11}></Condicional> 
        </Card>
        <Card titulo="#04 - Repetição">
           <Repeticao></Repeticao> 
        </Card>
        <Card titulo="#03 - Componente com Filho">
            <ComFilhos>
                <ul>
                    <li>Ana</li>
                    <li>Bia</li>
                    <li>Carlos</li>
                    <li>Daniel</li>
                </ul>
            </ComFilhos>
        </Card>
        <Card titulo="#02 - Componente com Parametro">
            <ComParametro titulo="Esse é o título"subtitulo="Esse é o subtitulo" />
        </Card>
        <Card titulo="#01 - Primeiro Componente">
            <Primeiro />
        </Card>




    </div>
);