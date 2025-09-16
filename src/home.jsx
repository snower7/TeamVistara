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
            return <Row className="text-md-end" key={value.name}>
                <h4 className="fw-semibold">{value.name}</h4>
                <h6>{value.title}</h6>
            </Row>
        })
        return cards;
    }

    return (
        <>
            <Header />
            <Container fluid style={{ width: "70%" }}>
                <Row md={7} style={{ margin: "30px 0px", padding: 0 }}>
                    <h1 className="display-3 ps-0 fw-bold">
                        Vistara
                    </h1>
                    <h1 className="fw-normal display-5 ps-0 text-muted">
                        Property Manager Web Application
                    </h1>
                </Row>
                <Row>
                    <Col md={8}>
                        <Row>
                            <h4>Project Description</h4>
                        </Row>
                        <Row>
                            <p>
                                Vistara is a web application where rental owners and tenants can go to manage and better their rental experience. Vistara aims to provide owners and tenants with greater renting experience by acting as a property manager and automating tedious processes (such as recurring payments) for both parties. Renters and property owners also are brought closer together with a consistent line of communication, so that any renter needs are fulfilled promptly.
                            </p>
                        </Row>
                    </Col>
                    <Col className="text-left">
                        {renderTitleCards()}
                    </Col>
                </Row>

            </Container >

        </>

    )
}

export default Home;