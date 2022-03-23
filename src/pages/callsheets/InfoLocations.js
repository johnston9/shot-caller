import React from 'react';
import { useRedirect } from '../../hooks/Redirect';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import styles from "../../styles/Callsheets.module.css";

const InfoLocations = ({crewInfoOne, setShowLoc}) => {
  useRedirect("loggedOut");
  
  const {location_mngr_name, location_mngr_email, location_mngr_phone,
    location_ass_1_name, location_ass_1_email, location_ass_1_phone,
    location_ass_2_name, location_ass_2_email, location_ass_2_phone,
    location_ass_3_name, location_ass_3_email, location_ass_3_phone,
    location_ass_4_name, location_ass_4_email, location_ass_4_phone,
    location_security_name, location_security_email, location_security_phone,} = crewInfoOne || {};
  return (
    <div>
      <div className={`mt-0 text-center ${styles.SubTitle }`}>
      <span className={`float-right ${styles.Close }`} onClick={() => setShowLoc(false) } >Close</span> 
      <h5 className={`pl-5 text-center`} style={{ textTransform: 'uppercase'}} >LOCATIONS </h5>
      </div>
      <div className='mt-3'> 
        {/* location mngr */}
        {location_mngr_name && 
          (<div className={`${styles.CrewInfoRow}`}>
          <Row className='text-center' >
            <Col xs={6} md={3} >
              <p className={`${styles.CrewInfoP} `}>Location Mngr</p>
            </Col>
            <Col xs={6} md={3} >
              <p className={`${styles.CrewInfop} `}>{location_mngr_name} </p>
            </Col>
            <Col xs={6} md={3} >
              <p className={`${styles.CrewInfop} `}>{location_mngr_email}</p>
            </Col>
            <Col xs={6} md={3} >
            <p className={`${styles.CrewInfop} `}>{location_mngr_phone}</p>
            </Col>
          </Row>
          </div> )
         }
        {/* location security */}
        {location_security_name && 
          (<div className={`${styles.CrewInfoRow}`}>
          <Row className='text-center' >
            <Col xs={6} md={3} >
              <p className={`${styles.CrewInfoP} `}>Location Security</p>
            </Col>
            <Col xs={6} md={3} >
              <p className={`${styles.CrewInfop} `}>{location_security_name} </p>
            </Col>
            <Col xs={6} md={3} >
              <p className={`${styles.CrewInfop} `}>{location_security_email}</p>
            </Col>
            <Col xs={6} md={3} >
            <p className={`${styles.CrewInfop} `}>{location_security_phone}</p>
            </Col>
          </Row>
          </div> )
         }
        {/* location ass 1 */}
        {location_ass_1_name && 
          (<div className={`${styles.CrewInfoRow}`}>
          <Row className='text-center' >
            <Col xs={6} md={3} >
              <p className={`${styles.CrewInfoP} `}>Loc Assistant 1</p>
            </Col>
            <Col xs={6} md={3} >
              <p className={`${styles.CrewInfop} `}>{location_ass_1_name} </p>
            </Col>
            <Col xs={6} md={3} >
              <p className={`${styles.CrewInfop} `}>{location_ass_1_email}</p>
            </Col>
            <Col xs={6} md={3} >
            <p className={`${styles.CrewInfop} `}>{location_ass_1_phone}</p>
            </Col>
          </Row>
          </div> )
         }
         {/* location ass 2 */}
        {location_ass_2_name && 
          (<div className={`${styles.CrewInfoRow}`}>
          <Row className='text-center' >
            <Col xs={6} md={3} >
              <p className={`${styles.CrewInfoP} `}>Loc Assistant 2</p>
            </Col>
            <Col xs={6} md={3} >
              <p className={`${styles.CrewInfop} `}>{location_ass_2_name} </p>
            </Col>
            <Col xs={6} md={3} >
              <p className={`${styles.CrewInfop} `}>{location_ass_2_email}</p>
            </Col>
            <Col xs={6} md={3} >
            <p className={`${styles.CrewInfop} `}>{location_ass_2_phone}</p>
            </Col>
          </Row>
          </div> )
         }
         {/* location ass 3 */}
        {location_ass_3_name && 
          (<div className={`${styles.CrewInfoRow}`}>
          <Row className='text-center' >
            <Col xs={6} md={3} >
              <p className={`${styles.CrewInfoP} `}>Loc Assistant 3</p>
            </Col>
            <Col xs={6} md={3} >
              <p className={`${styles.CrewInfop} `}>{location_ass_3_name} </p>
            </Col>
            <Col xs={6} md={3} >
              <p className={`${styles.CrewInfop} `}>{location_ass_3_email}</p>
            </Col>
            <Col xs={6} md={3} >
            <p className={`${styles.CrewInfop} `}>{location_ass_3_phone}</p>
            </Col>
          </Row>
          </div> )
         }
         {/* location ass 4 */}
        {location_ass_4_name && 
          (<div className={`${styles.CrewInfoRow}`}>
          <Row className='text-center' >
            <Col xs={6} md={3} >
              <p className={`${styles.CrewInfoP} `}>Loc Assistant 4</p>
            </Col>
            <Col xs={6} md={3} >
              <p className={`${styles.CrewInfop} `}>{location_ass_4_name} </p>
            </Col>
            <Col xs={6} md={3} >
              <p className={`${styles.CrewInfop} `}>{location_ass_4_email}</p>
            </Col>
            <Col xs={6} md={3} >
            <p className={`${styles.CrewInfop} `}>{location_ass_4_phone}</p>
            </Col>
          </Row>
          </div> )
         }
      </div>
    </div>
  )
}

export default InfoLocations