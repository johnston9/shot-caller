import React from 'react';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import styles from "../../../styles/Scene.module.css";
import appStyles from "../../../App.module.css";
import landscape6 from "../../../assets/storyboards/landscape6.pdf";

const Template3 = ({setOpen3}) => {
  return (
    <div>
    <Row className="mt-2">
    <Col xs={12} className='text-center'>
    <h5 className={`mb-3 py-1 ${styles.SubTitle }`}>
    6 PANEL LANDSCAPE
    <span className={`float-right ${styles.Close } pt-1`} 
                onClick={() => setOpen3(false) } >Close</span>
    </h5>
    </Col>
    </Row>
    <div className={`${styles.Frame} mt-2`}>
    <iframe title="Storyboard Template 3" src={landscape6} 
    className={appStyles.iframeFull} alt="Storyboard Template 3"  />
    </div>
    </div>
  )
}

export default Template3