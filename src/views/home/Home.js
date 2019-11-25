import React, { Component } from 'react';
import {Helmet} from 'react-helmet';
import '../style.css';
import ButtonMenu from '../subcomponents/ButtonMenu';

class Home extends Component{
    constructor(props){
        super(props)
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
                                    Solo ficha
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
                                            <h2> Fecha </h2>
                                        </div>
                                        <div class="col-sm-1 col-2 pl-0 pr-0">
                                            <h2> Fotos </h2>
                                        </div>
                                        <div class="col-sm-1 col-2 pl-0 pr-0">
                                            <h2> Datos </h2>
                                        </div>
                                    </div>
                                    <div class="sombra-titulos mb-3"></div>

                                    <div class="row titulos-contenido ml-1 mr-1 mb-2 align-items-center">
                                        <div class="col-sm-1 col-2 pr-0">
                                            <a href="#">
                                                <h2 class="pl-2 mb-0">
                                                    894
                                                </h2>
                                            </a>
                                        </div>
                                        <div class="d-sm-inline-block d-none col-3 pr-0">
                                            <a href="#">
                                                <h2 class="pl-2 mb-0">
                                                    Paciente 1
                                                </h2>
                                            </a>  
                                        </div>
                                        <div class="col-3 pr-0">
                                            <a href="#">
                                                <h2 class="pl-2 mb-0">
                                                    01-01-2019
                                                </h2>
                                            </a>  
                                        </div>
                                        <div class="col-sm-1 col-2 pr-0">
                                            <a href="#">
                                                <h2 class="pl-2 mb-0">
                                                    <i class="fas fa-images"></i>
                                                </h2>
                                            </a>  
                                        </div>
                                        <div class="col-sm-1 col-2 pr-0">
                                            <a href="#">
                                                <h2 class="pl-2 mb-0">
                                                -
                                                </h2>
                                            </a>  
                                        </div>
                                        <div class="col-3 text-right">
                                            <button class="btn btn-danger pl-md-3 pr-md-3 pl-sm-2 pr-sm-2 pl-1 pr-1 mt-2 mb-2" data-toggle="modal" data-target="#eliminarModal">Eliminar</button>
                                        </div>
                                    </div>
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