/* Info component on the Register page */
import React from 'react';
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import styles from "../../../styles/Callsheets.module.css";

const Info = () => {
  return (
    <div>
      <Row className='mb-3'>
            <Col className={`text-center px-3 pt-1 ${styles.SubTitle6 }`}
             md={{span: 10, offset: 1 }}>
        <p>Register users by:
            1: 
             </p>
        </Col>
      </Row>
    </div>
  )
}

export default Info