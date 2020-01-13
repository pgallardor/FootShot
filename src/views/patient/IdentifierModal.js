import React, { Component } from 'react';
import { Button, Modal, Form } from 'react-bootstrap';
import '../newstyles.css';
import '../style.css';

class IdentifierModal extends Component{
    constructor(props){
        super(props);

        this.state = {
            value: ""
        };
    }

    submit(){
        //stuff
        return;
    }

    render(){
        return (
            <Modal show={this.props.show} onHide={this.props.handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>
                        Agregar identificador
                    </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form onSubmit={null}>
                        <Form.Group>
                            <Form.Label>Valor</Form.Label>
                            <Form.Control type="string" placeholder="Identificador" />
                        </Form.Group>
                        <Form.Group>
                            <Form.Label>Tipo de identificador</Form.Label>
                            <Form.Control type="string" placeholder="Tipo" />
                        </Form.Group>
                        <Form.Group>
                            <Form.Label>Entidad asignadora</Form.Label>
                            <Form.Control type="string" placeholder="Clìnica, HIS, etc" />
                        </Form.Group>
                    </Form>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={this.props.handleClose}>
                        Close
                    </Button>
                    <Button variant="primary" onClick={this.submit}>
                        Save Changes
                    </Button>
                </Modal.Footer>
            </Modal>
        );
    }
}

export default IdentifierModal;