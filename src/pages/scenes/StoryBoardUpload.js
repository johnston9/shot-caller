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
import { useHistory, useParams } from "react-router-dom";
import { axiosReq } from "../../api/axiosDefaults";
import { useRedirect } from "../../hooks/Redirect";

const StoryBoardUpload = ({setAddStory, setScene, setNewStory, setShowstory }) => {
    useRedirect("loggedOut");
    const [errors, setErrors] = useState({});
    const [postData, setPostData] = useState({
        storyboard: "",
        number: "",
    })
    const {storyboard, number} = postData;
    const storyboardInput = useRef(null)

    const history = useHistory();
    const { id } = useParams();

    useEffect(() => {
        const handleMount = async () => {
          try {
            const { data } = await axiosReq.get(`/scenes/${id}/`);
            const { storyboard, number } = data;
     
        setPostData({ storyboard, number });
          } catch (err) {
            console.log(err);
          }
        };
    
        handleMount();
      }, [id]);

      const handleChangeStoryboard = (event) => {
        if (event.target.files.length) {
          URL.revokeObjectURL(storyboard);
          setPostData({
            ...postData,
            storyboard: URL.createObjectURL(event.target.files[0]),
          });
          
          setNewStory(URL.createObjectURL(event.target.files[0]))
          console.log(`storyboard ${storyboard}`)
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
            setAddStory(false);
            setScene((prevScene) => ({
              ...prevScene,
              storyboard: data.storyboard,
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
            onClick={() => setAddStory(false)}
          >
            Cancel
          </Button>
          <Button className={`${btnStyles.Button} ${btnStyles.Blue}`} type="submit">
            Apply
          </Button>
        </div>
      );

  return (
    <div>
      <Form onSubmit={handleSubmit}>
        <Row>
        <Col className="py-2 p-0 p-md-2" md={6}>
            {/* storyboard */}
            <Container
              className={`${appStyles.Content} ${styles.Container} d-flex flex-column justify-content-center`}
            >
              <Form.Group className="text-center pt-3">
                  {storyboard ? (
                    <>
                      <figure>
                        <Image className={appStyles.Image} src={storyboard} />
                      </figure>
                      <div>
                        <Form.Label
                          className={`${btnStyles.Button} ${btnStyles.Blue} btn`}
                          htmlFor="storyboard-upload"
                        >
                          Change the storyboard
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
                        message="Click or tap to upload a storyboard"
                      />
                    </Form.Label>
                  )}
    
                  <Form.Control
                    type="file"
                    id="storyboard-upload"
                    accept="image/*"
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
    </div>
  )
}

export default StoryBoardUpload