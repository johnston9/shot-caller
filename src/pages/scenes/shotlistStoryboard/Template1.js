import React from 'react';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import styles from "../../../styles/Scene.module.css";
import appStyles from "../../../App.module.css";
import portrait6 from "../../../assets/storyboards/portrait6.pdf";

const Template1 = ({setOpen}) => {
  return (
    <div>
    <Row className="mt-2">
    <Col xs={12} className='text-center'>
    <h5 className={`mb-3 py-1 ${styles.SubTitle }`}>
    6 PANEL PORTRAIT
    <span className={`float-right ${styles.Close } pt-1`} 
                onClick={() => setOpen(false) } >Close</span>
    </h5>
    </Col>
    </Row>
    <div className={`${styles.Frame} mt-2`}>
    <iframe title="Storyboard Template 1" src={portrait6} 
    className={appStyles.iframeFull} alt="Storyboard Template 1"  />
    </div>
    </div>
  )
}

export default Template1