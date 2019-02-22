import React from 'react';
import Axios from 'axios';
import {
    Row,
    Col,
    Form,
    FormGroup,
    Input,
    ListGroup,
    ListGroupItem,
    Badge,
    Table, 
    Button, 
    InputGroup,
    InputGroupAddon
} from 'reactstrap';

class DealerLocator extends React.Component {
    constructor(props){
        super(props);
        this.state = { searchTerm: "", dealerships: null}
    }

    componentDidMount(){
        Axios
            .get('http://localhost:3001/dealerships')
            .then( res => {
                this.setState({dealerships: res.data})
            })
            .catch(err => console.log(err));
    }

    render(){
        if(this.state.dealerships){
            return <h1>dealership locator</h1>
        } else {
            return null;
        }
    }
}

export default DealerLocator;