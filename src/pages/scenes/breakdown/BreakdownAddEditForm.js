/* Form Page to add and edit the Scene Breakdown section
 * The Script and Storyboard can be added or edited here as well
 * The ability to edit a Scene number is going to be unavailable
   But am leaving it for now in case I inplement a function which 
   suddenly freezes all numbers but up to that point they 
   were editable (I have just added a starter version of this)
   This would be availabe only for the high level user. */
import React, { useEffect, useRef, useState } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
import Asset from "../../../components/Asset";
import Upload from "../../../assets/upload.png";
import styles from "../../../styles/Scene.module.css";
import appStyles from "../../../App.module.css";
import btnStyles from "../../../styles/Button.module.css";
import { Alert } from "react-bootstrap";
import { useHistory, useParams } from "react-router-dom";
import { axiosReq } from "../../../api/axiosDefaults";
import TopBox from "../../../components/TopBox";
import { useRedirect } from "../../../hooks/Redirect";
import NewLocation from "./NewLocation";
import { useLocationsContext, 
  useSetLocationsContext } from "../../../contexts/Scene_chars_locs";
import Important from "../info/Important";
import Info from "../info/Info";
import { useCrewInfoContext } from "../../../contexts/BaseCallContext";
import { toast } from 'react-toastify';

const BreakdownEditForm = () => {
    useRedirect();
    const crewInfoOne = useCrewInfoContext();
    const freeze = crewInfoOne.freeze || "";
    const [errors, setErrors] = useState({});
    const [showAddLoc, setShowAddLoc] = useState(false);
    const locations = useLocationsContext();
    const setLocations = useSetLocationsContext();
    const [showImp, setShowImp] = useState(false);
    const [showInfo, setShowInfo] = useState(false);
    // eslint-disable-next-line
    const [sceneNumber, setSceneNumber] = useState("");

    const [postData, setPostData] = useState({
      number: "",
      title: "",
      act: "",
      int_ext: "",
      day_night: "",
      time: "",
      pages: "",
      location: "",
      location_detail: "",
      filming_location: "",
      shooting_date: "",
      action: "",
      department_info: "",
      equip_set_props: "",
      dramatic_day: "",
      storyboard: "",
      script: "",
    });

  const { number, title, act, int_ext, day_night, time, location,
    filming_location, shooting_date,
    dramatic_day, equip_set_props, department_info,
    pages, action, storyboard, script, location_detail } = postData;
    
    const imageInput = useRef(null);
    const storyboardInput = useRef(null);

    const history = useHistory();
    const { id } = useParams();

    useEffect(() => {
        const handleMount = async () => {
          try {
            const { data } = await axiosReq.get(`/scenes/${id}/`);
            const { number, title, act, int_ext, day_night, time, location,
              filming_location, shooting_date,
              dramatic_day, equip_set_props, department_info,
              pages, action, storyboard, script, location_detail } = data;
     
            setPostData({ number, title, act, int_ext, day_night, time, location,
              filming_location, shooting_date,
              dramatic_day, equip_set_props, department_info,
              pages, action, storyboard, script, location_detail });
              setSceneNumber(number);
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

    const handleChangeImage = (event) => {
    if (event.target.files.length) {
        URL.revokeObjectURL(script);
        setPostData({
        ...postData,
        script: URL.createObjectURL(event.target.files[0]),
        });
        console.log(`script ${script}`)
    }
    };

  const handleChangeStoryboard = (event) => {
      if (event.target.files.length) {
        URL.revokeObjectURL(storyboard);
        setPostData({
          ...postData,
          storyboard: URL.createObjectURL(event.target.files[0]),
        });
        console.log(`storyboard ${storyboard}`)
      }
    };

  const infoFields = (
    <div className="mt-3 text-center px-2">
      {/* number title act */}
      <Row>
        {/* Freeze - This may be removed */}
        {freeze ? (
          <Col className=" p-0 p-md-2" xs={4} >
          <p>Number</p>
          <p>{number}</p>
          </Col>
        ) : (
          <Col className="d-flex justify-content-center p-0 p-md-2" xs={4} >
        <Form.Group controlId="number" className={`${styles.Width2} `}  >
              <Form.Label className={`${styles.Bold}`} >Number</Form.Label>
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
        ) }
          <Col className="d-flex justify-content-center p-0 p-md-2" xs={4}>
          <Form.Group controlId="title" className={`${styles.Width2} `} >
              <Form.Label className={`${styles.Bold}`}>Title</Form.Label>
              <Form.Control 
              // placeholder="Title"
              className={styles.Input}
              type="text"
              name="title"
              value={title}
              onChange={handleChange}
                  />
          </Form.Group>
          {errors?.title?.map((message, idx) => (
            <Alert variant="warning" key={idx}>
              {message}
            </Alert>
          ))}
          </Col>
          <Col className="d-flex justify-content-center p-0 p-md-2" xs={4} >
          <Form.Group controlId="dramatic_day" className={`${styles.Width2} `} >
              <Form.Label className={`${styles.Bold}`} >Dramatic Day</Form.Label>
              <Form.Control 
              type="text"
              className={styles.Input}
              // placeholder="Dramatic Day"
              name="dramatic_day"
              value={dramatic_day}
              onChange={handleChange}
                  />
          </Form.Group>
          {errors?.dramatic_day?.map((message, idx) => (
            <Alert variant="warning" key={idx}>
              {message}
            </Alert>
          ))}
          </Col>
      </Row>
      <hr/>
      {/* Int-Ext Day/Night Dramatic-day  */}
      <Row className="mt-3">
      <Col className="d-flex justify-content-center p-0 p-md-2" xs={4} >         
          <Form.Group controlId="int_ext" className={`${styles.Width2} `} >
              <Form.Label className={`${styles.Bold}`} >Int-Ext</Form.Label>
              <Form.Control as="select"
                className={styles.Input}
                // placeholder="Int-Ext"
                name="int_ext"
                value={int_ext}
                onChange={handleChange}
                aria-label="int ext select">
                <option></option>
                <option value="int">Int</option>
                <option value="ext">Ext</option>
              </Form.Control>
          </Form.Group>
          {errors?.int_ext?.map((message, idx) => (
            <Alert variant="warning" key={idx}>
              {message}
            </Alert>
          ))}
          </Col>
      <Col className="d-flex justify-content-center p-0 p-md-2" xs={4} >
      <Form.Group controlId="day_night" className={`${styles.Width2} `} >
          <Form.Label className={`${styles.Bold}`} >Day/Night</Form.Label>
          <Form.Control as="select"
            name="day_night"
            className={styles.Input}
            // placeholder="Day/Night"
            value={day_night}
            onChange={handleChange}
            aria-label="day or night select">
            <option></option>
            <option value="DAY">Day</option>
            <option value="NIGHT">Night</option>
          </Form.Control>
      </Form.Group>
      {errors?.day_night?.map((message, idx) => (
        <Alert variant="warning" key={idx}>
          {message}
        </Alert>
      ))}
      </Col>
      <Col className="d-flex justify-content-center p-0 p-md-2" xs={4}>
          <Form.Group controlId="act" className={`${styles.Width2} `} >
              <Form.Label className={`${styles.Bold}`} >Act</Form.Label>
              <Form.Control as="select"
                className={styles.Input}
                name="act"
                value={act}
                onChange={handleChange}
                aria-label="act select">
                <option></option>
                <option value="one">One</option>
                <option value="two-a">Two - First Half</option>
                <option value="two-b">Two - Second Half</option>
                <option value="three">Three</option>
              </Form.Control>
          </Form.Group>
          {errors?.act?.map((message, idx) => (
            <Alert variant="warning" key={idx}>
              {message}
            </Alert>
          ))}
        </Col>
      </Row  >
      <hr/>
      {/* shooting-date time pages*/}
      <Row className="mt-3">
      <Col className="d-flex justify-content-center p-0 p-md-2" xs={4}>
      <Form.Group controlId="shooting_date" className={`${styles.Width2} `} >
          <Form.Label className={`${styles.Bold}`} >Shooting Date</Form.Label>
          <Form.Control 
          type="text"
          className={styles.Input}
          // placeholder="Shooting Date"
          name="shooting_date"
          value={shooting_date}
          onChange={handleChange}
              />
      </Form.Group>
      {errors?.shooting_date?.map((message, idx) => (
        <Alert variant="warning" key={idx}>
          {message}
        </Alert>
      ))}
      </Col>
      <Col className="d-flex justify-content-center p-0 p-md-2" xs={4} >
      <Form.Group controlId="time" className={`${styles.Width2} `} >
          <Form.Label className={`${styles.Bold}`} >Scene Time</Form.Label>
          <Form.Control 
          type="text"
          className={styles.Input}
          // placeholder="Time"
          name="time"
          value={time}
          onChange={handleChange}
              />
      </Form.Group>
      {errors?.time?.map((message, idx) => (
        <Alert variant="warning" key={idx}>
          {message}
        </Alert>
      ))}
      </Col>
      <Col className="d-flex justify-content-center p-0 p-md-2" xs={4} >
      <Form.Group controlId="pages" className={`${styles.Width2} `} >
          <Form.Label className={`${styles.Bold}`} >Pages</Form.Label>
          <Form.Control 
          type="text"
          className={styles.Input}
          placeholder="Decimal only"
          name="pages"
          value={pages}
          onChange={handleChange}
              />
      </Form.Group>
      {errors?.pages?.map((message, idx) => (
        <Alert variant="warning" key={idx}>
          {message}
        </Alert>
      ))}
      </Col>
      </Row >
      <hr/>
      {/* location location-detail  */}
      <Row className="mt-3">
      <Col className="d-flex justify-content-center p-0 p-md-2" xs={6}>
          <Form.Group controlId="location" className={`${styles.Width2} `} >
              <Form.Label className={`${styles.Bold}`} >Location</Form.Label>
              <Form.Control as="select"
                name="location"
                className={styles.Input}
                value={location}
                onChange={handleChange}
                aria-label="location select">
                  <option  ></option>
                {locations.results.length && (
                    locations.results.map((location) => (
                      <option key={location.id} value={location.name} >{location.name}</option>
                    ) )) }
              </Form.Control>
          </Form.Group>
          {errors?.location?.map((message, idx) => (
            <Alert variant="warning" key={idx}>
              {message}
            </Alert>
          ))}
      </Col>
      <Col className="d-flex justify-content-center p-0 p-md-2" xs={6}>
          <Form.Group controlId="location_detail" className={`${styles.Width2} `} >
              <Form.Label className={`${styles.Bold}`} >Location Detail</Form.Label>
              <Form.Control 
              className={styles.Input}
              // placeholder="Location Detail"
              type="text"
              name="location_detail"
              value={location_detail}
              onChange={handleChange}
                  />
          </Form.Group>
          {errors?.location_detail?.map((message, idx) => (
            <Alert variant="warning" key={idx}>
              {message}
            </Alert>
          ))}
      </Col>
      </Row>
      <hr/>
      {/* Filming Location - Action */}
      <Row className="mt-3">
        <Col className="d-flex justify-content-center p-0 p-md-2" xs={6}>
        <Form.Group controlId="filming_location" className={`${styles.Width2} `} >
            <Form.Label className={`${styles.Bold}`} >Filming Location</Form.Label>
            <Form.Control 
            type="text"
            className={styles.Input}
            // placeholder="Filming Location"
            name="filming_location"
            as="textarea"
            rows={2}
            value={filming_location}
            onChange={handleChange}
                />
        </Form.Group>
        {errors?.filming_location?.map((message, idx) => (
          <Alert variant="warning" key={idx}>
            {message}
          </Alert>
        ))}
        </Col>
        <Col className="d-flex justify-content-center p-0 p-md-2" xs={6}>
        <Form.Group controlId="action" className={`${styles.Width2} `} >
            <Form.Label className={`${styles.Bold}`} >Action</Form.Label>
            <Form.Control 
            type="text"
            className={styles.Input}
            // placeholder="Action"
            name="action"
            as="textarea"
            rows={2}
            value={action}
            onChange={handleChange}
                />
        </Form.Group>
        {errors?.action?.map((message, idx) => (
          <Alert variant="warning" key={idx}>
            {message}
          </Alert>
        ))}
        </Col>
      </Row>
      <hr/>
      {/* department-info equip_set_props  */}
      <Row>
        <Col className="d-flex justify-content-center p-0 p-md-2" xs={6}>
        <Form.Group controlId="content" className={`${styles.Width2} `} >
            <Form.Label className={`${styles.Bold}`} >Department Info</Form.Label>
            <Form.Control 
                type="text"
                // placeholder="Department Info"
                className={styles.InputScene}
                name="department_info"
                as="textarea"
                rows={2}
                value={department_info}
                onChange={handleChange}
                />
        </Form.Group>
        {errors?.department_info?.map((message, idx) => (
          <Alert variant="warning" key={idx}>
            {message}
          </Alert>
        ))}
      </Col>
      <Col className="d-flex justify-content-center p-0 p-md-2" xs={6}>
      <Form.Group controlId="equip_set_props" className={`${styles.Width2} `} >
          <Form.Label className={`${styles.Bold}`} >Info/Equip/Set</Form.Label>
          <Form.Control 
              className={styles.InputScene}
              // placeholder="Info/Equip/Set"
              type="text"
              name="equip_set_props"
              as="textarea"
              rows={2}
              value={equip_set_props}
              onChange={handleChange}
              />
      </Form.Group>
      {errors?.equip_set_props?.map((message, idx) => (
        <Alert variant="warning" key={idx}>
          {message}
        </Alert>
      ))}
      </Col>
      </Row>    
      <hr/>   
    </div>
  )

  const buttons = (
    <div className={`text-center pt-3 mt-3 mb-3 pb-2 ${styles.White }`} >    
      <Button
        className={`mr-3 px-5 py-1 ${btnStyles.Button} ${btnStyles.Blue}`}
        onClick={() => history.goBack()}
      >
        Cancel
      </Button>
      <Button className={`ml-3 px-5 py-1  ${btnStyles.Button} ${btnStyles.Blue}`} type="submit">
        Submit
      </Button>
    </div>
  );

  const handleSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData();

    formData.append("number", number);
    formData.append("title", title);
    formData.append("act", act);
    formData.append("int_ext", int_ext);
    formData.append("day_night", day_night);
    formData.append("time", time);
    formData.append("pages", pages);
    formData.append("dramatic_day", dramatic_day);
    formData.append("location", location);
    formData.append("location_detail", location_detail);
    formData.append("filming_location", filming_location);
    formData.append("shooting_date", shooting_date);
    formData.append("action", action);
    formData.append("equip_set_props", equip_set_props);
    formData.append("department_info", department_info);
    if (imageInput.current.files[0]) {
        formData.append("script", imageInput.current.files[0]);
    }
    if (storyboardInput.current.files[0]) {
        formData.append("storyboard", storyboardInput.current.files[0]); 
    }
        
    try {
        await axiosReq.put(`/scenes/${id}/`, formData);
        toast.success(`Scene "${number}" Breakdown Updated`);
        history.push(`/scenes/${id}/`);
    } catch (err) {
        console.log(err);
        if (err.response?.status !== 401) {
        setErrors(err.response?.data);
        }
    }
    }

    return (
        <div>
        <TopBox work={`Edit`}
                title={`Scene ${number} `}
                title2="Breakdown"/>
        <Row>
        <Col xs={6}>
        <Button
            className={`${btnStyles.Button} ${btnStyles.Blue} py-0 mt-2`}
            onClick={() => history.goBack()}
        >
            Back
        </Button>
        </Col>
        <Col xs={6}>
        <Button
          className={`float-right py-0 mt-2 ${btnStyles.Blue} ${btnStyles.Button}`}
          onClick={() => setShowInfo(showInfo => !showInfo)} >INFO
        </Button>
        </Col>
        </Row>
        <Row>
        <Col className="text-center" xs={12} sm={6} >
        <Button
          className={`py-0 mt-2 ${btnStyles.Order} ${btnStyles.Button}`}
          onClick={() => setShowAddLoc(showAddLoc => !showAddLoc)} >ADD NEW LOCATION
        </Button> 
        </Col>
        <Col className="text-center" xs={12} sm={6} >
        <Button
          className={`px-5 py-0 mt-2 ${btnStyles.Order} ${btnStyles.Button}`}
          onClick={() => setShowImp(showImp => !showImp)} >IMPORTANT
        </Button>
        </Col>
        </Row>
      {!showImp ? (
          ""
              ) : (
                <Important  /> 
              ) } 
      <Row>
        <Col>
      {!showInfo ? (
          ""
              ) : (
                <Info  /> 
              ) } 
        </Col>
      </Row>
      {!showAddLoc ? (
          ""
              ) : (
                <NewLocation 
                setShowAddLoc={setShowAddLoc}
                setLocations={setLocations}  /> 
                ) } 
        <h5 style={{ textTransform: 'uppercase'}}
         className={`text-center mt-3 mb-0 py-1 ${styles.SubTitle }`}>
         EDIT SCENE <span className={`${styles.SceneNo }`}>
            {number}</span> BREAKDOWN
        </h5>
        {/* <h5 className={`text-center mt-3 mb-0 py-1 ${styles.Titlex }`}>
         EDIT SCENE <span className={`${styles.SceneNo }`}>
            {number}</span> BREAKDOWN
        </h5>
        <hr className="py-0 my-0"/> */}
        <Form className= {`mb-3 px-3 ${styles.White}`} onSubmit={handleSubmit}>
        <Row>
        <Col xs={12} className="p-0 p-md-2">
            {infoFields}
          </Col>
          </Row>
          <Row>
          <Col className="py-2 p-0 p-md-2" md={6}>
            <p className={`${styles.Bold} text-center mb-1`}>Script</p>
            <Container
              className={`${appStyles.Content} ${styles.Width2}  ${styles.Container} d-flex flex-column justify-content-center mb-3`}
            >
              <Form.Group className="text-center pt-3">
                  {script ? (
                    <>
                      <figure>
                        <iframe title="Script"
                         className={appStyles.iframe} src={script} />
                      </figure>
                      <div>
                        <Form.Label
                          className={`${btnStyles.Button} ${btnStyles.Blue} btn`}
                          htmlFor="image-upload"
                        >
                          Change the Script
                        </Form.Label>
                      </div>
                    </>
                  ) : (
                    <Form.Label
                      className="d-flex justify-content-center"
                      htmlFor="image-upload"
                    >
                      <Asset
                        src={Upload}
                        height={40}
                        width={40}
                        message="Upload Script"
                      />
                    </Form.Label>
                  )}

                  <Form.Control
                    type="file"
                    id="image-upload"
                    // accept="image/*"
                    onChange={handleChangeImage}
                    ref={imageInput}
                  />
                </Form.Group>
                {errors?.script?.map((message, idx) => (
                  <Alert variant="warning" key={idx}>
                    {message}
                  </Alert>
                ))}
            </Container>
            </Col>
            <Col className="py-2 p-0 p-md-2" md={6}>
            <p className={`${styles.Bold} text-center mb-1`}>Storyboard</p>
            {/* storyboard */}
            <Container
              className={`${appStyles.Content} ${styles.Width2} ${styles.Container} d-flex flex-column justify-content-center`}
            >
              <Form.Group className="text-center pt-3">
                  {storyboard ? (
                    <>
                      <figure>
                        <iframe className={appStyles.iframe}
                        title="storyboard" src={storyboard} />
                      </figure>
                      <div>
                        <Form.Label
                          className={`${btnStyles.Button} ${btnStyles.Blue} btn`}
                          htmlFor="storyboard-upload"
                        >
                          Change the storyboard
                        </Form.Label>
                      </div>
                    </>
                  ) : (
                    <Form.Label
                      className="d-flex justify-content-center"
                      htmlFor="storyboard-upload"
                    >
                      <Asset
                        src={Upload}
                        height={40}
                        width={40}
                        message="Upload Storyboard"
                      />
                    </Form.Label>
                  )}

                  <Form.Control
                    type="file"
                    id="storyboard-upload"
                    accept="image/*"
                    onChange={handleChangeStoryboard}
                    ref={storyboardInput}
                  />
                </Form.Group>
                {errors?.storyboard?.map((message, idx) => (
                  <Alert variant="warning" key={idx}>
                    {message}
                  </Alert>
                ))}
                </Container>
          </Col>   
        </Row> 
            <Row>
          <Col className="text-center">
          <div className= {`mt-3 ${styles.Container}`} >{buttons}</div>
          </Col>
        </Row>
          </Form>
      </div>
      );
}

export default BreakdownEditForm
