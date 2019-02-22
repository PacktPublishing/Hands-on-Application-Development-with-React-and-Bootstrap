import React from 'react';
import { Dropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'reactstrap';

class EngineSelector extends React.Component{
    constructor(props){
        super(props);
    }

    render(){
        if (this.props.selectedVehicleData) {
            return (<h2>Engine Selector</h2>);
        } else {
            return null;
        }
    }
}

export default EngineSelector;
