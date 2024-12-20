/* Component in the Character Component
   to edit the Scene characters */ 
import React, { useEffect, useState } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import styles from "../../../styles/Scene.module.css";
import btnStyles from "../../../styles/Button.module.css";
import Alert from "react-bootstrap/Alert";
import { axiosReq } from "../../../api/axiosDefaults";
import { toast } from 'react-toastify';

const CharacterEdit = ({ setShowEditForm, handleMount, id}) => {
    const [errors, setErrors] = useState({});
    const [postData, setPostData] = useState({
        scene_id: "",
        cast_number: "",
        role: "",
        costume: "",
    });

    const { 
        scene_id,
        cast_number,
        role,
        costume,
    } = postData;

    const handleMount2 = async () => {
      try {
        const { data } = await axiosReq.get(`/scenecharacters/${id}/`);
        console.log(data)
        const { scene_id, cast_number, role, costume } = data;
 
        setPostData({
            scene_id,
            cast_number,
            role,
            costume,});
        } catch (err) {
            console.log(err);
        }
    };

    useEffect(() => {
        handleMount2();
      // eslint-disable-next-line
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
        formData.append("cast_number", cast_number);
        formData.append("role", role);
        formData.append("costume", costume);
      
        try {
          const { data } = await axiosReq.put(`/scenecharacters/${id}/`, formData);
          console.log(data)
          handleMount();
          toast.success(`"${role}'s" Costume Updated`);
          setShowEditForm(false);
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
            Submit
          </Button>
        </div>
      );

    return (
        <div className={`${styles.Back1} mx-0 px-0 mt-2 mb-3 pt-2`}>
        <Form onSubmit={handleSubmit}>
        <Row className="">
        <Col className="px-0" xs={6} >
        <p className={`text-center mb-0 ${styles.Bold}`}>
         Add/Edit Costume
        </p>
        </Col>
        <Col className="d-flex justify-content-center mx-0 px-1" xs={6} >
        <Form.Group controlId="costume" className={`${styles.Width} ml-2 `}  >
              {/* <Form.Label className={`${styles.Bold}`} ></Form.Label> */}
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
        </div>
    )
}

export default CharacterEdit