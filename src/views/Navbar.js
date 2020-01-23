import React, { Component } from 'react';
import './style.css';
import axios from 'axios';
import { withRouter } from 'react-router-dom';
import { thisTypeAnnotation } from '@babel/types';

class Navbar extends Component{
    constructor(props){
        super(props);

        this.logout = this.logout.bind(this);
    }

    logout(){
        axios.post('/auth/logout', {}, { withCredentials: true })
            .then( response => {
                this.props.logout();
                this.props.history.push('/login');
            })
            .catch( err => console.log(err) )
    }

    render(){
        //this one changes with the user's role
        let divClass = "col-lg-2 col-md-3 col-sm-4 col-5 offset-lg-7 offset-md-5 offset-sm-6 offset-5 text-right";
        if (this.props.location.pathname === '/login') return (<div></div>);
        return(
            <nav class="navbar text-center pt-3 pb-3">
                <div class="container">
                    <div class="row">
                        <div class="col-lg-3 col-md-4 d-md-inline-block d-none text-left">
                            <a href="/">    
                                <img class="marca" src="/img/Cardihealth-bar.png"/>
                            </a>
                        </div>
                        <div class="col-2 d-inline-block d-md-none text-left">
                            <a href="/">
                                <img class="marca" src="/img/Cardiahealth2.png"/>
                            </a>
                        </div>
                        <div class={divClass}>
                            <div class="dropdown">
                                <button class="btn dropdown-toggle name-user" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                    {this.props.user.username}
                                </button>
                                <div class="dropdown-menu" aria-labelledby="dropdownMenuButton">
                                    <a class="dropdown-item" href="#">Editar usuario</a>
                                    <a class="dropdown-item" href="javascript:void(null)" onClick={this.logout}>Cerrar sesión</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>  
            </nav>
        );
    }
}

export default withRouter(Navbar);