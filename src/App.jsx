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
import Pai from "./componentes/comunicacao/direta/Pai";
import Super from "./componentes/comunicacao/direta/indireta/Super";

// eslint-disable-next-line import/no-anonymous-default-export
export default (props) => (
    <div className="App">
        <Card titulo="#08 - Comunicação Indireta" color = "#8E44AD">
            <Super></Super>
        </Card>
        <Card titulo="#07 - Comunicação Direta" color = "#145A32">
            <Pai sobrenome="Lima"></Pai>
        </Card>
        <Card titulo="#06 - Condicional v2" color = "#CD6155">
           <CondicionalComIf numero={10}></CondicionalComIf> 
        </Card>
        <Card titulo="#05 - Condicional v1" color = "#85C1E9">
           <Condicional numero={11}></Condicional> 
        </Card>
        <Card titulo="#04 - Repetição" color = "#F1948A">
           <Repeticao></Repeticao> 
        </Card>
        <Card titulo="#03 - Componente com Filho" color = "#BB8FCE">
            <ComFilhos>
                <ul>
                    <li>Ana</li>
                    <li>Bia</li>
                    <li>Carlos</li>
                    <li>Daniel</li>
                </ul>
            </ComFilhos>
        </Card>
        <Card titulo="#02 - Componente com Parametro" color = "#F4D03F">
            <ComParametro titulo="Esse é o título"subtitulo="Esse é o subtitulo" />
        </Card>
        <Card titulo="#01 - Primeiro Componente" color = "#2980B9">
            <Primeiro />
        </Card>




    </div>
);