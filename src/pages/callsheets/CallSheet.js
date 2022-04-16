import React, { useEffect, useState } from 'react';
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
import { Image } from 'react-bootstrap';

const CallSheet = (props ) => {
    useRedirect("loggedOut");
    const crewInfo = useCrewInfoContext();
    const crewInfoOne = crewInfo.results[0];
    const history = useHistory();
    const [yourcalltime, setYourcalltime] = useState("");
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
        currentUser,
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
        gaffer_calltime,
      } = props;

      useEffect(() => {
        const yourcall = ( currentUser) => {
          switch(currentUser) {
            case "director": return callsheet.director_calltime;
            case "producer": return callsheet.producer_calltime;
            case "dop": return callsheet.dop_calltime;
            case "davey": return callsheet.gaffer_calltime;
            default: return 'xx';
          }
        };
        setYourcalltime(yourcall(currentUser));
      }, [])

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
    <div className={`${styles.White} px-3`} >
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
            <Row className='mb-3'>
              <Col xs={{span: 8, offset: 1}}>
              <h5 className={`mb-1 pl-3 ${styles.WhiteAquaPro}`}>{production_company} </h5>
              <p className={`mb-1 pl-3 ${styles.WhiteAquaPro}`}>{company_address_line_1} </p>
              <p className={`mb-1 pl-3 ${styles.WhiteAquaPro}`}>{company_address_line_2} </p>
              <p className={`mb-1 pl-3 ${styles.WhiteAquaPro}`}>{company_address_line_3} </p>
              <p className={`mb-1 pl-3 ${styles.WhiteAquaPro}`}>{company_address_line_4} </p>
              <p className={`mb-1 pl-3 ${styles.WhiteAquaPro}`}>Phone {company_phone} </p>
              <p className={`mb-1 pl-3 ${styles.WhiteAquaPro}`}>Email {company_email} </p>
              </Col>
            </Row>
            <Row>
              <Col xs={12} >
              <p className={`mb-1`} ><span className={`${styles.Bold}`}>Producer:</span > </p>
              </Col>
              <Col xs={12} >
              <p className={`${styles.WhiteAqua} ml-2 mb-1`} >{producer_name} - {producer_phone} </p>
              </Col>
            </Row>
            {/* pro-cor */}
            <Row>
              <Col xs={12} >
              <p className={`mb-1`} ><span className={`${styles.Bold}`}>Pro Cord:</span></p>
              </Col>
              <Col xs={12} >
              <p className={`${styles.WhiteAqua} ml-2 mb-1`} >{pro_coordinator_name} - {pro_coordinator_phone}</p>
              </Col>
            </Row>
            {/* Director */}
            <Row>
              <Col xs={12} >
              <p className={`mb-1`} ><span className={`${styles.Bold}`}>Director:</span></p>
              </Col>
              <Col xs={12} >
              <p className={`${styles.WhiteAqua} ml-2 mb-1`}>{director_name} - {director_phone} </p>
              </Col>
            </Row>
            {/* 1st AD */}
            <Row>
              <Col xs={12} >
              <p className={`mb-1`} ><span className={`${styles.Bold}`}>1st AD:</span></p>
              </Col>
              <Col xs={12} >
              <p className={`${styles.WhiteAqua} ml-2 mb-1`}>{ad_1_name} - {ad_1_phone} </p>
              </Col>
            </Row>
            </Col>
            <Col  md={4} className='text-center'  >
              {/* logo */}
            <div className={`mt-0`}>
            {company_logo && <> 
                <div className='px-0'>
                    <Image className={styles.Logo} src={company_logo} alt="logo image" height="200"  />
                    </div>
                    </>
                    }
            </div>
            {/* call */}
            <h2 className='mt-3 mb-0 pb-0'>Your Call</h2>
            <div>
            <span className={`px-5 ${styles.YourCallMed }`}>{yourcalltime} </span>
            </div>
            <h4 className='mt-0 mb-0 pb-0'>Unit Call</h4>
            <div>
            <span className={`px-5 ${styles.UnitCallMed }`}>{unit_call} </span>
            </div>
            <div className='mt-2 mb-0 pb-0'>
            <span className={`px-3 ${styles.UnitCallMedDate }`}>{date} </span>
            </div>
            <div className='mt-2'>
            <span className={` px-3 ${styles.UnitCallMedDay }`}>Day {day} of {total_shoot_days} </span>
            </div>
            {/* logo */}
            {/* <div className={`mt-0`}>
            {company_logo && <> 
                <div className='px-3'>
                    <Image className={styles.Logo} src={company_logo} alt="logo image" height="200"  />
                    </div>
                    </>
                    }
            </div> */}
            </Col>
            <Col className='pl-5' md={4}>
            <Row>
              <Col xs={6} >
              <p className={`mb-1`} ><span className={`${styles.Bold}`}>Weather:</span > </p>
              <p className={`mb-1`} ><span className={`${styles.Bold}`}>Sunrise:</span></p>
              <p className={`mb-1`} ><span className={`${styles.Bold}`}>Sunset:</span></p>
              </Col>
              <Col xs={6} >
              <p className={`${styles.WhiteAqua} mb-1`} >{weather_location}  </p>
              <p className={`${styles.WhiteAqua} mb-1`} >{weather_location}</p>
              <p className={`${styles.WhiteAqua} mb-1`}>{weather_location}</p>
              </Col>
            </Row>
            <Row>
                <Col xs={6} >
                <p className={`mb-1`} ><span className={`${styles.Bold}`}>Talent Call:</span > </p>
                <p className={`mb-1`} ><span className={`${styles.Bold}`}>First Shot:</span></p>
                <p className={`mb-1`} ><span className={`${styles.Bold}`}>Breakfast:</span></p>
                <p className={`mb-1`} ><span className={`${styles.Bold}`}>Lunch:</span></p>
                <p className={`mb-1`} ><span className={`${styles.Bold}`}>Est. Wrap:</span></p>
                </Col>
                <Col xs={6} >
                <p className={`${styles.WhiteAqua} mb-1`} >{talent_call}  </p>
                <p className={`${styles.WhiteAqua} mb-1`} >{shoot_call}</p>
                <p className={`${styles.WhiteAqua} mb-1`}>{breakfast}</p>
                <p className={`${styles.WhiteAqua} mb-1`} >{lunch}</p>
                <p className={`${styles.WhiteAqua} mb-1`}>{wrap}</p>
                </Col>
              </Row>
              <p className={`mb-0 mt-3 `} ><span className={`${styles.Bold}`}>Nearest Hospital:</span></p>
            <Row>
            <Col xs={12} >
            <p className={`mb-1 ml-3 ${styles.WhiteAqua}`}>{nearest_hospital} </p>
            <p className={`mb-1 ml-3 ${styles.WhiteAqua}`}>{hospital_address_line_1} </p>
            <p className={`mb-1 ml-3 ${styles.WhiteAqua}`}>{hospital_address_line_2} </p>
            <p className={`mb-1 ml-3 ${styles.WhiteAqua}`}>{hospital_address_line_3} </p>
            <p className={`mb-1 ml-3 ${styles.WhiteAqua}`}>{hospital_address_line_4} </p>
            </Col>
            </Row>
            <p className={`mb-0 pt-3`} ><span className={`${styles.Bold}`}>First Location:</span></p>
            <Row>
            <Col xs={12} >
            <h5 className={`mb-1 ml-3 ${styles.WhiteAqua}`}>{location_1_name} </h5>
            </Col>
            </Row>
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
        <WalkiesPage callsheet={callsheet} />
        </div>
        {/* MOBILE  */}
        <div className='d-block d-md-none mb-5'>
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
        {/* header */}
        <Row >
          {/* weather/calls */}
        <Col className={` px-0 text-center`} xs={3}>
            {/* Weather */}
          <div className={`${styles.WhiteAqua}`}>
            <p className={`mb-0`} ><span className={`${styles.Bold}`}>Weather:</span > </p>
            <p className='pl-2'>{weather_location} </p> 
            <p className={`mb-0`} ><span className={`${styles.Bold}`}>Sunrise:</span></p>
            <p className='pl-2'>{weather_location} </p> 
            <p className={`mb-0`} ><span className={`${styles.Bold}`}>Sunset:</span></p>
            <p className='pl-2'>{weather_location} </p> 
          </div>
          {/* calls */}
          <div className={` mt-3 ${styles.WhiteAqua}`}>
              <p className={`mb-0`} ><span className={`${styles.Bold}`}>Talent Call:</span > </p>
              <p className='pl-2'>{talent_call}  </p>
              <p className={`mb-0`} ><span className={`${styles.Bold}`}>First Shot:</span></p>
              <p className='pl-2'>{shoot_call}</p>
              <p className={`mb-0`} ><span className={`${styles.Bold}`}>Est. Wrap:</span > </p>
              <p className='pl-2'>{wrap}</p>
          </div>
          </Col>
        <Col xs={6} className='px-0 mx-0 text-center'  >
            {/* call */}
            <h2 className='mt-1 mb-0 pb-0'>Your Call</h2>
            <div>
            <span className={`px-3 ${styles.YourCallMob }`}>{yourcalltime} </span>
            </div>
            <h4 className='mt-3 mb-0 pb-0'>Unit Call</h4>
            <div>
            <span className={`px-3 ${styles.UnitCallMob }`}>{unit_call} </span>
            </div>
            <div className='mt-1 mb-0 pb-0'>
            <span className={`px-3 ${styles.UnitCallMobDate }`}>{date} </span>
            </div>
            <div className='mt-2'>
            <span className={`px-3 ${styles.UnitCallMobDay }`}>Day {day} of {total_shoot_days} </span>
            </div>
            {/* logo */}
            <div className={`mt-2 mx-3 px-2 ${styles.CallLogoDivMob }`}>
            <h1>LOGO</h1>
            </div>
          </Col>
        <Col xs={3} className={`px-0 text-center`}>
           {/* Hospital */}
        <div className={`${styles.WhiteAqua}`}>
        <p className={`mb-0`} ><span className={`${styles.Bold}`}>Nearest</span></p>
        <p className={`mb-0`} ><span className={`${styles.Bold}`}>Hospital:</span></p>
        <p className={`mb-0`}>{nearest_hospital} </p>
        <p className={`mb-0`}>{hospital_address_line_1} </p>
        <p className={`mb-0`}>{hospital_address_line_2} </p>
        <p className={`mb-0`}>{hospital_address_line_3} </p>
        <p className={`mb-0`}>{hospital_address_line_4} </p>
        </div >
          {/* meals */}
        <div className={` mt-3 ${styles.WhiteAqua}`}>
            <p className={`mb-0`} ><span className={`${styles.Bold}`}>Breakfast:</span></p>
            <p className='pl-2'>{breakfast}</p>
            <p className={`mb-0`} ><span className={`${styles.Bold}`}>Lunch:</span > </p>
            <p className='pl-2'>{lunch}  </p>
        </div>
        </Col>
        </Row>
        </div>
        <p className={`mt-4 pl-3 mb-0 pt-1 ${styles.SubTitle }`}></p>
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
            <Col xs={4} className='mx-0 text-center py-0' md={2}>
              <p
                  className={`py-0 mb-0 ${styles.Button}`}
                  onClick={() => setShowBg(showBg => !showBg)} > Background
              </p>
            </Col>
            <Col xs={4} className='text-center' md={2}>
              <p
                  className={`py-0 mb-0 ${styles.Button}`}
                  onClick={() => setShowNotes(showNotes => !showNotes)} >Notes
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
        <p className={`mt-1 pl-3 mb-0 py-1 ${styles.SubTitle }`}></p>
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
                <NotesPage 
                  important_info={important_info} 
                  transport_info={transport_info} 
                  department_info={department_info}
                 setShow={setShowNotes} /> 
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
                <AdvancedSchedPage callsheet={callsheet} setShow={setShowAdvanSched} /> 
                ) 
        }
        </div>
    </div>
  )
}

export default CallSheet