import React, { Component } from 'react';
import {Helmet} from 'react-helmet';
import '../style.css';
import {ButtonMenu, PatientItem} from '../pages'; 
import axios from 'axios';

class Home extends Component{
    constructor(props){
        super(props)
        this.patientList = this.patientList.bind(this)
    }

    componentWillMount(){
        axios.get('/api/wombat/Patient/all', {auth: {
            username: "Pedro",
            password: "dsaqwe123"
        }})
        .then( response => {
            let data = response.data;
            console.log(response);
            this.setState({ patients: data });
        })
    }

    patientList(){
        if (!this.state) return;
        let list = [];
        for (let patient of this.state.patients){
            list = [...list,
             <PatientItem id={patient.id} name={patient.name}/>
            ]
        }

        return <div>{list}</div>
    }

    render(){
        return (
            <div>
                <Helmet>
                    <title>Footshot - Home</title>
                </Helmet>
                <div class="container titulo-home pt-5 pb-4">
                    <div class="row">
                        <div class="col-8 text-left pl-0">
                            <h1>Feed</h1>
                        </div>
                        <div class="col-4 text-right d-md-none d-inline-block">
                            <button id="menu-comun" class="btn-menu">
                                <i class="fas fa-bars"></i>
                            </button>
                        </div>
                    </div>
                </div>
                <div id="usuario-visita" class="container contenido">
                    <ButtonMenu buttons={["Pacientes", "Exámenes"]}/>

                    <div id="contenido-con-ficha" class="row">
                        <ul class="navusuarios position-relative pl-0">
                            <li id="solo-ficha" class="d-inline-block open">
                                <div class="parche position-absolute"></div>
                                <a id="btn-solo-ficha" class="btn-navuser position-relative mr-1 activo" href="#" onclick="conFichaSoloFicha()">
                                    Pacientes
                                </a>
                                <div id="contenido-solo-ficha" class="col-12 position-absolute contenedor-lista mb-4">
                                    <div class="row titulos-listado pt-4 pl-4 pb-2">
                                        <div class="col-sm-1 col-2 pr-0">
                                            <h2> ID </h2>
                                        </div>
                                        <div class="d-sm-inline-block d-none col-3 pr-0">
                                            <h2> Nombre </h2>
                                        </div>
                                        <div class="col-3 pr-0">
                                            <h2> Fecha de Nacimiento </h2>
                                        </div>
                                        <div class="col-sm-1 col-2 pl-0 pr-0">
                                            <h2> Sexo </h2>
                                        </div>
                                        <div class="col-sm-1 col-2 pl-0 pr-0">
                                            <h2> Datos </h2>
                                        </div>
                                    </div>
                                    <div class="sombra-titulos mb-3"></div>

                                    {   
                                        this.patientList()
                                    }
                                </div>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        )
    }
}

export default Home;