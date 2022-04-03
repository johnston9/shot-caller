import React, {useState} from 'react';
import { useRedirect } from '../../hooks/Redirect';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import styles from "../../styles/Callsheets.module.css";
import { useCrewInfoContext } from '../../contexts/BaseCallContext';
import CharScheduleScene from './CharScheduleScene';
import CallCast from './CallCast';
import { axiosReq } from '../../api/axiosDefaults';
import { useHistory } from "react-router";
import { PostDropdown } from '../../components/PostDropdown';
import Background from './Background';

const CallSheet = (props ) => {
    useRedirect("loggedOut");
    const crewInfo = useCrewInfoContext();
    const crewInfoOne = crewInfo.results[0];
    const history = useHistory();
    console.log(props)

    // eslint-disable-next-line
    const { production_name, production_company, company_phone, company_email,
        company_address_line_1, company_address_line_2, company_address_line_3,
        company_address_line_4, company_logo, total_shoot_days,
        producer_name, producer_email, producer_phone,
        pro_coordinator_name, pro_coordinator_email, pro_coordinator_phone,
        upm_name, upm_email, upm_phone,
        travel_coordinator_name, travel_coordinator_email, travel_coordinator_phone,
        production_pa_name, production_pa_email, production_pa_phone,
        oth_production_pos_1_job, oth_production_pos_1_name, oth_production_pos_1_email, oth_production_pos_1_phone,
        oth_production_pos_2_job, oth_production_pos_2_name, oth_production_pos_2_email, oth_production_pos_2_phone,
        oth_production_pos_3_job, oth_production_pos_3_name, oth_production_pos_3_email, oth_production_pos_3_phone,
        oth_production_pos_4_job, oth_production_pos_4_name, oth_production_pos_4_email, oth_production_pos_4_phone,
        oth_production_pos_5_job, oth_production_pos_5_name, oth_production_pos_5_email, oth_production_pos_5_phone,
        ad_1_name, ad_1_email, ad_1_phone,
        ad_2_name, ad_2_email, ad_2_phone,
        ad_3_name, ad_3_email, ad_3_phone,
        ad_4_name, ad_4_email, ad_4_phone,
        ad_5_name, ad_5_email, ad_5_phone,
        pro_assistant_1_name, pro_assistant_1_email, pro_assistant_1_phone,
        pro_assistant_2_name, pro_assistant_2_email, pro_assistant_2_phone,
        pro_assistant_3_name, pro_assistant_3_email, pro_assistant_3_phone,
        pro_assistant_4_name, pro_assistant_4_email, pro_assistant_4_phone,
        pro_assistant_5_name, pro_assistant_5_email, pro_assistant_5_phone,
        dop_name, dop_email, dop_phone,
        camera_operator_name, camera_operator_email, camera_operator_phone,
        camera_ass_1_name, camera_ass_1_email, camera_ass_1_phone,
        camera_ass_2_name, camera_ass_2_email, camera_ass_2_phone,
        dit_name, dit_email, dit_phone,
        steadicam_name, steadicam_email, steadicam_phone,
        camera_pa_name, camera_pa_email, camera_pa_phone,
        oth_camera_pos_1_job, oth_camera_pos_1_name, oth_camera_pos_1_email, oth_camera_pos_1_phone,
        oth_camera_pos_2_job, oth_camera_pos_2_name, oth_camera_pos_2_email, oth_camera_pos_2_phone,
        oth_camera_pos_3_job, oth_camera_pos_3_name, oth_camera_pos_3_email, oth_camera_pos_3_phone,
        sound_mixer_name, sound_mixer_email, sound_mixer_phone,
        boom_operator_name, boom_operator_email, boom_operator_phone,
        sound_assistant_1_name, sound_assistant_1_email, sound_assistant_1_phone,
        sound_assistant_2_name, sound_assistant_2_email, sound_assistant_2_phone,
        script_supervisor_name, script_supervisor_email, script_supervisor_phone,
        key_hairmakeup_name, key_hairmakeup_email, key_hairmakeup_phone,
        key_hairstylist_name, key_hairstylist_email, key_hairstylist_phone,
        sfx_makeup_name, sfx_makeup_email, sfx_makeup_phone,
        sfx_makeup_assistant_name, sfx_makeup_assistant_email, sfx_makeup_assistant_phone,
        makeup_artist_1_name, makeup_artist_1_email, makeup_artist_1_phone,
        makeup_artist_2_name, makeup_artist_2_email, makeup_artist_2_phone,
        makeup_artist_3_name, makeup_artist_3_email, makeup_artist_3_phone,
        makeup_artist_4_name, makeup_artist_4_email, makeup_artist_4_phone,
        makeup_artist_5_name, makeup_artist_5_email, makeup_artist_5_phone,
        costume_designer_name, costume_designer_email, costume_designer_phone,
        ass_costume_designer_name, ass_costume_designer_email, ass_costume_designer_phone,
        wardrobe_assistant_1_name, wardrobe_assistant_1_email, wardrobe_assistant_1_phone,
        wardrobe_assistant_2_name, wardrobe_assistant_2_email, wardrobe_assistant_2_phone,
        wardrobe_assistant_3_name, wardrobe_assistant_3_email, wardrobe_assistant_3_phone,
        wardrobe_assistant_4_name, wardrobe_assistant_4_email, wardrobe_assistant_4_phone,
        wardrobe_assistant_5_name, wardrobe_assistant_5_email, wardrobe_assistant_5_phone,
        production_designer_name, production_designer_email, production_designer_phone,
        art_director_name, art_director_email, art_director_phone,
        art_assistant_name, art_assistant_email, art_assistant_phone,
        set_decorator_name, set_decorator_email, set_decorator_phone,
        set_dresser_name, set_dresser_email, set_dresser_phone,
        lead_man_name, lead_man_email, lead_man_phone,
        dresser_name, dresser_email, dresser_phone,
        prop_master_name, prop_master_email, prop_master_phone,
        ass_prop_master_name, ass_prop_master_email, ass_prop_master_phone,
        prop_buyer_name, prop_buyer_email, prop_buyer_phone,
        armorer_name, armorer_email, armorer_phone,
        gaffer_name, gaffer_email, gaffer_phone,
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
        swing_ge5_name, swing_ge5_email, swing_ge5_phone,
        stunt_coordinator_name, stunt_coordinator_email, stunt_coordinator_phone,
        stunts_1_name, stunts_1_email, stunts_1_phone,
        stunts_2_name, stunts_2_email, stunts_2_phone,
        stunts_3_name, stunts_3_email, stunts_3_phone,
        stunts_4_name, stunts_4_email, stunts_4_phone,
        stunts_5_name, stunts_5_email, stunts_5_phone,
        legal_name, legal_email, legal_phone,
        editor_name, editor_email, editor_phone,
        set_medic_name, set_medic_email, set_medic_phone,
        casting_director_name, casting_director_email, casting_director_phone,
        extras_casting_name, extras_casting_email, extras_casting_phone,
        writer_name, writer_email, writer_phone,
        fx_name, fx_email, fx_phone,
        location_mngr_name, location_mngr_email, location_mngr_phone,
        location_ass_1_name, location_ass_1_email, location_ass_1_phone,
        location_ass_2_name, location_ass_2_email, location_ass_2_phone,
        location_ass_3_name, location_ass_3_email, location_ass_3_phone,
        location_ass_4_name, location_ass_4_email, location_ass_4_phone,
        location_security_name, location_security_email, location_security_phone,
        transport_captain_name, transport_captain_email, transport_captain_phone,
        transport_manager_1_name, transport_manager_1_email, transport_manager_1_phone, 
        transport_manager_2_name, transport_manager_2_email, transport_manager_2_phone, 
        head_driver_name, head_driver_email, head_driver_phone,
        car1_name, car1_email, car1_phone,
        car2_name, car2_email, car2_phone,
        car3_name, car3_email, car3_phone,
        truck1_name, truck1_email, truck1_phone,
        truck2_name, truck2_email, truck2_phone,
        truck3_name, truck3_email, truck3_phone,
        catering_co_1_name, catering_co_1_email, catering_co_1_phone,
        catering_co_2_name, catering_co_2_email, catering_co_2_phone,
        catering_co_3_name, catering_co_3_email, catering_co_3_phone,
        craft_service_name, craft_service_email, craft_service_phone,
        crafty_ass_name, crafty_ass_email, crafty_ass_phone,
        add_pos_1_job, add_pos_1_name, add_pos_1_email, add_pos_1_phone,
        add_pos_2_job, add_pos_2_name, add_pos_2_email, add_pos_2_phone,
        add_pos_3_job, add_pos_3_name, add_pos_3_email, add_pos_3_phone,
        add_pos_4_job, add_pos_4_name, add_pos_4_email, add_pos_4_phone,
        add_pos_5_job, add_pos_5_name, add_pos_5_email, add_pos_5_phone,
        add_pos_6_job, add_pos_6_name, add_pos_6_email, add_pos_6_phone,
        add_pos_7_job, add_pos_7_name, add_pos_7_email, add_pos_7_phone,
        add_pos_8_job, add_pos_8_name, add_pos_8_email, add_pos_8_phone,
        add_pos_9_job, add_pos_9_name, add_pos_9_email, add_pos_9_phone,
        add_pos_10_job, add_pos_10_name, add_pos_10_email, add_pos_10_phone,
        all_other_add_positions } = crewInfoOne || {};

    const { scenes,
        admin,
        cast,
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
        {/* top pink fff6f6*/}
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
            <p className={`mb-0`}>{company_address_line_1} </p>
            <p className={`mb-0`}>{company_address_line_1} </p>
            <p >{company_address_line_1} </p>
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
        </div>
        {/* mobile top */}
        <div className='d-block d-md-none'>
        <Row >
        <Col xs={12} className='text-center'  >
            <div>
            <h1>{production_name}</h1>
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
            <Col xs={6} >
            <div className='mt-3'>
            <h5>{production_company} </h5>
            <p className='mb-0'>{company_address_line_1} </p>
            <p className='mb-0'>{company_address_line_2} </p>
            <p className='mb-0'>{company_address_line_3} </p>
            <p className='mb-0'>{company_address_line_4} </p>
            <p className='mb-0'>{company_phone} </p>
            <p className='mb-0'>{company_email} </p>
            </div>
            <div className='mt-3'>
            <p className={`mb-0`} ><span className={`${styles.Bold}`}>Producer:</span ><span className='pl-4'>{producer_name}</span> </p>
            <p className={`mb-0`} ><span className={`${styles.Bold}`}>Pro Cord:</span><span className='pl-4'>{pro_coordinator_name}</span></p>
            <p className={`mb-0`} ><span className={`${styles.Bold}`}>Director:</span><span className='pl-4'>{producer_name}</span></p>
            <p className={`mb-0`} ><span className={`${styles.Bold}`}>1st AD:</span><span className='pl-4 ml-3'>{ad_1_name}</span></p>
            <p className={`mb-0`} ><span className={`${styles.Bold}`}>DoP:</span><span className='pl-5 ml-2'>{dop_name}</span> </p>
            </div>
            </Col>
            <Col xs={6}>
            <div className='mt-3'>
            <p className={`mb-0`} ><span className={`${styles.Bold}`}>Weather:</span ><span className='pl-4'>{weather_location} </span> </p>
            <p className={`mb-0`} ><span className={`${styles.Bold}`}>Sunrise:</span><span className='pl-2'>{weather_location}</span></p>
            <p className={`mb-0`} ><span className={`${styles.Bold}`}>Sunset:</span><span className='pl-5'>{weather_location}</span></p>
            </div>
            <div>
            <p className={`mb-0`} ><span className={`${styles.Bold}`}>Nearest Hospital:</span><span className='pl-5'>{ad_1_name}</span></p>
            <p>{nearest_hospital} </p>
            </div>
            <div>
            </div>
            <div>
            <p className={`mb-0`} ><span className={`${styles.Bold}`}>Talent Call:</span ><span className='pl-4'>{talent_call} </span> </p>
            <p className={`mb-0`} ><span className={`${styles.Bold}`}>First Shot:</span><span className='pl-2'>{shoot_call}</span></p>
            <p className={`mb-0`} ><span className={`${styles.Bold}`}>Breakfast:</span><span className='pl-5'>{breakfast}</span></p>
            <p className={`mb-0`} ><span className={`${styles.Bold}`}>Lunch:</span ><span className='pl-4'>{lunch} </span> </p>
            <p className={`mb-0`} ><span className={`${styles.Bold}`}>Est. Wrap:</span><span className='pl-2'>{wrap}</span></p>
            </div>
            </Col>
        </Row>
        </div>
        {/* Locations */}
        <div className='mt-5'>
        <span className={`mt-3 pl-3 py-0 text-center ${styles.SubTitleSpan }`} style={{ textTransform: 'uppercase' }}>Locations</span>
        <Row style={{ textTransform: 'uppercase' }} className={` text-center mx-0  ${styles.TitleBox}`} >
            <Col className={`mx-0 px-0 ${styles.TitleBox2}`} xs={1} >
            <p className='my-0 py-0'>#</p>
            </Col>
            <Col className={`${styles.Border} px-0 mx-0`} xs={5}>
            <p className='my-0 py-0'><span className='d-none d-sm-inline-block'>Name -</span> Address</p>
            </Col>
            <Col className={`${styles.Border} px-0 mx-0`} xs={6}>
            <p className='my-0 py-0'><span className='d-none d-sm-inline-block'>Crew Parking and </span> Notes</p>
            </Col>
        </Row>
        {basecamp_address ? (
            <Row className='px-3 '>
            <Col className={`mx-0 px-1 px-md-3 ${styles.Border}`} xs={1} >
            <p></p>
            </Col>
            <Col className={`mx-0 px-1 px-md-3  ${styles.Border}`} xs={5}>
            <p className={`mb-0 ${styles.Bold}`} >Basecamp</p>
            <p className={`mb-0 ${styles.Bold}`} >{basecamp_name}</p>
            <p className='mb-0'>{basecamp_address}</p>
            </Col>
            <Col className={`mx-0 px-1 px-md-3  ${styles.Border}`} xs={6}>
            <p className='mb-0'>{basecamp_parking_n_notes}</p>
            </Col>
            </Row>
        ) : (
            ""
        )}
        {location_1_address ? (
            <Row className=' px-3'>
            <Col className={`mx-0 px-0 px-md-3 ${styles.Border}`} xs={1} >
            <p className={`mb-0 text-center ${styles.Bold}`}>1</p>
            </Col>
            <Col className={`mx-0 px-1 px-md-3  ${styles.Border}`} xs={5}>
            <p className={`mb-0 ${styles.Bold}`} >{location_1_name}</p>
            <p className='mb-0'>{location_1_address}</p>
            </Col>
            <Col className={`mx-0 px-1 px-md-3 ${styles.Border}`} xs={6}>
            <p className={`mb-0 py-1`}>{location_1_parking_n_notes}</p>
            </Col>
            </Row>
        ) : (
            ""
        )}
        {location_2_address ? (
            <Row className='px-3'>
            <Col className={`mx-0 px-0 px-md-3  ${styles.Border}`} xs={1} >
            <p className={`mb-0 text-center ${styles.Bold}`}>2</p>
            </Col>
            <Col className={`mx-0 px-1 px-md-3  ${styles.Border}`} xs={5}>
            <p className={`mb-0 ${styles.Bold}`} >{location_2_name}</p>
            <p className='mb-0'>{location_2_address}</p>
            </Col>
            <Col className={`mx-0 px-1 px-md-3  ${styles.Border}`} xs={6}>
            <p className={`mb-0`}>{location_2_parking_n_notes}</p>
            </Col>
            </Row>
        ) : (
            ""
        )}
        {location_3_address ? (
            <Row className='px-3'>
            <Col className={`mx-0 px-0 px-md-3  ${styles.Border}`} xs={1} >
            <p className={`mb-0 text-center ${styles.Bold}`}>3</p>
            </Col>
            <Col className={`mx-0 px-1 px-md-3  ${styles.Border}`} xs={5}>
            <p className={`mb-0 ${styles.Bold}`} >{location_3_name}</p>
            <p className='mb-0'>{location_3_address}</p>
            </Col>
            <Col className={`mx-0 px-1 px-md-3  ${styles.Border}`} xs={6}>
            <p className={`mb-0`}>{location_3_parking_n_notes}</p>
            </Col>
            </Row>
        ) : (
            ""
        )}
        {location_4_address ? (
            <Row className='px-3'>
            <Col className={`mx-0 px-0 px-md-3  ${styles.Border}`} xs={1} >
            <p className={`mb-0 text-center ${styles.Bold}`}>4</p>
            </Col>
            <Col className={`mx-0 px-1 px-md-3  ${styles.Border}`} xs={5}>
            <p className={`mb-0 ${styles.Bold}`} >{location_4_name}</p>
            <p className='mb-0'>{location_4_address}</p>
            </Col>
            <Col className={`mx-0 px-1 px-md-3  ${styles.Border}`} xs={6}>
            <p className={`mb-0`}>{location_4_parking_n_notes}</p>
            </Col>
            </Row>
        ) : (
            ""
        )}
        {location_5_address ? (
            <Row className='px-3'>
            <Col className={`mx-0 px-0 px-md-3  ${styles.Border}`} xs={1} >
            <p className={`mb-0 text-center ${styles.Bold}`}>5</p>
            </Col>
            <Col className={`mx-0 px-1 px-md-3  ${styles.Border}`} xs={5}>
            <p className={`mb-0 ${styles.Bold}`} >{location_5_name}</p>
            <p className='mb-0'>{location_5_address}</p>
            </Col>
            <Col className={`mx-0 px-1 px-md-3  ${styles.Border}`} xs={6}>
            <p className={`mb-0`}>{location_5_parking_n_notes}</p>
            </Col>
            </Row>
        ) : (
            ""
        )}
        </div>
        {/* Important Notes */}
        <div className='mt-5'>
        <span className={`mt-3 pl-3 py-0 px-1 ${styles.SubTitleSpan }`} style={{ textTransform: 'uppercase' }}>Important Notes</span>
        <p style={{ textTransform: 'uppercase'}} className={`mb-0 pl-3 pt-1 ${styles.SubTitle }`}></p>
        <Row className='px-3'>
            <Col className={`px-1 ${styles.Border }`}>
            <p className={`px-1`}>{important_info} </p>
            </Col>
        </Row>
        </div>
        {/* Schedule  */}
        <div className='mt-5'>
        <h4 className={`mt-3 pl-3 mb-1 py-0 px-1 ${styles.SubTitleSpan }`} style={{ textTransform: 'uppercase' }}>
            Schedule <span className={`mt-3 pl-3 py-0 px-1 ${styles.HSpan }`} >xx Pages</span></h4>
        {/* titles */}
        <div className='d-none d-md-block'>
            <Row style={{ textTransform: 'uppercase' }} className={`text-center mx-0  ${styles.TitleBox}`} >
                <Col className={`mx-0 px-0 ${styles.TitleBox2}`} xs={1} md={1}>
                    <p className='mb-0'>Time</p>
                </Col>
                <Col className={`mx-0 px-0 ${styles.TitleBox2}`} xs={1} md={1}>
                    <p className='mb-0 pl-2'>Scene</p>
                </Col>
                <Col className={`mx-0 px-0 ${styles.TitleBox2}`} xs={4} md={4}>
                    <p className='mb-0'>Details</p>
                </Col>
                <Col className={`mx-0 px-0 ${styles.TitleBox2}`} xs={1} md={1}>
                    <p className='mb-0'>D/N</p>
                </Col>
                <Col className={`mx-0 px-0 ${styles.TitleBox2}`} xs={2} md={2}>
                <p className='mb-0'>Filming Loc</p>                        
                </Col>
                <Col className={`mx-0 px-0 ${styles.TitleBox2}`} xs={2} md={2}>
                    <p className='mb-0'>Cast</p>
                </Col>
                <Col className={`mx-0 px-0 ${styles.TitleBox2}`} xs={1} md={1}>
                    <p className='mb-0'>Pages</p>
                </Col>
            </Row>
        </div>
        <div className='d-block d-md-none'>
            <Row className='text-center mx-0 px-0' >
                <Col className={`mx-0 px-0  ${styles.TitleBox2}`} xs={2}>
                <p style={{ textTransform: 'uppercase' }} className={`mb-0  ${styles.TitleBox}`}>Time</p>
                </Col>
                <Col className={`mx-0 px-0 ${styles.TitleBox2}`} xs={2}>
                <p style={{ textTransform: 'uppercase' }} className={`mb-0  ${styles.TitleBox}`}>Scene</p>
                </Col>
                <Col className={` mx-0 px-0 ${styles.TitleBox2}`} xs={6}>
                <p style={{ textTransform: 'uppercase' }} className={`mb-0 text-center ${styles.TitleBox}`}>Details</p>
                </Col>
                <Col className={`mx-0 px-0 `} xs={2} md={1}>
                <p style={{ textTransform: 'uppercase' }} className={`mb-0 text-center ${styles.TitleBox}`}>Info</p>
                </Col>
            </Row>
        </div>
        {/* xxx */}
        <Row>
            <Col >                   
            {scenes.results.length ? (
                scenes.results.map((scene, index) => (
                    <CharScheduleScene
                    style={{ backgroundColor: (index % 3 === 0) 
                        ? '#dbfaf9' : (index % 2 === 0) ? 
                        'rgb(223 254 240)' : 'rgb(248 241 249)' }}
                        {...scene} 
                        scene={scene}
                        key={scene.id} />
                ))) : ("")}
            </Col>
        </Row>
        </div>
        {/* Talent  */}
        <div className='mt-5'>
        <span className={`mt-3 pl-3 py-0 px-1 ${styles.SubTitleSpan }`} style={{ textTransform: 'uppercase' }}>Talent</span>
        {/* titles */}
        <div className='d-none d-md-block'>
            <Row style={{ textTransform: 'uppercase' }} className={`text-center mx-0  ${styles.TitleBox}`} >
                <Col className={`mx-0 px-0 ${styles.TitleBox2}`} xs={1} md={1}>
                    <p className='mb-0'>#</p>
                </Col>
                <Col className={`mx-0 px-0 ${styles.TitleBox2}`} xs={2} md={2}>
                    <p className='mb-0 pl-2'>Role</p>
                </Col>
                <Col className={`mx-0 px-0 ${styles.TitleBox2}`} xs={2} md={2}>
                    <p className='mb-0'>Artist</p>
                </Col>
                <Col className={`mx-0 px-0 ${styles.TitleBox2}`} xs={1} md={1}>
                <p className='mb-0'>SWF</p>                        
                </Col>
                <Col className={`mx-0 px-0 ${styles.TitleBox2}`} xs={1} md={1}>
                    <p className='mb-0'>PU</p>
                </Col>
                <Col className={`mx-0 px-0 ${styles.TitleBox2}`} xs={1} md={1}>
                    <p className='mb-0'>Call</p>
                </Col>
                <Col className={`mx-0 px-0 ${styles.TitleBox2}`} xs={1} md={1}>
                    <p className='mb-0'>H/M/W</p>
                </Col>
                <Col className={`mx-0 px-0 ${styles.TitleBox2}`} xs={1} md={1}>
                    <p className='mb-0'>Set</p>
                </Col>
                {admin ? (
                    <>
                    <Col className={`mx-0 px-0 ${styles.TitleBox2}`} xs={1} md={1}>
                    <p className='mb-0'>Info</p>
                    </Col>
                    <Col className={`mx-0 px-0 ${styles.TitleBox2}`} xs={1} md={1}>
                        <p className='mb-0'>Edit</p>
                    </Col>
                    </>
                ): (
                    <Col className={`text-center mx-0 px-0 ${styles.TitleBox2}`} xs={2} md={2}>
                    <p className='mb-0'>Info</p>
                    </Col>
                )}
            </Row>
        </div>
        <div className='d-block d-md-none'>
            <Row className='text-center mx-0 px-0' >
                <Col className={`mx-0 px-0  ${styles.TitleBox2}`} xs={2}>
                <p style={{ textTransform: 'uppercase' }} className={`mb-0  ${styles.TitleBox}`}>#</p>
                </Col>
                <Col className={`mx-0 px-0 ${styles.TitleBox2}`} xs={3}>
                <p style={{ textTransform: 'uppercase' }} className={`mb-0  ${styles.TitleBox}`}>Role</p>
                </Col>
                <Col className={` mx-0 px-0 ${styles.TitleBox2}`} xs={3}>
                <p style={{ textTransform: 'uppercase' }} className={`mb-0 text-center ${styles.TitleBox}`}>Artist</p>
                </Col>
                <Col className={`mx-0 px-0 `} xs={2} md={2}>
                <p style={{ textTransform: 'uppercase' }} className={`mb-0 text-center ${styles.TitleBox}`}>Call</p>
                </Col>
                <Col className={`mx-0 px-0 `} xs={2} md={2}>
                <p style={{ textTransform: 'uppercase' }} className={`mb-0 text-center ${styles.TitleBox}`}>Info</p>
                </Col>
            </Row>
        </div>
        <Row>
            <Col>
            {cast.results.length ? (
                cast.results.map((cast_member, index) => (
                    <CallCast
                    style={{ backgroundColor: (index % 3 === 0) 
                        ? '#f6fffe' : (index % 2 === 0) ? 
                        'rgb(246 254 245)' : 'rgb(254 249 254)' }}
                        {...cast_member}
                        admin={admin}
                        cast_member={cast_member} 
                        key={cast_member.id} />
                ))) : ("")}
            </Col>
        </Row>
        </div>
        {/* BG AND STANDINS */}
        <div className='mt-5'>
        <span className={`mt-3 pl-3 py-0 px-1 ${styles.SubTitleSpan }`}style={{ textTransform: 'uppercase' }}>BG / Stand-ins (total)</span>
            {/* medium */}
        <div className='d-none d-md-block'>
            {/* titles */}
        <Row >
        <Col md={6}>
        <Row style={{ textTransform: 'uppercase' }} className={`text-center mx-0  ${styles.TitleBox}`} >
            <Col className={`mx-0 px-0 ${styles.TitleBox2}`} xs={2} md={2}>
                <p className='mb-0'>Qty</p>
            </Col>
            <Col className={`mx-0 px-0 ${styles.TitleBox2}`} xs={2} md={2}>
                <p className='mb-0'>Call</p>
            </Col>
            {admin ? (
                <>
                <Col className={`mx-0 px-0 ${styles.TitleBox2}`} xs={6} md={6}>
                <p className='mb-0'>Type</p>
                </Col>
                <Col className={`mx-0 px-0 ${styles.TitleBox2}`} xs={1} md={1}>
                    <p className='mb-0'>Info</p>
                </Col>
                <Col className={`mx-0 px-0 ${styles.TitleBox2}`} xs={1} md={1}>
                    <p className='mb-0'>Ed</p>
                </Col>
                </>
            ) : (
                <>
                <Col className={`mx-0 px-0 ${styles.TitleBox2}`} xs={6} md={6}>
                <p className='mb-0'>Type</p>
                </Col>
                <Col className={`mx-0 px-0 ${styles.TitleBox2}`} xs={2} md={2}>
                    <p className='mb-0'>Info</p>
                </Col>
                </>
            )}
        </Row>
        </Col>
        <Col md={6}>
        <Row style={{ textTransform: 'uppercase' }} className={`text-center mx-0  ${styles.TitleBox}`} >
            <Col className={`mx-0 px-0 ${styles.TitleBox2}`} xs={2} md={2}>
                <p className='mb-0'>Qty</p>
            </Col>
            <Col className={`mx-0 px-0 ${styles.TitleBox2}`} xs={2} md={2}>
                <p className='mb-0'>Call</p>
            </Col>
            {admin ? (
                <>
                <Col className={`mx-0 px-0 ${styles.TitleBox2}`} xs={6} md={6}>
                <p className='mb-0'>Type</p>
                </Col>
                <Col className={`mx-0 px-0 ${styles.TitleBox2}`} xs={1} md={1}>
                    <p className='mb-0'>Info</p>
                </Col>
                <Col className={`mx-0 px-0 ${styles.TitleBox2}`} xs={1} md={1}>
                    <p className='mb-0'>Ed</p>
                </Col>
                </>
            ) : (
                <>
                <Col className={`mx-0 px-0 ${styles.TitleBox2}`} xs={6} md={6}>
                <p className='mb-0'>Type</p>
                </Col>
                <Col className={`mx-0 px-0 ${styles.TitleBox2}`} xs={2} md={2}>
                    <p className='mb-0'>Info</p>
                </Col>
                </>
            )}
        </Row> 
        </Col>
        </Row>
             {/* items background */}
             <Row>
            {background.results.length ? (
                background.results.map((back, index) => (
                    <Col md={6} >
                    <Background
                    style={{ backgroundColor: (index % 3 === 0) 
                        ? '#f6fffe' : (index % 2 === 0) ? 
                        'rgb(246 254 245)' : 'rgb(254 249 254)' }}
                        {...back}
                        admin={admin}
                        back={back} 
                        key={back.id} />
                    </Col>
                ))) : ("")}
        </Row>
        </div>
            {/* mobile */}
        <div className='d-block d-md-none'>
        {/* titles */}
        <Row style={{ textTransform: 'uppercase' }} className={`text-center mx-0  ${styles.TitleBox}`} >
            <Col className={`mx-0 px-0 ${styles.TitleBox2}`} xs={2} md={2}>
                <p className='mb-0'>Qty</p>
            </Col>
            <Col className={`mx-0 px-0 ${styles.TitleBox2}`} xs={2} md={2}>
                <p className='mb-0'>Call</p>
            </Col>
            <Col className={`mx-0 px-0 ${styles.TitleBox2}`} xs={6} md={6}>
            <p className='mb-0'>Type</p>
            </Col>
            <Col className={`mx-0 px-0 ${styles.TitleBox2}`} xs={1} md={1}>
                <p className='mb-0'>Info</p>
            </Col>
        </Row>
        {/* items */}
        {/* items background */}
        <Row>
            {background.results.length ? (
                background.results.map((back, index) => (
                    <Col md={12} >
                    <Background
                    style={{ backgroundColor: (index % 3 === 0) 
                        ? '#f6fffe' : (index % 2 === 0) ? 
                        'rgb(246 254 245)' : 'rgb(254 249 254)' }}
                        {...back}
                        admin={admin}
                        back={back} 
                        key={back.id} />
                    </Col>
                ))) : ("")}
        </Row>
        </div>
        </div>
        {/* TRANSPORT NOTES */}
        <div className='mt-5'>
        <span className={`mt-3 pl-3 py-0 px-1 ${styles.SubTitleSpan }`} style={{ textTransform: 'uppercase' }}>Transport Notes</span>
        <p style={{ textTransform: 'uppercase'}} className={`mb-0 pl-3 pt-1 ${styles.SubTitle }`}></p>
        <Row className='px-3'>
            <Col className={`px-1 ${styles.Border }`}>
            <p className={`px-1`}>{transport_info} </p>
            </Col>
        </Row>
        </div>
        {/* Department Notes */}
        <div className='mt-5'>
        <span className={`mt-3 pl-3 py-0 px-1 ${styles.SubTitleSpan }`} style={{ textTransform: 'uppercase' }}>Department Notes</span>
        <p style={{ textTransform: 'uppercase'}} className={`mb-0 pl-3 pt-1 ${styles.SubTitle }`}></p>
        <Row className='px-3'>
            <Col className={`px-1 ${styles.Border }`}>
            <p className={`px-1`}>{department_info} </p>
            </Col>
        </Row>
        </div>
        {/* Crew */}
        <div className='mt-5'>
        <span className={`mt-3 pl-3 py-0 px-1 ${styles.SubTitleSpan }`}style={{ textTransform: 'uppercase' }}>Crew (total)</span>
        <Row>
            <Col xs={12} md={6}>
                <Row>
                    <Col>
                    <h5>Postition</h5>
                    </Col>
                    <Col>
                    <h5>Name</h5>
                    </Col>
                    <Col>
                    <h5>Call</h5>
                    </Col>
                </Row>
                <Row>
                    <Col>
                    <h4>Department</h4>
                    </Col>
                </Row>
                <Row>
                    <Col>
                    <h5>Postition</h5>
                    </Col>
                    <Col>
                    <h5>Name</h5>
                    </Col>
                    <Col>
                    <h5>Call</h5>
                    </Col>
                </Row>
            </Col>
            <Col xs={12} md={6}>
                <Row>
                    <Col>
                    <h5>Postition</h5>
                    </Col>
                    <Col>
                    <h5>Name</h5>
                    </Col>
                    <Col>
                    <h5>Call</h5>
                    </Col>
                </Row>
                <Row>
                    <Col>
                    <h4>Department</h4>
                    </Col>
                </Row>
                <Row>
                    <Col>
                    <h5>Postition</h5>
                    </Col>
                    <Col>
                    <h5>Name</h5>
                    </Col>
                    <Col>
                    <h5>Call</h5>
                    </Col>
                </Row>
            </Col>
        </Row>
        </div>
        <div className='mt-5'>
        {/* advanced Schedule  */}
        <span className={`mt-3 pl-3 py-0 px-1 ${styles.SubTitleSpan }`} style={{ textTransform: 'uppercase' }}>Advanced Schedule - (xxx Pages)  Day x Date </span>
        <Row>
            <Col>
            <h5>Time</h5>
            </Col>
            <Col>
            <h5>Scene</h5>
            </Col>
            <Col>
            <h5>Description</h5>
            </Col>
            <Col>
            <h5>D/N</h5>
            </Col>
            <Col>
            <h5>Cast</h5>
            </Col>
            <Col>
            <h5>Location (Number)</h5>
            </Col>
            <Col>
            <h5>Pages</h5>
            </Col>
        </Row>
        </div>
        <div className='mt-3'>
        <p style={{ textTransform: 'uppercase'}} className={`mb-0 pl-3 pt-1 ${styles.SubTitle }`}></p>
        <Row>
            <Col>
            <h5>Walkie Channels: xxx</h5>
            </Col>
        </Row>
        </div>
    </div>
  )
}

export default CallSheet