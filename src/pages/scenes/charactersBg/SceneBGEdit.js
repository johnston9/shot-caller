/* Component in the Background Component
   to edit the Scene Background items */ 
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


const BGEdit = ({handleMount, setShowEditForm, id}) => {
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
        const handleMount2 = async () => {
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

        handleMount2();
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
          setShowEditForm(false);
          toast.success(`BG "${role}" Updated`);
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
          <Button className={`${btnStyles.Button} ${btnStyles.Blue}`} type="submit">
            Submit
          </Button>
        </div>
      );

    return (
        <div className={`${styles.Back1} mt-2 px-2`}>
            <Form onSubmit={handleSubmit}>
            <Row className="pt-2">
          <Col className="d-flex justify-content-center mx-0 pr-0 pl-0" xs={2} >
            <Form.Group controlId="quantity" className={`${styles.Width2} `}  >
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
            <Col className="d-flex justify-content-center mx-0 px-0" xs={5} >
            <Form.Group controlId="role" >
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
            <Col className="d-flex justify-content-center mx-0 px-2" xs={5} >
            <Form.Group controlId="costume"  >
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

export default BGEdit