import React, { useEffect, useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

import styles from "../../styles/PostCreateEditForm.module.css";
import btnStyles from "../../styles/Button.module.css";
import { Alert } from "react-bootstrap";
import { useHistory, useParams } from "react-router";
import { axiosReq } from "../../api/axiosDefaults";
import TopBox from "../../components/TopBox";
import { useRedirect } from "../../hooks/Redirect";

const DayEdit = () => {
    useRedirect("loggedOut")
  const [errors, setErrors] = useState({});
  const [startDate, setStartDate] = useState("");
    const [postData, setPostData] = useState({
        day: "",
        crewcall: "",
        scene1: "",
        scene2: "",
        scene3: "",
        scene4: "",
        scene5: "",
        scene6: "",
        scene7: "",
        scene8: "",
        scene9: "",
        scene10: "",
        scene11: "",
        scene12: "",
        xtra_scenes: "",
        location1: "",
      });
      const { day, crewcall, scene1, scene2, scene3, scene4, scene5, scene6, 
        scene7, scene8, scene9, scene10, scene11, scene12, location1,
         xtra_scenes} = postData;

      const history = useHistory();
      const { id } = useParams();

      useEffect(() => {
        const handleMount = async () => {
          try {
            const { data } = await axiosReq.get(`/days/${id}/`);
            const { day, date, scene1, scene2, scene3, scene4, scene5, scene6, 
                scene7, scene8, scene9, scene10, scene11, scene12, location1, 
                xtra_scenes } = data;
     
            setPostData({ day, scene1, scene2, scene3, scene4, scene5, scene6, 
                scene7, scene8, scene9, scene10, scene11, scene12, location1, 
                xtra_scenes });
            setStartDate(date);
          } catch (err) {
            console.log(err);
          }
        };
    
        handleMount();
      }, [id]);

      const handleDate = (date) => {
        const newdate = date.toLocaleDateString('en-GB', {
          day: 'numeric', month: 'short', year: 'numeric'
        })
        setStartDate(newdate);
        console.log(`start ${startDate}`)
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
    formData.append("xtra_scenes", xtra_scenes);
    formData.append("location1", location1);
      
    try {
      await axiosReq.put(`/days/${id}/`, formData);
      history.goBack();
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
        Edit
      </Button>
    </div>
  );

  return (
    <div>
        <TopBox title="Edit Day" />
        <Button onClick={() => history.goBack()}
          className={`${btnStyles.Button} ${btnStyles.Blue} my-2`}
      >
          Back
      </Button>
        <Form className={`${styles.Back} mt-4 mb-3 text-center`} onSubmit={handleSubmit}>
      <h3 className="text-center mt-3">Edit Day</h3>
      <p className={` mb-0 py-1 ${styles.SubTitle }`}></p>
    <Row>
    <Col xs={6} className="p-0 p-md-2 d-flex justify-content-center ">
        <Form.Group controlId="day" className={`${styles.Width} `} >
            <Form.Label className={`${styles.Bold}`} >Day</Form.Label>
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
      <Col className="p-0 p-md-2" xs={6}>
      <Form.Group controlId="date"  >
                <Form.Label className={`${styles.Bold}`} >Date</Form.Label>
                <DatePicker 
                  className={`${styles.Input}`}
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
    {/* crewcall */}
    <h5 className="text-center mt-3"> Add crewcall when scheduling is finalized</h5>
    <p className={` mb-0 py-1 ${styles.SubTitle }`}></p>
    <Row className="text-center">
      <Col xs={6} className="d-flex justify-content-center p-0 p-md-2">
        <Form.Group controlId="crewcall" className={`${styles.Width} `}  >
            <Form.Label className={`${styles.Bold}`} >Time</Form.Label>
            <Form.Control 
            className={`${styles.Input}`}
            type="text"
            name="crewcall"
            value={crewcall}
            onChange={handleChange}
                />
        </Form.Group>
        {errors?.crewcall?.map((message, idx) => (
            <Alert variant="warning" key={idx}>
            {message}
            </Alert>
        ))}
      </Col>
      <Col xs={6} className="d-flex justify-content-center p-0 p-md-2" >
            <Form.Group controlId="location1" className={`${styles.Width} `}  >
                <Form.Label className={`${styles.Bold}`} >Location 1</Form.Label>
                <Form.Control 
                type="text"
                className={`${styles.Input}`}
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
    </Row>
    {/* scenes */}
    <h5 className="text-center mt-3">Add scene and location</h5>
    <p className={` mb-0 py-1 ${styles.SubTitle }`}></p>
    <p className="text-center mt-1">e.g. "7 - Imperial Hotel" </p>
    <Row className="text-center" >
        <Col xs={6} md={4}>          
            <Form.Group controlId="scene1" className={`px-1 px-md-2`} >
                <Form.Label className={`${styles.Bold}`} >Scene 1</Form.Label>
                <Form.Control 
                className={`${styles.Input}`}
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
        <Col xs={6} md={4}>
        <Form.Group controlId="scene2" className={`px-1 px-md-2`} >
            <Form.Label className={`${styles.Bold}`}>Scene 2</Form.Label>
            <Form.Control 
            className={`${styles.Input}`}
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
        <Col xs={6} md={4}>
        <Form.Group controlId="scene3" className={`px-1 px-md-2`} >
            <Form.Label className={`${styles.Bold}`} >Scene 3</Form.Label>
            <Form.Control 
            className={`${styles.Input}`}
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
        <Col xs={6} md={4}>
        <Form.Group controlId="scene4" className={`px-1 px-md-2`} >
            <Form.Label className={`${styles.Bold}`} >Scene 4</Form.Label>
            <Form.Control 
            className={`${styles.Input}`}
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
        <Col xs={6} md={4}>
        <Form.Group controlId="scene5" className={`px-1 px-md-2`} >
            <Form.Label className={`${styles.Bold}`} >Scene 5</Form.Label>
            <Form.Control 
            className={`${styles.Input}`}
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
        <Col xs={6} md={4}>
        <Form.Group controlId="scene6" className={`px-1 px-md-2`} >
            <Form.Label className={`${styles.Bold}`} >Scene 6</Form.Label>
            <Form.Control 
            className={`${styles.Input}`}
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
        <Col xs={6} md={4}>
        <Form.Group controlId="scene7" className={`px-1 px-md-2`} >
            <Form.Label className={`${styles.Bold}`} >Scene 7</Form.Label>
            <Form.Control 
            className={`${styles.Input}`}
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
        <Col xs={6} md={4}>
        <Form.Group controlId="scene8" className={`px-1 px-md-2`} >
            <Form.Label className={`${styles.Bold}`} >Scene 8</Form.Label>
            <Form.Control 
            className={`${styles.Input}`}
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
        <Col xs={6} md={4}> 
        <Form.Group controlId="scene9" className={`px-1 px-md-2`} >
            <Form.Label className={`${styles.Bold}`} >Scene 9</Form.Label>
            <Form.Control 
            className={`${styles.Input}`}
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
        <Col xs={6} md={4}>
        <Form.Group controlId="scene10" className={`px-1 px-md-2`} >
            <Form.Label className={`${styles.Bold}`} >Scene 10</Form.Label>
            <Form.Control 
            className={`${styles.Input}`}
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
        <Col xs={6} md={4}>
            <Form.Group controlId="scene11" className={`px-1 px-md-2`} >
                <Form.Label className={`${styles.Bold}`} >Scene 11</Form.Label>
                <Form.Control 
                className={`${styles.Input}`}
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
        <Col xs={6} md={4} > 
            <Form.Group controlId="scene12" className={`px-1 px-md-2`} >
                <Form.Label className={`${styles.Bold}`} >Scene 12</Form.Label>
                <Form.Control 
                className={`${styles.Input}`}
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
    <Row className="text-center">
      <Col xs={{ span: 10, offset: 1 }} md={{ span: 8, offset: 2 }} >
      <Form.Group controlId="xtra_scenes" className="mb-2" >
                <Form.Label className={`${styles.Bold}`} >Xtra Scenes </Form.Label>
                <Form.Control 
                className={`${styles.Input}`}
                type="text"
                name="xtra_scenes"
                value={xtra_scenes}
                onChange={handleChange}
                    />
            </Form.Group>
            {errors?.xtra_scenes?.map((message, idx) => (
              <Alert variant="warning" key={idx}>
                {message}
              </Alert>
            ))}
      </Col>
    </Row>
    {/* buttons */}
    <Row>
        <Col>
        <div className= {` my-3`} >{buttons} </div>
        </Col>
    </Row>
  </Form>
  </div>
  );
}

export default DayEdit
