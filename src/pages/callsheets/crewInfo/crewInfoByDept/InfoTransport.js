/* Component in the CrewInfo page to display
   the Sound Department crew info */
   import React, { useState } from 'react';
   import { useRedirect } from '../../../../hooks/Redirect';
   import Col from 'react-bootstrap/Col';
   import Row from 'react-bootstrap/Row';
   import styles from "../../../../styles/Callsheets.module.css";
   import Button from 'react-bootstrap/Button';
   import btnStyles from "../../../../styles/Button.module.css";
   import ExtraCrewInfo from '../ExtraCrewInfo';
   
   const InfoTransport = ({crewInfoOne, setShowTra}) => {
     useRedirect();
     const [showTport, setShowTport] = useState(false);
   
     const {transport_captain_name, transport_captain_email, transport_captain_phone,
       transport_manager_1_name, transport_manager_1_email, transport_manager_1_phone, 
       transport_manager_2_name, transport_manager_2_email, transport_manager_2_phone, 
       head_driver_name, head_driver_email, head_driver_phone,
       car1_name, car1_email, car1_phone,
       car2_name, car2_email, car2_phone,
       car3_name, car3_email, car3_phone,
       truck1_name, truck1_email, truck1_phone,} = crewInfoOne || {};
   
     return (
       <div>
         <div className={`mt-0 text-center ${styles.SubTitle }`}>
         <span className={`float-right pt-1 pt-md-2 ${styles.Bold } ${styles.Close }`}
          onClick={() => setShowTra(false) } >Close</span> 
          <h5 className={`d-none d-md-block pl-5 mb-0 text-center py-1 ${styles.Bold }`} >
          TRANSPORTATION DEPARTMENT</h5>
        <h5 className={`d-block d-md-none pl-5 mb-0 text-center py-1 ${styles.Bold }`} >
        TRANSPORTATION</h5>
         </div>
         <div className={`px-md-5 mx-md-5 ${styles.White }`}>
         {/* Transport Captain */}
         {transport_captain_name && 
              (<div className={`${styles.CrewInfoRow} pt-3 pb-2`}>
              <div className='d-flex justify-content-center '>
              <p className={`mb-2 mx-4 py-0 text-center ${styles.Width95 }
          ${styles.SubTitle2 }`} style={{ textTransform: 'uppercase'}}>Transport Captain</p>  
              </div>
              <Row className='text-center' >
                <Col xs={6} md={4} className={`${styles.BorderRight} px-0 mx-0`} >
                  <p className={`${styles.CrewInfoP} `}>{transport_captain_name}</p>
                </Col>
                <Col xs={6} md={4} className={`${styles.BorderRight} px-0 mx-0`} >
                <p className={`${styles.CrewInfop} `}>{transport_captain_phone}</p>
                </Col>
                <Col xs={12} md={4}  className='px-0 mx-0 pt-3 pt-md-0' >
                  <p className={`${styles.CrewInfop} `}>{transport_captain_email}</p>
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
         {/* Transport Manager 1 */}
         {transport_manager_1_name && 
              (<div className={`${styles.CrewInfoRow} mt-1 pb-2`}>
              <div className='d-flex justify-content-center '>
              <p className={`mb-2 mx-4 py-0 text-center ${styles.Width95 }
          ${styles.SubTitle2 }`} style={{ textTransform: 'uppercase'}}>Transport Manager 1</p>  
              </div>
              <Row className='text-center' >
                <Col xs={6} md={4} className={`${styles.BorderRight} px-0 mx-0`} >
                  <p className={`${styles.CrewInfoP} `}>{transport_manager_1_name}</p>
                </Col>
                <Col xs={6} md={4} className={`${styles.BorderRight} px-0 mx-0`} >
                <p className={`${styles.CrewInfop} `}>{transport_manager_1_phone}</p>
                </Col>
                <Col xs={12} md={4}  className='px-0 mx-0 pt-3 pt-md-0' >
                  <p className={`${styles.CrewInfop} `}>{transport_manager_1_email}</p>
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
         {/* Transport Manager 2 */}
         {transport_manager_2_name && 
              (<div className={`${styles.CrewInfoRow} mt-1 pb-2`}>
              <div className='d-flex justify-content-center '>
              <p className={`mb-2 mx-4 py-0 text-center ${styles.Width95 }
          ${styles.SubTitle2 }`} style={{ textTransform: 'uppercase'}}>Transport Manager 2</p>  
              </div>
              <Row className='text-center' >
                <Col xs={6} md={4} className={`${styles.BorderRight} px-0 mx-0`} >
                  <p className={`${styles.CrewInfoP} `}>{transport_manager_2_name}</p>
                </Col>
                <Col xs={6} md={4} className={`${styles.BorderRight} px-0 mx-0`} >
                <p className={`${styles.CrewInfop} `}>{transport_manager_2_phone}</p>
                </Col>
                <Col xs={12} md={4}  className='px-0 mx-0 pt-3 pt-md-0' >
                  <p className={`${styles.CrewInfop} `}>{transport_manager_2_email}</p>
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
         {/* Head Driver*/}
         {head_driver_name && 
              (<div className={`${styles.CrewInfoRow} mt-1 pb-2`}>
              <div className='d-flex justify-content-center '>
              <p className={`mb-2 mx-4 py-0 text-center ${styles.Width95 }
          ${styles.SubTitle2 }`} style={{ textTransform: 'uppercase'}}>Head Driver</p>  
              </div>
              <Row className='text-center' >
                <Col xs={6} md={4} className={`${styles.BorderRight} px-0 mx-0`} >
                  <p className={`${styles.CrewInfoP} `}>{head_driver_name}</p>
                </Col>
                <Col xs={6} md={4} className={`${styles.BorderRight} px-0 mx-0`} >
                <p className={`${styles.CrewInfop} `}>{head_driver_phone}</p>
                </Col>
                <Col xs={12} md={4}  className='px-0 mx-0 pt-3 pt-md-0' >
                  <p className={`${styles.CrewInfop} `}>{head_driver_email}</p>
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
         {/* Driver 1 */}
         {car1_name && 
              (<div className={`${styles.CrewInfoRow} mt-1 pb-2`}>
              <div className='d-flex justify-content-center '>
              <p className={`mb-2 mx-4 py-0 text-center ${styles.Width95 }
          ${styles.SubTitle2 }`} style={{ textTransform: 'uppercase'}}>Driver 1</p>  
              </div>
              <Row className='text-center' >
                <Col xs={6} md={4} className={`${styles.BorderRight} px-0 mx-0`} >
                  <p className={`${styles.CrewInfoP} `}>{car1_name}</p>
                </Col>
                <Col xs={6} md={4} className={`${styles.BorderRight} px-0 mx-0`} >
                <p className={`${styles.CrewInfop} `}>{car1_phone}</p>
                </Col>
                <Col xs={12} md={4}  className='px-0 mx-0 pt-3 pt-md-0' >
                  <p className={`${styles.CrewInfop} `}>{car1_email}</p>
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
         {/* Driver 2 */}
         {car2_name && 
              (<div className={`${styles.CrewInfoRow} mt-1 pb-2`}>
              <div className='d-flex justify-content-center '>
              <p className={`mb-2 mx-4 py-0 text-center ${styles.Width95 }
          ${styles.SubTitle2 }`} style={{ textTransform: 'uppercase'}}>Driver 2</p>  
              </div>
              <Row className='text-center' >
                <Col xs={6} md={4} className={`${styles.BorderRight} px-0 mx-0`} >
                  <p className={`${styles.CrewInfoP} `}>{car2_name}</p>
                </Col>
                <Col xs={6} md={4} className={`${styles.BorderRight} px-0 mx-0`} >
                <p className={`${styles.CrewInfop} `}>{car2_phone}</p>
                </Col>
                <Col xs={12} md={4}  className='px-0 mx-0 pt-3 pt-md-0' >
                  <p className={`${styles.CrewInfop} `}>{car2_email}</p>
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
         {/* Driver 3 */}
         {car3_name && 
              (<div className={`${styles.CrewInfoRow} mt-1 pb-2`}>
              <div className='d-flex justify-content-center '>
              <p className={`mb-2 mx-4 py-0 text-center ${styles.Width95 }
          ${styles.SubTitle2 }`} style={{ textTransform: 'uppercase'}}>Driver 3</p>  
              </div>
              <Row className='text-center' >
                <Col xs={6} md={4} className={`${styles.BorderRight} px-0 mx-0`} >
                  <p className={`${styles.CrewInfoP} `}>{car3_name}</p>
                </Col>
                <Col xs={6} md={4} className={`${styles.BorderRight} px-0 mx-0`} >
                <p className={`${styles.CrewInfop} `}>{car3_phone}</p>
                </Col>
                <Col xs={12} md={4}  className='px-0 mx-0 pt-3 pt-md-0' >
                  <p className={`${styles.CrewInfop} `}>{car3_email}</p>
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
         {/* Driver 4 */}
         {truck1_name && 
              (<div className={`${styles.CrewInfoRow} mt-1 pb-2`}>
              <div className='d-flex justify-content-center '>
              <p className={`mb-2 mx-4 py-0 text-center ${styles.Width95 }
          ${styles.SubTitle2 }`} style={{ textTransform: 'uppercase'}}>Driver 4</p>  
              </div>
              <Row className='text-center' >
                <Col xs={6} md={4} className={`${styles.BorderRight} px-0 mx-0`} >
                  <p className={`${styles.CrewInfoP} `}>{truck1_name}</p>
                </Col>
                <Col xs={6} md={4} className={`${styles.BorderRight} px-0 mx-0`} >
                <p className={`${styles.CrewInfop} `}>{truck1_phone}</p>
                </Col>
                <Col xs={12} md={4}  className='px-0 mx-0 pt-3 pt-md-0' >
                  <p className={`${styles.CrewInfop} `}>{truck1_email}</p>
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
        <Col className='text-center d-none d-md-block'>
        <Button onClick={() => setShowTport(showTport => !showTport)}
          className={`px-5 ${btnStyles.Button} ${btnStyles.Shed}
          ${btnStyles.Wide4}`} style={{ textTransform: 'uppercase'}}>
          Non-Callsheet Extra Transport Dept Positions </Button>
        </Col>
        <Col className='text-center d-block d-md-none'>
        <Button onClick={() => setShowTport(showTport => !showTport)}
          className={`px-5 ${btnStyles.Button} ${btnStyles.Shed} ${btnStyles.Wide3}`}
          style={{ textTransform: 'uppercase'}}>
          Non-Callsheet Extra Transport Dept Positions </Button>
        </Col>
        </Row>
         {!showTport ? (
             ""
                 ) : (
                   <ExtraCrewInfo
                   dept="transport"
                   setShow={setShowTport}  /> 
          ) } 
       </div>
     )
   }
   
   export default InfoTransport