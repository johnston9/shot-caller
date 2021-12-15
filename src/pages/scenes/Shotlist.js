import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'

const Shotlist = ({shotlist} ) => {
    return (
        <div>
            <Container>
            <Row>
                <Col xs={6} >
                    <h3>Shotlist</h3>
                    <p>{shotlist} </p>
                </Col>
            </Row>
            </Container>
        </div>
    )
}

export default Shotlist
