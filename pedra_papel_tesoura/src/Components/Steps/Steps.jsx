import React, { Component } from "react";
import { render } from "react-dom";
import Button from "../buttons/Button";
import "../Steps/Steps.css"
import Lottie from 'react-lottie'
import Animation from '../Ingame/animation.json'



export default props => {

  const defaultOptions = {
    loops: false,
    autoplay: true,
    animationData: Animation,
    rendererSetting:{
    preserveAspectsRatios:'xMidYMid slice'
    }
  }

  function restart (){
    props.reset("1")
  }

  function escolhaPlayer(valor){
    props.click(valor) 
      
  }

  switch(props.tipo){
    case "1":
    return(
      <section className="step1">
          <Button tipo="pedra" click={escolhaPlayer}/>
          <Button tipo="papel" click={escolhaPlayer}/>
          <Button tipo="tesoura" click={escolhaPlayer}/>
      </section>
    )
    case "2":
    return(
      <section className="step2">
        <div className="box">
            <h6>Sua escolha...</h6>
            <Button tipo={props.escolhaPlayer} />
        </div>
        <div className="box">
            <h6>{props.count}</h6>
              <Lottie 
              options={defaultOptions}
              height={120}
              width={120}
              />
        </div>
      </section>
    )
    case "3":
      return(
        <section className="step3">
          <div className="box">
              <h6>Sua escolha...</h6>
              <Button tipo={props.escolhaPlayer} />
          </div>
          <div className="resultado">
                <h6>{props.resultado}</h6>
                <button onClick={()=>{restart()}}>Jogar novamente</button>
          </div>
          <div className="box">
              <h6>Escolha da Máquina...</h6>
              <Button tipo={props.escolhaMaquina === 'papel' ? 'papell' : props.escolhaMaquina}/>
          </div>
        </section>
      )
  }
     
     }
    

    
