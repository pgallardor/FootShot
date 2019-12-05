import React, { Component } from 'react';
import '../style.css';
import { thisTypeAnnotation } from '@babel/types';

class PatientData extends Component{
    
    constructor(props){
        super(props);
        this.contactList = this.contactList.bind(this)
    }

    contactList(){
        let list = []
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

    }
    
    render(){
        return(
            <div id="contenido-datos" class="col-lg-8 col-12 offset-lg-2 position-absolute contenedor-lista">
                <div class="row titulos-listado pt-4 pl-4 pb-1"></div>
                <h3>Datos generales:</h3>
                <br/>
                <h4>{this.props.patient.fullName}</h4>
                <p>Fecha de nacimiento: {" " + this.props.patient.birthDate}</p>
                <hr/>
                <h4>Opciones de contacto</h4>
                <br/>
                { this.contactList() }
                <hr/>
            </div>
        )
    }
}

export default PatientData;