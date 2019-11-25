import React, {Component} from 'react';
import { Helmet } from 'react-helmet';
import '../style.css';

class Patient extends Component{
    constructor(props){
        super(props);
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
                                    <a id="btn-fichas" class="btn-navuser btn-ficha position-relative mr-1 activo" href="#">
                                        Ficha
                                    </a>
                                </li>
                                <li id="paciente-fotos" class="d-inline-block">
                                    <div class="parche-visita position-absolute parche-ver-usuario"></div>
                                    <a id="btn-fotos" class="btn-navuser btn-usuario-foto position-relative mr-1 deshabilitado" href="#">
                                        Observaciones
                                    </a>
                                </li>
                                <li id="paciente-datos" class="d-inline-block open">
                                    <div class="parche-admin position-absolute parche-ver-usuario"></div>
                                    <a id="btn-datos" class="btn-navuser btn-usuario-dato position-relative activo" href="#">
                                        Datos
                                    </a>
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