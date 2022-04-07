import React, { useState } from 'react';
import { useRedirect } from '../../hooks/Redirect';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import styles from "../../styles/Callsheets.module.css";
import { useCrewInfoContext } from '../../contexts/BaseCallContext';
import { axiosReq } from '../../api/axiosDefaults';
import { useHistory } from "react-router";
import { PostDropdown } from '../../components/PostDropdown';
import TalentPage from './TalentPage';
import BgPage from './BgPage';
import SchedulePage from './SchedulePage';
import LocationsPage from './LocationsPage';
import NotesPage from './NotesPage';
import CrewCallsPage from './CrewCallsPage';
import AdvancedSchedPage from './AdvancedSchedPage';
import ContactsPage from './ContactsPage';
import WalkiesPage from './WalkiesPage';

const CallSheet = (props ) => {
    useRedirect("loggedOut");
    const crewInfo = useCrewInfoContext();
    const crewInfoOne = crewInfo.results[0];
    const history = useHistory();
    console.log(props);
    const [showContacts, setShowContacts] = useState(false);
    const [showLoc, setShowLoc] = useState(false);
    const [showWalkies, setShowWalkies] = useState(false);
    const [showSched, setShowSched] = useState(false);
    const [showTalent, setShowTalent] = useState(false);
    const [showBg, setShowBg] = useState(false);
    const [showNotes, setShowNotes] = useState(false);
    const [showCrew, setShowCrew] = useState(false);
    const [showAdvanSched, setShowAdvanSched] = useState(false);

    // eslint-disable-next-line
    const { production_name, production_company, company_phone, company_email,
        company_address_line_1, company_address_line_2, company_address_line_3,
        // eslint-disable-next-line
        company_address_line_4, company_logo, total_shoot_days,
        // eslint-disable-next-line
        director_name, director_phone,
        producer_name, producer_phone,
        pro_coordinator_name, pro_coordinator_phone,
        // eslint-disable-next-line
        upm_name, upm_phone,
        ad_1_name, ad_1_phone,
        dop_name, dop_phone,
        // eslint-disable-next-line
        set_medic_name, set_medic_email, set_medic_phone, } = crewInfoOne || {};

    const { scenes,
        admin,
        cast,
        callsheet,
        background,
        id, 
        day_id, 
        day,
        date,
        unit_call,
        talent_call, 
        shoot_call, 
        breakfast, 
        lunch, 
        wrap, 
        basecamp_name,
        basecamp_address, 
        basecamp_parking_n_notes, 
        location_1_name,
        location_2_name,
        location_3_name,
        location_4_name,
        location_5_name,
        location_1_address, 
        location_2_address, 
        location_3_address, 
        location_4_address, 
        location_5_address, 
        location_1_parking_n_notes, 
        location_2_parking_n_notes, 
        location_3_parking_n_notes, 
        location_4_parking_n_notes,
        location_5_parking_n_notes,
        nearest_hospital,
        hospital_address_line_1,
        hospital_address_line_2,
        hospital_address_line_3,
        hospital_address_line_4,
        weather_location,
        important_info,
        transport_info,
        department_info,
        walkie_channel_production,
        walkie_channel_open,
        walkie_channel_transportation,
        walkie_channel_art_dept,
        walkie_channel_rollover,
        walkie_channel_camera,
        walkie_channel_electric,
        walkie_channel_grip,
        // production
        director_calltime,
      } = props;

      const handleEdit = () => {
        history.push(`/callsheet/edit/${day_id}/`);
      };
    
      const handleDelete = async () => {
        try {
          await axiosReq.delete(`/callsheetsnew/${id}/`);
          history.goBack();
        } catch (err) {
        }
      };

  return (
    <div className={`${styles.White} p-3`} >
        {/* MEDIUM pink fff6f6*/}
        <div className='d-none d-md-block'>
        <Row>
            <Col className='text-center' md={{span: 10, offset: 1}}>
                <h1>{production_name} {day_id} </h1>
            </Col>
            <Col className='text-center' md={1}>
                <PostDropdown
                    handleEdit={handleEdit}
                    handleDelete={handleDelete}
                />
            </Col>
        </Row>
        <Row className='px-3'>
            <Col md={4} >
            <div className={`${styles.WhiteAqua} px-1`} >
            <h5>{production_company} </h5>
            <p className='mb-0'>{company_address_line_1} </p>
            <p className='mb-0'>{company_address_line_2} </p>
            <p className='mb-0'>{company_address_line_3} </p>
            <p className='mb-0'>{company_address_line_4} </p>
            <p className='mb-0'>{company_phone} </p>
            <p className='mb-0'>{company_email} </p>
            </div>
            <div className={`${styles.WhiteAqua} px-1 mt-3`}>
            <p className={`mb-0`} ><span className={`${styles.Bold}`}>Producer:</span ><span className='pl-4'>{producer_name} {producer_phone}</span> </p>
            <p className={`mb-0`} ><span className={`${styles.Bold}`}>Pro Cord:</span><span className='pl-4'>{pro_coordinator_name} {pro_coordinator_phone}</span></p>
            <p className={`mb-0`} ><span className={`${styles.Bold}`}>Director:</span><span className='pl-4'>{producer_name} {producer_name}</span></p>
            <p className={`mb-0`} ><span className={`${styles.Bold}`}>1st AD:</span><span className='pl-4 ml-3'>{ad_1_name} {ad_1_phone}</span></p>
            <p className={`mb-0`} ><span className={`${styles.Bold}`}>DoP:</span><span className='pl-5 ml-2'>{dop_name} {dop_phone}</span> </p>
            </div>
            </Col>
            <Col  md={4} className='text-center'  >
            <div>
            <h5>Production Company Logo</h5>
            </div>
            <div>
            <h2>Unit Call</h2>
            <h1 className={` ${styles.UnitCall }`}>{unit_call} </h1>
            <p>Please check individual calltimes</p>
            <h2 className={` ${styles.UnitCall }`}>{date} </h2>
            <h5 className={` ${styles.UnitCall }`}>Day {day} of {total_shoot_days} </h5>
            {/* <h2>{date} </h2> */}
            <h5>First Location Address</h5>
            <h5>{location_1_address} </h5>
            </div>
            </Col>
            <Col md={4}>
            <div className={`${styles.WhiteAqua} px-1`}>
            <p className={`mb-0`} ><span className={`${styles.Bold}`}>Weather:</span ><span className='pl-4'>{weather_location} </span> </p>
            <p className={`mb-0`} ><span className={`${styles.Bold}`}>Sunrise:</span><span className='pl-2'>{weather_location}</span></p>
            <p className={`mb-0`} ><span className={`${styles.Bold}`}>Sunset:</span><span className='pl-5'>{weather_location}</span></p>
            </div>
            <div className={`px-1 ${styles.WhiteAqua} `}>
            <p className={`mb-0`} ><span className={`${styles.Bold}`}>Nearest Hospital:</span></p>
            <p className={`mb-0`}>{nearest_hospital} </p>
            <p className={`mb-0`}>{hospital_address_line_1} </p>
            <p className={`mb-0`}>{hospital_address_line_2} </p>
            <p className={`mb-0`}>{hospital_address_line_3} </p>
            <p className={`mb-0`}>{hospital_address_line_4} </p>
            </div>
            <div>
            </div>
            <div className={`${styles.WhiteAqua} mt-3`}>
            <p className={`mb-0`} ><span className={`${styles.Bold}`}>Talent Call:</span ><span className='pl-4'>{talent_call} </span> </p>
            <p className={`mb-0`} ><span className={`${styles.Bold}`}>First Shot:</span><span className='pl-2'>{shoot_call}</span></p>
            <p className={`mb-0`} ><span className={`${styles.Bold}`}>Breakfast:</span><span className='pl-5'>{breakfast}</span></p>
            <p className={`mb-0`} ><span className={`${styles.Bold}`}>Lunch:</span ><span className='pl-4'>{lunch} </span> </p>
            <p className={`mb-0`} ><span className={`${styles.Bold}`}>Est. Wrap:</span><span className='pl-2'>{wrap}</span></p>
            </div>
            </Col>
        </Row>
        {/* Locations */}
        <LocationsPage callsheet={callsheet} />
        {/* Schedule  */}
        <SchedulePage scenes={scenes} />
        {/* Talent  */}
        <TalentPage cast={cast} />
        {/* BG AND STANDINS */}
        <BgPage background={background}  />
        {/* Notes */}
        <NotesPage
        important_info={important_info} 
        transport_info={transport_info} 
        department_info={department_info} />
        {/* Crew */}
        <CrewCallsPage callsheet={callsheet}/>
        {/* Advanced Schedule  */}
        <AdvancedSchedPage callsheet={callsheet}/>
        {/* Walkie Channels */}
        <div className='mt-3'>
        <p style={{ textTransform: 'uppercase'}} className={`mb-0 pl-3 pt-1 ${styles.SubTitle }`}></p>
        <Row>
            <Col>
            <h5>Walkie Channels: xxx</h5>
            <span> 
            Production{walkie_channel_production}
            {walkie_channel_open}
            {walkie_channel_transportation}
            {walkie_channel_art_dept}
            {walkie_channel_rollover}
            {walkie_channel_camera}
            {walkie_channel_electric}
            {walkie_channel_grip}
            </span>
            </Col>
        </Row>
        </div>
        </div>
        {/* MOBLIE  */}
        <div className='d-block d-md-none'>
        <div>
        {/* name */}
        <Row>
            <Col className='text-center' xs={{span: 8, offset: 2}}>
                <h1>{production_name} {day_id} </h1>
            </Col>
            <Col className='text-center' xs={2}>
                <PostDropdown
                    handleEdit={handleEdit}
                    handleDelete={handleDelete}
                />
            </Col>
        </Row>
        <Row >
        {/* header */}
        <Col xs={12} className='text-center'  >
            <div>
            <h5>Production Company Logo</h5>
            </div>
            <div>
            <h2>Unit Call</h2>
            <h1 className={` ${styles.UnitCall }`}>{unit_call} </h1>
            <p>Please check individual calltimes</p>
            <h2 className={` ${styles.UnitCall }`}>{date} </h2>
            <h5 className={` ${styles.UnitCall }`}>Day {day} of {total_shoot_days} </h5>
            {/* <h2>{date} </h2> */}
            <h5>First Location Address</h5>
            <h5>{location_1_address} </h5>
            </div>
        </Col>
        </Row>
        {/* weather/calls */}
        <Row className='px-3 mt-3'>
        <Col className={`${styles.WhiteAqua} px-1`} xs={6}>
            {/* Weather */}
        <Row>
            <Col xs={6}>
            <p className={`mb-0`} ><span className={`${styles.Bold}`}>Weather:</span > </p>
            <p className={`mb-0`} ><span className={`${styles.Bold}`}>Sunrise:</span></p>
            <p className={`mb-0`} ><span className={`${styles.Bold}`}>Sunset:</span></p>
            </Col>
            <Col xs={6}>
            <p className='pl-2'>{weather_location} </p> 
            <p className='pl-2'>{weather_location}</p>
            <p className='pl-2'>{weather_location}</p>
            </Col>
        </Row>
        {/* calls */}
        <div className={`${styles.WhiteAqua} px-1`}>
        <Row>
            <Col xs={8}>
            <p className={`mb-0`} ><span className={`${styles.Bold}`}>Talent Call:</span > </p>
            <p className={`mb-0`} ><span className={`${styles.Bold}`}>First Shot:</span></p>
            <p className={`mb-0`} ><span className={`${styles.Bold}`}>Est. Wrap:</span > </p>
            </Col>
            <Col className='px-0' xs={4}>
            <p className='pl-2'>{talent_call}  </p>
            <p className='pl-2'>{shoot_call}</p>
            <p className='pl-2'>{wrap}</p>
            </Col>
        </Row>
        </div>
        </Col>
        <Col className={`${styles.WhiteAqua} px-1`} xs={6}>
        {/* Hospital */}
        <div >
        <p className={`mb-0`} ><span className={`${styles.Bold}`}>Nearest Hospital:</span></p>
        <p>{nearest_hospital} </p>
        </div>
        {/* meals */}
        <div>
        <Row>
            <Col xs={6}>
            <p className={`mb-0`} ><span className={`${styles.Bold}`}>Breakfast:</span></p>
            <p className={`mb-0`} ><span className={`${styles.Bold}`}>Lunch:</span > </p>
            </Col>
            <Col xs={6}>
            <p className='pl-2'>{breakfast}</p>
            <p className='pl-2'>{lunch}  </p>
            </Col>
        </Row>
        </div>
        </Col>
        </Row>
        </div>
        <p className={`mt-1 pl-3 mb-0 pt-1 ${styles.SubTitle }`}></p>
        {/* buttons */}
        <Row>
        <Col xs={4} className='text-center' md={2}>
            <p
                className={`py-0 mb-0 ${styles.Button}`}
                onClick={() => setShowContacts(showContacts => !showContacts)} >Contacts
            </p>
        </Col>
        <Col xs={4} className='text-center' md={2}>
            <p
                className={`py-0 mb-0 ${styles.Button}`}
                onClick={() => setShowLoc(showLoc => !showLoc)} >Locations
            </p>
        </Col>
        <Col xs={4} className='text-center' md={2}>
            <p
                className={`py-0 mb-0 ${styles.Button}`}
                onClick={() => setShowWalkies(showWalkies => !showWalkies)} >Walkies
            </p>
        </Col>
        </Row>
        <Row className={`${styles.ButtonLine} mt-0`}>
            <Col xs={4} md={2} className='text-center'>
                <p
                  className={`py-0 mb-0 ${styles.Button}`}
                  onClick={() => setShowSched(showSched => !showSched)} > Schedule
                </p>
            </Col>
            <Col xs={4} md={2} className='text-center'>
                    <p
                      className={`py-0 mb-0 ${styles.Button}`}
                      onClick={() => setShowTalent(showTalent => !showTalent)} > Talent
                    </p>
            </Col>
            <Col xs={4} className='mx-0 pl-4 py-0' md={2}>
              <p
                  className={`py-0 mb-0 ${styles.Button}`}
                  onClick={() => setShowBg(showBg => !showBg)} > Background
              </p>
            </Col>
            <Col xs={4} className='text-center' md={2}>
              <p
                  className={`py-0 mb-0 ${styles.Button}`}
                  onClick={() => showNotes(showNotes => !showNotes)} >Notes
              </p>
            </Col>
            <Col xs={4} className='mx-0 px-0 text-center' md={2}>
              <p
                  className={`py-0 mb-0 ${styles.Button}`}
                  onClick={() => setShowCrew(showCrew => !showCrew)} > Crew
              </p>
            </Col>
            <Col xs={4} className='mx-0 px-0 text-center' md={2}>
              <p
                  className={`py-0 mb-0 ${styles.Button}`}
                  onClick={() => setShowAdvanSched(showAdvanSched => !showAdvanSched)} > Adv Schedule
              </p>
            </Col>
        </Row>  
        <p className={`mt-1 pl-3 mb-0 pt-1 ${styles.SubTitle }`}></p>
        {/* pages */}
        {/* Locations setShowContacts */}
        {!showContacts ? (
                ""
              ) : (
                <ContactsPage crewInfoOne={crewInfoOne} setShow={setShowContacts} /> 
                )
        }
        {!showLoc ? (
                ""
              ) : (
                <LocationsPage callsheet={callsheet} setShow={setShowLoc} /> 
                )
        }
        {!showWalkies ? (
                ""
              ) : (
                <WalkiesPage callsheet={callsheet} setShow={setShowWalkies} /> 
                ) 
        } 
        {!showSched ? (
                ""
              ) : (
                <SchedulePage scenes={scenes} callsheet={callsheet} setShow={setShowSched} /> 
                ) 
        } 
        {!showTalent ? (
                ""
              ) : (
                <TalentPage cast={cast} callsheet={callsheet} setShow={setShowTalent} /> 
                ) 
        } 
        {!showBg ? (
                ""
              ) : (
                <BgPage background={background} callsheet={callsheet} setShow={setShowBg} /> 
                ) 
        }      
        {!showNotes ? (
                ""
              ) : (
                <NotesPage callsheet={callsheet} setShow={setShowNotes} /> 
                ) 
        } 
        {!showCrew ? (
                ""
              ) : (
                <CrewCallsPage callsheet={callsheet} setShow={setShowCrew} /> 
                ) 
        } 
        {!showAdvanSched ? (
                ""
              ) : (
                <CrewCallsPage callsheet={callsheet} setShow={setShowAdvanSched} /> 
                ) 
        }
        </div>
    </div>
  )
}

export default CallSheet