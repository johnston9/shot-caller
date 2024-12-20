/* Component in IndexCard to edit an IndexCard */
import React, { useEffect, useState } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import styles from "../../styles/Indexes.module.css";
import btnStyles from "../../styles/Button.module.css";
import Alert from "react-bootstrap/Alert";
import { axiosReq } from "../../api/axiosDefaults";
import { toast } from 'react-toastify';

const IndexCardEdit = ({setShowEdit, setIndexCards, card, id} ) => {
  const [errors, setErrors] = useState({});
  const [postData, setPostData] = useState({
    number: "",
    story: "",
    style: "",
  });

  const { number, story, style } = postData;

  useEffect(() => {
    const handleMount = async () => {
      const { number, story, style } = card;
      setPostData({ number, story, style})
    };
  
    handleMount();
  }, [card]);

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
      toast.success(`Index Card "${number}" Updated`);
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
        className={`${btnStyles.Button} ${btnStyles.Blue} px-3 mr-3 `}
        onClick={() => setShowEdit(false)}
      >
        Cancel
      </Button>
      <Button className={`${btnStyles.Button} ${btnStyles.Blue} pl-3 px-3`} type="submit">
        Submit 
      </Button>
    </div>
  );

  return (
    <div className="mt-2">
    <div className= {`text-center mt-0 ${styles.Editbox}`} >
      <Form className="mt-0 mx-0 px-0" onSubmit={handleSubmit}>
      <h5 className={`text-center mb-0 py-0 ${styles.SubTitle }`}
             style={{ textTransform: 'uppercase'}}>Edit Index Card {number}
       </h5>
      <Row className="mt-1">
          <Col xs={{span: 6, offset: 3}} className="d-flex justify-content-center" >
          <Form.Group controlId="number" className={`${styles.Width2} text-center`}  >
                  <Form.Label className={`mt-1 ${styles.BoldScene }`}>Number</Form.Label>
                  <Form.Control 
                  className={` ${styles.Input}`}
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
      <Row className="mt-1">
        <Col xs={12} 
            className="p-0 d-flex justify-content-center">
            <Form.Group controlId="story" className={`${styles.Width90}  `} >
                        <Form.Label className={`mt-3 ${styles.BoldScene }`} >Story</Form.Label>
                        <Form.Control 
                        type="text"
                        className={`${styles.InputScene}`}
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
      </Row>
      <Row className="mt-1">
        <Col xs={12} 
            className="p-0 d-flex justify-content-center">
            <Form.Group controlId="style" className={`${styles.Width90} `} >
                        <Form.Label className={`mt-3 ${styles.BoldScene }`}>Style</Form.Label>
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
    </div>
    </div>
  )
}

export default IndexCardEdit