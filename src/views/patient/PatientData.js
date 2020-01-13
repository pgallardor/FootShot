import React, { Component } from 'react';
import '../style.css';
import { Button } from 'react-bootstrap';

class PatientData extends Component{
    
    constructor(props){
        super(props);
        this.contactList = this.contactList.bind(this);
        this.idList =this.idList.bind(this);
    }

    contactList(){
        let list = [];
        for (let contact of this.props.patient.contact){
            list = [...list, 
                <li>
                    <p><strong>{contact.value + " "}</strong>({contact.use + " " + contact.system})</p>
                </li>
            ]
        }
        return <ul>{list}</ul>
    }

    idList(){
        let list = [];
        for (let id of this.props.patient.identifier){
            list = [...list,
                    <li>
                        <p><strong>{id.type + " " + id.use + ": "}</strong>{id.value}</p>
                    </li>]
        }
        return <ul>{list}</ul>
    }
    
    render(){
        return(
            <div id="contenido-datos" class="col-lg-8 col-12 offset-lg-2 position-absolute contenedor-lista">
                <div class="row titulos-listado pt-4 pl-4 pb-1"></div>
                <div class="container">
                    <h3>Datos generales:</h3>
                </div>
                <div class="container">  
                    <h4>{this.props.patient.fullName}</h4>
                    <p>Fecha de nacimiento: {" " + this.props.patient.birthDate}</p>
                </div>
                <hr/>
                <div class="row container">
                    <div class="col-sm-10">
                        <h4>Opciones de contacto</h4>
                    </div>
                    <div class="col-sm-1">
                        <Button variant="success" size="sm" onClick={this.props.openContact}>Añadir</Button>
                    </div>
                </div>
                { this.contactList() }
                <hr/>
                <div class="row container">
                    <div class="col-sm-10">
                        <h4>Identificadores</h4>
                    </div>
                    <div class="col-sm-1">
                        <Button variant="success" size="sm" onClick={this.props.openId}>Añadir</Button>
                    </div>
                </div>
                { this.idList() }
            </div>
        )
    }
}

export default PatientData;