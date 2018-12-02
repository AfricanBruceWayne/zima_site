import React from 'react';
import { Card, Button, CardTitle, CardText, Row, Col } from 'reactstrap';

const Service = (props) => {
    return (
        <Row>
            <Col sm="6">
                <Card body>
                <CardTitle>Web Design</CardTitle>
                <CardText>Beautifully created, static sites for displaying information such as your business contact details, location or business hours etc.</CardText>
                </Card>
            </Col>
            <Col sm="6">
                <Card body>
                <CardTitle>Web App Development</CardTitle>
                <CardText>Dynamic, powerful web pages where users can interact with the site by posting messages, signing-up and post.</CardText>
                </Card>
            </Col>
            <Col sm="6">
            <Card body>
                <CardTitle>Web Maintence</CardTitle>
                <CardText>Upkeeping the health of your web pages traffic ensuring up-to-date content and modernized tools.</CardText>
                </Card>
            </Col>
        </Row>
    );
};

export default Service;