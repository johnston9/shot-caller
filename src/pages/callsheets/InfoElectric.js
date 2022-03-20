import React from 'react';
import { useRedirect } from '../../hooks/Redirect';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import styles from "../../styles/Callsheets.module.css";

const InfoElectric = ({crewInfoOne, setShowEle}) => {
  useRedirect("loggedOut");
  const {gaffer_name, gaffer_email, gaffer_phone,
    best_boy_electric_name, best_boy_electric_email, best_boy_electric_phone,
    electric_3_name, electric_3_email, electric_3_phone,
    electric_4_name, electric_4_email, electric_4_phone,
    keygrip_name, keygrip_email, keygrip_phone,
    best_boy_grip_name, best_boy_grip_email, best_boy_grip_phone,
    dolly_grip_name, dolly_grip_email, dolly_grip_phone,
    swing_ge1_name, swing_ge1_email, swing_ge1_phone,
    swing_ge2_name, swing_ge2_email, swing_ge2_phone,
    swing_ge3_name, swing_ge3_email, swing_ge3_phone,
    swing_ge4_name, swing_ge4_email, swing_ge4_phone,
    swing_ge5_name, swing_ge5_email, swing_ge5_phone,} = crewInfoOne || {};
  return (
    <div>
      <div className={`mt-0 text-center ${styles.SubTitle }`}>
      <span className={`float-right ${styles.Close }`} onClick={() => setShowEle(false) } >Close</span> 
      <h5 className={`pl-5 text-center`} style={{ textTransform: 'uppercase'}} >ELECTRIC </h5>
      </div>
      <div className='mt-3'>
        {/* gaffer */}
        {gaffer_name && 
          (<div className={`${styles.CrewInfoRow}`}>
          <Row className='text-center' >
            <Col xs={6} md={3} >
              <p className={`${styles.CrewInfoP} `}>Gaffer</p>
            </Col>
            <Col xs={6} md={3} >
              <p className={`${styles.CrewInfop} `}>{gaffer_name} </p>
            </Col>
            <Col xs={6} md={3} >
              <p className={`${styles.CrewInfop} `}>{gaffer_email}</p>
            </Col>
            <Col xs={6} md={3} >
            <p className={`${styles.CrewInfop} `}>{gaffer_phone}</p>
            </Col>
          </Row>
          </div> )
         }
         {/* best boy electric */}
        {best_boy_electric_name && 
          (<div className={`${styles.CrewInfoRow}`}>
          <Row className='text-center' >
            <Col xs={6} md={3} >
              <p className={`${styles.CrewInfoP} `}>BB Electric</p>
            </Col>
            <Col xs={6} md={3} >
              <p className={`${styles.CrewInfop} `}>{best_boy_electric_name} </p>
            </Col>
            <Col xs={6} md={3} >
              <p className={`${styles.CrewInfop} `}>{best_boy_electric_email}</p>
            </Col>
            <Col xs={6} md={3} >
            <p className={`${styles.CrewInfop} `}>{best_boy_electric_phone}</p>
            </Col>
          </Row>
          </div> )
         }
         {/* 3rd electric */}
        {electric_3_name && 
          (<div className={`${styles.CrewInfoRow}`}>
          <Row className='text-center' >
            <Col xs={6} md={3} >
              <p className={`${styles.CrewInfoP} `}>3rd Electric</p>
            </Col>
            <Col xs={6} md={3} >
              <p className={`${styles.CrewInfop} `}>{electric_3_name} </p>
            </Col>
            <Col xs={6} md={3} >
              <p className={`${styles.CrewInfop} `}>{electric_3_email}</p>
            </Col>
            <Col xs={6} md={3} >
            <p className={`${styles.CrewInfop} `}>{electric_3_phone}</p>
            </Col>
          </Row>
          </div> )
         }
         {/* 4th electric */}
        {electric_4_name && 
          (<div className={`${styles.CrewInfoRow}`}>
          <Row className='text-center' >
            <Col xs={6} md={3} >
              <p className={`${styles.CrewInfoP} `}>4th Electric</p>
            </Col>
            <Col xs={6} md={3} >
              <p className={`${styles.CrewInfop} `}>{electric_4_name} </p>
            </Col>
            <Col xs={6} md={3} >
              <p className={`${styles.CrewInfop} `}>{electric_4_email}</p>
            </Col>
            <Col xs={6} md={3} >
            <p className={`${styles.CrewInfop} `}>{electric_4_phone}</p>
            </Col>
          </Row>
          </div> )
         }
         {/* keygrip */}
        {keygrip_name && 
          (<div className={`${styles.CrewInfoRow}`}>
          <Row className='text-center' >
            <Col xs={6} md={3} >
              <p className={`${styles.CrewInfoP} `}>Keygrip</p>
            </Col>
            <Col xs={6} md={3} >
              <p className={`${styles.CrewInfop} `}>{keygrip_name} </p>
            </Col>
            <Col xs={6} md={3} >
              <p className={`${styles.CrewInfop} `}>{keygrip_email}</p>
            </Col>
            <Col xs={6} md={3} >
            <p className={`${styles.CrewInfop} `}>{keygrip_phone}</p>
            </Col>
          </Row>
          </div> )
         }
         {/* best boy grip */}
        {best_boy_grip_name && 
          (<div className={`${styles.CrewInfoRow}`}>
          <Row className='text-center' >
            <Col xs={6} md={3} >
              <p className={`${styles.CrewInfoP} `}>BB Grip</p>
            </Col>
            <Col xs={6} md={3} >
              <p className={`${styles.CrewInfop} `}>{best_boy_grip_name} </p>
            </Col>
            <Col xs={6} md={3} >
              <p className={`${styles.CrewInfop} `}>{best_boy_grip_email}</p>
            </Col>
            <Col xs={6} md={3} >
            <p className={`${styles.CrewInfop} `}>{best_boy_grip_phone}</p>
            </Col>
          </Row>
          </div> )
         }
         {/* dolly grip */}
        {dolly_grip_name && 
          (<div className={`${styles.CrewInfoRow}`}>
          <Row className='text-center' >
            <Col xs={6} md={3} >
              <p className={`${styles.CrewInfoP} `}>Dolly Grip</p>
            </Col>
            <Col xs={6} md={3} >
              <p className={`${styles.CrewInfop} `}>{dolly_grip_name} </p>
            </Col>
            <Col xs={6} md={3} >
              <p className={`${styles.CrewInfop} `}>{dolly_grip_email}</p>
            </Col>
            <Col xs={6} md={3} >
            <p className={`${styles.CrewInfop} `}>{dolly_grip_phone}</p>
            </Col>
          </Row>
          </div> )
         }
        {/* swing ge 1 */}
        {swing_ge1_name && 
          (<div className={`${styles.CrewInfoRow}`}>
          <Row className='text-center' >
            <Col xs={6} md={3} >
              <p className={`${styles.CrewInfoP} `}>Swing G/E 1</p>
            </Col>
            <Col xs={6} md={3} >
              <p className={`${styles.CrewInfop} `}>{swing_ge1_name} </p>
            </Col>
            <Col xs={6} md={3} >
              <p className={`${styles.CrewInfop} `}>{swing_ge1_email}</p>
            </Col>
            <Col xs={6} md={3} >
            <p className={`${styles.CrewInfop} `}>{swing_ge1_phone}</p>
            </Col>
          </Row>
          </div> )
        }
        {/* swing ge 2 */}
        {swing_ge2_name && 
          (<div className={`${styles.CrewInfoRow}`}>
          <Row className='text-center' >
            <Col xs={6} md={3} >
              <p className={`${styles.CrewInfoP} `}>Swing G/E 2</p>
            </Col>
            <Col xs={6} md={3} >
              <p className={`${styles.CrewInfop} `}>{swing_ge2_name} </p>
            </Col>
            <Col xs={6} md={3} >
              <p className={`${styles.CrewInfop} `}>{swing_ge2_email}</p>
            </Col>
            <Col xs={6} md={3} >
            <p className={`${styles.CrewInfop} `}>{swing_ge2_phone}</p>
            </Col>
          </Row>
          </div> )
        }
        {/* swing ge 3 */}
        {swing_ge3_name && 
          (<div className={`${styles.CrewInfoRow}`}>
          <Row className='text-center' >
            <Col xs={6} md={3} >
              <p className={`${styles.CrewInfoP} `}>Swing G/E 3</p>
            </Col>
            <Col xs={6} md={3} >
              <p className={`${styles.CrewInfop} `}>{swing_ge3_name} </p>
            </Col>
            <Col xs={6} md={3} >
              <p className={`${styles.CrewInfop} `}>{swing_ge3_email}</p>
            </Col>
            <Col xs={6} md={3} >
            <p className={`${styles.CrewInfop} `}>{swing_ge3_phone}</p>
            </Col>
          </Row>
          </div> )
        }
        {/* swing ge 4 */}
        {swing_ge4_name && 
          (<div className={`${styles.CrewInfoRow}`}>
          <Row className='text-center' >
            <Col xs={6} md={3} >
              <p className={`${styles.CrewInfoP} `}>Swing G/E 4</p>
            </Col>
            <Col xs={6} md={3} >
              <p className={`${styles.CrewInfop} `}>{swing_ge4_name} </p>
            </Col>
            <Col xs={6} md={3} >
              <p className={`${styles.CrewInfop} `}>{swing_ge4_email}</p>
            </Col>
            <Col xs={6} md={3} >
            <p className={`${styles.CrewInfop} `}>{swing_ge4_phone}</p>
            </Col>
          </Row>
          </div> )
        }
        {/* swing ge 5 */}
        {swing_ge5_name && 
          (<div className={`${styles.CrewInfoRow}`}>
          <Row className='text-center' >
            <Col xs={6} md={3} >
              <p className={`${styles.CrewInfoP} `}>Swing G/E 5</p>
            </Col>
            <Col xs={6} md={3} >
              <p className={`${styles.CrewInfop} `}>{swing_ge5_name} </p>
            </Col>
            <Col xs={6} md={3} >
              <p className={`${styles.CrewInfop} `}>{swing_ge5_email}</p>
            </Col>
            <Col xs={6} md={3} >
            <p className={`${styles.CrewInfop} `}>{swing_ge5_phone}</p>
            </Col>
          </Row>
          </div> )
        }
        </div>
    </div>
  )
}

export default InfoElectric