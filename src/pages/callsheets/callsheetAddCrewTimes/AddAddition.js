/* Form to add the Additional Crew Calltimes to the Callsheet Edit page */
   import React, { useState } from "react";
   import Form from "react-bootstrap/Form";
   import Col from 'react-bootstrap/Col';
   import Row from 'react-bootstrap/Row';
   import { Alert } from "react-bootstrap";
   import styles from "../../../styles/Callsheets.module.css";

const AddAddition = ({crewInfoOne, handleChange, postData, setShowAdd }) => {
   // eslint-disable-next-line
     const [errors, setErrors] = useState({});
   
     const {add_pos_1_job, add_pos_1_name,
       add_pos_2_job, add_pos_2_name,
       add_pos_3_job, add_pos_3_name,
       add_pos_4_job, add_pos_4_name,
       add_pos_5_job, add_pos_5_name,
       add_pos_6_job, add_pos_6_name,
       add_pos_7_job, add_pos_7_name,
       add_pos_8_job, add_pos_8_name,
       add_pos_9_job, add_pos_9_name,
       add_pos_10_job, add_pos_10_name,
       add_pos_11_job, add_pos_11_name,
      add_pos_12_job, add_pos_12_name,
      add_pos_13_job, add_pos_13_name,
      add_pos_14_job, add_pos_14_name,
      add_pos_15_job, add_pos_15_name,
        } = crewInfoOne || {};
   
     const { add_pos_1_calltime,
       add_pos_2_calltime,
       add_pos_3_calltime,
       add_pos_4_calltime,
       add_pos_5_calltime,
       add_pos_6_calltime,
       add_pos_7_calltime,
       add_pos_8_calltime,
       add_pos_9_calltime,
       add_pos_10_calltime,
       add_pos_11_calltime,
      add_pos_12_calltime,
      add_pos_13_calltime,
      add_pos_14_calltime,       
      add_pos_15_calltime,
      // add_pos_16_calltime,
      // add_pos_17_calltime,
      // add_pos_18_calltime,
      // add_pos_19_calltime,
      // add_pos_20_calltime,
       } = postData || {};

  return (
    <div>
      <div className={`mt-0 text-center py-1 ${styles.SubTitle }`}>
      <span className={`float-right pt-md-1 ${styles.Close }`} onClick={() => setShowAdd(false) } >Close</span> 
      <h5 className={`d-none d-md-block pl-5 mb-0 text-center ${styles.Bold }`} >
      ADDITIONAL POSITIONS </h5>
        <h5 className={`d-block d-md-none pl-5 mb-0 text-center ${styles.Bold }`} >
        ADDITIONAL </h5>
      </div>
      <div className='mt-3'>
        {/* add pos 1 */}
        {add_pos_1_job && 
        (<div className={`${styles.CrewInfoRow}`}>
        <Row className='text-center d-flex align-items-center' >
          <Col xs={6} md={4} >
            <p className={`${styles.BoldScene} `}>{add_pos_1_job} </p>
          </Col>
          <Col xs={6} md={4} >
            <p className={`${styles.CrewInfop} `}>{add_pos_1_name} </p>
          </Col>
          <Col className="d-flex justify-content-center" xs={12} md={4} >
          <Form.Group controlId="add_pos_1_calltime" className={`my-1 ${styles.Width} `}>
              <Form.Label className={`d-none ${styles.Bold} `} ></Form.Label>
              <Form.Control 
              className={`${styles.Input}`}
              type="text"
              placeholder="Call"
              name="add_pos_1_calltime"
              value={add_pos_1_calltime}
              onChange={handleChange}
                  />
          </Form.Group>
          {errors?.add_pos_1_calltime?.map((message, idx) => (
            <Alert variant="warning" key={idx}>
              {message}
            </Alert>
          ))}
          </Col>
        </Row>
        <hr className="mt-0 mb-0"/>
        </div> )
        }
        {/* add pos 2 */}
        {add_pos_2_job && 
        (<div className={`${styles.CrewInfoRow}`}>
        <Row className='text-center d-flex align-items-center' >
          <Col xs={6} md={4} >
            <p className={`${styles.BoldScene} `}>{add_pos_2_job} </p>
          </Col>
          <Col xs={6} md={4} >
            <p className={`${styles.CrewInfop} `}>{add_pos_2_name} </p>
          </Col>
          <Col className="d-flex justify-content-center" xs={12} md={4} >
          <Form.Group controlId="add_pos_2_calltime" className={`my-1 ${styles.Width} `}>
              <Form.Label className={`d-none ${styles.Bold} `} ></Form.Label>
              <Form.Control 
              className={`${styles.Input}`}
              type="text"
              placeholder="Call"
              name="add_pos_2_calltime"
              value={add_pos_2_calltime}
              onChange={handleChange}
                  />
          </Form.Group>
          {errors?.add_pos_2_calltime?.map((message, idx) => (
            <Alert variant="warning" key={idx}>
              {message}
            </Alert>
          ))}
          </Col>
        </Row>
        <hr className="mt-0 mb-0"/>
        </div> )
        }
        {/* add pos 3 */}
        {add_pos_3_job && 
        (<div className={`${styles.CrewInfoRow}`}>
        <Row className='text-center d-flex align-items-center' >
          <Col xs={6} md={4} >
            <p className={`${styles.BoldScene} `}>{add_pos_3_job} </p>
          </Col>
          <Col xs={6} md={4} >
            <p className={`${styles.CrewInfop} `}>{add_pos_3_name} </p>
          </Col>
          <Col className="d-flex justify-content-center" xs={12} md={4} >
          <Form.Group controlId="add_pos_3_calltime" className={`my-1 ${styles.Width} `}>
              <Form.Label className={`d-none ${styles.Bold} `} ></Form.Label>
              <Form.Control 
              className={`${styles.Input}`}
              type="text"
              placeholder="Call"
              name="add_pos_3_calltime"
              value={add_pos_3_calltime}
              onChange={handleChange}
                  />
          </Form.Group>
          {errors?.add_pos_3_calltime?.map((message, idx) => (
            <Alert variant="warning" key={idx}>
              {message}
            </Alert>
          ))}
          </Col>
        </Row>
        <hr className="mt-0 mb-0"/>
        </div> )
        }
        {/* add pos 4 */}
        {add_pos_4_job && 
        (<div className={`${styles.CrewInfoRow}`}>
        <Row className='text-center d-flex align-items-center' >
          <Col xs={6} md={4} >
            <p className={`${styles.BoldScene} `}>{add_pos_4_job} </p>
          </Col>
          <Col xs={6} md={4} >
            <p className={`${styles.CrewInfop} `}>{add_pos_4_name} </p>
          </Col>
          <Col className="d-flex justify-content-center" xs={12} md={4} >
          <Form.Group controlId="add_pos_4_calltime" className={`my-1 ${styles.Width} `}>
              <Form.Label className={`d-none ${styles.Bold} `} ></Form.Label>
              <Form.Control 
              className={`${styles.Input}`}
              type="text"
              placeholder="Call"
              name="add_pos_4_calltime"
              value={add_pos_4_calltime}
              onChange={handleChange}
                  />
          </Form.Group>
          {errors?.add_pos_4_calltime?.map((message, idx) => (
            <Alert variant="warning" key={idx}>
              {message}
            </Alert>
          ))}
          </Col>
        </Row>
        <hr className="mt-0 mb-0"/>
        </div> )
        }
        {/* add pos 5 */}
        {add_pos_5_job && 
        (<div className={`${styles.CrewInfoRow}`}>
        <Row className='text-center d-flex align-items-center' >
          <Col xs={6} md={4} >
            <p className={`${styles.BoldScene} `}>{add_pos_5_job} </p>
          </Col>
          <Col xs={6} md={4} >
            <p className={`${styles.CrewInfop} `}>{add_pos_5_name} </p>
          </Col>
          <Col className="d-flex justify-content-center" xs={12} md={4} >
          <Form.Group controlId="add_pos_5_calltime" className={`my-1 ${styles.Width} `}>
              <Form.Label className={`d-none ${styles.Bold} `} ></Form.Label>
              <Form.Control 
              className={`${styles.Input}`}
              type="text"
              placeholder="Call"
              name="add_pos_5_calltime"
              value={add_pos_5_calltime}
              onChange={handleChange}
                  />
          </Form.Group>
          {errors?.add_pos_5_calltime?.map((message, idx) => (
            <Alert variant="warning" key={idx}>
              {message}
            </Alert>
          ))}
          </Col>
        </Row>
        <hr className="mt-0 mb-0"/>
        </div> )
        }
        {/* add pos 6 */}
        {add_pos_6_job && 
        (<div className={`${styles.CrewInfoRow}`}>
        <Row className='text-center d-flex align-items-center' >
          <Col xs={6} md={4} >
            <p className={`${styles.BoldScene} `}>{add_pos_6_job} </p>
          </Col>
          <Col xs={6} md={4} >
            <p className={`${styles.CrewInfop} `}>{add_pos_6_name} </p>
          </Col>
          <Col className="d-flex justify-content-center" xs={12} md={4} >
          <Form.Group controlId="add_pos_6_calltime" className={`my-1 ${styles.Width} `}>
              <Form.Label className={`d-none ${styles.Bold} `} ></Form.Label>
              <Form.Control 
              className={`${styles.Input}`}
              type="text"
              placeholder="Call"
              name="add_pos_6_calltime"
              value={add_pos_6_calltime}
              onChange={handleChange}
                  />
          </Form.Group>
          {errors?.add_pos_6_calltime?.map((message, idx) => (
            <Alert variant="warning" key={idx}>
              {message}
            </Alert>
          ))}
          </Col>
        </Row>
        <hr className="mt-0 mb-0"/>
        </div> )
        }
        {/* add pos 7 */}
        {add_pos_7_job && 
        (<div className={`${styles.CrewInfoRow}`}>
        <Row className='text-center d-flex align-items-center' >
          <Col xs={6} md={4} >
            <p className={`${styles.BoldScene} `}>{add_pos_7_job} </p>
          </Col>
          <Col xs={6} md={4} >
            <p className={`${styles.CrewInfop} `}>{add_pos_7_name} </p>
          </Col>
          <Col className="d-flex justify-content-center" xs={12} md={4} >
          <Form.Group controlId="add_pos_7_calltime" className={`my-1 ${styles.Width} `}>
              <Form.Label className={`d-none ${styles.Bold} `} ></Form.Label>
              <Form.Control 
              className={`${styles.Input}`}
              type="text"
              placeholder="Call"
              name="add_pos_7_calltime"
              value={add_pos_7_calltime}
              onChange={handleChange}
                  />
          </Form.Group>
          {errors?.add_pos_7_calltime?.map((message, idx) => (
            <Alert variant="warning" key={idx}>
              {message}
            </Alert>
          ))}
          </Col>
        </Row>
        <hr className="mt-0 mb-0"/>
        </div> )
        }
        {/* add pos 8 */}
        {add_pos_8_job && 
        (<div className={`${styles.CrewInfoRow}`}>
        <Row className='text-center d-flex align-items-center' >
          <Col xs={6} md={4} >
            <p className={`${styles.BoldScene} `}>{add_pos_8_job} </p>
          </Col>
          <Col xs={6} md={4} >
            <p className={`${styles.CrewInfop} `}>{add_pos_8_name} </p>
          </Col>
          <Col className="d-flex justify-content-center" xs={12} md={4} >
          <Form.Group controlId="add_pos_8_calltime" className={`my-1 ${styles.Width} `}>
              <Form.Label className={`d-none ${styles.Bold} `} ></Form.Label>
              <Form.Control 
              className={`${styles.Input}`}
              type="text"
              placeholder="Call"
              name="add_pos_8_calltime"
              value={add_pos_8_calltime}
              onChange={handleChange}
                  />
          </Form.Group>
          {errors?.add_pos_8_calltime?.map((message, idx) => (
            <Alert variant="warning" key={idx}>
              {message}
            </Alert>
          ))}
          </Col>
        </Row>
        <hr className="mt-0 mb-0"/>
        </div> )
        }
        {/* add pos 9*/}
        {add_pos_9_job && 
        (<div className={`${styles.CrewInfoRow}`}>
        <Row className='text-center d-flex align-items-center' >
          <Col xs={6} md={4} >
            <p className={`${styles.BoldScene} `}>{add_pos_9_job} </p>
          </Col>
          <Col xs={6} md={4} >
            <p className={`${styles.CrewInfop} `}>{add_pos_9_name} </p>
          </Col>
          <Col className="d-flex justify-content-center" xs={12} md={4} >
          <Form.Group controlId="add_pos_9_calltime" className={`my-1 ${styles.Width} `}>
              <Form.Label className={`d-none ${styles.Bold} `} ></Form.Label>
              <Form.Control 
              className={`${styles.Input}`}
              type="text"
              placeholder="Call"
              name="add_pos_9_calltime"
              value={add_pos_9_calltime}
              onChange={handleChange}
                  />
          </Form.Group>
          {errors?.add_pos_9_calltime?.map((message, idx) => (
            <Alert variant="warning" key={idx}>
              {message}
            </Alert>
          ))}
          </Col>
        </Row>
        <hr className="mt-0 mb-0"/>
        </div> )
        }
        {/* add pos 10 */}
        {add_pos_10_job && 
        (<div className={`${styles.CrewInfoRow}`}>
        <Row className='text-center d-flex align-items-center' >
          <Col xs={6} md={4} >
            <p className={`${styles.BoldScene} `}>{add_pos_10_job} </p>
          </Col>
          <Col xs={6} md={4} >
            <p className={`${styles.CrewInfop} `}>{add_pos_10_name} </p>
          </Col>
          <Col className="d-flex justify-content-center" xs={12} md={4} >
          <Form.Group controlId="add_pos_10_calltime" className={`my-1 ${styles.Width} `}>
              <Form.Label className={`d-none ${styles.Bold} `} ></Form.Label>
              <Form.Control 
              className={`${styles.Input}`}
              type="text"
              placeholder="Call"
              name="add_pos_10_calltime"
              value={add_pos_10_calltime}
              onChange={handleChange}
                  />
          </Form.Group>
          {errors?.add_pos_10_calltime?.map((message, idx) => (
            <Alert variant="warning" key={idx}>
              {message}
            </Alert>
          ))}
          </Col>
        </Row>
        <hr className="mt-0 mb-0"/>
        </div> )
        }
        {/* Additional Position 11  */}
        {add_pos_11_job && 
          (<div className={`${styles.CrewInfoRow}`}>
          <Row className='text-center d-flex align-items-center' >
            <Col xs={6} md={4} >
              <p className={`${styles.BoldScene} `}>{add_pos_11_job} </p>
            </Col>
            <Col xs={6} md={4} >
              <p className={`${styles.CrewInfop} `}>{add_pos_11_name} </p>
            </Col>
            <Col className="d-flex justify-content-center" xs={12} md={4} >
            <Form.Group controlId="add_pos_11_calltime" className={`my-1 ${styles.Width} `}>
                <Form.Label className={`d-none ${styles.Bold} `} ></Form.Label>
                <Form.Control 
                className={`${styles.Input}`}
                type="text"
                placeholder="Call"
                name="add_pos_11_calltime"
                value={add_pos_11_calltime}
                onChange={handleChange}
                    />
            </Form.Group>
            {errors?.add_pos_11_calltime?.map((message, idx) => (
              <Alert variant="warning" key={idx}>
                {message}
              </Alert>
            ))}
            </Col>
          </Row>
          <hr className="mt-0 mb-0"/>
          </div> )
          }
          {/* Additional Position 12 */}
          {add_pos_12_job && 
          (<div className={`${styles.CrewInfoRow}`}>
          <Row className='text-center d-flex align-items-center' >
            <Col xs={6} md={4} >
              <p className={`${styles.BoldScene} `}>{add_pos_12_job} </p>
            </Col>
            <Col xs={6} md={4} >
              <p className={`${styles.CrewInfop} `}>{add_pos_12_name} </p>
            </Col>
            <Col className="d-flex justify-content-center" xs={12} md={4} >
            <Form.Group controlId="add_pos_12_calltime" className={`my-1 ${styles.Width} `}>
                <Form.Label className={`d-none ${styles.Bold} `} ></Form.Label>
                <Form.Control 
                className={`${styles.Input}`}
                type="text"
                placeholder="Call"
                name="add_pos_12_calltime"
                value={add_pos_12_calltime}
                onChange={handleChange}
                    />
            </Form.Group>
            {errors?.add_pos_12_calltime?.map((message, idx) => (
              <Alert variant="warning" key={idx}>
                {message}
              </Alert>
            ))}
            </Col>
          </Row>
          <hr className="mt-0 mb-0"/>
          </div> )
          }
          {/* Additional Position 13 */}
          {add_pos_13_job && 
          (<div className={`${styles.CrewInfoRow}`}>
          <Row className='text-center d-flex align-items-center' >
            <Col xs={6} md={4} >
              <p className={`${styles.BoldScene} `}>{add_pos_13_job} </p>
            </Col>
            <Col xs={6} md={4} >
              <p className={`${styles.CrewInfop} `}>{add_pos_13_name} </p>
            </Col>
            <Col className="d-flex justify-content-center" xs={12} md={4} >
            <Form.Group controlId="add_pos_13_calltime" className={`my-1 ${styles.Width} `}>
                <Form.Label className={`d-none ${styles.Bold} `} ></Form.Label>
                <Form.Control 
                className={`${styles.Input}`}
                type="text"
                placeholder="Call"
                name="add_pos_13_calltime"
                value={add_pos_13_calltime}
                onChange={handleChange}
                    />
            </Form.Group>
            {errors?.add_pos_13_calltime?.map((message, idx) => (
              <Alert variant="warning" key={idx}>
                {message}
              </Alert>
            ))}
            </Col>
          </Row>
          <hr className="mt-0 mb-0"/>
          </div> )
          }
          {/* Additional Position 14 */}
          {add_pos_14_job && 
          (<div className={`${styles.CrewInfoRow}`}>
          <Row className='text-center d-flex align-items-center' >
            <Col xs={6} md={4} >
              <p className={`${styles.BoldScene} `}>{add_pos_14_job} </p>
            </Col>
            <Col xs={6} md={4} >
              <p className={`${styles.CrewInfop} `}>{add_pos_14_name} </p>
            </Col>
            <Col className="d-flex justify-content-center" xs={12} md={4} >
            <Form.Group controlId="add_pos_14_calltime" className={`my-1 ${styles.Width} `}>
                <Form.Label className={`d-none ${styles.Bold} `} ></Form.Label>
                <Form.Control 
                className={`${styles.Input}`}
                type="text"
                placeholder="Call"
                name="add_pos_14_calltime"
                value={add_pos_14_calltime}
                onChange={handleChange}
                    />
            </Form.Group>
            {errors?.add_pos_14_calltime?.map((message, idx) => (
              <Alert variant="warning" key={idx}>
                {message}
              </Alert>
            ))}
            </Col>
          </Row>
          <hr className="mt-0 mb-0"/>
          </div> )
          }
          {/* Additional Position 15 */}
          {add_pos_15_job && 
          (<div className={`${styles.CrewInfoRow}`}>
          <Row className='text-center d-flex align-items-center' >
            <Col xs={6} md={4} >
              <p className={`${styles.BoldScene} `}>{add_pos_15_job} </p>
            </Col>
            <Col xs={6} md={4} >
              <p className={`${styles.CrewInfop} `}>{add_pos_15_name} </p>
            </Col>
            <Col className="d-flex justify-content-center" xs={12} md={4} >
            <Form.Group controlId="add_pos_15_calltime" className={`my-1 ${styles.Width} `}>
                <Form.Label className={`d-none ${styles.Bold} `} ></Form.Label>
                <Form.Control 
                className={`${styles.Input}`}
                type="text"
                placeholder="Call"
                name="add_pos_15_calltime"
                value={add_pos_15_calltime}
                onChange={handleChange}
                    />
            </Form.Group>
            {errors?.add_pos_15_calltime?.map((message, idx) => (
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

export default AddAddition