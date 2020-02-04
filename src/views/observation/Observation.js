import React, {Component} from 'react';
import ButtonMenu from '../subcomponents/ButtonMenu';
import { Helmet } from 'react-helmet';
import axios from 'axios';
import '../style.css';
import '../newstyles.css';
import FootObservation from './FootObservation';
import CardObservation from './CardObservation';

class Observation extends Component{
    
    constructor(props){
        super(props);
        this.state = {
            irView: false,
            urls: "#"
        }

        this._toggleIrView = this._toggleIrView.bind(this);
    }

    componentDidMount(){
        let oid = this.props.match.params.oid;
        axios.get('/Observation/' + oid).then( response => {
            let { oid, urls, deviceType, interpretation, issued, note, mac, name } = response.data;
            this.setState({
                urls, oid,
                deviceType, interpretation, issued, note, mac, name
            })
        })
    }

    _toggleIrView(){
        this.setState({ irView: !this.state.irView });
    }

    render(){
        if (this.state.urls === "#") return (<h3>Loading...</h3>)
        return(
            <div>
                <Helmet>
                    <title>Footshot - Observación</title>
                </Helmet>
                <div class="container titulo-home pt-5 pb-4 contenido">
                {
                    (this.state.deviceType === 'Footshot Clinical' || this.state.deviceType === 'Footshot Home') ?
                    <FootObservation {...this.state} /> :
                    <CardObservation {...this.state} />
                }
                </div>
            </div>
        )
    }
}

export default Observation;