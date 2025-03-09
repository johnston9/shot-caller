/* Component to display the Wardrobe Department Calltimes
   on the Callsheet */
import React from "react";
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import styles from "../../../styles/Callsheets.module.css";

const TimesWardrobe = ({crewInfoOne, callsheet, setShowWar }) => {

  const {costume_designer_name, 
    ass_costume_designer_name,
    casting_director_name,
    pro_assistant_4_name,
    pro_assistant_5_name,
    wardrobe_assistant_1_name,
    wardrobe_assistant_2_name,
    wardrobe_assistant_3_name,
    wardrobe_assistant_4_name,
    wardrobe_assistant_5_name,} = crewInfoOne || {};

  const {costume_designer_calltime, ass_costume_designer_calltime,
    casting_director_calltime,
    pro_assistant_4_calltime, pro_assistant_5_calltime,
    wardrobe_assistant_1_calltime, wardrobe_assistant_2_calltime,
    wardrobe_assistant_3_calltime, wardrobe_assistant_4_calltime,
    wardrobe_assistant_5_calltime,
    } = callsheet;
    
  return (
    <div>
      <div className={`mt-0 mb-2 text-center ${styles.Back3 }`}>
      <span className={`float-right ${styles.Close }`} onClick={() => setShowWar(false) } >Close</span> 
      <h5 className={`d-none d-md-block pl-5 mb-0 text-center ${styles.Bold }`} >
      WARDROBE DEPARTMENT</h5>
      <h5 className={`d-block d-md-none pl-5 mb-0 text-center ${styles.Bold }`} >
      WARDROBE</h5>
      </div>
      <Row>
      {/* Costume Designer */}
      {(costume_designer_calltime && costume_designer_name) &&
          (<Col xs={12} lg={6}>
          <Row className={`mt-1 mx-0 d-flex align-items-center`} >
            <Col className={`mx-0 px-0 ${styles.Borderl}`} xs={12} sm={5} >
              <p className={`${styles.BoldScene} my-0 py-0 d-block d-sm-none text-center`}>
              Costume Designer</p>
              <p className={`${styles.BoldScene} my-0 py-0 d-none d-sm-block`}>
              Costume Designer</p>                    
            </Col>
            <Col className={`mx-0 px-0 ${styles.Borderm}`} xs={8} sm={4} >
              <p className={`my-0 py-0 `}>{costume_designer_name} </p>
            </Col>
            <Col className={`mx-0 px-0 text-center ${styles.Border}`} xs={4} sm={3} >
              <p className={`my-0 py-0 `}>{costume_designer_calltime} </p>
            </Col>
          </Row>
          <hr className={`mt-1 mb-1 ${styles.BreakCrew}`} />
          </Col> )
      }
      {/* Assistant Costume Designer */}
      {(ass_costume_designer_calltime && ass_costume_designer_name) &&
          (<Col xs={12} lg={6}>
          <Row className={`mt-1 mx-0 d-flex align-items-center`} >
            <Col className={`mx-0 px-0 ${styles.Borderl}`} xs={12} sm={5} >
              <p className={`${styles.BoldScene} my-0 py-0 d-block d-sm-none text-center`}>
              Assistant Costume Designer</p>
              <p className={`${styles.BoldScene} my-0 py-0 d-none d-sm-block`}>
              Assistant Costume Designer</p>                    
            </Col>
            <Col className={`mx-0 px-0 ${styles.Borderm}`} xs={8} sm={4} >
              <p className={`my-0 py-0 `}>{ass_costume_designer_name} </p>
            </Col>
            <Col className={`mx-0 px-0 text-center ${styles.Border}`} xs={4} sm={3} >
              <p className={`my-0 py-0 `}>{ass_costume_designer_calltime} </p>
            </Col>
          </Row>
          <hr className={`mt-1 mb-1 ${styles.BreakCrew}`} />
          </Col> )
      }
      {/* Wardrobe Supervisor - (Using Casting Director keys) */}
      {(casting_director_calltime && casting_director_name) &&
          (<Col xs={12} lg={6}>
          <Row className={`mt-1 mx-0 d-flex align-items-center`} >
            <Col className={`mx-0 px-0 ${styles.Borderl}`} xs={12} sm={5} >
              <p className={`${styles.BoldScene} my-0 py-0 d-block d-sm-none text-center`}>
              Wardrobe Supervisor</p>
              <p className={`${styles.BoldScene} my-0 py-0 d-none d-sm-block`}>
              Wardrobe Supervisor</p>                    
            </Col>
            <Col className={`mx-0 px-0 ${styles.Borderm}`} xs={8} sm={4} >
              <p className={`my-0 py-0 `}>{casting_director_name} </p>
            </Col>
            <Col className={`mx-0 px-0 text-center ${styles.Border}`} xs={4} sm={3} >
              <p className={`my-0 py-0 `}>{casting_director_calltime} </p>
            </Col>
          </Row>
          <hr className={`mt-1 mb-1 ${styles.BreakCrew}`} />
          </Col> )
      }
      {/* Key Costumer - (Using Production Assistant 4 keys) */}
      {(pro_assistant_4_calltime && pro_assistant_4_name) &&
          (<Col xs={12} lg={6}>
          <Row className={`mt-1 mx-0 d-flex align-items-center`} >
            <Col className={`mx-0 px-0 ${styles.Borderl}`} xs={12} sm={5} >
              <p className={`${styles.BoldScene} my-0 py-0 d-block d-sm-none text-center`}>
              Key Costumer</p>
              <p className={`${styles.BoldScene} my-0 py-0 d-none d-sm-block`}>
              Key Costumer</p>                    
            </Col>
            <Col className={`mx-0 px-0 ${styles.Borderm}`} xs={8} sm={4} >
              <p className={`my-0 py-0 `}>{pro_assistant_4_name} </p>
            </Col>
            <Col className={`mx-0 px-0 text-center ${styles.Border}`} xs={4} sm={3} >
              <p className={`my-0 py-0 `}>{pro_assistant_4_calltime} </p>
            </Col>
          </Row>
          <hr className={`mt-1 mb-1 ${styles.BreakCrew}`} />
          </Col> )
      }
      {/* Truck Costumer - (Using Production Assistant 5 keys) */}
      {(pro_assistant_5_calltime && pro_assistant_5_name) &&
          (<Col xs={12} lg={6}>
          <Row className={`mt-1 mx-0 d-flex align-items-center`} >
            <Col className={`mx-0 px-0 ${styles.Borderl}`} xs={12} sm={5} >
              <p className={`${styles.BoldScene} my-0 py-0 d-block d-sm-none text-center`}>
              Truck Costumer</p>
              <p className={`${styles.BoldScene} my-0 py-0 d-none d-sm-block`}>
              Truck Costumer</p>                    
            </Col>
            <Col className={`mx-0 px-0 ${styles.Borderm}`} xs={8} sm={4} >
              <p className={`my-0 py-0 `}>{pro_assistant_5_name} </p>
            </Col>
            <Col className={`mx-0 px-0 text-center ${styles.Border}`} xs={4} sm={3} >
              <p className={`my-0 py-0 `}>{pro_assistant_5_calltime} </p>
            </Col>
          </Row>
          <hr className={`mt-1 mb-1 ${styles.BreakCrew}`} />
          </Col> )
      }
      {/* Set Costumer 1 - (Using Wardrobe Assistant 4 keys) */}
      {(wardrobe_assistant_4_calltime && wardrobe_assistant_4_name) &&
          (<Col xs={12} lg={6}>
          <Row className={`mt-1 mx-0 d-flex align-items-center`} >
            <Col className={`mx-0 px-0 ${styles.Borderl}`} xs={12} sm={5} >
              <p className={`${styles.BoldScene} my-0 py-0 d-block d-sm-none text-center`}>
              Set Costumer 1</p>
              <p className={`${styles.BoldScene} my-0 py-0 d-none d-sm-block`}>
              Set Costumer 1</p>                    
            </Col>
            <Col className={`mx-0 px-0 ${styles.Borderm}`} xs={8} sm={4} >
              <p className={`my-0 py-0 `}>{wardrobe_assistant_4_name} </p>
            </Col>
            <Col className={`mx-0 px-0 text-center ${styles.Border}`} xs={4} sm={3} >
              <p className={`my-0 py-0 `}>{wardrobe_assistant_4_calltime} </p>
            </Col>
          </Row>
          <hr className={`mt-1 mb-1 ${styles.BreakCrew}`} />
          </Col> )
      }
      {/* Set Costumer 2 - (Using Wardrobe Assistant 5 keys) */}
      {(wardrobe_assistant_5_calltime && wardrobe_assistant_5_name) &&
          (<Col xs={12} lg={6}>
          <Row className={`mt-1 mx-0 d-flex align-items-center`} >
            <Col className={`mx-0 px-0 ${styles.Borderl}`} xs={12} sm={5} >
              <p className={`${styles.BoldScene} my-0 py-0 d-block d-sm-none text-center`}>
              Set Costumer 2</p>
              <p className={`${styles.BoldScene} my-0 py-0 d-none d-sm-block`}>
              Set Costumer 2</p>                    
            </Col>
            <Col className={`mx-0 px-0 ${styles.Borderm}`} xs={8} sm={4} >
              <p className={`my-0 py-0 `}>{wardrobe_assistant_5_name} </p>
            </Col>
            <Col className={`mx-0 px-0 text-center ${styles.Border}`} xs={4} sm={3} >
              <p className={`my-0 py-0 `}>{wardrobe_assistant_5_calltime} </p>
            </Col>
          </Row>
          <hr className={`mt-1 mb-1 ${styles.BreakCrew}`} />
          </Col> )
      }
      {/* Wardrobe Assistant 1 */}
      {(wardrobe_assistant_1_calltime && wardrobe_assistant_1_name) &&
          (<Col xs={12} lg={6}>
          <Row className={`mt-1 mx-0 d-flex align-items-center`} >
            <Col className={`mx-0 px-0 ${styles.Borderl}`} xs={12} sm={5} >
              <p className={`${styles.BoldScene} my-0 py-0 d-block d-sm-none text-center`}>
              Wardrobe Assistant 1</p>
              <p className={`${styles.BoldScene} my-0 py-0 d-none d-sm-block`}>
              Wardrobe Assistant 1</p>                    
            </Col>
            <Col className={`mx-0 px-0 ${styles.Borderm}`} xs={8} sm={4} >
              <p className={`my-0 py-0 `}>{wardrobe_assistant_1_name} </p>
            </Col>
            <Col className={`mx-0 px-0 text-center ${styles.Border}`} xs={4} sm={3} >
              <p className={`my-0 py-0 `}>{wardrobe_assistant_1_calltime} </p>
            </Col>
          </Row>
          <hr className={`mt-1 mb-1 ${styles.BreakCrew}`} />
          </Col> )
      }
      {/* Wardrobe Assistant 2 */}
      {(wardrobe_assistant_2_calltime && wardrobe_assistant_2_name) &&
          (<Col xs={12} lg={6}>
          <Row className={`mt-1 mx-0 d-flex align-items-center`} >
            <Col className={`mx-0 px-0 ${styles.Borderl}`} xs={12} sm={5} >
              <p className={`${styles.BoldScene} my-0 py-0 d-block d-sm-none text-center`}>
              Wardrobe Assistant 2</p>
              <p className={`${styles.BoldScene} my-0 py-0 d-none d-sm-block`}>
              Wardrobe Assistant 2</p>                    
            </Col>
            <Col className={`mx-0 px-0 ${styles.Borderm}`} xs={8} sm={4} >
              <p className={`my-0 py-0 `}>{wardrobe_assistant_2_name} </p>
            </Col>
            <Col className={`mx-0 px-0 text-center ${styles.Border}`} xs={4} sm={3} >
              <p className={`my-0 py-0 `}>{wardrobe_assistant_2_calltime} </p>
            </Col>
          </Row>
          <hr className={`mt-1 mb-1 ${styles.BreakCrew}`} />
          </Col> )
      }
      {/* Wardrobe Assistant 3 */}
      {(wardrobe_assistant_3_calltime && wardrobe_assistant_3_name) &&
          (<Col xs={12} lg={6}>
          <Row className={`mt-1 mx-0 d-flex align-items-center`} >
            <Col className={`mx-0 px-0 ${styles.Borderl}`} xs={12} sm={5} >
              <p className={`${styles.BoldScene} my-0 py-0 d-block d-sm-none text-center`}>
              Wardrobe Assistant 3</p>
              <p className={`${styles.BoldScene} my-0 py-0 d-none d-sm-block`}>
              Wardrobe Assistant 3</p>                    
            </Col>
            <Col className={`mx-0 px-0 ${styles.Borderm}`} xs={8} sm={4} >
              <p className={`my-0 py-0 `}>{wardrobe_assistant_3_name} </p>
            </Col>
            <Col className={`mx-0 px-0 text-center ${styles.Border}`} xs={4} sm={3} >
              <p className={`my-0 py-0 `}>{wardrobe_assistant_3_calltime} </p>
            </Col>
          </Row>
          <hr className={`mt-1 mb-1 ${styles.BreakCrew}`} />
          </Col> )
      }
      </Row>
    </div>
  )
}

export default TimesWardrobe