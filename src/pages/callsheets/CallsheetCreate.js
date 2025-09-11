/* Page to create a Callsheet */
import React, { useEffect, useState } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Alert from "react-bootstrap/Alert";
import styles from "../../styles/Callsheets.module.css";
import btnStyles from "../../styles/Button.module.css";
import { useHistory, useParams } from "react-router-dom";
import { axiosReq } from "../../api/axiosDefaults";
import TopBox from "../../components/TopBox";
import { useRedirect } from "../../hooks/Redirect";
import { toast } from 'react-toastify';
import InfoCallCreate from "./info/InfoCallCreate";

const CallsheetCreate = () => {
  useRedirect();
  const [errors, setErrors] = useState({});
  const { id } = useParams();
  const history = useHistory();
  // eslint-disable-next-line
  const [dayData, setDayData] = useState({ results: [] });
  const [dataDay, setDataDay] = useState("");
  const [dataDate, setDataDate] = useState("");
  const [showInfo, setShowInfo] = useState(false);

  const [postData, setPostData] = useState({
      unit_call: "",
      talent_call: "",
      shoot_call: "",
      breakfast: "",
      lunch: "",
      wrap: "",
  });

  const { 
        unit_call,
        talent_call, 
        shoot_call, 
        breakfast, 
        lunch, 
        wrap, 
      } = postData;
    
  useEffect(() => {
    /* Function to fetch the Day data */
    const handleMount = async () => {
        try {
          const { data } = await axiosReq.get(`/days/${id}/`);
        setDayData({ results: [data] });
        setDataDay(data.day);
        setDataDate(data.date);
        } catch (err) {
            console.log(err);
          }
    }
    handleMount();
    }, [id])
    
  const handleChange = (event) => {
    setPostData({
      ...postData,
      [event.target.name]: event.target.value,
    });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData();
    // info
    formData.append("day_id", id);
    formData.append("day", dataDay);
    formData.append("date", dataDate);
    formData.append("unit_call", unit_call);
    formData.append("talent_call", talent_call);
    formData.append("shoot_call", shoot_call);
    formData.append("breakfast", breakfast);
    formData.append("lunch", lunch);
    formData.append("wrap", wrap);
    try {
      await axiosReq.post("/callsheetsnew/", formData);
      toast.success(`Callsheet Day "${dataDay}" Created`);
      history.goBack();
    } catch (err) {
      console.log(err);
      if (err.response?.status !== 401) {
        setErrors(err.response?.data);
      }
    }
  };

  const infoFields = (
    <div className={`pb-5 text-center mx-md-5 ${styles.White}`}>
      {/* TIMES */}
      <h5 className={`py-1 mt-3 mb-3 ${styles.SubTitle }`} >
          TIMES
        </h5> 
      {/* Unit call - Talent call - Shoot call */}
      <Row>
          <Col xs={4} className="d-flex justify-content-center p-0 p-md-2">
          <Form.Group controlId="unit_call" className={`${styles.Width} `}  >
              <Form.Label className={`${styles.BoldScene}`} >Unit Call</Form.Label>
              <Form.Control 
                className={`${styles.Input}`}
                type="text"
                name="unit_call"
                value={unit_call}
                onChange={handleChange}
                  />
          </Form.Group>
          {errors?.unit_call?.map((message, idx) => (
            <Alert variant="warning" key={idx}>
              {message}
            </Alert>
          ))}
          </Col>
          <Col xs={4} className="d-flex justify-content-center p-0 p-md-2">
          <Form.Group controlId="talent_call" className={`${styles.Width} `}  >
              <Form.Label className={`${styles.BoldScene}`}>Talent Call</Form.Label>
              <Form.Control 
                className={`${styles.Input}`}
                type="text"
                name="talent_call"
                value={talent_call}
                onChange={handleChange}
                  />
          </Form.Group>
          {errors?.talent_call?.map((message, idx) => (
            <Alert variant="warning" key={idx}>
              {message}
            </Alert>
          ))}
          </Col>
          <Col xs={4} className="d-flex justify-content-center p-0 p-md-2">
          <Form.Group controlId="shoot_call" className={`${styles.Width} `}  >
              <Form.Label className={`${styles.BoldScene}`}>Shoot Call</Form.Label>
              <Form.Control 
                className={`${styles.Input}`}
                type="text"
                name="shoot_call"
                value={shoot_call}
                onChange={handleChange}
                  />
          </Form.Group>
          {errors?.shoot_call?.map((message, idx) => (
            <Alert variant="warning" key={idx}>
              {message}
            </Alert>
          ))}
          </Col>
      </Row>
      {/* breakfast - lunch - wrap */}
      <Row>
          <Col xs={4} className="d-flex justify-content-center p-0 p-md-2">
          <Form.Group controlId="breakfast" className={`${styles.Width} `}  >
              <Form.Label className={`${styles.BoldScene}`} >Breakfast</Form.Label>
              <Form.Control 
                className={`${styles.Input}`}
                type="text"
                name="breakfast"
                value={breakfast}
                onChange={handleChange}
                  />
          </Form.Group>
          {errors?.breakfast?.map((message, idx) => (
            <Alert variant="warning" key={idx}>
              {message}
            </Alert>
          ))}
          </Col>
          <Col xs={4} className="d-flex justify-content-center p-0 p-md-2">
          <Form.Group controlId="lunch" className={`${styles.Width} `}  >
              <Form.Label className={`${styles.BoldScene}`}>Lunch</Form.Label>
              <Form.Control 
                className={`${styles.Input}`}
                type="text"
                name="lunch"
                value={lunch}
                onChange={handleChange}
                  />
          </Form.Group>
          {errors?.lunch?.map((message, idx) => (
            <Alert variant="warning" key={idx}>
              {message}
            </Alert>
          ))}
          </Col>
          <Col xs={4} className="d-flex justify-content-center p-0 p-md-2">
          <Form.Group controlId="wrap" className={`${styles.Width} `}  >
              <Form.Label className={`${styles.BoldScene}`}>Est. Wrap</Form.Label>
              <Form.Control 
                className={`${styles.Input}`}
                type="text"
                name="wrap"
                value={wrap}
                onChange={handleChange}
                  />
          </Form.Group>
          {errors?.wrap?.map((message, idx) => (
            <Alert variant="warning" key={idx}>
              {message}
            </Alert>
          ))}
          </Col>
      </Row>
    </div>
  );

const buttons = (
  <div className={`text-center py-4 mb-3 mt-4 ${styles.White }`} >    
    <Button
      className={`${btnStyles.Button} ${btnStyles.Blue} px-3 px-md-5 mr-3`}
      onClick={() => history.goBack()}
    >
      Cancel
    </Button>
    <Button className={`${btnStyles.Button} ${btnStyles.Blue} px-3 px-md-5 ml-3`} type="submit">
      Create
    </Button>
  </div>
);
  
  return (
    <div >
    <TopBox work="Callsheet Create"
            title3={`Day ${dataDay} - ${dataDate} `} />
    <Button
        className={`${btnStyles.Button} ${btnStyles.Blue} mt-1`}
        onClick={() => history.goBack()}
    >
        Back
    </Button>
    <Button
          className={`float-right py-0 mt-1 ${btnStyles.Order} ${btnStyles.Button}`}
          onClick={() => setShowInfo(showInfo => !showInfo)} >INFO
    </Button>
    {!showInfo ? (
        ""
    ) : (
      <InfoCallCreate  /> 
      ) }  
    {/* info FOR DAY {dataDay} - {dataDate} */}
    <h5 className={`text-center mt-3 mb-0 py-1 ${styles.SubTitle }`} >
      CREATE CALLSHEET </h5> 
    <Row>
    <Col md={{span: 8, offset: 2}} className="text-center mt-2">
    <p>
    To Create the Callsheet fill in one or more Time Input and Submit. Add all other Info from the Edit page.
    </p>
    </Col>
    </Row>
    <Form className= {`px-md-5`} onSubmit={handleSubmit}>
    {infoFields}
    {buttons}
    </Form>
    </div>
  )
}

export default CallsheetCreate