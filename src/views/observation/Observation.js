import React, {Component} from 'react';
import ButtonMenu from '../subcomponents/ButtonMenu';
import { Helmet } from 'react-helmet';
import '../style.css';
import '../newstyles.css';

class Observation extends Component{
    
    constructor(props){
        super(props);
        this.state = {
            irView: false
        }

        this._toggleIrView = this._toggleIrView.bind(this);
    }

    _toggleIrView(){
        this.setState({ irView: !this.state.irView });
    }

    render(){
        return(
            <div>
                <Helmet>
                    <title>Footshot - Observación</title>
                </Helmet>
                <div class="container titulo-home pt-5 pb-4 contenido">
                    <ButtonMenu buttons={["Visible", "Infrarrojo", "Análisis"]} change={null} />
                    <div class="row container centered images">    
                        <div class="left-image">
                            <img src="https://ih1.redbubble.net/image.437583177.0368/mp,840x830,matte,f8f8f8,t-pad,750x1000,f8f8f8.jpg"/>
                        </div>
                        <div class="right-image">
                            <img src="https://ih1.redbubble.net/image.437583177.0368/mp,840x830,matte,f8f8f8,t-pad,750x1000,f8f8f8.jpg"/>
                        </div>
                    </div>
                    <div class="container obs-data">

                    </div>
                </div>
            </div>
        )
    }
}

export default Observation;