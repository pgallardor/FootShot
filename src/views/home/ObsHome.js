import React, { Component } from 'react';
import '../style.css';
import axios from 'axios';

class ObsHome extends Component{
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

                <div class="row titulos-contenido ml-1 mr-1 mb-2 align-items-center">
                    <div class="col-sm-1 col-2 pr-0">
                        <a href="/patient">
                            <h2 class="pl-2 mb-0">
                                1
                            </h2>
                        </a>
                    </div>
                    <div class="d-sm-inline-block d-none col-3 pr-0">
                        <a href="#">
                            <h2 class="pl-2 mb-0">
                                Sujeto  
                            </h2>
                        </a>  
                    </div>
                    <div class="col-2 pr-0">
                        <a href="#">
                            <h2 class="pl-2 mb-0">
                                Footshot
                            </h2>
                        </a>  
                    </div>
                    <div class="col-sm-2 d-sm-inline-block col-3 pr-0">
                        <a href="#">
                            <h2 class="pl-2 mb-0">
                                01-01-2019
                            </h2>
                        </a>  
                    </div>
                    <div class="col-sm-1 col-3 pr-0">
                        <a href="#">
                            <h2 class="pl-2 mb-0">
                            TODO MALO
                            </h2>
                        </a>  
                    </div>
                    <div class="col-3 text-right">
                        <button class="btn btn-danger pl-md-3 pr-md-3 pl-sm-2 pr-sm-2 pl-1 pr-1 mt-2 mb-2" data-toggle="modal" data-target="#eliminarModal">Eliminar</button>
                    </div>
                </div>
            </div>
        )
    }
}

export default ObsHome;