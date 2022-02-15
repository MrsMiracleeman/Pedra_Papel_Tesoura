import React, { Component } from "react";
import Button from "../buttons/Button";
import Placar from "../Placar/Placar";
import Steps from "../Steps/Steps";
import Lottie from 'react-lottie'
import './Ingame.css'
import $ from "jquery";


const iniState = {
    step : '1',
    escolhaPlayer: '',
    escolhaMaquina:'',
    contagem:3,
    res:''
}

export default class Ingame extends Component{

    constructor(props){
        super(props)
        this.mudando = this.mudando.bind(this)
        this.escolhaMaquina = this.escolhaMaquina.bind(this)
        this.verificacao = this.verificacao.bind(this)
        this.reset = this.reset.bind(this)
        this.state = {...iniState}
        this.pontuacao = 0
    }


    verificacao (){
        var player = this.state.escolhaPlayer
        var maquina = this.state.escolhaMaquina
        switch(player){    
            case 'pedra':
                if(player == 'pedra' && maquina == 'tesoura'){
                    this.pontuacao ++
                    return 'VOCÊ VENCEU'
                }else if(player != maquina){
                    return 'VOCÊ PERDEU'
                }else{
                    return 'EMPATE'
                }
            case 'tesoura':
                if(player == 'tesoura' && maquina == 'papel'){             
                    this.pontuacao ++
                    return 'VOCÊ VENCEU'
                }else if(player != maquina){
                    return'VOCÊ PERDEU'
                }else{
                    return 'EMPATE'
                }
            case 'papel':
                if(player == 'papel' && maquina == 'pedra'){
                    this.pontuacao ++
                    return 'VOCÊ VENCEU'
                }else if(player != maquina){
                    return 'VOCÊ PERDEU'
                }else{
                    return 'EMPATE'
                }
        }
        
    }
    
    escolhaMaquina (){
        switch(Math.floor(Math.random() * (4-1) + 1)){
            case 1:
            return this.state.escolhaMaquina = 'pedra'
            case 2:
            return this.state.escolhaMaquina = 'papel'
            case 3:
            return this.state.escolhaMaquina = 'tesoura'
        }
        this.setState(this.state)

    }
    
    reset(){
        this.state = iniState
        this.setState(this.state)
    }

    mudando (valor){
        this.state.escolhaPlayer = valor
        this.escolhaMaquina()
        $('.palco').hide('200')
        setTimeout(()=>{
            this.state.step = "2"
            this.setState(this.state)
            $('.palco').show(200)
        },500)

        

        this.myInterval = setInterval(() => { 
         
        this.setState(prevState => ({
            contagem: prevState.contagem - 1
        }))
        if(this.state.contagem == 0){
            clearInterval(this.myInterval)
            this.state.step = "3"
            this.state.res = this.verificacao()
            this.setState(this.state)
        
        }
        }, 1500);

    }

    render(){
        return(
          <main>
                <header>
                    <aside className="ingame_header">
                        <div className="ingame_header_labels">
                            <h5>PEDRA</h5>
                            <h5>PAPEL</h5>
                            <h5>TESOURA</h5>
                        </div>
                        <Placar pontos={this.pontuacao}/>
                    </aside>           
                </header>
                <section className="palco">
                    <Steps reset={this.reset} tipo={this.state.step} escolhaPlayer={this.state.escolhaPlayer} escolhaMaquina={this.state.escolhaMaquina} count={this.state.contagem} click={this.mudando} resultado={this.state.res} />
                </section>
                   
    
          </main>            
        )
    }


}