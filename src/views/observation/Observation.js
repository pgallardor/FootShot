import React, {Component} from 'react';
import ButtonMenu from '../subcomponents/ButtonMenu';
import { Helmet } from 'react-helmet';
import axios from 'axios';
import '../style.css';
import '../newstyles.css';
import FootObservation from './FootObservation';

class Observation extends Component{
    
    constructor(props){
        super(props);
        this.state = {
            irView: false,
            url: "#"
        }

        this._toggleIrView = this._toggleIrView.bind(this);
    }

    componentDidMount(){
        let oid = this.props.match.params.oid;
        axios.get('/Observation/' + oid).then( response => {
            let { oid, urls, device, interpretation, issued, note } = response.data;
            this.setState({
                urls, oid,
                device, interpretation, issued, note
            })
        })
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
                {
                    this.state.device === 'Footshot' &&
                    <FootObservation {...this.state} />
                }
                </div>
            </div>
        )
    }
}

export default Observation;