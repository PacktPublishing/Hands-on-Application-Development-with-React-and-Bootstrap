import React from 'react';
import './ModelPicker.css';
import ModelPickerCollapse from '../ModelPickerCollapse/ModelPickerCollapse';
import {
    Row,
    Col
} from 'reactstrap';
class ModelPicker extends React.Component {

    render() {
        return (<div>
            <Row>
                <Col sm="12">
                    {this.props.vehicleData.map(function(vehicle, i){
                            return <ModelPickerCollapse
                            key={"model-picker-" + vehicle.detailKey}
                            selectedVehicle={vehicle}
                            selectVehicle={this.props.selectVehicle}
                            />
                        }, this)}
                </Col>
            </Row>
        </div>);
    }
}

export default ModelPicker;
