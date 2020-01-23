import React, { Component } from 'react';
import { Button, Tabs, Tab } from 'react-bootstrap';
import { Helmet } from 'react-helmet';
import '../style.css';
import '../newstyles.css';
import axios from 'axios';
import AdminUsers from './AdminUsers';
import AdminDevice from './AdminDevices';
import AdminCenters from './AdminCenters';

//single page administration
class Admin extends Component{
    constructor(props){
        super(props);
        this.state = {
            centerList: []
        }

        this.pushCenter = this.pushCenter.bind(this);
    }

    componentDidMount(){
        //redirect if not admin
        axios.get('/admin/organizationList').then( response => {
            let { data } = response;

            this.setState({
                centerList: data
            })
        })
    }

    pushCenter(center){
        let { centerList } = this.state;
        centerList = [...centerList, center];

        this.setState({ centerList })
    }

    render(){
        return(
            <>
                <Helmet>
                    <title>Footshot - Admin</title>
                </Helmet>
                <div className="container titulo-home pt-5 pb-4">
                    <Tabs defaultActiveKey="users" id="adminTabs">
                        <Tab eventKey="users" title="Usuarios">
                            <h3>Usuarios</h3>
                            <AdminUsers centerList={this.state.centerList}/>
                        </Tab>
                        <Tab eventKey="health-centers" title="Centros de salud">
                            <h3>Centros de salud</h3>
                            <AdminCenters centerList={this.state.centerList} pushCenter={this.pushCenter}/>
                        </Tab>
                        <Tab eventKey="devices" title="Dispositivos">
                            <h3>Dispositivos</h3>
                            <AdminDevice centerList={this.state.centerList}/>
                        </Tab>
                    </Tabs>
                </div>
            </>
        )
    }
}

export default Admin;