import React, { Component } from 'react';
import { Button, Modal, Form, Row, Col } from 'react-bootstrap';
import '../newstyles.css';
import '../style.css';
import axios from 'axios';

class AdminCenterModal extends Component{
    constructor(props){
        super(props);

        this.state = {
            centerId: "",
            centerList: []
        };

        this.load = this.load.bind(this);
        this.centerListUser = this.centerListUser.bind(this);
        this._handleForm = this._handleForm.bind(this);
        this.submit = this.submit.bind(this);
    }

    componentDidUpdate(prevProps, prevState){
        if (this.props.userId !== prevProps.userId)
            this.load();
    }

    load(){
        if (+this.props.userId === -1) return;
        axios.get('/api/admin/organization/' + this.props.userId)
            .then( response => {
                let { data } = response;
                this.setState({
                    ...this.state,
                    centerList: data
                })
            })
    }

    _handleForm(e){
        this.setState({
            ...this.state,
            [e.target.id]: e.target.value
        })
    }


    centerListForm(){
        let list = [<option value="-1">Seleccione centro médico</option>];
        for (let center of this.props.centerList){
            list = [...list,
                <option value={+center.id}>{center.name}</option>
            ]
        }

        return(
            <Form.Control as="select" id="centerId" onChange={this._handleForm}>
                {list}
            </Form.Control>
            )

    }

    centerListUser(){
        let list = [];

        for (let center of this.state.centerList){
            list = [
                ...list,
                <li>{center.name + ' (' + center.type + ')'}</li>
            ]
        }

        return(
            <ul>{list}</ul>
        )
    }

    submit(){
        let body = {
            organizationId: this.state.centerId,
            username: this.props.userId
        }
        console.log(body);
        axios.post('/api/admin/signUserToOrganization', body)
            .then(() => {
                alert('Usuario inscrito a nuevo centro de salud')
            })
        return;
    }

    render(){
        return (
            <Modal show={this.props.show} onHide={() => {this.props.handleClose(-1)}}>
                <Modal.Header closeButton>
                    <Modal.Title>
                        Centros de salud
                    </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <div className="container">
                        <h4>El usuario pertenece a los siguientes:</h4>
                        { this.centerListUser() }
                    </div>
                    <Form onSubmit={null}>
                        <Row>
                            <Col>
                                <Form.Group>
                                    <Form.Label>Inscribir nuevo centro</Form.Label>
                                    { this.centerListForm() }
                                </Form.Group>
                            </Col>
                        </Row>
                    </Form>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={() => {this.props.handleClose(-1)}}>
                        Cerrar
                    </Button>
                    <Button variant="primary" onClick={this.submit}>
                        Guardar
                    </Button>
                </Modal.Footer>
            </Modal>
        );
    }
}

export default AdminCenterModal;