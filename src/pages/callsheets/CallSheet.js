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
import HospitalPage from './HospitalPage';

const CallSheet = (props ) => {
    useRedirect("loggedOut");
    const crewInfo = useCrewInfoContext();
    const crewInfoOne = crewInfo.results[0];
    const history = useHistory();
    const [yourcalltime, setYourcalltime] = useState("");
    const [showHos, setShowHos] = useState(false);
    const [showContacts, setShowContacts] = useState(false);
    const [showLoc, setShowLoc] = useState(false);
    const [showWalkies, setShowWalkies] = useState(false);
    const [showSched, setShowSched] = useState(false);
    const [showTalent, setShowTalent] = useState(false);
    const [showBg, setShowBg] = useState(false);
    const [showNotes, setShowNotes] = useState(false);
    const [showCrew, setShowCrew] = useState(false);
    const [showAdvanSched, setShowAdvanSched] = useState(false);

    const { production_name, production_company, company_phone, company_email,
        company_address_line_1, company_address_line_2, company_address_line_3,
        company_address_line_4, company_logo, total_shoot_days,
        director_name, director_phone,
        producer_name, producer_phone,
        pro_coordinator_name, pro_coordinator_phone,
        // eslint-disable-next-line
        upm_name, upm_phone,
        ad_1_name, ad_1_phone,
        // eslint-disable-next-line
        dop_name, dop_phone,
        // eslint-disable-next-line
        set_medic_name, set_medic_email, set_medic_phone, } = crewInfoOne || {};

    const { scenes,
          // eslint-disable-next-line
          admin,
          currentUser,
          cast,
          callsheet,
          background,
          // info
          id,
          day,
          date,
          day_id,
          unit_call,
          talent_call, 
          shoot_call, 
          breakfast, 
          lunch, 
          wrap, 
          location_1_name,
          location_2_name,
          location_3_name,
          location_4_name,
          location_5_name,
          nearest_hospital,
          hospital_address_line_1,
          hospital_address_line_2,
          hospital_address_line_3,
          hospital_address_line_4,
          weather_location,
          important_info,
          transport_info,
          department_info,
          // production
          director_calltime,
          producer_calltime,
          pro_coordinator_calltime,
          travel_coordinator_calltime,
          upm_calltime,
          production_pa_calltime,
          script_supervisor_calltime,
          legal_calltime,
          set_medic_calltime,
          oth_production_pos_1_calltime,
          oth_production_pos_2_calltime,
          oth_production_pos_3_calltime,
          oth_production_pos_4_calltime,
          oth_production_pos_5_calltime,
          // art
          art_director_calltime,
          art_assistant_calltime,
          set_decorator_calltime,
          set_dresser_calltime,
          lead_man_calltime,
          dresser_calltime,
          prop_master_calltime,
          ass_prop_master_calltime,
          prop_buyer_calltime,
          // cam
          dop_calltime,
          camera_operator_calltime,
          camera_ass_1_calltime,
          camera_ass_2_calltime,
          dit_calltime,
          steadicam_calltime,
          camera_pa_calltime,
          oth_camera_pos_1_calltime,
          oth_camera_pos_2_calltime,
          oth_camera_pos_3_calltime,
          // casting
          casting_director_calltime,
          extras_casting_calltime,
          ad_1_calltime,
          ad_2_calltime,
          ad_3_calltime,
          ad_4_calltime,
          ad_5_calltime,
          pro_assistant_1_calltime,
          pro_assistant_2_calltime,
          pro_assistant_3_calltime,
          pro_assistant_4_calltime,
          pro_assistant_5_calltime,
          // ele/Grip
          gaffer_calltime,
          best_boy_electric_calltime,
          electric_3_calltime,
          electric_4_calltime,
          keygrip_calltime,
          best_boy_grip_calltime,
          dolly_grip_calltime,
          swing_ge1_calltime,
          swing_ge2_calltime,
          swing_ge3_calltime,
          swing_ge4_calltime,
          swing_ge5_calltime,
          // locations
          location_mngr_calltime,
          location_security_calltime,
          location_ass_1_calltime,
          location_ass_2_calltime,
          location_ass_3_calltime,
          location_ass_4_calltime,
          // makeup
          key_hairmakeup_calltime,
          key_hairstylist_calltime,
          sfx_makeup_calltime,
          sfx_makeup_assistant_calltime,
          makeup_artist_1_calltime,
          makeup_artist_2_calltime,
          makeup_artist_3_calltime,
          makeup_artist_4_calltime,
          makeup_artist_5_calltime,
          // post/add-pos
          editor_calltime,
          fx_calltime,
          add_pos_1_calltime,
          add_pos_2_calltime,
          add_pos_3_calltime,
          add_pos_4_calltime,
          add_pos_5_calltime,
          add_pos_6_calltime,
          add_pos_7_calltime,
          add_pos_8_calltime,
          add_pos_9_calltime,
          add_pos_10_calltime,
          all_other_add_positions_calltimes,
          // script/cater
          writer_calltime,
          catering_co_1_calltime,
          catering_co_2_calltime,
          catering_co_3_calltime,
          craft_service_calltime,
          crafty_ass_calltime,
          // sound/transport
          sound_mixer_calltime,
          boom_operator_calltime,
          sound_assistant_1_calltime,
          sound_assistant_2_calltime,
          transport_captain_calltime,
          transport_manager_1_calltime,
          transport_manager_2_calltime,
          head_driver_calltime,
          car1_calltime,
          car2_calltime,
          car3_calltime,
          truck1_calltime,
          truck2_calltime,
          truck3_calltime,
          // stunts
          stunt_coordinator_calltime,
          stunts_1_calltime,
          stunts_2_calltime,
          stunts_3_calltime,
          stunts_4_calltime,
          stunts_5_calltime,
          // wardrobe
          costume_designer_calltime,
          ass_costume_designer_calltime,
          wardrobe_assistant_1_calltime,
          wardrobe_assistant_2_calltime,
          wardrobe_assistant_3_calltime,
          wardrobe_assistant_4_calltime,
          wardrobe_assistant_5_calltime,
      } = props;
    
    const advancedDay = parseInt(day) + 1;
    console.log(advancedDay);

      useEffect(() => {
        const yourcall = ( currentUser) => {
          switch(currentUser) {
            // production 
            case "director": return director_calltime;
            case "producer": return producer_calltime;
            case "procoord": return pro_coordinator_calltime;
            case "davey": return gaffer_calltime;
            case "unitpm": return upm_calltime;
            case "travelco": return travel_coordinator_calltime;
            case "produpa": return production_pa_calltime;
            case "addpropos1": return oth_production_pos_1_calltime;
            case "addpropos2": return oth_production_pos_2_calltime;
            case "addpropos3": return oth_production_pos_3_calltime;
            case "addpropos4": return oth_production_pos_4_calltime;
            case "addpropos5": return oth_production_pos_5_calltime;
            case "scriptsup": return script_supervisor_calltime;
            case "setmedic": return set_medic_calltime;
            case "legalcon": return legal_calltime;
            // casting / assistant directors 
            case "castdirec": return casting_director_calltime;
            case "extracast": return extras_casting_calltime;
            case "assistdir1": return ad_1_calltime;
            case "assistdir2": return ad_2_calltime;
            case "assistdir3": return ad_3_calltime;
            case "assistdir4": return ad_4_calltime;
            case "assistdir5": return ad_5_calltime;
            case "proassist1": return pro_assistant_1_calltime;
            case "proassist2": return pro_assistant_2_calltime;
            case "proassist3": return pro_assistant_3_calltime;
            case "proassist4": return pro_assistant_4_calltime;
            case "proassist5": return pro_assistant_5_calltime;
            // camera
            case "dophoto": return dop_calltime;
            case "cameraop": return camera_operator_calltime;
            case "assistcam1": return camera_ass_1_calltime;
            case "assistcam2": return camera_ass_2_calltime;
            case "dimagetec": return dit_calltime;
            case "steadicamo": return steadicam_calltime;
            case "camerapa": return camera_pa_calltime;
            case "addcam1": return oth_camera_pos_1_calltime;
            case "addcam2": return oth_camera_pos_2_calltime;
            case "addcam3": return oth_camera_pos_3_calltime;
            // sound transport
            case "soundmix": return sound_mixer_calltime;
            case "boomoper": return boom_operator_calltime;
            case "soundist1": return sound_assistant_1_calltime;
            case "soundist2": return sound_assistant_2_calltime;
            case "transportca": return transport_captain_calltime;
            // art 
            case "prodesig": return art_director_calltime;
            case "artdirect": return art_director_calltime;
            case "artassist": return art_assistant_calltime;
            case "setdecor": return set_decorator_calltime;
            case "setdress": return set_dresser_calltime;
            case "leadman": return lead_man_calltime;
            case "dresser": return dresser_calltime;
            case "propmast": return prop_master_calltime;
            case "assistprop": return ass_prop_master_calltime;
            case "propbuy": return sound_assistant_1_calltime;
            case "armorer": return prop_buyer_calltime;
            default: return 'xx';
          }
        };
        setYourcalltime(yourcall(currentUser));
        // eslint-disable-next-line
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
            <Col className={`mb-1 pl-3 text-center `} md={{span: 10, offset: 1}}>
                <span className={` ${styles.MovieName}`} >{production_name} {day_id} </span>
            </Col>
            <Col className={`text-center `} md={1}>
                <PostDropdown
                    handleEdit={handleEdit}
                    handleDelete={handleDelete}
                />
            </Col>
        </Row>
        <Row className='px-3'>
            <Col md={4} >
            <Row className='mb-1'>
              <Col xs={{span: 8, offset: 0}}>
              <h5 className={`mb-1 pl-0 ${styles.WhiteAquaPro}`}>{production_company} </h5>
              <p className={`mb-1 pl-0 ${styles.WhiteAquaPro}`}>{company_address_line_1} </p>
              <p className={`mb-1 pl-0 ${styles.WhiteAquaPro}`}>{company_address_line_2} </p>
              <p className={`mb-1 pl-0 ${styles.WhiteAquaPro}`}>{company_address_line_3} </p>
              <p className={`mb-1 pl-0 ${styles.WhiteAquaPro}`}>{company_address_line_4} </p>
              <p className={`mb-1 pl-0 ${styles.WhiteAquaPro}`}>Phone {company_phone} </p>
              <p className={`mb-1 pl-0 ${styles.WhiteAquaPro}`}>Email {company_email} </p>
              </Col>
            </Row>
            {/* Producer */}
            <Row>
              <Col xs={12} >
              <p className={`mb-1`} ><span className={`${styles.Bold}`}>Producer:</span > </p>
              </Col>
              <Col xs={12} >
              <p className={`${styles.WhiteAqua} mb-1`} >{producer_name} - {producer_phone} </p>
              </Col>
            </Row>
            {/* pro-cor */}
            <Row>
              <Col xs={12} >
              <p className={`mb-1`} ><span className={`${styles.Bold}`}>Pro Cord:</span></p>
              </Col>
              <Col xs={12} >
              <p className={`${styles.WhiteAqua} mb-1`} >{pro_coordinator_name} - {pro_coordinator_phone}</p>
              </Col>
            </Row>
            {/* Director */}
            <Row>
              <Col xs={12} >
              <p className={`mb-1`} ><span className={`${styles.Bold}`}>Director:</span></p>
              </Col>
              <Col xs={12} >
              <p className={`${styles.WhiteAqua} mb-1`}>{director_name} - {director_phone} </p>
              </Col>
            </Row>
            {/* 1st AD */}
            <Row>
              <Col xs={12} >
              <p className={`mb-1`} ><span className={`${styles.Bold}`}>1st AD:</span></p>
              </Col>
              <Col xs={12} >
              <p className={`${styles.WhiteAqua} mb-1`}>{ad_1_name} - {ad_1_phone} </p>
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
            {/* call className={`mt-3 mb-0 pb-0 px-2 ${styles.YourCallMed }`} */}
            {/* <h2 className='mt-3 mb-0 pb-0'>Your Call</h2> */}
            <div className='mt-2 mb-0 pb-0'>
            <p className={`px-3 ${styles.UnitCallMedDate }`}>{date} </p>
            </div>
            <div className={`mt-3 mx-3 pb-0 px-2 ${styles.Border }`} >
            <h2 className={` mb-0 pb-0 `} >Your Call</h2>
            <p className={`px-1 mx-4 pb-0 ${styles.YourCallMed }`}>{yourcalltime} </p>
            </div>
            <div className={`mt-3 mx-3 pb-0 px-2 ${styles.Border }`}>
            <h4 className='mt-0 mb-0 pb-0'>Unit Call</h4>
            <p className={`mx-4 ${styles.UnitCallMed }`}>{unit_call} </p>
            </div>
            <div className={`mt-3 mx-3 pb-0 px-2 ${styles.Border }`}  >
            <p className={`mb-0 pt-1`} ><span className={`${styles.Bold}`}>First Location:</span></p>
            <Row>
            <Col xs={12} >
            <h5 className={`mb-1 ${styles.WhiteAqua}`}>{location_1_name} </h5>
            </Col>
            </Row>
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
            <p className={`mb-1 ${styles.WhiteAqua}`}>{nearest_hospital} </p>
            <p className={`mb-1 ${styles.WhiteAqua}`}>{hospital_address_line_1} </p>
            <p className={`mb-1 ${styles.WhiteAqua}`}>{hospital_address_line_2} </p>
            <p className={`mb-1 ${styles.WhiteAqua}`}>{hospital_address_line_3} </p>
            <p className={`mb-1 ${styles.WhiteAqua}`}>{hospital_address_line_4} </p>
            </Col>
            </Row>
            <div className='mt-2'>
            <span className={`${styles.UnitCallMedDay }`}>Day {day} of {total_shoot_days} </span>
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
        <AdvancedSchedPage callsheet={callsheet} advancedDay={advancedDay} />
        {/* Walkie Channels */}
        <WalkiesPage callsheet={callsheet} />
        </div>
        {/* MOBILE  */}
        <div className='d-block d-md-none mb-5'>
        <div>
        {/* name */}
        <Row>
            <Col className='text-center' xs={{span: 8, offset: 2}}>
            <p className={`mx-3 ${styles.MovieNameMo}`} >{production_name} </p>
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
        <Col className={`pl-0 pr-0`} xs={3}>
          {/* Weather */}
          <div >
            <p className={`mb-0`} ><span className={`${styles.Bold}`}>Weather:</span > </p>
            <p className={`${styles.WhiteAqua}`} >{weather_location} </p> 
            <p className={`mb-0`} ><span className={`${styles.Bold}`}>Sunrise:</span></p>
            <p className={`${styles.WhiteAqua}`}>{weather_location} </p> 
            <p className={`mb-0`} ><span className={`${styles.Bold}`}>Sunset:</span></p>
            <p className={`${styles.WhiteAqua}`}>{weather_location} </p> 
          </div>
          {/* meals */}
          <div className={` mt-3`}>
              <p className={`mb-0`} ><span className={`${styles.Bold}`}>Breakfast:</span></p>
              <p className={`${styles.WhiteAqua} mb-0`} >{breakfast}</p>
              <p className={` mb-0`} ><span className={`${styles.Bold}`}>Lunch:</span > </p>
              <p className={`${styles.WhiteAqua} mb-0`} >{lunch}  </p>
          </div>
          </Col>
        {/* logo calls */}
        <Col xs={6} className='px-0 mx-0 text-center' >
        <h5 className={`my-1 pl-0 ${styles.WhiteAquaPro}`}>{production_company} </h5>
            <div className={`mt-1`}>
            {company_logo && <> 
                <div className='px-0'>
                    <Image className={styles.LogoMo} src={company_logo} alt="logo image" height="200"  />
                    </div>
                    </>
                    }
            </div>
            <div className='mt-2 mb-0 pb-0'>
            <span className={`px-3 ${styles.UnitCallMobDate }`}>{date} </span>
            </div>
            <div className={`mt-1 mx-3 pb-0 px-2 ${styles.Border }`} >
            <h2 className='mb-0 pb-0'>Your Call</h2>
            <p className={`px-1 mx-2 ${styles.YourCallMob }`}>{yourcalltime} </p>
            </div>
            <div className={`mt-1 mx-3 pb-0 px-2 ${styles.Border }`} >
            <h5 className='mb-0 pb-0'>Unit Call</h5>
            <p className={`px-1 mx-2 ${styles.UnitCallMob }`}>{unit_call} </p>
            </div>
            {/* loc */}
            {/* <div className={`mt-1 mx-3 pb-0 px-2 ${styles.Border }`}  >
            <p className={`mb-0 pt-1`} ><span className={`text-center ${styles.Bold}`}>1st Location</span></p>
            <Row>
            <Col xs={12} >
            <p className={`mb-1 ${styles.WhiteAqua}`}>{location_1_name} </p>
            </Col>
            </Row>
            </div> */}
        </Col>
        {/* Hospital Meals */}
        <Col xs={3} className={`px-0`}>
        {/* <div >
        <p className={`mb-0`} ><span className={`${styles.Bold}`}>Nearest</span></p>
        <p className={`mb-0`} ><span className={`${styles.Bold}`}>Hospital:</span></p>
        <p className={`mb-1 ${styles.WhiteAqua}`}>{nearest_hospital} </p>
        </div > */}
        {/* calls */}
        <div className={` mt-0`}>
            <p className={`mb-0`} ><span className={`${styles.Bold}`}>Cast Call:</span > </p>
            <p className={`${styles.WhiteAqua}`}>{talent_call}  </p>
            <p className={`mb-0 mt-4`} ><span className={`${styles.Bold}`}>First Shot:</span></p>
            <p className={`${styles.WhiteAqua}`}>{shoot_call}</p>
            <p className={`mb-0 mt-4`} ><span className={`${styles.Bold}`}>Est. Wrap:</span > </p>
            <p className={`${styles.WhiteAqua}`}>{wrap}</p>
        </div>
        <div className='mt-4 pt-3'>
            <p className={`${styles.UnitCallMobDay }`}>Day {day} of {total_shoot_days} </p>
        </div>
        </Col>
        </Row>
        {/* loc */}
        <Row>
          <Col className='px-0' xs={6} >
          <div className={`mt-1 pb-0 px-2 mr-2 ${styles.Border }`}  >
            <p className={`mb-0 pt-1`} ><span className={`text-center ${styles.Bold}`}>1st Location</span></p>
            <p className={`mb-1 ${styles.WhiteAqua}`}>{location_1_name} </p>
          </div>
          </Col>
          <Col className='px-0' xs={6} >
          <div className={`mt-1 pb-0 px-2 ml-2 ${styles.Border }`} >
          <p className={`mb-0`} ><span className={`${styles.Bold}`}>Nearest Hospital:</span></p>
          <p className={`mb-1 ${styles.WhiteAqua}`}>{nearest_hospital} </p>
          </div >
          </Col>
        </Row>
        </div>
        <p className={`mt-2 pl-3 mb-0 pt-1 ${styles.SubTitle }`}></p>
        {/* buttons */}
        <Row>
        <Col xs={{span: 8, offset: 2}} className='text-center' md={2}>
            <p
                className={`py-0 mb-0 ${styles.Button}`}
                onClick={() => setShowHos(showHos => !showHos)} >Nearest Hospital
            </p>
        </Col>
        </Row>
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
        {!showHos ? (
                ""
              ) : (
                <HospitalPage callsheet={callsheet} crewInfoOne={crewInfoOne} setShow={setShowHos} /> 
                )
        }
        {!showContacts ? (
                ""
              ) : (
                <ContactsPage callsheet={callsheet} crewInfoOne={crewInfoOne} setShow={setShowContacts} /> 
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
                <AdvancedSchedPage 
                advancedDay={advancedDay} 
                callsheet={callsheet} 
                setShow={setShowAdvanSched} /> 
                ) 
        }
        </div>
    </div>
  )
}

export default CallSheet