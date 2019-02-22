import React from 'react';
import './Home.css';
import SiteCarousel from '../SiteCarousel';


class Home extends React.Component{

    constructor(props){
        super(props);
    }

    render(){
        return( 
            <div>
                <SiteCarousel />
            </div>
        );
    }
}

export default Home;