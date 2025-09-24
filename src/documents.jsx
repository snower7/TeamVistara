import { Container } from "reactstrap";
import Header from "./header";
import { useState, useEffect } from "react";
import Week1 from './assets/documents/4-ups/Week1.pdf';

function Document() {
    const [fourUps, setFourUps] = useState(import.meta.glob('./assets/documents/4-ups/*.pdf', {import: 'default', eager: true}))

    function renderFourUps() {
        console.log(fourUps);
        var list = []
        for (const [key, value] of Object.entries(fourUps)) {
            var dir = key.split('/');
            const stringdir = dir.filter((value) => value != ".").join("/")

            list.push(<li><a target="_blank" href={"/TeamVistara/src/" + stringdir}>{dir[dir.length-1]}</a></li>)
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