import React, { useEffect, useRef, useState } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
import Asset from "../../components/Asset";

import Upload from "../../assets/upload.png";
import styles from "../../styles/Scene.module.css";
import appStyles from "../../App.module.css";
import btnStyles from "../../styles/Button.module.css";
import { Alert, Image } from "react-bootstrap";
import { Link, useHistory, useParams } from "react-router-dom";
import { axiosReq } from "../../api/axiosDefaults";
import { useRedirect } from "../../hooks/Redirect";

const ScriptUpload = ({setAddScript, setScene, setNewScript, setShowScript }) => {
    useRedirect("loggedOut");
    const [errors, setErrors] = useState({});
    const [postData, setPostData] = useState({
        script: "",
        number: "",
    })
    const {script, number} = postData;
    const scriptInput = useRef(null)

    const history = useHistory();
    const { id } = useParams();

    useEffect(() => {
        const handleMount = async () => {
          try {
            const { data } = await axiosReq.get(`/scenes/${id}/`);
            const { script, number } = data;
     
        setPostData({ script, number });
          } catch (err) {
            console.log(err);
          }
        };
    
        handleMount();
      }, [id]);

      const handleChangeScript = (event) => {
        if (event.target.files.length) {
          URL.revokeObjectURL(script);
          setPostData({
            ...postData,
            script: URL.createObjectURL(event.target.files[0]),
          });
          
          // setNewScript(event.target.files[0])
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
            const data = await axiosReq.put(`/scenes/${id}/`, formData);
            console.log(data)
            setAddScript(false);
            setScene((prevScene) => ({
              ...prevScene,
              script: data.script,
            }));
            history.push(`/scenes/`);
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
            className={`${btnStyles.Button} ${btnStyles.Blue}`}
            onClick={() => setAddScript(false)}
          >
            Cancel
          </Button>
          <Button className={`${btnStyles.Button} ${btnStyles.Blue}`} 
            type="submit">
            Create 
          </Button>
        </div>
      );

  return (
    <div>
      <Form onSubmit={handleSubmit}>
        <Row>
        <Col className="py-2 p-0 p-md-2" md={6}>
            {/* script */}
            <Container
              className={`${appStyles.Content} ${styles.Container
            } d-flex flex-column justify-content-center`}
            >
              <Form.Group className="text-center pt-3">
                  {script ? (
                    <>
                      {/* <figure>
                        <Image className={appStyles.Image} src={image} />
                      </figure> */}
                      <p>File Path and Name: <span>{script}</span> </p>
                      {/* <div className='text-center'>
                          <Link to={{ pathname: image }} target="_blank" >
                            VIEW SCRIPT</Link>
                      </div> */}
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