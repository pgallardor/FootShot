import React, { Component } from 'react';
import '../style.css';
import 'react-datepicker/dist/react-datepicker.css';
import { Helmet } from 'react-helmet';
import { InputGroup, FormControl, Form, FormGroup, Col, Button } from 'react-bootstrap';
import DatePicker from 'react-datepicker';
import axios from 'axios';

class PatientSign extends Component {
    render(){
        return(
            <div>
                <Helmet>
                    <title>Footshot - Inscribir paciente</title>
                </Helmet>
                <div className="container titulo-home pt-5 pb-4">
                    <div class="row">
                        <div class="col-1 pl-0">
                            <a class="btn btn-atras amarillo" href="/">
                                <i class="fas fa-angle-left"></i>
                            </a>
                        </div>
                        <div class="col-4 text-left pl-md-0 pl-sm-2 pl-4">
                            <h1>Volver al Feed</h1>
                        </div>
                    </div>
                    <br/>
                    <h3>Inscribir un paciente</h3>
                    <br/>
                    <Form>
                        <FormGroup>
                            <Form.Label>Nombre paciente</Form.Label>
                            <Form.Control type="text" placeholder="Nombre completo" id="fullName"/>
                        </FormGroup>
                        <FormGroup>
                            <Form.Label>RUT</Form.Label>
                            <Form.Control type="text" placeholder="Ingrese RUT" id="rut"/>
                        </FormGroup>
                        <FormGroup>
                            <Form.Label>Fecha de nacimiento</Form.Label>
                            <DatePicker id="dob" className="form-control" 
                                        value={new Date().toISOString()} onChange={ (a, b) => {  return; } } />
                        </FormGroup>
                        <Form.Row>
                            <Form.Group as={Col}>
                                <Form.Label>Género</Form.Label>
                                <Form.Control as="select" id="gender">
                                    <option value="male">Hombre</option>
                                    <option value="female">Mujer</option>
                                    <option value="other">Otro</option>
                                    <option value="unknown">No menciona/Se desconoce</option>
                                </Form.Control>
                            </Form.Group>
                        </Form.Row>
                        <Button variant="success"> Inscribir </Button>
                    </Form>
                </div>
            </div>
        )
    }
}

export default PatientSign;