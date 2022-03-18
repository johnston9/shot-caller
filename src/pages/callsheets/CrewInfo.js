import React, { useEffect, useState } from 'react';
import { axiosReq } from '../../api/axiosDefaults';
import { useRedirect } from '../../hooks/Redirect';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import styles from "../../styles/Callsheets.module.css";
import btnStyles from "../../styles/Button.module.css";
import appStyles from "../../App.module.css";
import TopBox from '../../components/TopBox';
import Asset from '../../components/Asset';
import { useParams, useHistory } from 'react-router-dom';
import { useCrewInfoContext, useCrewInfoIdContext } from "../../contexts/BaseCallContext";
import CreateOnce from './CreateOnce';

const CrewInfo = ({setShowCrewInfo}) => {
  useRedirect("loggedOut");
  const [errors, setErrors] = useState({});
  const { id } = useParams();
  const history = useHistory();
  const crewInfo = useCrewInfoContext();
  const crewInfoOne = crewInfo.results[0];
    console.log(crewInfoOne)
  const [showAdd, setShowAdd] = useState(false);
  const [showPro, setShowPro] = useState(false);
  // const { 
  //   producer_name, producer_email, producer_phone,
  //   pro_coordinator_name, pro_coordinator_email, pro_coordinator_phone,
  //   upm_name, upm_email, upm_phone,
  //   travel_coordinator_name, travel_coordinator_email, travel_coordinator_phone,
  //   production_pa_name, production_pa_email, production_pa_phone,
  //   locations_manager_name, locations_manager_email, locations_manager_phone,
  //   oth_production_pos_1_job, oth_production_pos_1_name, oth_production_pos_1_email, oth_production_pos_1_phone,
  //   oth_production_pos_2_job, oth_production_pos_2_name, oth_production_pos_2_email, oth_production_pos_2_phone,
  //   oth_production_pos_3_job, oth_production_pos_3_name, oth_production_pos_3_email, oth_production_pos_3_phone,
  //   oth_production_pos_4_job, oth_production_pos_4_name, oth_production_pos_4_email, oth_production_pos_4_phone,
  //   oth_production_pos_5_job, oth_production_pos_5_name, oth_production_pos_5_email, oth_production_pos_5_phone,
  //   ad_1_name, ad_1_email, ad_1_phone,
  //   ad_2_name, ad_2_email, ad_2_phone,
  //   ad_3_name, ad_3_email, ad_3_phone,
  //   ad_4_name, ad_4_email, ad_4_phone,
  //   ad_5_name, ad_5_email, ad_5_phone,
  //   pro_assistant_1_name, pro_assistant_1_email, pro_assistant_1_phone,
  //   pro_assistant_2_name, pro_assistant_2_email, pro_assistant_2_phone,
  //   pro_assistant_3_name, pro_assistant_3_email, pro_assistant_3_phone,
  //   pro_assistant_4_name, pro_assistant_4_email, pro_assistant_4_phone,
  //   pro_assistant_5_name, pro_assistant_5_email, pro_assistant_5_phone,
  //   dop_name, dop_email, dop_phone,
  //   camera_operator_name, camera_operator_email, camera_operator_phone,
  //   camera_ass_1_name, camera_ass_1_email, camera_ass_1_phone,
  //   camera_ass_2_name, camera_ass_2_email, camera_ass_2_phone,
  //   dit_name, dit_email, dit_phone,
  //   steadicam_name, steadicam_email, steadicam_phone,
  //   camera_pa_name, camera_pa_email, camera_pa_phone,
  //   oth_camera_pos_1_job, oth_camera_pos_1_name, oth_camera_pos_1_email, oth_camera_pos_1_phone,
  //   oth_camera_pos_2_job, oth_camera_pos_2_name, oth_camera_pos_2_email, oth_camera_pos_2_phone,
  //   oth_camera_pos_3_job, oth_camera_pos_3_name, oth_camera_pos_3_email, oth_camera_pos_3_phone,
  //   sound_mixer_name, sound_mixer_email, sound_mixer_phone,
  //   boom_operator_name, boom_operator_email, boom_operator_phone,
  //   sound_assistant_1_name, sound_assistant_1_email, sound_assistant_1_phone,
  //   sound_assistant_2_name, sound_assistant_2_email, sound_assistant_2_phone,
  //   script_supervisor_name, script_supervisor_email, script_supervisor_phone,
  //   key_hairmakeup_name, key_hairmakeup_email, key_hairmakeup_phone,
  //   key_hairstylist_name, key_hairstylist_email, key_hairstylist_phone,
  //   sfx_makeup_name, sfx_makeup_email, sfx_makeup_phone,
  //   sfx_makeup_assistant_name, sfx_makeup_assistant_email, sfx_makeup_assistant_phone,
  //   makeup_artist_1_name, makeup_artist_1_email, makeup_artist_1_phone,
  //   makeup_artist_2_name, makeup_artist_2_email, makeup_artist_2_phone,
  //   makeup_artist_3_name, makeup_artist_3_email, makeup_artist_3_phone,
  //   makeup_artist_4_name, makeup_artist_4_email, makeup_artist_4_phone,
  //   makeup_artist_5_name, makeup_artist_5_email, makeup_artist_5_phone,
  //   costume_designer_name, costume_designer_email, costume_designer_phone,
  //   ass_costume_designer_name, ass_costume_designer_email, ass_costume_designer_phone,
  //   wardrobe_assistant_1_name, wardrobe_assistant_1_email, wardrobe_assistant_1_phone,
  //   wardrobe_assistant_2_name, wardrobe_assistant_2_email, wardrobe_assistant_2_phone,
  //   wardrobe_assistant_3_name, wardrobe_assistant_3_email, wardrobe_assistant_3_phone,
  //   wardrobe_assistant_4_name, wardrobe_assistant_4_email, wardrobe_assistant_4_phone,
  //   wardrobe_assistant_5_name, wardrobe_assistant_5_email, wardrobe_assistant_5_phone,
  //   production_designer_name, production_designer_email, production_designer_phone,
  //   art_director_name, art_director_email, art_director_phone,
  //   art_assistant_name, art_assistant_email, art_assistant_phone,
  //   set_decorator_name, set_decorator_email, set_decorator_phone,
  //   set_dresser_name, set_dresser_email, set_dresser_phone,
  //   lead_man_name, lead_man_email, lead_man_phone,
  //   dresser_name, dresser_email, dresser_phone,
  //   prop_master_name, prop_master_email, prop_master_phone,
  //   ass_prop_master_name, ass_prop_master_email, ass_prop_master_phone,
  //   prop_buyer_name, prop_buyer_email, prop_buyer_phone,
  //   armorer_name, armorer_email, armorer_phone,
  //   gaffer_name, gaffer_email, gaffer_phone,
  //   best_boy_electric_name, best_boy_electric_email, best_boy_electric_phone,
  //   electric_3_name, electric_3_email, electric_3_phone,
  //   electric_4_name, electric_4_email, electric_4_phone,
  //   keygrip_name, keygrip_email, keygrip_phone,
  //   best_boy_grip_name, best_boy_grip_email, best_boy_grip_phone,
  //   dolly_grip_name, dolly_grip_email, dolly_grip_phone,
  //   swing_ge1_name, swing_ge1_email, swing_ge1_phone,
  //   swing_ge2_name, swing_ge2_email, swing_ge2_phone,
  //   swing_ge3_name, swing_ge3_email, swing_ge3_phone,
  //   swing_ge4_name, swing_ge4_email, swing_ge4_phone,
  //   swing_ge5_name, swing_ge5_email, swing_ge5_phone,
  //   stunt_coordinator_name, stunt_coordinator_email, stunt_coordinator_phone,
  //   stunts_1_name, stunts_1_email, stunts_1_phone,
  //   stunts_2_name, stunts_2_email, stunts_2_phone,
  //   stunts_3_name, stunts_3_email, stunts_3_phone,
  //   stunts_4_name, stunts_4_email, stunts_4_phone,
  //   stunts_5_name, stunts_5_email, stunts_5_phone,
  //   legal_name, legal_email, legal_phone,
  //   editor_name, editor_email, editor_phone,
  //   set_medic_name, set_medic_email, set_medic_phone,
  //   casting_director_name, casting_director_email, casting_director_phone,
  //   extras_casting_name, extras_casting_email, extras_casting_phone,
  //   writer_name, writer_email, writer_phone,
  //   fx_name, fx_email, fx_phone,
  //   location_mngr_name, location_mngr_email, location_mngr_phone,
  //   location_ass_1_name, location_ass_1_email, location_ass_1_phone,
  //   location_ass_2_name, location_ass_2_email, location_ass_2_phone,
  //   location_ass_3_name, location_ass_3_email, location_ass_3_phone,
  //   location_ass_4_name, location_ass_4_email, location_ass_4_phone,
  //   location_security_name, location_security_email, location_security_phone,
  //   transport_captain_name, transport_captain_email, transport_captain_phone,
  //   transport_manager_1_name, transport_manager_1_email, transport_manager_1_phone, 
  //   transport_manager_2_name, transport_manager_2_email, transport_manager_2_phone, 
  //   head_driver_name, head_driver_email, head_driver_phone,
  //   car1_name, car1_email, car1_phone,
  //   car2_name, car2_email, car2_phone,
  //   car3_name, car3_email, car3_phone,
  //   truck1_name, truck1_email, truck1_phone,
  //   truck2_name, truck2_email, truck2_phone,
  //   truck3_name, truck3_email, truck3_phone,
  //   catering_co_1_name, catering_co_1_email, catering_co_1_phone,
  //   catering_co_2_name, catering_co_2_email, catering_co_2_phone,
  //   catering_co_3_name, catering_co_3_email, catering_co_3_phone,
  //   craft_service_name, craft_service_email, craft_service_phone,
  //   crafty_ass_name, crafty_ass_email, crafty_ass_phone,
  //   add_pos_1_job, add_pos_1_name, add_pos_1_email, add_pos_1_phone,
  //   add_pos_2_job, add_pos_2_name, add_pos_2_email, add_pos_2_phone,
  //   add_pos_3_job, add_pos_3_name, add_pos_3_email, add_pos_3_phone,
  //   add_pos_4_job, add_pos_4_name, add_pos_4_email, add_pos_4_phone,
  //   add_pos_5_job, add_pos_5_name, add_pos_5_email, add_pos_5_phone,
  //   add_pos_6_job, add_pos_6_name, add_pos_6_email, add_pos_6_phone,
  //   add_pos_7_job, add_pos_7_name, add_pos_7_email, add_pos_7_phone,
  //   add_pos_8_job, add_pos_8_name, add_pos_8_email, add_pos_8_phone,
  //   add_pos_9_job, add_pos_9_name, add_pos_9_email, add_pos_9_phone,
  //   add_pos_10_job, add_pos_10_name, add_pos_10_email, add_pos_10_phone, 
  //   all_other_add_positions } = crewInfoOne;

  return (
    <div className='mt-3'>
      <Row >
          <Col className='text-right' >
          <Button onClick={() => setShowAdd(showAdd => !showAdd ) }
            className={`${btnStyles.Button} ${btnStyles.Once}`}>
            Create Info Page</Button>
          </Col>
      </Row>
      <Row>
          <Col className='text-center'>
          <Button onClick={() => history.push("crewinfo/edit/1")}
            className={`${btnStyles.Button} ${btnStyles.CrewEdit}`}>
            Edit Info</Button>
          </Col>
        </Row>
        {/* create once */}
        {showAdd ? (
          <CreateOnce />
        ) : ("") }
        {/* company */}
        {/* crew info pro_coordinator_name, pro_coordinator_email, pro_coordinator_phone, */}
       {/* <div className='mt-3'>
        {producer_name && 
          (<div className={`${styles.CrewInfoRow}`}>
          <Row className='text-center' >
            <Col xs={6} md={3} >
              <p className={`${styles.CrewInfoP} `}>Producer</p>
            </Col>
            <Col xs={6} md={3} >
              <p className={`${styles.CrewInfop} `}>{producer_name} </p>
            </Col>
            <Col xs={6} md={3} >
              <p className={`${styles.CrewInfop} `}>{producer_email}</p>
            </Col>
            <Col xs={6} md={3} >
            <p className={`${styles.CrewInfop} `}>{producer_phone}</p>
            </Col>
          </Row>
          </div> )
         }
         </div> */}
    </div>
  )
}

export default CrewInfo