/* Component in the Callsheet component to display the Callsheet 
   Walkies info */
import React from 'react';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import styles from "../../../styles/Callsheets.module.css";

const WalkiesPage = (props ) => {
    const {callsheet, setShow} = props;

    const {walkie_channel_production,
        walkie_channel_open,
        walkie_channel_transportation,
        walkie_channel_art_dept,
        walkie_channel_rollover,
        walkie_channel_camera,
        walkie_channel_electric,
        walkie_channel_grip} = callsheet;
  return (
        <div className='mt-3 mb-5'>
            <div className='d-none d-md-block mt-5'>
                <h4 className={`mt-3 pl-3 py-0 px-1 ${styles.SubTitleSpan }`} 
                style={{ textTransform: 'uppercase' }}>Walkie Channels </h4>
            </div>
            <div className='d-block d-md-none'>
            <div className={`mt-0 mb-3 text-center ${styles.SubTitle }`}>
            <span className={`float-right ${styles.Close }`} onClick={() => setShow(false) } >Close</span> 
            <h5 className={`pl-5 text-center`} style={{ textTransform: 'uppercase'}} >Walkie Channels </h5>
            </div>
            </div>
            <hr className={`mb-0 pb-0 pl-3 mt-0 pt-0 ${styles.Break5 }`}/> 
            <Row className='px-md-3'>
                <Col md={3} xs={6} className={`${styles.Border2}`}>
                <Row>
                <Col xs={9} lg={6} >PRODUCTION:</Col>
                <Col xs={3} lg={6}>{walkie_channel_production}</Col>
                </Row>
                </Col>
                <Col md={3} xs={6} className={`${styles.Border2}`}>
                <Row>
                <Col xs={9} lg={6}>OPEN:</Col>
                <Col xs={3} lg={6}>{walkie_channel_open}</Col>
                </Row>
                </Col>
                <Col md={3} xs={6} className={`${styles.Border2}`}>
                <Row>
                <Col xs={9} lg={6}>ROLLOVER:</Col>
                <Col xs={3} lg={6}>{walkie_channel_rollover}</Col>
                </Row>
                </Col>
                <Col md={3} xs={6} className={`${styles.Border2}`}>
                <Row>
                <Col xs={9} lg={6}>TRANSPORT:</Col>
                <Col xs={3} lg={6}>{walkie_channel_transportation}</Col>
                </Row>
                </Col>
                <Col md={3} xs={6} className={`${styles.Border2}`}>
                <Row>
                <Col xs={9} lg={6}>ART DEPT:</Col>
                <Col xs={3} lg={6}>{walkie_channel_art_dept}</Col>
                </Row>
                </Col>
                <Col md={3} xs={6} className={`${styles.Border2}`}>
                <Row>
                <Col xs={9} lg={6}>CAMERA:</Col>
                <Col xs={3} lg={6}>{walkie_channel_camera}</Col>
                </Row>
                </Col>
                <Col md={3} xs={6} className={`${styles.Border2}`}>
                <Row>
                <Col xs={9} lg={6}>ELECTRIC:</Col>
                <Col xs={3} lg={6}>{walkie_channel_electric}</Col>
                </Row>
                </Col>
                <Col md={3} xs={6} className={`${styles.Border2}`}>
                <Row>
                <Col xs={9} lg={6}>GRIP:</Col>
                <Col xs={3} lg={6}>{walkie_channel_grip}</Col>
                </Row>
                </Col>
            </Row>
            <hr className={`mb-0 pl-3 mt-0 pt-1 ${styles.Break5 }`}/>
        </div>
  )
}

export default WalkiesPage