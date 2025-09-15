import React from "react";
import { useState } from "react";
import {
    Collapse,
    Navbar,
    NavbarToggler,
    NavbarBrand,
    Nav,
    NavItem,
    NavLink,
    UncontrolledDropdown,
    DropdownToggle,
    DropdownMenu,
    DropdownItem,
    NavbarText,
} from 'reactstrap';

function Header() {
    const [isOpen, setIsOpen] = useState(false);

    const toggle = () => setIsOpen(!isOpen);

    return (
        <>
            <Navbar
                fixed={"top"}
                full="true"
                expand="sm"
                className="shadow bg-white"
                style={{
                    borderTop: "5px solid #0D4470",
                }}>
                <NavbarBrand href="/">Vistara Senior Project</NavbarBrand>
                <NavbarToggler onClick={toggle} />
                <Collapse isOpen={isOpen} navbar style={{ justifyContent: "right" }}>
                    <Nav navbar>
                        <NavItem>
                            <NavLink href="/home/">Home</NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink href="/metrics/">Metrics</NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink href="/time">Time Logging</NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink href="/documentation/">Documentation</NavLink>
                        </NavItem>
                    </Nav>
                </Collapse>
            </Navbar>
            <Navbar
                full="true"
                expand="sm"
                className="shadow bg-white mb-3"
                style={{
                    borderTop: "5px solid #0D4470",
                    opacity: 0
                }}
                >
                <NavbarBrand href="/">Vistara Senior Project</NavbarBrand>
                <NavbarToggler onClick={toggle} />
                <Collapse isOpen={isOpen} navbar style={{ justifyContent: "right" }}>
                    <Nav navbar>
                        <NavItem>
                            <NavLink href="/#home/">Home</NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink href="/#metrics/">Metrics</NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink href="/#time">Time Logging</NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink href="/#documentation/">Documentation</NavLink>
                        </NavItem>
                    </Nav>
                </Collapse>
            </Navbar>  
        </>

    )
}

export default Header;