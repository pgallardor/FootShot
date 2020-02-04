import React, { Component } from 'react';
import '../newstyles.css';
import { Button, ButtonToolbar, Table, Form, Row, Col } from 'react-bootstrap';
import AdminCenterModal from './AdminCenterModal';
import axios from 'axios';

class AdminUsers extends Component{

    constructor(props){
        super(props);
        this.state = {
            userList: [],
            userForm: {
                username: "",
                password: ""
            },
            modalOpen: false,
            modalId: -1
        }

        this._handleForm = this._handleForm.bind(this);
        this._submitNewUser = this._submitNewUser.bind(this);
        this._openModal = this._openModal.bind(this);
        this.userList = this.userList.bind(this);
    }

    componentDidMount(){
        axios.get('/api/admin/userList').then( response => {
            let { data } = response;
            this.setState({ userList: data })
        })
    }

    _handleForm(e){
        let { userForm } = this.state;
        userForm[e.target.id] = e.target.value;

        this.setState({
            ...this.state,
            userForm
        })
    }

    _makeAdmin(username){
        axios.put('/api/admin/makeAdmin/' + username)
            .then(() => {
                alert(username + " is now an admin!")
            })
    }

    _submitNewUser(e){
        e.preventDefault();
        axios.post('/api/auth/signup', this.state.userForm, { withCredentials: true })
            .then((user) => {
                let { data } = user,
                    { userList } = this.state;
                
                userList = [...userList, data];
                console.log(userList);
                this.setState({
                    ...this.state,
                    userList
                })
            })
    }

    _openModal(id){
        let modalOpen = !this.state.modalOpen;

        this.setState({
            ...this.state,
            modalOpen,
            modalId: id
        })
    }

    userList(){
        let list = []

        for (let user of this.state.userList){
            list = [...list, 
                    <tr>
                        <td>{user.username}</td>
                        <td>{user.role}</td>
                        <td colSpan="3">
                            <ButtonToolbar>
                                <Button size="sm" variant="outline-info" onClick={() => { this._openModal(user.username) }}>Ver servicios salud</Button>
                                <Button size="sm" variant="outline-danger" disabled={user.role === 'admin'} onClick={() => this._makeAdmin(user.username)}>Hacer admin</Button>
                                <Button size="sm" variant="danger">Eliminar cuenta</Button>
                            </ButtonToolbar>
                        </td>
                    </tr>
            ]
        }
        return(<tbody>{list}</tbody>)
    }

    render(){
        return(
            <>
            <AdminCenterModal userId={this.state.modalId} show={this.state.modalOpen} 
                                handleClose={this._openModal} centerList={this.props.centerList}/>
            <Table striped hover>
                <thead>
                    <tr>
                        <th>Username</th>
                        <th>Rol</th>
                        <th colSpan="3">Acciones</th>
                    </tr>
                </thead>
                {
                    this.userList()
                }
            </Table>
            <Form onSubmit={this._submitNewUser}>
                <Row>
                    <Col>
                        <Form.Control type="text" placeholder="New username" id="username" onChange={this._handleForm}/>
                    </Col>
                    <Col>
                        <Form.Control type="password" placeholder="Your password" id="password" onChange={this._handleForm}/>
                    </Col>
                    <Button type="submit" variant="success">Crear usuario</Button>
                </Row>
            </Form>
            </>
        )
    }


}

export default AdminUsers;