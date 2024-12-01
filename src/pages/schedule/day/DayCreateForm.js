/* Form Page to create a Day by giving it a number and date
npm install -D @types/react  */
import React, { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import styles from "../../../styles/PostCreateEditForm.module.css";
import btnStyles from "../../../styles/Button.module.css";
import { Alert} from "react-bootstrap";
import { useHistory } from "react-router-dom";
import { axiosReq } from "../../../api/axiosDefaults";
import TopBox from "../../../components/TopBox";
import { useRedirect } from "../../../hooks/Redirect";
import { toast } from 'react-toastify';

const DayCreateForm = () => {
    useRedirect();
  const [errors, setErrors] = useState({});
  const [startDate, setStartDate] = useState("");

  const [postData, setPostData] = useState({
    day: ""});
  const { day } = postData;

  const history = useHistory();
  // numeric

  const handleDate = (date) => {
    const newdate = date.toLocaleDateString('en-GB', {
      day: '2-digit', month: 'short', year: 'numeric'
    })
    setStartDate(newdate);
  }

  const handleChange = (event) => {
    setPostData({
      ...postData,
      [event.target.name]: event.target.value,
    });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData();

    formData.append("day", day);
    formData.append("date", startDate);
      
    try {
      await axiosReq.post("/days/", formData);
      toast.success(`Day "${day}" Created`);
      history.goBack();
    } catch (err) {
      console.log(err);
      if (err.response?.status !== 401) {
        setErrors(err.response?.data);
      }
    }
  }

  const buttons = (
    <div className="text-center mt-5">    
      <Button
        className={`${btnStyles.Button} ${btnStyles.Blue} px-sm-5 mr-3`}
        onClick={() => history.goBack()}
      >
        Cancel
      </Button>
      <Button className={`${btnStyles.Button} ${btnStyles.Blue} px-sm-5 ml-3`} type="submit">
        Create
      </Button>
    </div>
  );

  return (
    <div >
    <TopBox title="Create Day" />
    <Button
      className={`${btnStyles.Button} ${btnStyles.Blue} my-1`}
      onClick={() => history.goBack()}
      >
      Back
    </Button>
    <Row className="px-3">
    <Col xs={12} md={{span: 8, offset: 2 }} >
    <h5 className={`mt-1 text-center py-1 mb-0 ${styles.SubTitle }`}>
    Create Day</h5>
    <Form className={`${styles.White} px-3`} onSubmit={handleSubmit}>
    <Row className="text-center">
    <Col xs={6} className="pt-2 p-md-2 d-flex justify-content-center ">
        <Form.Group controlId="day" className={`${styles.Width2}`}>
            <Form.Label className={`${styles.BoldScene}`} >Day</Form.Label>
            <Form.Control 
            type="text"
            name="day"
            value={day}
            className={`${styles.Input}`}
            onChange={handleChange}
                />
        </Form.Group>
        {errors?.day?.map((message, idx) => (
            <Alert variant="warning" key={idx}>
            {message}
            </Alert>
        ))}
      </Col> 
    <Col xs={6} className="pt-2 p-md-2 d-flex justify-content-center">
    <Form.Group controlId="date" className={`${styles.Width2} text-center`} >
              <Form.Label className={`${styles.BoldScene}`}>Date</Form.Label>
              <DatePicker 
                className={`${styles.InputD}`}
                  value={startDate}
                onChange={(date) => handleDate(date) }
                />
          </Form.Group>
          {errors?.date?.map((message, idx) => (
            <Alert variant="warning" key={idx}>
              {message}
            </Alert>
          ))}
    </Col> 
    </Row>
    {/* buttons */}
    <Row>
        <Col>
        <div className="my-3" >{buttons} </div>
        </Col>
    </Row>
    </Form>
    <Row>
    <Col sm={2} className="d-none d-sm-block" >
    </Col> 
    <Col xs={12} sm={8} >
    <hr/>
    </Col>
    </Row>
    </Col>
    </Row>
    </div>
  );
}

export default DayCreateForm
