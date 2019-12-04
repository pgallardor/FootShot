import React, {Component} from 'react';
import { Helmet } from 'react-helmet';
import PatientData from './PatientData';
import PatientObs from './PatientObs';
import '../style.css';

class Patient extends Component{
    constructor(props){
        super(props);
        this.clickHandle = this.clickHandle.bind(this);

        this.state = {
            dataButton: "activo",
            obsButton: ""
        }
    }

    clickHandle(e){
        console.log(e.target.id);
        let st = this.state;
        if (e.target.id === "btn-datos"){
            st.dataButton = "activo";
            st.obsButton = "";
        }
        else{
            st.dataButton = "";
            st.obsButton = "activo";
        }

        this.setState(st);
    }

    render(){
        return(
            <div>
                <Helmet>
                    <title>Footshot - Paciente</title>
                </Helmet>
                <div class="container titulo-home pt-5 pb-4">
                    <div class="row">
                        <div class="col-1 offset-sm-2 pl-0">
                            <a class="btn btn-atras amarillo" href="javascript:history.back()">
                                <i class="fas fa-angle-left"></i>
                            </a>
                        </div>
                        <div class="col-4 text-left pl-md-0 pl-sm-2 pl-4">
                            <h1>Paciente Paciente1</h1>
                        </div>
                    </div>
                    <br/>
                    <div id="usuario-visita"class="container contenido">
                        <div class="row">
                            <ul class="navusuarios position-relative pl-0">
                                <li id="paciente-fichas" class="d-inline-block open">
                                    <div class="parche position-absolute parche-ver-usuario"></div>
                                    <a id="btn-datos" className={"btn-navuser btn-ficha position-relative mr-1 " + this.state.dataButton} 
                                        href="javascript:void(null)" onClick={this.clickHandle}>
                                        Datos
                                    </a>
                                    {
                                        this.state.dataButton !== "" &&
                                        <PatientData/>
                                    }
                                </li>
                                <li id="paciente-datos" class="d-inline-block open">
                                    <div class="parche-admin position-absolute parche-ver-usuario"></div>
                                    <a id="btn-obs" className={"btn-navuser btn-usuario-dato position-relative " + this.state.obsButton} 
                                        href="javascript:void(null)" onClick={this.clickHandle}>
                                        Observaciones
                                    </a>
                                    { this.state.obsButton !== "" &&
                                        <PatientObs/>
                                    }
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Patient;