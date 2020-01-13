import React, { Component } from 'react';
import '../style.css';

class ObsItem extends Component{
    render(){
        let id = this.props.id;
        return(
            <div class="row titulos-contenido ml-1 mr-1 mb-2 align-items-center">
                <div class="col-sm-1 col-2 pr-0">
                    <a href={"/observation/" + id}>
                        <h2 class="pl-2 mb-0">
                            {id}
                        </h2>
                    </a>
                </div>
                <div class="d-sm-inline-block d-none col-3 pr-0">
                    <a href={"/observation/" + id}>
                        <h2 class="pl-2 mb-0">
                            {this.props.patientName}  
                        </h2>
                    </a>  
                </div>
                <div class="col-2 pr-0">
                    <a href={"/observation/" + id}>
                        <h2 class="pl-2 mb-0">
                            {this.props.device}
                        </h2>
                    </a>  
                </div>
                <div class="col-sm-2 d-sm-inline-block col-3 pr-0">
                    <a href={"/observation/" + id}>
                        <h2 class="pl-2 mb-0">
                            {this.props.date}
                        </h2>
                    </a>  
                </div>
                <div class="col-sm-1 col-3 pr-0">
                    <a href={"/observation/" + id}>
                        <h2 class="pl-2 mb-0">
                            {this.props.interpretation}
                        </h2>
                    </a>  
                </div>
                <div class="col-3 text-right">
                    <button class="btn btn-danger pl-md-3 pr-md-3 pl-sm-2 pr-sm-2 pl-1 pr-1 mt-2 mb-2" data-toggle="modal" data-target="#eliminarModal">Eliminar</button>
                </div>
            </div>
        )
    }
}

export default ObsItem;