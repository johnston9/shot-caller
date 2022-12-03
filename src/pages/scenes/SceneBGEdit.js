import React, { useEffect, useRef, useState } from "react";

import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";

import Upload from "../../assets/upload.png";
import styles from "../../styles/Scene.module.css";
import appStyles from "../../App.module.css";
import btnStyles from "../../styles/Button.module.css";
import Image from "react-bootstrap/Image";
import Alert from "react-bootstrap/Alert";
import { axiosReq } from "../../api/axiosDefaults";
import { useRedirect } from "../../hooks/Redirect";
import Asset2 from "../../components/Asset2";

const BGEdit = ({handleMount, setShowEditForm, back, id}) => {
    useRedirect("loggedOut")
    const [errors, setErrors] = useState({});
    const [postData, setPostData] = useState({
      scene_id: "",
      quantity: "",
      role: "",
      costume: "",
    });

    const { 
        scene_id,
        quantity,
        role,
        costume,
    } = postData;

    useEffect(() => {
        const handleMount = async () => {
          try {
            const { data } = await axiosReq.get(`/scenebgs/${id}/`);
            console.log(data)
            const { 
              scene_id,
              quantity,
              role,
              costume, } = data;
     
            setPostData({
              scene_id,
              quantity,
              role,
              costume,});
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
    
        formData.append("scene_id", scene_id);
        formData.append("quantity", quantity);
        formData.append("role", role);
        formData.append("costume", costume);
      
        try {
          const { data } = await axiosReq.put(`/scenebgs/${id}/`, formData);
          setShowEditForm(false)
          console.log(data)
          handleMount();
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
            onClick={() => setShowEditForm((showEditForm) => !showEditForm)}
          >
            Cancel
          </Button>
          <Button className={`${btnStyles.Button} ${btnStyles.Blue} px-3`} type="submit">
            Edit
          </Button>
        </div>
      );

    return (
        <div className={`${styles.ShotInfo} px-5`}>
            <Form className={`${styles.ShotEditForm}`} onSubmit={handleSubmit}>
            <Row className="py-2">
          <Col className="d-flex justify-content-center mx-0 px-1" xs={2} >
            <Form.Group controlId="quantity" className={`${styles.Width} `}  >
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
            <Col className="d-flex justify-content-center mx-0 px-1" xs={5} >
            <Form.Group controlId="role" className={`${styles.Width2} `}  >
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
            <Col className="d-flex justify-content-center mx-0 px-1" xs={5} >
            <Form.Group controlId="costume" className={`${styles.Width2} `}  >
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
        <Row>
          <Col className="my-3 text-center">
          {buttons}
          </Col>
        </Row>
        </Form>
        <hr className={styles.Blackish}/>
        </div>
    )
}

export default BGEdit