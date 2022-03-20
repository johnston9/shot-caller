import React from 'react';
import { useRedirect } from '../../hooks/Redirect';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import styles from "../../styles/Callsheets.module.css";

const InfoSsript = ({crewInfoOne, setShowScr }) => {
  useRedirect("loggedOut");
  const {writer_name, writer_email, writer_phone,
    catering_co_1_name, catering_co_1_email, catering_co_1_phone,
    catering_co_2_name, catering_co_2_email, catering_co_2_phone,
    catering_co_3_name, catering_co_3_email, catering_co_3_phone,
    craft_service_name, craft_service_email, craft_service_phone,
    crafty_ass_name, crafty_ass_email, crafty_ass_phone,
  } = crewInfoOne || {};
  return (
    <div>
      <div className={`mt-0 text-center ${styles.SubTitle }`}>
      <span className={`float-right ${styles.Close }`} onClick={() => setShowScr(false) } >Close</span> 
      <h5 className={`pl-5 text-center`} style={{ textTransform: 'uppercase'}} >SCRIPT </h5>
      </div>
      <div className='mt-3'>
        {/* writer */}
        {writer_name && 
          (<div className={`${styles.CrewInfoRow}`}>
          <Row className='text-center' >
            <Col xs={6} md={3} >
              <p className={`${styles.CrewInfoP} `}>Writer</p>
            </Col>
            <Col xs={6} md={3} >
              <p className={`${styles.CrewInfop} `}>{writer_name} </p>
            </Col>
            <Col xs={6} md={3} >
              <p className={`${styles.CrewInfop} `}>{writer_email}</p>
            </Col>
            <Col xs={6} md={3} >
            <p className={`${styles.CrewInfop} `}>{writer_phone}</p>
            </Col>
          </Row>
          </div> )
         }
         {/* catering  */}
         <div className={`mx-5 mb-3 mt-0 text-center ${styles.SubTitle }`}>
         <h5 className={`pr-3 text-center`} style={{ textTransform: 'uppercase'}} >CATERING </h5>
         </div>
         {/* catering co 1 */}
         {catering_co_1_name && 
          (<div className={`${styles.CrewInfoRow}`}>
          <Row className='text-center' >
            <Col xs={6} md={3} >
              <p className={`${styles.CrewInfoP} `}>Catering CO 1</p>
            </Col>
            <Col xs={6} md={3} >
              <p className={`${styles.CrewInfop} `}>{catering_co_1_name} </p>
            </Col>
            <Col xs={6} md={3} >
              <p className={`${styles.CrewInfop} `}>{catering_co_1_email}</p>
            </Col>
            <Col xs={6} md={3} >
            <p className={`${styles.CrewInfop} `}>{catering_co_1_phone}</p>
            </Col>
          </Row>
          </div> )
         }
         {/* catering co 2 */}
         {catering_co_2_name && 
          (<div className={`${styles.CrewInfoRow}`}>
          <Row className='text-center' >
            <Col xs={6} md={3} >
              <p className={`${styles.CrewInfoP} `}>Catering CO 2</p>
            </Col>
            <Col xs={6} md={3} >
              <p className={`${styles.CrewInfop} `}>{catering_co_2_name} </p>
            </Col>
            <Col xs={6} md={3} >
              <p className={`${styles.CrewInfop} `}>{catering_co_2_email}</p>
            </Col>
            <Col xs={6} md={3} >
            <p className={`${styles.CrewInfop} `}>{catering_co_2_phone}</p>
            </Col>
          </Row>
          </div> )
         }
         {/* catering co 3 */}
         {catering_co_3_name && 
          (<div className={`${styles.CrewInfoRow}`}>
          <Row className='text-center' >
            <Col xs={6} md={3} >
              <p className={`${styles.CrewInfoP} `}>Catering CO 3</p>
            </Col>
            <Col xs={6} md={3} >
              <p className={`${styles.CrewInfop} `}>{catering_co_3_name} </p>
            </Col>
            <Col xs={6} md={3} >
              <p className={`${styles.CrewInfop} `}>{catering_co_3_email}</p>
            </Col>
            <Col xs={6} md={3} >
            <p className={`${styles.CrewInfop} `}>{catering_co_3_phone}</p>
            </Col>
          </Row>
          </div> )
         }
         {/* craft services  */}
         <div className={`mx-5 mt-0 text-center ${styles.SubTitle }`}>
         <h5 className={`pr-3 text-center`} style={{ textTransform: 'uppercase'}} >CRAFT SERVICES </h5>
         </div>
         {/* craft service */}
         {craft_service_name && 
          (<div className={`${styles.CrewInfoRow}`}>
          <Row className='text-center' >
            <Col xs={6} md={3} >
              <p className={`${styles.CrewInfoP} `}>Craft Service</p>
            </Col>
            <Col xs={6} md={3} >
              <p className={`${styles.CrewInfop} `}>{craft_service_name} </p>
            </Col>
            <Col xs={6} md={3} >
              <p className={`${styles.CrewInfop} `}>{craft_service_email}</p>
            </Col>
            <Col xs={6} md={3} >
            <p className={`${styles.CrewInfop} `}>{craft_service_phone}</p>
            </Col>
          </Row>
          </div> )
         }
         {/* crafty ass */}
        {crafty_ass_name && 
          (<div className={`${styles.CrewInfoRow}`}>
          <Row className='text-center' >
            <Col xs={6} md={3} >
              <p className={`${styles.CrewInfoP} `}>Crafty Ass</p>
            </Col>
            <Col xs={6} md={3} >
              <p className={`${styles.CrewInfop} `}>{crafty_ass_name} </p>
            </Col>
            <Col xs={6} md={3} >
              <p className={`${styles.CrewInfop} `}>{crafty_ass_email}</p>
            </Col>
            <Col xs={6} md={3} >
            <p className={`${styles.CrewInfop} `}>{crafty_ass_phone}</p>
            </Col>
          </Row>
          </div> )
         }
        </div>
    </div>
  )
}

export default InfoSsript