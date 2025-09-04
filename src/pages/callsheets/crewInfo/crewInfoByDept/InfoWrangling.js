/* Component in the CrewInfo page to display
   the Construction and Wrangling Department crew info */
   import React, { useState } from 'react';
   import { useRedirect } from '../../../../hooks/Redirect';
   import Col from 'react-bootstrap/Col';
   import Row from 'react-bootstrap/Row';
   import Button from 'react-bootstrap/Button';
   import btnStyles from "../../../../styles/Button.module.css";
   import styles from "../../../../styles/Callsheets.module.css";
   import ExtraCrewInfo from '../ExtraCrewInfo';

const InfoWrangling = ({crewInfoOne, setShowWra}) => {
    useRedirect();
      const [showWrang, setShowWrang] = useState(false); 
      const [showConst, setShowConst] = useState(false); 

      const {legal_name, legal_email, legal_phone,
        add_pos_19_name, add_pos_19_email, add_pos_19_phone,
        makeup_artist_5_name, makeup_artist_5_email, makeup_artist_5_phone,
        truck3_name, truck3_email, truck3_phone,
        truck2_name, truck2_email, truck2_phone,
          } = crewInfoOne || {};

  return (
    <div>
    <div className={`mt-0 mb-3 text-center ${styles.SubTitle }`}>
      <span className={`float-right pt-1 pt-md-2 ${styles.Bold } ${styles.Close }`} onClick={() => setShowWra(false) } >Close</span> 
      <h5 className={`d-none d-md-block pl-5 mb-0 text-center py-1 ${styles.Bold }`} >
      CONSTRUCTION DEPARTMENT</h5>
        <h5 className={`d-block d-md-none pl-5 mb-0 text-center py-1 ${styles.Bold }`} >
        CONSTRUCTION</h5>
    </div>
    <div className={`px-md-5 mx-md-5 ${styles.White }`}>
    {/* Standby Carpenter (Using truck 2 keys) */}
    {truck2_name && 
              (<div className={`${styles.CrewInfoRow} mt-1 pb-2`}>
              <div className='d-flex justify-content-center '>
              <p className={`mb-2 mx-4 py-0 text-center ${styles.Width95 }
          ${styles.SubTitle2 }`} style={{ textTransform: 'uppercase'}}>Standby Carpenter</p>  
              </div>
              <Row className='text-center' >
                <Col xs={6} md={4} className={`${styles.BorderRight} px-0 mx-0`} >
                  <p className={`${styles.CrewInfoP} `}>{truck2_name}</p>
                </Col>
                <Col xs={6} md={4} className={`${styles.BorderRight} px-0 mx-0`} >
                <p className={`${styles.CrewInfop} `}>{truck2_phone}</p>
                </Col>
                <Col xs={12} md={4}  className='px-0 mx-0 pt-3 pt-md-0' >
                  <p className={`${styles.CrewInfop} `}>{truck2_email}</p>
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
    {/* Standby Painter (Using Additional Position 19 keys) */}
    {add_pos_19_name && 
          (<div className={`${styles.CrewInfoRow} mt-1 pb-2`}>
          <div className='d-flex justify-content-center '>
          <p className={`mb-2 mx-4 py-0 text-center ${styles.Width95 }
      ${styles.SubTitle2 }`} style={{ textTransform: 'uppercase'}}>Standby Painter</p>  
          </div>
          <Row className='text-center' >
            <Col xs={6} md={4} className={`${styles.BorderRight} px-0 mx-0`} >
              <p className={`${styles.CrewInfoP} `}>{add_pos_19_name}</p>
            </Col>
            <Col xs={6} md={4} className={`${styles.BorderRight} px-0 mx-0`} >
            <p className={`${styles.CrewInfop} `}>{add_pos_19_phone}</p>
            </Col>
            <Col xs={12} md={4}  className='px-0 mx-0 pt-3 pt-md-0' >
              <p className={`${styles.CrewInfop} `}>{add_pos_19_email}</p>
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
    {/* Standby Rigger (Using Hair/Makeup Artist 5 keys) */}
    {makeup_artist_5_name && 
      (<div className={`${styles.CrewInfoRow} pt-3 pb-2`}>
      <div className='d-flex justify-content-center '>
      <p className={`mb-2 mx-4 py-0 text-center ${styles.Width95 }
       ${styles.SubTitle2 }`} style={{ textTransform: 'uppercase'}}>
        Standby Rigger</p> 
      </div>
      <Row className='text-center' >
        <Col xs={6} md={4} className={`${styles.BorderRight} px-0 mx-0`}>
          <p className={`${styles.CrewInfoP} `}>{makeup_artist_5_name}</p>
        </Col>
        <Col xs={6} md={4} className={`${styles.BorderRight} px-0 mx-0`}>
        <p className={`${styles.CrewInfop} `}>{makeup_artist_5_phone}</p>
        </Col>
        <Col xs={12} md={4}  className='px-0 mx-0 pt-3 pt-md-0'>
          <p className={`${styles.CrewInfop} `}>{makeup_artist_5_email}</p>
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
    {/* Standby Stagehand (Using Truck 3 keys) */}
    {truck3_name && 
              (<div className={`${styles.CrewInfoRow} mt-1 pb-2`}>
              <div className='d-flex justify-content-center '>
              <p className={`mb-2 mx-4 py-0 text-center ${styles.Width95 }
          ${styles.SubTitle2 }`} style={{ textTransform: 'uppercase'}}>Standby Stagehand</p>  
              </div>
              <Row className='text-center' >
                <Col xs={6} md={4} className={`${styles.BorderRight} px-0 mx-0`} >
                  <p className={`${styles.CrewInfoP} `}>{truck3_name}</p>
                </Col>
                <Col xs={6} md={4} className={`${styles.BorderRight} px-0 mx-0`} >
                <p className={`${styles.CrewInfop} `}>{truck3_phone}</p>
                </Col>
                <Col xs={12} md={4}  className='px-0 mx-0 pt-3 pt-md-0' >
                  <p className={`${styles.CrewInfop} `}>{truck3_email}</p>
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
        <Button onClick={() => setShowConst(showConst => !showConst)}
          className={`px-5 ${btnStyles.Button} ${btnStyles.Shed}
          ${btnStyles.Wide4}`} style={{ textTransform: 'uppercase'}}>
          Non-Callsheet Extra Construction Dept Positions </Button>
        </Col>
        <Col className='text-center d-block d-md-none'>
        <Button onClick={() => setShowConst(showConst => !showConst)}
          className={`px-5 ${btnStyles.Button} ${btnStyles.Shed} ${btnStyles.Wide3}`}
          style={{ textTransform: 'uppercase'}}>
          Non-Callsheet Extra Construction Dept Positions </Button>
        </Col>
      </Row>
         {!showConst ? (
             ""
                 ) : (
                   <ExtraCrewInfo
                   dept="construction"
                   setShow={setShowConst}  /> 
          ) } 
    {/* WRANGLING */}
    <div className={`mt-4 mx-5 text-center ${styles.SubTitle }`}>
      <h5 className={` mb-0 text-center py-1 ${styles.Bold }`} >WRANGLING DEPARTMENT</h5>
      </div>
      <div className={`px-md-5 mx-md-5 ${styles.White }`}>
      {/* Head Wrangler (Using legal keys) */}
      {legal_name && 
          (<div className={`${styles.CrewInfoRow} pt-3 pb-2`}>
          <div className='d-flex justify-content-center '>
          <p className={`mb-2 mx-4 py-0 text-center ${styles.Width95 }
      ${styles.SubTitle2 }`} style={{ textTransform: 'uppercase'}}>Head Wrangler</p>  
          </div>
          <Row className='text-center' >
            <Col xs={6} md={4} className={`${styles.BorderRight} px-0 mx-0`} >
              <p className={`${styles.CrewInfoP} `}>{legal_name}</p>
            </Col>
            <Col xs={6} md={4} className={`${styles.BorderRight} px-0 mx-0`} >
            <p className={`${styles.CrewInfop} `}>{legal_phone}</p>
            </Col>
            <Col xs={12} md={4}  className='px-0 mx-0 pt-3 pt-md-0' >
              <p className={`${styles.CrewInfop} `}>{legal_email}</p>
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
        <Button onClick={() => setShowWrang(showWrang => !showWrang)}
          className={`px-5 ${btnStyles.Button} ${btnStyles.Shed}
          ${btnStyles.Wide4}`} style={{ textTransform: 'uppercase'}}>
          Non-Callsheet Extra Wrangling Dept Positions </Button>
        </Col>
        <Col className='text-center d-block d-md-none'>
        <Button onClick={() => setShowWrang(showWrang => !showWrang)}
          className={`px-5 ${btnStyles.Button} ${btnStyles.Shed} ${btnStyles.Wide3}`}
          style={{ textTransform: 'uppercase'}}>
          Non-Callsheet Extra Wrangling Dept Positions </Button>
        </Col>
         </Row>
         {!showWrang ? (
             ""
                 ) : (
                   <ExtraCrewInfo
                   dept="wrangling"
                   setShow={setShowWrang}  /> 
          ) } 
    </div>
  )
}

export default InfoWrangling