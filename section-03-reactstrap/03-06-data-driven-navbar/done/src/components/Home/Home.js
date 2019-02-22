import React from 'react';
import './Home.css';
import SiteCarousel from '../SiteCarousel';
import VehicleBrowser from '../VeicleBrowser';


class Home extends React.Component{

    constructor(props){
        super(props);
    }

    render(){
        return( 
            <div>
                <p>Test</p>
                <SiteCarousel />
                <VehicleBrowser />
            </div>
        );
    }
}

export default Home;