import React from "react";
import Filho from "./Filho";

// eslint-disable-next-line import/no-anonymous-default-export
export default props =>
<div>
    <Filho {...props}><strong>Joao</strong></Filho>
    <Filho sobrenome={props.sobrenome}><strong>Maria</strong></Filho>
    <Filho sobrenome="Silva"><strong>Pedro</strong></Filho>
</div>