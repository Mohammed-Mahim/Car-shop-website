import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import './Banner.css'

const Banner = () => {
    return (
    <Container className="bg-pic my-5">
        <Row >
            <Col sm={12} md={8} className="my-5 ">
                <h1 className=" text-style text-danger">POWER & BEAUTY</h1>
                <p className="w-50 mx-auto text-muted fw-bolder">Free Library’s $1M auto archives are moving to Philly’s world-famous car museum and to a Hershey attraction</p>
                <button className="btn btn-danger">Discover Today</button>
            </Col>
            <Col sm={12} md={4}>
            
                <img className="img-fluid rounded" src="https://images.unsplash.com/photo-1494976388531-d1058494cdd8?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=870&q=80" alt="" />
            </Col>
        </Row>
    </Container>
    );
};

export default Banner;

