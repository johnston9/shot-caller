import React, { useState } from 'react';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import styles from "../../../styles/Scene.module.css";
import Button from 'react-bootstrap/Button';
import btnStyles from "../../../styles/Button.module.css";
import { Image } from "react-bootstrap";
import appStyles from "../../../App.module.css";
import template1 from "../../../assets/storyboards/template1.pdf";
import template2 from "../../../assets/storyboards/template2.pdf";
import Template1 from './Template1';
import Template2 from './Template2';
// iframe

const Templates = ({setTemplates}) => {
    const [open, setOpen] = useState(false);
    const [open2, setOpen2] = useState(false);

  return (
    <div>
    <Row className="mt-2">
    <Col xs={12} className='text-center'>
    <h5 className={`mb-3 py-1 ${styles.SubTitle }`}>
    STORYBOARD TEMPLATES
    <span className={`float-right ${styles.Close } pt-1`} 
                onClick={() => setTemplates(false) } >Close</span>
    </h5>
    </Col>
    </Row>
    <Row>
    <Col xs={6} className='text-center'>
    <p className='text-center'>
    Template One - 6 Panel
    </p>
    <figure>
    <iframe title="Template 1"
        className={appStyles.iframe} src={template1} />
    </figure>
    </Col>
    <Col xs={6} className='text-center'>
    <p className='text-center'>
    Template Two - 8 Panel
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
    className={`py-0 mt-1 ${btnStyles.Order} ${btnStyles.Button}`}
    onClick={() => setOpen(open => !open)} >OPEN
    </Button>
    </Col>
    <Col xs={6} className='text-center'>
    <Button
    className={` py-0 mt-1 ${btnStyles.Order} ${btnStyles.Button}`}
    onClick={() => setOpen2(open2 => !open2)} >OPEN
    </Button>
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
    <Col xs={2} ></Col>
    <Col xs={8}>
    <hr/>
    </Col>
    </Row>
    </div>
  )
}

export default Templates