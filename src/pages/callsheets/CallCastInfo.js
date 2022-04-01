import React from 'react';
import { useRedirect } from '../../hooks/Redirect';
import { Col, Row } from 'react-bootstrap';
import styles from "../../styles/Callsheets.module.css";

const CallCastInfo = (props) => {
    useRedirect("loggedOut");
    const { contact1, inst1 } = props
  return (
    <div>
        <Row className='text-center px-0 mx-0'>
          <Col className={`mx-0 px-0 ${styles.Border}`} xs={4}>
          <p style={{ textTransform: 'uppercase' }} className={` mb-0 ${styles.TitleBox}`}>Contact</p>
          <p className={`mb-0 mx-0 px-0 px-md-3`}>{contact1}</p>                        
          </Col>
          <Col className={`text-center mx-0 px-0 ${styles.Border}`} xs={8}>
          <p style={{ textTransform: 'uppercase' }} className={` mb-0  ${styles.TitleBox}`}>Instructions</p>
          <p className={`mb-0 mx-0 px-0 px-md-3 `}>{inst1}</p>
          </Col>               
      </Row>
    </div>
  )
}

export default CallCastInfo