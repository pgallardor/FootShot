import React, { Component } from 'react';
import '../style.css';

class PatientData extends Component{
    render(){
        return(
            <div id="contenido-datos" class="col-lg-8 col-12 offset-lg-2 position-absolute contenedor-lista">
                <div class="row titulos-listado pt-4 pl-4 pb-1"></div>
                <h3>INFO PACIENTE</h3>
                <hr/>
                <h4>Opciones de contacto</h4>
                <hr/>
            </div>
        )
    }
}

export default PatientData;