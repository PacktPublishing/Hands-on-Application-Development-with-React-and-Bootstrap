import React from 'react';
import { Alert, InputGroup, InputGroupAddon, InputGroupText, Card, CardText, CardBody, CardTitle,
CardSubtitle, Button, Form, FormGroup, Label, Input, FormText
} from 'reactstrap';


class TestFlightForm extends React.Component{
    constructor(props){
        super(props);
        this.state = {showSuccess: false, showDanger: false}
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
                            <Input type="text" name="customerName" id="customerName" placeholder="What is your name?" />
                        </FormGroup>
                        <br />
                        <FormGroup>
                            <Input type="text" name="phone" id="phone" placeholder="What is your contact number?" />
                        </FormGroup>
                        <br />
                        <InputGroup>
                            <InputGroupAddon addonType="prepend">@</InputGroupAddon>
                            <Input type="text" name="email" id="email" placeholder="What is your email address?" />
                        </InputGroup>
                        <br />
                        <InputGroup>
                            <InputGroupAddon addonType="prepend">$</InputGroupAddon>
                            <Input type="text" name="budget" id="budget" placeholder="Do you have a budget you need to stay under?" />
                        </InputGroup>
                        <br />
                    </Form>
                    <br />
                    <Button>Submit</Button>
                    <Alert color="success">Your data were submitted successfully.  Your test flight awaits!</Alert>
                    <Alert color="danger">Something went horribly wrong!</Alert>
                </CardBody>
            </Card>
        </div>);
    }
}

export default TestFlightForm;