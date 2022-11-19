import React from "react";
import { Container, Row, Col } from 'react-bootstrap';


import kitchenNightmares from "../img/kitchen-nightmares.jpg";
import masterChef from "../img/masterchef.jpg";
import hellsKitchen from "../img/hells-kitchen.jpg";

export default function Gallery() {
    return (
        <div class="center">            
            <h1 class="framed">Gallery</h1>
            <Row>
                <Container fluid>
                    <Row>
                    <Col xs={6} md={2}>
                        <img src={kitchenNightmares} alt={"Kitchen Nightmares poster"}width={250} height={400}/>
                    </Col>
                    <Col xs={6} md={2}>
                        <img src={masterChef} alt={"Master Chef poster"} width={250} height={400}/>
                    </Col>
                    <Col xs={6} md={2}>
                        <img src={hellsKitchen} alt={"Hells Kitchen poster"}width={250} height={400}/>
                    </Col>
                    </Row>
                </Container>
            </Row>
        </div>
    );
};