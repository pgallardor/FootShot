import React, {Component} from 'react';
import '../style.css';

class ButtonMenu extends Component {
    constructor(props){
        super(props);
        this.tray = this.tray.bind(this);
    }

    tray() {
        let buttonList = [];
        for (let item of this.props.buttons){
            buttonList = [...buttonList, 
                <li class="d-md-inline-block menu-desplegable">
                    <a id="btn-con-ficha" class="btn-fichas" href="#" >{item}</a>
                </li>
            ];
        }
        return (
            <ul class="navfichas pl-0">
                {buttonList}        
            </ul>
        )
    }

    render(){
        return (
        <div id="menu-perfil-comun" class="row pb-5 menu-principal">
            <div class="col-md-8 col-12 pl-0">
                { this.tray() }
            </div>         
        </div>
        );
    }
}

export default ButtonMenu;