import React from "react";
import Header from "./header";
import { Col, Container, Row } from "reactstrap";
import { renderMatches } from "react-router-dom";

const people = [{
    name: "Trevor Borden",
    title: "Sponsor"
}, {
    name: "Dimitry Lukyanov",
    title: "Coach"
}, {
    name: "Snow Li",
    title: "Project Manager"
}, {
    name: "Dan Donchuk",
    title: "Backlog Manager"
}, {
    name: "Grahith Movve",
    title: "Database Manager"
}, {
    name: "Matt Zhang",
    title: "Communications Lead"
}, {
    name: "Tzsfai Choy",
    title: "Title"
}];

function Home() {

    function renderTitleCards() {
        const cards = people.map((value) => {
            return <Row>
                <h4 style={{ fontWeight: "600" }}>{value.name}</h4>
                <h6>{value.title}</h6>
            </Row>
        })
        console.log(cards);
        return cards;
    }

    return (
        <>
            <Header />
            <Container fluid style={{ width: "70%" }}>
                <Row style={{ margin: "30px 0px", padding: 0 }}>
                    <h1 style={{ fontSize: "64px", fontWeight: "bold", padding: 0 }}>Vistara - Property Manager Web Application</h1>
                </Row>
                <Row>
                    <Col md={8}>
                        <Row>
                            <h4>Project Description</h4>
                        </Row>
                        <Row>
                            <p>
                                Lorem ipsum dolor sit amet consectetur adipiscing elit. Quisque faucibus ex sapien vitae pellentesque sem placerat. In id cursus mi pretium tellus duis convallis. Tempus leo eu aenean sed diam urna tempor. Pulvinar vivamus fringilla lacus nec metus bibendum egestas. Iaculis massa nisl malesuada lacinia integer nunc posuere. Ut hendrerit semper vel class aptent taciti sociosqu. Ad litora torquent per conubia nostra inceptos himenaeos.
                            </p>
                            <p>
                                Lorem ipsum dolor sit amet consectetur adipiscing elit. Quisque faucibus ex sapien vitae pellentesque sem placerat. In id cursus mi pretium tellus duis convallis. Tempus leo eu aenean sed diam urna tempor. Pulvinar vivamus fringilla lacus nec metus bibendum egestas. Iaculis massa nisl malesuada lacinia integer nunc posuere. Ut hendrerit semper vel class aptent taciti sociosqu. Ad litora torquent per conubia nostra inceptos himenaeos.
                            </p>
                        </Row>
                    </Col>
                    <Col style={{ textAlign: "right" }}>
                        {renderTitleCards()}
                    </Col>
                </Row>

            </Container>

        </>

    )
}

export default Home;