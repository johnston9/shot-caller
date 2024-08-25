/* Component in the StoryBoard Component to
contain and upload the Storyboard URL */
import React, { useEffect, useRef, useState } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
import Asset from "../../../components/Asset";
import Upload from "../../../assets/upload.png";
import styles from "../../../styles/Scene.module.css";
import appStyles from "../../../App.module.css";
import btnStyles from "../../../styles/Button.module.css";
import { Alert, Image } from "react-bootstrap";
import UploadURL from "./UploadURL";

const StoryboardURL = ({setAddURL, setScene}) => {
  const [newURL, setNewURL] = useState(false);
  return (
    <div>
    <Row className="mt-2">
    <Col md={1} className='d-none d-md-block'></Col>
      <Col xs={12} md={10} className='text-center'>
    <h5 className={`mb-3 py-1 pl-5 ${styles.SubTitle }`}>
    STORYBOARD URL
    <span className={`float-right ${styles.Close } pt-1`} 
                onClick={() => setAddURL(false) } >Close</span>
    </h5>
    </Col>
    </Row>
    <Row>
    <Col md={{span: 6, offset: 3 }} className="text-center">
    <Container className={`${appStyles.Content} ${styles.Container} `}>
    <p>StoryBoard URL</p>
    <p>www...</p>
    <Button onClick={() => setNewURL(newURL => !newURL)} 
    className={`${btnStyles.Button}  ${btnStyles.Bright}`}>
    Add/Change URL
    </Button>
    {!newURL ?("") : (
            <UploadURL 
            setScene={setScene} 
            setNewURL={setNewURL} />  ) }
    </Container>
    </Col>
    </Row>
    </div>
  )
}

export default StoryboardURL