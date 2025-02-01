/* Component in the CrewInfo page to display
   the Post Department and Additional Crew Positions crew info */
   import React, { useState } from 'react';
   import { useRedirect } from '../../../../hooks/Redirect';
   import Col from 'react-bootstrap/Col';
   import Row from 'react-bootstrap/Row';
   import styles from "../../../../styles/Callsheets.module.css";
   import Button from 'react-bootstrap/Button';
   import btnStyles from "../../../../styles/Button.module.css";
   import ExtraCrewInfo from '../ExtraCrewInfo';
   
   const InfoAdditional = ({crewInfoOne, setShowAdd}) => {
     useRedirect();
     const [showAddit, setShowAddit] = useState(false);
   
     const {add_pos_1_job, add_pos_1_name, add_pos_1_email, add_pos_1_phone,
       add_pos_2_job, add_pos_2_name, add_pos_2_email, add_pos_2_phone,
       add_pos_3_job, add_pos_3_name, add_pos_3_email, add_pos_3_phone,
       add_pos_4_job, add_pos_4_name, add_pos_4_email, add_pos_4_phone,
       add_pos_5_job, add_pos_5_name, add_pos_5_email, add_pos_5_phone,
       add_pos_6_job, add_pos_6_name, add_pos_6_email, add_pos_6_phone,
       add_pos_7_job, add_pos_7_name, add_pos_7_email, add_pos_7_phone,
       add_pos_8_job, add_pos_8_name, add_pos_8_email, add_pos_8_phone,
       add_pos_9_job, add_pos_9_name, add_pos_9_email, add_pos_9_phone,
       add_pos_10_job, add_pos_10_name, add_pos_10_email, add_pos_10_phone,
        } = crewInfoOne || {};
   
     return (
       <div>
        <div className={`mt-0 text-center ${styles.SubTitle }`}>
        <span className={`float-right pt-1 pt-md-2 ${styles.Bold } ${styles.Close }`} onClick={() => setShowAdd(false) } >Close</span> 
        <h5 className={`pl-5 mb-0 text-center py-1 ${styles.Bold }`} >ADDITIONAL POSITIONS</h5>
        </div>
        <div className={`px-md-5 mx-md-5 ${styles.White }`}>
        {/*  additional position 1 */}
        {add_pos_1_job && 
        (<div className={`${styles.CrewInfoRow} pt-3 pb-2`}>
        <div className='d-flex justify-content-center '>
        <p className={`mb-2 mx-4 py-0 text-center ${styles.Width95 }
        ${styles.SubTitle2 }`} style={{ textTransform: 'uppercase'}}>{add_pos_1_job}</p> 
        </div>
        <Row className='text-center' >
          <Col xs={6} md={4} className={`${styles.BorderRight} px-0 mx-0`}>
            <p className={`${styles.CrewInfoP} `}>{add_pos_1_name}</p>
          </Col>
          <Col xs={6} md={4} className={`${styles.BorderRight} px-0 mx-0`}>
          <p className={`${styles.CrewInfop} `}>{add_pos_1_phone}</p>
          </Col>
          <Col xs={12} md={4}  className='px-0 mx-0 pt-3 pt-md-0'>
            <p className={`${styles.CrewInfop} `}>{add_pos_1_email}</p>
          </Col>
        </Row>
        {/* break */}
        <Row>
        <Col xs={12}>
        <hr className={`mt-3 mb-0 mx-5`}/>
        </Col>
        </Row>
        </div> )
        }
        {/* additional position 2 */}
        {add_pos_2_job && 
        (<div className={`${styles.CrewInfoRow} mt-1 pb-2`}>
        <div className='d-flex justify-content-center '>
        <p className={`mb-2 mx-4 py-0 text-center ${styles.Width95 }
        ${styles.SubTitle2 }`} style={{ textTransform: 'uppercase'}}>{add_pos_2_job}</p> 
        </div>
        <Row className='text-center' >
          <Col xs={6} md={4} className={`${styles.BorderRight} px-0 mx-0`}>
            <p className={`${styles.CrewInfoP} `}>{add_pos_2_name}</p>
          </Col>
          <Col xs={6} md={4} className={`${styles.BorderRight} px-0 mx-0`}>
          <p className={`${styles.CrewInfop} `}>{add_pos_2_phone}</p>
          </Col>
          <Col xs={12} md={4}  className='px-0 mx-0 pt-3 pt-md-0'>
            <p className={`${styles.CrewInfop} `}>{add_pos_2_email}</p>
          </Col>
        </Row>
        {/* break */}
        <Row>
        <Col xs={12}>
        <hr className={`mt-3 mb-0 mx-5`}/>
        </Col>
        </Row>
        </div> )
        }
        {/* additional position 3 */}
        {add_pos_3_job && 
        (<div className={`${styles.CrewInfoRow} mt-1 pb-2`}>
        <div className='d-flex justify-content-center '>
        <p className={`mb-2 mx-4 py-0 text-center ${styles.Width95 }
        ${styles.SubTitle2 }`} style={{ textTransform: 'uppercase'}}>{add_pos_3_job}</p> 
        </div>
        <Row className='text-center' >
          <Col xs={6} md={4} className={`${styles.BorderRight} px-0 mx-0`}>
            <p className={`${styles.CrewInfoP} `}>{add_pos_3_name}</p>
          </Col>
          <Col xs={6} md={4} className={`${styles.BorderRight} px-0 mx-0`}>
          <p className={`${styles.CrewInfop} `}>{add_pos_3_phone}</p>
          </Col>
          <Col xs={12} md={4}  className='px-0 mx-0 pt-3 pt-md-0'>
            <p className={`${styles.CrewInfop} `}>{add_pos_3_email}</p>
          </Col>
        </Row>
        {/* break */}
        <Row>
        <Col xs={12}>
        <hr className={`mt-3 mb-0 mx-5`}/>
        </Col>
        </Row>
        </div> )
        }
        {/* additional position 4 */}
        {add_pos_4_job && 
        (<div className={`${styles.CrewInfoRow} mt-1 pb-2`}>
        <div className='d-flex justify-content-center '>
        <p className={`mb-2 mx-4 py-0 text-center ${styles.Width95 }
        ${styles.SubTitle2 }`} style={{ textTransform: 'uppercase'}}>{add_pos_4_job}</p> 
        </div>
        <Row className='text-center' >
          <Col xs={6} md={4} className={`${styles.BorderRight} px-0 mx-0`}>
            <p className={`${styles.CrewInfoP} `}>{add_pos_4_name}</p>
          </Col>
          <Col xs={6} md={4} className={`${styles.BorderRight} px-0 mx-0`}>
          <p className={`${styles.CrewInfop} `}>{add_pos_4_phone}</p>
          </Col>
          <Col xs={12} md={4}  className='px-0 mx-0 pt-3 pt-md-0'>
            <p className={`${styles.CrewInfop} `}>{add_pos_4_email}</p>
          </Col>
        </Row>
        {/* break */}
        <Row>
        <Col xs={12}>
        <hr className={`mt-3 mb-0 mx-5`}/>
        </Col>
        </Row>
        </div> )
        }
        {/* additional position 5 */}
        {add_pos_5_job && 
        (<div className={`${styles.CrewInfoRow} mt-1 pb-2`}>
        <div className='d-flex justify-content-center '>
        <p className={`mb-2 mx-4 py-0 text-center ${styles.Width95 }
        ${styles.SubTitle2 }`} style={{ textTransform: 'uppercase'}}>{add_pos_5_job}</p> 
        </div>
        <Row className='text-center' >
          <Col xs={6} md={4} className={`${styles.BorderRight} px-0 mx-0`}>
            <p className={`${styles.CrewInfoP} `}>{add_pos_5_name}</p>
          </Col>
          <Col xs={6} md={4} className={`${styles.BorderRight} px-0 mx-0`}>
          <p className={`${styles.CrewInfop} `}>{add_pos_5_phone}</p>
          </Col>
          <Col xs={12} md={4}  className='px-0 mx-0 pt-3 pt-md-0'>
            <p className={`${styles.CrewInfop} `}>{add_pos_5_email}</p>
          </Col>
        </Row>
        {/* break */}
        <Row>
        <Col xs={12}>
        <hr className={`mt-3 mb-0 mx-5`}/>
        </Col>
        </Row>
        </div> )
        }
        {/* additional position 6 */}
        {add_pos_6_job && 
        (<div className={`${styles.CrewInfoRow} mt-1 pb-2`}>
        <div className='d-flex justify-content-center '>
        <p className={`mb-2 mx-4 py-0 text-center ${styles.Width95 }
        ${styles.SubTitle2 }`} style={{ textTransform: 'uppercase'}}>{add_pos_6_job}</p> 
        </div>
        <Row className='text-center' >
          <Col xs={6} md={4} className={`${styles.BorderRight} px-0 mx-0`}>
            <p className={`${styles.CrewInfoP} `}>{add_pos_6_name}</p>
          </Col>
          <Col xs={6} md={4} className={`${styles.BorderRight} px-0 mx-0`}>
          <p className={`${styles.CrewInfop} `}>{add_pos_6_phone}</p>
          </Col>
          <Col xs={12} md={4}  className='px-0 mx-0 pt-3 pt-md-0'>
            <p className={`${styles.CrewInfop} `}>{add_pos_6_email}</p>
          </Col>
        </Row>
        {/* break */}
        <Row>
        <Col xs={12}>
        <hr className={`mt-3 mb-0 mx-5`}/>
        </Col>
        </Row>
        </div> )
        }
        {/* additional position 7 */}
        {add_pos_7_job && 
        (<div className={`${styles.CrewInfoRow} mt-1 pb-2`}>
        <div className='d-flex justify-content-center '>
        <p className={`mb-2 mx-4 py-0 text-center ${styles.Width95 }
        ${styles.SubTitle2 }`} style={{ textTransform: 'uppercase'}}>{add_pos_7_job}</p> 
        </div>
        <Row className='text-center' >
          <Col xs={6} md={4} className={`${styles.BorderRight} px-0 mx-0`}>
            <p className={`${styles.CrewInfoP} `}>{add_pos_7_name}</p>
          </Col>
          <Col xs={6} md={4} className={`${styles.BorderRight} px-0 mx-0`}>
          <p className={`${styles.CrewInfop} `}>{add_pos_7_phone}</p>
          </Col>
          <Col xs={12} md={4}  className='px-0 mx-0 pt-3 pt-md-0'>
            <p className={`${styles.CrewInfop} `}>{add_pos_7_email}</p>
          </Col>
        </Row>
        {/* break */}
        <Row>
        <Col xs={12}>
        <hr className={`mt-3 mb-0 mx-5`}/>
        </Col>
        </Row>
        </div> )
        }
        {/* additional position 8 */}
        {add_pos_8_job && 
        (<div className={`${styles.CrewInfoRow} mt-1 pb-2`}>
        <div className='d-flex justify-content-center '>
        <p className={`mb-2 mx-4 py-0 text-center ${styles.Width95 }
        ${styles.SubTitle2 }`} style={{ textTransform: 'uppercase'}}>{add_pos_8_job}</p> 
        </div>
        <Row className='text-center' >
          <Col xs={6} md={4} className={`${styles.BorderRight} px-0 mx-0`}>
            <p className={`${styles.CrewInfoP} `}>{add_pos_8_name}</p>
          </Col>
          <Col xs={6} md={4} className={`${styles.BorderRight} px-0 mx-0`}>
          <p className={`${styles.CrewInfop} `}>{add_pos_8_phone}</p>
          </Col>
          <Col xs={12} md={4}  className='px-0 mx-0 pt-3 pt-md-0'>
            <p className={`${styles.CrewInfop} `}>{add_pos_8_email}</p>
          </Col>
        </Row>
        {/* break */}
        <Row>
        <Col xs={12}>
        <hr className={`mt-3 mb-0 mx-5`}/>
        </Col>
        </Row>
        </div> )
        }
        {/* additional position 9 */}
        {add_pos_9_job && 
        (<div className={`${styles.CrewInfoRow} mt-1 pb-2`}>
        <div className='d-flex justify-content-center '>
        <p className={`mb-2 mx-4 py-0 text-center ${styles.Width95 }
        ${styles.SubTitle2 }`} style={{ textTransform: 'uppercase'}}>{add_pos_9_job}</p> 
        </div>
        <Row className='text-center' >
          <Col xs={6} md={4} className={`${styles.BorderRight} px-0 mx-0`}>
            <p className={`${styles.CrewInfoP} `}>{add_pos_9_name}</p>
          </Col>
          <Col xs={6} md={4} className={`${styles.BorderRight} px-0 mx-0`}>
          <p className={`${styles.CrewInfop} `}>{add_pos_9_phone}</p>
          </Col>
          <Col xs={12} md={4}  className='px-0 mx-0 pt-3 pt-md-0'>
            <p className={`${styles.CrewInfop} `}>{add_pos_9_email}</p>
          </Col>
        </Row>
        {/* break */}
        <Row>
        <Col xs={12}>
        <hr className={`mt-3 mb-0 mx-5`}/>
        </Col>
        </Row>
        </div> )
        }
        {/* additional position 10 */}
        {add_pos_10_job && 
        (<div className={`${styles.CrewInfoRow} mt-1 pb-2`}>
        <div className='d-flex justify-content-center '>
        <p className={`mb-2 mx-4 py-0 text-center ${styles.Width95 }
        ${styles.SubTitle2 }`} style={{ textTransform: 'uppercase'}}>{add_pos_10_job}</p> 
        </div>
        <Row className='text-center' >
          <Col xs={6} md={4} className={`${styles.BorderRight} px-0 mx-0`}>
            <p className={`${styles.CrewInfoP} `}>{add_pos_10_name}</p>
          </Col>
          <Col xs={6} md={4} className={`${styles.BorderRight} px-0 mx-0`}>
          <p className={`${styles.CrewInfop} `}>{add_pos_10_phone}</p>
          </Col>
          <Col xs={12} md={4}  className='px-0 mx-0 pt-3 pt-md-0'>
            <p className={`${styles.CrewInfop} `}>{add_pos_10_email}</p>
          </Col>
        </Row>
        {/* break */}
        <Row>
        <Col xs={12}>
        <hr className={`mt-3 mb-0 mx-5`}/>
        </Col>
        </Row>
        </div> )
        }
        </div>
        {/* Extra Positions Button */}
        <Row className='mt-3'>
          <Col className='text-center'>
          <Button onClick={() => setShowAddit(showAddit => !showAddit)}
            className={`px-5 ${btnStyles.Button} ${btnStyles.Shed}`}>
            Extra Other Departments Positions </Button>
          </Col>
        </Row>
        <Row>
        <Col className='text-center my-3' >
        <p>
        Add all non Callsheet positions that do not fit in to any other Department here 
        </p>
        </Col>
        </Row>
        {!showAddit ? (
            ""
                ) : (
                  <ExtraCrewInfo
                  dept="other"
                  setShow={setShowAddit}  /> 
        ) } 
       </div>
     )
   }
   
   export default InfoAdditional