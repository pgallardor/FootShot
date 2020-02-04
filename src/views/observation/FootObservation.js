import React, { Component } from 'react';
import '../style.css';
import '../newstyles.css';
import ButtonMenu from '../subcomponents/ButtonMenu';

class FootObservation extends Component{
    constructor(props){
        super(props);
        this.state = {
            display: "Visible",
            offset: 0
        }
        this.changeDisplay = this.changeDisplay.bind(this);
    }

    changeDisplay(display){
        let offset = 0;

        if (display === "Análisis")
            return;

        if (display === "Infrarrojo")
            offset = 2;
        
        this.setState({
            display,
            offset
        })
    }

    render(){
        return(
            <div>
                <ButtonMenu buttons={["Visible", "Infrarrojo", "Análisis"]} change={this.changeDisplay} />
                <div class="row container centered images">
                    <div class="left-image">
                        <img src={ this.props.urls[this.state.offset] } alt=""/>
                    </div>
                    <div class="right-image">
                        <img src={ this.props.urls[this.state.offset + 1] } alt=""/>
                    </div>
                </div>
                <div class="container centered-data">
                    <div class="obs-data-text">
                        <h3>Datos del exámen</h3>
                        <p>Interpretación: {this.props.interpretation}</p>
                        <p>Realizado el: {this.props.issued}</p>
                        <p>Lugar: {this.props.name}</p>
                        <p>Datos del dispositivo: {this.props.deviceType + ' (' + this.props.mac + ')'}</p>
                        <p><em>{this.props.note}</em></p>
                    </div>
                </div>
            </div>
        )
    }
}

export default FootObservation;