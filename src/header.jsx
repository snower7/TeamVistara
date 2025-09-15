import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
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
                <Link className="navbar-brand" to="/">Vistara Senior Project</Link>
                <NavbarToggler onClick={toggle} />
                <Collapse isOpen={isOpen} navbar style={{ justifyContent: "right" }}>
                    <Nav navbar>
                        <NavItem>
                            <Link className="nav-link" to="/home/">Home</Link>
                        </NavItem>
                        <NavItem>
                            <Link className="nav-link" to="/metrics/">Metrics</Link>
                        </NavItem>
                        <NavItem>
                            <Link className="nav-link" to="/time">Time Logging</Link>
                        </NavItem>
                        <NavItem>
                            <Link className="nav-link" to="/documentation/">Documentation</Link>
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
                            <Link href="#TeamVistara/#home/">Home</Link>
                        </NavItem>
                        <NavItem>
                            <NavLink href="#TeamVistara/#metrics/">Metrics</NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink href="#TeamVistara/#time">Time Logging</NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink href="#TeamVistara/#documentation/">Documentation</NavLink>
                        </NavItem>
                    </Nav>
                </Collapse>
            </Navbar>  
        </>

    )
}

export default Header;