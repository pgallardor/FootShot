import React, { Component } from 'react';
import './style.css';

class Navbar extends Component{
    render(){
        //this one changes with the user's role
        let divClass = "col-lg-2 col-md-3 col-sm-4 col-5 offset-lg-7 offset-md-5 offset-sm-6 offset-5 text-right";
        return(
            <nav class="navbar text-center pt-3 pb-3">
                <div class="container">
                    <div class="row">
                        <div class="col-lg-3 col-md-4 d-md-inline-block d-none text-left">
                            <a href="{% url 'users:home' %}">
                                <img class="marca" src="/img/marca-footshot.png"/>
                            </a>
                        </div>
                        <div class="col-2 d-inline-block d-md-none text-left">
                            <a href="{% url 'users:home' %}">
                                <img class="marca" src="/img/isotipo-blanco.png"/>
                            </a>
                        </div>
                    {   false &&
                        <div class="col-lg-3 col-md-4 col-5 offset-lg-4 offset-md-1 text-right">
                            <a class="btn btn-light btn-lg create-user pl-sm-5 pl-2 pr-sm-5 pr-2" href="{% url 'users:create' %}">
                                Crear usuario
                            </a>
                        </div>
                    }   
                    
                    <div class={divClass}>
                        <div class="dropdown">
                            <button class="btn dropdown-toggle name-user" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                Username
                            </button>
                            <div class="dropdown-menu" aria-labelledby="dropdownMenuButton">
                                <a class="dropdown-item" href="{% url 'users:auto_update' request.user.pk %}">Editar</a>
                                <a class="dropdown-item" href="{% url 'password_change' %}">Editar contraseña</a>
                                <a class="dropdown-item" href="{% url 'logout' %}">Cerrar sesión</a>
                            </div>
                        </div>
                    </div>
                    </div>
                </div>  
            </nav>
        );
    }
}

export default Navbar;