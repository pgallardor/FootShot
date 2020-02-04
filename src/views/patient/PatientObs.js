import React, {Component} from 'react';
import { Link, withRouter } from 'react-router-dom';
import '../style.css';

class PatientObs extends Component{

    constructor(props){
        super(props);

        this.obsListRender = this.obsListRender.bind(this);
        this.goToObs = this.goToObs.bind(this);
    }

    formatDate(date){
        let aDate = new Date(date)
        return (aDate.getFullYear() + "/" + aDate.getMonth() + 1 + "/" + aDate.getDate())
    }

    goToObs(id){
        this.props.history.push('/observation/' + id)
    }

    obsListRender(){
        let list = [];
        for (let obs of this.props.obsList){
            list = [...list,
                <div class="row titulos-contenido ml-1 mr-1 mb-2 align-items-center">
                <div class="col-2">
                    <a href={null}>
                        <h2 class="pl-2 mb-0">
                            <i class="fa fa-folder"></i>
                        </h2>
                    </a>
                </div>
                <div className="col-3">
                    <a href={null}>
                        <h2 className="pl-2 mb-0">
                            {obs.deviceType}
                        </h2>
                    </a>
                </div>
                <div class="col-3">
                    <a href={null}>
                        <h2 class="pl-2 mb-0">
                            { this.formatDate(obs.issued) }
                        </h2>
                    </a>  
                </div>
                <div class="col-4 text-right">
                    <button class="btn btn-danger pl-md-5 pr-md-5 pl-sm-2 pr-sm-2 pl-1 pr-1 mt-2 mb-2" onClick={ () => this.goToObs(obs.obsId) }>Detalles</button>
                </div>
                </div>
            ]
        }
        return (<>{list}</>)
    }

    render(){
        return(
            <div id="contenido-datos" class="col-lg-8 col-12 offset-lg-2 position-absolute contenedor-lista">
                <div class="row titulos-listado pt-4 pl-4 pb-1">
                </div>
                { this.obsListRender() }
            </div>
        )
    }
}

export default withRouter(PatientObs);