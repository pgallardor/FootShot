import React, { Component } from 'react';
import '../style.css';
import '../newstyles.css';
import axios from 'axios';
import Plot from 'react-plotly.js';

class CardObservation extends Component{

    constructor(props){
        super(props);
        this.state = {
            x: null,
            y: null
        }

        this.loadFile = this.loadFile.bind(this);
        this.plot = this.plot.bind(this);
        this.loadFile();
    }

    loadFile(){
        if (this.props.urls === "#") return;
        axios.get(this.props.urls[0])
            .then( response => {
                let { data } = response;
                const axisY = data.split('\n').map( n => { return +n });
                const axisX = new Array(axisY.length).fill(undefined).map((_, i) => i)
                this.setState({
                    x: axisX,
                    y: axisY
                })
            })
    }

    plot(){
        let { x, y } = this.state;
        return(
            <Plot 
                data={[
                    {
                        x, y,
                        type: 'scatter',
                        mode: 'lines',
                        marker: { color: 'blue' } 
                    }
                ]}
                layout={ { width: 1200, height: 600, title: "Cardialys" } }
            />
        )
    }

    render(){
        if (!this.state.x && !this.state.y) return <h3>Loading file...</h3>
        return(
            <div>
                <div className="container centered">
                    { this.plot() }
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

export default CardObservation;