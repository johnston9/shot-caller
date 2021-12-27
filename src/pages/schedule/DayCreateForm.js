import React, { useRef, useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
import Asset from "../../components/Asset";

import Upload from "../../assets/upload.png";

import styles from "../../styles/PostCreateEditForm.module.css";
import appStyles from "../../App.module.css";
import btnStyles from "../../styles/Button.module.css";
import { Alert, Image } from "react-bootstrap";
import { useHistory } from "react-router";
import { axiosReq } from "../../api/axiosDefaults";
import TopBox from "../../components/TopBox";
import { useRedirect } from "../../hooks/Redirect";


const DayCreateForm = ({topbox} ) => {
    useRedirect("loggedOut")
  const [errors, setErrors] = useState({});
  const [startDate, setStartDate] = useState("");
  // const date = startDate.toLocaleDateString('en-GB', {
  //   day: 'numeric', month: 'short', year: 'numeric'
  // })
  // const date = startDate.toLocaleDateString('en-GB', {
  //   day: 'numeric', month: 'short', year: 'numeric'
  // }).replace(/ /g, '-');
  // const date = startDate.toLocaleDateString('en-GB', {
  //   day: '2-digit', month: 'short', year: 'numeric'
  // });
  // const date = startDate.parse().toLocaleDateString();
    const [postData, setPostData] = useState({
        day: "",
        // date: "",
        scene1: "",
        scene2: "",
        scene3: "",
        scene4: "",
        scene5: "",
        scene5: "",
        scene7: "",
        scene8: "",
        scene9: "",
        scene10: "",
        scene11: "",
        scene12: "",
        location1: "",
        location2: "",
        location3: "",
        location4: "",
        location5: "",
        location6: "",
      });
      const { day, scene1, scene2, scene3, scene4, scene5, scene6, 
        scene7, scene8, scene9, scene10, scene11, scene12, location1, location2,
        location3, location4, location5, location6, } = postData;

      const history = useHistory();

      const doit = (date) => {
        const newdate = date.toLocaleDateString();
        setStartDate(newdate);
      }
    
      const handleChange = (event) => {
        setPostData({
          ...postData,
          [event.target.name]: event.target.value,
        });
      };

  const handleSubmit = async (event) => {
    console.log(startDate)
    event.preventDefault();
    const formData = new FormData();

    formData.append("day", day);
    // formData.append("date", startDate);
    formData.append("scene1", scene1);
    formData.append("scene2", scene2);
    formData.append("scene3", scene3);
    formData.append("scene4", scene4);
    formData.append("scene5", scene5);
    formData.append("scene6", scene6);
    formData.append("scene7", scene7);
    formData.append("scene8", scene8);
    formData.append("scene9", scene9);
    formData.append("scene10", scene10);
    formData.append("scene11", scene11);
    formData.append("scene12", scene12);
    formData.append("location1", location1);
    formData.append("location2", location2);
    formData.append("location3", location3);
    formData.append("location4", location4);
    formData.append("location5", location5);
    formData.append("location6", location6);
      
    try {
      const { data } = await axiosReq.post("/days/", formData);
      console.log(data)
      history.push(`/days/`);
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
        onClick={() => history.goBack()}
      >
        cancel
      </Button>
      <Button className={`${btnStyles.Button} ${btnStyles.Blue}`} type="submit">
        create
      </Button>
    </div>
  );

  return (
    <div>
      {topbox ? (
        ""
      ) : (
        <TopBox title="Create Day" />
      ) }
    <Form onSubmit={handleSubmit}>
    <Row>
    <Col xs={6} className="p-0 p-md-2">
        <Form.Group controlId="day" className="mb-2" >
            <Form.Label className="p-1" >Day</Form.Label>
            <Form.Control 
            type="text"
            name="day"
            value={day}
            onChange={handleChange}
                />
        </Form.Group>
        {errors?.day?.map((message, idx) => (
            <Alert variant="warning" key={idx}>
            {message}
            </Alert>
        ))}
      </Col>
      <Col className="p-0 p-md-2" xs={6}>
      <Form.Group controlId="date" className="mb-2" >
                <Form.Label className="p-1" >Date</Form.Label>
                <DatePicker 
                   value={startDate}
                  // selected={startDate} 
                  // format={'dd/mm/yyyy'}
                  // onChange={(date) => setStartDate(date.toLocaleDateString('en-GB', {
                  //   day: 'numeric', month: 'short', year: 'numeric'
                  // }))} 
                  // onChange={(date) => setStartDate(date) } 
                  onSelect={(date) => doit(date) }
                  />
                {/* <Form.Control 
                type="date"
                name="date"
                value={date}
                onChange={handleChange}
                    /> */}
            </Form.Group>
            {errors?.date?.map((message, idx) => (
              <Alert variant="warning" key={idx}>
                {message}
              </Alert>
            ))}
      </Col>   
    </Row>
    <hr />
    {/* scenes */}
    <Row>
        <Col xs={6} md={3} lg={2}>          
            <Form.Group controlId="scene1" className="mb-2" >
                <Form.Label className="p-1" >Scene1</Form.Label>
                <Form.Control 
                type="text"
                name="scene1"
                value={scene1}
                onChange={handleChange}
                    />
            </Form.Group>
            {errors?.scene1?.map((message, idx) => (
              <Alert variant="warning" key={idx}>
                {message}
              </Alert>
            ))}
            </Col>
            <Col xs={6} md={3} lg={2}>
            <Form.Group controlId="scene2" className="mb-2" >
                <Form.Label className="p-1" >scene2</Form.Label>
                <Form.Control 
                type="text"
                name="scene2"
                value={scene2}
                onChange={handleChange}
                    />
            </Form.Group>
            {errors?.scene2?.map((message, idx) => (
              <Alert variant="warning" key={idx}>
                {message}
              </Alert>
            ))}
            </Col>
            <Col xs={6} md={3} lg={2}>
            <Form.Group controlId="scene3" className="mb-2" >
                <Form.Label className="p-1" >scene3</Form.Label>
                <Form.Control 
                type="text"
                name="scene3"
                value={scene3}
                onChange={handleChange}
                    />
            </Form.Group>
            {errors?.scene3?.map((message, idx) => (
              <Alert variant="warning" key={idx}>
                {message}
              </Alert>
            ))}
            </Col>
            <Col xs={6} md={3} lg={2}>
            <Form.Group controlId="scene4" className="mb-2" >
                <Form.Label className="p-1" >scene4</Form.Label>
                <Form.Control 
                type="text"
                name="scene4"
                value={scene4}
                onChange={handleChange}
                    />
            </Form.Group>
            {errors?.scene4?.map((message, idx) => (
              <Alert variant="warning" key={idx}>
                {message}
              </Alert>
            ))}
            </Col>
            <Col xs={6} md={3} lg={2}>
            <Form.Group controlId="scene5" className="mb-2" >
                <Form.Label className="p-1" >scene5</Form.Label>
                <Form.Control 
                type="text"
                name="scene5"
                value={scene5}
                onChange={handleChange}
                    />
            </Form.Group>
            {errors?.scene5?.map((message, idx) => (
              <Alert variant="warning" key={idx}>
                {message}
              </Alert>
            ))}
            </Col>
            <Col xs={6} md={3} lg={2}>
            <Form.Group controlId="scene6" className="mb-2" >
                <Form.Label className="p-1" >scene6</Form.Label>
                <Form.Control 
                type="text"
                name="scene6"
                value={scene6}
                onChange={handleChange}
                    />
            </Form.Group>
            {errors?.scene6?.map((message, idx) => (
              <Alert variant="warning" key={idx}>
                {message}
              </Alert>
            ))}
            </Col>
            <Col xs={6} md={3} lg={2}>
            <Form.Group controlId="scene7" className="mb-2" >
                <Form.Label className="p-1" >scene7</Form.Label>
                <Form.Control 
                type="text"
                name="scene7"
                value={scene7}
                onChange={handleChange}
                    />
            </Form.Group>
            {errors?.scene7?.map((message, idx) => (
              <Alert variant="warning" key={idx}>
                {message}
              </Alert>
            ))}
            </Col>
            <Col xs={6} md={3} lg={2}>
            <Form.Group controlId="scene8" className="mb-2" >
                <Form.Label className="p-1" >scene8</Form.Label>
                <Form.Control 
                type="text"
                name="scene8"
                value={scene8}
                onChange={handleChange}
                    />
            </Form.Group>
            {errors?.scene8?.map((message, idx) => (
              <Alert variant="warning" key={idx}>
                {message}
              </Alert>
            ))}
            </Col>
            <Col xs={6} md={3} lg={2}> 
            <Form.Group controlId="scene9" className="mb-2" >
                <Form.Label className="p-1" >scene9</Form.Label>
                <Form.Control 
                type="text"
                name="scene9"
                value={scene9}
                onChange={handleChange}
                    />
            </Form.Group>
            {errors?.scene9?.map((message, idx) => (
              <Alert variant="warning" key={idx}>
                {message}
              </Alert>
            ))}
            </Col>
            <Col xs={6} md={3} lg={2}>
            <Form.Group controlId="scene10" className="mb-2" >
                <Form.Label className="p-1" >scene10</Form.Label>
                <Form.Control 
                type="text"
                name="scene10"
                value={scene10}
                onChange={handleChange}
                    />
            </Form.Group>
            {errors?.scene10?.map((message, idx) => (
              <Alert variant="warning" key={idx}>
                {message}
              </Alert>
            ))}
        </Col>
        <Col xs={6} md={3} lg={2}>
            <Form.Group controlId="scene11" className="mb-2" >
                <Form.Label className="p-1" >scene11</Form.Label>
                <Form.Control 
                type="text"
                name="scene11"
                value={scene11}
                onChange={handleChange}
                    />
            </Form.Group>
            {errors?.scene11?.map((message, idx) => (
              <Alert variant="warning" key={idx}>
                {message}
              </Alert>
            ))}
            </Col>
            <Col xs={6} md={3} lg={2} > 
            <Form.Group controlId="scene12" className="mb-2" >
                <Form.Label className="p-1" >scene12</Form.Label>
                <Form.Control 
                type="text"
                name="scene12"
                value={scene12}
                onChange={handleChange}
                    />
            </Form.Group>
            {errors?.scene12?.map((message, idx) => (
              <Alert variant="warning" key={idx}>
                {message}
              </Alert>
            ))}
        </Col>
    </Row>
    <hr />
    {/* locations */}
    <Row>
        <Col xs={6} md={4} lg={2}>
            <Form.Group controlId="location1" className="mb-2" >
                <Form.Label className="p-1" >Location 1</Form.Label>
                <Form.Control 
                type="text"
                name="location1"
                value={location1}
                onChange={handleChange}
                    />
            </Form.Group>
            {errors?.location1?.map((message, idx) => (
              <Alert variant="warning" key={idx}>
                {message}
              </Alert>
            ))}
            </Col>
            <Col xs={6} md={4} lg={2}>
            <Form.Group controlId="location2" className="mb-2" >
                <Form.Label className="p-1" >location2</Form.Label>
                <Form.Control 
                type="text"
                name="location2"
                value={location2}
                onChange={handleChange}
                    />
            </Form.Group>
            {errors?.location2?.map((message, idx) => (
              <Alert variant="warning" key={idx}>
                {message}
              </Alert>
            ))}
            </Col>
            <Col xs={6} md={4} lg={2} >
            <Form.Group controlId="location3" className="mb-2" >
                <Form.Label className="p-1" >location3</Form.Label>
                <Form.Control 
                type="text"
                name="location3"
                value={location3}
                onChange={handleChange}
                    />
            </Form.Group>
            {errors?.location3?.map((message, idx) => (
              <Alert variant="warning" key={idx}>
                {message}
              </Alert>
            ))}
            </Col>
            <Col xs={6} md={4} lg={2}>
            <Form.Group controlId="location4" className="mb-2" >
                <Form.Label className="p-1" >location4</Form.Label>
                <Form.Control 
                    className={styles.Input}
                    type="text"
                    name="location4"
                    value={location4}
                    onChange={handleChange}
                    />
            </Form.Group>
            {errors?.location4?.map((message, idx) => (
              <Alert variant="warning" key={idx}>
                {message}
              </Alert>
            ))}
            </Col>
            <Col xs={6} md={4} lg={2}>
            <Form.Group controlId="location5" className="mb-2" >
                <Form.Label className="p-1" >location5</Form.Label>
                <Form.Control 
                    className={styles.Input}
                    type="text"
                    name="location5"
                    value={location5}
                    onChange={handleChange}
                    />
            </Form.Group>
            {errors?.location5?.map((message, idx) => (
              <Alert variant="warning" key={idx}>
                {message}
              </Alert>
            ))}
        </Col>
        <Col xs={6} md={4} lg={2}>
            <Form.Group controlId="location6" className="mb-2" >
                <Form.Label className="p-1" >location6</Form.Label>
                <Form.Control 
                    className={styles.Input}
                    type="text"
                    name="location6"
                    value={location6}
                    onChange={handleChange}
                    />
            </Form.Group>
            {errors?.location6?.map((message, idx) => (
              <Alert variant="warning" key={idx}>
                {message}
              </Alert>
            ))}
        </Col>
    </Row>
    {/* buttons */}
    <Row>
        <Col>
        <Container className= {`${styles.Container} mt-3`} >{buttons} </Container>
        </Col>
    </Row>
  </Form>
  </div>
  );
}

export default DayCreateForm
