import React from 'react';
import { useRedirect } from '../../hooks/Redirect';
import { Col, Row } from 'react-bootstrap';
import styles from "../../styles/Callsheets.module.css";

const BackgroundInfo = (props) => {
    useRedirect("loggedOut");
    const { scenes1, set1, costumes1 } = props
  return (
    <div>
        <Row className='text-center px-0 mx-0'>
          <Col className={`mx-0 px-0 ${styles.Border}`} xs={2}>
          <p style={{ textTransform: 'uppercase' }} className={`py-0 mb-0 ${styles.TitleBox}`}>Set</p>
          <p className={`mb-0 mx-0 py-2`}>{set1}</p>                        
          </Col>
          <Col className={`mx-0 px-0 ${styles.Border}`} xs={4}>
          <p style={{ textTransform: 'uppercase' }} className={` mb-0 ${styles.TitleBox}`}>Scenes</p>
          <p className={`mb-0 mx-0 py-2`}>{scenes1}</p>                        
          </Col>
          <Col className={`text-center mx-0 px-0 ${styles.Border}`} xs={6}>
          <p style={{ textTransform: 'uppercase' }} className={` mb-0  ${styles.TitleBox}`}>Costumes</p>
          <p className={`mb-0 mx-0 py-2 `}>{costumes1}</p>
          </Col>               
      </Row>
    </div>
  )
}

export default BackgroundInfo