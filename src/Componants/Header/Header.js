import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import './Header.css'
const Header = () => {
    return (
        <div>
            <Navbar bg="dark" variant="dark">
                <Container>
                    <Navbar.Brand href="#home">TheCocktailDB</Navbar.Brand>
                    <Nav className="ms-auto d-flex justify-content-center align-items-center">
                        <NavLink className="text-white nav" to="/home" activeStyle={{
                            fontWeight: "bold",
                            color: "white",
                            backgroundColor: "#6c5ce7",
                            padding: "5px 10px"
                        }}>Home</NavLink>
                        <NavLink className="text-white nav" to="/details" activeStyle={{
                            fontWeight: "bold",
                            color: "white",
                            backgroundColor: "#6c5ce7",
                            padding: "5px 10px"
                        }}>Order</NavLink>
                        <NavLink className="text-white nav" to="/login" activeStyle={{
                            fontWeight: "bold",
                            color: "white",
                            backgroundColor: "#6c5ce7",
                            padding: "5px 10px"
                        }}>Account</NavLink>
                    </Nav>
                </Container>
            </Navbar>
        </div>
    );
};

export default Header;