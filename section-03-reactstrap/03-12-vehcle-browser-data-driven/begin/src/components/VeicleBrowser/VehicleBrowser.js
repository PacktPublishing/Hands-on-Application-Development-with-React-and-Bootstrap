import React from 'react';
import './VehicleBrowser.css';
import { Container, Row, Col, Card, CardImg, CardText, CardBody, CardTitle,
CardSubtitle, NavLink } from 'reactstrap';


class VehicleBrowser extends React.Component{
    constructor(props){
        super(props);
    }

    render(){
        return (
            <div>
                <Container>
                    <Row>
                        <Col md={4}>
                            <Card>
                                <CardImg top width="100%" src={"/replaceme.png"} alt="replace me" />
                                <CardBody>
                                    <CardTitle>Model Year Model Name</CardTitle>
                                    <CardSubtitle>{"tagline here"}</CardSubtitle>
                                    <CardText>Start at {"$1"}</CardText>
                                    <NavLink>Details</NavLink>
                                    <NavLink>Build & Price</NavLink>
                                    <NavLink>Dealers Near You</NavLink>
                                </CardBody>
                            </Card>
                        </Col>
                    </Row>
                </Container>
            </div>
        );
    }
}

export default VehicleBrowser;