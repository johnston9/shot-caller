import React, { useEffect, useState } from "react";

import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
import styles from "../../styles/Scene.module.css";
import appStyles from "../../App.module.css";
import btnStyles from "../../styles/Button.module.css";
import Alert from "react-bootstrap/Alert";

import { useHistory, useParams } from "react-router";
import { axiosReq } from "../../api/axiosDefaults";
import { useRedirect } from "../../hooks/Redirect";

const IndexCardEdit = ({setShowEdit, setIndexCards, card, id,} ) => {
    useRedirect("loggedOut");
  const [errors, setErrors] = useState({});
//   const [showInfo, setShowInfo] = useState(false);
  const [postData, setPostData] = useState({
    number: "",
    story: "",
    style: "",
  });

  const { number, story, style } = postData;

  const history = useHistory();

  useEffect(() => {
    const handleMount = async () => {
      const { number, story, style } = card;
      setPostData({ number, story, style})
    };
  
    handleMount();
  }, [id]);


  // useEffect(() => {
  //   const handleMount = async () => {
  //     try {
  //       const { data } = await axiosReq.get(`/indexcards/${id}/`);
  //       console.log(data);
  //       const { number, story, style } = data;
  //       setPostData({ number, story, style  });
  //     } catch (err) {
  //       console.log(err);
  //     }
  //   };
  
  //   handleMount();
  // }, [id]);

  const handleChange = (event) => {
    setPostData({
      ...postData,
      [event.target.name]: event.target.value,
    });
    console.log(event.target.value)
  };
  
  const handleSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData();

    formData.append("number", number);
    formData.append("story", story);
    formData.append("style", style);
  
    try {
      const {data} = await axiosReq.put(`/indexcards/${id}/`, formData);
      const {number, story, style} = data;
      setIndexCards((prevCards) => ({
        ...prevCards,
        results: prevCards.results.map((card) => {
          return card.id === id
            ? {
                ...card,
                number: number,
                story: story,
                style: style,
              }
            : card;
        }),
      }));
      setShowEdit(false);
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
        className={`${btnStyles.Button} ${btnStyles.Blue} `}
        onClick={() => setShowEdit(false)}
      >
        Cancel
      </Button>
      <Button className={`${btnStyles.Button} ${btnStyles.Blue} px-3`} type="submit">
        Edit 
      </Button>
    </div>
  );

  return (
    <div className="mt-1">
    <Container className= {`text-center mt-3 ${appStyles.Content} ${styles.Container}`} >
      <Form className="mt-0" onSubmit={handleSubmit}>
      <h5 className={`text-center mb-0 pl-3 py-0 mx-3 ${styles.SubTitle }`}
             style={{ textTransform: 'uppercase'}}>Edit Index Card {number} </h5>
      <Row>
          <Col xs={{span: 6, offset: 3}} className="d-flex justify-content-center" >
          <Form.Group controlId="number" className={`${styles.Width2} text-center`}  >
                  <Form.Label className={`${styles.Bold} `} >Number</Form.Label>
                  <Form.Control 
                  className={styles.Input}
                  type="text"
                  name="number"
                  value={number}
                  onChange={handleChange}
                      />
              </Form.Group>
              {errors?.number?.map((message, idx) => (
                <Alert variant="warning" key={idx}>
                  {message}
                </Alert>
              ))}
          </Col>
        </Row>
        <Row>
        <Col xs={12} 
            className="p-0 d-flex justify-content-center">
            <Form.Group controlId="story" className={`${styles.Width95} `} >
                        <Form.Label className={`${styles.Bold}`} >Story</Form.Label>
                        <Form.Control 
                        type="text"
                        className={styles.InputScene}
                        as="textarea"
                        name="story"
                        rows={2}
                        value={story}
                        onChange={handleChange}
                            />
                    </Form.Group>
                    {errors?.story?.map((message, idx) => (
                    <Alert variant="warning" key={idx}>
                        {message}
                    </Alert>
                    ))}
        </Col> 
        <Col xs={12} 
            className="p-0 d-flex justify-content-center">
            <Form.Group controlId="style" className={`${styles.Width95} `} >
                        <Form.Label className={`${styles.Bold}`} >Style</Form.Label>
                        <Form.Control 
                        type="text"
                        className={styles.InputScene}
                        as="textarea"
                        name="style"
                        rows={2}
                        value={style}
                        onChange={handleChange}
                            />
                    </Form.Group>
                    {errors?.style?.map((message, idx) => (
                    <Alert variant="warning" key={idx}>
                        {message}
                    </Alert>
                    ))}
        </Col> 
      </Row>
      <Row>
        <Col>
          <div className= {` my-3`} >{buttons} </div>
        </Col>
      </Row>
    </Form>
    </Container>
    </div>
  )
}

export default IndexCardEdit