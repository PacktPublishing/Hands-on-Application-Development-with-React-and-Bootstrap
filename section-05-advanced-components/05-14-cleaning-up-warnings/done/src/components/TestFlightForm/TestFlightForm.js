import React from 'react';
import { Alert, InputGroup, InputGroupAddon, Card, CardText, CardBody, CardTitle,
CardSubtitle, Button, Form, FormGroup, Input
} from 'reactstrap';
import Axios from 'axios';

class TestFlightForm extends React.Component{
    constructor(props){
        super(props);
        this.state = {showSuccess: false, showDanger: false}
        this.handleInputChange = this.handleInputChange.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
    }

    handleInputChange(eventData){
        const target = eventData.target;
        const value = target.type === 'checkbox' ? target.checked : target.value;
        const name = target.name;
        this.setState({[name]: value})
    }

    onSubmit(eventData){
        eventData.preventDefault();
        Axios.post('http://localhost:3001/mailingList', {
            customerName: this.state.customerName,
            email: this.state.email,
            phone: this.state.phone,
            budget: this.state.budget
        }).then((res) =>{
            this.setState({showSuccess: true, showDanger: false});
        }).catch((err) => {
            this.setState({showSuccess: false, showDanger: true});
        });
    }

    render(){
        return(<div>
            <Card>
                <CardBody>
                    <CardTitle>Schedule a Test Flight</CardTitle>
                    <CardSubtitle>No pilot's license required!</CardSubtitle>
                    <CardText>Fill out the form fields below to schedule a test flight.</CardText>
                    <Form>
                        <FormGroup>
                            <Input type="text" onChange={this.handleInputChange} name="customerName" id="customerName" placeholder="What is your name?" />
                        </FormGroup>
                        <br />
                        <FormGroup>
                            <Input type="text" onChange={this.handleInputChange} name="phone" id="phone" placeholder="What is your contact number?" />
                        </FormGroup>
                        <br />
                        <InputGroup>
                            <InputGroupAddon addonType="prepend">@</InputGroupAddon>
                            <Input type="text" onChange={this.handleInputChange} name="email" id="email" placeholder="What is your email address?" />
                        </InputGroup>
                        <br />
                        <InputGroup>
                            <InputGroupAddon addonType="prepend">$</InputGroupAddon>
                            <Input type="text" onChange={this.handleInputChange} name="budget" id="budget" placeholder="Do you have a budget you need to stay under?" />
                        </InputGroup>
                        <br />
                    </Form>
                    <br />
                    <Button onClick={this.onSubmit}>Submit</Button>
                    <Alert isOpen={this.state.showSuccess} color="success">Your data were submitted successfully.  Your test flight awaits!</Alert>
                    <Alert isOpen={this.state.showDanger} color="danger">Something went horribly wrong!</Alert>
                </CardBody>
            </Card>
        </div>);
    }
}

export default TestFlightForm;