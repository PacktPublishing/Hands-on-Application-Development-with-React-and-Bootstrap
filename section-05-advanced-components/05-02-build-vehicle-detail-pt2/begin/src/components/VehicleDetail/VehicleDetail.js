import React from 'react';
import './VehicleDetail.css';
import { Row, Col } from 'reactstrap';

class VehicleDetail extends React.Component{
    constructor(props){
        super(props);
        this.state = {vehicleData: {}, selectedVehicle: "" }
    }

    render(){
        const { selectedVehicle } = this.props.match.params;
        const selectedVehicleData = this.props.vehicleData.filter((vehicle) => vehicle.detailKey === selectedVehicle)[0];

        return(<div>
            <Row>
                <Col>
                    <img className = "detailImage" src={selectedVehicleData.thumbnail} />
                </Col>
            </Row>
           
        </div>);
    }
}

export default VehicleDetail;