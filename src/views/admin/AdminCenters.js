import React, { Component } from 'react';
import '../newstyles.css';
import { Button, ButtonToolbar, Table, Form, Row, Col } from 'react-bootstrap';
import axios from 'axios';

class AdminCenters extends Component{
    constructor(props){
        super(props);
        this.state = {
            centerForm: {name: "", type: "Hospital"}
        }

        this._handleForm = this._handleForm.bind(this);
        this._submitNewCenter = this._submitNewCenter.bind(this);
        this.centerList = this.centerList.bind(this);
        this.deleteCenter = this.deleteCenter.bind(this);
    }

    _handleForm(e){
        let centerForm = this.state.centerForm;
        centerForm = { ...centerForm,
            [e.target.id]: e.target.value
        }
        this.setState({ centerForm })
    }

    _submitNewCenter(e){
        e.preventDefault();
        let { centerForm } = this.state;
        axios.post('/api/admin/addOrganization', centerForm, { withCredentials: true })
            .then( response => {
                let { data } = response;
                this.props.pushCenter(data);

            }).catch(err => {
                console.log(err);
            })
    }

    centerList(){
        let list = []

        for (let center of this.props.centerList){
            list = [...list, 
                    <tr>
                        <td>{center.id}</td>
                        <td>{center.name}</td>
                        <td>{center.type}</td>
                        <td>
                            <ButtonToolbar>
                                <Button size="sm" variant="danger" onClick={ () => this.deleteCenter(center.id) }>Eliminar</Button>
                            </ButtonToolbar>
                        </td>
                    </tr>
            ]
        }
        return(<tbody>{list}</tbody>)
    }

    deleteCenter(id){
        axios.delete('/api/admin/organization/' + id).then(() => {
            alert("Deletos");
        })
    }

    render(){
        return(
            <>
            <Table striped hover>
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Nombre</th>
                        <th>Tipo</th>
                        <th>Acciones</th>
                    </tr>
                </thead>
                {
                    this.centerList()
                }
            </Table>
            <Form onSubmit={this._submitNewCenter}>
                <Row>
                    <Col>
                        <Form.Control type="text" placeholder="Nombre" id="name" onChange={this._handleForm}/>
                    </Col>
                    <Col>
                        <Form.Control as="select" id="type" onChange={this._handleForm}>
                            <option value="Hospital">Hospital</option>
                            <option value="CESFAM">CESFAM</option>
                            <option value="Clínica">Clínica</option>
                            <option value="Particular">Particular</option>
                        </Form.Control>
                    </Col>
                    <Button type="submit" variant="success">Inscribir centro</Button>
                </Row>
            </Form>
            </>
        )
    }


}

export default AdminCenters;