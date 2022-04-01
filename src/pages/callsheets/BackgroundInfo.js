import React from 'react';
import { useRedirect } from '../../hooks/Redirect';
import { Col, Row } from 'react-bootstrap';
import styles from "../../styles/Callsheets.module.css";

const BaclgroundInfo = (props) => {
    useRedirect("loggedOut");
    const { scenes, set, costumes } = props
  return (
    <div>
        <Row className='text-center px-0 mx-0'>
          <Col className={`mx-0 px-0 ${styles.Border}`} xs={4}>
          <p style={{ textTransform: 'uppercase' }} className={` mb-0 ${styles.TitleBox}`}>Set</p>
          <p className={`mb-0 mx-0 px-0 px-md-3`}>{set}</p>                        
          </Col>
          <Col className={`mx-0 px-0 ${styles.Border}`} xs={4}>
          <p style={{ textTransform: 'uppercase' }} className={` mb-0 ${styles.TitleBox}`}>Scenes</p>
          <p className={`mb-0 mx-0 px-0 px-md-3`}>{scenes}</p>                        
          </Col>
          <Col className={`text-center mx-0 px-0 ${styles.Border}`} xs={6}>
          <p style={{ textTransform: 'uppercase' }} className={` mb-0  ${styles.TitleBox}`}>Costumes</p>
          <p className={`mb-0 mx-0 px-0 px-md-3 `}>{costumes}</p>
          </Col>               
      </Row>
    </div>
  )
}

export default BaclgroundInfo