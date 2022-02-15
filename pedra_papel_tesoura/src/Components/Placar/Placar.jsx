import React from "react";
import '../Placar/Placar.css'

export default props => {
    return(
        <div className="placar">
            <h4>Pontuação</h4>
            <h2>{props.pontos}</h2>
        </div>
    )
}