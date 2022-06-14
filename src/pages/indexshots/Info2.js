import React from 'react';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import styles from "../../styles/Callsheets.module.css";

const Info2 = () => {
  return (
    <div>
        <Row className='mb-3'>
            <Col className={`text-center px-3 pt-1 ${styles.SubTitle2 }`} md={{span: 8, offset: 2 }}>
            <p>Add shots to a series from the top or botton "Add Shot"
              buttons. Each shot can be edited from it's edit button.
           </p>
            </Col>
        </Row>
    </div>
  )
}

export default Info2