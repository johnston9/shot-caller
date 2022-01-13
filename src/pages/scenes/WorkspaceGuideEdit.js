import React, { useRef, useState, useEffect} from "react";

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
import { useHistory } from "react-router";
import { axiosReq, axiosRes } from "../../api/axiosDefaults";
import TopBox from "../../components/TopBox";
import { useRedirect } from "../../hooks/Redirect";

const WorkspaceGuideEdit = ({setShowGuideEdit, setScene, id, number }) => {
    useRedirect("loggedOut")
    const [errors, setErrors] = useState({});

    const [postData, setPostData] = useState({
        workspace_guide: "",
    })
    const {workspace_guide } = postData;

    const history = useHistory()
    
    const handleChange = (event) => {
    setPostData({
        ...postData,
        [event.target.name]: event.target.value,
    });
    };

    const handleSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData();

    formData.append("number", number);
    formData.append("workspace_guide", workspace_guide);
    try {
        const {data} = await axiosReq.put(`/scenes/${id}/`, formData);
        console.log(data)
        setShowGuideEdit(false);
        // setScene(data);
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
            onClick={() => setShowGuideEdit(false) }
          >
            Cancel
          </Button>
          <Button className={`${btnStyles.Button} ${btnStyles.Blue}`} type="submit">
            Create
          </Button>
        </div>
      );
    return (
        <div className={`p-3 mb-3 ${styles.Guide}`}>
            {/* workspace guide */}
            <h5 className="mb-2 text-center">Edit Workspace Guide</h5>
            <Form onSubmit={handleSubmit}>
            <Row>
                <Col xs={1}></Col>
              <Col xs={10}>
            <Form.Group controlId="workspace_guide" className="mb-2" >
                <Form.Label className="p-1 d-none" >Workspace Guide</Form.Label>
                <Form.Control 
                    className={styles.Input}
                    type="text"
                    placeholder="Workspace Guide"
                    className={styles.InputScene}
                    name="workspace_guide"
                    as="textarea"
                    rows={6}
                    value={workspace_guide}
                    onChange={handleChange}
                    />
            </Form.Group>
            {errors?.workspace_guide?.map((message, idx) => (
              <Alert variant="warning" key={idx}>
                {message}
              </Alert>
            ))}
            </Col>
        </Row>  
        <Row>
            <Col>
            {buttons} 
            </Col>
        </Row>    
        </Form>     
    </div>
    )
}

export default WorkspaceGuideEdit
