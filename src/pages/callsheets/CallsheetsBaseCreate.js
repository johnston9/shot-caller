import React, { useEffect, useState } from "react";

import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Image from "react-bootstrap/Image";
import Alert from "react-bootstrap/Alert";
import Asset from "../../components/Asset";
import Upload from "../../assets/upload.png";
import appStyles from "../../App.module.css";
import styles from "../../styles/ScheduleCreate.module.css";
import btnStyles from "../../styles/Button.module.css";
import { useHistory, useParams } from "react-router";
import { axiosReq } from "../../api/axiosDefaults";
import TopBox from "../../components/TopBox";
import { useRedirect } from "../../hooks/Redirect";

const CallsheetsBaseCreate = () => {
  useRedirect("loggedOut");
  const [errors, setErrors] = useState({});
  const { id } = useParams();
  const history = useHistory();

  const [postData, setPostData] = useState({
    production_name: "",
    production_company: "",
    company_email: "",
    company_phone: "",
    company_address: "",
    company_logo: "",
    producer_name: "",
    producer_email: "",
    producer_phone: "",
    pro_coordinator_name: "",
    pro_coordinator_email: "",
    pro_coordinator_phone: "",
    travel_coordinator_name: "",
    travel_coordinator_email: "",
    travel_coordinator_phone: "",
    production_pa_name: "",
    production_pa_email: "",
    production_pa_phone: "",
    locations_manager_name: "",
    locations_manager_email: "",
    locations_manager_phone: "",
    oth_production_pos_1_job: "",
    oth_production_pos_1_name: "",
    oth_production_pos_1_email: "",
    oth_production_pos_1_phone: "",
    oth_production_pos_2_job: "",
    oth_production_pos_2_name: "",
    oth_production_pos_2_email: "",
    oth_production_pos_2_phone: "",
    oth_production_pos_3_job: "",
    oth_production_pos_3_name: "",
    oth_production_pos_3_email: "",
    oth_production_pos_3_phone: "",
    oth_production_pos_4_job: "",
    oth_production_pos_4_name: "",
    oth_production_pos_4_email: "",
    oth_production_pos_4_phone: "",
    oth_production_pos_5_job: "",
    oth_production_pos_5_name: "",
    oth_production_pos_5_email: "",
    oth_production_pos_5_phone: "",
    ad_1_name: "",
    ad_1_email: "",
    ad_1_phone: "",
    ad_2_name: "",
    ad_2_email: "",
    ad_2_phone: "",
    ad_3_name: "",
    ad_3_email: "",
    ad_3_phone: "",
    ad_4_name: "",
    ad_4_email: "",
    ad_4_phone: "",
    ad_5_name: "",
    ad_5_email: "",
    ad_5_phone: "",
    character5_costume: "",
    character6: "",
    character6_costume: "",
    character7: "",
    character7_costume: "",
    character8: "",
    character8_costume: "",
    character9: "",
    character9_costume: "",
    character10: "",
    character10_costume: "",
    character11: "",
    character11_costume: "",
    character12: "",
    character12_costume: "",
    other_characters: "",
    other_characters_costumes: "",
    other_characters_calltimes: "",
    other_characters_pickups: "",
    background_artists: "",
    background_artists_costumes: "",
    background_artists_calltimes: "",
    background_artists_pickups: "",
    new_info: "",
    new_content: "",
    character1_calltime: "",
    character1_pickup: "",
    character2_calltime: "",
    character2_pickup: "",
    character3_calltime: "",
    character3_pickup: "",
    character4_calltime: "",
    character4_pickup: "",
    character5_calltime: "",
    character5_pickup: "",
    character6_calltime: "",
    character6_pickup: "",
    character7_calltime: "",
    character7_pickup: "",
    character8_calltime: "",
    character8_pickup: "",
    character9_calltime: "",
    character9_pickup: "",
    character10_calltime: "",
    characte10_pickup: "",
    character11_calltime: "",
    character11_pickup: "",
    character12_calltime: "",
    character12_pickup: "",
})

  const { production_name, production_company, company_phone, company_email,
          company_address, company_logo, 
          producer_name, producer_email, producer_phone,
          pro_coordinator_name, pro_coordinator_email, pro_coordinator_phone,
          travel_coordinator_name, travel_coordinator_email, travel_coordinator_phone,
          production_pa_name, production_pa_email, production_pa_phone,
          locations_manager_name, locations_manager_email, locations_manager_phone,
          oth_production_pos_1_job, oth_production_pos_1_name, oth_production_pos_1_email, oth_production_pos_1_phone,
          oth_production_pos_2_job, oth_production_pos_2_name, oth_production_pos_2_email, oth_production_pos_2_phone,
          oth_production_pos_3_job, oth_production_pos_3_name, oth_production_pos_3_email, oth_production_pos_3_phone,
          oth_production_pos_4_job, oth_production_pos_4_name, oth_production_pos_4_email, oth_production_pos_4_phone,
          oth_production_pos_5_job, oth_production_pos_5_name, oth_production_pos_5_email, oth_production_pos_5_phone,
          ad_1_name, ad_1_email, ad_1_phone,
          ad_2_name, ad_2_email, ad_2_phone,
          ad_3_name, ad_3_email, ad_3_phone,
          ad_4_name, ad_4_email, ad_4_phone,
          ad_5_name, ad_5_email, ad_5_phone,
          filming_location, day_night, time, action, info, pages,
          character1, character1_costume, character2, 
          character2_costume, character3, character3_costume, character4, 
          character4_costume, character5, character5_costume, character6, 
          character6_costume, character7, character7_costume, character8,
          character8_costume, character9, character9_costume, character10,
          character10_costume, character11, character11_costume, character12,
          character12_costume, character1_calltime, character1_pickup,
          character2_calltime, character2_pickup, character3_calltime,
          character3_pickup, character4_calltime, character4_pickup,
          character5_calltime, character5_pickup, character6_calltime, 
          character6_pickup, character7_calltime, character7_pickup,
          character8_calltime, character8_pickup, character9_calltime, 
          character9_pickup, character10_calltime, character10_pickup,
          character11_calltime, character11_pickup, character12_calltime, 
          character12_pickup, other_characters, other_characters_costumes,
          background_artists, background_artists_costumes,
          other_characters_calltimes, other_characters_pickups,
          background_artists_calltimes, background_artists_pickups,
          new_info, new_content } = postData;
      
  const imageInput1 = useRef(null);
    
  const handleChange = (event) => {
    setPostData({
      ...postData,
      [event.target.name]: event.target.value,
    });
    console.log(event.target.name)
  };

  const handleChangeLogo = (event) => {
    if (event.target.files.length) {
      URL.revokeObjectURL(company_logo);
      setPostData({
        ...postData,
        company_logo: URL.createObjectURL(event.target.files[0]),
      });
    }
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData();

    formData.append("production_name", production_name);
    formData.append("production_company", production_company);
    formData.append("company_phone", company_phone);
    formData.append("company_email", company_email);
    formData.append("company_address", company_address);
    formData.append("company_logo", company_logo);
    formData.append("producer_name", producer_name);
    formData.append("producer_email", producer_email);
    formData.append("producer_phone", producer_phone);  
    formData.append("pro_coordinator_name", pro_coordinator_name);
    formData.append("pro_coordinator_email", pro_coordinator_email);
    formData.append("pro_coordinator_phone", pro_coordinator_phone);
    formData.append("travel_coordinator_name", travel_coordinator_name);
    formData.append("travel_coordinator_email", travel_coordinator_email);
    formData.append("travel_coordinator_phone", travel_coordinator_phone);
    formData.append("production_pa_name", production_pa_name);
    formData.append("production_pa_email", production_pa_email);
    formData.append("production_pa_phone", production_pa_phone);
    formData.append("locations_manager_name", locations_manager_name);
    formData.append("locations_manager_email", locations_manager_email);
    formData.append("locations_manager_phone", locations_manager_phone);
    formData.append("oth_production_pos_1_job", oth_production_pos_1_job);
    formData.append("oth_production_pos_1_name", oth_production_pos_1_name);
    formData.append("oth_production_pos_1_email", oth_production_pos_1_email);
    formData.append("oth_production_pos_1_phone", oth_production_pos_1_phone);
    formData.append("character2_calltime", character2_calltime);
    formData.append("ad_1_name", ad_1_name);
    formData.append("ad_1_email", ad_1_email);
    formData.append("ad_1_phone", ad_1_phone);
    formData.append("ad_2_name", ad_2_name);
    formData.append("ad_2_email", ad_2_email);
    formData.append("ad_2_phone", ad_2_phone);
    formData.append("ad_3_name", ad_3_name);
    formData.append("ad_3_email", ad_3_email);
    formData.append("ad_3_phone", ad_3_phone);
    formData.append("ad_4_name", ad_4_name);
    formData.append("ad_4_email", ad_4_email);
    formData.append("ad_4_phone", ad_4_phone);
    formData.append("ad_5_name", ad_5_name);
    formData.append("ad_5_email", ad_5_email);
    formData.append("ad_5_phone", ad_5_phone);
    formData.append("character3_calltime", character3_calltime);
    formData.append("character3_pickup", character3_pickup);
    formData.append("character4", character4);
    formData.append("character4_costume", character4_costume);
    formData.append("character4_calltime", character4_calltime);
    formData.append("character4_pickup", character4_pickup);
    formData.append("character5", character5);
    formData.append("character5_costume", character5_costume);
    formData.append("character5_calltime", character5_calltime);
    formData.append("character5_pickup", character5_pickup);
    formData.append("character6", character6);
    formData.append("character6_costume", character6_costume);
    formData.append("character6_calltime", character6_calltime);
    formData.append("character6_pickup", character6_pickup);
    formData.append("character7", character7);
    formData.append("character7_costume", character7_costume);
    formData.append("character7_calltime", character7_calltime);
    formData.append("character7_pickup", character7_pickup);
    formData.append("character8", character8);
    formData.append("character8_costume", character8_costume);
    formData.append("character8_calltime", character8_calltime);
    formData.append("character8_pickup", character8_pickup);
    formData.append("character9", character9);
    formData.append("character9_costume", character9_costume);
    formData.append("character9_calltime", character9_calltime);
    formData.append("character9_pickup", character9_pickup);
    formData.append("character10", character10);
    formData.append("character10_costume", character10_costume);
    formData.append("character10_calltime", character10_calltime);
    formData.append("character10_pickup", character10_pickup);
    formData.append("character11", character11);
    formData.append("character11_costume", character11_costume);
    formData.append("character11_calltime", character11_calltime);
    formData.append("character11_pickup", character11_pickup);
    formData.append("character12", character12);
    formData.append("character12_costume", character12_costume);
    formData.append("character12_calltime", character12_calltime);
    formData.append("character12_pickup", character12_pickup);
    formData.append("other_characters", other_characters);
    formData.append("other_characters_costumes", other_characters_costumes);
    formData.append("other_characters_calltimes", other_characters_calltimes);
    formData.append("other_characters_pickups", other_characters_pickups);
    formData.append("background_artists", background_artists);
    formData.append("background_artists_costumes", background_artists_costumes);
    formData.append("background_artists_calltimes", background_artists_calltimes);
    formData.append("background_artists_pickups", background_artists_pickups);    
    formData.append("new_info", new_info);
    formData.append("new_content", new_content);
    if(imageInput1.current.files[0]) {
      formData.append("company_logo", imageInput1.current.files[0]);
    }
    try {
      await axiosReq.post("/base/callsheets/", formData);
      history.push(`/callsheets/`);
    } catch (err) {
      console.log(err);
      if (err.response?.status !== 401) {
        setErrors(err.response?.data);
      }
    }
  }

  const buttons = (
  <div className="text-center mt-4">    
    <Button
      className={`${btnStyles.Button} ${btnStyles.Blue}`}
      onClick={() => history.goBack()}
    >
      Cancel
    </Button>
    <Button className={`${btnStyles.Button} ${btnStyles.Blue}`} type="submit">
      Create
    </Button>
  </div>
  );

  const textFields = (
    <div className="text-center">
      {/* PRODUCTION COMPANY INFO */}
      <h3 className="mt-4" >Production Company Info</h3> 
      <p className={` mb-0 py-1 ${styles.SubTitle }`}></p>
      {/* Production Name - Production Company */}
      <Row>
          <Col xs={6} className="d-flex justify-content-center p-0 p-md-2">
          <Form.Group controlId="production_name" className={`${styles.Width} `}  >
              <Form.Label className={`${styles.Bold}`} >Production Name</Form.Label>
              <Form.Control 
                className={`${styles.Input}`}
                type="text"
                name="production_name"
                value={production_name}
                onChange={handleChange}
                  />
          </Form.Group>
          {errors?.production_name?.map((message, idx) => (
            <Alert variant="warning" key={idx}>
              {message}
            </Alert>
          ))}
          </Col>
          <Col xs={6} className="d-flex justify-content-center p-0 p-md-2">
          <Form.Group controlId="production_company" className={`${styles.Width} `}  >
              <Form.Label className={`${styles.Bold}`}>Production Company</Form.Label>
              <Form.Control 
                className={`${styles.Input}`}
                type="text"
                name="production_company"
                value={production_company}
                onChange={handleChange}
                  />
          </Form.Group>
          {errors?.production_company?.map((message, idx) => (
            <Alert variant="warning" key={idx}>
              {message}
            </Alert>
          ))}
          </Col>
      </Row>
      {/* phone - email */}
      <Row>
          <Col xs={6} className="d-flex justify-content-center p-0 p-md-2">
          <Form.Group controlId="company_phone" className={`${styles.Width} `}  >
              <Form.Label className={`${styles.Bold} `} >Company Phone</Form.Label>
              <Form.Control 
              className={`${styles.Input}`}
              type="text"
              name="company_phone"
              value={company_phone}
              onChange={handleChange}
                  />
          </Form.Group>
          {errors?.company_phone?.map((message, idx) => (
            <Alert variant="warning" key={idx}>
              {message}
            </Alert>
          ))}
          </Col>
          <Col xs={6} className="d-flex justify-content-center p-0 p-md-2">
          <Form.Group controlId="company_email" className={`${styles.Width} `}  >
              <Form.Label className={`${styles.Bold}`} >Company Email</Form.Label>
              <Form.Control 
              className={`${styles.Input}`}
              type="text"
              name="company_email"
              value={company_email}
              onChange={handleChange}
                  />
          </Form.Group>
          {errors?.company_email?.map((message, idx) => (
            <Alert variant="warning" key={idx}>
              {message}
            </Alert>
          ))}
          </Col>
      </Row>
      {/* company address - company logo */}
      <Row>
      <Col xs={12} md={6} className="d-flex justify-content-center p-0 p-md-2">
      <Form.Group controlId="company_address" className={`${styles.Width2} `}  >
          <Form.Label className={`${styles.Bold}`} >Company Address</Form.Label>
          <Form.Control 
              className={`${styles.InputScene}`}
              type="text"
              name="company_address"
              as="textarea"
              rows={2}
              value={company_address}
              onChange={handleChange}
              />
      </Form.Group>
      {errors?.company_address?.map((message, idx) => (
        <Alert variant="warning" key={idx}>
          {message}
        </Alert>
      ))}
      </Col>
      <Col xs={6} className="d-flex justify-content-center p-0 p-md-2">
          <div
              className={`${appStyles.Content} d-flex flex-column justify-content-center`}
            >
              <Form.Group className="text-center pt-3">
                  {company_logo ? (
                    <>
                      <figure>
                        <Image className={styles.Logo} src={company_logo} rounded />
                      </figure>
                      <div>
                        <Form.Label
                          className={`${btnStyles.Button} ${btnStyles.Blue} btn`}
                          htmlFor="image-upload"
                        >
                          Change the logo
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
                        message="Upload Image"
                      />
                    </Form.Label>
                  )}
    
                  <Form.Control
                    type="file"
                    id="image-upload"
                    accept="image/*"
                    onChange={handleChangeLogo}
                    ref={imageInput1}
                  />
              </Form.Group>
              {errors?.company_logo?.map((message, idx) => (
                <Alert variant="warning" key={idx}>
                  {message}
                </Alert>
              ))}
          </div>
      </Col>
      </Row>

      {/* DEPARTMENTS CONTACTS */}
      <h3 className="mt-4" >Departments Contacts</h3> 
      <p className={` mb-0 py-1 ${styles.SubTitle }`}></p>

      {/* PRODUCTION */}
      <h3 className="mt-1" >Production</h3> 
      <p className={` mb-0 py-1 ${styles.SubTitle }`}></p>
      {/* Producer */}
      <h5 className="mt-1" >Producer</h5> 
      <Row>
          <Col xs={4} className="d-flex justify-content-center p-0 p-md-2">
          <Form.Group controlId="producer_name" className={`${styles.Width} `}  >
              <Form.Label className={`${styles.Bold} `} >Name</Form.Label>
              <Form.Control 
              className={`${styles.Input}`}
              type="text"
              name="producer_name"
              value={producer_name}
              onChange={handleChange}
                  />
          </Form.Group>
          {errors?.producer_name?.map((message, idx) => (
            <Alert variant="warning" key={idx}>
              {message}
            </Alert>
          ))}
          </Col>
          <Col xs={4} className="d-flex justify-content-center p-0 p-md-2">
          <Form.Group controlId="producer_email" className={`${styles.Width} `}  >
              <Form.Label className={`${styles.Bold}`} >Email</Form.Label>
              <Form.Control 
              className={`${styles.Input}`}
              type="text"
              name="producer_email"
              value={producer_email}
              onChange={handleChange}
                  />
          </Form.Group>
          {errors?.producer_email?.map((message, idx) => (
            <Alert variant="warning" key={idx}>
              {message}
            </Alert>
          ))}
          </Col>
          <Col xs={4} className="d-flex justify-content-center p-0 p-md-2">
          <Form.Group controlId="producer_phone" className={`${styles.Width} `}  >
              <Form.Label className={`${styles.Bold}`} >Phone</Form.Label>
              <Form.Control 
              className={`${styles.Input}`}
              type="text"
              name="producer_phone"
              value={producer_phone}
              onChange={handleChange}
                  />
          </Form.Group>
          {errors?.producer_phone?.map((message, idx) => (
            <Alert variant="warning" key={idx}>
              {message}
            </Alert>
          ))}
          </Col>
      </Row>
      {/* Production Coordinator */}
      <h5 className="mt-1" >Production Coordinator</h5> 
      <Row>
          <Col xs={4} className="d-flex justify-content-center p-0 p-md-2">
          <Form.Group controlId="pro_coordinator_name" className={`${styles.Width} `}  >
              <Form.Label className={`${styles.Bold} `} >Name</Form.Label>
              <Form.Control 
              className={`${styles.Input}`}
              type="text"
              name="pro_coordinator_name"
              value={pro_coordinator_name}
              onChange={handleChange}
                  />
          </Form.Group>
          {errors?.pro_coordinator_name?.map((message, idx) => (
            <Alert variant="warning" key={idx}>
              {message}
            </Alert>
          ))}
          </Col>
          <Col xs={4} className="d-flex justify-content-center p-0 p-md-2">
          <Form.Group controlId="pro_coordinator_email" className={`${styles.Width} `}  >
              <Form.Label className={`${styles.Bold}`} >Email</Form.Label>
              <Form.Control 
              className={`${styles.Input}`}
              type="text"
              name="pro_coordinator_email"
              value={pro_coordinator_email}
              onChange={handleChange}
                  />
          </Form.Group>
          {errors?.pro_coordinator_email?.map((message, idx) => (
            <Alert variant="warning" key={idx}>
              {message}
            </Alert>
          ))}
          </Col>
          <Col xs={4} className="d-flex justify-content-center p-0 p-md-2">
          <Form.Group controlId="pro_coordinator_phone" className={`${styles.Width} `}  >
              <Form.Label className={`${styles.Bold}`} >Phone</Form.Label>
              <Form.Control 
              className={`${styles.Input}`}
              type="text"
              name="pro_coordinator_phone"
              value={pro_coordinator_phone}
              onChange={handleChange}
                  />
          </Form.Group>
          {errors?.pro_coordinator_phone?.map((message, idx) => (
            <Alert variant="warning" key={idx}>
              {message}
            </Alert>
          ))}
          </Col>
      </Row>
      {/* Travel Coordinator */}
      <h5 className="mt-1" >Travel Coordinator</h5> 
      <Row>
          <Col xs={4} className="d-flex justify-content-center p-0 p-md-2">
          <Form.Group controlId="travel_coordinator_name" className={`${styles.Width} `}  >
              <Form.Label className={`${styles.Bold} `} >Name</Form.Label>
              <Form.Control 
              className={`${styles.Input}`}
              type="text"
              name="travel_coordinator_name"
              value={travel_coordinator_name}
              onChange={handleChange}
                  />
          </Form.Group>
          {errors?.travel_coordinator_name?.map((message, idx) => (
            <Alert variant="warning" key={idx}>
              {message}
            </Alert>
          ))}
          </Col>
          <Col xs={4} className="d-flex justify-content-center p-0 p-md-2">
          <Form.Group controlId="travel_coordinator_email" className={`${styles.Width} `}  >
              <Form.Label className={`${styles.Bold}`} >Email</Form.Label>
              <Form.Control 
              className={`${styles.Input}`}
              type="text"
              name="travel_coordinator_email"
              value={travel_coordinator_email}
              onChange={handleChange}
                  />
          </Form.Group>
          {errors?.travel_coordinator_email?.map((message, idx) => (
            <Alert variant="warning" key={idx}>
              {message}
            </Alert>
          ))}
          </Col>
          <Col xs={4} className="d-flex justify-content-center p-0 p-md-2">
          <Form.Group controlId="travel_coordinator_phone" className={`${styles.Width} `}  >
              <Form.Label className={`${styles.Bold}`} >Phone</Form.Label>
              <Form.Control 
              className={`${styles.Input}`}
              type="text"
              name="travel_coordinator_phone"
              value={travel_coordinator_phone}
              onChange={handleChange}
                  />
          </Form.Group>
          {errors?.travel_coordinator_phone?.map((message, idx) => (
            <Alert variant="warning" key={idx}>
              {message}
            </Alert>
          ))}
          </Col>
      </Row>
      {/* P.A. */}
      <h5 className="mt-1" >Production P.A.</h5> 
      <Row>
          <Col xs={4} className="d-flex justify-content-center p-0 p-md-2">
          <Form.Group controlId="production_pa_name" className={`${styles.Width} `}  >
              <Form.Label className={`${styles.Bold} `} >Name</Form.Label>
              <Form.Control 
              className={`${styles.Input}`}
              type="text"
              name="production_pa_name"
              value={production_pa_name}
              onChange={handleChange}
                  />
          </Form.Group>
          {errors?.production_pa_name?.map((message, idx) => (
            <Alert variant="warning" key={idx}>
              {message}
            </Alert>
          ))}
          </Col>
          <Col xs={4} className="d-flex justify-content-center p-0 p-md-2">
          <Form.Group controlId="production_pa_email" className={`${styles.Width} `}  >
              <Form.Label className={`${styles.Bold}`} >Email</Form.Label>
              <Form.Control 
              className={`${styles.Input}`}
              type="text"
              name="production_pa_email"
              value={production_pa_email}
              onChange={handleChange}
                  />
          </Form.Group>
          {errors?.production_pa_email?.map((message, idx) => (
            <Alert variant="warning" key={idx}>
              {message}
            </Alert>
          ))}
          </Col>
          <Col xs={4} className="d-flex justify-content-center p-0 p-md-2">
          <Form.Group controlId="production_pa_phone" className={`${styles.Width} `}  >
              <Form.Label className={`${styles.Bold}`} >Phone</Form.Label>
              <Form.Control 
              className={`${styles.Input}`}
              type="text"
              name="production_pa_phone"
              value={production_pa_phone}
              onChange={handleChange}
                  />
          </Form.Group>
          {errors?.production_pa_phone?.map((message, idx) => (
            <Alert variant="warning" key={idx}>
              {message}
            </Alert>
          ))}
          </Col>
      </Row>
      {/* Locations Manager */}
      <h5 className="mt-1" >Locations Manager</h5> 
      <Row>
          <Col xs={4} className="d-flex justify-content-center p-0 p-md-2">
          <Form.Group controlId="locations_manager_name" className={`${styles.Width} `}  >
              <Form.Label className={`${styles.Bold} `} >Name</Form.Label>
              <Form.Control 
              className={`${styles.Input}`}
              type="text"
              name="locations_manager_name"
              value={locations_manager_name}
              onChange={handleChange}
                  />
          </Form.Group>
          {errors?.locations_manager_name?.map((message, idx) => (
            <Alert variant="warning" key={idx}>
              {message}
            </Alert>
          ))}
          </Col>
          <Col xs={4} className="d-flex justify-content-center p-0 p-md-2">
          <Form.Group controlId="locations_manager_email" className={`${styles.Width} `}  >
              <Form.Label className={`${styles.Bold}`} >Email</Form.Label>
              <Form.Control 
              className={`${styles.Input}`}
              type="text"
              name="locations_manager_email"
              value={locations_manager_email}
              onChange={handleChange}
                  />
          </Form.Group>
          {errors?.locations_manager_email?.map((message, idx) => (
            <Alert variant="warning" key={idx}>
              {message}
            </Alert>
          ))}
          </Col>
          <Col xs={4} className="d-flex justify-content-center p-0 p-md-2">
          <Form.Group controlId="locations_manager_phone" className={`${styles.Width} `}  >
              <Form.Label className={`${styles.Bold}`} >Phone</Form.Label>
              <Form.Control 
              className={`${styles.Input}`}
              type="text"
              name="locations_manager_phone"
              value={locations_manager_phone}
              onChange={handleChange}
                  />
          </Form.Group>
          {errors?.locations_manager_phone?.map((message, idx) => (
            <Alert variant="warning" key={idx}>
              {message}
            </Alert>
          ))}
          </Col>
      </Row>
      {/* Other Production Position 1 */}
      <h5 className="mt-1" >Add Other Production Position 1</h5> 
      <Row>
          <Col sx={4} ></Col>
          <Col xs={4} className="d-flex justify-content-center p-0 p-md-2">
          <Form.Group controlId="oth_production_pos_1_job" className={`${styles.Width} `}  >
              <Form.Label className={`${styles.Bold} `} >Position</Form.Label>
              <Form.Control 
              className={`${styles.Input}`}
              type="text"
              name="oth_production_pos_1_job"
              value={oth_production_pos_1_job}
              onChange={handleChange}
                  />
          </Form.Group>
          {errors?.oth_production_pos_1_job?.map((message, idx) => (
            <Alert variant="warning" key={idx}>
              {message}
            </Alert>
          ))}
          </Col>
      </Row>
      <Row>
          <Col xs={4} className="d-flex justify-content-center p-0 p-md-2">
          <Form.Group controlId="oth_production_pos_1_name" className={`${styles.Width} `}  >
              <Form.Label className={`${styles.Bold} `} >Name</Form.Label>
              <Form.Control 
              className={`${styles.Input}`}
              type="text"
              name="oth_production_pos_1_name"
              value={oth_production_pos_1_name}
              onChange={handleChange}
                  />
          </Form.Group>
          {errors?.oth_production_pos_1_name?.map((message, idx) => (
            <Alert variant="warning" key={idx}>
              {message}
            </Alert>
          ))}
          </Col>
          <Col xs={4} className="d-flex justify-content-center p-0 p-md-2">
          <Form.Group controlId="oth_production_pos_1_email" className={`${styles.Width} `}  >
              <Form.Label className={`${styles.Bold}`} >Email</Form.Label>
              <Form.Control 
              className={`${styles.Input}`}
              type="text"
              name="oth_production_pos_1_email"
              value={oth_production_pos_1_email}
              onChange={handleChange}
                  />
          </Form.Group>
          {errors?.oth_production_pos_1_email?.map((message, idx) => (
            <Alert variant="warning" key={idx}>
              {message}
            </Alert>
          ))}
          </Col>
          <Col xs={4} className="d-flex justify-content-center p-0 p-md-2">
          <Form.Group controlId="oth_production_pos_1_phone" className={`${styles.Width} `}  >
              <Form.Label className={`${styles.Bold}`} >Phone</Form.Label>
              <Form.Control 
              className={`${styles.Input}`}
              type="text"
              name="oth_production_pos_1_phone"
              value={oth_production_pos_1_phone}
              onChange={handleChange}
                  />
          </Form.Group>
          {errors?.oth_production_pos_1_phone?.map((message, idx) => (
            <Alert variant="warning" key={idx}>
              {message}
            </Alert>
          ))}
          </Col>
      </Row>
      {/* Other Production Position 2 */}
      <h5 className="mt-1" >Add Other Production Position 2</h5> 
      <Row>
          <Col sx={4} ></Col>
          <Col xs={4} className="d-flex justify-content-center p-0 p-md-2">
          <Form.Group controlId="oth_production_pos_2_job" className={`${styles.Width} `}  >
              <Form.Label className={`${styles.Bold} `} >Position</Form.Label>
              <Form.Control 
              className={`${styles.Input}`}
              type="text"
              name="oth_production_pos_2_job"
              value={oth_production_pos_2_job}
              onChange={handleChange}
                  />
          </Form.Group>
          {errors?.oth_production_pos_2_job?.map((message, idx) => (
            <Alert variant="warning" key={idx}>
              {message}
            </Alert>
          ))}
          </Col>
      </Row>
      <Row>
          <Col xs={4} className="d-flex justify-content-center p-0 p-md-2">
          <Form.Group controlId="oth_production_pos_2_name" className={`${styles.Width} `}  >
              <Form.Label className={`${styles.Bold} `} >Name</Form.Label>
              <Form.Control 
              className={`${styles.Input}`}
              type="text"
              name="oth_production_pos_2_name"
              value={oth_production_pos_2_name}
              onChange={handleChange}
                  />
          </Form.Group>
          {errors?.oth_production_pos_2_name?.map((message, idx) => (
            <Alert variant="warning" key={idx}>
              {message}
            </Alert>
          ))}
          </Col>
          <Col xs={4} className="d-flex justify-content-center p-0 p-md-2">
          <Form.Group controlId="oth_production_pos_2_email" className={`${styles.Width} `}  >
              <Form.Label className={`${styles.Bold}`} >Email</Form.Label>
              <Form.Control 
              className={`${styles.Input}`}
              type="text"
              name="oth_production_pos_2_email"
              value={oth_production_pos_2_email}
              onChange={handleChange}
                  />
          </Form.Group>
          {errors?.oth_production_pos_2_email?.map((message, idx) => (
            <Alert variant="warning" key={idx}>
              {message}
            </Alert>
          ))}
          </Col>
          <Col xs={4} className="d-flex justify-content-center p-0 p-md-2">
          <Form.Group controlId="oth_production_pos_2_phone" className={`${styles.Width} `}  >
              <Form.Label className={`${styles.Bold}`} >Phone</Form.Label>
              <Form.Control 
              className={`${styles.Input}`}
              type="text"
              name="oth_production_pos_2_phone"
              value={oth_production_pos_2_phone}
              onChange={handleChange}
                  />
          </Form.Group>
          {errors?.oth_production_pos_2_phone?.map((message, idx) => (
            <Alert variant="warning" key={idx}>
              {message}
            </Alert>
          ))}
          </Col>
      </Row>
      {/* Other Production Position 3 */}
      <h5 className="mt-1" >Add Other Production Position 3</h5> 
      <Row>
          <Col sx={4} ></Col>
          <Col xs={4} className="d-flex justify-content-center p-0 p-md-2">
          <Form.Group controlId="oth_production_pos_3_job" className={`${styles.Width} `}  >
              <Form.Label className={`${styles.Bold} `} >Position</Form.Label>
              <Form.Control 
              className={`${styles.Input}`}
              type="text"
              name="oth_production_pos_3_job"
              value={oth_production_pos_3_job}
              onChange={handleChange}
                  />
          </Form.Group>
          {errors?.oth_production_pos_3_job?.map((message, idx) => (
            <Alert variant="warning" key={idx}>
              {message}
            </Alert>
          ))}
          </Col>
      </Row>
      <Row>
          <Col xs={4} className="d-flex justify-content-center p-0 p-md-2">
          <Form.Group controlId="oth_production_pos_3_name" className={`${styles.Width} `}  >
              <Form.Label className={`${styles.Bold} `} >Name</Form.Label>
              <Form.Control 
              className={`${styles.Input}`}
              type="text"
              name="oth_production_pos_3_name"
              value={oth_production_pos_3_name}
              onChange={handleChange}
                  />
          </Form.Group>
          {errors?.oth_production_pos_3_name?.map((message, idx) => (
            <Alert variant="warning" key={idx}>
              {message}
            </Alert>
          ))}
          </Col>
          <Col xs={4} className="d-flex justify-content-center p-0 p-md-2">
          <Form.Group controlId="oth_production_pos_3_email" className={`${styles.Width} `}  >
              <Form.Label className={`${styles.Bold}`} >Email</Form.Label>
              <Form.Control 
              className={`${styles.Input}`}
              type="text"
              name="oth_production_pos_3_email"
              value={oth_production_pos_3_email}
              onChange={handleChange}
                  />
          </Form.Group>
          {errors?.oth_production_pos_3_email?.map((message, idx) => (
            <Alert variant="warning" key={idx}>
              {message}
            </Alert>
          ))}
          </Col>
          <Col xs={4} className="d-flex justify-content-center p-0 p-md-2">
          <Form.Group controlId="oth_production_pos_3_phone" className={`${styles.Width} `}  >
              <Form.Label className={`${styles.Bold}`} >Phone</Form.Label>
              <Form.Control 
              className={`${styles.Input}`}
              type="text"
              name="oth_production_pos_3_phone"
              value={oth_production_pos_3_phone}
              onChange={handleChange}
                  />
          </Form.Group>
          {errors?.oth_production_pos_3_phone?.map((message, idx) => (
            <Alert variant="warning" key={idx}>
              {message}
            </Alert>
          ))}
          </Col>
      </Row>
      {/* Other Production Position 4 */}
      <h5 className="mt-1" >Add Other Production Position 4</h5> 
      <Row>
          <Col sx={4} ></Col>
          <Col xs={4} className="d-flex justify-content-center p-0 p-md-2">
          <Form.Group controlId="oth_production_pos_4_job" className={`${styles.Width} `}  >
              <Form.Label className={`${styles.Bold} `} >Position</Form.Label>
              <Form.Control 
              className={`${styles.Input}`}
              type="text"
              name="oth_production_pos_4_job"
              value={oth_production_pos_4_job}
              onChange={handleChange}
                  />
          </Form.Group>
          {errors?.oth_production_pos_4_job?.map((message, idx) => (
            <Alert variant="warning" key={idx}>
              {message}
            </Alert>
          ))}
          </Col>
      </Row>
      <Row>
          <Col xs={4} className="d-flex justify-content-center p-0 p-md-2">
          <Form.Group controlId="oth_production_pos_4_name" className={`${styles.Width} `}  >
              <Form.Label className={`${styles.Bold} `} >Name</Form.Label>
              <Form.Control 
              className={`${styles.Input}`}
              type="text"
              name="oth_production_pos_4_name"
              value={oth_production_pos_4_name}
              onChange={handleChange}
                  />
          </Form.Group>
          {errors?.oth_production_pos_4_name?.map((message, idx) => (
            <Alert variant="warning" key={idx}>
              {message}
            </Alert>
          ))}
          </Col>
          <Col xs={4} className="d-flex justify-content-center p-0 p-md-2">
          <Form.Group controlId="oth_production_pos_4_email" className={`${styles.Width} `}  >
              <Form.Label className={`${styles.Bold}`} >Email</Form.Label>
              <Form.Control 
              className={`${styles.Input}`}
              type="text"
              name="oth_production_pos_4_email"
              value={oth_production_pos_4_email}
              onChange={handleChange}
                  />
          </Form.Group>
          {errors?.oth_production_pos_4_email?.map((message, idx) => (
            <Alert variant="warning" key={idx}>
              {message}
            </Alert>
          ))}
          </Col>
          <Col xs={4} className="d-flex justify-content-center p-0 p-md-2">
          <Form.Group controlId="oth_production_pos_4_phone" className={`${styles.Width} `}  >
              <Form.Label className={`${styles.Bold}`} >Phone</Form.Label>
              <Form.Control 
              className={`${styles.Input}`}
              type="text"
              name="oth_production_pos_4_phone"
              value={oth_production_pos_4_phone}
              onChange={handleChange}
                  />
          </Form.Group>
          {errors?.oth_production_pos_4_phone?.map((message, idx) => (
            <Alert variant="warning" key={idx}>
              {message}
            </Alert>
          ))}
          </Col>
      </Row>
      {/* Other Production Position 5 */}
      <h5 className="mt-1" >Add Other Production Position 5</h5> 
      <Row>
          <Col sx={4} ></Col>
          <Col xs={4} className="d-flex justify-content-center p-0 p-md-2">
          <Form.Group controlId="oth_production_pos_5_job" className={`${styles.Width} `}  >
              <Form.Label className={`${styles.Bold} `} >Position</Form.Label>
              <Form.Control 
              className={`${styles.Input}`}
              type="text"
              name="oth_production_pos_5_job"
              value={oth_production_pos_5_job}
              onChange={handleChange}
                  />
          </Form.Group>
          {errors?.oth_production_pos_5_job?.map((message, idx) => (
            <Alert variant="warning" key={idx}>
              {message}
            </Alert>
          ))}
          </Col>
      </Row>
      <Row>
          <Col xs={4} className="d-flex justify-content-center p-0 p-md-2">
          <Form.Group controlId="oth_production_pos_5_name" className={`${styles.Width} `}  >
              <Form.Label className={`${styles.Bold} `} >Name</Form.Label>
              <Form.Control 
              className={`${styles.Input}`}
              type="text"
              name="oth_production_pos_5_name"
              value={oth_production_pos_5_name}
              onChange={handleChange}
                  />
          </Form.Group>
          {errors?.oth_production_pos_5_name?.map((message, idx) => (
            <Alert variant="warning" key={idx}>
              {message}
            </Alert>
          ))}
          </Col>
          <Col xs={4} className="d-flex justify-content-center p-0 p-md-2">
          <Form.Group controlId="oth_production_pos_5_email" className={`${styles.Width} `}  >
              <Form.Label className={`${styles.Bold}`} >Email</Form.Label>
              <Form.Control 
              className={`${styles.Input}`}
              type="text"
              name="oth_production_pos_5_email"
              value={oth_production_pos_5_email}
              onChange={handleChange}
                  />
          </Form.Group>
          {errors?.oth_production_pos_5_email?.map((message, idx) => (
            <Alert variant="warning" key={idx}>
              {message}
            </Alert>
          ))}
          </Col>
          <Col xs={4} className="d-flex justify-content-center p-0 p-md-2">
          <Form.Group controlId="oth_production_pos_5_phone" className={`${styles.Width} `}  >
              <Form.Label className={`${styles.Bold}`} >Phone</Form.Label>
              <Form.Control 
              className={`${styles.Input}`}
              type="text"
              name="oth_production_pos_5_phone"
              value={oth_production_pos_5_phone}
              onChange={handleChange}
                  />
          </Form.Group>
          {errors?.oth_production_pos_5_phone?.map((message, idx) => (
            <Alert variant="warning" key={idx}>
              {message}
            </Alert>
          ))}
          </Col>
      </Row>

      {/* ASSISTANT DIRECTORS */}
      <h3 className="mt-1" >Production</h3> 
      <p className={` mb-0 py-1 ${styles.SubTitle }`}></p>
      {/* 1st Assistant Director */}
      <h5 className="mt-1" >1st Assistant Director</h5> 
      <Row>
          <Col xs={4} className="d-flex justify-content-center p-0 p-md-2">
          <Form.Group controlId="ad_1_name" className={`${styles.Width} `}  >
              <Form.Label className={`${styles.Bold} `} >Name</Form.Label>
              <Form.Control 
              className={`${styles.Input}`}
              type="text"
              name="ad_1_name"
              value={ad_1_name}
              onChange={handleChange}
                  />
          </Form.Group>
          {errors?.ad_1_name?.map((message, idx) => (
            <Alert variant="warning" key={idx}>
              {message}
            </Alert>
          ))}
          </Col>
          <Col xs={4} className="d-flex justify-content-center p-0 p-md-2">
          <Form.Group controlId="ad_1_email" className={`${styles.Width} `}  >
              <Form.Label className={`${styles.Bold}`} >Email</Form.Label>
              <Form.Control 
              className={`${styles.Input}`}
              type="text"
              name="ad_1_email"
              value={ad_1_email}
              onChange={handleChange}
                  />
          </Form.Group>
          {errors?.ad_1_email?.map((message, idx) => (
            <Alert variant="warning" key={idx}>
              {message}
            </Alert>
          ))}
          </Col>
          <Col xs={4} className="d-flex justify-content-center p-0 p-md-2">
          <Form.Group controlId="ad_1_phone" className={`${styles.Width} `}  >
              <Form.Label className={`${styles.Bold}`} >Phone</Form.Label>
              <Form.Control 
              className={`${styles.Input}`}
              type="text"
              name="ad_1_phone"
              value={ad_1_phone}
              onChange={handleChange}
                  />
          </Form.Group>
          {errors?.ad_1_phone?.map((message, idx) => (
            <Alert variant="warning" key={idx}>
              {message}
            </Alert>
          ))}
          </Col>
      </Row>
      {/* 2nd Assistant Director */}
      <h5 className="mt-1" >2nd Assistant Director</h5> 
      <Row>
          <Col xs={4} className="d-flex justify-content-center p-0 p-md-2">
          <Form.Group controlId="ad_2_name" className={`${styles.Width} `}  >
              <Form.Label className={`${styles.Bold} `} >Name</Form.Label>
              <Form.Control 
              className={`${styles.Input}`}
              type="text"
              name="ad_2_name"
              value={ad_2_name}
              onChange={handleChange}
                  />
          </Form.Group>
          {errors?.ad_2_name?.map((message, idx) => (
            <Alert variant="warning" key={idx}>
              {message}
            </Alert>
          ))}
          </Col>
          <Col xs={4} className="d-flex justify-content-center p-0 p-md-2">
          <Form.Group controlId="ad_2_email" className={`${styles.Width} `}  >
              <Form.Label className={`${styles.Bold}`} >Email</Form.Label>
              <Form.Control 
              className={`${styles.Input}`}
              type="text"
              name="ad_2_email"
              value={ad_2_email}
              onChange={handleChange}
                  />
          </Form.Group>
          {errors?.ad_2_email?.map((message, idx) => (
            <Alert variant="warning" key={idx}>
              {message}
            </Alert>
          ))}
          </Col>
          <Col xs={4} className="d-flex justify-content-center p-0 p-md-2">
          <Form.Group controlId="ad_2_phone" className={`${styles.Width} `}  >
              <Form.Label className={`${styles.Bold}`} >Phone</Form.Label>
              <Form.Control 
              className={`${styles.Input}`}
              type="text"
              name="ad_2_phone"
              value={ad_2_phone}
              onChange={handleChange}
                  />
          </Form.Group>
          {errors?.ad_2_phone?.map((message, idx) => (
            <Alert variant="warning" key={idx}>
              {message}
            </Alert>
          ))}
          </Col>
      </Row>
      {/* 3rd Assistant Director */}
      <h5 className="mt-1" >3rd Assistant Director</h5> 
      <Row>
          <Col xs={4} className="d-flex justify-content-center p-0 p-md-2">
          <Form.Group controlId="ad_3_name" className={`${styles.Width} `}  >
              <Form.Label className={`${styles.Bold} `} >Name</Form.Label>
              <Form.Control 
              className={`${styles.Input}`}
              type="text"
              name="ad_3_name"
              value={ad_3_name}
              onChange={handleChange}
                  />
          </Form.Group>
          {errors?.ad_3_name?.map((message, idx) => (
            <Alert variant="warning" key={idx}>
              {message}
            </Alert>
          ))}
          </Col>
          <Col xs={4} className="d-flex justify-content-center p-0 p-md-2">
          <Form.Group controlId="ad_3_email" className={`${styles.Width} `}  >
              <Form.Label className={`${styles.Bold}`} >Email</Form.Label>
              <Form.Control 
              className={`${styles.Input}`}
              type="text"
              name="ad_3_email"
              value={ad_3_email}
              onChange={handleChange}
                  />
          </Form.Group>
          {errors?.ad_3_email?.map((message, idx) => (
            <Alert variant="warning" key={idx}>
              {message}
            </Alert>
          ))}
          </Col>
          <Col xs={4} className="d-flex justify-content-center p-0 p-md-2">
          <Form.Group controlId="ad_3_phone" className={`${styles.Width} `}  >
              <Form.Label className={`${styles.Bold}`} >Phone</Form.Label>
              <Form.Control 
              className={`${styles.Input}`}
              type="text"
              name="ad_3_phone"
              value={ad_3_phone}
              onChange={handleChange}
                  />
          </Form.Group>
          {errors?.ad_3_phone?.map((message, idx) => (
            <Alert variant="warning" key={idx}>
              {message}
            </Alert>
          ))}
          </Col>
      </Row>
      {/* 4th Assistant Director */}
      <h5 className="mt-1" >4th Assistant Director</h5> 
      <Row>
          <Col xs={4} className="d-flex justify-content-center p-0 p-md-2">
          <Form.Group controlId="ad_4_name" className={`${styles.Width} `}  >
              <Form.Label className={`${styles.Bold} `} >Name</Form.Label>
              <Form.Control 
              className={`${styles.Input}`}
              type="text"
              name="ad_4_name"
              value={ad_4_name}
              onChange={handleChange}
                  />
          </Form.Group>
          {errors?.ad_4_name?.map((message, idx) => (
            <Alert variant="warning" key={idx}>
              {message}
            </Alert>
          ))}
          </Col>
          <Col xs={4} className="d-flex justify-content-center p-0 p-md-2">
          <Form.Group controlId="ad_4_email" className={`${styles.Width} `}  >
              <Form.Label className={`${styles.Bold}`} >Email</Form.Label>
              <Form.Control 
              className={`${styles.Input}`}
              type="text"
              name="ad_4_email"
              value={ad_4_email}
              onChange={handleChange}
                  />
          </Form.Group>
          {errors?.ad_4_email?.map((message, idx) => (
            <Alert variant="warning" key={idx}>
              {message}
            </Alert>
          ))}
          </Col>
          <Col xs={4} className="d-flex justify-content-center p-0 p-md-2">
          <Form.Group controlId="ad_4_phone" className={`${styles.Width} `}  >
              <Form.Label className={`${styles.Bold}`} >Phone</Form.Label>
              <Form.Control 
              className={`${styles.Input}`}
              type="text"
              name="ad_4_phone"
              value={ad_4_phone}
              onChange={handleChange}
                  />
          </Form.Group>
          {errors?.ad_4_phone?.map((message, idx) => (
            <Alert variant="warning" key={idx}>
              {message}
            </Alert>
          ))}
          </Col>
      </Row>
      {/* 5th Assistant Director */}
      <h5 className="mt-1" >5th Assistant Director</h5> 
      <Row>
          <Col xs={4} className="d-flex justify-content-center p-0 p-md-2">
          <Form.Group controlId="ad_5_name" className={`${styles.Width} `}  >
              <Form.Label className={`${styles.Bold} `} >Name</Form.Label>
              <Form.Control 
              className={`${styles.Input}`}
              type="text"
              name="ad_5_name"
              value={ad_5_name}
              onChange={handleChange}
                  />
          </Form.Group>
          {errors?.ad_5_name?.map((message, idx) => (
            <Alert variant="warning" key={idx}>
              {message}
            </Alert>
          ))}
          </Col>
          <Col xs={4} className="d-flex justify-content-center p-0 p-md-2">
          <Form.Group controlId="ad_5_email" className={`${styles.Width} `}  >
              <Form.Label className={`${styles.Bold}`} >Email</Form.Label>
              <Form.Control 
              className={`${styles.Input}`}
              type="text"
              name="ad_5_email"
              value={ad_5_email}
              onChange={handleChange}
                  />
          </Form.Group>
          {errors?.ad_5_email?.map((message, idx) => (
            <Alert variant="warning" key={idx}>
              {message}
            </Alert>
          ))}
          </Col>
          <Col xs={4} className="d-flex justify-content-center p-0 p-md-2">
          <Form.Group controlId="ad_5_phone" className={`${styles.Width} `}  >
              <Form.Label className={`${styles.Bold}`} >Phone</Form.Label>
              <Form.Control 
              className={`${styles.Input}`}
              type="text"
              name="ad_5_phone"
              value={ad_5_phone}
              onChange={handleChange}
                  />
          </Form.Group>
          {errors?.ad_5_phone?.map((message, idx) => (
            <Alert variant="warning" key={idx}>
              {message}
            </Alert>
          ))}
          </Col>
      </Row>


          <Row className="mt-2">
            <Col xs={4}>
            <p >Character</p>
            </Col>
            <Col xs={4}>
            <p >Call time</p>
            </Col>
            <Col xs={4}>
            <p >Pickup</p>
            </Col>
            </Row>    
            {/* character1 */}
            {character1 ? (
              <Row className="mt-3">
              <Col xs={4}>
              <h5 className="pt-2" >{character1}</h5> 
              </Col>
            <Col className="d-flex justify-content-center" xs={4} >
            <Form.Group controlId="character1_calltime" className={`${styles.Width2} `}>
                <Form.Label className="p-1 d-none" ></Form.Label>
                <Form.Control 
                className={`${styles.Input}`}
                type="text"
                placeholder="Call Time"
                name="character1_calltime"
                value={character1_calltime}
                onChange={handleChange}
                    />
            </Form.Group>
            {errors?.character1_calltime?.map((message, idx) => (
              <Alert variant="warning" key={idx}>
                {message}
              </Alert>
            ))}
            </Col>
            <Col className="d-flex justify-content-center" xs={4} >
            <Form.Group controlId="character1_pickup" className={`${styles.Width2} `} >
                <Form.Label className="p-1 d-none" ></Form.Label>
                <Form.Control 
                className={`${styles.Input}`}
                type="text"
                placeholder="Pickup"
                name="character1_pickup"
                value={character1_pickup}
                onChange={handleChange}
                    />
            </Form.Group>
            {errors?.character1_pickup?.map((message, idx) => (
              <Alert variant="warning" key={idx}>
                {message}
              </Alert>
            ))}
            </Col>
            </Row>
            ) : (
              ""
            )}
            {/* character2 */}
            {character2 ? (
              <Row className="mt-3">
              <Col xs={4}>
              <h5 className="pt-2" >{character2}</h5> 
              </Col>
            <Col xs={4} className="d-flex justify-content-center">
            <Form.Group controlId="character2_calltime" className={`${styles.Width2} `} >
                <Form.Label className="p-1 d-none" ></Form.Label>
                <Form.Control 
                className={`${styles.Input}`}
                type="text"
                placeholder="Call Time"
                name="character2_calltime"
                value={character2_calltime}
                onChange={handleChange}
                    />
            </Form.Group>
            {errors?.character2_calltime?.map((message, idx) => (
              <Alert variant="warning" key={idx}>
                {message}
              </Alert>
            ))}
            </Col>
            <Col xs={4} className="d-flex justify-content-center" >
            <Form.Group controlId="character2_pickup" className={`${styles.Width2} `} >
                <Form.Label className="p-1 d-none" ></Form.Label>
                <Form.Control 
                className={`${styles.Input}`}
                type="text"
                placeholder="Pickup"
                name="character2_pickup"
                value={character2_pickup}
                onChange={handleChange}
                    />
            </Form.Group>
            {errors?.character2_pickup?.map((message, idx) => (
              <Alert variant="warning" key={idx}>
                {message}
              </Alert>
            ))}
            </Col>
            </Row>
            ) : (
              ""
            )}
            {/* character3 */}
            {character3 ? (
              <Row className="mt-3">
              <Col xs={4}>
              <h5 className="pt-2" >{character3}</h5> 
              </Col>
            <Col xs={4} className="d-flex justify-content-center">
            <Form.Group controlId="character3_calltime" className={`${styles.Width2} `} >
                <Form.Label className="p-1 d-none" ></Form.Label>
                <Form.Control 
                type="text"
                className={`${styles.Input}`}
                placeholder="Call Time"
                name="character3_calltime"
                value={character3_calltime}
                onChange={handleChange}
                    />
            </Form.Group>
            {errors?.character3_calltime?.map((message, idx) => (
              <Alert variant="warning" key={idx}>
                {message}
              </Alert>
            ))}
            </Col>
            <Col xs={4} className="d-flex justify-content-center">
            <Form.Group controlId="character3_pickup" className={`${styles.Width2} `} >
                <Form.Label className="p-1 d-none" ></Form.Label>
                <Form.Control 
                className={`${styles.Input}`}
                type="text"
                placeholder="Pickup"
                name="character3_pickup"
                value={character3_pickup}
                onChange={handleChange}
                    />
            </Form.Group>
            {errors?.character3_pickup?.map((message, idx) => (
              <Alert variant="warning" key={idx}>
                {message}
              </Alert>
            ))}
            </Col>
            </Row>
            ) : (
              ""
            )}
            {/* character4 */}
            {character4 ? (
              <Row className="mt-3">
              <Col xs={4}>
              <h5 className="pt-2" >{character4}</h5> 
              </Col>
            <Col xs={4} className="d-flex justify-content-center">
            <Form.Group controlId="character4_calltime" className={`${styles.Width2} `} >
                <Form.Label className="p-1 d-none" ></Form.Label>
                <Form.Control 
                type="text"
                className={`${styles.Input}`}
                placeholder="Call Time"
                name="character4_calltime"
                value={character4_calltime}
                onChange={handleChange}
                    />
            </Form.Group>
            {errors?.character4_calltime?.map((message, idx) => (
              <Alert variant="warning" key={idx}>
                {message}
              </Alert>
            ))}
            </Col>
            <Col xs={4} className="d-flex justify-content-center">
            <Form.Group controlId="character4_pickup" className={`${styles.Width2} `} >
                <Form.Label className="p-1 d-none" ></Form.Label>
                <Form.Control 
                className={`${styles.Input}`}
                type="text"
                placeholder="Pickup"
                name="character4_pickup"
                value={character4_pickup}
                onChange={handleChange}
                    />
            </Form.Group>
            {errors?.character4_pickup?.map((message, idx) => (
              <Alert variant="warning" key={idx}>
                {message}
              </Alert>
            ))}
            </Col>
            </Row>
            ) : (
              ""
            )}
            {/* character5 */}
            {character5 ? (
              <Row className="mt-3">
              <Col xs={4}>
              <h5 className="pt-2" >{character5}</h5> 
              </Col>
            <Col xs={4} className="d-flex justify-content-center">
            <Form.Group controlId="character5_calltime" className={`${styles.Width2} `} >
                <Form.Label className="p-1 d-none" ></Form.Label>
                <Form.Control 
                type="text"
                className={`${styles.Input}`}
                placeholder="Call Time"
                name="character5_calltime"
                value={character5_calltime}
                onChange={handleChange}
                    />
            </Form.Group>
            {errors?.character5_calltime?.map((message, idx) => (
              <Alert variant="warning" key={idx}>
                {message}
              </Alert>
            ))}
            </Col>
            <Col xs={4} className="d-flex justify-content-center">
            <Form.Group controlId="character5_pickup" className={`${styles.Width2} `} >
                <Form.Label className="p-1 d-none" ></Form.Label>
                <Form.Control 
                className={`${styles.Input}`}
                type="text"
                placeholder="Pickup"
                name="character5_pickup"
                value={character5_pickup}
                onChange={handleChange}
                    />
            </Form.Group>
            {errors?.character5_pickup?.map((message, idx) => (
              <Alert variant="warning" key={idx}>
                {message}
              </Alert>
            ))}
            </Col>
            </Row>
            ) : (
              ""
            )}
            {/* character6 */}
            {character6 ? (
              <Row className="mt-3">
              <Col xs={4}>
              <h5 className="pt-2" >{character6}</h5> 
              </Col>
            <Col xs={4} className="d-flex justify-content-center">
            <Form.Group controlId="character6_calltime" className={`${styles.Width2} `} >
                <Form.Label className="p-1 d-none" ></Form.Label>
                <Form.Control 
                type="text"
                className={`${styles.Input}`}
                placeholder="Call Time"
                name="character6_calltime"
                value={character6_calltime}
                onChange={handleChange}
                    />
            </Form.Group>
            {errors?.character6_calltime?.map((message, idx) => (
              <Alert variant="warning" key={idx}>
                {message}
              </Alert>
            ))}
            </Col>
            <Col xs={4} className="d-flex justify-content-center">
            <Form.Group controlId="character6_pickup" className={`${styles.Width2} `} >
                <Form.Label className="p-1 d-none" ></Form.Label>
                <Form.Control 
                className={`${styles.Input}`}
                type="text"
                placeholder="Pickup"
                name="character6_pickup"
                value={character6_pickup}
                onChange={handleChange}
                    />
            </Form.Group>
            {errors?.character6_pickup?.map((message, idx) => (
              <Alert variant="warning" key={idx}>
                {message}
              </Alert>
            ))}
            </Col>
            </Row>
            ) : (
              ""
            )}
            {/* character7 */}
            {character7 ? (
              <Row className="mt-3">
              <Col xs={4}>
              <h5 className="pt-2" >{character7}</h5> 
              </Col>
            <Col xs={4} className="d-flex justify-content-center">
            <Form.Group controlId="character7_calltime" className={`${styles.Width2} `} >
                <Form.Label className="p-1 d-none" ></Form.Label>
                <Form.Control 
                type="text"
                className={`${styles.Input}`}
                placeholder="Call Time"
                name="character7_calltime"
                value={character7_calltime}
                onChange={handleChange}
                    />
            </Form.Group>
            {errors?.character7_calltime?.map((message, idx) => (
              <Alert variant="warning" key={idx}>
                {message}
              </Alert>
            ))}
            </Col>
            <Col xs={4} className="d-flex justify-content-center">
            <Form.Group controlId="character7_pickup" className={`${styles.Width2} `}className={`${styles.Width2} `} >
                <Form.Label className="p-1 d-none" ></Form.Label>
                <Form.Control 
                className={`${styles.Input}`}
                type="text"
                placeholder="Pickup"
                name="character7_pickup"
                value={character7_pickup}
                onChange={handleChange}
                    />
            </Form.Group>
            {errors?.character7_pickup?.map((message, idx) => (
              <Alert variant="warning" key={idx}>
                {message}
              </Alert>
            ))}
            </Col>
            </Row>
            ) : (
              ""
            )}
            {/* character8 */}
            {character8 ? (
              <Row className="mt-3">
              <Col xs={4}>
              <h5 className="pt-2" >{character8}</h5> 
              </Col>
            <Col xs={4} className="d-flex justify-content-center">
            <Form.Group controlId="character8_calltime" className={`${styles.Width2} `} >
                <Form.Label className="p-1 d-none" ></Form.Label>
                <Form.Control 
                type="text"
                className={`${styles.Input}`}
                placeholder="Call Time"
                name="character8_calltime"
                value={character8_calltime}
                onChange={handleChange}
                    />
            </Form.Group>
            {errors?.character8_calltime?.map((message, idx) => (
              <Alert variant="warning" key={idx}>
                {message}
              </Alert>
            ))}
            </Col>
            <Col xs={4} className="d-flex justify-content-center">
            <Form.Group controlId="character8_pickup" className={`${styles.Width2} `} >
                <Form.Label className="p-1 d-none" ></Form.Label>
                <Form.Control 
                className={`${styles.Input}`}
                type="text"
                placeholder="Pickup"
                name="character8_pickup"
                value={character8_pickup}
                onChange={handleChange}
                    />
            </Form.Group>
            {errors?.character8_pickup?.map((message, idx) => (
              <Alert variant="warning" key={idx}>
                {message}
              </Alert>
            ))}
            </Col>
            </Row>
            ) : (
              ""
            )}
            {/* character9 */}
            {character9 ? (
              <Row className="mt-3">
              <Col xs={4}>
              <h5 className="pt-2" >{character9}</h5> 
              </Col>
            <Col xs={4} className="d-flex justify-content-center">
            <Form.Group controlId="character9_calltime" className={`${styles.Width2} `} >
                <Form.Label className="p-1 d-none" ></Form.Label>
                <Form.Control 
                type="text"
                className={`${styles.Input}`}
                placeholder="Call Time"
                name="character9_calltime"
                value={character9_calltime}
                onChange={handleChange}
                    />
            </Form.Group>
            {errors?.character9_calltime?.map((message, idx) => (
              <Alert variant="warning" key={idx}>
                {message}
              </Alert>
            ))}
            </Col>
            <Col xs={4} className="d-flex justify-content-center">
            <Form.Group controlId="character9_pickup" className={`${styles.Width2} `} >
                <Form.Label className="p-1 d-none" ></Form.Label>
                <Form.Control 
                className={`${styles.Input}`}
                type="text"
                placeholder="Pickup"
                name="character9_pickup"
                value={character9_pickup}
                onChange={handleChange}
                    />
            </Form.Group>
            {errors?.character9_pickup?.map((message, idx) => (
              <Alert variant="warning" key={idx}>
                {message}
              </Alert>
            ))}
            </Col>
            </Row>
            ) : (
              ""
            )}
            {/* character10 */}
            {character10 ? (
              <Row className="mt-3">
              <Col xs={4}>
              <h5 className="pt-2" >{character10}</h5> 
              </Col>
            <Col xs={4} className="d-flex justify-content-center">
            <Form.Group controlId="character10_calltime" className={`${styles.Width2} `} >
                <Form.Label className="p-1 d-none" ></Form.Label>
                <Form.Control 
                type="text"
                className={`${styles.Input}`}
                placeholder="Call Time"
                name="character10_calltime"
                value={character10_calltime}
                onChange={handleChange}
                    />
            </Form.Group>
            {errors?.character10_calltime?.map((message, idx) => (
              <Alert variant="warning" key={idx}>
                {message}
              </Alert>
            ))}
            </Col>
            <Col xs={4} className="d-flex justify-content-center">
            <Form.Group controlId="character10_pickup" className={`${styles.Width2} `} >
                <Form.Label className="p-1 d-none" ></Form.Label>
                <Form.Control 
                className={`${styles.Input}`}
                type="text"
                placeholder="Pickup"
                name="character10_pickup"
                value={character10_pickup}
                onChange={handleChange}
                    />
            </Form.Group>
            {errors?.character10_pickup?.map((message, idx) => (
              <Alert variant="warning" key={idx}>
                {message}
              </Alert>
            ))}
            </Col>
            </Row>
            ) : (
              ""
            )}
            {/* character11 */}
            {character11 ? (
              <Row className="mt-3">
              <Col xs={4}>
              <h5 className="pt-2" >{character11}</h5> 
              </Col>
            <Col xs={4} className="d-flex justify-content-center">
            <Form.Group controlId="character11_calltime" className={`${styles.Width2} `} >
                <Form.Label className="p-1 d-none" ></Form.Label>
                <Form.Control 
                type="text"
                className={`${styles.Input}`}
                placeholder="Call Time"
                name="character11_calltime"
                value={character11_calltime}
                onChange={handleChange}
                    />
            </Form.Group>
            {errors?.character11_calltime?.map((message, idx) => (
              <Alert variant="warning" key={idx}>
                {message}
              </Alert>
            ))}
            </Col>
            <Col xs={4} className="d-flex justify-content-center">
            <Form.Group controlId="character11_pickup" className={`${styles.Width2} `} >
                <Form.Label className="p-1 d-none" ></Form.Label>
                <Form.Control 
                className={`${styles.Input}`}
                type="text"
                placeholder="Pickup"
                name="character11_pickup"
                value={character11_pickup}
                onChange={handleChange}
                    />
            </Form.Group>
            {errors?.character11_pickup?.map((message, idx) => (
              <Alert variant="warning" key={idx}>
                {message}
              </Alert>
            ))}
            </Col>
            </Row>
            ) : (
              ""
            )}
            {/* character12 */}
            {character12 ? (
              <Row className="mt-3">
              <Col xs={4}>
              <h5 className="pt-2" >{character12}</h5> 
              </Col>
            <Col xs={4} className="d-flex justify-content-center">
            <Form.Group controlId="character12_calltime" className={`${styles.Width2} `} >
                <Form.Label className="p-1 d-none" ></Form.Label>
                <Form.Control 
                type="text"
                className={`${styles.Input}`}
                placeholder="Call Time"
                name="character12_calltime"
                value={character12_calltime}
                onChange={handleChange}
                    />
            </Form.Group>
            {errors?.character12_calltime?.map((message, idx) => (
              <Alert variant="warning" key={idx}>
                {message}
              </Alert>
            ))}
            </Col>
            <Col xs={4} className="d-flex justify-content-center">
            <Form.Group controlId="character12_pickup" className={`${styles.Width2} `} >
                <Form.Label className="p-1 d-none" ></Form.Label>
                <Form.Control 
                className={`${styles.Input}`}
                type="text"
                placeholder="Pickup"
                name="character12_pickup"
                value={character12_pickup}
                onChange={handleChange}
                    />
            </Form.Group>
            {errors?.character12_pickup?.map((message, idx) => (
              <Alert variant="warning" key={idx}>
                {message}
              </Alert>
            ))}
            </Col>
            </Row>
            ) : (
              ""
            )}
            {/* other_characters */}
            <h3 className="mt-4" >Other Characters</h3> 
            <p className={` mb-0 py-1 ${styles.SubTitle }`}></p>
            {other_characters ? (
              <Row className="mt-3">
              <Col xs={4}>
              <h5 className="pt-2" >{other_characters}</h5> 
              </Col>
            <Col xs={4} >
            <Form.Group controlId="other_characters_calltimes" className="mb-0" >
                <Form.Label className="p-1 d-none" ></Form.Label>
                <Form.Control 
                type="text"
                as="textarea"
                rows={2}
                className={`${styles.InputScene}`}
                placeholder="Call Times"
                name="other_characters_calltimes"
                value={other_characters_calltimes}
                onChange={handleChange}
                    />
            </Form.Group>
            {errors?.other_characters_calltimes?.map((message, idx) => (
              <Alert variant="warning" key={idx}>
                {message}
              </Alert>
            ))}
            </Col>
            <Col xs={4} >
            <Form.Group controlId="other_characters_pickups" className="mb-2" >
                <Form.Label className="p-1 d-none" ></Form.Label>
                <Form.Control 
                className={`${styles.InputScene}`}
                type="text"
                as="textarea"
                rows={2}
                placeholder="Pickups"
                name="other_characters_pickups"
                value={other_characters_pickups}
                onChange={handleChange}
                    />
            </Form.Group>
            {errors?.other_characters_pickups?.map((message, idx) => (
              <Alert variant="warning" key={idx}>
                {message}
              </Alert>
            ))}
            </Col>
            </Row>
            ) : (
              ""
            )}
            <h3 className="mt-4" >Background Artists</h3> 
            <p className={` mb-0 py-1 ${styles.SubTitle }`}></p>
            {/* background_artists */}
            {background_artists ? (
              <Row className="mt-3">
              <Col xs={4}>
              <h5 className="pt-2" >{background_artists}</h5> 
              </Col>
            <Col xs={4} >
            <Form.Group controlId="background_artists_calltimes" className="mb-0" >
                <Form.Label className="p-1 d-none" ></Form.Label>
                <Form.Control 
                type="text"
                className={`${styles.InputScene}`}
                as="textarea"
                rows={2}
                placeholder="Call Time"
                name="background_artists_calltimes"
                value={background_artists_calltimes}
                onChange={handleChange}
                    />
            </Form.Group>
            {errors?.background_artists_calltimes?.map((message, idx) => (
              <Alert variant="warning" key={idx}>
                {message}
              </Alert>
            ))}
            </Col>
            <Col xs={4} >
            <Form.Group controlId="background_artists_pickups" className="mb-2" >
                <Form.Label className="p-1 d-none" ></Form.Label>
                <Form.Control 
                className={`${styles.InputScene}`}
                type="text"
                as="textarea"
                rows={2}
                placeholder="Pickup"
                name="background_artists_pickups"
                value={background_artists_pickups}
                onChange={handleChange}
                    />
            </Form.Group>
            {errors?.background_artists_pickups?.map((message, idx) => (
              <Alert variant="warning" key={idx}>
                {message}
              </Alert>
            ))}
            </Col>
            </Row>
            ) : (
              ""
            )}             
          {/* end characters */}
    </div>
  )

  return (
    <div>CallsheetsBaseCreate</div>
  )
}

export default CallsheetsBaseCreate