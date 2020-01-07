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
    }

    componentDidMount(){
        axios.get('/Image/test')
            .then( response => {
                let { url } = response.data;
                this.loadFile(url);
            })
    }

    loadFile(url){
        axios.get(url)
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
            <div className="container centered images">
                { this.plot() }
            </div>
        )
    }

}

export default CardObservation;