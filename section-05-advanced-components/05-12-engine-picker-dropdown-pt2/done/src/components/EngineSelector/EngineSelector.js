import React from 'react';
import { Dropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'reactstrap';

class EngineSelector extends React.Component{
    constructor(props){
        super(props);
        this.toggle = this.toggle.bind(this);
        this.state = {
          dropdownOpen: false
        };  
    }

    toggle() {
        this.setState(prevState => ({
          dropdownOpen: !prevState.dropdownOpen
        }));
    }

    render(){
        const selectedVehicleData = this.props.vehicleData.filter((vehicle)=> vehicle.detailKey === this.props.selectedVehicle)[0];

       return <Dropdown isOpen={this.state.dropdownOpen} toggle={this.toggle}>
       <DropdownToggle caret>
         Select a Powerplant
       </DropdownToggle>
       <DropdownMenu>
           {selectedVehicleData.options.engines.map(
               function(engine, i){
                   return <DropdownItem
                    data-engine = {i}
                    data-engine-cost={engine.cost}
                    data-engine-name={engine.name}
                    onClick = {this.props.onEngineSelect}
                    key={engine.name}>
                        {engine.name}
                    </DropdownItem>
               }, this
           )}
       </DropdownMenu>
     </Dropdown>;
    }
}

export default EngineSelector;
