/* Form to upload the Scene Script to Media in DRF */
import React, { useRef, useState } from "react";
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
import { Alert } from "react-bootstrap";
import { useHistory } from "react-router-dom";
import { axiosReq } from "../../../api/axiosDefaults";
import { toast } from 'react-toastify';

const ScriptUpload = ({script1, number1, fileName1, id, setAddScript }) => {
    const [errors, setErrors] = useState({});
    const [fileName, setFileName] = useState(fileName1);
    const [postData, setPostData] = useState({
        script: script1,
        number: number1,
    })
    const {script, number} = postData;
    const scriptInput = useRef(null);

    const history = useHistory();

    const handleChangeScript = (event) => {
      if (event.target.files.length) {
        URL.revokeObjectURL(script);
        setPostData({
          ...postData,
          script: URL.createObjectURL(event.target.files[0]),
        });   
        setFileName(event.target.files[0].name);
        console.log(`script ${script}`)
      }
    };

      const handleSubmit = async (event) => {
        event.preventDefault();
        const formData = new FormData();

        formData.append("number", number);
        if (scriptInput.current.files[0]) {
            formData.append("script", scriptInput.current.files[0]); 
        }

        try {
            await axiosReq.put(`/scenes/${id}/`, formData);
            toast.success(`"${fileName}" Added`);
            history.push(`/scenes/${id}`);
        } catch (err) {
            console.log(err);
            if (err.response?.status !== 401) {
            setErrors(err.response?.data);
            }
        }
      }

      const buttons = (
        <div className="text-center">    
          <Button
            className={`${btnStyles.Button} ${btnStyles.Blue} px-3 px-md-5 mr-3`}
            onClick={() => setAddScript(false)}
          >
            Cancel
          </Button>
          <Button className={`${btnStyles.Button} ${btnStyles.Blue} px-3 px-md-5 ml-3`} 
            type="submit">
            Upload 
          </Button>
        </div>
      );

  return (
    <div>
      <Form onSubmit={handleSubmit}>
        <Row>
        <Col className="py-2 p-0 p-md-2" md={{span: 6, offset: 3} } >
            {/* script */}
            <Container
              className={`${appStyles.Content} ${styles.Container
            } d-flex flex-column justify-content-center`}
            >
              <Form.Group className="text-center pt-3">
                  {script ? (
                    <>  
                      <figure>
                        <iframe title="Script"
                         className={appStyles.iframe} src={script} />
                      </figure>
                      {fileName && <p>{fileName} </p> }
                      <div>
                        <Form.Label
                          className={`${btnStyles.Button} ${btnStyles.Blue} btn`}
                          htmlFor="script-upload"
                        >
                          Change the Script
                        </Form.Label>
                      </div>
                    </>
                  ) : (
                    <Form.Label
                      className="d-flex justify-content-center"
                      htmlFor="script-upload"
                    >
                      <Asset
                        src={Upload}
                        height={50}
                        width={50}
                        message="Upload Script"
                      />
                    </Form.Label>
                  )}
    
                  <Form.Control
                    type="file"
                    id="script-upload"
                    onChange={handleChangeScript}
                    ref={scriptInput}
                  />
                </Form.Group>
                {errors?.script?.map((message, idx) => (
                  <Alert variant="warning" key={idx}>
                    {message}
                  </Alert>
                ))}
            </Container>
          </Col>
        </Row>
        <Row>
          <Col className="text-center">
          <Container className= {`mt-3 ${styles.Container}`} >
            {buttons}</Container>
          </Col>
        </Row>
        </Form>
    </div>
  )
}

export default ScriptUpload