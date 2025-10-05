/* Info Component in IndexShots Page */
import React from 'react';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import styles from "../../styles/Callsheets.module.css";

const Info2 = () => {
  return (
    <div>
        <Row className='mb-3'>
            <Col className={`text-center px-3 pt-1 ${styles.SubTitle2 }`} md={{span: 8, offset: 2 }}>
            <p>Add shots to the series from the "Add Shot"
              buttons on the top and botton of the page.</p>
              <p>Click on a Shot to view it Full Size.</p>
            </Col>
        </Row>
    </div>
  )
}

export default Info2