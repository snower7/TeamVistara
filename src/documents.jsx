import { Container } from "reactstrap";
import Header from "./header";
import { useState, useEffect } from "react";
function Document() {
    const [fourUps, setFourUps] = useState(import.meta.glob('/public/documents/4-ups/*.pdf', {import: 'default', eager: true}))

    function renderFourUps() {
        console.log(fourUps);
        var list = []
        for (const [key, value] of Object.entries(fourUps)) {
            var dir = key.split('/');
            const stringdir = dir.filter((value) => value != ".").join("/")

            list.push(<li><a target="_blank" href={"/TeamVistara/" + stringdir}>{dir[dir.length-1]}</a></li>)
        }
        return list
    }
    return (
        <>
            <Header />
            <Container className="h-100">
                <h2>Documentation</h2>
                <h3>4-ups</h3>
                <ul>
                    {renderFourUps()}
                </ul>
                <h3><a target="_blank" href={'/TeamVistara/documents/DomainModel.png'}>Domain Model</a></h3>
            </Container>
        </>
    )
}

export default Document;