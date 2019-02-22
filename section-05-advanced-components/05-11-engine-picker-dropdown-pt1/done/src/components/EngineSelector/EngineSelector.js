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
       <DropdownItem header>Header</DropdownItem>
          <DropdownItem>Some Action</DropdownItem>
          <DropdownItem disabled>Action (disabled)</DropdownItem>
          <DropdownItem divider />
          <DropdownItem>Foo Action</DropdownItem>
          <DropdownItem>Bar Action</DropdownItem>
          <DropdownItem>Quo Action</DropdownItem>
       </DropdownMenu>
     </Dropdown>;
    }
}

export default EngineSelector;
