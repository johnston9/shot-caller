/* Component in the CallCast component to display the Callsheet 
   the extra cast info in mobile */
import React from 'react';
import { Col, Row } from 'react-bootstrap';
import styles from "../../../styles/Callsheets.module.css";

const CallCastInfoMob = (props) => {
    const { contact1, swf1, inst1, cast_number1,
        hmw1, on_set1} = props;

  return (
    <div>
        <Row className='text-center px-0 mx-0'>
        <Col className={`mx-0 px-0  ${styles.Border2}`} xs={2}>
        <p style={{ textTransform: 'uppercase' }} className={`mb-0 ${styles.TitleBox}`}>#</p>
            <p className='mb-0 py-2'>{cast_number1}</p>
        </Col>
        <Col className={`mx-0 px-0 ${styles.Border2}`} xs={4}>
          <p style={{ textTransform: 'uppercase' }} className={`mb-0 ${styles.TitleBox}`}>Contact</p>
          <p className={`mb-0 mx-0 py-2`}>{contact1}</p>                        
        </Col>
        <Col className={`mx-0 px-0 ${styles.Border2}`} xs={3}>
        <p style={{ textTransform: 'uppercase' }} className={`mb-0  text-center ${styles.TitleBox}`}>H/M/W</p>
            <p className='mb-0 py-2'>{hmw1}</p>
        </Col>  
        <Col className={`mx-0 px-0 ${styles.Border2}`} xs={3}>
        <p style={{ textTransform: 'uppercase' }} className={`mb-0  text-center ${styles.TitleBox}`}>Set</p>
            <p className='mb-0 py-2'>{on_set1}</p>
        </Col> 
        </Row>
        <Row className='text-center px-0 mx-0'>
            <Col className={`mx-0 px-0  ${styles.Border2}`} xs={2}>
            <p style={{ textTransform: 'uppercase' }} className={`mb-0 ${styles.TitleBox}`}>SWF</p>
            <p className='mb-0 py-2'>{swf1}</p>
            </Col>
            <Col className={`text-center mx-0 px-0 ${styles.Border2}`} xs={10}>
            <p style={{ textTransform: 'uppercase' }} className={`mb-0 ${styles.TitleBox}`}>Requirements</p>
            <p className={`mb-0 mx-0 py-2`}>{inst1}</p>
            </Col>             
        </Row>
    </div>
  )
}

export default CallCastInfoMob