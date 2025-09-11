/* Form to add the Art Department Calltimes to the Callsheet Edit page */
import React, { useState } from "react";
import Form from "react-bootstrap/Form";
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import { Alert } from "react-bootstrap";
import styles from "../../../styles/Callsheets.module.css";

const AddArt = ({crewInfoOne, handleChange, postData, setShowArt }) => {
  // eslint-disable-next-line
  const [errors, setErrors] = useState({});

  const {production_designer_name,
    art_director_name, 
    art_assistant_name, 
    set_decorator_name, 
    set_dresser_name, 
    lead_man_name,
    dresser_name, 
    prop_master_name, 
    ass_prop_master_name, 
    prop_buyer_name,
    armorer_name, 
    // new
    catering_co_1_name,
    catering_co_2_name,
    catering_co_3_name,
    oth_camera_pos_5_name,
    } = crewInfoOne || {};

  const { art_director_calltime, art_assistant_calltime, set_decorator_calltime,
    set_dresser_calltime, lead_man_calltime, dresser_calltime, prop_master_calltime,
    ass_prop_master_calltime, prop_buyer_calltime, armorer_calltime, 
    production_designer_calltime,
    // new
    catering_co_1_calltime, catering_co_2_calltime, catering_co_3_calltime,
    oth_camera_pos_5_calltime,
    } = postData || {};

  return (
    <div>
      <div className={`mt-0 text-center py-1 ${styles.SubTitle }`}>
      <span className={`float-right pt-md-1 ${styles.Close }`} onClick={() => setShowArt(false) } >Close</span> 
      <h5 className={`pl-5 mb-0 text-center ${styles.Bold }`} >
      ART DEPARTMENT</h5>
      </div>
      <div className='mt-3'>
        {/* production designer */}
        {production_designer_name && 
          (<div className={`${styles.CrewInfoRow}`}>
          <Row className='text-center d-flex align-items-center' >
            <Col xs={6} md={4} >
              <p className={`${styles.BoldScene} `}>Production Designer</p>
            </Col>
            <Col xs={6} md={4} >
              <p className={`${styles.CrewInfop} `}>{production_designer_name} </p>
            </Col>
            <Col className="d-flex justify-content-center" xs={12} md={4} >
            <Form.Group controlId="production_designer_calltime" className={`${styles.Width} `}>
                <Form.Label className={`d-none ${styles.Bold} `} ></Form.Label>
                <Form.Control 
                className={`${styles.Input}`}
                type="text"
                placeholder="Call"
                name="production_designer_calltime"
                value={production_designer_calltime}
                onChange={handleChange}
                    />
            </Form.Group>
            {errors?.production_designer_calltime?.map((message, idx) => (
              <Alert variant="warning" key={idx}>
                {message}
              </Alert>
            ))}
            </Col>
          </Row>
          <hr className="mt-1 mb-0"/>
          </div> )
         }
        {/* art director */}
        {art_director_name && 
          (<div className={`${styles.CrewInfoRow}`}>
          <Row className='text-center d-flex align-items-center' >
            <Col xs={6} md={4} >
              <p className={`${styles.BoldScene} `}>Art Director</p>
            </Col>
            <Col xs={6} md={4} >
              <p className={`${styles.CrewInfop} `}>{art_director_name} </p>
            </Col>
            <Col className="d-flex justify-content-center" xs={12} md={4} >
            <Form.Group controlId="art_director_calltime" className={`${styles.Width} `}>
                <Form.Label className={`d-none ${styles.Bold} `} ></Form.Label>
                <Form.Control 
                className={`${styles.Input}`}
                type="text"
                placeholder="Call"
                name="art_director_calltime"
                value={art_director_calltime}
                onChange={handleChange}
                    />
            </Form.Group>
            {errors?.art_director_calltime?.map((message, idx) => (
              <Alert variant="warning" key={idx}>
                {message}
              </Alert>
            ))}
            </Col>
          </Row>
          <hr className="mt-1 mb-0"/>
          </div> )
         }
         {/* Standby Art - (Using Catering Company 1 keys) */}
         {catering_co_1_name && 
          (<div className={`${styles.CrewInfoRow}`}>
          <Row className='text-center d-flex align-items-center ' >
            <Col xs={6} md={4} >
              <p className={`${styles.BoldScene} `}>Standby Art</p>
            </Col>
            <Col xs={6} md={4} >
              <p className={`${styles.CrewInfop} `}>{catering_co_1_name} </p>
            </Col>
            <Col className="d-flex justify-content-center" xs={12} md={4} >
            <Form.Group controlId="catering_co_1_calltime" className={`my-1 ${styles.Width} `}>
                <Form.Label className={`d-none ${styles.Bold} `} ></Form.Label>
                <Form.Control 
                className={`${styles.Input}`}
                type="text"
                placeholder="Call"
                name="catering_co_1_calltime"
                value={catering_co_1_calltime}
                onChange={handleChange}
                    />
            </Form.Group>
            {errors?.catering_co_1_calltime?.map((message, idx) => (
              <Alert variant="warning" key={idx}>
                {message}
              </Alert>
            ))}
            </Col>
          </Row>
          <hr className="mt-0 mb-0"/>
          </div> )
         }
         {/* art assistant */}
        {art_assistant_name && 
          (<div className={`${styles.CrewInfoRow}`}>
          <Row className='text-center d-flex align-items-center ' >
            <Col xs={6} md={4} >
              <p className={`${styles.BoldScene} `}>Art Assistant</p>
            </Col>
            <Col xs={6} md={4} >
              <p className={`${styles.CrewInfop} `}>{art_assistant_name} </p>
            </Col>
            <Col className="d-flex justify-content-center" xs={12} md={4} >
            <Form.Group controlId="art_assistant_calltime" className={`my-1 ${styles.Width} `}>
                <Form.Label className={`d-none ${styles.Bold} `} ></Form.Label>
                <Form.Control 
                className={`${styles.Input}`}
                type="text"
                placeholder="Call"
                name="art_assistant_calltime"
                value={art_assistant_calltime}
                onChange={handleChange}
                    />
            </Form.Group>
            {errors?.art_assistant_calltime?.map((message, idx) => (
              <Alert variant="warning" key={idx}>
                {message}
              </Alert>
            ))}
            </Col>
          </Row>
          <hr className="mt-0 mb-0"/>
          </div> )
         }
         <div className={`mb-3 mt-4 mt-0 text-center ${styles.SubTitle }`}>
          <h5 className={`d-none d-md-block mb-0 text-center ${styles.Bold }`} >
          SET DECORATION DEPARTMENT</h5>
          <h5 className={`d-block d-md-none mb-0 text-center ${styles.Bold }`} >
          SET DECORATION</h5>
        </div>
         {/* set decorator */}
        {set_decorator_name && 
          (<div className={`${styles.CrewInfoRow}`}>
          <Row className='text-center d-flex align-items-center' >
            <Col xs={6} md={4} >
              <p className={`${styles.BoldScene} `}>Set Decorator</p>
            </Col>
            <Col xs={6} md={4} >
              <p className={`${styles.CrewInfop} `}>{set_decorator_name} </p>
            </Col>
            <Col className="d-flex justify-content-center" xs={12} md={4} >
            <Form.Group controlId="set_decorator_calltime" className={`my-1 ${styles.Width} `}>
                <Form.Label className={`d-none ${styles.Bold} `} ></Form.Label>
                <Form.Control 
                className={`${styles.Input}`}
                type="text"
                placeholder="Call"
                name="set_decorator_calltime"
                value={set_decorator_calltime}
                onChange={handleChange}
                    />
            </Form.Group>
            {errors?.set_decorator_calltime?.map((message, idx) => (
              <Alert variant="warning" key={idx}>
                {message}
              </Alert>
            ))}
            </Col>
          </Row>
          <hr className="mt-0 mb-0"/>
          </div> )
         }
         {/* Assistant Set Decorator - (Using cater 2 Keys) */}
         {catering_co_2_name && 
          (<div className={`${styles.CrewInfoRow}`}>
          <Row className='text-center d-flex align-items-center ' >
            <Col xs={6} md={4} >
              <p className={`${styles.BoldScene} `}>Assistant Set Decorator</p>
            </Col>
            <Col xs={6} md={4} >
              <p className={`${styles.CrewInfop} `}>{catering_co_2_name} </p>
            </Col>
            <Col className="d-flex justify-content-center" xs={12} md={4} >
            <Form.Group controlId="catering_co_2_calltime" className={`my-1 ${styles.Width} `}>
                <Form.Label className={`d-none ${styles.Bold} `} ></Form.Label>
                <Form.Control 
                className={`${styles.Input}`}
                type="text"
                placeholder="Call"
                name="catering_co_2_calltime"
                value={catering_co_2_calltime}
                onChange={handleChange}
                    />
            </Form.Group>
            {errors?.catering_co_2_calltime?.map((message, idx) => (
              <Alert variant="warning" key={idx}>
                {message}
              </Alert>
            ))}
            </Col>
          </Row>
          <hr className="mt-0 mb-0"/>
          </div> )
         }
         {/* set dresser */}
        {set_dresser_name && 
          (<div className={`${styles.CrewInfoRow}`}>
          <Row className='text-center d-flex align-items-center' >
            <Col xs={6} md={4} >
              <p className={`${styles.BoldScene} `}>Set Dresser</p>
            </Col>
            <Col xs={6} md={4} >
              <p className={`${styles.CrewInfop} `}>{set_dresser_name} </p>
            </Col>
            <Col className="d-flex justify-content-center" xs={12} md={4} >
            <Form.Group controlId="set_dresser_calltime" className={`my-1 ${styles.Width} `}>
                <Form.Label className={`d-none ${styles.Bold} `} ></Form.Label>
                <Form.Control 
                className={`${styles.Input}`}
                type="text"
                placeholder="Call"
                name="set_dresser_calltime"
                value={set_dresser_calltime}
                onChange={handleChange}
                    />
            </Form.Group>
            {errors?.set_dresser_calltime?.map((message, idx) => (
              <Alert variant="warning" key={idx}>
                {message}
              </Alert>
            ))}
            </Col>
          </Row>
          <hr className="mt-0 mb-0"/>
          </div> )
         }
         {/* lead man */}
        {lead_man_name && 
          (<div className={`${styles.CrewInfoRow}`}>
          <Row className='text-center d-flex align-items-center' >
            <Col xs={6} md={4} >
              <p className={`${styles.BoldScene} `}>Lead Man</p>
            </Col>
            <Col xs={6} md={4} >
              <p className={`${styles.CrewInfop} `}>{lead_man_name} </p>
            </Col>
            <Col className="d-flex justify-content-center" xs={12} md={4} >
            <Form.Group controlId="lead_man_calltime" className={`my-1 ${styles.Width} `}>
                <Form.Label className={`d-none ${styles.Bold} `} ></Form.Label>
                <Form.Control 
                className={`${styles.Input}`}
                type="text"
                placeholder="Call"
                name="lead_man_calltime"
                value={lead_man_calltime}
                onChange={handleChange}
                    />
            </Form.Group>
            {errors?.lead_man_calltime?.map((message, idx) => (
              <Alert variant="warning" key={idx}>
                {message}
              </Alert>
            ))}
            </Col>
          </Row>
          <hr className="mt-0 mb-0"/>
          </div> )
         }
         {/* dresser */}
         {dresser_name && 
          (<div className={`${styles.CrewInfoRow}`}>
          <Row className='text-center d-flex align-items-center' >
            <Col xs={6} md={4} >
              <p className={`${styles.BoldScene} `}>Dresser</p>
            </Col>
            <Col xs={6} md={4} >
              <p className={`${styles.CrewInfop} `}>{dresser_name} </p>
            </Col>
            <Col className="d-flex justify-content-center" xs={12} md={4} >
            <Form.Group controlId="dresser_calltime" className={`my-1 ${styles.Width} `}>
                <Form.Label className={`d-none ${styles.Bold} `} ></Form.Label>
                <Form.Control 
                className={`${styles.Input}`}
                type="text"
                placeholder="Call"
                name="dresser_calltime"
                value={dresser_calltime}
                onChange={handleChange}
                    />
            </Form.Group>
            {errors?.dresser_calltime?.map((message, idx) => (
              <Alert variant="warning" key={idx}>
                {message}
              </Alert>
            ))}
            </Col>
          </Row>
          <hr className="mt-0 mb-0"/>
          </div> )
         }
         {/* Swing Gang 1 (Using cater 3 Keys) */}
         {catering_co_3_name && 
          (<div className={`${styles.CrewInfoRow}`}>
          <Row className='text-center d-flex align-items-center ' >
            <Col xs={6} md={4} >
              <p className={`${styles.BoldScene} `}>Swing Gang 1</p>
            </Col>
            <Col xs={6} md={4} >
              <p className={`${styles.CrewInfop} `}>{catering_co_3_name} </p>
            </Col>
            <Col className="d-flex justify-content-center" xs={12} md={4} >
            <Form.Group controlId="catering_co_3_calltime" className={`my-1 ${styles.Width} `}>
                <Form.Label className={`d-none ${styles.Bold} `} ></Form.Label>
                <Form.Control 
                className={`${styles.Input}`}
                type="text"
                placeholder="Call"
                name="catering_co_3_calltime"
                value={catering_co_3_calltime}
                onChange={handleChange}
                    />
            </Form.Group>
            {errors?.catering_co_3_calltime?.map((message, idx) => (
              <Alert variant="warning" key={idx}>
                {message}
              </Alert>
            ))}
            </Col>
          </Row>
          <hr className="mt-0 mb-0"/>
          </div> )
         }
         <div className={`mt-4 mb-3 mt-0 text-center ${styles.SubTitle }`}>
          <h5 className={`d-none d-md-block mb-0 text-center ${styles.Bold }`} >
          PROPERTY DEPARTMENT</h5>
          <h5 className={`d-block d-md-none mb-0 text-center ${styles.Bold }`} >
          PROPERTY</h5>
        </div>
         {/* prop Master */}
         {prop_master_name && 
          (<div className={`${styles.CrewInfoRow}`}>
          <Row className='text-center d-flex align-items-center' >
            <Col xs={6} md={4} >
              <p className={`${styles.BoldScene} `}>Prop Master</p>
            </Col>
            <Col xs={6} md={4} >
              <p className={`${styles.CrewInfop} `}>{prop_master_name} </p>
            </Col>
            <Col className="d-flex justify-content-center" xs={12} md={4} >
            <Form.Group controlId="prop_master_calltime" className={`my-1 ${styles.Width} `}>
                <Form.Label className={`d-none ${styles.Bold} `} ></Form.Label>
                <Form.Control 
                className={`${styles.Input}`}
                type="text"
                placeholder="Call"
                name="prop_master_calltime"
                value={prop_master_calltime}
                onChange={handleChange}
                    />
            </Form.Group>
            {errors?.prop_master_calltime?.map((message, idx) => (
              <Alert variant="warning" key={idx}>
                {message}
              </Alert>
            ))}
            </Col>
          </Row>
          <hr className="mt-0 mb-0"/>
          </div> )
         }
         {/* ass prop master */}
         {ass_prop_master_name && 
          (<div className={`${styles.CrewInfoRow}`}>
          <Row className='text-center d-flex align-items-center' >
            <Col xs={6} md={4} >
              <p className={`${styles.BoldScene} `}>Assistant Prop Master</p>
            </Col>
            <Col xs={6} md={4} >
              <p className={`${styles.CrewInfop} `}>{ass_prop_master_name} </p>
            </Col>
            <Col className="d-flex justify-content-center" xs={12} md={4} >
            <Form.Group controlId="ass_prop_master_calltime" className={`my-1 ${styles.Width} `}>
                <Form.Label className={`d-none ${styles.Bold} `} ></Form.Label>
                <Form.Control 
                className={`${styles.Input}`}
                type="text"
                placeholder="Call"
                name="ass_prop_master_calltime"
                value={ass_prop_master_calltime}
                onChange={handleChange}
                    />
            </Form.Group>
            {errors?.ass_prop_master_calltime?.map((message, idx) => (
              <Alert variant="warning" key={idx}>
                {message}
              </Alert>
            ))}
            </Col>
          </Row>
          <hr className="mt-0 mb-0"/>
          </div> )
         }
         {/* On Set Props Person (Using Additional Camera Position 5 Keys) */}
          {oth_camera_pos_5_name && 
            (<div className={`${styles.CrewInfoRow}`}>
            <Row className='text-center d-flex align-items-center' >
              <Col xs={6} md={4} >
                <p className={`${styles.BoldScene} `}>
                On Set Props Person </p>
              </Col>
              <Col xs={6} md={4} >
                <p className={`${styles.CrewInfop} `}>
                  {oth_camera_pos_5_name} </p>
              </Col>
              <Col className="d-flex justify-content-center" xs={12} md={4} >
              <Form.Group controlId="oth_camera_pos_5_calltime" className={`my-1 ${styles.Width} `}>
                  <Form.Label className={`d-none ${styles.Bold} `} ></Form.Label>
                  <Form.Control 
                  className={`${styles.Input}`}
                  type="text"
                  placeholder=""
                  name="oth_camera_pos_5_calltime"
                  value={oth_camera_pos_5_calltime}
                  onChange={handleChange}
                      />
              </Form.Group>
              {errors?.oth_camera_pos_5_calltime?.map((message, idx) => (
                <Alert variant="warning" key={idx}>
                  {message}
                </Alert>
              ))}
              </Col>
            </Row>
            <hr className="mt-0 mb-0"/>
            </div> )
          }
         {/* prop buyer */}
         {prop_buyer_name && 
          (<div className={`${styles.CrewInfoRow}`}>
          <Row className='text-center d-flex align-items-center' >
            <Col xs={6} md={4} >
              <p className={`${styles.BoldScene} `}>Prop Buyer</p>
            </Col>
            <Col xs={6} md={4} >
              <p className={`${styles.CrewInfop} `}>{prop_buyer_name} </p>
            </Col>
            <Col className="d-flex justify-content-center" xs={12} md={4} >
            <Form.Group controlId="prop_buyer_calltime" className={`my-1 ${styles.Width} `}>
                <Form.Label className={`d-none ${styles.Bold} `} ></Form.Label>
                <Form.Control 
                className={`${styles.Input}`}
                type="text"
                placeholder="Call"
                name="prop_buyer_calltime"
                value={prop_buyer_calltime}
                onChange={handleChange}
                    />
            </Form.Group>
            {errors?.prop_buyer_calltime?.map((message, idx) => (
              <Alert variant="warning" key={idx}>
                {message}
              </Alert>
            ))}
            </Col>
          </Row>
          <hr className="mt-0 mb-0"/>
          </div> )
         }
         {/* armorer  */}
         {armorer_name && 
          (<div className={`${styles.CrewInfoRow}`}>
          <Row className='text-center d-flex align-items-center' >
            <Col xs={6} md={4} >
              <p className={`${styles.BoldScene} `}>Armorer</p>
            </Col>
            <Col xs={6} md={4} >
              <p className={`${styles.CrewInfop} `}>{armorer_name} </p>
            </Col>
            <Col className="d-flex justify-content-center" xs={12} md={4} >
            <Form.Group controlId="armorer_calltime" className={`my-1 ${styles.Width} `}>
                <Form.Label className={`d-none ${styles.Bold} `} ></Form.Label>
                <Form.Control 
                className={`${styles.Input}`}
                type="text"
                placeholder="Call"
                name="armorer_calltime"
                value={armorer_calltime}
                onChange={handleChange}
                    />
            </Form.Group>
            {errors?.armorer_calltime?.map((message, idx) => (
              <Alert variant="warning" key={idx}>
                {message}
              </Alert>
            ))}
            </Col>
          </Row>
          <hr className="mt-0 mb-0"/>
          </div> )
         }
         </div>
    </div>
  )
}

export default AddArt