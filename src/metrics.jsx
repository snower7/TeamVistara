import { useState } from "react";
import { Col, Container, Dropdown, DropdownItem, DropdownMenu, DropdownToggle, Row } from 'reactstrap';
import Header from "./header";
import MetricCard from "./metricCard";

function Metrics() {
    const [dropdownOpen, setDropdownOpen] = useState(false);

    const toggle = () => setDropdownOpen((prevState) => !prevState);

    const weeks = [3, 4]

    const [onWeek, setOnWeek] = useState(weeks[0]);
    
    function renderOptions() {
        return weeks.map((value) => {
            return <DropdownItem onClick={() => setOnWeek(value)}>Week {value}</DropdownItem>
        })
    }

    function loadImage(name) {
        let loaded = false;

        return (
            <img
                style={loaded ? {} : { display: 'none' }}
                src={"/Week" + 3 + "/" + "CC" + ".png"}
                onLoad={() => loaded = true}
            />
        )
    }

    return (
        <>
            <Header />
            <Container fluid className="position-relative justify-content-center px-5">
                <Row>
                    <h2>Metrics</h2>
                    <Dropdown isOpen={dropdownOpen} toggle={toggle} direction="down">
                        <DropdownToggle caret>Week {onWeek}</DropdownToggle>
                        <DropdownMenu>
                            {renderOptions()}
                        </DropdownMenu>
                    </Dropdown>
                </Row>
                <Row>
                    <Col xs={11} md={6} className="px-md-3">
                        <Row>
                            <MetricCard week={onWeek} name="Test Coverage" />
                        </Row>
                        <Row>
                            <MetricCard week={onWeek} name="Velocity" />
                        </Row>
                    </Col>
                    <Col xs={11} md={6} className="px-md-3">
                        <Row>
                            <MetricCard week={onWeek} name="Lead Time" />
                        </Row>
                        <Row>
                            <MetricCard week={onWeek} name="Cumulative Flow" />
                        </Row>
                    </Col>
                </Row>
            </Container>

        </>
    )
}

export default Metrics;