/* Component to display the Sound Department Calltimes
   on the Callsheet */
import React from "react";
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import styles from "../../../styles/Callsheets.module.css";

const TimesSoundTransport = ({crewInfoOne, callsheet, setShowSou }) => {

  const {sound_mixer_name,
    boom_operator_name, 
    sound_assistant_1_name,
    sound_assistant_2_name,} = crewInfoOne || {};

  const { sound_mixer_calltime, boom_operator_calltime, sound_assistant_1_calltime,
    sound_assistant_2_calltime, } = callsheet;

  return (
    <div>
      <div className={`mt-0 mb-2 text-center ${styles.Back3 }`}>
      <span className={`float-right ${styles.Close }`} onClick={() => setShowSou(false) } >Close</span> 
      <h5 className={`d-none d-md-block pl-5 mb-0 text-center ${styles.Bold }`} >
      SOUND DEPARTMENT</h5>
      <h5 className={`d-block d-md-none pl-5 mb-0 text-center ${styles.Bold }`} >
      SOUND</h5>
      </div>
      <Row>
      {/* Sound Mixer */}
      {(sound_mixer_calltime && sound_mixer_name) && ( 
          <Col xs={12} lg={6} className={`${styles.RightPanel}`}>
          <Row className='mt-1 mx-0 d-flex align-items-center' >
            <Col className={`mx-0 px-0 ${styles.Borderl}`} xs={12} sm={5} >
                <p className={`${styles.BoldScene} my-0 py-0 d-block d-sm-none text-center`}>
                Sound Mixer</p>
                <p className={`${styles.BoldScene} my-0 py-0 d-none d-sm-block`}>
                Sound Mixer</p> 
            </Col>
            <Col className={`mx-0 px-0 ${styles.Borderm}`} xs={8} sm={4} >
              <p className={`my-0 py-0 `}>{sound_mixer_name} </p>
            </Col>
            <Col className={`mx-0 px-0 text-center ${styles.Border}`} xs={4} sm={3} >
              <p className={`my-0 py-0 `}>{sound_mixer_calltime} </p>
            </Col>
          </Row>
          <hr className={`mt-1 mb-1 ${styles.BreakCrew}`} />
          </Col>
      ) }
      {/* Boom Operator */}
      {(boom_operator_calltime && boom_operator_name) && ( 
          <Col xs={12} lg={6} className={`${styles.RightPanel}`}>
          <Row className='mt-1 mx-0 d-flex align-items-center' >
            <Col className={`mx-0 px-0 ${styles.Borderl}`} xs={12} sm={5} >
                <p className={`${styles.BoldScene} my-0 py-0 d-block d-sm-none text-center`}>
                Boom Operator</p>
                <p className={`${styles.BoldScene} my-0 py-0 d-none d-sm-block`}>
                Boom Operator</p> 
            </Col>
            <Col className={`mx-0 px-0 ${styles.Borderm}`} xs={8} sm={4} >
              <p className={`my-0 py-0 `}>{boom_operator_name} </p>
            </Col>
            <Col className={`mx-0 px-0 text-center ${styles.Border}`} xs={4} sm={3} >
              <p className={`my-0 py-0 `}>{boom_operator_calltime} </p>
            </Col>
          </Row>
          <hr className={`mt-1 mb-1 ${styles.BreakCrew}`} />
          </Col>
      ) }
      {/* Boom Operator 2/UTA - (Using Sound Assistant 1 keys) */}
      {(sound_assistant_1_calltime && sound_assistant_1_name) && ( 
          <Col xs={12} lg={6} className={`${styles.RightPanel}`}>
          <Row className='mt-1 mx-0 d-flex align-items-center' >
            <Col className={`mx-0 px-0 ${styles.Borderl}`} xs={12} sm={5} >
                <p className={`${styles.BoldScene} my-0 py-0 d-block d-sm-none text-center`}>
                Boom Operator 2/UTA</p>
                <p className={`${styles.BoldScene} my-0 py-0 d-none d-sm-block`}>
                Boom Operator 2/UTA</p> 
            </Col>
            <Col className={`mx-0 px-0 ${styles.Borderm}`} xs={8} sm={4} >
              <p className={`my-0 py-0 `}>{sound_assistant_1_name} </p>
            </Col>
            <Col className={`mx-0 px-0 text-center ${styles.Border}`} xs={4} sm={3} >
              <p className={`my-0 py-0 `}>{sound_assistant_1_calltime} </p>
            </Col>
          </Row>
          <hr className={`mt-1 mb-1 ${styles.BreakCrew}`} />
          </Col>
      ) }
      {/* Sound Assistant - (Using Sound Assistant 2 keys) */}
      {(sound_assistant_2_calltime && sound_assistant_2_name) && ( 
          <Col xs={12} lg={6} className={`${styles.RightPanel}`}>
          <Row className='mt-1 mx-0 d-flex align-items-center' >
            <Col className={`mx-0 px-0 ${styles.Borderl}`} xs={12} sm={5} >
                <p className={`${styles.BoldScene} my-0 py-0 d-block d-sm-none text-center`}>
                Sound Assistant</p>
                <p className={`${styles.BoldScene} my-0 py-0 d-none d-sm-block`}>
                Sound Assistant</p> 
            </Col>
            <Col className={`mx-0 px-0 ${styles.Borderm}`} xs={8} sm={4} >
              <p className={`my-0 py-0 `}>{sound_assistant_2_name} </p>
            </Col>
            <Col className={`mx-0 px-0 text-center ${styles.Border}`} xs={4} sm={3} >
              <p className={`my-0 py-0 `}>{sound_assistant_2_calltime} </p>
            </Col>
          </Row>
          <hr className={`mt-1 mb-1 ${styles.BreakCrew}`} />
          </Col>
      ) }
      </Row>
    </div>
  )
}

export default TimesSoundTransport