import React, { Component } from 'react';
import '../style.css';
import '../newstyles.css';
import ButtonMenu from '../subcomponents/ButtonMenu';

class FootObservation extends Component{
    constructor(props){
        super(props);
        this.changeDisplay = this.changeDisplay.bind(this);
    }

    changeDisplay(){
        return;
    }

    render(){
        return(
            <div>
                <ButtonMenu buttons={["Visible", "Infrarrojo", "Análisis"]} change={null} />
                <div class="row container centered images">
                    <div class="left-image">
                        <img src={ this.props.urls[0] } alt=""/>
                    </div>
                    <div class="right-image">
                        <img src={ this.props.urls[1] } alt=""/>
                    </div>
                </div>
                <div class="container centered-data">
                    <div class="obs-data-text">
                        <h3>Datos del exámen</h3>
                        <p>Interpretación: {this.props.interpretation}</p>
                        <p>Realizado el: {this.props.issued}</p>
                        <p><em>{this.props.note}</em></p>
                    </div>
                </div>
            </div>
        )
    }
}

export default FootObservation;