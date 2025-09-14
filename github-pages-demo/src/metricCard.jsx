import React from "react";
import { Card, CardBody, CardSubtitle, CardTitle, Modal, ModalBody, ModalHeader, Button } from "reactstrap";
import { useState } from "react";

function MetricCard(props) {
    const [loaded, setLoaded] = useState(false);
    const url = "/Week" + props.week + "/" + props.name + ".png";
    const [open, setOpen] = useState(false)

    const toggle = () => setOpen(!open);

    function render() {
        if (!loaded) {
            return (
                <CardSubtitle tag="h6"
                    className="text-muted fw-normal">
                    Not Available
                </CardSubtitle>
            )
        }
    }

    return (
        <>
            <Card className="py-3 px-4 my-1">
                <CardTitle tag="h4">
                    {props.name}
                </CardTitle>
                {render()}
                <img
                    style={loaded ? {} : { display: 'none' }}
                    src={url}
                    onLoad={() => setLoaded(true)}
                    onError={() => setLoaded(false)}
                    onClick={toggle}
                />
            </Card>
            <Modal className="modal-xl align-middle" isOpen={open} centered toggle={toggle}
                style={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                }}>
                
                <ModalBody className="d-flex justify-content-center">
                    <button type="button" className="me-0 ms-auto btn-close btn-close-white p-2" aria-label="Close" onClick={toggle}></button>
                    <img className="w-100 p-2" src={url} />
                </ModalBody>
            </Modal>
        </>

    )
}

export default MetricCard;