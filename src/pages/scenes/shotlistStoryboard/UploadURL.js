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
import { Alert, Image } from "react-bootstrap";
import { useHistory, useParams } from "react-router-dom";
import { axiosReq } from "../../../api/axiosDefaults";

const UploadURL = ({setNewURL, setScene }) => {
    const [errors, setErrors] = useState({});
    const [postData, setPostData] = useState({
        storyboard_url: "",
    })
    const {storyboard_url} = postData;

    const history = useHistory();
    const { id } = useParams();

    useEffect(() => {
        const handleMount = async () => {
          try {
            const { data } = await axiosReq.get(`/scenes/${id}/`);
            const { storyboard_url } = data;
     
        setPostData({ storyboard_url });
          } catch (err) {
            console.log(err);
          }
        };
    
        handleMount();
    }, [id]);

    const handleChange = (event) => {
        setPostData({
          ...postData,
          [event.target.name]: event.target.value,
        });
      };

    const handleSubmit = async (event) => {
        event.preventDefault();
        const formData = new FormData();

        formData.append("storyboard_url", storyboard_url);

        try {
            const data = await axiosReq.put(`/scenes/${id}/`, formData);
            console.log(data)
            setNewURL(false);
            /* Upload the scene state */
            setScene((prevScene) => ({
              ...prevScene,
              storyboard_url: data.storyboard_url,
            }));
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
            onClick={() => setNewURL(false)}
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
          ADD/CHANGE STORYBOARD URL
          <span className={`float-right ${styles.Close } pt-1`} 
                onClick={() => setNewURL(false) } >Close</span>
      </h5>
      </Col>
      </Row>
      <Form onSubmit={handleSubmit}>
        <Row>
        <Col className="py-2 p-0 p-md-2" >
          <Form.Group controlId="storyboard_url" className="mb-2" >
                <Form.Label className="p-1" >StoryBoard URL</Form.Label>
                <Form.Control 
                type="text"
                name="storyboard_url"
                value={storyboard_url}
                onChange={handleChange}
                    />
            </Form.Group>
            {errors?.storyboard_url?.map((message, idx) => (
              <Alert variant="warning" key={idx}>
                {message}
              </Alert>
            ))}
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
        <hr/>
        </Col>
        </Row>
    </div>
  )
}

export default UploadURL