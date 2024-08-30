/* Component in the StoryBoard Component to upload the Storyboard  */
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
import { Alert } from "react-bootstrap";
import { useHistory } from "react-router-dom";
import { axiosReq } from "../../../api/axiosDefaults";

const StoryBoardUpload = ({storyboard1, number1, fileName1, id, setAddStory }) => {
    const [errors, setErrors] = useState({});
    const [fileName, setFileName] = useState(fileName1);
    const [postData, setPostData] = useState({
        storyboard: storyboard1,
        number: number1,
    })
    const {storyboard, number} = postData;
    const storyboardInput = useRef(null);

    const history = useHistory();

    const handleChangeStoryboard = (event) => {
      if (event.target.files.length) {
        URL.revokeObjectURL(storyboard);
        setPostData({
          ...postData,
          storyboard: URL.createObjectURL(event.target.files[0]),
        });
        setFileName(event.target.files[0].name);
      }
    };

      const handleSubmit = async (event) => {
        event.preventDefault();
        const formData = new FormData();

        formData.append("number", number);
        if (storyboardInput.current.files[0]) {
            formData.append("storyboard", storyboardInput.current.files[0]); 
        }

        try {
            const data = await axiosReq.put(`/scenes/${id}/`, formData);
            console.log(data)
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
            className={`${btnStyles.Button} ${btnStyles.Blue}`}
            onClick={() => setAddStory(false)}
          >
            Cancel
          </Button>
          <Button className={`${btnStyles.Button} ${btnStyles.Blue}`} type="submit">
            Upload
          </Button>
        </div>
      );

  return (
    <div className='mt-3'>
      <Row >
      <Col md={1} className='d-none d-md-block'></Col>
      <Col xs={12} md={10} className='text-center'>
      <h5 className={`mb-2 py-1 pl-5 ${styles.SubTitle }`}>
          ADD STORYBOARD
          <span className={`float-right ${styles.Close } pt-1`} 
                onClick={() => setAddStory(false) } >Close</span>
      </h5>
      </Col>
      </Row>
      <Form onSubmit={handleSubmit}>
        <Row>
        <Col className="py-2 p-0 p-md-2" md={{span: 6, offset: 3 }}>
            {/* storyboard */}
            <Container className={`${appStyles.Content} ${styles.Container} 
              d-flex flex-column justify-content-center`}>
              <Form.Group className="text-center pt-3">
                  {storyboard ? (
                    <>
                      <figure>
                      <iframe title="storyboard" alt="storyboard"
                       className={appStyles.iframe} src={storyboard} />
                      </figure>
                      {fileName && <p>{fileName} </p> }
                      <div>
                        <Form.Label
                          className={`${btnStyles.Button} ${btnStyles.Blue} btn`}
                          htmlFor="storyboard-upload"
                        >
                          Change Storyboard
                        </Form.Label>
                      </div>
                    </>
                  ) : (
                    <Form.Label
                      className="d-flex justify-content-center"
                      htmlFor="storyboard-upload"
                    >
                      <Asset
                        src={Upload}
                        height={50}
                        width={50}
                        message="Upload Storyboard"
                      />
                    </Form.Label>
                  )}
    
                  <Form.Control
                    type="file"
                    id="storyboard-upload"
                    onChange={handleChangeStoryboard}
                    ref={storyboardInput}
                  />
                </Form.Group>
                {errors?.storyboard?.map((message, idx) => (
                  <Alert variant="warning" key={idx}>
                    {message}
                  </Alert>
                ))}
                </Container>
          </Col>
        </Row>
        <Row>
          <Col className="text-center">
          <Container className= {`mt-3 ${styles.Container}`} >{buttons}</Container>
          </Col>
        </Row>
        </Form>
        <Row>
        <Col xs={2} ></Col>
        <Col xs={8}>
        <hr className={`${styles.Break1}`}/>
        </Col>
        </Row>
    </div>
  )
}

export default StoryBoardUpload