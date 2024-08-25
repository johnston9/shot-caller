/* Templates Component */
import React, { useState } from 'react';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Container from "react-bootstrap/Container";
import styles from "../../../styles/Scene.module.css";
import Button from 'react-bootstrap/Button';
import btnStyles from "../../../styles/Button.module.css";
import appStyles from "../../../App.module.css";
import template1 from "../../../assets/storyboards/template1.pdf";
import template2 from "../../../assets/storyboards/template2.pdf";
import Template1 from './Template1';
import Template2 from './Template2';
// iframe

const Templates = ({setTemplates}) => {
    const [open, setOpen] = useState(false);
    const [open2, setOpen2] = useState(false);
// display: inline-block; className={`${styles.Back }`} 
  return (
    <div className='mt-3'>
    <Row>
    <Col md={1} className='d-none d-md-block'></Col>
    <Col xs={12} md={10} >
    <Row >
    <Col xs={12} className='text-center'>
    <h5 className={`mb-3 py-1 pl-5 ${styles.SubTitle }`} >
     TEMPLATES
    <span className={`float-right ${styles.Close } pt-1`} 
                onClick={() => setTemplates(false) } >Close</span>
    </h5>
    </Col>
    </Row>
    <Container
    className={`${appStyles.Content} ${styles.Container} mt-2 `}>
    <Row>
    <Col xs={6} className='text-center'>
    <p className={`${styles.Bold } pb-1`}>
    TEMPLATE ONE - 6 PANEL
    </p>
    <figure>
    <iframe title="Template 1"
        className={appStyles.iframe} src={template1} />
    </figure>
    </Col>
    <Col xs={6} className='text-center'>
    <p className={`${styles.Bold } pb-1`}>
    TEMPLATE TWO - 8 PANEL
    </p>
    <figure>
    <iframe title="Template 2"
        className={appStyles.iframe} src={template2} />
    </figure>
    </Col>
    </Row>
    <Row>
    <Col xs={6} className='text-center'>
    <Button
    className={`py-0 mt-1 ${btnStyles.Bright} ${btnStyles.Button}`}
    onClick={() => setOpen(open => !open)} >OPEN
    </Button>
    </Col>
    <Col xs={6} className='text-center'>
    <Button
    className={` py-0 mt-1 ${btnStyles.Bright} ${btnStyles.Button}`}
    onClick={() => setOpen2(open2 => !open2)} >OPEN
    </Button>
    </Col>
    </Row>
    </Container>
    </Col>
    </Row>
    {!open ? (
    ""
        ) : (
            <Template1  
            setOpen={setOpen}
            /> 
            ) } 
    {!open2 ? (
    ""
        ) : (
            <Template2
            setOpen2={setOpen2}
            /> 
            ) } 
    <Row>
    <Col md={2}></Col>
    <Col md={8} >
    <hr className={`${styles.Break1}`}/>
    </Col>
    </Row>
    </div>
  )
}

export default Templates