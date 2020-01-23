import React, { Component } from 'react';
import '../newstyles.css';
import { Button, ButtonToolbar, Table, Form, Row, Col } from 'react-bootstrap';
import axios from 'axios';

class AdminDevice extends Component{
    constructor(props){
        super(props);
        this.state = {
            deviceList: [],
            deviceForm: {
                deviceType: "Footshot",
                mac: "",
                belongsTo: -1
            }
        }

        this.centerOptionList = this.centerOptionList.bind(this);
        this._handleForm = this._handleForm.bind(this);
        this._submitNewDevice = this._submitNewDevice.bind(this);
    }

    componentDidMount(){
        axios.get('/admin/deviceList').then( response => {
            let { data } = response;
            this.setState({
                ...this.state,
                deviceList: data
            })
        })
    }


    _handleForm(e){
        let { deviceForm } = this.state;
        deviceForm[e.target.id] = e.target.value;

        this.setState({
            ...this.state,
            deviceForm
        })
    }

    _submitNewDevice(e){
        e.preventDefault();
        console.log(this.state.deviceForm);
        axios.post('/admin/signDevice', this.state.deviceForm, { withCredentials: true })
            .then( response => {
                let { data } = response,
                    { deviceList } = this.state;

                let centerName = this.props.centerList.filter(c => c.id === data.belongsTo)[0].name;
                deviceList = [...deviceList, {...data, name: centerName}];

                this.setState({
                    ...this.state,
                    deviceList
                })

            })
    }

    deviceList(){
        let list = []
        
        for (let device of this.state.deviceList){
            list = [...list,
                    <tr>
                        <td>{device.deviceType}</td>
                        <td>{device.mac}</td>
                        <td>{device.name}</td>
                        <td>
                            <ButtonToolbar>
                                <Button size="sm" variant="danger">Eliminar</Button>
                            </ButtonToolbar>
                        </td>
                    </tr>]
        }
        return(
            <tbody>{list}</tbody>
        )
    }

    centerOptionList(){
        let list = [<option value="-1">Seleccione centro médico</option>];
        for (let center of this.props.centerList){
            list = [...list,
                <option value={+center.id}>{center.name}</option>
            ]
        }

        return(
            <Form.Control as="select" id="belongsTo" onChange={this._handleForm}>
                {list}
            </Form.Control>
            )
    }

    render(){
        return(
            <>
            <Table striped hover>
                <thead>
                    <tr>
                        <th>Tipo dispositivo</th>
                        <th>MAC</th>
                        <th>Asociado a</th>
                        <th>Acciones</th>
                    </tr>
                </thead>
                {
                    this.deviceList()
                }
            </Table>
            <Form onSubmit={this._submitNewDevice}>
                <Row>
                    <Col>
                        <Form.Control as="select" id="deviceType" onChange={this._handleForm}>
                            <option value="Footshot">Footshot</option>
                            <option value="Cardialys">Cardialys</option>
                        </Form.Control>
                    </Col>
                    <Col>
                        <Form.Control type="text" placeholder="Device ID (MAC)" id="mac" onChange={this._handleForm}/>
                    </Col>
                    <Col>
                        { this.centerOptionList() }
                    </Col>
                    <Button type="submit" variant="success">Inscribir dispositivo</Button>
                </Row>
            </Form>
            </>
        )
    }


}

export default AdminDevice;