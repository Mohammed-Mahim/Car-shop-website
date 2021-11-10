import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Navigation = () => {
    return (
        <>
            <Navbar bg="dark" variant="dark" sticky="top">
                <Container>
                <Navbar.Brand>Car Logo</Navbar.Brand>
                <Nav className="me-auto">
                <Nav.Link>
                    <Link to="/home">Home</Link>
                    
                </Nav.Link>
                <Nav.Link>
                    <Link to="/explore">Explore</Link>
                    
                </Nav.Link>
                
                
                </Nav>
                </Container>
            </Navbar>
            </>
    );
};

export default Navigation;