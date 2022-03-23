import React, { useEffect, useState } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Alert from "react-bootstrap/Alert";
import styles from "../../styles/Callsheets.module.css";
import btnStyles from "../../styles/Button.module.css";
import { useHistory, useParams } from "react-router";
import { axiosReq } from "../../api/axiosDefaults";
import TopBox from "../../components/TopBox";
import { useRedirect } from "../../hooks/Redirect";
import { useCrewInfoContext } from "../../contexts/BaseCallContext";
import AddCast from "./AddCast";
import CallsheetSchedule from "./CallsheetSchedule";
import AddBackGround from "./AddBackGround";

const CallsheetEdit = ({setShowCall}) => {
  useRedirect("loggedOut");
  const [errors, setErrors] = useState({});
  const { id } = useParams();
  const history = useHistory();
  const crewInfo = useCrewInfoContext();
  const [showSchedule, setShowSchedule] = useState(false);
  const [showAddCast, setShowAddCast] = useState(false);
  const [showAddBg, setShowAddBg] = useState(false);
  const [showSideBySide, setShowSideBySide] = useState(false);
  const [dayData, setDayData] = useState({ results: [] });
  const [scenes, setScenes] = useState({ results: [] });
  const [dataId, setDataId] = useState("");
  const [dataDay, setDataDay] = useState("");
  const [dataDate, setDataDate] = useState("");
  // const dataDay = useDayContext();

  // const { production_name, production_company, company_phone, company_email,
  //         company_address, company_logo, 
  //         producer_name, producer_email, producer_phone,
  //         pro_coordinator_name, pro_coordinator_email, pro_coordinator_phone,
  //         travel_coordinator_name, travel_coordinator_email, travel_coordinator_phone,
  //         production_pa_name, production_pa_email, production_pa_phone,
  //         locations_manager_name, locations_manager_email, locations_manager_phone,
  //         oth_production_pos_1_job, oth_production_pos_1_name, oth_production_pos_1_email, oth_production_pos_1_phone,
  //         oth_production_pos_2_job, oth_production_pos_2_name, oth_production_pos_2_email, oth_production_pos_2_phone,
  //         oth_production_pos_3_job, oth_production_pos_3_name, oth_production_pos_3_email, oth_production_pos_3_phone,
  //         oth_production_pos_4_job, oth_production_pos_4_name, oth_production_pos_4_email, oth_production_pos_4_phone,
  //         oth_production_pos_5_job, oth_production_pos_5_name, oth_production_pos_5_email, oth_production_pos_5_phone,
  //         ad_1_name, ad_1_email, ad_1_phone,
  //         ad_2_name, ad_2_email, ad_2_phone,
  //         ad_3_name, ad_3_email, ad_3_phone,
  //         ad_4_name, ad_4_email, ad_4_phone,
  //         ad_5_name, ad_5_email, ad_5_phone,
  //         pro_assistant_1_name, pro_assistant_1_email, pro_assistant_1_phone,
  //         pro_assistant_2_name, pro_assistant_2_email, pro_assistant_2_phone,
  //         pro_assistant_3_name, pro_assistant_3_email, pro_assistant_3_phone,
  //         pro_assistant_4_name, pro_assistant_4_email, pro_assistant_4_phone,
  //         pro_assistant_5_name, pro_assistant_5_email, pro_assistant_5_phone,
  //         dop_name, dop_email, dop_phone,
  //         camera_operator_name, camera_operator_email, camera_operator_phone,
  //         camera_ass_1_name, camera_ass_1_email, camera_ass_1_phone,
  //         camera_ass_2_name, camera_ass_2_email, camera_ass_2_phone,
  //         dit_name, dit_email, dit_phone,
  //         steadicam_name, steadicam_email, steadicam_phone,
  //         camera_pa_name, camera_pa_email, camera_pa_phone,
  //         oth_camera_pos_1_job, oth_camera_pos_1_name, oth_camera_pos_1_email, oth_camera_pos_1_phone,
  //         oth_camera_pos_2_job, oth_camera_pos_2_name, oth_camera_pos_2_email, oth_camera_pos_2_phone,
  //         oth_camera_pos_3_job, oth_camera_pos_3_name, oth_camera_pos_3_email, oth_camera_pos_3_phone,
  //         sound_mixer_name, sound_mixer_email, sound_mixer_phone,
  //         boom_operator_name, boom_operator_email, boom_operator_phone,
  //         sound_assistant_1_name, sound_assistant_1_email, sound_assistant_1_phone,
  //         sound_assistant_2_name, sound_assistant_2_email, sound_assistant_2_phone,
  //         script_supervisor_name, script_supervisor_email, script_supervisor_phone,
  //         key_hairmakeup_name, key_hairmakeup_email, key_hairmakeup_phone,
  //         key_hairstylist_name, key_hairstylist_email, key_hairstylist_phone,
  //         sfx_makeup_name, sfx_makeup_email, sfx_makeup_phone,
  //         sfx_makeup_assistant_name, sfx_makeup_assistant_email, sfx_makeup_assistant_phone,
  //         makeup_artist_1_name, makeup_artist_1_email, makeup_artist_1_phone,
  //         makeup_artist_2_name, makeup_artist_2_email, makeup_artist_2_phone,
  //         makeup_artist_3_name, makeup_artist_3_email, makeup_artist_3_phone,
  //         makeup_artist_4_name, makeup_artist_4_email, makeup_artist_4_phone,
  //         makeup_artist_5_name, makeup_artist_5_email, makeup_artist_5_phone,
  //         costume_designer_name, costume_designer_email, costume_designer_phone,
  //         ass_costume_designer_name, ass_costume_designer_email, ass_costume_designer_phone,
  //         wardrobe_assistant_1_name, wardrobe_assistant_1_email, wardrobe_assistant_1_phone,
  //         wardrobe_assistant_2_name, wardrobe_assistant_2_email, wardrobe_assistant_2_phone,
  //         wardrobe_assistant_3_name, wardrobe_assistant_3_email, wardrobe_assistant_3_phone,
  //         wardrobe_assistant_4_name, wardrobe_assistant_4_email, wardrobe_assistant_4_phone,
  //         wardrobe_assistant_5_name, wardrobe_assistant_5_email, wardrobe_assistant_5_phone,
  //         production_designer_name, production_designer_email, production_designer_phone,
  //         art_director_name, art_director_email, art_director_phone,
  //         art_assistant_name, art_assistant_email, art_assistant_phone,
  //         set_decorator_name, set_decorator_email, set_decorator_phone,
  //         set_dresser_name, set_dresser_email, set_dresser_phone,
  //         lead_man_name, lead_man_email, lead_man_phone,
  //         dresser_name, dresser_email, dresser_phone,
  //         prop_master_name, prop_master_email, prop_master_phone,
  //         ass_prop_master_name, ass_prop_master_email, ass_prop_master_phone,
  //         prop_buyer_name, prop_buyer_email, prop_buyer_phone,
  //         armorer_name, armorer_email, armorer_phone,
  //         gaffer_name, gaffer_email, gaffer_phone,
  //         best_boy_electric_name, best_boy_electric_email, best_boy_electric_phone,
  //         electric_3_name, electric_3_email, electric_3_phone,
  //         electric_4_name, electric_4_email, electric_4_phone, } = crewInfo;

  const [postData, setPostData] = useState({
      unit_call: "",
      talent_call: "",
      shoot_call: "",
      breakfast: "",
      lunch: "",
      wrap: "",
      basecamp_address: "",
      basecamp_parking_n_notes: "",
      location_1_address: "",
      location_2_address: "",
      location_3_address: "",
      location_4_address: "",
      location_5_address: "",
      location_1_parking_n_notes: "",
      location_2_parking_n_notes: "",
      location_3_parking_n_notes: "",
      location_4_parking_n_notes: "",
      location_5_parking_n_notes: "",
      nearest_hospital: "",
      weather_location: "",
      important_info: "",
      transport_info: "",
      department_info: "",
      walkie_channel_production: "",
      walkie_channel_open: "",
      walkie_channel_transportation: "",
      walkie_channel_art_dept: "",
      walkie_channel_rollover: "",
      walkie_channel_camera: "",
      walkie_channel_electric: "",
      walkie_channel_grip: "",
      // producer_calltime: "",
      // pro_coordinator_calltime: "",
  })

const { 
        unit_call,
        talent_call, 
        shoot_call, 
        breakfast, 
        lunch, 
        wrap, 
        basecamp_address, 
        basecamp_parking_n_notes, 
        location_1_address, 
        location_2_address, 
        location_3_address, 
        location_4_address, 
        location_5_address, 
        location_1_parking_n_notes, 
        location_2_parking_n_notes, 
        location_3_parking_n_notes, 
        location_4_parking_n_notes,
        location_5_parking_n_notes,
        nearest_hospital,
        weather_location,
        important_info,
        transport_info,
        department_info,
        walkie_channel_production,
        walkie_channel_open,
        walkie_channel_transportation,
        walkie_channel_art_dept,
        walkie_channel_rollover,
        walkie_channel_camera,
        walkie_channel_electric,
        walkie_channel_grip,
        // producer_calltime, 
        // pro_coordinator_calltime, 
      } = postData;

  useEffect(() => {
    const handleMount = async () => {
        try {
          const [{ data: dayGet }, { data: scenes }] = await Promise.all([
            axiosReq.get(`/days/${id}`),
            axiosReq.get(`/schedule/scenes/?day_id=${id}`),
        ])
        setDayData({ results: [dayGet] });
        setScenes(scenes)
        setDataDay(dayGet.day);
        setDataDate(dayGet.date);
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

    formData.append("day_id", id);
    formData.append("producer_calltime", producer_calltime);
    formData.append("day", dataDay);
    formData.append("date", dataDate);
    formData.append("unit_call", unit_call);
    formData.append("talent_call", talent_call);
    formData.append("shoot_call", shoot_call);
    formData.append("breakfast", breakfast);
    formData.append("lunch", lunch);
    formData.append("wrap", wrap);  
    formData.append("basecamp_address", basecamp_address);
    formData.append("basecamp_parking_n_notes", basecamp_parking_n_notes);
    formData.append("location_1_address", location_1_address);
    formData.append("location_2_address", location_2_address);
    formData.append("location_3_address", location_3_address);
    formData.append("location_4_address", location_4_address);
    formData.append("location_5_address", location_5_address);
    formData.append("location_1_parking_n_notes", location_1_parking_n_notes);
    formData.append("location_2_parking_n_notes", location_2_parking_n_notes);
    formData.append("location_3_parking_n_notes", location_3_parking_n_notes);
    formData.append("location_4_parking_n_notes", location_4_parking_n_notes);
    formData.append("location_5_parking_n_notes", location_5_parking_n_notes);
    formData.append("nearest_hospital", nearest_hospital);
    formData.append("weather_location", weather_location);
    formData.append("important_info", important_info);
    formData.append("transport_info", transport_info);
    formData.append("department_info", department_info);
    try {
      await axiosReq.put(`/callsheetsnew/${id}/`, formData);
      setShowCall(false);
      // setHasOrder(true);
    } catch (err) {
      console.log(err);
      if (err.response?.status !== 401) {
        setErrors(err.response?.data);
      }
    }
  }

  const infoFields = (
    <div className={`text-center ${styles.Back }`}>
      {/* Unit call - Talent call Shoot call */}
      <Row>
          <Col xs={4} className="d-flex justify-content-center p-0 p-md-2">
          <Form.Group controlId="production_name" className={`${styles.Width} `}  >
              <Form.Label className={`${styles.Bold}`} >Unit Call</Form.Label>
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
              <Form.Label className={`${styles.Bold}`}>Talent Call</Form.Label>
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
              <Form.Label className={`${styles.Bold}`}>Shoot Call</Form.Label>
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
              <Form.Label className={`${styles.Bold}`} >Breakfast</Form.Label>
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
              <Form.Label className={`${styles.Bold}`}>Lunch</Form.Label>
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
              <Form.Label className={`${styles.Bold}`}>Est. Wrap</Form.Label>
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
      {/* basecamp address - basecamp parking and notes */}
      <Row>
          <Col xs={6} className="d-flex justify-content-center p-0 p-md-2">
          <Form.Group controlId="basecamp_address" className={`${styles.Width} `}  >
              <Form.Label className={`${styles.Bold}`} >Basecamp Address</Form.Label>
              <Form.Control 
                className={`${styles.InputScene}`}
                type="text"
                as="textarea"
                rows={2}
                name="basecamp_address"
                value={basecamp_address}
                onChange={handleChange}
                  />
          </Form.Group>
          {errors?.basecamp_address?.map((message, idx) => (
            <Alert variant="warning" key={idx}>
              {message}
            </Alert>
          ))}
          </Col>
          <Col xs={6} className="d-flex justify-content-center p-0 p-md-2">
          <Form.Group controlId="basecamp_parking_n_notes" className={`${styles.Width} `}  >
              <Form.Label className={`d-none d-sm-block ${styles.Bold}`}>Basecamp Parking and Notes</Form.Label>
              <Form.Label className={`d-sm-none ${styles.Bold}`}>Basecamp Notes</Form.Label>
              <Form.Control 
                className={`${styles.InputScene}`}
                as="textarea"
                rows={2}
                type="text"
                name="basecamp_parking_n_notes"
                value={basecamp_parking_n_notes}
                onChange={handleChange}
                  />
          </Form.Group>
          {errors?.basecamp_parking_n_notes?.map((message, idx) => (
            <Alert variant="warning" key={idx}>
              {message}
            </Alert>
          ))}
          </Col>
      </Row>
      {/* location 1 address - location 1 parking and notes */}
      <Row>
          <Col xs={6} className="d-flex justify-content-center p-0 p-md-2">
          <Form.Group controlId="location_1_address" className={`${styles.Width} `}  >
              <Form.Label className={`${styles.Bold}`} >Location 1 Address</Form.Label>
              <Form.Control 
                className={`${styles.InputScene}`}
                type="text"
                as="textarea"
                rows={2}
                name="location_1_address"
                value={location_1_address}
                onChange={handleChange}
                  />
          </Form.Group>
          {errors?.location_1_address?.map((message, idx) => (
            <Alert variant="warning" key={idx}>
              {message}
            </Alert>
          ))}
          </Col>
          <Col xs={6} className="d-flex justify-content-center p-0 p-md-2">
          <Form.Group controlId="location_1_parking_n_notes" className={`${styles.Width} `}  >
              <Form.Label className={`d-none d-sm-block ${styles.Bold}`}>Location 1 Parking and Notes</Form.Label>
              <Form.Label className={`d-sm-none ${styles.Bold}`}>Location 1 Notes</Form.Label>
              <Form.Control 
                className={`${styles.InputScene}`}
                as="textarea"
                rows={2}
                type="text"
                name="location_1_parking_n_notes"
                value={location_1_parking_n_notes}
                onChange={handleChange}
                  />
          </Form.Group>
          {errors?.location_1_parking_n_notes?.map((message, idx) => (
            <Alert variant="warning" key={idx}>
              {message}
            </Alert>
          ))}
          </Col>
      </Row>
      {/* location 2 address - location 2 parking and notes */}
      <Row>
          <Col xs={6} className="d-flex justify-content-center p-0 p-md-2">
          <Form.Group controlId="location_2_address" className={`${styles.Width} `}  >
              <Form.Label className={`${styles.Bold}`} >Location 2 Address</Form.Label>
              <Form.Control 
                className={`${styles.InputScene}`}
                type="text"
                as="textarea"
                rows={2}
                name="location_2_address"
                value={location_2_address}
                onChange={handleChange}
                  />
          </Form.Group>
          {errors?.location_2_address?.map((message, idx) => (
            <Alert variant="warning" key={idx}>
              {message}
            </Alert>
          ))}
          </Col>
          <Col xs={6} className="d-flex justify-content-center p-0 p-md-2">
          <Form.Group controlId="location_2_parking_n_notes" className={`${styles.Width} `}  >
          <Form.Label className={`d-none d-sm-block ${styles.Bold}`}>Location 2 Parking and Notes</Form.Label>
              <Form.Label className={`d-sm-none ${styles.Bold}`}>Location 2 Notes</Form.Label>
              <Form.Control 
                className={`${styles.InputScene}`}
                as="textarea"
                rows={2}
                type="text"
                name="location_2_parking_n_notes"
                value={location_2_parking_n_notes}
                onChange={handleChange}
                  />
          </Form.Group>
          {errors?.location_2_parking_n_notes?.map((message, idx) => (
            <Alert variant="warning" key={idx}>
              {message}
            </Alert>
          ))}
          </Col>
      </Row>
      {/* location 3 address - location 3 parking and notes */}
      <Row>
          <Col xs={6} className="d-flex justify-content-center p-0 p-md-2">
          <Form.Group controlId="location_3_address" className={`${styles.Width} `}  >
              <Form.Label className={`${styles.Bold}`} >Location 3 Address</Form.Label>
              <Form.Control 
                className={`${styles.InputScene}`}
                type="text"
                as="textarea"
                rows={2}
                name="location_3_address"
                value={location_3_address}
                onChange={handleChange}
                  />
          </Form.Group>
          {errors?.location_3_address?.map((message, idx) => (
            <Alert variant="warning" key={idx}>
              {message}
            </Alert>
          ))}
          </Col>
          <Col xs={6} className="d-flex justify-content-center p-0 p-md-2">
          <Form.Group controlId="location_3_parking_n_notes" className={`${styles.Width} `}  >
          <Form.Label className={`d-none d-sm-block ${styles.Bold}`}>Location 3 Parking and Notes</Form.Label>
              <Form.Label className={`d-sm-none ${styles.Bold}`}>Location 3 Notes</Form.Label>
              <Form.Control 
                className={`${styles.InputScene}`}
                as="textarea"
                rows={2}
                type="text"
                name="location_3_parking_n_notes"
                value={location_3_parking_n_notes}
                onChange={handleChange}
                  />
          </Form.Group>
          {errors?.location_3_parking_n_notes?.map((message, idx) => (
            <Alert variant="warning" key={idx}>
              {message}
            </Alert>
          ))}
          </Col>
      </Row>
      {/* location 4 address - location 4 parking and notes */}
      <Row>
          <Col xs={6} className="d-flex justify-content-center p-0 p-md-2">
          <Form.Group controlId="location_4_address" className={`${styles.Width} `}  >
              <Form.Label className={`${styles.Bold}`} >Location 4 Address</Form.Label>
              <Form.Control 
                className={`${styles.InputScene}`}
                type="text"
                as="textarea"
                rows={2}
                name="location_4_address"
                value={location_4_address}
                onChange={handleChange}
                  />
          </Form.Group>
          {errors?.location_4_address?.map((message, idx) => (
            <Alert variant="warning" key={idx}>
              {message}
            </Alert>
          ))}
          </Col>
          <Col xs={6} className="d-flex justify-content-center p-0 p-md-2">
          <Form.Group controlId="location_4_parking_n_notes" className={`${styles.Width} `}  >
          <Form.Label className={`d-none d-sm-block ${styles.Bold}`}>Location 4 Parking and Notes</Form.Label>
              <Form.Label className={`d-sm-none ${styles.Bold}`}>Location 4 Notes</Form.Label>
              <Form.Control 
                className={`${styles.InputScene}`}
                as="textarea"
                rows={2}
                type="text"
                name="location_4_parking_n_notes"
                value={location_4_parking_n_notes}
                onChange={handleChange}
                  />
          </Form.Group>
          {errors?.location_4_parking_n_notes?.map((message, idx) => (
            <Alert variant="warning" key={idx}>
              {message}
            </Alert>
          ))}
          </Col>
      </Row>
      {/* location 5 address - location 5 parking and notes */}
      <Row>
          <Col xs={6} className="d-flex justify-content-center p-0 p-md-2">
          <Form.Group controlId="location_5_address" className={`${styles.Width} `}  >
              <Form.Label className={`${styles.Bold}`} >Location 5 Address</Form.Label>
              <Form.Control 
                className={`${styles.InputScene}`}
                type="text"
                as="textarea"
                rows={2}
                name="location_5_address"
                value={location_5_address}
                onChange={handleChange}
                  />
          </Form.Group>
          {errors?.location_5_address?.map((message, idx) => (
            <Alert variant="warning" key={idx}>
              {message}
            </Alert>
          ))}
          </Col>
          <Col xs={6} className="d-flex justify-content-center p-0 p-md-2">
          <Form.Group controlId="location_5_parking_n_notes" className={`${styles.Width} `}  >
          <Form.Label className={`d-none d-sm-block ${styles.Bold}`}>Location 5 Parking and Notes</Form.Label>
              <Form.Label className={`d-sm-none ${styles.Bold}`}>Location 5 Notes</Form.Label>
              <Form.Control 
                className={`${styles.InputScene}`}
                as="textarea"
                rows={2}
                type="text"
                name="location_5_parking_n_notes"
                value={location_5_parking_n_notes}
                onChange={handleChange}
                  />
          </Form.Group>
          {errors?.location_5_parking_n_notes?.map((message, idx) => (
            <Alert variant="warning" key={idx}>
              {message}
            </Alert>
          ))}
          </Col>
      </Row>
      {/* nearest hospital - important info */}
      <Row>
          <Col xs={6} className="d-flex justify-content-center p-0 p-md-2">
          <Form.Group controlId="nearest_hospital" className={`${styles.Width} `}  >
              <Form.Label className={`${styles.Bold}`} >Nearest Hospital</Form.Label>
              <Form.Control 
                className={`${styles.InputScene}`}
                type="text"
                as="textarea"
                rows={2}
                name="nearest_hospital"
                value={nearest_hospital}
                onChange={handleChange}
                  />
          </Form.Group>
          {errors?.nearest_hospital?.map((message, idx) => (
            <Alert variant="warning" key={idx}>
              {message}
            </Alert>
          ))}
          </Col>
          <Col xs={6} className="d-flex justify-content-center p-0 p-md-2">
          <Form.Group controlId="important_info" className={`${styles.Width} `}  >
              <Form.Label className={`${styles.Bold}`}>Important Info</Form.Label>
              <Form.Control 
                className={`${styles.InputScene}`}
                as="textarea"
                rows={2}
                type="text"
                name="important_info"
                value={important_info}
                onChange={handleChange}
                  />
          </Form.Group>
          {errors?.important_info?.map((message, idx) => (
            <Alert variant="warning" key={idx}>
              {message}
            </Alert>
          ))}
          </Col>
      </Row>
      {/* transport info - department info */}
      <Row>
          <Col xs={6} className="d-flex justify-content-center p-0 p-md-2">
          <Form.Group controlId="transport_info" className={`${styles.Width} `}  >
              <Form.Label className={`${styles.Bold}`} >Transport Info</Form.Label>
              <Form.Control 
                className={`${styles.InputScene}`}
                type="text"
                as="textarea"
                rows={2}
                name="transport_info"
                value={transport_info}
                onChange={handleChange}
                  />
          </Form.Group>
          {errors?.transport_info?.map((message, idx) => (
            <Alert variant="warning" key={idx}>
              {message}
            </Alert>
          ))}
          </Col>
          <Col xs={6} className="d-flex justify-content-center p-0 p-md-2">
          <Form.Group controlId="department_info" className={`${styles.Width} `}  >
              <Form.Label className={`${styles.Bold}`}>Department Info</Form.Label>
              <Form.Control 
                className={`${styles.InputScene}`}
                as="textarea"
                rows={2}
                type="text"
                name="department_info"
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
      </Row>
      {/* weather location */}
      <Row>
          <Col xs={{span: 6, offset: 3} } className="d-flex justify-content-center p-0 p-md-2">
          <Form.Group controlId="weather_location" className={`${styles.Width} `}  >
              <Form.Label className={`${styles.Bold}`} >Weather Location</Form.Label>
              <Form.Control 
                className={`${styles.Input}`}
                type="text"
                name="weather_location"
                value={weather_location}
                onChange={handleChange}
                  />
          </Form.Group>
          {errors?.weather_location?.map((message, idx) => (
            <Alert variant="warning" key={idx}>
              {message}
            </Alert>
          ))}
          </Col>
      </Row>       
      {/* WALKIE CHANNELS */}
      <div>
      <h3 className={` my-3 py-1 ${styles.SubTitle }`} >WALKIE CHANNELS  </h3> 
      <Row>
          <Col xs={3} className="d-flex justify-content-center p-0 p-md-2">
          <Form.Group controlId="walkie_channel_production" className={`${styles.Width} `}  >
              <Form.Label className={`${styles.Bold} `} >Production</Form.Label>
              <Form.Control 
              className={`${styles.Input}`}
              type="text"
              name="walkie_channel_production"
              value={walkie_channel_production}
              onChange={handleChange}
                  />
          </Form.Group>
          {errors?.walkie_channel_production?.map((message, idx) => (
            <Alert variant="warning" key={idx}>
              {message}
            </Alert>
          ))}
          </Col>
          <Col xs={3} className="d-flex justify-content-center p-0 p-md-2">
          <Form.Group controlId="walkie_channel_open" className={`${styles.Width} `}  >
              <Form.Label className={`${styles.Bold} `} >Open</Form.Label>
              <Form.Control 
              className={`${styles.Input}`}
              type="text"
              name="walkie_channel_open"
              value={walkie_channel_open}
              onChange={handleChange}
                  />
          </Form.Group>
          {errors?.walkie_channel_open?.map((message, idx) => (
            <Alert variant="warning" key={idx}>
              {message}
            </Alert>
          ))}
          </Col>
          <Col xs={3} className="d-flex justify-content-center p-0 p-md-2">
          <Form.Group controlId="walkie_channel_transportation" className={`${styles.Width} `}  >
              <Form.Label className={`${styles.Bold} `} >Transportation</Form.Label>
              <Form.Control 
              className={`${styles.Input}`}
              type="text"
              name="walkie_channel_transportation"
              value={walkie_channel_transportation}
              onChange={handleChange}
                  />
          </Form.Group>
          {errors?.walkie_channel_transportation?.map((message, idx) => (
            <Alert variant="warning" key={idx}>
              {message}
            </Alert>
          ))}
          </Col>
          <Col xs={3} className="d-flex justify-content-center p-0 p-md-2">
          <Form.Group controlId="walkie_channel_art_dept" className={`${styles.Width} `}  >
              <Form.Label className={`${styles.Bold} `} >Art Dept</Form.Label>
              <Form.Control 
              className={`${styles.Input}`}
              type="text"
              name="walkie_channel_art_dept"
              value={walkie_channel_art_dept}
              onChange={handleChange}
                  />
          </Form.Group>
          {errors?.walkie_channel_art_dept?.map((message, idx) => (
            <Alert variant="warning" key={idx}>
              {message}
            </Alert>
          ))}
          </Col>
      </Row>
      <Row>
          <Col xs={3} className="d-flex justify-content-center p-0 p-md-2">
          <Form.Group controlId="walkie_channel_rollover" className={`${styles.Width} `}  >
              <Form.Label className={`${styles.Bold} `} >Rollover</Form.Label>
              <Form.Control 
              className={`${styles.Input}`}
              type="text"
              name="walkie_channel_rollover"
              value={walkie_channel_rollover}
              onChange={handleChange}
                  />
          </Form.Group>
          {errors?.walkie_channel_rollover?.map((message, idx) => (
            <Alert variant="warning" key={idx}>
              {message}
            </Alert>
          ))}
          </Col>
          <Col xs={3} className="d-flex justify-content-center p-0 p-md-2">
          <Form.Group controlId="walkie_channel_camera" className={`${styles.Width} `}  >
              <Form.Label className={`${styles.Bold} `} >Camera</Form.Label>
              <Form.Control 
              className={`${styles.Input}`}
              type="text"
              name="walkie_channel_camera"
              value={walkie_channel_camera}
              onChange={handleChange}
                  />
          </Form.Group>
          {errors?.walkie_channel_camera?.map((message, idx) => (
            <Alert variant="warning" key={idx}>
              {message}
            </Alert>
          ))}
          </Col>
          <Col xs={3} className="d-flex justify-content-center p-0 p-md-2">
          <Form.Group controlId="walkie_channel_electric" className={`${styles.Width} `}  >
              <Form.Label className={`${styles.Bold} `} >Electric</Form.Label>
              <Form.Control 
              className={`${styles.Input}`}
              type="text"
              name="walkie_channel_electric"
              value={walkie_channel_electric}
              onChange={handleChange}
                  />
          </Form.Group>
          {errors?.walkie_channel_electric?.map((message, idx) => (
            <Alert variant="warning" key={idx}>
              {message}
            </Alert>
          ))}
          </Col>
          <Col xs={3} className="d-flex justify-content-center p-0 p-md-2">
          <Form.Group controlId="walkie_channel_grip" className={`${styles.Width} `}  >
              <Form.Label className={`${styles.Bold} `} >Grip</Form.Label>
              <Form.Control 
              className={`${styles.Input}`}
              type="text"
              name="walkie_channel_grip"
              value={walkie_channel_grip}
              onChange={handleChange}
                  />
          </Form.Group>
          {errors?.walkie_channel_grip?.map((message, idx) => (
            <Alert variant="warning" key={idx}>
              {message}
            </Alert>
          ))}
          </Col>
      </Row>
      </div>  
    </div>
  )

//   const crewFields = (
//     <div>
//     <h3>Add crew call times</h3>
//       {/* producer */}
//             {producer_name ? (
//               <Row className="mt-3">
//               <Col xs={4}>
//               <p className={`mb-0 ${styles.Bold} `} >Producer </p> 
//               </Col>
//               <Col xs={4}>
//               <p className="mb-0" >{producer_name}</p> 
//               </Col>
//             <Col className="d-flex justify-content-center" xs={4} >
//             <Form.Group controlId="producer_calltime" className={`${styles.Width} `}>
//                 <Form.Label className={`d-none ${styles.Bold} `} ></Form.Label>
//                 <Form.Control 
//                 className={`${styles.Input}`}
//                 type="text"
//                 placeholder="Call"
//                 name="producer_calltime"
//                 value={producer_calltime}
//                 onChange={handleChange}
//                     />
//             </Form.Group>
//             {errors?.producer_calltime?.map((message, idx) => (
//               <Alert variant="warning" key={idx}>
//                 {message}
//               </Alert>
//             ))}
//             </Col>
//             </Row>
//             ) : (
//               ""
//             )}
//       {/* pro coordinator */}
//             {pro_coordinator_name ? (
//               <Row className="mt-3">
//               <Col xs={4}>
//               <p className={`mb-0 ${styles.Bold} `} >Production Coordinator</p> 
//               </Col>
//               <Col xs={4}>
//               <p className="mb-0" >{pro_coordinator_name}</p> 
//               </Col>
//             <Col className="d-flex justify-content-center" xs={4} >
//             <Form.Group controlId="pro_coordinator_calltime" className={`${styles.Width} `}>
//                 <Form.Label className={`d-none ${styles.Bold} `} ></Form.Label>
//                 <Form.Control 
//                 className={`${styles.Input}`}
//                 type="text"
//                 placeholder="Call"
//                 name="pro_coordinator_calltime"
//                 value={pro_coordinator_calltime}
//                 onChange={handleChange}
//                     />
//             </Form.Group>
//             {errors?.pro_coordinator_calltime?.map((message, idx) => (
//               <Alert variant="warning" key={idx}>
//                 {message}
//               </Alert>
//             ))}
//             </Col>
//             </Row>
//             ) : (
//               ""
//             )}

//     </div>
// )

const buttons = (
  <div className="text-center mt-4">    
    <Button
      className={`${btnStyles.Button} ${btnStyles.Blue}`}
      onClick={() => setShowCall(showCall => !showCall)}
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
    <TopBox work="Callsheet Create"
            title3={`Day ${dataDay} - ${dataDate} `} />
    {/* schedule */}
    {/* schedule - side by side buttons */}
    <Row className='text-center'>
    <Col  >
    <Button
        className={`my-3 ${btnStyles.Button} ${btnStyles.Bright}`}
        onClick={() => setShowSchedule(showSchedule => !showSchedule)} >View Schedule
    </Button>
    </Col>
    </Row>
    <div className="mt-3">
    {!showSchedule ? (
      ""
    ) : (
      <>
      <CallsheetSchedule scenes={scenes} setShowSchedule={setShowSchedule} />
      </>
    ) }
    </div>
    {/* cast buttons */}
    <h3 className={`text-center py-0 ${styles.SubTitle }`} >ADD CAST</h3> 
    <Row className='text-center'>
    <Col className='text-center' xs={6}>
    <Button
        className={`mt-3 px-5 ${btnStyles.Button} ${btnStyles.Bright}`}
        onClick={() => setShowAddCast(showAddCast => !showAddCast)} >Characters
    </Button>
    </Col>
    <Col className='text-center' xs={6}  >
    <Button
        className={`mt-3 px-4 ${btnStyles.Button} ${btnStyles.Bright}`}
        onClick={() => setShowAddBg(showAddBg => !showAddBg)} >Bg/Stand-Ins
    </Button>
    </Col>
    </Row>
    <div>
    {!showAddCast ? (
      ""
    ) : (
      <AddCast setShowAddCast={setShowAddCast} dataDay={dataDay} dataDate={dataDate} />
    ) }
    </div> 
    <div>
    {!showAddBg ? (
      ""
    ) : (
      <AddBackGround setShowAddBg={setShowAddBg} dataDay={dataDay} dataDate={dataDate} />
    ) }
    </div> 
    {/* schedule - side by side buttons */}
    <Row className='text-center'>
    <Col className='text-center'  >
    <Button
        className={`mt-3 px-3 ${btnStyles.Button} ${btnStyles.Bright}`}
        onClick={() => setShowSideBySide(showSideBySide => !showSideBySide)} >
          Schedule and Cast Forms Side by Side
    </Button>
    </Col>
    </Row>
    {!showSideBySide ? (
      ""
    ) : (                      
      <Row className="mx-0">
        <Col className="px-1" xs={6}>
        <CallsheetSchedule showSideBySide={showSideBySide} scenes={scenes} setShowSchedule={setShowSchedule} />
        </Col>
        <Col xs={6}>
          <div>
        <AddCast setShowAddCast={setShowAddCast} dataDay={dataDay} dataDate={dataDate} />
          </div>
          <div>
        <AddBackGround setShowAddBg={setShowAddBg} dataDay={dataDay} dataDate={dataDate} />
          </div>
        </Col>
      </Row>             
    ) }
    <h3 className={`text-center mt-5 py-0 ${styles.SubTitle }`} >ADD INFO</h3> 
    <Form className= {`my-3 ${styles.Back}`} onSubmit={handleSubmit}>
    {infoFields}
    <h3 className={`text-center my-2 py-0 ${styles.SubTitle }`} >ADD CREW</h3> 
    {/* {crewFields} */}
    {buttons}
    </Form>
    </div>
  )
}

export default CallsheetEdit