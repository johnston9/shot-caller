/* Component to display the Casting Department Calltimes
   on the Callsheet */
import React from "react";
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import styles from "../../../styles/Callsheets.module.css";

const TimesCastingAD = ({crewInfoOne, callsheet, setShowCas }) => {

  const {casting_director_name,
    extras_casting_name, 
    pro_assistant_4_name,
    pro_assistant_5_name,} = crewInfoOne;

  const { casting_director_calltime, extras_casting_calltime, 
     pro_assistant_4_calltime, pro_assistant_5_calltime,
    } = callsheet;
    
  return (
    <div>
      <div className={`mt-0 text-center  ${styles.Back3 }`}>
      <span className={`float-right ${styles.Close }`} onClick={() => setShowCas(false) } >Close</span> 
      <h5 className={`pl-5 text-center`} style={{ textTransform: 'uppercase'}} >CASTING DEPARTMENT</h5>
      </div>
      <Row>
      {/* Extras Casting */}
      {(extras_casting_calltime && extras_casting_name) &&
          (<Col xs={12} lg={6}>
          <Row className={`mt-1 mx-0 d-flex align-items-center`} >
            <Col className={`mx-0 px-0 ${styles.Borderl}`} xs={12} sm={5} >
              <p className={`${styles.BoldScene} my-0 py-0 d-block d-sm-none text-center`}>
              Extras Casting</p>
              <p className={`${styles.BoldScene} my-0 py-0 d-none d-sm-block`}>
              Extras Casting</p>                    
            </Col>
            <Col className={`mx-0 px-0 ${styles.Borderm}`} xs={8} sm={4} >
              <p className={`my-0 py-0 `}>{extras_casting_name} </p>
            </Col>
            <Col className={`mx-0 px-0 text-center ${styles.Border}`} xs={4} sm={3} >
              <p className={`my-0 py-0 `}>{extras_casting_calltime} </p>
            </Col>
          </Row>
          <hr className={`mt-1 mb-1 ${styles.BreakCrew}`} />
          </Col> )
      }
      </Row>
    </div>
  )
}

export default TimesCastingAD