/* Info Component on the ScheduleDays component */
import React from 'react';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import styles from "../../styles/Callsheets.module.css";

const Info = () => {
  return (
    <div>
        <Row className='mb-3'>
            <Col className={`text-center px-3 pt-1 ${styles.SubTitle2 }`} md={{span: 10, offset: 1 }}>
            <p>
            View all the Shooting Days below or use the Calender or Search to find a
            specific Day. Click on the day to view the Stripboard.
            </p>
            <p>To create a Shooting Day click the tab below and add the Day Number making sure 
               a similar one does not already exist. Then select the Shooting date from the input box Calender.
            </p>
            <p>Click on the Day to view the Stripboard and find the Info on how to create it.

            </p>
            </Col>
        </Row>
    </div>
  )
}

export default Info