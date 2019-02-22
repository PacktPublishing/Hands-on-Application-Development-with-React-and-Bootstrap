import React from 'react';
import './TopNav.css';
import {
    Collapse,
    Navbar,
    NavbarToggler,
    NavbarBrand,
    Nav,
    NavItem,
    NavLink,
    UncontrolledDropdown,
    DropdownToggle,
    DropdownMenu,
    DropdownItem } from 'reactstrap';


class TopNav extends React.Component {
    constructor(props){
        super(props);

        this.toggle = this.toggle.bind(this);
        this.state = {
         isOpen: false
        };
    }

    toggle() {
        this.setState({
          isOpen: !this.state.isOpen
        });
    }

    render(){
      const VehicleSelections = this.props.vehicleData.map((item)=> {
        return <DropdownItem key={item.detailKey}>
          <Link to={{pathname: "/detail/" + item.detailKey}}>
            {item.model}
          </Link>
        </DropdownItem>
      }, this);
      
        return(<div>
            <Navbar color="light" light expand="md">
              <NavbarBrand href="/">flying car dealership</NavbarBrand>
              <NavbarToggler onClick={this.toggle} />
              <Collapse isOpen={this.state.isOpen} navbar>
                <Nav className="ml-auto" navbar>
                  <NavItem>
                    <NavLink href="/">Home</NavLink>
                  </NavItem>
                  <UncontrolledDropdown nav inNavbar>
                    <DropdownToggle nav caret>
                    Flying Cars
                    </DropdownToggle>
                    <DropdownMenu right>
                      <DropdownItem>
                        Option 1
                      </DropdownItem>
                      <DropdownItem>
                        Option 2
                      </DropdownItem>
                      <DropdownItem divider />
                      <DropdownItem>
                        Reset
                      </DropdownItem>
                    </DropdownMenu>
                  </UncontrolledDropdown>
                  <NavItem>
                      <NavLink href='/find-a-dealer'>Find A Dealer</NavLink>
                  </NavItem>
                  <NavItem>
                      <NavLink href='/build-and-price'>Build And Price</NavLink>
                  </NavItem>
                </Nav>
              </Collapse>
            </Navbar>
          </div>);
    }
}

export default TopNav;
