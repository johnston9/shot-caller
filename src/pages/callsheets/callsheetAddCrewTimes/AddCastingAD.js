/* Form to add the Casting Calltimes to the Callsheet
   From the Callsheet Edit page */
import React, { useState } from "react";
import Form from "react-bootstrap/Form";
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import { Alert } from "react-bootstrap";
import styles from "../../../styles/Callsheets.module.css";

const AddCastingAD = ({crewInfoOne, handleChange, postData, setShowCas }) => {
  // eslint-disable-next-line
  const [errors, setErrors] = useState({});

  const {extras_casting_name,
    pro_assistant_4_name, pro_assistant_5_name,
   } = crewInfoOne || {};

  const { extras_casting_calltime, ad_1_calltime,
    ad_2_calltime, ad_3_calltime, ad_4_calltime, ad_5_calltime, pro_assistant_1_calltime,
    pro_assistant_2_calltime, pro_assistant_3_calltime, pro_assistant_4_calltime,
    pro_assistant_5_calltime,
    } = postData || {};

  return (
    <div>
      <div className={`mt-0 text-center py-1 ${styles.SubTitle }`}>
      <span className={`float-right pt-1 ${styles.Close }`} onClick={() => setShowCas(false) } >Close</span> 
      <h5 className={`pl-5 text-center`} style={{ textTransform: 'uppercase'}} >CASTING </h5>
      </div>
      <div className='mt-3'>
         {/* extras_casting_name */}
         {extras_casting_name && 
          (<div className={`${styles.CrewInfoRow}`}>
          <Row className='text-center d-flex align-items-center ' >
            <Col xs={6} md={4} >
              <p className={`${styles.BoldScene} `}>Extras Casting</p>
            </Col>
            <Col xs={6} md={4} >
              <p className={`${styles.CrewInfop} `}>{extras_casting_name} </p>
            </Col>
            <Col className="d-flex justify-content-center" xs={12} md={4} >
            <Form.Group controlId="extras_casting_calltime" className={`my-1 ${styles.Width} `}>
                <Form.Label className={`d-none ${styles.Bold} `} ></Form.Label>
                <Form.Control 
                className={`${styles.Input}`}
                type="text"
                placeholder="Call"
                name="extras_casting_calltime"
                value={extras_casting_calltime}
                onChange={handleChange}
                    />
            </Form.Group>
            {errors?.extras_casting_calltime?.map((message, idx) => (
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

export default AddCastingAD