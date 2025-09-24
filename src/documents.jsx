import { Container } from "reactstrap";
import Header from "./header";
import { useState, useEffect } from "react";

function Document() {
    const [fourUps, setFourUps] = useState(import.meta.glob('/public/documents/4-ups/*.pdf', {import: 'default', eager: true}))

    function renderFourUps() {
        var list = []
        for (const [key, value] of Object.entries(fourUps)) {
            var dir = key.split('/');
            const stringdir = dir.filter((value) => value !== "public").join("/")

            list.push(<li><a href={"/TeamVistara" + stringdir}>{dir[dir.length-1]}</a></li>)
        }
        return list
    }
    return (
        <>
            <Header />
            <Container className="h-100">
                <p>4-ups</p>
                <ul>
                    {renderFourUps()}
                </ul>
            </Container>
        </>
    )
}

export default Document;