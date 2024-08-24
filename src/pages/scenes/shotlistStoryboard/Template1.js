import React from 'react';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import styles from "../../../styles/Scene.module.css";
import btnStyles from "../../../styles/Button.module.css";
import appStyles from "../../../App.module.css";
import template1 from "../../../assets/storyboards/template1.pdf";

const Template1 = ({setOpen}) => {
  return (
    <div>
    <Row className="mt-2">
    <Col xs={12} className='text-center'>
    <h5 className={`mb-3 py-1 ${styles.SubTitle }`}>
    TEMPLATE ONE - 6 PANEL
    <span className={`float-right ${styles.Close } pt-1`} 
                onClick={() => setOpen(false) } >Close</span>
    </h5>
    </Col>
    </Row>
    <div className={`${styles.Frame} mt-2`}>
    <iframe title="Storyboard" src={template1} className={appStyles.iframeFull}
    alt="Storyboard"  />
    </div>
    <Row>
    <Col xs={2} ></Col>
    <Col xs={8}>
    <hr/>
    </Col>
    </Row>
    </div>
  )
}

export default Template1