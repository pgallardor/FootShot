import React, {Component} from 'react';
import '../style.css';

class PatientObs extends Component{
    render(){
        return(
            <div id="contenido-datos" class="col-lg-8 col-12 offset-lg-2 position-absolute contenedor-lista">
                <div class="row titulos-listado pt-4 pl-4 pb-1">
                </div>
                <div class="row titulos-contenido ml-1 mr-1 mb-2 align-items-center">
                <div class="col-2">
                    <a href="#">
                        <h2 class="pl-2 mb-0">
                            <i class="fa fa-folder"></i>
                        </h2>
                    </a>
                </div>
                <div class="col-6">
                    <a href="#">
                        <h2 class="pl-2 mb-0">
                            01-01-2019
                        </h2>
                    </a>  
                </div>
                <div class="col-4 text-right">
                    <button class="btn btn-danger pl-md-5 pr-md-5 pl-sm-2 pr-sm-2 pl-1 pr-1 mt-2 mb-2" data-toggle="modal">Eliminar</button>
                </div>
                </div>
            </div>
        )
    }
}

export default PatientObs;