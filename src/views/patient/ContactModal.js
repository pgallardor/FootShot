import React, { Component } from 'react';
import { Button, Modal, Form } from 'react-bootstrap';
import '../newstyles.css';
import '../style.css';

class ContactModal extends Component{
    constructor(props){
        super(props);

        this.state = {
            value: "",
            system: "-1",
            use: "-1"
        };

        this._handleChange = this._handleChange.bind(this);
        this._submit = this._submit.bind(this);
    }

    _handleChange(e){
        this.setState({
            [e.target.id]: e.target.value
        })
    }

    _submit(){
        //check for bad stuff
        this.props.submit("ContactPoint", this.state)
    }

    render(){
        return (
            <Modal show={this.props.show} onHide={this.props.handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Nuevo punto de contacto</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form onSubmit={null}>
                        <Form.Group>
                            <Form.Label>Valor</Form.Label>
                            <Form.Control type="string" placeholder="Email, teléfono, etc..." 
                                            id="value" onChange={this._handleChange}/>
                        </Form.Group>
                        <Form.Group>
                            <Form.Label>Sistema</Form.Label>
                            <Form.Control as="select" id="system" onChange={this._handleChange}>
                                <option value="-1">Elegir...</option>
                                <option value="email">E-mail</option>
                                <option value="phone">Teléfono</option>
                                <option value="fax">Fax</option>    
                            </Form.Control>
                        </Form.Group>
                        <Form.Group>
                            <Form.Label>Uso</Form.Label>
                            <Form.Control as="select" id="use" onChange={this._handleChange}>
                                <option value="-1">Elegir...</option>
                                <option value="work">Trabajo</option>
                                <option value="home">Casa</option>
                                <option value="mobile">Móvil</option>    
                            </Form.Control>
                        </Form.Group>
                    </Form>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={this.props.handleClose}>
                        Close
                    </Button>
                    <Button variant="primary" onClick={this._submit}>
                        Save Changes
                    </Button>
                </Modal.Footer>
            </Modal>
        );
    }
}

export default ContactModal;