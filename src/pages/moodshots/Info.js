import React from 'react';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import styles from "../../styles/Callsheets.module.css";

const Info = () => {
  return (
    <div>
        <Row className='mb-3'>
            <Col className={`text-center px-3 pt-1 ${styles.SubTitle2 }`} md={{span: 10, offset: 1 }}>
            <p>Create Moodshots for Scenes, Locations and Characters here 
            or from that element's page. Each Moodshot may be solely for 
            one element or can be for two or all elements and will be
            located in all element's pages referenced.
            Moodshots for other elements can be created by entering
            it in the title leaving the others blank. 
           </p>
            </Col>
        </Row>
    </div>
  )
}

export default Info