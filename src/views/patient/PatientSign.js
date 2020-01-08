import React, { Component } from 'react';
import '../style.css';
import 'react-datepicker/dist/react-datepicker.css';
import { Helmet } from 'react-helmet';
import { InputGroup, FormControl, Form, FormGroup, Col, Button } from 'react-bootstrap';
import DatePicker from 'react-datepicker';
import axios from 'axios';

class PatientSign extends Component {

    constructor(props){
        super(props);
        this.state = {
            rut: '',
            fullName: '',
            birthDate: new Date(),
            gender: 'male'
        }

        this.signPatient = this.signPatient.bind(this);
        this._handleChange = this._handleChange.bind(this);
        this._handleDateChange = this._handleDateChange.bind(this);

    }

    signPatient(){
        //axios POST
        let form = this.state;
        
        axios.post('/Patient/signWithRut', form)
            .then( response => {
                alert(response.data.msg);
            })
        console.log(form);
    }

    _handleChange(e){
        if (e.target.id === 'rut'){
            let clean = [].map.call(e.target.value, x => {
                if ((x < '0' || x > '9') && x !== 'K' && x !== 'k') return null;
                return x;
            }).join('');
            const len = clean.length;

            if (len > 1){
                let verifier = (clean[len - 1] === 'k') ? 'K' : clean[len - 1];
                let parsed = [clean[len - 2], '-', verifier], group = 1 ;
                for (let i = len - 3; i >= 0; i--){
                    if (group == 0) 
                        parsed = ['.', ...parsed];
                    parsed = [clean[i], ...parsed];
                    group++;
                    if (group == 3) group = 0;
                }
                clean = parsed.join('');
            }

            this.setState({
                [e.target.id]: clean
            })
            return;
        }

        this.setState({
            [e.target.id]: e.target.value
        })
    }

    _handleDateChange(date, formatted){
        console.log(date.toString());
        this.setState({
            birthDate: date
        });
    }

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
                            <Form.Control type="text" placeholder="Nombre completo" id="fullName"
                                             onChange={this._handleChange}/>
                        </FormGroup>
                        <FormGroup>
                            <Form.Label>RUT</Form.Label>
                            <Form.Control type="text" placeholder="Ingrese RUT" id="rut"
                                            value={this.state.rut} onChange={this._handleChange}/>
                        </FormGroup>
                        <FormGroup>
                            <Form.Label>Fecha de nacimiento</Form.Label>
                            <DatePicker id="birthDate" className="form-control" 
                                        selected={this.state.birthDate} onChange={ this._handleDateChange }
                                        dateFormat="yyyy/MM/dd" />
                        </FormGroup>
                        <Form.Row>
                            <Form.Group as={Col}>
                                <Form.Label>Género</Form.Label>
                                <Form.Control as="select" id="gender" onChange={this._handleChange}>
                                    <option value="male">Hombre</option>
                                    <option value="female">Mujer</option>
                                    <option value="other">Otro</option>
                                    <option value="unknown">No menciona/Se desconoce</option>
                                </Form.Control>
                            </Form.Group>
                        </Form.Row>
                        <Button variant="success" onClick={this.signPatient}> Inscribir </Button>
                    </Form>
                </div>
            </div>
        )
    }
}

export default PatientSign;