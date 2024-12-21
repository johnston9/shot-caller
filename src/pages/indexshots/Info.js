/* Info Component in SeriesPage */
import React from 'react';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import styles from "../../styles/Callsheets.module.css";

const Info = () => {
  return (
    <div>
        <Row className='mb-3'>
            <Col className={`text-center px-3 pt-1 ${styles.SubTitle2 }`} md={{span: 10, offset: 1 }}>
            <p>Create an Index Shot Series then open it and add Images.</p>
            <p> Preview and explore style and action choices
              storyboard a sequence in detail.
           </p>
            </Col>
        </Row>
    </div>
  )
}

export default Info