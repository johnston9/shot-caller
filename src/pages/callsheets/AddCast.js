import React, { useEffect, useState } from "react";

import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import styles from "../../styles/Callsheets.module.css";
import btnStyles from "../../styles/Button.module.css";
import Alert from "react-bootstrap/Alert";

import { useHistory, useParams } from "react-router";
import { axiosReq } from "../../api/axiosDefaults";
import { useRedirect } from "../../hooks/Redirect";

const AddCast = ({setShowAddCast, dataDay, dataDate}) => {
    useRedirect("loggedOut");
    const { id } = useParams();
    const [errors, setErrors] = useState({});
    const [cast, setCast] = useState({results: [] });

    const [postData, setPostData] = useState({
        cast_number: "",
        role: "",
        artist: "",
        contact: "",
        swf: "",
        pickup: "",
        call: "",
        hmw: "",
        on_set: "",
        inst: "",
    });

    const { 
        cast_number,
        role,
        artist,
        contact,
        swf,
        pickup,
        call,
        hmw,
        on_set,
        inst,
    } = postData;

    const history = useHistory();

    const handleChange = (event) => {
        setPostData({
          ...postData,
          [event.target.name]: event.target.value,
        });
      };

    useEffect(() => {
      const handleMount = async () => {
          try {
              const { data } = await axiosReq.get(`/castcalls/?day_id=${id}`)
              setCast(data);
          } catch (err) {
              console.log(err);
            }
      }
      handleMount();
      }, [id])

    const handleSubmit = async (event) => {
      event.preventDefault();

      const formData = new FormData();
  
      formData.append("day_id", id);
      formData.append("day", dataDay);
      formData.append("date", dataDate);
      formData.append("cast_number", cast_number);
      formData.append("role", role);
      formData.append("artist", artist);
      formData.append("contact", contact);
      formData.append("swf", swf);
      formData.append("pickup", pickup);
      formData.append("call", call);
      formData.append("hmw", hmw);
      formData.append("on_set", on_set);
      formData.append("inst", inst);
    
      try {
        const { data } = await axiosReq.post("/castcalls/", formData);
        setShowAddCast((showAddCast) => !showAddCast)
      //   setShotlist((prevShotlist) => ({
      //     ...prevShotlist,
      //     results: [data, ...prevShotlist.results],
      //   }));
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
          onClick={() => setShowAddCast(showAddCast => !showAddCast)}
        >
          Cancel
        </Button>
        <Button className={`px-4 ${btnStyles.Button} ${btnStyles.Blue}`} type="submit">
          Add
        </Button>
      </div>
    );

  return (
    <div className="my-3">
      <h3 className={`text-center my-2 py-0 mx-5  ${styles.SubTitle }`} >ADD CHARACTERS</h3> 
      <p className="text-center">Enter each cast member from their first scheduled scene</p>
      <p className="text-center mb-0">Cast Added</p>
      <Row className="mt-0 pt-0">
        <Col sm={{span: 8, offset: 2} }>
        <div className={` my-2 py-1 ${styles.CastEntered }`} >
          {cast.results.length ? (
              cast.results.map((ca) => (
                <spam key={ca.id}>{ca.role} </spam>
              ))) : ("")}
          </div>
          </Col>
      </Row>
      <Form className="text-center" onSubmit={handleSubmit}>
            {/* role artist contact inst*/}
        <Row className="mx-0">
            <Col className="mx-0 "  xs={3}>
            <Form.Group controlId="role" className={`${styles.Width} `}  >
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
            <Col className="mx-0 px-1"  xs={3}>
            <Form.Group controlId="artist" className={`${styles.Width} `}  >
                <Form.Label className={`${styles.Bold}`} >Artist</Form.Label>
                <Form.Control 
                className={`${styles.Input}`} 
                type="text"
                name="artist"
                value={artist}
                onChange={handleChange}
                    />
            </Form.Group>
            {errors?.artist?.map((message, idx) => (
              <Alert variant="warning" key={idx}>
                {message}
              </Alert>
            ))}
            </Col>
            <Col className="mx-0 px-1"  xs={3}>
            <Form.Group controlId="contact" className={`${styles.Width} `}  >
                <Form.Label className={`${styles.Bold}`} >Contact</Form.Label>
                <Form.Control 
                className={`${styles.Input}`} 
                type="text"
                name="contact"
                value={contact}
                onChange={handleChange}
                    />
            </Form.Group>
            {errors?.contact?.map((message, idx) => (
              <Alert variant="warning" key={idx}>
                {message}
              </Alert>
            ))}
            </Col>
            <Col className="mx-0 px-1"  xs={3}>
            <Form.Group controlId="inst" className={`${styles.Width} `}  >
                <Form.Label className={`${styles.Bold}`} >Inst</Form.Label>
                <Form.Control 
                className={`${styles.Input}`} 
                type="text"
                name="inst"
                value={inst}
                onChange={handleChange}
                    />
            </Form.Group>
            {errors?.inst?.map((message, idx) => (
              <Alert variant="warning" key={idx}>
                {message}
              </Alert>
            ))}
        </Col>
        </Row>
        {/* number swf pickup call hmw on_set */}
        <Row className="mx-0">
          <Col className="mx-0 px-1" xs={2} >
            <Form.Group controlId="cast_number" className={`${styles.Width } `}  >
                  <Form.Label className={`${styles.Bold}`} >Number</Form.Label>
                  <Form.Control 
                  className={`${styles.Input}`} 
                  type="text"
                  name="cast_number"
                  value={cast_number}
                  onChange={handleChange}
                      />
              </Form.Group>
              {errors?.cast_number?.map((message, idx) => (
                <Alert variant="warning" key={idx}>
                  {message}
                </Alert>
              ))}
              </Col>
          <Col className="mx-0 px-1" xs={2}>
              <Form.Group controlId="swf" className={`${styles.Width2} `}  >
                  <Form.Label className={`${styles.Bold}`} >SWF</Form.Label>
                  <Form.Control 
                  className={`${styles.Input}`} 
                  type="text"
                  name="swf"
                  value={swf}
                  onChange={handleChange}
                      />
              </Form.Group>
              {errors?.swf?.map((message, idx) => (
                <Alert variant="warning" key={idx}>
                  {message}
                </Alert>
              ))}
          </Col>
          <Col className="mx-0 px-1" xs={2}>
              <Form.Group controlId="pickup" className={`${styles.Width2} `}  >
                  <Form.Label className={`${styles.Bold}`} >Pickup</Form.Label>
                  <Form.Control 
                  className={`${styles.Input}`} 
                  type="text"
                  name="pickup"
                  value={pickup}
                  onChange={handleChange}
                      />
              </Form.Group>
              {errors?.pickup?.map((message, idx) => (
                <Alert variant="warning" key={idx}>
                  {message}
                </Alert>
              ))}
          </Col>
          <Col className="mx-0 px-1" xs={2} >
          <Form.Group controlId="call" className={`${styles.Width2} `}  >
                <Form.Label className={`${styles.Bold}`} >Call</Form.Label>
                <Form.Control 
                className={`${styles.Input}`} 
                type="text"
                name="call"
                value={call}
                onChange={handleChange}
                    />
            </Form.Group>
            {errors?.call?.map((message, idx) => (
              <Alert variant="warning" key={idx}>
                {message}
              </Alert>
            ))}
            </Col>
          <Col className="mx-0 px-1" xs={2}>
          <Form.Group controlId="hmw" className={`${styles.Width2} `}  >
              <Form.Label className={`${styles.Bold}`} >H/M/W</Form.Label>
              <Form.Control 
              className={`${styles.Input}`} 
              type="text"
              name="hmw"
              value={hmw}
              onChange={handleChange}
                  />
          </Form.Group>
          {errors?.hmw?.map((message, idx) => (
            <Alert variant="warning" key={idx}>
              {message}
            </Alert>
          ))}
          </Col>
          <Col className="mx-0 px-1" xs={2}>
          <Form.Group controlId="on_set" className={`${styles.Width2} `} >
              <Form.Label className={`${styles.Bold}`} >
                <span className="d-none d-sm-block">On Set</span> 
                <span className="d-sm-none">Set</span>
                </Form.Label>
              <Form.Control 
              className={`${styles.Input}`} 
              type="text"
              name="on_set"
              value={on_set}
              onChange={handleChange}
                  />
          </Form.Group>
          {errors?.on_set?.map((message, idx) => (
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
  )
}

export default AddCast