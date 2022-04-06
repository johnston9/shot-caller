import React, { useState } from "react";
import { useRedirect } from '../../hooks/Redirect';
import Form from "react-bootstrap/Form";
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import { Alert } from "react-bootstrap";
import styles from "../../styles/Callsheets.module.css";

const AddPostAdditional = ({crewInfoOne, handleChange, postData, setShowPos }) => {
  useRedirect("loggedOut");
  // eslint-disable-next-line
  const [errors, setErrors] = useState({});

  const {editor_name,
    fx_name, 
    add_pos_1_job, add_pos_1_name,
    add_pos_2_job, add_pos_2_name,
    add_pos_3_job, add_pos_3_name,
    add_pos_4_job, add_pos_4_name,
    add_pos_5_job, add_pos_5_name,
    add_pos_6_job, add_pos_6_name,
    add_pos_7_job, add_pos_7_name,
    add_pos_8_job, add_pos_8_name,
    add_pos_9_job, add_pos_9_name,
    add_pos_10_job, add_pos_10_name,
    all_other_add_positions } = crewInfoOne || {};

  const { editor_calltime, fx_calltime,
    add_pos_1_calltime,
    add_pos_2_calltime,
    add_pos_3_calltime,
    add_pos_4_calltime,
    add_pos_5_calltime,
    add_pos_6_calltime,
    add_pos_7_calltime,
    add_pos_8_calltime,
    add_pos_9_calltime,
    add_pos_10_calltime,
    all_other_add_positions_calltimes,
    } = postData || {};

  return (
    <div>
      <div className={`mt-0 text-center pb-2 ${styles.SubTitle }`}>
      <span className={`float-right ${styles.Close }`} onClick={() => setShowPos(false) } >Close</span> 
      <h5 className={`pl-5 text-center`} style={{ textTransform: 'uppercase'}} >POST </h5>
      </div>
      <div className='mt-3'>
        {/* editor */}
        {editor_name && 
          (<div className={`${styles.CrewInfoRow}`}>
          <Row className='text-center d-flex align-items-center' >
            <Col xs={6} md={4} >
              <p className={`${styles.CrewInfoP} `}>Editor</p>
            </Col>
            <Col xs={6} md={4} >
              <p className={`${styles.CrewInfop} `}>{editor_name} </p>
            </Col>
            <Col className="d-flex justify-content-center" xs={12} md={4} >
            <Form.Group controlId="editor_calltime" className={`${styles.Width} `}>
                <Form.Label className={`d-none ${styles.Bold} `} ></Form.Label>
                <Form.Control 
                className={`${styles.Input}`}
                type="text"
                placeholder="Call"
                name="editor_calltime"
                value={editor_calltime}
                onChange={handleChange}
                    />
            </Form.Group>
            {errors?.editor_calltime?.map((message, idx) => (
              <Alert variant="warning" key={idx}>
                {message}
              </Alert>
            ))}
            </Col>
          </Row>
          </div> )
         }
         {/* fx */}
        {fx_name && 
          (<div className={`${styles.CrewInfoRow}`}>
          <Row className='text-center d-flex align-items-center ' >
            <Col xs={6} md={4} >
              <p className={`${styles.CrewInfoP} `}>FX</p>
            </Col>
            <Col xs={6} md={4} >
              <p className={`${styles.CrewInfop} `}>{fx_name} </p>
            </Col>
            <Col className="d-flex justify-content-center" xs={12} md={4} >
            <Form.Group controlId="fx_calltime" className={`my-1 ${styles.Width} `}>
                <Form.Label className={`d-none ${styles.Bold} `} ></Form.Label>
                <Form.Control 
                className={`${styles.Input}`}
                type="text"
                placeholder="Call"
                name="fx_calltime"
                value={fx_calltime}
                onChange={handleChange}
                    />
            </Form.Group>
            {errors?.fx_calltime?.map((message, idx) => (
              <Alert variant="warning" key={idx}>
                {message}
              </Alert>
            ))}
            </Col>
          </Row>
          </div> )
         }
         <div className={`mx-5 mt-0 text-center ${styles.SubTitle }`}>
          <h5 className={` text-center`} style={{ textTransform: 'uppercase'}} >ADDITIONAL POSITIONS </h5>
        </div>
        {/* add pos 1 */}
        {add_pos_1_job && 
        (<div className={`${styles.CrewInfoRow}`}>
        <Row className='text-center d-flex align-items-center' >
          <Col xs={6} md={4} >
            <p className={`${styles.CrewInfoP} `}>{add_pos_1_job} </p>
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
        </div> )
        }
        {/* add pos 2 */}
        {add_pos_2_job && 
        (<div className={`${styles.CrewInfoRow}`}>
        <Row className='text-center d-flex align-items-center' >
          <Col xs={6} md={4} >
            <p className={`${styles.CrewInfoP} `}>{add_pos_2_job} </p>
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
        </div> )
        }
        {/* add pos 3 */}
        {add_pos_3_job && 
        (<div className={`${styles.CrewInfoRow}`}>
        <Row className='text-center d-flex align-items-center' >
          <Col xs={6} md={4} >
            <p className={`${styles.CrewInfoP} `}>{add_pos_3_job} </p>
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
        </div> )
        }
        {/* add pos 4 */}
        {add_pos_4_job && 
        (<div className={`${styles.CrewInfoRow}`}>
        <Row className='text-center d-flex align-items-center' >
          <Col xs={6} md={4} >
            <p className={`${styles.CrewInfoP} `}>{add_pos_4_job} </p>
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
        </div> )
        }
        {/* add pos 5 */}
        {add_pos_5_job && 
        (<div className={`${styles.CrewInfoRow}`}>
        <Row className='text-center d-flex align-items-center' >
          <Col xs={6} md={4} >
            <p className={`${styles.CrewInfoP} `}>{add_pos_5_job} </p>
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
        </div> )
        }
        {/* add pos 6 */}
        {add_pos_6_job && 
        (<div className={`${styles.CrewInfoRow}`}>
        <Row className='text-center d-flex align-items-center' >
          <Col xs={6} md={4} >
            <p className={`${styles.CrewInfoP} `}>{add_pos_6_job} </p>
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
        </div> )
        }
        {/* add pos 7 */}
        {add_pos_7_job && 
        (<div className={`${styles.CrewInfoRow}`}>
        <Row className='text-center d-flex align-items-center' >
          <Col xs={6} md={4} >
            <p className={`${styles.CrewInfoP} `}>{add_pos_7_job} </p>
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
        </div> )
        }
        {/* add pos 8 */}
        {add_pos_8_job && 
        (<div className={`${styles.CrewInfoRow}`}>
        <Row className='text-center d-flex align-items-center' >
          <Col xs={6} md={4} >
            <p className={`${styles.CrewInfoP} `}>{add_pos_8_job} </p>
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
        </div> )
        }
        {/* add pos 9*/}
        {add_pos_9_job && 
        (<div className={`${styles.CrewInfoRow}`}>
        <Row className='text-center d-flex align-items-center' >
          <Col xs={6} md={4} >
            <p className={`${styles.CrewInfoP} `}>{add_pos_9_job} </p>
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
        </div> )
        }
        {/* add pos 10 */}
        {add_pos_10_job && 
        (<div className={`${styles.CrewInfoRow}`}>
        <Row className='text-center d-flex align-items-center' >
          <Col xs={6} md={4} >
            <p className={`${styles.CrewInfoP} `}>{add_pos_10_job} </p>
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
        </div> )
        }
        {/*All Other Additional Positions */}
        {all_other_add_positions && 
        (<div className={`${styles.CrewInfoRow}`}>
          <p className={`${styles.Bold} text-center`}>All Other Additional Positions</p>
        <Row className='text-center d-flex align-items-center' >
          <Col xs={12} md={6} >
            <p className={`${styles.CrewInfoP} `}>{all_other_add_positions} </p>
          </Col>
          <Col className="d-flex justify-content-center" xs={12} md={6} >
          <Form.Group controlId="all_other_add_positions_calltimes" className={`my-1 ${styles.Width} `}>
              <Form.Label className={`d-none ${styles.Bold} `} ></Form.Label>
              <Form.Control 
              className={`${styles.Input}`}
              type="text"
              placeholder="Call"
              name="all_other_add_positions_calltimes"
              value={all_other_add_positions_calltimes}
              onChange={handleChange}
                  />
          </Form.Group>
          {errors?.all_other_add_positions_calltimes?.map((message, idx) => (
            <Alert variant="warning" key={idx}>
              {message}
            </Alert>
          ))}
          </Col>
        </Row>
        </div> )
        }
        </div>
    </div>
  )
}

export default AddPostAdditional