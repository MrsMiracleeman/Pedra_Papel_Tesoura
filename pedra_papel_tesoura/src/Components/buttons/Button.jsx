import React from "react";
import '../buttons/button.css'

export default props => {
   
 

    return(
        <div className={props.tipo}>
            <button
            onClick={()=>{
              props.click(props.tipo)
            }}
            ></button>
        </div>
    )
}