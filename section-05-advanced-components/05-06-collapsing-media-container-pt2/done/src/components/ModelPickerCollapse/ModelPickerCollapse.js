import React from 'react';
import './ModelPickerCollapse.css';
import {
    Collapse,
    Media,
    Button,
    Card,
    CardBody,
    Row,
    Col,
    Nav,
    NavItem,
    NavLink
} from 'reactstrap';
import Numeral from 'numeral';

class ModelPickerCollapse extends React.Component {
    constructor(props) {
        super(props);
        this.toggle = this.toggle.bind(this);
        this.state = {collapse: false };
    }

    toggle(){
        this.setState({collapse: !this.state.collapse});
    }

    render() {
        const vehicle = this.props.selectedVehicle;
        return (<div className="clickableMedia">
        <Media>
            <Media left href="#">
                <Media object data-src={vehicle.thumbnail} alt={vehicle.model} />
            </Media>
            <Media body>
                <Media heading>
                    {vehicle.model}
                </Media>
                <div>
                    {vehicle.tagline} <br /><br />
                    <span> Starting at {Numeral(vehicle.msrp).format('$0,0')}</span><br />
                    <span><i className="fas fas-gas-pump"></i>{vehicle.options.engines[0].nmpg} NMPG</span>
                </div>
            </Media>
        </Media>
        <Nav>
            <NavItem>
                <NavLink onClick={this.toggle}>{this.state.collapse ? "See Less" : "See More"}</NavLink>
            </NavItem>
            <NavItem>
                <NavLink data-model={vehicle.detailKey} onClick={this.props.selectVehicle}>Select</NavLink>
            </NavItem>
        </Nav>
        <Collapse isOpen={this.state.collapse}>
            <Card>
                <CardBody>
                    {vehicle.description}
                </CardBody>
            </Card>
        </Collapse>
        </div>)
    }
}

export default ModelPickerCollapse;
