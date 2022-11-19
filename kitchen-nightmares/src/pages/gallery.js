import React from "react";
import { Container, Row, Col } from 'react-bootstrap';


import kitchenNightmares from "../img/kitchen-nightmares.jpg";
import masterChef from "../img/masterchef.jpg";
import hellsKitchen from "../img/hells-kitchen.jpg";

export default function Gallery() {
    return (
        <>
            <h1>Gallery</h1>
            <Row>
                <Container fluid>
                    <Row>
                    <Col xs={6} md={2}>
                        <img src={kitchenNightmares} width={250} height={400}/>
                    </Col>
                    <Col xs={6} md={2}>
                        <img source={masterChef} width={250} height={400}/>
                    </Col>
                    <Col xs={6} md={2}>
                        <img src={hellsKitchen} width={250} tall={400}/>
                    </Col>
                    </Row>
                </Container>
            </Row>
        </>
    );
};