import Header from "./header";
import { Container, Row, Dropdown, DropdownItem, DropdownToggle, DropdownMenu, Col } from "reactstrap";
import { useState, useEffect } from "react";
import axios from 'axios';
import Pie from "./pie";
import HoursTable from "./table";

function TimeLog() {
    const [csvData, setCsvData] = useState([]);
    const [displayData, setDisplayData] = useState(csvData);
    const [weeks, setWeeks] = useState([]);

    useEffect(() => {
        fetchCSVData();
    }, []);

    const fetchCSVData = () => {
        const csvUrl = 'https://docs.google.com/spreadsheets/d/e/2PACX-1vTjVSj2PhNyUIcuHbtreoe3BBYWokBfl4wYtZIWLaCl2OqegohXeuw5sIGwjD7g3vcBYPjaFNuNdta8/pub?output=csv'; // Replace with your Google Sheets CSV file URL
        axios.get(csvUrl)
            .then((response) => {
                const data = parseCSV(response.data)
                setCsvData(data)
                setDisplayData(data)
                fetchWeeks(data)
            })
            .catch((error) => {
                // Handle errors
            });
    }

    function weekFromDate(date) {
        return Math.floor((date - new Date("9/2/2025")) / (1000 * 60 * 60 * 24 * 7));
    }

    const fetchWeeks = (data) => {
        var w = new Set();
        for (var i = 0; i < data.length; i++) {
            const cw = weekFromDate(new Date(data[i]["Date"])) + 2;
            w.add(cw)
        }
        setWeeks([...w]);
    }

    function parseCSV(csvText) {
        const rows = csvText.split(/\r?\n/); // Split CSV text into rows, handling '\r' characters
        const headers = rows[0].split(','); // Extract headers (assumes the first row is the header row)
        const data = []; // Initialize an array to store parsed data
        for (let i = 1; i < rows.length; i++) {
            const rowData = rows[i].split(','); // Split the row, handling '\r' characters
            const rowObject = {};
            for (let j = 0; j < headers.length; j++) {
                rowObject[headers[j]] = rowData[j];
            }
            data.push(rowObject);
        }
        return data;
    }

    const [dropdownOpen, setDropdownOpen] = useState(false);

    const toggle = () => setDropdownOpen((prevState) => !prevState);

    const [onWeek, setOnWeek] = useState(0);

    function handleChange(week) {
        setOnWeek(week);
        if (week == 0) {
            setDisplayData(csvData);
        }
        else {
            setDisplayData(csvData.filter((value) =>
                weekFromDate(new Date(value['Date'])) == (week - 2)
            ))
        }
    }


    function renderOptions() {
        return weeks.map((value) => {
            return <DropdownItem onClick={() => handleChange(value)}>Week {value}</DropdownItem>
        })
    }

    return (
        <>
            <Header />
            <Container fluid className="position-relative justify-content-center px-5">
                <Row>
                    <h2>Time Log</h2>
                    <Dropdown isOpen={dropdownOpen} toggle={toggle} direction="down">
                        <DropdownToggle caret>{onWeek == 0 ? "All" : "Week " + onWeek}</DropdownToggle>
                        <DropdownMenu>
                            <DropdownItem onClick={() => handleChange(0)}>All</DropdownItem>
                            {renderOptions()}
                        </DropdownMenu>
                    </Dropdown>
                </Row>
                <Row className="p-4">
                    <Col>
                        <HoursTable data={displayData} />
                    </Col>
                    <Col>
                        <Pie data={displayData} />
                    </Col>
                </Row>
            </Container>
        </>
    )
}

export default TimeLog;