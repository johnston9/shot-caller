import React from 'react';
import { useRedirect } from '../../hooks/Redirect';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import styles from "../../styles/Callsheets.module.css";

const InfoPost = ({crewInfoOne, setShowPos}) => {
  useRedirect("loggedOut");
  const {editor_name, editor_email, editor_phone,
    fx_name, fx_email, fx_phone,
    add_pos_1_job, add_pos_1_name, add_pos_1_email, add_pos_1_phone,
    add_pos_2_job, add_pos_2_name, add_pos_2_email, add_pos_2_phone,
    add_pos_3_job, add_pos_3_name, add_pos_3_email, add_pos_3_phone,
    add_pos_4_job, add_pos_4_name, add_pos_4_email, add_pos_4_phone,
    add_pos_5_job, add_pos_5_name, add_pos_5_email, add_pos_5_phone,
    add_pos_6_job, add_pos_6_name, add_pos_6_email, add_pos_6_phone,
    add_pos_7_job, add_pos_7_name, add_pos_7_email, add_pos_7_phone,
    add_pos_8_job, add_pos_8_name, add_pos_8_email, add_pos_8_phone,
    add_pos_9_job, add_pos_9_name, add_pos_9_email, add_pos_9_phone,
    add_pos_10_job, add_pos_10_name, add_pos_10_email, add_pos_10_phone,
    all_other_add_positions } = crewInfoOne || {};
  return (
    <div>
      <div className={`mt-0 text-center ${styles.SubTitle }`}>
      <span className={`float-right ${styles.Close }`} onClick={() => setShowPos(false) } >Close</span> 
      <h5 className={`pl-5 text-center`} style={{ textTransform: 'uppercase'}} >POST </h5>
      </div>
      <div className='mt-3'>
        {/* editor */}
        {editor_name && 
          (<div className={`${styles.CrewInfoRow}`}>
          <Row className='text-center' >
            <Col xs={6} md={3} >
              <p className={`${styles.CrewInfoP} `}>Editor</p>
            </Col>
            <Col xs={6} md={3} >
              <p className={`${styles.CrewInfop} `}>{editor_name} </p>
            </Col>
            <Col xs={6} md={3} >
              <p className={`${styles.CrewInfop} `}>{editor_email}</p>
            </Col>
            <Col xs={6} md={3} >
            <p className={`${styles.CrewInfop} `}>{editor_phone}</p>
            </Col>
          </Row>
          </div> )
         }
         {/* FX */}
        {fx_name && 
          (<div className={`${styles.CrewInfoRow}`}>
          <Row className='text-center' >
            <Col xs={6} md={3} >
              <p className={`${styles.CrewInfoP} `}>FX</p>
            </Col>
            <Col xs={6} md={3} >
              <p className={`${styles.CrewInfop} `}>{fx_name} </p>
            </Col>
            <Col xs={6} md={3} >
              <p className={`${styles.CrewInfop} `}>{fx_email}</p>
            </Col>
            <Col xs={6} md={3} >
            <p className={`${styles.CrewInfop} `}>{fx_phone}</p>
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
          <Row className='text-center' >
            <Col xs={6} md={3} >
              <p className={`${styles.CrewInfoP} `}>{add_pos_1_job} </p>
            </Col>
            <Col xs={6} md={3} >
              <p className={`${styles.CrewInfop} `}>{add_pos_1_name} </p>
            </Col>
            <Col xs={6} md={3} >
              <p className={`${styles.CrewInfop} `}>{add_pos_1_email}</p>
            </Col>
            <Col xs={6} md={3} >
            <p className={`${styles.CrewInfop} `}>{add_pos_1_phone}</p>
            </Col>
          </Row>
          </div> )
         }
         {/* add pos 2 */}
         {add_pos_2_job && 
          (<div className={`${styles.CrewInfoRow}`}>
          <Row className='text-center' >
            <Col xs={6} md={3} >
              <p className={`${styles.CrewInfoP} `}>{add_pos_2_job} </p>
            </Col>
            <Col xs={6} md={3} >
              <p className={`${styles.CrewInfop} `}>{add_pos_2_name} </p>
            </Col>
            <Col xs={6} md={3} >
              <p className={`${styles.CrewInfop} `}>{add_pos_2_email}</p>
            </Col>
            <Col xs={6} md={3} >
            <p className={`${styles.CrewInfop} `}>{add_pos_2_phone}</p>
            </Col>
          </Row>
          </div> )
         }
         {/* add pos 3 */}
         {add_pos_3_job && 
          (<div className={`${styles.CrewInfoRow}`}>
          <Row className='text-center' >
            <Col xs={6} md={3} >
              <p className={`${styles.CrewInfoP} `}>{add_pos_3_job} </p>
            </Col>
            <Col xs={6} md={3} >
              <p className={`${styles.CrewInfop} `}>{add_pos_3_name} </p>
            </Col>
            <Col xs={6} md={3} >
              <p className={`${styles.CrewInfop} `}>{add_pos_3_email}</p>
            </Col>
            <Col xs={6} md={3} >
            <p className={`${styles.CrewInfop} `}>{add_pos_3_phone}</p>
            </Col>
          </Row>
          </div> )
         }
         {/* add pos 4 */}
         {add_pos_4_job && 
          (<div className={`${styles.CrewInfoRow}`}>
          <Row className='text-center' >
            <Col xs={6} md={3} >
              <p className={`${styles.CrewInfoP} `}>{add_pos_4_job} </p>
            </Col>
            <Col xs={6} md={3} >
              <p className={`${styles.CrewInfop} `}>{add_pos_4_name} </p>
            </Col>
            <Col xs={6} md={3} >
              <p className={`${styles.CrewInfop} `}>{add_pos_4_email}</p>
            </Col>
            <Col xs={6} md={3} >
            <p className={`${styles.CrewInfop} `}>{add_pos_4_phone}</p>
            </Col>
          </Row>
          </div> )
         }
         {/* add pos 5 */}
         {add_pos_1_job && 
          (<div className={`${styles.CrewInfoRow}`}>
          <Row className='text-center' >
            <Col xs={6} md={3} >
              <p className={`${styles.CrewInfoP} `}>{add_pos_5_job} </p>
            </Col>
            <Col xs={6} md={3} >
              <p className={`${styles.CrewInfop} `}>{add_pos_5_name} </p>
            </Col>
            <Col xs={6} md={3} >
              <p className={`${styles.CrewInfop} `}>{add_pos_5_email}</p>
            </Col>
            <Col xs={6} md={3} >
            <p className={`${styles.CrewInfop} `}>{add_pos_5_phone}</p>
            </Col>
          </Row>
          </div> )
         }
         {/* add pos 6 */}
          {add_pos_6_job && 
          (<div className={`${styles.CrewInfoRow}`}>
          <Row className='text-center' >
            <Col xs={6} md={3} >
              <p className={`${styles.CrewInfoP} `}>{add_pos_6_job} </p>
            </Col>
            <Col xs={6} md={3} >
              <p className={`${styles.CrewInfop} `}>{add_pos_6_name} </p>
            </Col>
            <Col xs={6} md={3} >
              <p className={`${styles.CrewInfop} `}>{add_pos_6_email}</p>
            </Col>
            <Col xs={6} md={3} >
            <p className={`${styles.CrewInfop} `}>{add_pos_6_phone}</p>
            </Col>
          </Row>
          </div> )
         }
         {/* add pos 7 */}
         {add_pos_7_job && 
          (<div className={`${styles.CrewInfoRow}`}>
          <Row className='text-center' >
            <Col xs={6} md={3} >
              <p className={`${styles.CrewInfoP} `}>{add_pos_7_job} </p>
            </Col>
            <Col xs={6} md={3} >
              <p className={`${styles.CrewInfop} `}>{add_pos_7_name} </p>
            </Col>
            <Col xs={6} md={3} >
              <p className={`${styles.CrewInfop} `}>{add_pos_7_email}</p>
            </Col>
            <Col xs={6} md={3} >
            <p className={`${styles.CrewInfop} `}>{add_pos_7_phone}</p>
            </Col>
          </Row>
          </div> )
         }
         {/* add pos 8 */}
         {add_pos_8_job && 
          (<div className={`${styles.CrewInfoRow}`}>
          <Row className='text-center' >
            <Col xs={6} md={3} >
              <p className={`${styles.CrewInfoP} `}>{add_pos_8_job} </p>
            </Col>
            <Col xs={6} md={3} >
              <p className={`${styles.CrewInfop} `}>{add_pos_8_name} </p>
            </Col>
            <Col xs={6} md={3} >
              <p className={`${styles.CrewInfop} `}>{add_pos_8_email}</p>
            </Col>
            <Col xs={6} md={3} >
            <p className={`${styles.CrewInfop} `}>{add_pos_8_phone}</p>
            </Col>
          </Row>
          </div> )
         }
         {/* add pos 9 */}
         {add_pos_9_job && 
          (<div className={`${styles.CrewInfoRow}`}>
          <Row className='text-center' >
            <Col xs={6} md={3} >
              <p className={`${styles.CrewInfoP} `}>{add_pos_9_job} </p>
            </Col>
            <Col xs={6} md={3} >
              <p className={`${styles.CrewInfop} `}>{add_pos_9_name} </p>
            </Col>
            <Col xs={6} md={3} >
              <p className={`${styles.CrewInfop} `}>{add_pos_9_email}</p>
            </Col>
            <Col xs={6} md={3} >
            <p className={`${styles.CrewInfop} `}>{add_pos_9_phone}</p>
            </Col>
          </Row>
          </div> )
         }
         {/* add pos 10 */}
         {add_pos_10_job && 
          (<div className={`${styles.CrewInfoRow}`}>
          <Row className='text-center' >
            <Col xs={6} md={3} >
              <p className={`${styles.CrewInfoP} `}>{add_pos_10_job} </p>
            </Col>
            <Col xs={6} md={3} >
              <p className={`${styles.CrewInfop} `}>{add_pos_10_name} </p>
            </Col>
            <Col xs={6} md={3} >
              <p className={`${styles.CrewInfop} `}>{add_pos_10_email}</p>
            </Col>
            <Col xs={6} md={3} >
            <p className={`${styles.CrewInfop} `}>{add_pos_10_phone}</p>
            </Col>
          </Row>
          </div> )
         }
         {/* all_other_add_positions */}
         {all_other_add_positions && 
          (<div className={`${styles.CrewInfoRow}`}>
            <p className={`${styles.Bold} text-center`}>All Other Additional Positions</p>
          <Row className='text-center' >
            <Col xs={{span: 10, offset: 1}} >
              <p className={`${styles.CrewInfoP} `}>{all_other_add_positions} </p>
            </Col>
          </Row>
          </div> )
         }
        </div>
    </div>
  )
}

export default InfoPost