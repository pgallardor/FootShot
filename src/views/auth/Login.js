import React, { Component } from 'react';
import {Helmet} from 'react-helmet'
import '../style.css';
import axios from 'axios';

class Login extends Component{
    constructor(props){
        super(props);
        this.state = {
            username: '',
            password: '',
            error: false
        }

        this._handleChange = this._handleChange.bind(this);
        this.login = this.login.bind(this);
    }

    componentDidMount(){
        if (this.props.user.username !== 'guest'){
            this.props.history.push('/');
        }
    }

    _handleChange(e){
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    login(e){
        e.preventDefault();
        let { username, password } = this.state;
        console.log(this.state)
        axios.post('/auth/signin', { username, password }, { withCredentials: true })
            .then( response => {
                this.props.login({ username });
                this.props.history.push('/');
            })
            .catch(err => {
                console.log(err)
                this.setState({
                    error: true
                })
            })
    }

    render(){
        return (
            <div>
                <Helmet>
                    <title>Footshot - Login</title>
                </Helmet>
                <div class="fondo">
                </div>
                <div class="container login pt-5">
                    <div class="row pt-5">
                        <div class="col-10 cuadro-login col-sm-8 col-md-6 col-xl-4 offset-1 offset-sm-2 offset-md-3 offset-xl-4">
                            <div class="container pt-0">
                                <div class="row">
                                <div class="col-12 pt-5 pb-5 text-center">
                                    <img class="img-footshot" src="/img/horizontal_marca.svg"/>
                                </div>
                                </div>
                            </div>
                            
                            <form class="pl-3 pr-3" onSubmit={this.login} method="POST">
                                <div class="form-group">
                                    <label class="titulo-input" for="exampleInputUsername1">Username</label>
                                    <input type="text" class="form-control input-texto" id="exampleInputUsername1" onChange={this._handleChange}
                                        aria-describedby="usernameHelp" placeholder="Escribe tu username" name="username" required/>
                                    {
                                        false &&
                                        <div class="sugerencia mb-0 error-color">
                                            <b>Error</b>
                                        </div>
                                    }
                                </div>
                                <div class="form-group">
                                    <label class="titulo-input" for="exampleInputPassword1">Contraseña</label>
                                    <input type="password" class="form-control input-texto" onChange={this._handleChange} 
                                        id="exampleInputPassword1" placeholder="Password" name="password" required/>
                                {   false &&
                                    <div class="sugerencia mb-0 error-color">
                                        <b>Error</b>
                                    </div>
                                }
                                </div>
                                {   this.state.error &&
                                    <p class="olvidar alert alert-danger">
                                        Usuario o contraseña incorrectos.
                                    </p>
                                }
                                <button type="submit" class="btn btn-primary btn-lg btn-block">Iniciar sesión</button>
                            </form>
                            <div class="container">
                                <div class="row">
                                <div class="col text-center pt-1 pb-4">
                                    <a class="olvidar" href="#">¿Olvidaste tu contraseña?</a>
                                </div>
                                </div>
                            </div>

                            </div>
                        </div>
                    </div>
            </div>
        )
    }
}

export default Login;