import { Container } from "reactstrap";
import Header from "./header";
import { useState, useEffect } from "react";
function Document() {
    const [fourUps, setFourUps] = useState(import.meta.glob('/public/documents/4-ups/*.pdf', { import: 'default', eager: true }))

    function renderFourUps() {
        console.log(fourUps);
        var list = []
        var entries = Object.entries(fourUps)
        entries.sort((i, next) => {
            let iName = i[0].split('/').pop()
            let nextName = next[0].split('/').pop()
            return parseInt(iName.substring(4, iName.indexOf("."))) - parseInt(nextName.substring(4, nextName.indexOf("."))) 
        })
        for (const [key, value] of entries) {
            var dir = key.split('/');
            const stringdir = dir.filter((value) => value != "public").join("/")

            list.push(<li><a target="_blank" href={"/TeamVistara/" + stringdir}>{dir[dir.length - 1]}</a></li>)
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
                <h3>
                    <a target="_blank" href={'/TeamVistara/documents/DomainModel.png'}>
                        Domain Model
                    </a>
                </h3>
                <h3>
                    <a target="_blank" href={'/TeamVistara/documents/ArchitectureDiagram.png'}>
                        Architecture Diagram
                    </a>
                </h3>
                <h3>
                    <a target="_blank" href={'/TeamVistara/documents/DatabaseModel.png'}>
                        Database Model
                    </a>
                </h3>
            </Container>
        </>
    )
}

export default Document;