import React from 'react';
import './Home.css';
import SiteCarousel from '../SiteCarousel';
import VehicleBrowser from '../VeicleBrowser';


class Home extends React.Component{

    constructor(props){
        super(props);
    }

    render(){
        if(this.props.vehicleData){
            return(   
                <div>
                    <SiteCarousel vehicleData={this.props.vehicleData} />
                    <VehicleBrowser />
                </div>
            );
        } else {
            return null;
        }
    }
}

export default Home;