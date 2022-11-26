import React, { useEffect, useState } from "react";

import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import styles from "../../styles/Scene.module.css";
import btnStyles from "../../styles/Button.module.css";
import Alert from "react-bootstrap/Alert";
import { axiosReq } from "../../api/axiosDefaults";
import { useRedirect } from "../../hooks/Redirect";

const SceneBGAdd = ({id}) => {
    useRedirect("loggedOut");
    console.log(id)
    const [errors, setErrors] = useState({});
    const [background, setBackground] = useState({results: [] });

    const [postData, setPostData] = useState({
        quantity: "",
        role: "",
        costume: "",
    });

    const { 
      quantity,
        role,
        costume,
    } = postData;

    const handleChange = (event) => {
        setPostData({
          ...postData,
          [event.target.name]: event.target.value,
        });
      };

    const clear = () => {
    setPostData({
    quantity: "",
    role: "",
    costume: ""
        })
        }

    useEffect(() => {
      const handleMount = async () => {
          try {
              const { data } = await axiosReq.get(`/scenebgs/?scene_id=${id}`)
              setBackground(data);
              console.log(data);
          } catch (err) {
              console.log(err);
            }
      }
      handleMount();
      }, [id])

    const handleSubmit = async (event) => {
      event.preventDefault();

      const formData = new FormData();
  
      formData.append("scene_id", id);
      formData.append("quantity", quantity);
      formData.append("role", role);
      formData.append("costume", costume);
    
      try {
        const {data} = await axiosReq.post("/scenebgs/", formData);
        console.log(data);
        setPostData({quantity: "",
                      role: "",
                      costume: "",
                    });
        setBackground((prevBackground) => ({
          ...prevBackground,
          results: [data, ...prevBackground.results],
        }));
      } catch (err) {
        console.log(err);
        if (err.response?.status !== 401) {
          setErrors(err.response?.data);
        }
      }
    }
    const buttons = (
      <div className="mb-2 text-center">    
        <Button
          className={`${btnStyles.Button} ${btnStyles.Blue} px-5 mr-4`}
          onClick={clear}
        >
          Cancel
        </Button>
        <Button className={`px-5 ml-4 ${btnStyles.Button} ${btnStyles.Blue}`} type="submit">
          Add Cast
        </Button>
      </div>
    );
    
  return (
    <div className={` ${styles.Back}`}>
      <h5 className={`text-center mb-0 py-0 ${styles.SubTitle }`} >ADD SCENE BG / STANDINGS</h5> 
      <div className={`mb-3 ${styles.Back3 }`}>
      <Form className="text-center" onSubmit={handleSubmit}>
        <Row className="py-2">
        <Col xs={12} md={6}>
        <p className={`text-center ml-md-2 pt-2 mb-0 ${styles.Bold }`}>
        BG ADDED
        </p>
        <div className={`ml-md-2 px-1 py-1 ${styles.CastEntered }`} >
          {background.results.length ? (
              background.results.map((bg) => (
                <span key={bg.id}>{bg.role}, </span>
              ))) : ("")}
          </div>
          </Col>
            <Col className="d-flex justify-content-center mx-0 px-1" xs={6} >
            <Form.Group controlId="quantity" className={`${styles.Width} `}  >
                  <Form.Label className={`${styles.Bold}`} >Quantity</Form.Label>
                  <Form.Control 
                  className={`${styles.Input}`} 
                  type="text"
                  name="quantity"
                  value={quantity}
                  onChange={handleChange}
                      />
              </Form.Group>
              {errors?.quantity?.map((message, idx) => (
                <Alert variant="warning" key={idx}>
                  {message}
                </Alert>
              ))}
              </Col>
        </Row>
          <Row className="my-2">
            <Col className="d-flex justify-content-center mx-0 px-1" xs={6} >
            <Form.Group controlId="role" className={`${styles.Width2} `}  >
                  <Form.Label className={`${styles.Bold}`} >Role</Form.Label>
                  <Form.Control 
                  className={`${styles.Input}`} 
                  type="text"
                  name="role"
                  value={role}
                  onChange={handleChange}
                      />
              </Form.Group>
              {errors?.role?.map((message, idx) => (
                <Alert variant="warning" key={idx}>
                  {message}
                </Alert>
              ))}
              </Col>
            <Col className="d-flex justify-content-center mx-0 px-1" xs={6} >
            <Form.Group controlId="costume" className={`${styles.Width2} `}  >
                  <Form.Label className={`${styles.Bold}`} >Costume</Form.Label>
                  <Form.Control 
                  className={`${styles.Input}`} 
                  type="text"
                  name="costume"
                  value={costume}
                  onChange={handleChange}
                      />
              </Form.Group>
              {errors?.costume?.map((message, idx) => (
                <Alert variant="warning" key={idx}>
                  {message}
                </Alert>
              ))}
              </Col>
          </Row>
        {/* buttons */}
        <Row>
          <Col className="text-center">
          <div className= {`mt-3 `} >{buttons}</div>
          </Col>
        </Row>
        </Form>
        </div>
    </div>
  )
}

export default SceneBGAdd