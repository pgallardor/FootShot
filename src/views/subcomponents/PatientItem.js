import React, { Component } from 'react';
import '../style.css';

/*
 *
 * Usage: list patients at home 
 * Note that the field order is ID, NAME, DOB, AND THEN SOMETHING ELSE
 * TODO: add props, add delete function 
 * 
 */

class PatientItem extends Component{
    constructor(props){
        super(props);
    }

    render(){
        let iconClass = this.props.gender === "male" ? "fas fa-mars" : "fas fa-venus";
        return(
            <div class="row titulos-contenido ml-1 mr-1 mb-2 align-items-center">
                <div class="col-sm-1 col-2 pr-0">
                    <a href={"/patient/" + this.props.id}>
                        <h2 class="pl-2 mb-0">
                            { this.props.id }
                        </h2>
                    </a>
                </div>
                <div class="d-sm-inline-block d-none col-3 pr-0">
                    <a href={"/patient/" + this.props.id}>
                        <h2 class="pl-2 mb-0">
                            { this.props.name }
                        </h2>
                    </a>  
                </div>
                <div class="col-3 pr-0">
                    <a href={"/patient/" + this.props.id}>
                        <h2 class="pl-2 mb-0">
                            { this.props.dob }
                        </h2>
                    </a>  
                </div>
                <div class="col-sm-1 col-2 pr-0">
                    <a href={"/patient/" + this.props.id}>
                        <h2 class="pl-2 mb-0">
                            <i className={iconClass}></i>
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
        )
    }
}

export default PatientItem;