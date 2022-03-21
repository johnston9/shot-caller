import React from 'react';
import { useRedirect } from '../../hooks/Redirect';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import styles from "../../styles/Callsheets.module.css";

const InfoSound = ({crewInfoOne, setShowSou}) => {
  useRedirect("loggedOut");
  const {sound_mixer_name, sound_mixer_email, sound_mixer_phone,
    boom_operator_name, boom_operator_email, boom_operator_phone,
    sound_assistant_1_name, sound_assistant_1_email, sound_assistant_1_phone,
    sound_assistant_2_name, sound_assistant_2_email, sound_assistant_2_phone,
    transport_captain_name, transport_captain_email, transport_captain_phone,
    transport_manager_1_name, transport_manager_1_email, transport_manager_1_phone, 
    transport_manager_2_name, transport_manager_2_email, transport_manager_2_phone, 
    head_driver_name, head_driver_email, head_driver_phone,
    car1_name, car1_email, car1_phone,
    car2_name, car2_email, car2_phone,
    car3_name, car3_email, car3_phone,
    truck1_name, truck1_email, truck1_phone,
    truck2_name, truck2_email, truck2_phone,
    truck3_name, truck3_email, truck3_phone,} = crewInfoOne || {};
  return (
    <div>
      <div className={`mt-0 text-center ${styles.SubTitle }`}>
      <span className={`float-right ${styles.Close }`} onClick={() => setShowSou(false) } >Close</span> 
      <h5 className={`pl-5 text-center`} style={{ textTransform: 'uppercase'}} >SOUND </h5>
      </div>
      <div className='mt-3'>
        {/* sound mixer */}
        {sound_mixer_name && 
          (<div className={`${styles.CrewInfoRow}`}>
          <Row className='text-center' >
            <Col xs={6} md={3} >
              <p className={`${styles.CrewInfoP} `}>Sound Mixer</p>
            </Col>
            <Col xs={6} md={3} >
              <p className={`${styles.CrewInfop} `}>{sound_mixer_name} </p>
            </Col>
            <Col xs={6} md={3} >
              <p className={`${styles.CrewInfop} `}>{sound_mixer_email}</p>
            </Col>
            <Col xs={6} md={3} >
            <p className={`${styles.CrewInfop} `}>{sound_mixer_phone}</p>
            </Col>
          </Row>
          </div> )
         }
         {/* boom operator */}
         {boom_operator_name && 
          (<div className={`${styles.CrewInfoRow}`}>
          <Row className='text-center' >
            <Col xs={6} md={3} >
              <p className={`${styles.CrewInfoP} `}>Boom Operator</p>
            </Col>
            <Col xs={6} md={3} >
              <p className={`${styles.CrewInfop} `}>{boom_operator_name} </p>
            </Col>
            <Col xs={6} md={3} >
              <p className={`${styles.CrewInfop} `}>{boom_operator_email}</p>
            </Col>
            <Col xs={6} md={3} >
            <p className={`${styles.CrewInfop} `}>{boom_operator_phone}</p>
            </Col>
          </Row>
          </div> )
         }
         {/* sound assistant 1 */}
         {sound_assistant_1_name && 
          (<div className={`${styles.CrewInfoRow}`}>
          <Row className='text-center' >
            <Col xs={6} md={3} >
              <p className={`${styles.CrewInfoP} `}>Sound Assist 1</p>
            </Col>
            <Col xs={6} md={3} >
              <p className={`${styles.CrewInfop} `}>{sound_assistant_1_name} </p>
            </Col>
            <Col xs={6} md={3} >
              <p className={`${styles.CrewInfop} `}>{sound_assistant_1_email}</p>
            </Col>
            <Col xs={6} md={3} >
            <p className={`${styles.CrewInfop} `}>{sound_assistant_1_phone}</p>
            </Col>
          </Row>
          </div> )
         }
         {/* sound assistant 2 */}
         {sound_assistant_2_name && 
          (<div className={`${styles.CrewInfoRow}`}>
          <Row className='text-center' >
            <Col xs={6} md={3} >
              <p className={`${styles.CrewInfoP} `}>Sound Assist 2</p>
            </Col>
            <Col xs={6} md={3} >
              <p className={`${styles.CrewInfop} `}>{sound_assistant_2_name} </p>
            </Col>
            <Col xs={6} md={3} >
              <p className={`${styles.CrewInfop} `}>{sound_assistant_2_email}</p>
            </Col>
            <Col xs={6} md={3} >
            <p className={`${styles.CrewInfop} `}>{sound_assistant_2_phone}</p>
            </Col>
          </Row>
          </div> )
         }
         {/* TRANSPORT  */}
         <div className={`mx-5 mt-0 text-center ${styles.SubTitle }`}>
         <h5 className={`pr-3 text-center`} style={{ textTransform: 'uppercase'}} >TRANSPORT </h5>
         </div>
         {/* transport captain */}
         {transport_captain_name && 
          (<div className={`${styles.CrewInfoRow}`}>
          <Row className='text-center' >
            <Col xs={6} md={3} >
              <p className={`${styles.CrewInfoP} `}>Transport Captain</p>
            </Col>
            <Col xs={6} md={3} >
              <p className={`${styles.CrewInfop} `}>{transport_captain_name} </p>
            </Col>
            <Col xs={6} md={3} >
              <p className={`${styles.CrewInfop} `}>{transport_captain_email}</p>
            </Col>
            <Col xs={6} md={3} >
            <p className={`${styles.CrewInfop} `}>{transport_captain_phone}</p>
            </Col>
          </Row>
          </div> )
         }
         {/* transport manager 1 */}
         {transport_manager_1_name && 
          (<div className={`${styles.CrewInfoRow}`}>
          <Row className='text-center' >
            <Col xs={6} md={3} >
              <p className={`${styles.CrewInfoP} `}>Transport Mngr 1</p>
            </Col>
            <Col xs={6} md={3} >
              <p className={`${styles.CrewInfop} `}>{transport_manager_1_name} </p>
            </Col>
            <Col xs={6} md={3} >
              <p className={`${styles.CrewInfop} `}>{transport_manager_1_email}</p>
            </Col>
            <Col xs={6} md={3} >
            <p className={`${styles.CrewInfop} `}>{transport_manager_1_phone}</p>
            </Col>
          </Row>
          </div> )
         }
         {/* transport manager 2 */}
         {transport_manager_2_name && 
          (<div className={`${styles.CrewInfoRow}`}>
          <Row className='text-center' >
            <Col xs={6} md={3} >
              <p className={`${styles.CrewInfoP} `}>Transport Mngr 2</p>
            </Col>
            <Col xs={6} md={3} >
              <p className={`${styles.CrewInfop} `}>{transport_manager_2_name} </p>
            </Col>
            <Col xs={6} md={3} >
              <p className={`${styles.CrewInfop} `}>{transport_manager_2_email}</p>
            </Col>
            <Col xs={6} md={3} >
            <p className={`${styles.CrewInfop} `}>{transport_manager_2_phone}</p>
            </Col>
          </Row>
          </div> )
         }
         {/* head driver */}
         {head_driver_name && 
          (<div className={`${styles.CrewInfoRow}`}>
          <Row className='text-center' >
            <Col xs={6} md={3} >
              <p className={`${styles.CrewInfoP} `}>Head Driver</p>
            </Col>
            <Col xs={6} md={3} >
              <p className={`${styles.CrewInfop} `}>{head_driver_name} </p>
            </Col>
            <Col xs={6} md={3} >
              <p className={`${styles.CrewInfop} `}>{head_driver_email}</p>
            </Col>
            <Col xs={6} md={3} >
            <p className={`${styles.CrewInfop} `}>{head_driver_phone}</p>
            </Col>
          </Row>
          </div> )
         }
         {/* car 1 */}
         {car1_name && 
          (<div className={`${styles.CrewInfoRow}`}>
          <Row className='text-center' >
            <Col xs={6} md={3} >
              <p className={`${styles.CrewInfoP} `}>Car 1</p>
            </Col>
            <Col xs={6} md={3} >
              <p className={`${styles.CrewInfop} `}>{car1_name} </p>
            </Col>
            <Col xs={6} md={3} >
              <p className={`${styles.CrewInfop} `}>{car1_email}</p>
            </Col>
            <Col xs={6} md={3} >
            <p className={`${styles.CrewInfop} `}>{car1_phone}</p>
            </Col>
          </Row>
          </div> )
         }
         {/* car 2 */}
         {car2_name && 
          (<div className={`${styles.CrewInfoRow}`}>
          <Row className='text-center' >
            <Col xs={6} md={3} >
              <p className={`${styles.CrewInfoP} `}>Car 2</p>
            </Col>
            <Col xs={6} md={3} >
              <p className={`${styles.CrewInfop} `}>{car2_name} </p>
            </Col>
            <Col xs={6} md={3} >
              <p className={`${styles.CrewInfop} `}>{car2_email}</p>
            </Col>
            <Col xs={6} md={3} >
            <p className={`${styles.CrewInfop} `}>{car2_phone}</p>
            </Col>
          </Row>
          </div> )
         }
         {/* car 3 */}
         {car3_name && 
          (<div className={`${styles.CrewInfoRow}`}>
          <Row className='text-center' >
            <Col xs={6} md={3} >
              <p className={`${styles.CrewInfoP} `}>Car 3</p>
            </Col>
            <Col xs={6} md={3} >
              <p className={`${styles.CrewInfop} `}>{car3_name} </p>
            </Col>
            <Col xs={6} md={3} >
              <p className={`${styles.CrewInfop} `}>{car3_email}</p>
            </Col>
            <Col xs={6} md={3} >
            <p className={`${styles.CrewInfop} `}>{car3_phone}</p>
            </Col>
          </Row>
          </div> )
         }
         {/* truck 1 */}
         {truck1_name && 
          (<div className={`${styles.CrewInfoRow}`}>
          <Row className='text-center' >
            <Col xs={6} md={3} >
              <p className={`${styles.CrewInfoP} `}>Truck 1</p>
            </Col>
            <Col xs={6} md={3} >
              <p className={`${styles.CrewInfop} `}>{truck1_name} </p>
            </Col>
            <Col xs={6} md={3} >
              <p className={`${styles.CrewInfop} `}>{truck1_email}</p>
            </Col>
            <Col xs={6} md={3} >
            <p className={`${styles.CrewInfop} `}>{truck1_phone}</p>
            </Col>
          </Row>
          </div> )
         }
         {/* truck 2 */}
         {truck2_name && 
          (<div className={`${styles.CrewInfoRow}`}>
          <Row className='text-center' >
            <Col xs={6} md={3} >
              <p className={`${styles.CrewInfoP} `}>Truck 2</p>
            </Col>
            <Col xs={6} md={3} >
              <p className={`${styles.CrewInfop} `}>{truck2_name} </p>
            </Col>
            <Col xs={6} md={3} >
              <p className={`${styles.CrewInfop} `}>{truck2_email}</p>
            </Col>
            <Col xs={6} md={3} >
            <p className={`${styles.CrewInfop} `}>{truck2_phone}</p>
            </Col>
          </Row>
          </div> )
         }
         {/* truck 3 */}
         {truck3_name && 
          (<div className={`${styles.CrewInfoRow}`}>
          <Row className='text-center' >
            <Col xs={6} md={3} >
              <p className={`${styles.CrewInfoP} `}>Truck 3</p>
            </Col>
            <Col xs={6} md={3} >
              <p className={`${styles.CrewInfop} `}>{truck3_name} </p>
            </Col>
            <Col xs={6} md={3} >
              <p className={`${styles.CrewInfop} `}>{truck3_email}</p>
            </Col>
            <Col xs={6} md={3} >
            <p className={`${styles.CrewInfop} `}>{truck3_phone}</p>
            </Col>
          </Row>
          </div> )
         }
        </div>
    </div>
  )
}

export default InfoSound