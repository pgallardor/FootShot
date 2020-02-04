import React, { Component } from 'react';
import '../style.css';
import ObsItem from '../subcomponents/ObsItem'
import axios from 'axios';

class ObsHome extends Component{

    constructor(props){
        super(props);
        this.state = {
            observations: []
        }

        this.list = this.list.bind(this);

    }

    componentDidMount(){
        axios.get('/api/Observation/all', {
            auth: {
                username: 'Pedro',
                password: 'dsaqwe123'
            }
        })
        .then( response => {
            let { data } = response;
            this.setState({ observations: data })
        });
    }

    list(){
        let arr = [];
        for (let obs of this.state.observations){
            arr = [...arr,
                    <ObsItem id={obs.id} patientName={obs.patientName} date={obs.issued}
                                interpretation={obs.interpretation} device={obs.deviceType} />]
        }

        return <div>{arr}</div>
    }

    render(){
        return(
            <div id="contenido-solo-ficha" class="col-12 position-absolute contenedor-lista mb-4">
                <div class="row titulos-listado pt-4 pl-4 pb-2">
                    <div class="col-sm-1 col-2 pr-0">
                        <h2> ID </h2>
                    </div>
                    <div class="d-sm-inline-block d-none col-3 pr-0">
                        <h2> Paciente </h2>
                    </div>
                    <div class="d-sm-inline-block d-none col-2 pr-0">
                        <h2> Dispositivo </h2>
                    </div>
                    <div class="col-sm-2 pr-0">
                        <h2> Fecha de realización </h2>
                    </div>
                    <div class="col-2 pl-0 pr-0">
                        <h2> Resumen </h2>
                    </div>
                </div>
                <div class="sombra-titulos mb-3"></div>
                {this.list()}
                
            </div>
        )
    }
}

export default ObsHome;