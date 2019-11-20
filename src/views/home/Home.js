import React, { Component } from 'react';
import {Helmet} from 'react-helmet';

class Home extends Component{
    render(){
        return (
            <div>
                <Helmet>
                    <title>Footshot - Home</title>
                </Helmet>
                <h1>At Home</h1>
            </div>
        )
    }
}

export default Home;