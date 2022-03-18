import React, { useRef, useState } from "react";

import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Image from "react-bootstrap/Image";
import Alert from "react-bootstrap/Alert";
import Asset from "../../components/Asset";
import Upload from "../../assets/upload.png";
import appStyles from "../../App.module.css";
import styles from "../../styles/Callsheets.module.css";
import btnStyles from "../../styles/Button.module.css";
import { useHistory } from "react-router";
import { axiosReq } from "../../api/axiosDefaults";
import TopBox from "../../components/TopBox";
import { useRedirect } from "../../hooks/Redirect";

// other pro 5 - other cam 3 

const CrewInfoCreate = () => {
  useRedirect("loggedOut");
  const [errors, setErrors] = useState({});
  const history = useHistory();

  const [postData, setPostData] = useState({
    total_shoot_days: "",
    production_name: "",
    production_company: "",
    company_email: "",
    company_phone: "",
    company_address_line_1: "",
    company_address_line_2: "",
    company_address_line_3: "",
    company_address_line_4: "",
    company_logo: "",
    producer_name: "",
    producer_email: "",
    producer_phone: "",
    pro_coordinator_name: "",
    pro_coordinator_email: "",
    pro_coordinator_phone: "",
    upm_name: "",
    upm_email: "",
    upm_phone: "",
    travel_coordinator_name: "",
    travel_coordinator_email: "",
    travel_coordinator_phone: "",
    production_pa_name: "",
    production_pa_email: "",
    production_pa_phone: "",
    locations_manager_name: "",
    locations_manager_email: "",
    locations_manager_phone: "",
    oth_production_pos_1_job: "",
    oth_production_pos_1_name: "",
    oth_production_pos_1_email: "",
    oth_production_pos_1_phone: "",
    oth_production_pos_2_job: "",
    oth_production_pos_2_name: "",
    oth_production_pos_2_email: "",
    oth_production_pos_2_phone: "",
    oth_production_pos_3_job: "",
    oth_production_pos_3_name: "",
    oth_production_pos_3_email: "",
    oth_production_pos_3_phone: "",
    oth_production_pos_4_job: "",
    oth_production_pos_4_name: "",
    oth_production_pos_4_email: "",
    oth_production_pos_4_phone: "",
    oth_production_pos_5_job: "",
    oth_production_pos_5_name: "",
    oth_production_pos_5_email: "",
    oth_production_pos_5_phone: "",
    ad_1_name: "",
    ad_1_email: "",
    ad_1_phone: "",
    ad_2_name: "",
    ad_2_email: "",
    ad_2_phone: "",
    ad_3_name: "",
    ad_3_email: "",
    ad_3_phone: "",
    ad_4_name: "",
    ad_4_email: "",
    ad_4_phone: "",
    ad_5_name: "",
    ad_5_email: "",
    ad_5_phone: "",
    pro_assistant_1_name: "",
    pro_assistant_1_email: "",
    pro_assistant_1_phone: "",
    pro_assistant_2_name: "",
    pro_assistant_2_email: "",
    pro_assistant_2_phone: "",
    pro_assistant_3_name: "",
    pro_assistant_3_email: "",
    pro_assistant_3_phone: "",
    pro_assistant_4_name: "",
    pro_assistant_4_email: "",
    pro_assistant_4_phone: "",
    pro_assistant_5_name: "",
    pro_assistant_5_email: "",
    pro_assistant_5_phone: "",
    dop_name: "",
    dop_email: "",
    dop_phone: "",
    camera_operator_name: "",
    camera_operator_email: "",
    camera_operator_phone: "",
    camera_ass_1_name: "",
    camera_ass_1_email: "",
    camera_ass_1_phone: "",
    camera_ass_2_name: "",
    camera_ass_2_email: "",
    camera_ass_2_phone: "",
    dit_name: "",
    dit_email: "",
    dit_phone: "",
    steadicam_name: "",
    steadicam_email: "",
    steadicam_phone: "",
    camera_pa_name: "",
    camera_pa_email: "",
    camera_pa_phone: "",
    oth_camera_pos_1_job: "",
    oth_camera_pos_1_name: "",
    oth_camera_pos_1_email: "",
    oth_camera_pos_1_phone: "",
    oth_camera_pos_2_job: "",
    oth_camera_pos_2_name: "",
    oth_camera_pos_2_email: "",
    oth_camera_pos_2_phone: "",
    oth_camera_pos_3_job: "",
    oth_camera_pos_3_name: "",
    oth_camera_pos_3_email: "",
    oth_camera_pos_3_phone: "",
    sound_mixer_name: "",
    sound_mixer_email: "",
    sound_mixer_phone: "",
    boom_operator_name: "",
    boom_operator_email: "",
    boom_operator_phone: "",
    sound_assistant_1_name: "",
    sound_assistant_1_email: "",
    sound_assistant_1_phone: "",
    sound_assistant_2_name: "",
    sound_assistant_2_email: "",
    sound_assistant_2_phone: "",
    script_supervisor_name: "",
    script_supervisor_email: "",
    script_supervisor_phone: "",
    key_hairmakeup_name: "",
    key_hairmakeup_email: "",
    key_hairmakeup_phone: "",
    key_hairstylist_name: "",
    key_hairstylist_email: "",
    key_hairstylist_phone: "",
    sfx_makeup_name: "",
    sfx_makeup_email: "",
    sfx_makeup_phone: "",
    sfx_makeup_assistant_name: "",
    sfx_makeup_assistant_email: "",
    sfx_makeup_assistant_phone: "",
    makeup_artist_1_name: "",
    makeup_artist_1_email: "",
    makeup_artist_1_phone: "",
    makeup_artist_2_name: "",
    makeup_artist_2_email: "",
    makeup_artist_2_phone: "",
    makeup_artist_3_name: "",
    makeup_artist_3_email: "",
    makeup_artist_3_phone: "",
    makeup_artist_4_name: "",
    makeup_artist_4_email: "",
    makeup_artist_4_phone: "",
    makeup_artist_5_name: "",
    makeup_artist_5_email: "",
    makeup_artist_5_phone: "",
    costume_designer_name: "",
    costume_designer_email: "",
    costume_designer_phone: "",
    ass_costume_designer_name: "",
    ass_costume_designer_email: "",
    ass_costume_designer_phone: "",
    wardrobe_assistant_1_name: "",
    wardrobe_assistant_1_email: "",
    wardrobe_assistant_1_phone: "",
    wardrobe_assistant_2_name: "",
    wardrobe_assistant_2_email: "",
    wardrobe_assistant_2_phone: "",
    wardrobe_assistant_3_name: "",
    wardrobe_assistant_3_email: "",
    wardrobe_assistant_3_phone: "",
    wardrobe_assistant_4_name: "",
    wardrobe_assistant_4_email: "",
    wardrobe_assistant_4_phone: "",
    wardrobe_assistant_5_name: "",
    wardrobe_assistant_5_email: "",
    wardrobe_assistant_5_phone: "",
    production_designer_name: "",
    production_designer_email: "",
    production_designer_phone: "",
    art_director_name: "",
    art_director_email: "",
    art_director_phone: "",
    art_assistant_name: "",
    art_assistant_email: "",
    art_assistant_phone: "",
    set_decorator_name: "",
    set_decorator_email: "",
    set_decorator_phone: "",
    set_dresser_name: "",
    set_dresser_email: "",
    set_dresser_phone: "",
    lead_man_name: "",
    lead_man_email: "",
    lead_man_phone: "",
    dresser_name: "",
    dresser_email: "",
    dresser_phone: "",
    prop_master_name: "",
    prop_master_email: "",
    prop_master_phone: "",
    ass_prop_master_name: "",
    ass_prop_master_email: "",
    ass_prop_master_phone: "",
    prop_buyer_name: "",
    prop_buyer_email: "",
    prop_buyer_phone: "",
    armorer_name: "",
    armorer_email: "",
    armorer_phone: "",
    gaffer_name: "", 
    gaffer_email: "",
    gaffer_phone: "",
    best_boy_electric_name: "",
    best_boy_electric_email: "",
    best_boy_electric_phone: "",
    electric_3_name: "",
    electric_3_email: "",
    electric_3_phone: "",
    electric_4_name: "",
    electric_4_email: "",
    electric_4_phone: "",
    keygrip_name: "",
    keygrip_email: "",
    keygrip_phone: "",
    best_boy_grip_name: "",
    best_boy_grip_email: "",
    best_boy_grip_phone: "",
    dolly_grip_name: "",
    dolly_grip_email: "",
    dolly_grip_phone: "",
    swing_ge1_name: "",
    swing_ge1_email: "",
    swing_ge1_phone: "",
    swing_ge2_name: "",
    swing_ge2_email: "",
    swing_ge2_phone: "",
    swing_ge3_name: "",
    swing_ge3_email: "",
    swing_ge3_phone: "",
    swing_ge4_name: "",
    swing_ge4_email: "",
    swing_ge4_phone: "",
    swing_ge5_name: "",
    swing_ge5_email: "",
    swing_ge5_phone: "",
    stunt_coordinator_name: "",
    stunt_coordinator_email: "",
    stunt_coordinator_phone: "",
    stunts_1_name: "",
    stunts_1_email: "",
    stunts_1_phone: "",
    stunts_2_name: "",
    stunts_2_email: "",
    stunts_2_phone: "",
    stunts_3_name: "",
    stunts_3_email: "",
    stunts_3_phone: "",
    stunts_4_name: "",
    stunts_4_email: "",
    stunts_4_phone: "",
    stunts_5_name: "",
    stunts_5_email: "",
    stunts_5_phone: "",
    legal_name: "",
    legal_email: "",
    legal_phone: "",
    editor_name: "",
    editor_email: "",
    editor_phone: "",
    writer_name: "",
    writer_email: "",
    writer_phone: "",
    fx_name: "", 
    fx_email: "",
    fx_phone: "",
    set_medic_name: "",
    set_medic_email: "",
    set_medic_phone: "",
    casting_director_name: "",
    casting_director_email: "",
    casting_director_phone: "",
    extras_casting_name: "",
    extras_casting_email: "",
    extras_casting_phone: "",
    location_mngr_name: "",
    location_mngr_email: "",
    location_mngr_phone: "",
    location_ass_1_name: "",
    location_ass_1_email: "",
    location_ass_1_phone: "",
    location_ass_2_name: "",
    location_ass_2_email: "",
    location_ass_2_phone: "",
    location_ass_3_name: "",
    location_ass_3_email: "",
    location_ass_3_phone: "",
    location_ass_4_name: "",
    location_ass_4_email: "",
    location_ass_4_phone: "",
    location_security_name: "",
    location_security_email: "",
    location_security_phone: "",
    transport_captain_name: "",
    transport_captain_email: "",
    transport_captain_phone: "",
    transport_manager_1_name: "",
    transport_manager_1_email: "",
    transport_manager_1_phone: "",
    transport_manager_2_name: "",
    transport_manager_2_email: "",
    transport_manager_2_phone: "",
    head_driver_name: "",
    head_driver_email: "",
    head_driver_phone: "",
    car1_name: "",
    car1_email: "",
    car1_phone: "",
    car2_name: "",
    car2_email: "",
    car2_phone: "",
    car3_name: "",
    car3_email: "",
    car3_phone: "",
    truck1_name: "",
    truck1_email: "",
    truck1_phone: "",
    truck2_name: "",
    truck2_email: "",
    truck2_phone: "",
    truck3_name: "",
    truck3_email: "",
    truck3_phone: "",
    craft_service_name: "",
    craft_service_email: "",
    craft_service_phone: "",
    crafty_ass_name: "",
    crafty_ass_email: "",
    crafty_ass_phone: "",
    catering_co_1_name: "",
    catering_co_1_email: "",
    catering_co_1_phone: "",
    catering_co_2_name: "",
    catering_co_2_email: "",
    catering_co_2_phone: "",
    catering_co_3_name: "",
    catering_co_3_email: "",
    catering_co_3_phone: "",
    add_pos_1_job: "",
    add_pos_1_name: "",
    add_pos_1_email: "",
    add_pos_1_phone: "",
    add_pos_2_job: "",
    add_pos_2_name: "",
    add_pos_2_email: "",
    add_pos_2_phone: "",
    add_pos_3_job: "",
    add_pos_3_name: "",
    add_pos_3_email: "",
    add_pos_3_phone: "",
    add_pos_4_job: "",
    add_pos_4_name: "",
    add_pos_4_email: "",
    add_pos_4_phone: "",
    add_pos_5_job: "",
    add_pos_5_name: "",
    add_pos_5_email: "",
    add_pos_5_phone: "",
    add_pos_6_job: "",
    add_pos_6_name: "",
    add_pos_6_email: "",
    add_pos_6_phone: "",
    add_pos_7_job: "",
    add_pos_7_name: "",
    add_pos_7_email: "",
    add_pos_7_phone: "",
    add_pos_8_job: "",
    add_pos_8_name: "",
    add_pos_8_email: "",
    add_pos_8_phone: "",
    add_pos_9_job: "",
    add_pos_9_name: "",
    add_pos_9_email: "",
    add_pos_9_phone: "",
    add_pos_10_job: "",
    add_pos_10_name: "",
    add_pos_10_email: "",
    add_pos_10_phone: "",
    all_other_add_positions: "",
})

  const { 
          production_name, production_company, company_phone, company_email,
          company_address_line_1, company_address_line_2, company_address_line_3,
          company_address_line_4, company_logo, total_shoot_days,
          producer_name, producer_email, producer_phone,
          pro_coordinator_name, pro_coordinator_email, pro_coordinator_phone,
          upm_name, upm_email, upm_phone,
          travel_coordinator_name, travel_coordinator_email, travel_coordinator_phone,
          production_pa_name, production_pa_email, production_pa_phone,
          locations_manager_name, locations_manager_email, locations_manager_phone,
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
          all_other_add_positions } = postData;

  const imageInput1 = useRef(null);

  const handleChange = (event) => {
    setPostData({
      ...postData,
      [event.target.name]: event.target.value,
    });
  };

  const handleChangeLogo = (event) => {
    if (event.target.files.length) {
      URL.revokeObjectURL(company_logo);
      setPostData({
        ...postData,
        company_logo: URL.createObjectURL(event.target.files[0]),
      });
    }
    // console.log(event.target.files[0])
  };
    
  const handleSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData();
    formData.append("total_shoot_days", total_shoot_days);
    formData.append("production_name", production_name);
    formData.append("production_company", production_company);
    formData.append("company_phone", company_phone);
    formData.append("company_email", company_email);
    formData.append("company_address_line_1", company_address_line_1);
    formData.append("company_address_line_2", company_address_line_2);
    formData.append("company_address_line_3", company_address_line_3);
    formData.append("company_address_line_4", company_address_line_4);
    formData.append("company_logo", company_logo);
    formData.append("producer_name", producer_name);
    formData.append("producer_email", producer_email);
    formData.append("producer_phone", producer_phone);  
    formData.append("pro_coordinator_name", pro_coordinator_name);
    formData.append("pro_coordinator_email", pro_coordinator_email);
    formData.append("pro_coordinator_phone", pro_coordinator_phone);
    formData.append("upm_name", upm_name);
    formData.append("upm_email", upm_email);
    formData.append("upm_phone", upm_phone); 
    formData.append("travel_coordinator_name", travel_coordinator_name);
    formData.append("travel_coordinator_email", travel_coordinator_email);
    formData.append("travel_coordinator_phone", travel_coordinator_phone);
    formData.append("production_pa_name", production_pa_name);
    formData.append("production_pa_email", production_pa_email);
    formData.append("production_pa_phone", production_pa_phone);
    formData.append("locations_manager_name", locations_manager_name);
    formData.append("locations_manager_email", locations_manager_email);
    formData.append("locations_manager_phone", locations_manager_phone);
    formData.append("oth_production_pos_1_job", oth_production_pos_1_job);
    formData.append("oth_production_pos_1_name", oth_production_pos_1_name);
    formData.append("oth_production_pos_1_email", oth_production_pos_1_email);
    formData.append("oth_production_pos_1_phone", oth_production_pos_1_phone);
    formData.append("oth_production_pos_2_job", oth_production_pos_2_job);
    formData.append("oth_production_pos_2_name", oth_production_pos_2_name);
    formData.append("oth_production_pos_2_email", oth_production_pos_2_email);
    formData.append("oth_production_pos_2_phone", oth_production_pos_2_phone);
    formData.append("oth_production_pos_3_job", oth_production_pos_3_job);
    formData.append("oth_production_pos_3_name", oth_production_pos_3_name);
    formData.append("oth_production_pos_3_email", oth_production_pos_3_email);
    formData.append("oth_production_pos_3_phone", oth_production_pos_3_phone);
    formData.append("oth_production_pos_4_job", oth_production_pos_4_job);
    formData.append("oth_production_pos_4_name", oth_production_pos_4_name);
    formData.append("oth_production_pos_4_email", oth_production_pos_4_email);
    formData.append("oth_production_pos_4_phone", oth_production_pos_4_phone);
    formData.append("oth_production_pos_5_job", oth_production_pos_5_job);
    formData.append("oth_production_pos_5_name", oth_production_pos_5_name);
    formData.append("oth_production_pos_5_email", oth_production_pos_5_email);
    formData.append("oth_production_pos_5_phone", oth_production_pos_5_phone);
    formData.append("ad_1_name", ad_1_name);
    formData.append("ad_1_email", ad_1_email);
    formData.append("ad_1_phone", ad_1_phone);
    formData.append("ad_2_name", ad_2_name);
    formData.append("ad_2_email", ad_2_email);
    formData.append("ad_2_phone", ad_2_phone);
    formData.append("ad_3_name", ad_3_name);
    formData.append("ad_3_email", ad_3_email);
    formData.append("ad_3_phone", ad_3_phone);
    formData.append("ad_4_name", ad_4_name);
    formData.append("ad_4_email", ad_4_email);
    formData.append("ad_4_phone", ad_4_phone);
    formData.append("ad_5_name", ad_5_name);
    formData.append("ad_5_email", ad_5_email);
    formData.append("ad_5_phone", ad_5_phone);
    formData.append("pro_assistant_1_name", pro_assistant_1_name);
    formData.append("pro_assistant_1_email", pro_assistant_1_email);
    formData.append("pro_assistant_1_phone", pro_assistant_1_phone);
    formData.append("pro_assistant_2_name", pro_assistant_2_name);
    formData.append("pro_assistant_2_email", pro_assistant_2_email);
    formData.append("pro_assistant_2_phone", pro_assistant_2_phone);
    formData.append("pro_assistant_3_name", pro_assistant_3_name);
    formData.append("pro_assistant_3_email", pro_assistant_3_email);
    formData.append("pro_assistant_3_phone", pro_assistant_3_phone);
    formData.append("pro_assistant_4_name", pro_assistant_4_name);
    formData.append("pro_assistant_4_email", pro_assistant_4_email);
    formData.append("pro_assistant_4_phone", pro_assistant_4_phone);
    formData.append("pro_assistant_5_name", pro_assistant_5_name);
    formData.append("pro_assistant_5_email", pro_assistant_5_email);
    formData.append("pro_assistant_5_phone", pro_assistant_5_phone);
    formData.append("dop_name", dop_name);
    formData.append("dop_email", dop_email);
    formData.append("dop_phone", dop_phone);
    formData.append("camera_operator_name", camera_operator_name);
    formData.append("camera_operator_email", camera_operator_email);
    formData.append("camera_operator_phone", camera_operator_phone);
    formData.append("camera_ass_1_name", camera_ass_1_name);
    formData.append("camera_ass_1_email", camera_ass_1_email);
    formData.append("camera_ass_1_phone", camera_ass_1_phone);
    formData.append("camera_ass_2_name", camera_ass_2_name);
    formData.append("camera_ass_2_email", camera_ass_2_email);
    formData.append("camera_ass_2_phone", camera_ass_2_phone);
    formData.append("dit_name", dit_name);
    formData.append("dit_email", dit_email);
    formData.append("dit_phone", dit_phone);
    formData.append("steadicam_name", steadicam_name);
    formData.append("steadicam_email", steadicam_email);
    formData.append("steadicam_phone", steadicam_phone);
    formData.append("camera_pa_name", camera_pa_name);
    formData.append("camera_pa_email", camera_pa_email);
    formData.append("camera_pa_phone", camera_pa_phone);
    formData.append("oth_camera_pos_1_job", oth_camera_pos_1_job);
    formData.append("oth_camera_pos_1_name", oth_camera_pos_1_name);
    formData.append("oth_camera_pos_1_email", oth_camera_pos_1_email);
    formData.append("oth_camera_pos_1_phone", oth_camera_pos_1_phone);
    formData.append("oth_camera_pos_2_job", oth_camera_pos_2_job);
    formData.append("oth_camera_pos_2_name", oth_camera_pos_2_name);
    formData.append("oth_camera_pos_2_email", oth_camera_pos_2_email);
    formData.append("oth_camera_pos_2_phone", oth_camera_pos_2_phone);
    formData.append("oth_camera_pos_3_job", oth_camera_pos_3_job);
    formData.append("oth_camera_pos_3_name", oth_camera_pos_3_name);
    formData.append("oth_camera_pos_3_email", oth_camera_pos_3_email);
    formData.append("oth_camera_pos_3_phone", oth_camera_pos_3_phone);
    formData.append("sound_mixer_name", sound_mixer_name);
    formData.append("sound_mixer_email", sound_mixer_email);
    formData.append("sound_mixer_phone", sound_mixer_phone);
    formData.append("boom_operator_name", boom_operator_name);
    formData.append("boom_operator_email", boom_operator_email);
    formData.append("boom_operator_phone", boom_operator_phone);
    formData.append("sound_assistant_1_name", sound_assistant_1_name);
    formData.append("sound_assistant_1_email", sound_assistant_1_email);
    formData.append("sound_assistant_1_phone", sound_assistant_1_phone);
    formData.append("sound_assistant_2_name", sound_assistant_2_name);
    formData.append("sound_assistant_2_email", sound_assistant_2_email);
    formData.append("sound_assistant_2_phone", sound_assistant_2_phone);
    formData.append("script_supervisor_name", script_supervisor_name);
    formData.append("script_supervisor_email", script_supervisor_email);
    formData.append("script_supervisor_phone", script_supervisor_phone);
    formData.append("key_hairmakeup_name", key_hairmakeup_name);
    formData.append("key_hairmakeup_email", key_hairmakeup_email);
    formData.append("key_hairmakeup_phone", key_hairmakeup_phone);
    formData.append("key_hairstylist_name", key_hairstylist_name);
    formData.append("key_hairstylist_email", key_hairstylist_email);
    formData.append("key_hairstylist_phone", key_hairstylist_phone);
    formData.append("sfx_makeup_name", sfx_makeup_name);
    formData.append("sfx_makeup_email", sfx_makeup_email);
    formData.append("sfx_makeup_phone", sfx_makeup_phone);
    formData.append("sfx_makeup_assistant_name", sfx_makeup_assistant_name);
    formData.append("sfx_makeup_assistant_email", sfx_makeup_assistant_email);
    formData.append("sfx_makeup_assistant_phone", sfx_makeup_assistant_phone);
    formData.append("makeup_artist_1_name", makeup_artist_1_name);
    formData.append("makeup_artist_1_email", makeup_artist_1_email);
    formData.append("makeup_artist_1_phone", makeup_artist_1_phone);
    formData.append("makeup_artist_2_name", makeup_artist_2_name);
    formData.append("makeup_artist_2_email", makeup_artist_2_email);
    formData.append("makeup_artist_2_phone", makeup_artist_2_phone);
    formData.append("makeup_artist_3_name", makeup_artist_3_name);
    formData.append("makeup_artist_3_email", makeup_artist_3_email);
    formData.append("makeup_artist_3_phone", makeup_artist_3_phone);
    formData.append("makeup_artist_4_name", makeup_artist_4_name);
    formData.append("makeup_artist_4_email", makeup_artist_4_email);
    formData.append("makeup_artist_4_phone", makeup_artist_4_phone);
    formData.append("makeup_artist_5_name", makeup_artist_5_name);
    formData.append("makeup_artist_5_email", makeup_artist_5_email);
    formData.append("makeup_artist_5_phone", makeup_artist_5_phone);
    formData.append("costume_designer_name", costume_designer_name);
    formData.append("costume_designer_email", costume_designer_email);
    formData.append("costume_designer_phone", costume_designer_phone);
    formData.append("ass_costume_designer_name", ass_costume_designer_name);
    formData.append("ass_costume_designer_email", ass_costume_designer_email);
    formData.append("ass_costume_designer_phone", ass_costume_designer_phone);
    formData.append("wardrobe_assistant_1_name", wardrobe_assistant_1_name);
    formData.append("wardrobe_assistant_1_email", wardrobe_assistant_1_email);
    formData.append("wardrobe_assistant_1_phone", wardrobe_assistant_1_phone);
    formData.append("wardrobe_assistant_2_name", wardrobe_assistant_2_name);
    formData.append("wardrobe_assistant_2_email", wardrobe_assistant_2_email);
    formData.append("wardrobe_assistant_2_phone", wardrobe_assistant_2_phone);
    formData.append("wardrobe_assistant_3_name", wardrobe_assistant_3_name);
    formData.append("wardrobe_assistant_3_email", wardrobe_assistant_3_email);
    formData.append("wardrobe_assistant_3_phone", wardrobe_assistant_3_phone);
    formData.append("wardrobe_assistant_4_name", wardrobe_assistant_4_name);
    formData.append("wardrobe_assistant_4_email", wardrobe_assistant_4_email);
    formData.append("wardrobe_assistant_4_phone", wardrobe_assistant_4_phone);
    formData.append("wardrobe_assistant_5_name", wardrobe_assistant_5_name);
    formData.append("wardrobe_assistant_5_email", wardrobe_assistant_5_email);
    formData.append("wardrobe_assistant_5_phone", wardrobe_assistant_5_phone);
    formData.append("production_designer_name", production_designer_name);
    formData.append("production_designer_email", production_designer_email);
    formData.append("production_designer_phone", production_designer_phone);
    formData.append("art_director_name", art_director_name);
    formData.append("art_director_email", art_director_email);
    formData.append("art_director_phone", art_director_phone);
    formData.append("art_assistant_name", art_assistant_name);
    formData.append("art_assistant_email", art_assistant_email);
    formData.append("art_assistant_phone", art_assistant_phone);
    formData.append("set_decorator_name", set_decorator_name);
    formData.append("set_decorator_email", set_decorator_email);
    formData.append("set_decorator_phone", set_decorator_phone);
    formData.append("set_dresser_name", set_dresser_name);
    formData.append("set_dresser_email", set_dresser_email);
    formData.append("set_dresser_phone", set_dresser_phone);
    formData.append("lead_man_name", lead_man_name);
    formData.append("lead_man_email", lead_man_email);
    formData.append("lead_man_phone", lead_man_phone);
    formData.append("dresser_name", dresser_name);
    formData.append("dresser_email", dresser_email);
    formData.append("dresser_phone", dresser_phone);
    formData.append("prop_master_name", prop_master_name);
    formData.append("prop_master_email", prop_master_email);
    formData.append("prop_master_phone", prop_master_phone);
    formData.append("ass_prop_master_name", ass_prop_master_name);
    formData.append("ass_prop_master_email", ass_prop_master_email);
    formData.append("ass_prop_master_phone", ass_prop_master_phone);
    formData.append("prop_buyer_name", prop_buyer_name);
    formData.append("prop_buyer_email", prop_buyer_email);
    formData.append("prop_buyer_phone", prop_buyer_phone);
    formData.append("armorer_name", armorer_name);
    formData.append("armorer_email", armorer_email);
    formData.append("armorer_phone", armorer_phone);
    formData.append("gaffer_name", gaffer_name);
    formData.append("gaffer_email", gaffer_email);
    formData.append("gaffer_phone", gaffer_phone);
    formData.append("best_boy_electric_name", best_boy_electric_name);
    formData.append("best_boy_electric_email", best_boy_electric_email);
    formData.append("best_boy_electric_phone", best_boy_electric_phone);
    formData.append("electric_3_name", electric_3_name);
    formData.append("electric_3_phone", electric_3_phone);
    formData.append("electric_3_email", electric_3_email);
    formData.append("electric_4_name", electric_4_name);
    formData.append("electric_4_email", electric_4_email);
    formData.append("electric_4_phone", electric_4_phone);
    formData.append("keygrip_name", keygrip_name);
    formData.append("keygrip_email", keygrip_email);
    formData.append("keygrip_phone", keygrip_phone);
    formData.append("best_boy_grip_name", best_boy_grip_name);
    formData.append("best_boy_grip_email", best_boy_grip_email);
    formData.append("best_boy_grip_phone", best_boy_grip_phone);
    formData.append("dolly_grip_name", dolly_grip_name);
    formData.append("dolly_grip_email", dolly_grip_email);
    formData.append("dolly_grip_phone", dolly_grip_phone);
    formData.append("swing_ge1_name", swing_ge1_name);
    formData.append("swing_ge1_email", swing_ge1_email);
    formData.append("swing_ge1_phone", swing_ge1_phone);
    formData.append("swing_ge2_name", swing_ge2_name);
    formData.append("swing_ge2_email", swing_ge2_email);
    formData.append("swing_ge2_phone", swing_ge2_phone);
    formData.append("swing_ge3_name", swing_ge3_name);
    formData.append("swing_ge3_email", swing_ge3_email);
    formData.append("swing_ge3_phone", swing_ge3_phone);
    formData.append("swing_ge4_name", swing_ge4_name);
    formData.append("swing_ge4_email", swing_ge4_email);
    formData.append("swing_ge4_phone", swing_ge4_phone);
    formData.append("swing_ge5_name", swing_ge5_name);
    formData.append("swing_ge5_email", swing_ge5_email);
    formData.append("swing_ge5_phone", swing_ge5_phone);
    formData.append("stunt_coordinator_name", stunt_coordinator_name);
    formData.append("stunt_coordinator_email", stunt_coordinator_email);
    formData.append("stunt_coordinator_phone", stunt_coordinator_phone);
    formData.append("stunts_1_name", stunts_1_name);
    formData.append("stunts_1_email", stunts_1_email);
    formData.append("stunts_1_phone", stunts_1_phone);
    formData.append("stunts_2_name", stunts_2_name);
    formData.append("stunts_2_email", stunts_2_email);
    formData.append("stunts_2_phone", stunts_2_phone);
    formData.append("stunts_3_name", stunts_3_name);
    formData.append("stunts_3_email", stunts_3_email);
    formData.append("stunts_3_phone", stunts_3_phone);
    formData.append("stunts_4_name", stunts_4_name);
    formData.append("stunts_4_email", stunts_4_email);
    formData.append("stunts_4_phone", stunts_4_phone);
    formData.append("stunts_5_name", stunts_5_name);
    formData.append("stunts_5_email", stunts_5_email);
    formData.append("stunts_5_phone", stunts_5_phone);
    formData.append("legal_name", legal_name);
    formData.append("legal_email", legal_email);
    formData.append("legal_phone", legal_phone);
    formData.append("editor_name", editor_name);
    formData.append("editor_email", editor_email);
    formData.append("editor_phone", editor_phone);
    formData.append("writer_name", writer_name);
    formData.append("writer_email", writer_email);
    formData.append("writer_phone", writer_phone);
    formData.append("fx_name", fx_name);
    formData.append("fx_email", fx_email);
    formData.append("fx_phone", fx_phone);
    formData.append("set_medic_name", set_medic_name);
    formData.append("set_medic_email", set_medic_email);
    formData.append("set_medic_phone", set_medic_phone);
    formData.append("casting_director_name", casting_director_name);
    formData.append("casting_director_email", casting_director_email);
    formData.append("casting_director_phone", casting_director_phone);
    formData.append("extras_casting_name", extras_casting_name);
    formData.append("extras_casting_email", extras_casting_email);
    formData.append("extras_casting_phone", extras_casting_phone);
    formData.append("location_mngr_name", location_mngr_name);
    formData.append("location_mngr_email", location_mngr_email);
    formData.append("location_mngr_phone", location_mngr_phone);
    formData.append("location_ass_1_name", location_ass_1_name);
    formData.append("location_ass_1_email", location_ass_1_email);
    formData.append("location_ass_1_phone", location_ass_1_phone);
    formData.append("location_ass_2_name", location_ass_2_name);
    formData.append("location_ass_2_email", location_ass_2_email);
    formData.append("location_ass_2_phone", location_ass_2_phone);
    formData.append("location_ass_3_name", location_ass_3_name);
    formData.append("location_ass_3_email", location_ass_3_email);
    formData.append("location_ass_3_phone", location_ass_3_phone);
    formData.append("location_ass_4_name", location_ass_4_name);
    formData.append("location_ass_4_email", location_ass_4_email);
    formData.append("location_ass_4_phone", location_ass_4_phone);
    formData.append("location_security_name", location_security_name);
    formData.append("location_security_email", location_security_email);
    formData.append("location_security_phone", location_security_phone);
    formData.append("transport_captain_name", transport_captain_name);
    formData.append("transport_captain_email", transport_captain_email);
    formData.append("transport_captain_phone", transport_captain_phone);
    formData.append("transport_manager_1_name", transport_manager_1_name);
    formData.append("transport_manager_1_email", transport_manager_1_email);
    formData.append("transport_manager_1_phone", transport_manager_1_phone);
    formData.append("transport_manager_2_name", transport_manager_2_name);
    formData.append("transport_manager_2_email", transport_manager_2_email);
    formData.append("transport_manager_2_phone", transport_manager_2_phone);
    formData.append("head_driver_name", head_driver_name);
    formData.append("head_driver_email", head_driver_email);
    formData.append("head_driver_phone", head_driver_phone);
    formData.append("truck1_name", truck1_name);
    formData.append("truck1_email", truck1_email);
    formData.append("truck1_phone", truck1_phone);
    formData.append("truck2_name", truck2_name);
    formData.append("truck2_email", truck2_email);
    formData.append("truck2_phone", truck2_phone);
    formData.append("truck3_name", truck3_name);
    formData.append("truck3_email", truck3_email);
    formData.append("truck3_phone", truck3_phone);
    formData.append("car1_name", car1_name);
    formData.append("car1_email", car1_email);
    formData.append("car1_phone", car1_phone);
    formData.append("car2_name", car2_name);
    formData.append("car2_email", car2_email);
    formData.append("car2_phone", car2_phone);
    formData.append("car3_name", car3_name);
    formData.append("car3_email", car3_email);
    formData.append("car3_phone", car3_phone);
    formData.append("catering_co_1_name", catering_co_1_name);
    formData.append("catering_co_1_email", catering_co_1_email);
    formData.append("catering_co_1_phone", catering_co_1_phone);
    formData.append("catering_co_2_name", catering_co_2_name);
    formData.append("catering_co_2_email", catering_co_2_email);
    formData.append("catering_co_2_phone", catering_co_2_phone);
    formData.append("catering_co_3_name", catering_co_3_name);
    formData.append("catering_co_3_email", catering_co_3_email);
    formData.append("catering_co_3_phone", catering_co_3_phone);
    formData.append("craft_service_name", craft_service_name);
    formData.append("craft_service_email", craft_service_email);
    formData.append("craft_service_phone", craft_service_phone);
    formData.append("crafty_ass_name", crafty_ass_name);
    formData.append("crafty_ass_email", crafty_ass_email);
    formData.append("crafty_ass_phone", crafty_ass_phone); 
    formData.append("add_pos_1_job", add_pos_1_job);
    formData.append("add_pos_1_name", add_pos_1_name);
    formData.append("add_pos_1_email", add_pos_1_email);
    formData.append("add_pos_1_phone", add_pos_1_phone);
    formData.append("add_pos_2_job", add_pos_2_job);
    formData.append("add_pos_2_name", add_pos_2_name);
    formData.append("add_pos_2_email", add_pos_2_email);
    formData.append("add_pos_2_phone", add_pos_2_phone); 
    formData.append("add_pos_3_job", add_pos_3_job);
    formData.append("add_pos_3_name", add_pos_3_name);
    formData.append("add_pos_3_email", add_pos_3_email);
    formData.append("add_pos_3_phone", add_pos_3_phone); 
    formData.append("add_pos_4_job", add_pos_4_job);
    formData.append("add_pos_4_name", add_pos_4_name);
    formData.append("add_pos_4_email", add_pos_4_email);
    formData.append("add_pos_4_phone", add_pos_4_phone); 
    formData.append("add_pos_5_job", add_pos_5_job);
    formData.append("add_pos_5_name", add_pos_5_name);
    formData.append("add_pos_5_email", add_pos_5_email);
    formData.append("add_pos_5_phone", add_pos_5_phone); 
    formData.append("add_pos_6_job", add_pos_6_job);
    formData.append("add_pos_6_name", add_pos_6_name);
    formData.append("add_pos_6_email", add_pos_6_email);
    formData.append("add_pos_6_phone", add_pos_6_phone); 
    formData.append("add_pos_7_job", add_pos_7_job);
    formData.append("add_pos_7_name", add_pos_7_name);
    formData.append("add_pos_7_email", add_pos_7_email);
    formData.append("add_pos_7_phone", add_pos_7_phone); 
    formData.append("add_pos_8_job", add_pos_8_job);
    formData.append("add_pos_8_name", add_pos_8_name);
    formData.append("add_pos_8_email", add_pos_8_email);
    formData.append("add_pos_8_phone", add_pos_8_phone); 
    formData.append("add_pos_9_job", add_pos_9_job);
    formData.append("add_pos_9_name", add_pos_9_name);
    formData.append("add_pos_9_email", add_pos_9_email);
    formData.append("add_pos_9_phone", add_pos_9_phone); 
    formData.append("add_pos_10_job", add_pos_10_job);
    formData.append("add_pos_10_name", add_pos_10_name);
    formData.append("add_pos_10_email", add_pos_10_email);
    formData.append("add_pos_10_phone", add_pos_10_phone);
    formData.append("all_other_add_positions", all_other_add_positions);   
    if(imageInput1.current.files[0]) {
      formData.append("company_logo", imageInput1.current.files[0]);
    }
    try {
      const {data} = await axiosReq.post("/crewinfonew/", formData);
      history.push(`/callsheets/`);
      console.log(data)
    } catch (err) {
      console.log(err);
      if (err.response?.status !== 401) {
        setErrors(err.response?.data);
      }
    }
  }

  const buttons = (
  <div className="text-center mt-4 mb-4">    
    <Button
      className={`${btnStyles.Button} ${btnStyles.Blue}`}
      onClick={() => history.goBack()}
    >
      Cancel
    </Button>
    <Button className={`${btnStyles.Button} ${btnStyles.Blue}`} type="submit">
      Create
    </Button>
  </div>
  );

  const textFields = (
    <div className="text-center">
      {/* PRODUCTION COMPANY INFO */}
      <div>
      <h3 className={` my-3 py-1 ${styles.SubTitle }`} >Production Company Info</h3> 
      {/* Production Name - Production Company */}
      <Row>
          <Col xs={6} className="d-flex justify-content-center p-0 p-md-2">
          <Form.Group controlId="production_name" className={`${styles.Width} `}  >
              <Form.Label className={`${styles.Bold}`} >Production Name</Form.Label>
              <Form.Control 
                className={`${styles.Input}`}
                type="text"
                name="production_name"
                value={production_name}
                onChange={handleChange}
                  />
          </Form.Group>
          {errors?.production_name?.map((message, idx) => (
            <Alert variant="warning" key={idx}>
              {message}
            </Alert>
          ))}
          </Col>
          <Col xs={6} className="d-flex justify-content-center p-0 p-md-2">
          <Form.Group controlId="production_company" className={`${styles.Width} `}  >
              <Form.Label className={`${styles.Bold}`}>Production Company</Form.Label>
              <Form.Control 
                className={`${styles.Input}`}
                type="text"
                name="production_company"
                value={production_company}
                onChange={handleChange}
                  />
          </Form.Group>
          {errors?.production_company?.map((message, idx) => (
            <Alert variant="warning" key={idx}>
              {message}
            </Alert>
          ))}
          </Col>
      </Row>
      <hr/>
      {/* phone - email */}
      <Row>
          <Col xs={6} className="d-flex justify-content-center p-0 p-md-2">
          <Form.Group controlId="company_phone" className={`${styles.Width} `}  >
              <Form.Label className={`${styles.Bold} `} >Company Phone</Form.Label>
              <Form.Control 
              className={`${styles.Input}`}
              type="text"
              name="company_phone"
              value={company_phone}
              onChange={handleChange}
                  />
          </Form.Group>
          {errors?.company_phone?.map((message, idx) => (
            <Alert variant="warning" key={idx}>
              {message}
            </Alert>
          ))}
          </Col>
          <Col xs={6} className="d-flex justify-content-center p-0 p-md-2">
          <Form.Group controlId="company_email" className={`${styles.Width} `}  >
              <Form.Label className={`${styles.Bold}`} >Company Email</Form.Label>
              <Form.Control 
              className={`${styles.Input}`}
              type="text"
              name="company_email"
              value={company_email}
              onChange={handleChange}
                  />
          </Form.Group>
          {errors?.company_email?.map((message, idx) => (
            <Alert variant="warning" key={idx}>
              {message}
            </Alert>
          ))}
          </Col>
      </Row>
      <hr/>
      {/* company address - company logo */}
      <Row>
      <Col xs={12} md={6} className=" p-0 p-md-2">
        <div className="d-flex justify-content-center">
      <Form.Group controlId="company_address_line_1" className={`${styles.Width2} `}  >
          <Form.Label className={`${styles.Bold}`} >Company Address Line 1</Form.Label>
          <Form.Control 
              className={`${styles.InputScene}`}
              type="text"
              name="company_address_line_1"
              value={company_address_line_1}
              onChange={handleChange}
              />
      </Form.Group>
      {errors?.company_address_line_1?.map((message, idx) => (
        <Alert variant="warning" key={idx}>
          {message}
        </Alert>
      ))}
      </div>
      {/* line 2 */}
      <div className="d-flex justify-content-center">
      <Form.Group controlId="company_address_line_2" className={`${styles.Width2} `}  >
          <Form.Label className={`${styles.Bold}`} >Company Address Line 2</Form.Label>
          <Form.Control 
              className={`${styles.InputScene}`}
              type="text"
              name="company_address_line_2"
              value={company_address_line_2}
              onChange={handleChange}
              />
      </Form.Group>
      {errors?.company_address_line_2?.map((message, idx) => (
        <Alert variant="warning" key={idx}>
          {message}
        </Alert>
      ))}
      </div>
      <div className="d-flex justify-content-center">
      {/* line 3 */}
      <Form.Group controlId="company_address_line_3" className={`${styles.Width2} `}  >
          <Form.Label className={`${styles.Bold}`} >Company Address Line 3</Form.Label>
          <Form.Control 
              className={`${styles.InputScene}`}
              type="text"
              name="company_address_line_3"
              value={company_address_line_3}
              onChange={handleChange}
              />
      </Form.Group>
      {errors?.company_address_line_3?.map((message, idx) => (
        <Alert variant="warning" key={idx}>
          {message}
        </Alert>
      ))}
      </div>
      <div className="d-flex justify-content-center">
      {/* line 4 */}
      <Form.Group controlId="company_address_line_4" className={`${styles.Width2} `}  >
          <Form.Label className={`${styles.Bold}`} >Company Address Line 4 </Form.Label>
          <Form.Control 
              className={`${styles.InputScene}`}
              type="text"
              name="company_address_line_4"
              value={company_address_line_4}
              onChange={handleChange}
              />
      </Form.Group>
      {errors?.company_address_line_4?.map((message, idx) => (
        <Alert variant="warning" key={idx}>
          {message}
        </Alert>
      ))}
      </div>
      </Col>
      <Col xs={6} className=" p-0 p-md-2">
      <p className={`${styles.Bold}`}>Company Logo</p>
          <div
              className={`mr-4 ${appStyles.Content} d-flex flex-column justify-content-center`}
            >
              <Form.Group className="text-center pt-3">
                  {company_logo ? (
                    <>
                      <figure>
                        <Image className={styles.Logo} src={company_logo} rounded />
                      </figure>
                      <div>
                        <Form.Label
                          className={`${btnStyles.Button} ${btnStyles.Blue} btn`}
                          htmlFor="image-upload"
                        >
                          Change the logo
                        </Form.Label>
                      </div>
                    </>
                  ) : (
                    <Form.Label
                      className="d-flex justify-content-center"
                      htmlFor="image-upload"
                    >
                      <Asset
                        src={Upload}
                        message="Upload Image"
                      />
                    </Form.Label>
                  )}
    
                  <Form.Control
                    type="file"
                    id="image-upload"
                    accept="image/*"
                    onChange={handleChangeLogo}
                    ref={imageInput1}
                  />
              </Form.Group>
              {errors?.company_logo?.map((message, idx) => (
                <Alert variant="warning" key={idx}>
                  {message}
                </Alert>
              ))}
          </div>
          <div className="mt-3 d-flex justify-content-center text-center">
            <Form.Group controlId="total_shoot_days" className={`${styles.Width2} `}  >
          <Form.Label className={`${styles.Bold}`} >Total Shoot Days</Form.Label>
          <Form.Control 
              className={`${styles.Input}`}
              type="text"
              name="total_shoot_days"
              value={total_shoot_days}
              onChange={handleChange}
              />
            </Form.Group>
            {errors?.total_shoot_days?.map((message, idx) => (
              <Alert variant="warning" key={idx}>
                {message}
              </Alert>
            ))}
            </div>
      </Col>
      </Row>
      </div>
      {/* CREW INFO BY DEPARTMENTS */}
      <h3 className="my-4" >CREW INFO BY DEPARTMENT</h3> 

      {/* PRODUCTION */}
      <div>
      <h3 className={` my-3 py-1 ${styles.SubTitle }`} >PRODUCTION</h3> 
      {/* Producer */}
      <h5 className="mt-1" >Producer</h5> 
      <Row>
          <Col xs={4} className="d-flex justify-content-center p-0 p-md-2">
          <Form.Group controlId="producer_name" className={`${styles.Width} `}  >
              <Form.Label className={`${styles.Bold} `} >Name</Form.Label>
              <Form.Control 
              className={`${styles.Input}`}
              type="text"
              name="producer_name"
              value={producer_name}
              onChange={handleChange}
                  />
          </Form.Group>
          {errors?.producer_name?.map((message, idx) => (
            <Alert variant="warning" key={idx}>
              {message}
            </Alert>
          ))}
          </Col>
          <Col xs={4} className="d-flex justify-content-center p-0 p-md-2">
          <Form.Group controlId="producer_email" className={`${styles.Width} `}  >
              <Form.Label className={`${styles.Bold}`} >Email</Form.Label>
              <Form.Control 
              className={`${styles.Input}`}
              type="text"
              name="producer_email"
              value={producer_email}
              onChange={handleChange}
                  />
          </Form.Group>
          {errors?.producer_email?.map((message, idx) => (
            <Alert variant="warning" key={idx}>
              {message}
            </Alert>
          ))}
          </Col>
          <Col xs={4} className="d-flex justify-content-center p-0 p-md-2">
          <Form.Group controlId="producer_phone" className={`${styles.Width} `}  >
              <Form.Label className={`${styles.Bold}`} >Phone</Form.Label>
              <Form.Control 
              className={`${styles.Input}`}
              type="text"
              name="producer_phone"
              value={producer_phone}
              onChange={handleChange}
                  />
          </Form.Group>
          {errors?.producer_phone?.map((message, idx) => (
            <Alert variant="warning" key={idx}>
              {message}
            </Alert>
          ))}
          </Col>
      </Row>
      <hr/>
      {/* Production Coordinator */}
      <h5 className="mt-1" >Production Coordinator</h5> 
      <Row>
          <Col xs={4} className="d-flex justify-content-center p-0 p-md-2">
          <Form.Group controlId="pro_coordinator_name" className={`${styles.Width} `}  >
              <Form.Label className={`${styles.Bold} `} >Name</Form.Label>
              <Form.Control 
              className={`${styles.Input}`}
              type="text"
              name="pro_coordinator_name"
              value={pro_coordinator_name}
              onChange={handleChange}
                  />
          </Form.Group>
          {errors?.pro_coordinator_name?.map((message, idx) => (
            <Alert variant="warning" key={idx}>
              {message}
            </Alert>
          ))}
          </Col>
          <Col xs={4} className="d-flex justify-content-center p-0 p-md-2">
          <Form.Group controlId="pro_coordinator_email" className={`${styles.Width} `}  >
              <Form.Label className={`${styles.Bold}`} >Email</Form.Label>
              <Form.Control 
              className={`${styles.Input}`}
              type="text"
              name="pro_coordinator_email"
              value={pro_coordinator_email}
              onChange={handleChange}
                  />
          </Form.Group>
          {errors?.pro_coordinator_email?.map((message, idx) => (
            <Alert variant="warning" key={idx}>
              {message}
            </Alert>
          ))}
          </Col>
          <Col xs={4} className="d-flex justify-content-center p-0 p-md-2">
          <Form.Group controlId="pro_coordinator_phone" className={`${styles.Width} `}  >
              <Form.Label className={`${styles.Bold}`} >Phone</Form.Label>
              <Form.Control 
              className={`${styles.Input}`}
              type="text"
              name="pro_coordinator_phone"
              value={pro_coordinator_phone}
              onChange={handleChange}
                  />
          </Form.Group>
          {errors?.pro_coordinator_phone?.map((message, idx) => (
            <Alert variant="warning" key={idx}>
              {message}
            </Alert>
          ))}
          </Col>
      </Row>
      <hr/>
      {/* UPM */}
      <h5 className="mt-1" >UPM</h5> 
      <Row>
          <Col xs={4} className="d-flex justify-content-center p-0 p-md-2">
          <Form.Group controlId="upm_name" className={`${styles.Width} `}  >
              <Form.Label className={`${styles.Bold} `} >Name</Form.Label>
              <Form.Control 
              className={`${styles.Input}`}
              type="text"
              name="upm_name"
              value={upm_name}
              onChange={handleChange}
                  />
          </Form.Group>
          {errors?.upm_name?.map((message, idx) => (
            <Alert variant="warning" key={idx}>
              {message}
            </Alert>
          ))}
          </Col>
          <Col xs={4} className="d-flex justify-content-center p-0 p-md-2">
          <Form.Group controlId="upm_email" className={`${styles.Width} `}  >
              <Form.Label className={`${styles.Bold}`} >Email</Form.Label>
              <Form.Control 
              className={`${styles.Input}`}
              type="text"
              name="upm_email"
              value={upm_email}
              onChange={handleChange}
                  />
          </Form.Group>
          {errors?.upm_email?.map((message, idx) => (
            <Alert variant="warning" key={idx}>
              {message}
            </Alert>
          ))}
          </Col>
          <Col xs={4} className="d-flex justify-content-center p-0 p-md-2">
          <Form.Group controlId="upm_phone" className={`${styles.Width} `}  >
              <Form.Label className={`${styles.Bold}`} >Phone</Form.Label>
              <Form.Control 
              className={`${styles.Input}`}
              type="text"
              name="upm_phone"
              value={upm_phone}
              onChange={handleChange}
                  />
          </Form.Group>
          {errors?.upm_phone?.map((message, idx) => (
            <Alert variant="warning" key={idx}>
              {message}
            </Alert>
          ))}
          </Col>
      </Row>
      <hr/>
      {/* Travel Coordinator */}
      <h5 className="mt-1" >Travel Coordinator</h5> 
      <Row>
          <Col xs={4} className="d-flex justify-content-center p-0 p-md-2">
          <Form.Group controlId="travel_coordinator_name" className={`${styles.Width} `}  >
              <Form.Label className={`${styles.Bold} `} >Name</Form.Label>
              <Form.Control 
              className={`${styles.Input}`}
              type="text"
              name="travel_coordinator_name"
              value={travel_coordinator_name}
              onChange={handleChange}
                  />
          </Form.Group>
          {errors?.travel_coordinator_name?.map((message, idx) => (
            <Alert variant="warning" key={idx}>
              {message}
            </Alert>
          ))}
          </Col>
          <Col xs={4} className="d-flex justify-content-center p-0 p-md-2">
          <Form.Group controlId="travel_coordinator_email" className={`${styles.Width} `}  >
              <Form.Label className={`${styles.Bold}`} >Email</Form.Label>
              <Form.Control 
              className={`${styles.Input}`}
              type="text"
              name="travel_coordinator_email"
              value={travel_coordinator_email}
              onChange={handleChange}
                  />
          </Form.Group>
          {errors?.travel_coordinator_email?.map((message, idx) => (
            <Alert variant="warning" key={idx}>
              {message}
            </Alert>
          ))}
          </Col>
          <Col xs={4} className="d-flex justify-content-center p-0 p-md-2">
          <Form.Group controlId="travel_coordinator_phone" className={`${styles.Width} `}  >
              <Form.Label className={`${styles.Bold}`} >Phone</Form.Label>
              <Form.Control 
              className={`${styles.Input}`}
              type="text"
              name="travel_coordinator_phone"
              value={travel_coordinator_phone}
              onChange={handleChange}
                  />
          </Form.Group>
          {errors?.travel_coordinator_phone?.map((message, idx) => (
            <Alert variant="warning" key={idx}>
              {message}
            </Alert>
          ))}
          </Col>
      </Row>
      <hr/>
      {/* P.A. */}
      <h5 className="mt-1" >Production PA</h5> 
      <Row>
          <Col xs={4} className="d-flex justify-content-center p-0 p-md-2">
          <Form.Group controlId="production_pa_name" className={`${styles.Width} `}  >
              <Form.Label className={`${styles.Bold} `} >Name</Form.Label>
              <Form.Control 
              className={`${styles.Input}`}
              type="text"
              name="production_pa_name"
              value={production_pa_name}
              onChange={handleChange}
                  />
          </Form.Group>
          {errors?.production_pa_name?.map((message, idx) => (
            <Alert variant="warning" key={idx}>
              {message}
            </Alert>
          ))}
          </Col>
          <Col xs={4} className="d-flex justify-content-center p-0 p-md-2">
          <Form.Group controlId="production_pa_email" className={`${styles.Width} `}  >
              <Form.Label className={`${styles.Bold}`} >Email</Form.Label>
              <Form.Control 
              className={`${styles.Input}`}
              type="text"
              name="production_pa_email"
              value={production_pa_email}
              onChange={handleChange}
                  />
          </Form.Group>
          {errors?.production_pa_email?.map((message, idx) => (
            <Alert variant="warning" key={idx}>
              {message}
            </Alert>
          ))}
          </Col>
          <Col xs={4} className="d-flex justify-content-center p-0 p-md-2">
          <Form.Group controlId="production_pa_phone" className={`${styles.Width} `}  >
              <Form.Label className={`${styles.Bold}`} >Phone</Form.Label>
              <Form.Control 
              className={`${styles.Input}`}
              type="text"
              name="production_pa_phone"
              value={production_pa_phone}
              onChange={handleChange}
                  />
          </Form.Group>
          {errors?.production_pa_phone?.map((message, idx) => (
            <Alert variant="warning" key={idx}>
              {message}
            </Alert>
          ))}
          </Col>
      </Row>
      <hr/>
      {/* Locations Manager */}
      <h5 className="mt-1" >Locations Manager</h5> 
      <Row>
          <Col xs={4} className="d-flex justify-content-center p-0 p-md-2">
          <Form.Group controlId="locations_manager_name" className={`${styles.Width} `}  >
              <Form.Label className={`${styles.Bold} `} >Name</Form.Label>
              <Form.Control 
              className={`${styles.Input}`}
              type="text"
              name="locations_manager_name"
              value={locations_manager_name}
              onChange={handleChange}
                  />
          </Form.Group>
          {errors?.locations_manager_name?.map((message, idx) => (
            <Alert variant="warning" key={idx}>
              {message}
            </Alert>
          ))}
          </Col>
          <Col xs={4} className="d-flex justify-content-center p-0 p-md-2">
          <Form.Group controlId="locations_manager_email" className={`${styles.Width} `}  >
              <Form.Label className={`${styles.Bold}`} >Email</Form.Label>
              <Form.Control 
              className={`${styles.Input}`}
              type="text"
              name="locations_manager_email"
              value={locations_manager_email}
              onChange={handleChange}
                  />
          </Form.Group>
          {errors?.locations_manager_email?.map((message, idx) => (
            <Alert variant="warning" key={idx}>
              {message}
            </Alert>
          ))}
          </Col>
          <Col xs={4} className="d-flex justify-content-center p-0 p-md-2">
          <Form.Group controlId="locations_manager_phone" className={`${styles.Width} `}  >
              <Form.Label className={`${styles.Bold}`} >Phone</Form.Label>
              <Form.Control 
              className={`${styles.Input}`}
              type="text"
              name="locations_manager_phone"
              value={locations_manager_phone}
              onChange={handleChange}
                  />
          </Form.Group>
          {errors?.locations_manager_phone?.map((message, idx) => (
            <Alert variant="warning" key={idx}>
              {message}
            </Alert>
          ))}
          </Col>
      </Row>
      <hr/>
      {/* Additional Production Position 1 */}
      <h5 className="mt-1" >Additional Production Position 1</h5> 
      <Row>
          <Col xs={{span: 4, offset: 4 }} className="d-flex justify-content-center p-0 p-md-2">
          <Form.Group controlId="oth_production_pos_1_job" className={`${styles.Width} `}  >
              <Form.Label className={`${styles.Bold} `} >Position</Form.Label>
              <Form.Control 
              className={`${styles.Input}`}
              type="text"
              name="oth_production_pos_1_job"
              value={oth_production_pos_1_job}
              onChange={handleChange}
                  />
          </Form.Group>
          {errors?.oth_production_pos_1_job?.map((message, idx) => (
            <Alert variant="warning" key={idx}>
              {message}
            </Alert>
          ))}
          </Col>
      </Row>
      <Row>
          <Col xs={4} className="d-flex justify-content-center p-0 p-md-2">
          <Form.Group controlId="oth_production_pos_1_name" className={`${styles.Width} `}  >
              <Form.Label className={`${styles.Bold} `} >Name</Form.Label>
              <Form.Control 
              className={`${styles.Input}`}
              type="text"
              name="oth_production_pos_1_name"
              value={oth_production_pos_1_name}
              onChange={handleChange}
                  />
          </Form.Group>
          {errors?.oth_production_pos_1_name?.map((message, idx) => (
            <Alert variant="warning" key={idx}>
              {message}
            </Alert>
          ))}
          </Col>
          <Col xs={4} className="d-flex justify-content-center p-0 p-md-2">
          <Form.Group controlId="oth_production_pos_1_email" className={`${styles.Width} `}  >
              <Form.Label className={`${styles.Bold}`} >Email</Form.Label>
              <Form.Control 
              className={`${styles.Input}`}
              type="text"
              name="oth_production_pos_1_email"
              value={oth_production_pos_1_email}
              onChange={handleChange}
                  />
          </Form.Group>
          {errors?.oth_production_pos_1_email?.map((message, idx) => (
            <Alert variant="warning" key={idx}>
              {message}
            </Alert>
          ))}
          </Col>
          <Col xs={4} className="d-flex justify-content-center p-0 p-md-2">
          <Form.Group controlId="oth_production_pos_1_phone" className={`${styles.Width} `}  >
              <Form.Label className={`${styles.Bold}`} >Phone</Form.Label>
              <Form.Control 
              className={`${styles.Input}`}
              type="text"
              name="oth_production_pos_1_phone"
              value={oth_production_pos_1_phone}
              onChange={handleChange}
                  />
          </Form.Group>
          {errors?.oth_production_pos_1_phone?.map((message, idx) => (
            <Alert variant="warning" key={idx}>
              {message}
            </Alert>
          ))}
          </Col>
      </Row>
      <hr/>
      {/* Additional Production Position 2 */}
      <h5 className="mt-1" >Additional Production Position 2</h5> 
      <Row>
          <Col xs={{span: 4, offset: 4 }} className="d-flex justify-content-center p-0 p-md-2">
          <Form.Group controlId="oth_production_pos_2_job" className={`${styles.Width} `}  >
              <Form.Label className={`${styles.Bold} `} >Position</Form.Label>
              <Form.Control 
              className={`${styles.Input}`}
              type="text"
              name="oth_production_pos_2_job"
              value={oth_production_pos_2_job}
              onChange={handleChange}
                  />
          </Form.Group>
          {errors?.oth_production_pos_2_job?.map((message, idx) => (
            <Alert variant="warning" key={idx}>
              {message}
            </Alert>
          ))}
          </Col>
      </Row>
      <Row>
          <Col xs={4} className="d-flex justify-content-center p-0 p-md-2">
          <Form.Group controlId="oth_production_pos_2_name" className={`${styles.Width} `}  >
              <Form.Label className={`${styles.Bold} `} >Name</Form.Label>
              <Form.Control 
              className={`${styles.Input}`}
              type="text"
              name="oth_production_pos_2_name"
              value={oth_production_pos_2_name}
              onChange={handleChange}
                  />
          </Form.Group>
          {errors?.oth_production_pos_2_name?.map((message, idx) => (
            <Alert variant="warning" key={idx}>
              {message}
            </Alert>
          ))}
          </Col>
          <Col xs={4} className="d-flex justify-content-center p-0 p-md-2">
          <Form.Group controlId="oth_production_pos_2_email" className={`${styles.Width} `}  >
              <Form.Label className={`${styles.Bold}`} >Email</Form.Label>
              <Form.Control 
              className={`${styles.Input}`}
              type="text"
              name="oth_production_pos_2_email"
              value={oth_production_pos_2_email}
              onChange={handleChange}
                  />
          </Form.Group>
          {errors?.oth_production_pos_2_email?.map((message, idx) => (
            <Alert variant="warning" key={idx}>
              {message}
            </Alert>
          ))}
          </Col>
          <Col xs={4} className="d-flex justify-content-center p-0 p-md-2">
          <Form.Group controlId="oth_production_pos_2_phone" className={`${styles.Width} `}  >
              <Form.Label className={`${styles.Bold}`} >Phone</Form.Label>
              <Form.Control 
              className={`${styles.Input}`}
              type="text"
              name="oth_production_pos_2_phone"
              value={oth_production_pos_2_phone}
              onChange={handleChange}
                  />
          </Form.Group>
          {errors?.oth_production_pos_2_phone?.map((message, idx) => (
            <Alert variant="warning" key={idx}>
              {message}
            </Alert>
          ))}
          </Col>
      </Row>
      <hr/>
      {/* Additional Production Position 3 */}
      <h5 className="mt-1" >Additional Production Position 3</h5> 
      <Row>
          <Col xs={{span: 4, offset: 4 }} className="d-flex justify-content-center p-0 p-md-2">
          <Form.Group controlId="oth_production_pos_3_job" className={`${styles.Width} `}  >
              <Form.Label className={`${styles.Bold} `} >Position</Form.Label>
              <Form.Control 
              className={`${styles.Input}`}
              type="text"
              name="oth_production_pos_3_job"
              value={oth_production_pos_3_job}
              onChange={handleChange}
                  />
          </Form.Group>
          {errors?.oth_production_pos_3_job?.map((message, idx) => (
            <Alert variant="warning" key={idx}>
              {message}
            </Alert>
          ))}
          </Col>
      </Row>
      <Row>
          <Col xs={4} className="d-flex justify-content-center p-0 p-md-2">
          <Form.Group controlId="oth_production_pos_3_name" className={`${styles.Width} `}  >
              <Form.Label className={`${styles.Bold} `} >Name</Form.Label>
              <Form.Control 
              className={`${styles.Input}`}
              type="text"
              name="oth_production_pos_3_name"
              value={oth_production_pos_3_name}
              onChange={handleChange}
                  />
          </Form.Group>
          {errors?.oth_production_pos_3_name?.map((message, idx) => (
            <Alert variant="warning" key={idx}>
              {message}
            </Alert>
          ))}
          </Col>
          <Col xs={4} className="d-flex justify-content-center p-0 p-md-2">
          <Form.Group controlId="oth_production_pos_3_email" className={`${styles.Width} `}  >
              <Form.Label className={`${styles.Bold}`} >Email</Form.Label>
              <Form.Control 
              className={`${styles.Input}`}
              type="text"
              name="oth_production_pos_3_email"
              value={oth_production_pos_3_email}
              onChange={handleChange}
                  />
          </Form.Group>
          {errors?.oth_production_pos_3_email?.map((message, idx) => (
            <Alert variant="warning" key={idx}>
              {message}
            </Alert>
          ))}
          </Col>
          <Col xs={4} className="d-flex justify-content-center p-0 p-md-2">
          <Form.Group controlId="oth_production_pos_3_phone" className={`${styles.Width} `}  >
              <Form.Label className={`${styles.Bold}`} >Phone</Form.Label>
              <Form.Control 
              className={`${styles.Input}`}
              type="text"
              name="oth_production_pos_3_phone"
              value={oth_production_pos_3_phone}
              onChange={handleChange}
                  />
          </Form.Group>
          {errors?.oth_production_pos_3_phone?.map((message, idx) => (
            <Alert variant="warning" key={idx}>
              {message}
            </Alert>
          ))}
          </Col>
      </Row>
      <hr/>
      {/* Additional Production Position 4 */}
      <h5 className="mt-1" >Additional Production Position 4</h5> 
      <Row>
          <Col xs={{span: 4, offset: 4 }} className="d-flex justify-content-center p-0 p-md-2">
          <Form.Group controlId="oth_production_pos_4_job" className={`${styles.Width} `}  >
              <Form.Label className={`${styles.Bold} `} >Position</Form.Label>
              <Form.Control 
              className={`${styles.Input}`}
              type="text"
              name="oth_production_pos_4_job"
              value={oth_production_pos_4_job}
              onChange={handleChange}
                  />
          </Form.Group>
          {errors?.oth_production_pos_4_job?.map((message, idx) => (
            <Alert variant="warning" key={idx}>
              {message}
            </Alert>
          ))}
          </Col>
      </Row>
      <Row>
          <Col xs={4} className="d-flex justify-content-center p-0 p-md-2">
          <Form.Group controlId="oth_production_pos_4_name" className={`${styles.Width} `}  >
              <Form.Label className={`${styles.Bold} `} >Name</Form.Label>
              <Form.Control 
              className={`${styles.Input}`}
              type="text"
              name="oth_production_pos_4_name"
              value={oth_production_pos_4_name}
              onChange={handleChange}
                  />
          </Form.Group>
          {errors?.oth_production_pos_4_name?.map((message, idx) => (
            <Alert variant="warning" key={idx}>
              {message}
            </Alert>
          ))}
          </Col>
          <Col xs={4} className="d-flex justify-content-center p-0 p-md-2">
          <Form.Group controlId="oth_production_pos_4_email" className={`${styles.Width} `}  >
              <Form.Label className={`${styles.Bold}`} >Email</Form.Label>
              <Form.Control 
              className={`${styles.Input}`}
              type="text"
              name="oth_production_pos_4_email"
              value={oth_production_pos_4_email}
              onChange={handleChange}
                  />
          </Form.Group>
          {errors?.oth_production_pos_4_email?.map((message, idx) => (
            <Alert variant="warning" key={idx}>
              {message}
            </Alert>
          ))}
          </Col>
          <Col xs={4} className="d-flex justify-content-center p-0 p-md-2">
          <Form.Group controlId="oth_production_pos_4_phone" className={`${styles.Width} `}  >
              <Form.Label className={`${styles.Bold}`} >Phone</Form.Label>
              <Form.Control 
              className={`${styles.Input}`}
              type="text"
              name="oth_production_pos_4_phone"
              value={oth_production_pos_4_phone}
              onChange={handleChange}
                  />
          </Form.Group>
          {errors?.oth_production_pos_4_phone?.map((message, idx) => (
            <Alert variant="warning" key={idx}>
              {message}
            </Alert>
          ))}
          </Col>
      </Row>
      <hr/>
      {/* Additional Production Position 5 */}
      <h5 className="mt-1" >Additional Production Position 5</h5> 
      <Row>
          <Col xs={{span: 4, offset: 4 }} className="d-flex justify-content-center p-0 p-md-2">
          <Form.Group controlId="oth_production_pos_5_job" className={`${styles.Width} `}  >
              <Form.Label className={`${styles.Bold} `} >Position</Form.Label>
              <Form.Control 
              className={`${styles.Input}`}
              type="text"
              name="oth_production_pos_5_job"
              value={oth_production_pos_5_job}
              onChange={handleChange}
                  />
          </Form.Group>
          {errors?.oth_production_pos_5_job?.map((message, idx) => (
            <Alert variant="warning" key={idx}>
              {message}
            </Alert>
          ))}
          </Col>
      </Row>
      <Row>
          <Col xs={4} className="d-flex justify-content-center p-0 p-md-2">
          <Form.Group controlId="oth_production_pos_5_name" className={`${styles.Width} `}  >
              <Form.Label className={`${styles.Bold} `} >Name</Form.Label>
              <Form.Control 
              className={`${styles.Input}`}
              type="text"
              name="oth_production_pos_5_name"
              value={oth_production_pos_5_name}
              onChange={handleChange}
                  />
          </Form.Group>
          {errors?.oth_production_pos_5_name?.map((message, idx) => (
            <Alert variant="warning" key={idx}>
              {message}
            </Alert>
          ))}
          </Col>
          <Col xs={4} className="d-flex justify-content-center p-0 p-md-2">
          <Form.Group controlId="oth_production_pos_5_email" className={`${styles.Width} `}  >
              <Form.Label className={`${styles.Bold}`} >Email</Form.Label>
              <Form.Control 
              className={`${styles.Input}`}
              type="text"
              name="oth_production_pos_5_email"
              value={oth_production_pos_5_email}
              onChange={handleChange}
                  />
          </Form.Group>
          {errors?.oth_production_pos_5_email?.map((message, idx) => (
            <Alert variant="warning" key={idx}>
              {message}
            </Alert>
          ))}
          </Col>
          <Col xs={4} className="d-flex justify-content-center p-0 p-md-2">
          <Form.Group controlId="oth_production_pos_5_phone" className={`${styles.Width} `}  >
              <Form.Label className={`${styles.Bold}`} >Phone</Form.Label>
              <Form.Control 
              className={`${styles.Input}`}
              type="text"
              name="oth_production_pos_5_phone"
              value={oth_production_pos_5_phone}
              onChange={handleChange}
                  />
          </Form.Group>
          {errors?.oth_production_pos_5_phone?.map((message, idx) => (
            <Alert variant="warning" key={idx}>
              {message}
            </Alert>
          ))}
          </Col>
      </Row>
      <hr/>
      </div>

      {/* ASSISTANT DIRECTORS */}
      <div>
      <h3 className={` my-3 py-1 ${styles.SubTitle }`}>ASSISTANT DIRECTORS</h3> 
      {/* 1st Assistant Director */}
      <h5 className="mt-1" >1st Assistant Director</h5> 
      <Row>
          <Col xs={4} className="d-flex justify-content-center p-0 p-md-2">
          <Form.Group controlId="ad_1_name" className={`${styles.Width} `}  >
              <Form.Label className={`${styles.Bold} `} >Name</Form.Label>
              <Form.Control 
              className={`${styles.Input}`}
              type="text"
              name="ad_1_name"
              value={ad_1_name}
              onChange={handleChange}
                  />
          </Form.Group>
          {errors?.ad_1_name?.map((message, idx) => (
            <Alert variant="warning" key={idx}>
              {message}
            </Alert>
          ))}
          </Col>
          <Col xs={4} className="d-flex justify-content-center p-0 p-md-2">
          <Form.Group controlId="ad_1_email" className={`${styles.Width} `}  >
              <Form.Label className={`${styles.Bold}`} >Email</Form.Label>
              <Form.Control 
              className={`${styles.Input}`}
              type="text"
              name="ad_1_email"
              value={ad_1_email}
              onChange={handleChange}
                  />
          </Form.Group>
          {errors?.ad_1_email?.map((message, idx) => (
            <Alert variant="warning" key={idx}>
              {message}
            </Alert>
          ))}
          </Col>
          <Col xs={4} className="d-flex justify-content-center p-0 p-md-2">
          <Form.Group controlId="ad_1_phone" className={`${styles.Width} `}  >
              <Form.Label className={`${styles.Bold}`} >Phone</Form.Label>
              <Form.Control 
              className={`${styles.Input}`}
              type="text"
              name="ad_1_phone"
              value={ad_1_phone}
              onChange={handleChange}
                  />
          </Form.Group>
          {errors?.ad_1_phone?.map((message, idx) => (
            <Alert variant="warning" key={idx}>
              {message}
            </Alert>
          ))}
          </Col>
      </Row>
      <hr/>
      {/* 2nd Assistant Director */}
      <h5 className="mt-1" >2nd Assistant Director</h5> 
      <Row>
          <Col xs={4} className="d-flex justify-content-center p-0 p-md-2">
          <Form.Group controlId="ad_2_name" className={`${styles.Width} `}  >
              <Form.Label className={`${styles.Bold} `} >Name</Form.Label>
              <Form.Control 
              className={`${styles.Input}`}
              type="text"
              name="ad_2_name"
              value={ad_2_name}
              onChange={handleChange}
                  />
          </Form.Group>
          {errors?.ad_2_name?.map((message, idx) => (
            <Alert variant="warning" key={idx}>
              {message}
            </Alert>
          ))}
          </Col>
          <Col xs={4} className="d-flex justify-content-center p-0 p-md-2">
          <Form.Group controlId="ad_2_email" className={`${styles.Width} `}  >
              <Form.Label className={`${styles.Bold}`} >Email</Form.Label>
              <Form.Control 
              className={`${styles.Input}`}
              type="text"
              name="ad_2_email"
              value={ad_2_email}
              onChange={handleChange}
                  />
          </Form.Group>
          {errors?.ad_2_email?.map((message, idx) => (
            <Alert variant="warning" key={idx}>
              {message}
            </Alert>
          ))}
          </Col>
          <Col xs={4} className="d-flex justify-content-center p-0 p-md-2">
          <Form.Group controlId="ad_2_phone" className={`${styles.Width} `}  >
              <Form.Label className={`${styles.Bold}`} >Phone</Form.Label>
              <Form.Control 
              className={`${styles.Input}`}
              type="text"
              name="ad_2_phone"
              value={ad_2_phone}
              onChange={handleChange}
                  />
          </Form.Group>
          {errors?.ad_2_phone?.map((message, idx) => (
            <Alert variant="warning" key={idx}>
              {message}
            </Alert>
          ))}
          </Col>
      </Row>
      <hr/>
      {/* 3rd Assistant Director */}
      <h5 className="mt-1" >3rd Assistant Director</h5> 
      <Row>
          <Col xs={4} className="d-flex justify-content-center p-0 p-md-2">
          <Form.Group controlId="ad_3_name" className={`${styles.Width} `}  >
              <Form.Label className={`${styles.Bold} `} >Name</Form.Label>
              <Form.Control 
              className={`${styles.Input}`}
              type="text"
              name="ad_3_name"
              value={ad_3_name}
              onChange={handleChange}
                  />
          </Form.Group>
          {errors?.ad_3_name?.map((message, idx) => (
            <Alert variant="warning" key={idx}>
              {message}
            </Alert>
          ))}
          </Col>
          <Col xs={4} className="d-flex justify-content-center p-0 p-md-2">
          <Form.Group controlId="ad_3_email" className={`${styles.Width} `}  >
              <Form.Label className={`${styles.Bold}`} >Email</Form.Label>
              <Form.Control 
              className={`${styles.Input}`}
              type="text"
              name="ad_3_email"
              value={ad_3_email}
              onChange={handleChange}
                  />
          </Form.Group>
          {errors?.ad_3_email?.map((message, idx) => (
            <Alert variant="warning" key={idx}>
              {message}
            </Alert>
          ))}
          </Col>
          <Col xs={4} className="d-flex justify-content-center p-0 p-md-2">
          <Form.Group controlId="ad_3_phone" className={`${styles.Width} `}  >
              <Form.Label className={`${styles.Bold}`} >Phone</Form.Label>
              <Form.Control 
              className={`${styles.Input}`}
              type="text"
              name="ad_3_phone"
              value={ad_3_phone}
              onChange={handleChange}
                  />
          </Form.Group>
          {errors?.ad_3_phone?.map((message, idx) => (
            <Alert variant="warning" key={idx}>
              {message}
            </Alert>
          ))}
          </Col>
      </Row>
      <hr/>
      {/* 4th Assistant Director */}
      <h5 className="mt-1" >4th Assistant Director</h5> 
      <Row>
          <Col xs={4} className="d-flex justify-content-center p-0 p-md-2">
          <Form.Group controlId="ad_4_name" className={`${styles.Width} `}  >
              <Form.Label className={`${styles.Bold} `} >Name</Form.Label>
              <Form.Control 
              className={`${styles.Input}`}
              type="text"
              name="ad_4_name"
              value={ad_4_name}
              onChange={handleChange}
                  />
          </Form.Group>
          {errors?.ad_4_name?.map((message, idx) => (
            <Alert variant="warning" key={idx}>
              {message}
            </Alert>
          ))}
          </Col>
          <Col xs={4} className="d-flex justify-content-center p-0 p-md-2">
          <Form.Group controlId="ad_4_email" className={`${styles.Width} `}  >
              <Form.Label className={`${styles.Bold}`} >Email</Form.Label>
              <Form.Control 
              className={`${styles.Input}`}
              type="text"
              name="ad_4_email"
              value={ad_4_email}
              onChange={handleChange}
                  />
          </Form.Group>
          {errors?.ad_4_email?.map((message, idx) => (
            <Alert variant="warning" key={idx}>
              {message}
            </Alert>
          ))}
          </Col>
          <Col xs={4} className="d-flex justify-content-center p-0 p-md-2">
          <Form.Group controlId="ad_4_phone" className={`${styles.Width} `}  >
              <Form.Label className={`${styles.Bold}`} >Phone</Form.Label>
              <Form.Control 
              className={`${styles.Input}`}
              type="text"
              name="ad_4_phone"
              value={ad_4_phone}
              onChange={handleChange}
                  />
          </Form.Group>
          {errors?.ad_4_phone?.map((message, idx) => (
            <Alert variant="warning" key={idx}>
              {message}
            </Alert>
          ))}
          </Col>
      </Row>
      <hr/>
      {/* 5th Assistant Director */}
      <h5 className="mt-1" >5th Assistant Director</h5> 
      <Row>
          <Col xs={4} className="d-flex justify-content-center p-0 p-md-2">
          <Form.Group controlId="ad_5_name" className={`${styles.Width} `}  >
              <Form.Label className={`${styles.Bold} `} >Name</Form.Label>
              <Form.Control 
              className={`${styles.Input}`}
              type="text"
              name="ad_5_name"
              value={ad_5_name}
              onChange={handleChange}
                  />
          </Form.Group>
          {errors?.ad_5_name?.map((message, idx) => (
            <Alert variant="warning" key={idx}>
              {message}
            </Alert>
          ))}
          </Col>
          <Col xs={4} className="d-flex justify-content-center p-0 p-md-2">
          <Form.Group controlId="ad_5_email" className={`${styles.Width} `}  >
              <Form.Label className={`${styles.Bold}`} >Email</Form.Label>
              <Form.Control 
              className={`${styles.Input}`}
              type="text"
              name="ad_5_email"
              value={ad_5_email}
              onChange={handleChange}
                  />
          </Form.Group>
          {errors?.ad_5_email?.map((message, idx) => (
            <Alert variant="warning" key={idx}>
              {message}
            </Alert>
          ))}
          </Col>
          <Col xs={4} className="d-flex justify-content-center p-0 p-md-2">
          <Form.Group controlId="ad_5_phone" className={`${styles.Width} `}  >
              <Form.Label className={`${styles.Bold}`} >Phone</Form.Label>
              <Form.Control 
              className={`${styles.Input}`}
              type="text"
              name="ad_5_phone"
              value={ad_5_phone}
              onChange={handleChange}
                  />
          </Form.Group>
          {errors?.ad_5_phone?.map((message, idx) => (
            <Alert variant="warning" key={idx}>
              {message}
            </Alert>
          ))}
          </Col>
      </Row>
      <hr/>
      {/* Production Assistant 1 */}
      <h5 className="mt-1" >Production Assistant 1 </h5> 
      <Row>
          <Col xs={4} className="d-flex justify-content-center p-0 p-md-2">
          <Form.Group controlId="pro_assistant_1_name" className={`${styles.Width} `}  >
              <Form.Label className={`${styles.Bold} `} >Name</Form.Label>
              <Form.Control 
              className={`${styles.Input}`}
              type="text"
              name="pro_assistant_1_name"
              value={pro_assistant_1_name}
              onChange={handleChange}
                  />
          </Form.Group>
          {errors?.pro_assistant_1_name?.map((message, idx) => (
            <Alert variant="warning" key={idx}>
              {message}
            </Alert>
          ))}
          </Col>
          <Col xs={4} className="d-flex justify-content-center p-0 p-md-2">
          <Form.Group controlId="pro_assistant_1_email" className={`${styles.Width} `}  >
              <Form.Label className={`${styles.Bold}`} >Email</Form.Label>
              <Form.Control 
              className={`${styles.Input}`}
              type="text"
              name="pro_assistant_1_email"
              value={pro_assistant_1_email}
              onChange={handleChange}
                  />
          </Form.Group>
          {errors?.pro_assistant_1_email?.map((message, idx) => (
            <Alert variant="warning" key={idx}>
              {message}
            </Alert>
          ))}
          </Col>
          <Col xs={4} className="d-flex justify-content-center p-0 p-md-2">
          <Form.Group controlId="pro_assistant_1_phone" className={`${styles.Width} `}  >
              <Form.Label className={`${styles.Bold}`} >Phone</Form.Label>
              <Form.Control 
              className={`${styles.Input}`}
              type="text"
              name="pro_assistant_1_phone"
              value={pro_assistant_1_phone}
              onChange={handleChange}
                  />
          </Form.Group>
          {errors?.pro_assistant_1_phone?.map((message, idx) => (
            <Alert variant="warning" key={idx}>
              {message}
            </Alert>
          ))}
          </Col>
      </Row>
      <hr/>
      {/* Production Assistant 2 */}
      <h5 className="mt-1" >Production Assistant 2 </h5> 
      <Row>
          <Col xs={4} className="d-flex justify-content-center p-0 p-md-2">
          <Form.Group controlId="pro_assistant_2_name" className={`${styles.Width} `}  >
              <Form.Label className={`${styles.Bold} `} >Name</Form.Label>
              <Form.Control 
              className={`${styles.Input}`}
              type="text"
              name="pro_assistant_2_name"
              value={pro_assistant_2_name}
              onChange={handleChange}
                  />
          </Form.Group>
          {errors?.pro_assistant_2_name?.map((message, idx) => (
            <Alert variant="warning" key={idx}>
              {message}
            </Alert>
          ))}
          </Col>
          <Col xs={4} className="d-flex justify-content-center p-0 p-md-2">
          <Form.Group controlId="pro_assistant_2_email" className={`${styles.Width} `}  >
              <Form.Label className={`${styles.Bold}`} >Email</Form.Label>
              <Form.Control 
              className={`${styles.Input}`}
              type="text"
              name="pro_assistant_2_email"
              value={pro_assistant_2_email}
              onChange={handleChange}
                  />
          </Form.Group>
          {errors?.pro_assistant_2_email?.map((message, idx) => (
            <Alert variant="warning" key={idx}>
              {message}
            </Alert>
          ))}
          </Col>
          <Col xs={4} className="d-flex justify-content-center p-0 p-md-2">
          <Form.Group controlId="pro_assistant_2_phone" className={`${styles.Width} `}  >
              <Form.Label className={`${styles.Bold}`} >Phone</Form.Label>
              <Form.Control 
              className={`${styles.Input}`}
              type="text"
              name="pro_assistant_2_phone"
              value={pro_assistant_2_phone}
              onChange={handleChange}
                  />
          </Form.Group>
          {errors?.pro_assistant_2_phone?.map((message, idx) => (
            <Alert variant="warning" key={idx}>
              {message}
            </Alert>
          ))}
          </Col>
      </Row>
      <hr/>
      {/* Production Assistant 3 */}
      <h5 className="mt-1" >Production Assistant 3 </h5> 
      <Row>
          <Col xs={4} className="d-flex justify-content-center p-0 p-md-2">
          <Form.Group controlId="pro_assistant_3_name" className={`${styles.Width} `}  >
              <Form.Label className={`${styles.Bold} `} >Name</Form.Label>
              <Form.Control 
              className={`${styles.Input}`}
              type="text"
              name="pro_assistant_3_name"
              value={pro_assistant_3_name}
              onChange={handleChange}
                  />
          </Form.Group>
          {errors?.pro_assistant_3_name?.map((message, idx) => (
            <Alert variant="warning" key={idx}>
              {message}
            </Alert>
          ))}
          </Col>
          <Col xs={4} className="d-flex justify-content-center p-0 p-md-2">
          <Form.Group controlId="pro_assistant_3_email" className={`${styles.Width} `}  >
              <Form.Label className={`${styles.Bold}`} >Email</Form.Label>
              <Form.Control 
              className={`${styles.Input}`}
              type="text"
              name="pro_assistant_3_email"
              value={pro_assistant_3_email}
              onChange={handleChange}
                  />
          </Form.Group>
          {errors?.pro_assistant_3_email?.map((message, idx) => (
            <Alert variant="warning" key={idx}>
              {message}
            </Alert>
          ))}
          </Col>
          <Col xs={4} className="d-flex justify-content-center p-0 p-md-2">
          <Form.Group controlId="pro_assistant_3_phone" className={`${styles.Width} `}  >
              <Form.Label className={`${styles.Bold}`} >Phone</Form.Label>
              <Form.Control 
              className={`${styles.Input}`}
              type="text"
              name="pro_assistant_3_phone"
              value={pro_assistant_3_phone}
              onChange={handleChange}
                  />
          </Form.Group>
          {errors?.pro_assistant_3_phone?.map((message, idx) => (
            <Alert variant="warning" key={idx}>
              {message}
            </Alert>
          ))}
          </Col>
      </Row>
      <hr/>
      {/* Production Assistant 4 */}
      <h5 className="mt-1" >Production Assistant 4 </h5> 
      <Row>
          <Col xs={4} className="d-flex justify-content-center p-0 p-md-2">
          <Form.Group controlId="pro_assistant_4_name" className={`${styles.Width} `}  >
              <Form.Label className={`${styles.Bold} `} >Name</Form.Label>
              <Form.Control 
              className={`${styles.Input}`}
              type="text"
              name="pro_assistant_4_name"
              value={pro_assistant_4_name}
              onChange={handleChange}
                  />
          </Form.Group>
          {errors?.pro_assistant_4_name?.map((message, idx) => (
            <Alert variant="warning" key={idx}>
              {message}
            </Alert>
          ))}
          </Col>
          <Col xs={4} className="d-flex justify-content-center p-0 p-md-2">
          <Form.Group controlId="pro_assistant_4_email" className={`${styles.Width} `}  >
              <Form.Label className={`${styles.Bold}`} >Email</Form.Label>
              <Form.Control 
              className={`${styles.Input}`}
              type="text"
              name="pro_assistant_4_email"
              value={pro_assistant_4_email}
              onChange={handleChange}
                  />
          </Form.Group>
          {errors?.pro_assistant_4_email?.map((message, idx) => (
            <Alert variant="warning" key={idx}>
              {message}
            </Alert>
          ))}
          </Col>
          <Col xs={4} className="d-flex justify-content-center p-0 p-md-2">
          <Form.Group controlId="pro_assistant_4_phone" className={`${styles.Width} `}  >
              <Form.Label className={`${styles.Bold}`} >Phone</Form.Label>
              <Form.Control 
              className={`${styles.Input}`}
              type="text"
              name="pro_assistant_4_phone"
              value={pro_assistant_4_phone}
              onChange={handleChange}
                  />
          </Form.Group>
          {errors?.pro_assistant_4_phone?.map((message, idx) => (
            <Alert variant="warning" key={idx}>
              {message}
            </Alert>
          ))}
          </Col>
      </Row>
      <hr/>
      {/* Production Assistant 5 */}
      <h5 className="mt-1" >Production Assistant 5 </h5> 
      <Row>
          <Col xs={4} className="d-flex justify-content-center p-0 p-md-2">
          <Form.Group controlId="pro_assistant_5_name" className={`${styles.Width} `}  >
              <Form.Label className={`${styles.Bold} `} >Name</Form.Label>
              <Form.Control 
              className={`${styles.Input}`}
              type="text"
              name="pro_assistant_5_name"
              value={pro_assistant_5_name}
              onChange={handleChange}
                  />
          </Form.Group>
          {errors?.pro_assistant_5_name?.map((message, idx) => (
            <Alert variant="warning" key={idx}>
              {message}
            </Alert>
          ))}
          </Col>
          <Col xs={4} className="d-flex justify-content-center p-0 p-md-2">
          <Form.Group controlId="pro_assistant_5_email" className={`${styles.Width} `}  >
              <Form.Label className={`${styles.Bold}`} >Email</Form.Label>
              <Form.Control 
              className={`${styles.Input}`}
              type="text"
              name="pro_assistant_5_email"
              value={pro_assistant_5_email}
              onChange={handleChange}
                  />
          </Form.Group>
          {errors?.pro_assistant_5_email?.map((message, idx) => (
            <Alert variant="warning" key={idx}>
              {message}
            </Alert>
          ))}
          </Col>
          <Col xs={4} className="d-flex justify-content-center p-0 p-md-2">
          <Form.Group controlId="pro_assistant_5_phone" className={`${styles.Width} `}  >
              <Form.Label className={`${styles.Bold}`} >Phone</Form.Label>
              <Form.Control 
              className={`${styles.Input}`}
              type="text"
              name="pro_assistant_5_phone"
              value={pro_assistant_5_phone}
              onChange={handleChange}
                  />
          </Form.Group>
          {errors?.pro_assistant_5_phone?.map((message, idx) => (
            <Alert variant="warning" key={idx}>
              {message}
            </Alert>
          ))}
          </Col>
      </Row>
      <hr/>
      </div>

      {/* CAMERA */}
      <div>
      <h3 className={` my-3 py-1 ${styles.SubTitle }`} >CAMERA</h3> 
      {/* Director of Photography */}
      <h5 className="mt-1" >Director of Photography</h5> 
      <Row>
          <Col xs={4} className="d-flex justify-content-center p-0 p-md-2">
          <Form.Group controlId="dop_name" className={`${styles.Width} `}  >
              <Form.Label className={`${styles.Bold} `} >Name</Form.Label>
              <Form.Control 
              className={`${styles.Input}`}
              type="text"
              name="dop_name"
              value={dop_name}
              onChange={handleChange}
                  />
          </Form.Group>
          {errors?.dop_name?.map((message, idx) => (
            <Alert variant="warning" key={idx}>
              {message}
            </Alert>
          ))}
          </Col>
          <Col xs={4} className="d-flex justify-content-center p-0 p-md-2">
          <Form.Group controlId="dop_email" className={`${styles.Width} `}  >
              <Form.Label className={`${styles.Bold}`} >Email</Form.Label>
              <Form.Control 
              className={`${styles.Input}`}
              type="text"
              name="dop_email"
              value={dop_email}
              onChange={handleChange}
                  />
          </Form.Group>
          {errors?.dop_email?.map((message, idx) => (
            <Alert variant="warning" key={idx}>
              {message}
            </Alert>
          ))}
          </Col>
          <Col xs={4} className="d-flex justify-content-center p-0 p-md-2">
          <Form.Group controlId="dop_phone" className={`${styles.Width} `}  >
              <Form.Label className={`${styles.Bold}`} >Phone</Form.Label>
              <Form.Control 
              className={`${styles.Input}`}
              type="text"
              name="dop_phone"
              value={dop_phone}
              onChange={handleChange}
                  />
          </Form.Group>
          {errors?.dop_phone?.map((message, idx) => (
            <Alert variant="warning" key={idx}>
              {message}
            </Alert>
          ))}
          </Col>
      </Row>
      <hr/>
      {/* Camera Operator */}
      <h5 className="mt-1" >Camera Operator</h5> 
      <Row>
          <Col xs={4} className="d-flex justify-content-center p-0 p-md-2">
          <Form.Group controlId="camera_operator_name" className={`${styles.Width} `}  >
              <Form.Label className={`${styles.Bold} `} >Name</Form.Label>
              <Form.Control 
              className={`${styles.Input}`}
              type="text"
              name="camera_operator_name"
              value={camera_operator_name}
              onChange={handleChange}
                  />
          </Form.Group>
          {errors?.camera_operator_name?.map((message, idx) => (
            <Alert variant="warning" key={idx}>
              {message}
            </Alert>
          ))}
          </Col>
          <Col xs={4} className="d-flex justify-content-center p-0 p-md-2">
          <Form.Group controlId="camera_operator_email" className={`${styles.Width} `}  >
              <Form.Label className={`${styles.Bold}`} >Email</Form.Label>
              <Form.Control 
              className={`${styles.Input}`}
              type="text"
              name="camera_operator_email"
              value={camera_operator_email}
              onChange={handleChange}
                  />
          </Form.Group>
          {errors?.camera_operator_email?.map((message, idx) => (
            <Alert variant="warning" key={idx}>
              {message}
            </Alert>
          ))}
          </Col>
          <Col xs={4} className="d-flex justify-content-center p-0 p-md-2">
          <Form.Group controlId="camera_operator_phone" className={`${styles.Width} `}  >
              <Form.Label className={`${styles.Bold}`} >Phone</Form.Label>
              <Form.Control 
              className={`${styles.Input}`}
              type="text"
              name="camera_operator_phone"
              value={camera_operator_phone}
              onChange={handleChange}
                  />
          </Form.Group>
          {errors?.camera_operator_phone?.map((message, idx) => (
            <Alert variant="warning" key={idx}>
              {message}
            </Alert>
          ))}
          </Col>
      </Row>
      <hr/>
      {/* 1st Assistant Camera */}
      <h5 className="mt-1" >1st Assistant Camera</h5> 
      <Row>
          <Col xs={4} className="d-flex justify-content-center p-0 p-md-2">
          <Form.Group controlId="camera_ass_1_name" className={`${styles.Width} `}  >
              <Form.Label className={`${styles.Bold} `} >Name</Form.Label>
              <Form.Control 
              className={`${styles.Input}`}
              type="text"
              name="camera_ass_1_name"
              value={camera_ass_1_name}
              onChange={handleChange}
                  />
          </Form.Group>
          {errors?.camera_ass_1_name?.map((message, idx) => (
            <Alert variant="warning" key={idx}>
              {message}
            </Alert>
          ))}
          </Col>
          <Col xs={4} className="d-flex justify-content-center p-0 p-md-2">
          <Form.Group controlId="camera_ass_1_email" className={`${styles.Width} `}  >
              <Form.Label className={`${styles.Bold}`} >Email</Form.Label>
              <Form.Control 
              className={`${styles.Input}`}
              type="text"
              name="camera_ass_1_email"
              value={camera_ass_1_email}
              onChange={handleChange}
                  />
          </Form.Group>
          {errors?.camera_ass_1_email?.map((message, idx) => (
            <Alert variant="warning" key={idx}>
              {message}
            </Alert>
          ))}
          </Col>
          <Col xs={4} className="d-flex justify-content-center p-0 p-md-2">
          <Form.Group controlId="camera_ass_1_phone" className={`${styles.Width} `}  >
              <Form.Label className={`${styles.Bold}`} >Phone</Form.Label>
              <Form.Control 
              className={`${styles.Input}`}
              type="text"
              name="camera_ass_1_phone"
              value={camera_ass_1_phone}
              onChange={handleChange}
                  />
          </Form.Group>
          {errors?.camera_ass_1_phone?.map((message, idx) => (
            <Alert variant="warning" key={idx}>
              {message}
            </Alert>
          ))}
          </Col>
      </Row>
      <hr/>
      {/* 2nd Assistant Camera */}
      <h5 className="mt-1" >2nd Assistant Camera</h5> 
      <Row>
          <Col xs={4} className="d-flex justify-content-center p-0 p-md-2">
          <Form.Group controlId="camera_ass_2_name" className={`${styles.Width} `}  >
              <Form.Label className={`${styles.Bold} `} >Name</Form.Label>
              <Form.Control 
              className={`${styles.Input}`}
              type="text"
              name="camera_ass_2_name"
              value={camera_ass_2_name}
              onChange={handleChange}
                  />
          </Form.Group>
          {errors?.camera_ass_2_name?.map((message, idx) => (
            <Alert variant="warning" key={idx}>
              {message}
            </Alert>
          ))}
          </Col>
          <Col xs={4} className="d-flex justify-content-center p-0 p-md-2">
          <Form.Group controlId="camera_ass_2_email" className={`${styles.Width} `}  >
              <Form.Label className={`${styles.Bold}`} >Email</Form.Label>
              <Form.Control 
              className={`${styles.Input}`}
              type="text"
              name="camera_ass_2_email"
              value={camera_ass_2_email}
              onChange={handleChange}
                  />
          </Form.Group>
          {errors?.camera_ass_2_email?.map((message, idx) => (
            <Alert variant="warning" key={idx}>
              {message}
            </Alert>
          ))}
          </Col>
          <Col xs={4} className="d-flex justify-content-center p-0 p-md-2">
          <Form.Group controlId="camera_ass_2_phone" className={`${styles.Width} `}  >
              <Form.Label className={`${styles.Bold}`} >Phone</Form.Label>
              <Form.Control 
              className={`${styles.Input}`}
              type="text"
              name="camera_ass_2_phone"
              value={camera_ass_2_phone}
              onChange={handleChange}
                  />
          </Form.Group>
          {errors?.camera_ass_2_phone?.map((message, idx) => (
            <Alert variant="warning" key={idx}>
              {message}
            </Alert>
          ))}
          </Col>
      </Row>
      <hr/>
      {/* DIT */}
      <h5 className="mt-1" >DIT</h5> 
      <Row>
          <Col xs={4} className="d-flex justify-content-center p-0 p-md-2">
          <Form.Group controlId="dit_name" className={`${styles.Width} `}  >
              <Form.Label className={`${styles.Bold} `} >Name</Form.Label>
              <Form.Control 
              className={`${styles.Input}`}
              type="text"
              name="dit_name"
              value={dit_name}
              onChange={handleChange}
                  />
          </Form.Group>
          {errors?.dit_name?.map((message, idx) => (
            <Alert variant="warning" key={idx}>
              {message}
            </Alert>
          ))}
          </Col>
          <Col xs={4} className="d-flex justify-content-center p-0 p-md-2">
          <Form.Group controlId="dit_email" className={`${styles.Width} `}  >
              <Form.Label className={`${styles.Bold}`} >Email</Form.Label>
              <Form.Control 
              className={`${styles.Input}`}
              type="text"
              name="dit_email"
              value={dit_email}
              onChange={handleChange}
                  />
          </Form.Group>
          {errors?.dit_email?.map((message, idx) => (
            <Alert variant="warning" key={idx}>
              {message}
            </Alert>
          ))}
          </Col>
          <Col xs={4} className="d-flex justify-content-center p-0 p-md-2">
          <Form.Group controlId="dit_phone" className={`${styles.Width} `}  >
              <Form.Label className={`${styles.Bold}`} >Phone</Form.Label>
              <Form.Control 
              className={`${styles.Input}`}
              type="text"
              name="dit_phone"
              value={dit_phone}
              onChange={handleChange}
                  />
          </Form.Group>
          {errors?.dit_phone?.map((message, idx) => (
            <Alert variant="warning" key={idx}>
              {message}
            </Alert>
          ))}
          </Col>
      </Row>
      <hr/>
      {/* Steadicam */}
      <h5 className="mt-1" >Steadicam Operator</h5> 
      <Row>
          <Col xs={4} className="d-flex justify-content-center p-0 p-md-2">
          <Form.Group controlId="steadicam_name" className={`${styles.Width} `}  >
              <Form.Label className={`${styles.Bold} `} >Name</Form.Label>
              <Form.Control 
              className={`${styles.Input}`}
              type="text"
              name="steadicam_name"
              value={steadicam_name}
              onChange={handleChange}
                  />
          </Form.Group>
          {errors?.steadicam_name?.map((message, idx) => (
            <Alert variant="warning" key={idx}>
              {message}
            </Alert>
          ))}
          </Col>
          <Col xs={4} className="d-flex justify-content-center p-0 p-md-2">
          <Form.Group controlId="steadicam_email" className={`${styles.Width} `}  >
              <Form.Label className={`${styles.Bold}`} >Email</Form.Label>
              <Form.Control 
              className={`${styles.Input}`}
              type="text"
              name="steadicam_email"
              value={steadicam_email}
              onChange={handleChange}
                  />
          </Form.Group>
          {errors?.steadicam_email?.map((message, idx) => (
            <Alert variant="warning" key={idx}>
              {message}
            </Alert>
          ))}
          </Col>
          <Col xs={4} className="d-flex justify-content-center p-0 p-md-2">
          <Form.Group controlId="steadicam_phone" className={`${styles.Width} `}  >
              <Form.Label className={`${styles.Bold}`} >Phone</Form.Label>
              <Form.Control 
              className={`${styles.Input}`}
              type="text"
              name="steadicam_phone"
              value={steadicam_phone}
              onChange={handleChange}
                  />
          </Form.Group>
          {errors?.steadicam_phone?.map((message, idx) => (
            <Alert variant="warning" key={idx}>
              {message}
            </Alert>
          ))}
          </Col>
      </Row>
      <hr/>
      {/* Camera PA */}
      <h5 className="mt-1" >Camera PA </h5> 
      <Row>
          <Col xs={4} className="d-flex justify-content-center p-0 p-md-2">
          <Form.Group controlId="camera_pa_name" className={`${styles.Width} `}  >
              <Form.Label className={`${styles.Bold} `} >Name</Form.Label>
              <Form.Control 
              className={`${styles.Input}`}
              type="text"
              name="camera_pa_name"
              value={camera_pa_name}
              onChange={handleChange}
                  />
          </Form.Group>
          {errors?.camera_pa_name?.map((message, idx) => (
            <Alert variant="warning" key={idx}>
              {message}
            </Alert>
          ))}
          </Col>
          <Col xs={4} className="d-flex justify-content-center p-0 p-md-2">
          <Form.Group controlId="camera_pa_email" className={`${styles.Width} `}  >
              <Form.Label className={`${styles.Bold}`} >Email</Form.Label>
              <Form.Control 
              className={`${styles.Input}`}
              type="text"
              name="camera_pa_email"
              value={camera_pa_email}
              onChange={handleChange}
                  />
          </Form.Group>
          {errors?.camera_pa_email?.map((message, idx) => (
            <Alert variant="warning" key={idx}>
              {message}
            </Alert>
          ))}
          </Col>
          <Col xs={4} className="d-flex justify-content-center p-0 p-md-2">
          <Form.Group controlId="camera_pa_phone" className={`${styles.Width} `}  >
              <Form.Label className={`${styles.Bold}`} >Phone</Form.Label>
              <Form.Control 
              className={`${styles.Input}`}
              type="text"
              name="camera_pa_phone"
              value={camera_pa_phone}
              onChange={handleChange}
                  />
          </Form.Group>
          {errors?.camera_pa_phone?.map((message, idx) => (
            <Alert variant="warning" key={idx}>
              {message}
            </Alert>
          ))}
          </Col>
      </Row>
      <hr/>
      {/* Additional Camera Position 1 */}
      <h5 className="mt-1" >Additional Camera Position 1</h5> 
      <Row>
          <Col xs={{span: 4, offset: 4 }} className="d-flex justify-content-center p-0 p-md-2">
          <Form.Group controlId="oth_camera_pos_1_job" className={`${styles.Width} `}  >
              <Form.Label className={`${styles.Bold} `} >Position</Form.Label>
              <Form.Control 
              className={`${styles.Input}`}
              type="text"
              name="oth_camera_pos_1_job"
              value={oth_camera_pos_1_job}
              onChange={handleChange}
                  />
          </Form.Group>
          {errors?.oth_camera_pos_1_job?.map((message, idx) => (
            <Alert variant="warning" key={idx}>
              {message}
            </Alert>
          ))}
          </Col>
      </Row>
      <Row>
          <Col xs={4} className="d-flex justify-content-center p-0 p-md-2">
          <Form.Group controlId="oth_camera_pos_1_name" className={`${styles.Width} `}  >
              <Form.Label className={`${styles.Bold} `} >Name</Form.Label>
              <Form.Control 
              className={`${styles.Input}`}
              type="text"
              name="oth_camera_pos_1_name"
              value={oth_camera_pos_1_name}
              onChange={handleChange}
                  />
          </Form.Group>
          {errors?.oth_camera_pos_1_name?.map((message, idx) => (
            <Alert variant="warning" key={idx}>
              {message}
            </Alert>
          ))}
          </Col>
          <Col xs={4} className="d-flex justify-content-center p-0 p-md-2">
          <Form.Group controlId="oth_camera_pos_1_email" className={`${styles.Width} `}  >
              <Form.Label className={`${styles.Bold}`} >Email</Form.Label>
              <Form.Control 
              className={`${styles.Input}`}
              type="text"
              name="oth_camera_pos_1_email"
              value={oth_camera_pos_1_email}
              onChange={handleChange}
                  />
          </Form.Group>
          {errors?.oth_camera_pos_1_email?.map((message, idx) => (
            <Alert variant="warning" key={idx}>
              {message}
            </Alert>
          ))}
          </Col>
          <Col xs={4} className="d-flex justify-content-center p-0 p-md-2">
          <Form.Group controlId="oth_camera_pos_1_phone" className={`${styles.Width} `}  >
              <Form.Label className={`${styles.Bold}`} >Phone</Form.Label>
              <Form.Control 
              className={`${styles.Input}`}
              type="text"
              name="oth_camera_pos_1_phone"
              value={oth_camera_pos_1_phone}
              onChange={handleChange}
                  />
          </Form.Group>
          {errors?.oth_camera_pos_1_phone?.map((message, idx) => (
            <Alert variant="warning" key={idx}>
              {message}
            </Alert>
          ))}
          </Col>
      </Row>
      <hr/>
      {/* Additional Camera Position 2 */}
      <h5 className="mt-1" >Additional Camera Position 2</h5> 
      <Row>
          <Col xs={{span: 4, offset: 4 }} className="d-flex justify-content-center p-0 p-md-2">
          <Form.Group controlId="oth_camera_pos_2_job" className={`${styles.Width} `}  >
              <Form.Label className={`${styles.Bold} `} >Position</Form.Label>
              <Form.Control 
              className={`${styles.Input}`}
              type="text"
              name="oth_camera_pos_2_job"
              value={oth_camera_pos_2_job}
              onChange={handleChange}
                  />
          </Form.Group>
          {errors?.oth_camera_pos_2_job?.map((message, idx) => (
            <Alert variant="warning" key={idx}>
              {message}
            </Alert>
          ))}
          </Col>
      </Row>
      <Row>
          <Col xs={4} className="d-flex justify-content-center p-0 p-md-2">
          <Form.Group controlId="oth_camera_pos_2_name" className={`${styles.Width} `}  >
              <Form.Label className={`${styles.Bold} `} >Name</Form.Label>
              <Form.Control 
              className={`${styles.Input}`}
              type="text"
              name="oth_camera_pos_2_name"
              value={oth_camera_pos_2_name}
              onChange={handleChange}
                  />
          </Form.Group>
          {errors?.oth_camera_pos_2_name?.map((message, idx) => (
            <Alert variant="warning" key={idx}>
              {message}
            </Alert>
          ))}
          </Col>
          <Col xs={4} className="d-flex justify-content-center p-0 p-md-2">
          <Form.Group controlId="oth_camera_pos_2_email" className={`${styles.Width} `}  >
              <Form.Label className={`${styles.Bold}`} >Email</Form.Label>
              <Form.Control 
              className={`${styles.Input}`}
              type="text"
              name="oth_camera_pos_2_email"
              value={oth_camera_pos_2_email}
              onChange={handleChange}
                  />
          </Form.Group>
          {errors?.oth_camera_pos_2_email?.map((message, idx) => (
            <Alert variant="warning" key={idx}>
              {message}
            </Alert>
          ))}
          </Col>
          <Col xs={4} className="d-flex justify-content-center p-0 p-md-2">
          <Form.Group controlId="oth_camera_pos_2_phone" className={`${styles.Width} `}  >
              <Form.Label className={`${styles.Bold}`} >Phone</Form.Label>
              <Form.Control 
              className={`${styles.Input}`}
              type="text"
              name="oth_camera_pos_2_phone"
              value={oth_camera_pos_2_phone}
              onChange={handleChange}
                  />
          </Form.Group>
          {errors?.oth_camera_pos_2_phone?.map((message, idx) => (
            <Alert variant="warning" key={idx}>
              {message}
            </Alert>
          ))}
          </Col>
      </Row>
      <hr/>
      {/* Additional Camera Position 3 */}
      <h5 className="mt-1" >Additional Camera Position 3</h5> 
      <Row>
          <Col xs={{span: 4, offset: 4 }} className="d-flex justify-content-center p-0 p-md-2">
          <Form.Group controlId="oth_camera_pos_3_job" className={`${styles.Width} `}  >
              <Form.Label className={`${styles.Bold} `} >Position</Form.Label>
              <Form.Control 
              className={`${styles.Input}`}
              type="text"
              name="oth_camera_pos_3_job"
              value={oth_camera_pos_3_job}
              onChange={handleChange}
                  />
          </Form.Group>
          {errors?.oth_camera_pos_3_job?.map((message, idx) => (
            <Alert variant="warning" key={idx}>
              {message}
            </Alert>
          ))}
          </Col>
      </Row>
      <Row>
          <Col xs={4} className="d-flex justify-content-center p-0 p-md-2">
          <Form.Group controlId="oth_camera_pos_3_name" className={`${styles.Width} `}  >
              <Form.Label className={`${styles.Bold} `} >Name</Form.Label>
              <Form.Control 
              className={`${styles.Input}`}
              type="text"
              name="oth_camera_pos_3_name"
              value={oth_camera_pos_3_name}
              onChange={handleChange}
                  />
          </Form.Group>
          {errors?.oth_camera_pos_3_name?.map((message, idx) => (
            <Alert variant="warning" key={idx}>
              {message}
            </Alert>
          ))}
          </Col>
          <Col xs={4} className="d-flex justify-content-center p-0 p-md-2">
          <Form.Group controlId="oth_camera_pos_3_email" className={`${styles.Width} `}  >
              <Form.Label className={`${styles.Bold}`} >Email</Form.Label>
              <Form.Control 
              className={`${styles.Input}`}
              type="text"
              name="oth_camera_pos_3_email"
              value={oth_camera_pos_3_email}
              onChange={handleChange}
                  />
          </Form.Group>
          {errors?.oth_camera_pos_3_email?.map((message, idx) => (
            <Alert variant="warning" key={idx}>
              {message}
            </Alert>
          ))}
          </Col>
          <Col xs={4} className="d-flex justify-content-center p-0 p-md-2">
          <Form.Group controlId="oth_camera_pos_3_phone" className={`${styles.Width} `}  >
              <Form.Label className={`${styles.Bold}`} >Phone</Form.Label>
              <Form.Control 
              className={`${styles.Input}`}
              type="text"
              name="oth_camera_pos_3_phone"
              value={oth_camera_pos_3_phone}
              onChange={handleChange}
                  />
          </Form.Group>
          {errors?.oth_camera_pos_3_phone?.map((message, idx) => (
            <Alert variant="warning" key={idx}>
              {message}
            </Alert>
          ))}
          </Col>
      </Row>
      <hr/>
      </div>

      {/* SOUND */}
      <div>
      <h3 className={` my-3 py-1 ${styles.SubTitle }`} >SOUND</h3> 
      {/* Sound Mixer */}
      <h5 className="mt-1" >Sound Mixer</h5> 
      <Row>
          <Col xs={4} className="d-flex justify-content-center p-0 p-md-2">
          <Form.Group controlId="sound_mixer_name" className={`${styles.Width} `}  >
              <Form.Label className={`${styles.Bold} `} >Name</Form.Label>
              <Form.Control 
              className={`${styles.Input}`}
              type="text"
              name="sound_mixer_name"
              value={sound_mixer_name}
              onChange={handleChange}
                  />
          </Form.Group>
          {errors?.sound_mixer_name?.map((message, idx) => (
            <Alert variant="warning" key={idx}>
              {message}
            </Alert>
          ))}
          </Col>
          <Col xs={4} className="d-flex justify-content-center p-0 p-md-2">
          <Form.Group controlId="sound_mixer_email" className={`${styles.Width} `}  >
              <Form.Label className={`${styles.Bold}`} >Email</Form.Label>
              <Form.Control 
              className={`${styles.Input}`}
              type="text"
              name="sound_mixer_email"
              value={sound_mixer_email}
              onChange={handleChange}
                  />
          </Form.Group>
          {errors?.sound_mixer_email?.map((message, idx) => (
            <Alert variant="warning" key={idx}>
              {message}
            </Alert>
          ))}
          </Col>
          <Col xs={4} className="d-flex justify-content-center p-0 p-md-2">
          <Form.Group controlId="sound_mixer_phone" className={`${styles.Width} `}  >
              <Form.Label className={`${styles.Bold}`} >Phone</Form.Label>
              <Form.Control 
              className={`${styles.Input}`}
              type="text"
              name="sound_mixer_phone"
              value={sound_mixer_phone}
              onChange={handleChange}
                  />
          </Form.Group>
          {errors?.sound_mixer_phone?.map((message, idx) => (
            <Alert variant="warning" key={idx}>
              {message}
            </Alert>
          ))}
          </Col>
      </Row>
      <hr/>
      {/* Boom Operator */}
      <h5 className="mt-1" >Boom Operator</h5> 
      <Row>
          <Col xs={4} className="d-flex justify-content-center p-0 p-md-2">
          <Form.Group controlId="boom_operator_name" className={`${styles.Width} `}  >
              <Form.Label className={`${styles.Bold} `} >Name</Form.Label>
              <Form.Control 
              className={`${styles.Input}`}
              type="text"
              name="boom_operator_name"
              value={boom_operator_name}
              onChange={handleChange}
                  />
          </Form.Group>
          {errors?.boom_operator_name?.map((message, idx) => (
            <Alert variant="warning" key={idx}>
              {message}
            </Alert>
          ))}
          </Col>
          <Col xs={4} className="d-flex justify-content-center p-0 p-md-2">
          <Form.Group controlId="boom_operator_email" className={`${styles.Width} `}  >
              <Form.Label className={`${styles.Bold}`} >Email</Form.Label>
              <Form.Control 
              className={`${styles.Input}`}
              type="text"
              name="boom_operator_email"
              value={boom_operator_email}
              onChange={handleChange}
                  />
          </Form.Group>
          {errors?.boom_operator_email?.map((message, idx) => (
            <Alert variant="warning" key={idx}>
              {message}
            </Alert>
          ))}
          </Col>
          <Col xs={4} className="d-flex justify-content-center p-0 p-md-2">
          <Form.Group controlId="boom_operator_phone" className={`${styles.Width} `}  >
              <Form.Label className={`${styles.Bold}`} >Phone</Form.Label>
              <Form.Control 
              className={`${styles.Input}`}
              type="text"
              name="boom_operator_phone"
              value={boom_operator_phone}
              onChange={handleChange}
                  />
          </Form.Group>
          {errors?.boom_operator_phone?.map((message, idx) => (
            <Alert variant="warning" key={idx}>
              {message}
            </Alert>
          ))}
          </Col>
      </Row>
      <hr/>
      {/* Sound Assistant */}
      <h5 className="mt-1" >Sound Assistant 1 </h5> 
      <Row>
          <Col xs={4} className="d-flex justify-content-center p-0 p-md-2">
          <Form.Group controlId="sound_assistant_1_name" className={`${styles.Width} `}  >
              <Form.Label className={`${styles.Bold} `} >Name</Form.Label>
              <Form.Control 
              className={`${styles.Input}`}
              type="text"
              name="sound_assistant_1_name"
              value={sound_assistant_1_name}
              onChange={handleChange}
                  />
          </Form.Group>
          {errors?.sound_assistant_1_name?.map((message, idx) => (
            <Alert variant="warning" key={idx}>
              {message}
            </Alert>
          ))}
          </Col>
          <Col xs={4} className="d-flex justify-content-center p-0 p-md-2">
          <Form.Group controlId="sound_assistant_1_email" className={`${styles.Width} `}  >
              <Form.Label className={`${styles.Bold}`} >Email</Form.Label>
              <Form.Control 
              className={`${styles.Input}`}
              type="text"
              name="sound_assistant_1_email"
              value={sound_assistant_1_email}
              onChange={handleChange}
                  />
          </Form.Group>
          {errors?.sound_assistant_1_email?.map((message, idx) => (
            <Alert variant="warning" key={idx}>
              {message}
            </Alert>
          ))}
          </Col>
          <Col xs={4} className="d-flex justify-content-center p-0 p-md-2">
          <Form.Group controlId="sound_assistant_1_phone" className={`${styles.Width} `}  >
              <Form.Label className={`${styles.Bold}`} >Phone</Form.Label>
              <Form.Control 
              className={`${styles.Input}`}
              type="text"
              name="sound_assistant_1_phone"
              value={sound_assistant_1_phone}
              onChange={handleChange}
                  />
          </Form.Group>
          {errors?.sound_assistant_1_phone?.map((message, idx) => (
            <Alert variant="warning" key={idx}>
              {message}
            </Alert>
          ))}
          </Col>
      </Row>
      <hr/>
      {/* Sound Assistant 2 */}
      <h5 className="mt-1" >Sound Assistant 2</h5> 
      <Row>
          <Col xs={4} className="d-flex justify-content-center p-0 p-md-2">
          <Form.Group controlId="sound_assistant_2_name" className={`${styles.Width} `}  >
              <Form.Label className={`${styles.Bold} `} >Name</Form.Label>
              <Form.Control 
              className={`${styles.Input}`}
              type="text"
              name="sound_assistant_2_name"
              value={sound_assistant_2_name}
              onChange={handleChange}
                  />
          </Form.Group>
          {errors?.sound_assistant_2_name?.map((message, idx) => (
            <Alert variant="warning" key={idx}>
              {message}
            </Alert>
          ))}
          </Col>
          <Col xs={4} className="d-flex justify-content-center p-0 p-md-2">
          <Form.Group controlId="sound_assistant_2_email" className={`${styles.Width} `}  >
              <Form.Label className={`${styles.Bold}`} >Email</Form.Label>
              <Form.Control 
              className={`${styles.Input}`}
              type="text"
              name="sound_assistant_2_email"
              value={sound_assistant_2_email}
              onChange={handleChange}
                  />
          </Form.Group>
          {errors?.sound_assistant_2_email?.map((message, idx) => (
            <Alert variant="warning" key={idx}>
              {message}
            </Alert>
          ))}
          </Col>
          <Col xs={4} className="d-flex justify-content-center p-0 p-md-2">
          <Form.Group controlId="sound_assistant_2_phone" className={`${styles.Width} `}  >
              <Form.Label className={`${styles.Bold}`} >Phone</Form.Label>
              <Form.Control 
              className={`${styles.Input}`}
              type="text"
              name="sound_assistant_2_phone"
              value={sound_assistant_2_phone}
              onChange={handleChange}
                  />
          </Form.Group>
          {errors?.sound_assistant_2_phone?.map((message, idx) => (
            <Alert variant="warning" key={idx}>
              {message}
            </Alert>
          ))}
          </Col>
      </Row>
      <hr/>
      </div>

      {/* MAKEUP */}
      <div>
      <h3 className={` my-3 py-1 ${styles.SubTitle }`} >MAKEUP</h3> 
      {/* Key Hair and Makeup */}
      <h5 className="mt-1" >Key Hair and Makeup</h5> 
      <Row>
          <Col xs={4} className="d-flex justify-content-center p-0 p-md-2">
          <Form.Group controlId="key_hairmakeup_name" className={`${styles.Width} `}  >
              <Form.Label className={`${styles.Bold} `} >Name</Form.Label>
              <Form.Control 
              className={`${styles.Input}`}
              type="text"
              name="key_hairmakeup_name"
              value={key_hairmakeup_name}
              onChange={handleChange}
                  />
          </Form.Group>
          {errors?.key_hairmakeup_name?.map((message, idx) => (
            <Alert variant="warning" key={idx}>
              {message}
            </Alert>
          ))}
          </Col>
          <Col xs={4} className="d-flex justify-content-center p-0 p-md-2">
          <Form.Group controlId="key_hairmakeup_email" className={`${styles.Width} `}  >
              <Form.Label className={`${styles.Bold}`} >Email</Form.Label>
              <Form.Control 
              className={`${styles.Input}`}
              type="text"
              name="key_hairmakeup_email"
              value={key_hairmakeup_email}
              onChange={handleChange}
                  />
          </Form.Group>
          {errors?.key_hairmakeup_email?.map((message, idx) => (
            <Alert variant="warning" key={idx}>
              {message}
            </Alert>
          ))}
          </Col>
          <Col xs={4} className="d-flex justify-content-center p-0 p-md-2">
          <Form.Group controlId="key_hairmakeup_phone" className={`${styles.Width} `}  >
              <Form.Label className={`${styles.Bold}`} >Phone</Form.Label>
              <Form.Control 
              className={`${styles.Input}`}
              type="text"
              name="key_hairmakeup_phone"
              value={key_hairmakeup_phone}
              onChange={handleChange}
                  />
          </Form.Group>
          {errors?.key_hairmakeup_phone?.map((message, idx) => (
            <Alert variant="warning" key={idx}>
              {message}
            </Alert>
          ))}
          </Col>
      </Row>
      <hr/>
      {/* Key Hair Stylist Wigs */}
      <h5 className="mt-1" >Key Hair Stylist and Wigs</h5> 
      <Row>
          <Col xs={4} className="d-flex justify-content-center p-0 p-md-2">
          <Form.Group controlId="key_hairstylist_name" className={`${styles.Width} `}  >
              <Form.Label className={`${styles.Bold} `} >Name</Form.Label>
              <Form.Control 
              className={`${styles.Input}`}
              type="text"
              name="key_hairstylist_name"
              value={key_hairstylist_name}
              onChange={handleChange}
                  />
          </Form.Group>
          {errors?.key_hairstylist_name?.map((message, idx) => (
            <Alert variant="warning" key={idx}>
              {message}
            </Alert>
          ))}
          </Col>
          <Col xs={4} className="d-flex justify-content-center p-0 p-md-2">
          <Form.Group controlId="key_hairstylist_email" className={`${styles.Width} `}  >
              <Form.Label className={`${styles.Bold}`} >Email</Form.Label>
              <Form.Control 
              className={`${styles.Input}`}
              type="text"
              name="key_hairstylist_email"
              value={key_hairstylist_email}
              onChange={handleChange}
                  />
          </Form.Group>
          {errors?.key_hairstylist_email?.map((message, idx) => (
            <Alert variant="warning" key={idx}>
              {message}
            </Alert>
          ))}
          </Col>
          <Col xs={4} className="d-flex justify-content-center p-0 p-md-2">
          <Form.Group controlId="key_hairstylist_phone" className={`${styles.Width} `}  >
              <Form.Label className={`${styles.Bold}`} >Phone</Form.Label>
              <Form.Control 
              className={`${styles.Input}`}
              type="text"
              name="key_hairstylist_phone"
              value={key_hairstylist_phone}
              onChange={handleChange}
                  />
          </Form.Group>
          {errors?.key_hairstylist_phone?.map((message, idx) => (
            <Alert variant="warning" key={idx}>
              {message}
            </Alert>
          ))}
          </Col>
      </Row>
      <hr/>
      {/* SFX Makeup */}
      <h5 className="mt-1" >SFX Makeup </h5> 
      <Row>
          <Col xs={4} className="d-flex justify-content-center p-0 p-md-2">
          <Form.Group controlId="sfx_makeup_name" className={`${styles.Width} `}  >
              <Form.Label className={`${styles.Bold} `} >Name</Form.Label>
              <Form.Control 
              className={`${styles.Input}`}
              type="text"
              name="sfx_makeup_name"
              value={sfx_makeup_name}
              onChange={handleChange}
                  />
          </Form.Group>
          {errors?.sfx_makeup_name?.map((message, idx) => (
            <Alert variant="warning" key={idx}>
              {message}
            </Alert>
          ))}
          </Col>
          <Col xs={4} className="d-flex justify-content-center p-0 p-md-2">
          <Form.Group controlId="sfx_makeup_email" className={`${styles.Width} `}  >
              <Form.Label className={`${styles.Bold}`} >Email</Form.Label>
              <Form.Control 
              className={`${styles.Input}`}
              type="text"
              name="sfx_makeup_email"
              value={sfx_makeup_email}
              onChange={handleChange}
                  />
          </Form.Group>
          {errors?.sfx_makeup_email?.map((message, idx) => (
            <Alert variant="warning" key={idx}>
              {message}
            </Alert>
          ))}
          </Col>
          <Col xs={4} className="d-flex justify-content-center p-0 p-md-2">
          <Form.Group controlId="sfx_makeup_phone" className={`${styles.Width} `}  >
              <Form.Label className={`${styles.Bold}`} >Phone</Form.Label>
              <Form.Control 
              className={`${styles.Input}`}
              type="text"
              name="sfx_makeup_phone"
              value={sfx_makeup_phone}
              onChange={handleChange}
                  />
          </Form.Group>
          {errors?.sfx_makeup_phone?.map((message, idx) => (
            <Alert variant="warning" key={idx}>
              {message}
            </Alert>
          ))}
          </Col>
      </Row>
      <hr/>
      {/* SFX Makeup Assistant */}
      <h5 className="mt-1" >SFX Makeup Assistant</h5> 
      <Row>
          <Col xs={4} className="d-flex justify-content-center p-0 p-md-2">
          <Form.Group controlId="sfx_makeup_assistant_name" className={`${styles.Width} `}  >
              <Form.Label className={`${styles.Bold} `} >Name</Form.Label>
              <Form.Control 
              className={`${styles.Input}`}
              type="text"
              name="sfx_makeup_assistant_name"
              value={sfx_makeup_assistant_name}
              onChange={handleChange}
                  />
          </Form.Group>
          {errors?.sfx_makeup_assistant_name?.map((message, idx) => (
            <Alert variant="warning" key={idx}>
              {message}
            </Alert>
          ))}
          </Col>
          <Col xs={4} className="d-flex justify-content-center p-0 p-md-2">
          <Form.Group controlId="sfx_makeup_assistant_email" className={`${styles.Width} `}  >
              <Form.Label className={`${styles.Bold}`} >Email</Form.Label>
              <Form.Control 
              className={`${styles.Input}`}
              type="text"
              name="sfx_makeup_assistant_email"
              value={sfx_makeup_assistant_email}
              onChange={handleChange}
                  />
          </Form.Group>
          {errors?.sfx_makeup_assistant_email?.map((message, idx) => (
            <Alert variant="warning" key={idx}>
              {message}
            </Alert>
          ))}
          </Col>
          <Col xs={4} className="d-flex justify-content-center p-0 p-md-2">
          <Form.Group controlId="sfx_makeup_assistant_phone" className={`${styles.Width} `}  >
              <Form.Label className={`${styles.Bold}`} >Phone</Form.Label>
              <Form.Control 
              className={`${styles.Input}`}
              type="text"
              name="sfx_makeup_assistant_phone"
              value={sfx_makeup_assistant_phone}
              onChange={handleChange}
                  />
          </Form.Group>
          {errors?.sfx_makeup_assistant_phone?.map((message, idx) => (
            <Alert variant="warning" key={idx}>
              {message}
            </Alert>
          ))}
          </Col>
      </Row>
      <hr/>
      {/* Makeup Artist 1 */}
      <h5 className="mt-1" >Makeup Artist 1</h5> 
      <Row>
          <Col xs={4} className="d-flex justify-content-center p-0 p-md-2">
          <Form.Group controlId="makeup_artist_1_name" className={`${styles.Width} `}  >
              <Form.Label className={`${styles.Bold} `} >Name</Form.Label>
              <Form.Control 
              className={`${styles.Input}`}
              type="text"
              name="makeup_artist_1_name"
              value={makeup_artist_1_name}
              onChange={handleChange}
                  />
          </Form.Group>
          {errors?.makeup_artist_1_name?.map((message, idx) => (
            <Alert variant="warning" key={idx}>
              {message}
            </Alert>
          ))}
          </Col>
          <Col xs={4} className="d-flex justify-content-center p-0 p-md-2">
          <Form.Group controlId="makeup_artist_1_email" className={`${styles.Width} `}  >
              <Form.Label className={`${styles.Bold}`} >Email</Form.Label>
              <Form.Control 
              className={`${styles.Input}`}
              type="text"
              name="makeup_artist_1_email"
              value={makeup_artist_1_email}
              onChange={handleChange}
                  />
          </Form.Group>
          {errors?.makeup_artist_1_email?.map((message, idx) => (
            <Alert variant="warning" key={idx}>
              {message}
            </Alert>
          ))}
          </Col>
          <Col xs={4} className="d-flex justify-content-center p-0 p-md-2">
          <Form.Group controlId="makeup_artist_1_phone" className={`${styles.Width} `}  >
              <Form.Label className={`${styles.Bold}`} >Phone</Form.Label>
              <Form.Control 
              className={`${styles.Input}`}
              type="text"
              name="makeup_artist_1_phone"
              value={makeup_artist_1_phone}
              onChange={handleChange}
                  />
          </Form.Group>
          {errors?.makeup_artist_1_phone?.map((message, idx) => (
            <Alert variant="warning" key={idx}>
              {message}
            </Alert>
          ))}
          </Col>
      </Row>
      <hr/>
      {/* Makeup Artist 2 */}
      <h5 className="mt-1" >Makeup Artist 2</h5> 
      <Row>
          <Col xs={4} className="d-flex justify-content-center p-0 p-md-2">
          <Form.Group controlId="makeup_artist_2_name" className={`${styles.Width} `}  >
              <Form.Label className={`${styles.Bold} `} >Name</Form.Label>
              <Form.Control 
              className={`${styles.Input}`}
              type="text"
              name="makeup_artist_2_name"
              value={makeup_artist_2_name}
              onChange={handleChange}
                  />
          </Form.Group>
          {errors?.makeup_artist_2_name?.map((message, idx) => (
            <Alert variant="warning" key={idx}>
              {message}
            </Alert>
          ))}
          </Col>
          <Col xs={4} className="d-flex justify-content-center p-0 p-md-2">
          <Form.Group controlId="makeup_artist_2_email" className={`${styles.Width} `}  >
              <Form.Label className={`${styles.Bold}`} >Email</Form.Label>
              <Form.Control 
              className={`${styles.Input}`}
              type="text"
              name="makeup_artist_2_email"
              value={makeup_artist_2_email}
              onChange={handleChange}
                  />
          </Form.Group>
          {errors?.makeup_artist_2_email?.map((message, idx) => (
            <Alert variant="warning" key={idx}>
              {message}
            </Alert>
          ))}
          </Col>
          <Col xs={4} className="d-flex justify-content-center p-0 p-md-2">
          <Form.Group controlId="makeup_artist_2_phone" className={`${styles.Width} `}  >
              <Form.Label className={`${styles.Bold}`} >Phone</Form.Label>
              <Form.Control 
              className={`${styles.Input}`}
              type="text"
              name="makeup_artist_2_phone"
              value={makeup_artist_2_phone}
              onChange={handleChange}
                  />
          </Form.Group>
          {errors?.makeup_artist_2_phone?.map((message, idx) => (
            <Alert variant="warning" key={idx}>
              {message}
            </Alert>
          ))}
          </Col>
      </Row>
      <hr/>
      {/* Makeup Artist 3 */}
      <h5 className="mt-1" >Makeup Artist 3</h5> 
      <Row>
          <Col xs={4} className="d-flex justify-content-center p-0 p-md-2">
          <Form.Group controlId="makeup_artist_3_name" className={`${styles.Width} `}  >
              <Form.Label className={`${styles.Bold} `} >Name</Form.Label>
              <Form.Control 
              className={`${styles.Input}`}
              type="text"
              name="makeup_artist_3_name"
              value={makeup_artist_3_name}
              onChange={handleChange}
                  />
          </Form.Group>
          {errors?.makeup_artist_3_name?.map((message, idx) => (
            <Alert variant="warning" key={idx}>
              {message}
            </Alert>
          ))}
          </Col>
          <Col xs={4} className="d-flex justify-content-center p-0 p-md-2">
          <Form.Group controlId="makeup_artist_3_email" className={`${styles.Width} `}  >
              <Form.Label className={`${styles.Bold}`} >Email</Form.Label>
              <Form.Control 
              className={`${styles.Input}`}
              type="text"
              name="makeup_artist_3_email"
              value={makeup_artist_3_email}
              onChange={handleChange}
                  />
          </Form.Group>
          {errors?.makeup_artist_3_email?.map((message, idx) => (
            <Alert variant="warning" key={idx}>
              {message}
            </Alert>
          ))}
          </Col>
          <Col xs={4} className="d-flex justify-content-center p-0 p-md-2">
          <Form.Group controlId="makeup_artist_3_phone" className={`${styles.Width} `}  >
              <Form.Label className={`${styles.Bold}`} >Phone</Form.Label>
              <Form.Control 
              className={`${styles.Input}`}
              type="text"
              name="makeup_artist_3_phone"
              value={makeup_artist_3_phone}
              onChange={handleChange}
                  />
          </Form.Group>
          {errors?.makeup_artist_3_phone?.map((message, idx) => (
            <Alert variant="warning" key={idx}>
              {message}
            </Alert>
          ))}
          </Col>
      </Row>
      <hr/>
      {/* Makeup Artist 4 */}
      <h5 className="mt-1" >Makeup Artist 4</h5> 
      <Row>
          <Col xs={4} className="d-flex justify-content-center p-0 p-md-2">
          <Form.Group controlId="makeup_artist_4_name" className={`${styles.Width} `}  >
              <Form.Label className={`${styles.Bold} `} >Name</Form.Label>
              <Form.Control 
              className={`${styles.Input}`}
              type="text"
              name="makeup_artist_4_name"
              value={makeup_artist_4_name}
              onChange={handleChange}
                  />
          </Form.Group>
          {errors?.makeup_artist_4_name?.map((message, idx) => (
            <Alert variant="warning" key={idx}>
              {message}
            </Alert>
          ))}
          </Col>
          <Col xs={4} className="d-flex justify-content-center p-0 p-md-2">
          <Form.Group controlId="makeup_artist_4_email" className={`${styles.Width} `}  >
              <Form.Label className={`${styles.Bold}`} >Email</Form.Label>
              <Form.Control 
              className={`${styles.Input}`}
              type="text"
              name="makeup_artist_4_email"
              value={makeup_artist_4_email}
              onChange={handleChange}
                  />
          </Form.Group>
          {errors?.makeup_artist_4_email?.map((message, idx) => (
            <Alert variant="warning" key={idx}>
              {message}
            </Alert>
          ))}
          </Col>
          <Col xs={4} className="d-flex justify-content-center p-0 p-md-2">
          <Form.Group controlId="makeup_artist_4_phone" className={`${styles.Width} `}  >
              <Form.Label className={`${styles.Bold}`} >Phone</Form.Label>
              <Form.Control 
              className={`${styles.Input}`}
              type="text"
              name="makeup_artist_4_phone"
              value={makeup_artist_4_phone}
              onChange={handleChange}
                  />
          </Form.Group>
          {errors?.makeup_artist_4_phone?.map((message, idx) => (
            <Alert variant="warning" key={idx}>
              {message}
            </Alert>
          ))}
          </Col>
      </Row>
      <hr/>
      {/* Makeup Artist 5 */}
      <h5 className="mt-1" >Makeup Artist 5</h5> 
      <Row>
          <Col xs={4} className="d-flex justify-content-center p-0 p-md-2">
          <Form.Group controlId="makeup_artist_5_name" className={`${styles.Width} `}  >
              <Form.Label className={`${styles.Bold} `} >Name</Form.Label>
              <Form.Control 
              className={`${styles.Input}`}
              type="text"
              name="makeup_artist_5_name"
              value={makeup_artist_5_name}
              onChange={handleChange}
                  />
          </Form.Group>
          {errors?.makeup_artist_5_name?.map((message, idx) => (
            <Alert variant="warning" key={idx}>
              {message}
            </Alert>
          ))}
          </Col>
          <Col xs={4} className="d-flex justify-content-center p-0 p-md-2">
          <Form.Group controlId="makeup_artist_5_email" className={`${styles.Width} `}  >
              <Form.Label className={`${styles.Bold}`} >Email</Form.Label>
              <Form.Control 
              className={`${styles.Input}`}
              type="text"
              name="makeup_artist_5_email"
              value={makeup_artist_5_email}
              onChange={handleChange}
                  />
          </Form.Group>
          {errors?.makeup_artist_5_email?.map((message, idx) => (
            <Alert variant="warning" key={idx}>
              {message}
            </Alert>
          ))}
          </Col>
          <Col xs={4} className="d-flex justify-content-center p-0 p-md-2">
          <Form.Group controlId="makeup_artist_5_phone" className={`${styles.Width} `}  >
              <Form.Label className={`${styles.Bold}`} >Phone</Form.Label>
              <Form.Control 
              className={`${styles.Input}`}
              type="text"
              name="makeup_artist_5_phone"
              value={makeup_artist_5_phone}
              onChange={handleChange}
                  />
          </Form.Group>
          {errors?.makeup_artist_5_phone?.map((message, idx) => (
            <Alert variant="warning" key={idx}>
              {message}
            </Alert>
          ))}
          </Col>
      </Row>
      <hr/>


      </div>

      {/* CONTINUITY */}
      <div>
      <h3 className={` my-3 py-1 ${styles.SubTitle }`} >CONTINUITY</h3> 
      {/* Script Supervisor */}
      <h5 className="mt-1" >Script Supervisor</h5> 
      <Row>
          <Col xs={4} className="d-flex justify-content-center p-0 p-md-2">
          <Form.Group controlId="script_supervisor_name" className={`${styles.Width} `}  >
              <Form.Label className={`${styles.Bold} `} >Name</Form.Label>
              <Form.Control 
              className={`${styles.Input}`}
              type="text"
              name="script_supervisor_name"
              value={script_supervisor_name}
              onChange={handleChange}
                  />
          </Form.Group>
          {errors?.script_supervisor_name?.map((message, idx) => (
            <Alert variant="warning" key={idx}>
              {message}
            </Alert>
          ))}
          </Col>
          <Col xs={4} className="d-flex justify-content-center p-0 p-md-2">
          <Form.Group controlId="script_supervisor_email" className={`${styles.Width} `}  >
              <Form.Label className={`${styles.Bold}`} >Email</Form.Label>
              <Form.Control 
              className={`${styles.Input}`}
              type="text"
              name="script_supervisor_email"
              value={script_supervisor_email}
              onChange={handleChange}
                  />
          </Form.Group>
          {errors?.script_supervisor_email?.map((message, idx) => (
            <Alert variant="warning" key={idx}>
              {message}
            </Alert>
          ))}
          </Col>
          <Col xs={4} className="d-flex justify-content-center p-0 p-md-2">
          <Form.Group controlId="script_supervisor_phone" className={`${styles.Width} `}  >
              <Form.Label className={`${styles.Bold}`} >Phone</Form.Label>
              <Form.Control 
              className={`${styles.Input}`}
              type="text"
              name="script_supervisor_phone"
              value={script_supervisor_phone}
              onChange={handleChange}
                  />
          </Form.Group>
          {errors?.script_supervisor_phone?.map((message, idx) => (
            <Alert variant="warning" key={idx}>
              {message}
            </Alert>
          ))}
          </Col>
      </Row>
      <hr/>
      </div>

      {/* WARDROBE */}
      <div>
      <h3 className={` my-3 py-1 ${styles.SubTitle }`} >WARDROBE</h3> 
      {/* Costume Designer */}
      <h5 className="mt-1" >Costume Designer</h5> 
      <Row>
          <Col xs={4} className="d-flex justify-content-center p-0 p-md-2">
          <Form.Group controlId="costume_designer_name" className={`${styles.Width} `}  >
              <Form.Label className={`${styles.Bold} `} >Name</Form.Label>
              <Form.Control 
              className={`${styles.Input}`}
              type="text"
              name="costume_designer_name"
              value={costume_designer_name}
              onChange={handleChange}
                  />
          </Form.Group>
          {errors?.costume_designer_name?.map((message, idx) => (
            <Alert variant="warning" key={idx}>
              {message}
            </Alert>
          ))}
          </Col>
          <Col xs={4} className="d-flex justify-content-center p-0 p-md-2">
          <Form.Group controlId="costume_designer_email" className={`${styles.Width} `}  >
              <Form.Label className={`${styles.Bold}`} >Email</Form.Label>
              <Form.Control 
              className={`${styles.Input}`}
              type="text"
              name="costume_designer_email"
              value={costume_designer_email}
              onChange={handleChange}
                  />
          </Form.Group>
          {errors?.costume_designer_email?.map((message, idx) => (
            <Alert variant="warning" key={idx}>
              {message}
            </Alert>
          ))}
          </Col>
          <Col xs={4} className="d-flex justify-content-center p-0 p-md-2">
          <Form.Group controlId="costume_designer_phone" className={`${styles.Width} `}  >
              <Form.Label className={`${styles.Bold}`} >Phone</Form.Label>
              <Form.Control 
              className={`${styles.Input}`}
              type="text"
              name="costume_designer_phone"
              value={costume_designer_phone}
              onChange={handleChange}
                  />
          </Form.Group>
          {errors?.costume_designer_phone?.map((message, idx) => (
            <Alert variant="warning" key={idx}>
              {message}
            </Alert>
          ))}
          </Col>
      </Row>
      <hr/>
      {/* Assistant Costume Designer */}
      <h5 className="mt-1" > Assistant Costume Designer</h5> 
      <Row>
          <Col xs={4} className="d-flex justify-content-center p-0 p-md-2">
          <Form.Group controlId="ass_costume_designer_name" className={`${styles.Width} `}  >
              <Form.Label className={`${styles.Bold} `} >Name</Form.Label>
              <Form.Control 
              className={`${styles.Input}`}
              type="text"
              name="ass_costume_designer_name"
              value={ass_costume_designer_name}
              onChange={handleChange}
                  />
          </Form.Group>
          {errors?.ass_costume_designer_name?.map((message, idx) => (
            <Alert variant="warning" key={idx}>
              {message}
            </Alert>
          ))}
          </Col>
          <Col xs={4} className="d-flex justify-content-center p-0 p-md-2">
          <Form.Group controlId="ass_costume_designer_email" className={`${styles.Width} `}  >
              <Form.Label className={`${styles.Bold}`} >Email</Form.Label>
              <Form.Control 
              className={`${styles.Input}`}
              type="text"
              name="ass_costume_designer_email"
              value={ass_costume_designer_email}
              onChange={handleChange}
                  />
          </Form.Group>
          {errors?.ass_costume_designer_email?.map((message, idx) => (
            <Alert variant="warning" key={idx}>
              {message}
            </Alert>
          ))}
          </Col>
          <Col xs={4} className="d-flex justify-content-center p-0 p-md-2">
          <Form.Group controlId="ass_costume_designer_phone" className={`${styles.Width} `}  >
              <Form.Label className={`${styles.Bold}`} >Phone</Form.Label>
              <Form.Control 
              className={`${styles.Input}`}
              type="text"
              name="ass_costume_designer_phone"
              value={ass_costume_designer_phone}
              onChange={handleChange}
                  />
          </Form.Group>
          {errors?.ass_costume_designer_phone?.map((message, idx) => (
            <Alert variant="warning" key={idx}>
              {message}
            </Alert>
          ))}
          </Col>
      </Row>
      <hr/>
      {/* Wardrobe Assistant 1*/}
      <h5 className="mt-1" >Wardrobe Assistant 1</h5> 
      <Row>
          <Col xs={4} className="d-flex justify-content-center p-0 p-md-2">
          <Form.Group controlId="wardrobe_assistant_1_name" className={`${styles.Width} `}  >
              <Form.Label className={`${styles.Bold} `} >Name</Form.Label>
              <Form.Control 
              className={`${styles.Input}`}
              type="text"
              name="wardrobe_assistant_1_name"
              value={wardrobe_assistant_1_name}
              onChange={handleChange}
                  />
          </Form.Group>
          {errors?.wardrobe_assistant_1_name?.map((message, idx) => (
            <Alert variant="warning" key={idx}>
              {message}
            </Alert>
          ))}
          </Col>
          <Col xs={4} className="d-flex justify-content-center p-0 p-md-2">
          <Form.Group controlId="wardrobe_assistant_1_email" className={`${styles.Width} `}  >
              <Form.Label className={`${styles.Bold}`} >Email</Form.Label>
              <Form.Control 
              className={`${styles.Input}`}
              type="text"
              name="wardrobe_assistant_1_email"
              value={wardrobe_assistant_1_email}
              onChange={handleChange}
                  />
          </Form.Group>
          {errors?.wardrobe_assistant_1_email?.map((message, idx) => (
            <Alert variant="warning" key={idx}>
              {message}
            </Alert>
          ))}
          </Col>
          <Col xs={4} className="d-flex justify-content-center p-0 p-md-2">
          <Form.Group controlId="wardrobe_assistant_1_phone" className={`${styles.Width} `}  >
              <Form.Label className={`${styles.Bold}`} >Phone</Form.Label>
              <Form.Control 
              className={`${styles.Input}`}
              type="text"
              name="wardrobe_assistant_1_phone"
              value={wardrobe_assistant_1_phone}
              onChange={handleChange}
                  />
          </Form.Group>
          {errors?.wardrobe_assistant_1_phone?.map((message, idx) => (
            <Alert variant="warning" key={idx}>
              {message}
            </Alert>
          ))}
          </Col>
      </Row>
      <hr/>
      {/* Wardrobe Assistant 2*/}
      <h5 className="mt-1" >Wardrobe Assistant 2</h5> 
      <Row>
          <Col xs={4} className="d-flex justify-content-center p-0 p-md-2">
          <Form.Group controlId="wardrobe_assistant_2_name" className={`${styles.Width} `}  >
              <Form.Label className={`${styles.Bold} `} >Name</Form.Label>
              <Form.Control 
              className={`${styles.Input}`}
              type="text"
              name="wardrobe_assistant_2_name"
              value={wardrobe_assistant_2_name}
              onChange={handleChange}
                  />
          </Form.Group>
          {errors?.wardrobe_assistant_2_name?.map((message, idx) => (
            <Alert variant="warning" key={idx}>
              {message}
            </Alert>
          ))}
          </Col>
          <Col xs={4} className="d-flex justify-content-center p-0 p-md-2">
          <Form.Group controlId="wardrobe_assistant_2_email" className={`${styles.Width} `}  >
              <Form.Label className={`${styles.Bold}`} >Email</Form.Label>
              <Form.Control 
              className={`${styles.Input}`}
              type="text"
              name="wardrobe_assistant_2_email"
              value={wardrobe_assistant_2_email}
              onChange={handleChange}
                  />
          </Form.Group>
          {errors?.wardrobe_assistant_2_email?.map((message, idx) => (
            <Alert variant="warning" key={idx}>
              {message}
            </Alert>
          ))}
          </Col>
          <Col xs={4} className="d-flex justify-content-center p-0 p-md-2">
          <Form.Group controlId="wardrobe_assistant_2_phone" className={`${styles.Width} `}  >
              <Form.Label className={`${styles.Bold}`} >Phone</Form.Label>
              <Form.Control 
              className={`${styles.Input}`}
              type="text"
              name="wardrobe_assistant_2_phone"
              value={wardrobe_assistant_2_phone}
              onChange={handleChange}
                  />
          </Form.Group>
          {errors?.wardrobe_assistant_2_phone?.map((message, idx) => (
            <Alert variant="warning" key={idx}>
              {message}
            </Alert>
          ))}
          </Col>
      </Row>
      <hr/>
      {/* Wardrobe Assistant 3*/}
      <h5 className="mt-1" >Wardrobe Assistant 3</h5> 
      <Row>
          <Col xs={4} className="d-flex justify-content-center p-0 p-md-2">
          <Form.Group controlId="wardrobe_assistant_3_name" className={`${styles.Width} `}  >
              <Form.Label className={`${styles.Bold} `} >Name</Form.Label>
              <Form.Control 
              className={`${styles.Input}`}
              type="text"
              name="wardrobe_assistant_3_name"
              value={wardrobe_assistant_3_name}
              onChange={handleChange}
                  />
          </Form.Group>
          {errors?.wardrobe_assistant_3_name?.map((message, idx) => (
            <Alert variant="warning" key={idx}>
              {message}
            </Alert>
          ))}
          </Col>
          <Col xs={4} className="d-flex justify-content-center p-0 p-md-2">
          <Form.Group controlId="wardrobe_assistant_3_email" className={`${styles.Width} `}  >
              <Form.Label className={`${styles.Bold}`} >Email</Form.Label>
              <Form.Control 
              className={`${styles.Input}`}
              type="text"
              name="wardrobe_assistant_3_email"
              value={wardrobe_assistant_3_email}
              onChange={handleChange}
                  />
          </Form.Group>
          {errors?.wardrobe_assistant_3_email?.map((message, idx) => (
            <Alert variant="warning" key={idx}>
              {message}
            </Alert>
          ))}
          </Col>
          <Col xs={4} className="d-flex justify-content-center p-0 p-md-2">
          <Form.Group controlId="wardrobe_assistant_3_phone" className={`${styles.Width} `}  >
              <Form.Label className={`${styles.Bold}`} >Phone</Form.Label>
              <Form.Control 
              className={`${styles.Input}`}
              type="text"
              name="wardrobe_assistant_3_phone"
              value={wardrobe_assistant_3_phone}
              onChange={handleChange}
                  />
          </Form.Group>
          {errors?.wardrobe_assistant_3_phone?.map((message, idx) => (
            <Alert variant="warning" key={idx}>
              {message}
            </Alert>
          ))}
          </Col>
      </Row>
      <hr/>
      {/* Wardrobe Assistant 4*/}
      <h5 className="mt-1" >Wardrobe Assistant 4</h5> 
      <Row>
          <Col xs={4} className="d-flex justify-content-center p-0 p-md-2">
          <Form.Group controlId="wardrobe_assistant_4_name" className={`${styles.Width} `}  >
              <Form.Label className={`${styles.Bold} `} >Name</Form.Label>
              <Form.Control 
              className={`${styles.Input}`}
              type="text"
              name="wardrobe_assistant_4_name"
              value={wardrobe_assistant_4_name}
              onChange={handleChange}
                  />
          </Form.Group>
          {errors?.wardrobe_assistant_4_name?.map((message, idx) => (
            <Alert variant="warning" key={idx}>
              {message}
            </Alert>
          ))}
          </Col>
          <Col xs={4} className="d-flex justify-content-center p-0 p-md-2">
          <Form.Group controlId="wardrobe_assistant_4_email" className={`${styles.Width} `}  >
              <Form.Label className={`${styles.Bold}`} >Email</Form.Label>
              <Form.Control 
              className={`${styles.Input}`}
              type="text"
              name="wardrobe_assistant_4_email"
              value={wardrobe_assistant_4_email}
              onChange={handleChange}
                  />
          </Form.Group>
          {errors?.wardrobe_assistant_4_email?.map((message, idx) => (
            <Alert variant="warning" key={idx}>
              {message}
            </Alert>
          ))}
          </Col>
          <Col xs={4} className="d-flex justify-content-center p-0 p-md-2">
          <Form.Group controlId="wardrobe_assistant_4_phone" className={`${styles.Width} `}  >
              <Form.Label className={`${styles.Bold}`} >Phone</Form.Label>
              <Form.Control 
              className={`${styles.Input}`}
              type="text"
              name="wardrobe_assistant_4_phone"
              value={wardrobe_assistant_4_phone}
              onChange={handleChange}
                  />
          </Form.Group>
          {errors?.wardrobe_assistant_4_phone?.map((message, idx) => (
            <Alert variant="warning" key={idx}>
              {message}
            </Alert>
          ))}
          </Col>
      </Row>
      <hr/>
      {/* Wardrobe Assistant 5*/}
      <h5 className="mt-1" >Wardrobe Assistant 5</h5> 
      <Row>
          <Col xs={4} className="d-flex justify-content-center p-0 p-md-2">
          <Form.Group controlId="wardrobe_assistant_5_name" className={`${styles.Width} `}  >
              <Form.Label className={`${styles.Bold} `} >Name</Form.Label>
              <Form.Control 
              className={`${styles.Input}`}
              type="text"
              name="wardrobe_assistant_5_name"
              value={wardrobe_assistant_5_name}
              onChange={handleChange}
                  />
          </Form.Group>
          {errors?.wardrobe_assistant_5_name?.map((message, idx) => (
            <Alert variant="warning" key={idx}>
              {message}
            </Alert>
          ))}
          </Col>
          <Col xs={4} className="d-flex justify-content-center p-0 p-md-2">
          <Form.Group controlId="wardrobe_assistant_5_email" className={`${styles.Width} `}  >
              <Form.Label className={`${styles.Bold}`} >Email</Form.Label>
              <Form.Control 
              className={`${styles.Input}`}
              type="text"
              name="wardrobe_assistant_5_email"
              value={wardrobe_assistant_5_email}
              onChange={handleChange}
                  />
          </Form.Group>
          {errors?.wardrobe_assistant_5_email?.map((message, idx) => (
            <Alert variant="warning" key={idx}>
              {message}
            </Alert>
          ))}
          </Col>
          <Col xs={4} className="d-flex justify-content-center p-0 p-md-2">
          <Form.Group controlId="wardrobe_assistant_5_phone" className={`${styles.Width} `}  >
              <Form.Label className={`${styles.Bold}`} >Phone</Form.Label>
              <Form.Control 
              className={`${styles.Input}`}
              type="text"
              name="wardrobe_assistant_5_phone"
              value={wardrobe_assistant_5_phone}
              onChange={handleChange}
                  />
          </Form.Group>
          {errors?.wardrobe_assistant_5_phone?.map((message, idx) => (
            <Alert variant="warning" key={idx}>
              {message}
            </Alert>
          ))}
          </Col>
      </Row>
      <hr/>
      </div>

      {/* ART */}
      <div>
      <h3 className={` my-3 py-1 ${styles.SubTitle }`} >ART</h3> 
      {/* Production Designer */}
      <h5 className="mt-1" >Production Designer</h5> 
      <Row>
          <Col xs={4} className="d-flex justify-content-center p-0 p-md-2">
          <Form.Group controlId="production_designer_name" className={`${styles.Width} `}  >
              <Form.Label className={`${styles.Bold} `} >Name</Form.Label>
              <Form.Control 
              className={`${styles.Input}`}
              type="text"
              name="production_designer_name"
              value={production_designer_name}
              onChange={handleChange}
                  />
          </Form.Group>
          {errors?.production_designer_name?.map((message, idx) => (
            <Alert variant="warning" key={idx}>
              {message}
            </Alert>
          ))}
          </Col>
          <Col xs={4} className="d-flex justify-content-center p-0 p-md-2">
          <Form.Group controlId="production_designer_email" className={`${styles.Width} `}  >
              <Form.Label className={`${styles.Bold}`} >Email</Form.Label>
              <Form.Control 
              className={`${styles.Input}`}
              type="text"
              name="production_designer_email"
              value={production_designer_email}
              onChange={handleChange}
                  />
          </Form.Group>
          {errors?.production_designer_email?.map((message, idx) => (
            <Alert variant="warning" key={idx}>
              {message}
            </Alert>
          ))}
          </Col>
          <Col xs={4} className="d-flex justify-content-center p-0 p-md-2">
          <Form.Group controlId="production_designer_phone" className={`${styles.Width} `}  >
              <Form.Label className={`${styles.Bold}`} >Phone</Form.Label>
              <Form.Control 
              className={`${styles.Input}`}
              type="text"
              name="production_designer_phone"
              value={production_designer_phone}
              onChange={handleChange}
                  />
          </Form.Group>
          {errors?.production_designer_phone?.map((message, idx) => (
            <Alert variant="warning" key={idx}>
              {message}
            </Alert>
          ))}
          </Col>
      </Row>
      <hr/>
      {/* Art Director */}
      <h5 className="mt-1" >Art Director</h5> 
      <Row>
          <Col xs={4} className="d-flex justify-content-center p-0 p-md-2">
          <Form.Group controlId="art_director_name" className={`${styles.Width} `}  >
              <Form.Label className={`${styles.Bold} `} >Name</Form.Label>
              <Form.Control 
              className={`${styles.Input}`}
              type="text"
              name="art_director_name"
              value={art_director_name}
              onChange={handleChange}
                  />
          </Form.Group>
          {errors?.art_director_name?.map((message, idx) => (
            <Alert variant="warning" key={idx}>
              {message}
            </Alert>
          ))}
          </Col>
          <Col xs={4} className="d-flex justify-content-center p-0 p-md-2">
          <Form.Group controlId="art_director_email" className={`${styles.Width} `}  >
              <Form.Label className={`${styles.Bold}`} >Email</Form.Label>
              <Form.Control 
              className={`${styles.Input}`}
              type="text"
              name="art_director_email"
              value={art_director_email}
              onChange={handleChange}
                  />
          </Form.Group>
          {errors?.art_director_email?.map((message, idx) => (
            <Alert variant="warning" key={idx}>
              {message}
            </Alert>
          ))}
          </Col>
          <Col xs={4} className="d-flex justify-content-center p-0 p-md-2">
          <Form.Group controlId="art_director_phone" className={`${styles.Width} `}  >
              <Form.Label className={`${styles.Bold}`} >Phone</Form.Label>
              <Form.Control 
              className={`${styles.Input}`}
              type="text"
              name="art_director_phone"
              value={art_director_phone}
              onChange={handleChange}
                  />
          </Form.Group>
          {errors?.art_director_phone?.map((message, idx) => (
            <Alert variant="warning" key={idx}>
              {message}
            </Alert>
          ))}
          </Col>
      </Row>
      <hr/>
      {/* Art Assistant */}
      <h5 className="mt-1" >Art Assistant</h5> 
      <Row>
          <Col xs={4} className="d-flex justify-content-center p-0 p-md-2">
          <Form.Group controlId="art_assistant_name" className={`${styles.Width} `}  >
              <Form.Label className={`${styles.Bold} `} >Name</Form.Label>
              <Form.Control 
              className={`${styles.Input}`}
              type="text"
              name="art_assistant_name"
              value={art_assistant_name}
              onChange={handleChange}
                  />
          </Form.Group>
          {errors?.art_assistant_name?.map((message, idx) => (
            <Alert variant="warning" key={idx}>
              {message}
            </Alert>
          ))}
          </Col>
          <Col xs={4} className="d-flex justify-content-center p-0 p-md-2">
          <Form.Group controlId="art_assistant_email" className={`${styles.Width} `}  >
              <Form.Label className={`${styles.Bold}`} >Email</Form.Label>
              <Form.Control 
              className={`${styles.Input}`}
              type="text"
              name="art_assistant_email"
              value={art_assistant_email}
              onChange={handleChange}
                  />
          </Form.Group>
          {errors?.art_assistant_email?.map((message, idx) => (
            <Alert variant="warning" key={idx}>
              {message}
            </Alert>
          ))}
          </Col>
          <Col xs={4} className="d-flex justify-content-center p-0 p-md-2">
          <Form.Group controlId="art_assistant_phone" className={`${styles.Width} `}  >
              <Form.Label className={`${styles.Bold}`} >Phone</Form.Label>
              <Form.Control 
              className={`${styles.Input}`}
              type="text"
              name="art_assistant_phone"
              value={art_assistant_phone}
              onChange={handleChange}
                  />
          </Form.Group>
          {errors?.art_assistant_phone?.map((message, idx) => (
            <Alert variant="warning" key={idx}>
              {message}
            </Alert>
          ))}
          </Col>
      </Row>
      <hr/>
      </div>

      {/* SET DECORATION */}
      <div>
      <h3 className={` my-3 py-1 ${styles.SubTitle }`} >SET DECORATION</h3> 
      {/* Set Decorator */}
      <h5 className="mt-1" >Set Decorator</h5> 
      <Row>
          <Col xs={4} className="d-flex justify-content-center p-0 p-md-2">
          <Form.Group controlId="set_decorator_name" className={`${styles.Width} `}  >
              <Form.Label className={`${styles.Bold} `} >Name</Form.Label>
              <Form.Control 
              className={`${styles.Input}`}
              type="text"
              name="set_decorator_name"
              value={set_decorator_name}
              onChange={handleChange}
                  />
          </Form.Group>
          {errors?.set_decorator_name?.map((message, idx) => (
            <Alert variant="warning" key={idx}>
              {message}
            </Alert>
          ))}
          </Col>
          <Col xs={4} className="d-flex justify-content-center p-0 p-md-2">
          <Form.Group controlId="set_decorator_email" className={`${styles.Width} `}  >
              <Form.Label className={`${styles.Bold}`} >Email</Form.Label>
              <Form.Control 
              className={`${styles.Input}`}
              type="text"
              name="set_decorator_email"
              value={set_decorator_email}
              onChange={handleChange}
                  />
          </Form.Group>
          {errors?.set_decorator_email?.map((message, idx) => (
            <Alert variant="warning" key={idx}>
              {message}
            </Alert>
          ))}
          </Col>
          <Col xs={4} className="d-flex justify-content-center p-0 p-md-2">
          <Form.Group controlId="set_decorator_phone" className={`${styles.Width} `}  >
              <Form.Label className={`${styles.Bold}`} >Phone</Form.Label>
              <Form.Control 
              className={`${styles.Input}`}
              type="text"
              name="set_decorator_phone"
              value={set_decorator_phone}
              onChange={handleChange}
                  />
          </Form.Group>
          {errors?.set_decorator_phone?.map((message, idx) => (
            <Alert variant="warning" key={idx}>
              {message}
            </Alert>
          ))}
          </Col>
      </Row>
      <hr/>
      {/* Set Dresser */}
      <h5 className="mt-1" >Set Dresser</h5> 
      <Row>
          <Col xs={4} className="d-flex justify-content-center p-0 p-md-2">
          <Form.Group controlId="set_dresser_name" className={`${styles.Width} `}  >
              <Form.Label className={`${styles.Bold} `} >Name</Form.Label>
              <Form.Control 
              className={`${styles.Input}`}
              type="text"
              name="set_dresser_name"
              value={set_dresser_name}
              onChange={handleChange}
                  />
          </Form.Group>
          {errors?.set_dresser_name?.map((message, idx) => (
            <Alert variant="warning" key={idx}>
              {message}
            </Alert>
          ))}
          </Col>
          <Col xs={4} className="d-flex justify-content-center p-0 p-md-2">
          <Form.Group controlId="set_dresser_email" className={`${styles.Width} `}  >
              <Form.Label className={`${styles.Bold}`} >Email</Form.Label>
              <Form.Control 
              className={`${styles.Input}`}
              type="text"
              name="set_dresser_email"
              value={set_dresser_email}
              onChange={handleChange}
                  />
          </Form.Group>
          {errors?.set_dresser_email?.map((message, idx) => (
            <Alert variant="warning" key={idx}>
              {message}
            </Alert>
          ))}
          </Col>
          <Col xs={4} className="d-flex justify-content-center p-0 p-md-2">
          <Form.Group controlId="set_dresser_phone" className={`${styles.Width} `}  >
              <Form.Label className={`${styles.Bold}`} >Phone</Form.Label>
              <Form.Control 
              className={`${styles.Input}`}
              type="text"
              name="set_dresser_phone"
              value={set_dresser_phone}
              onChange={handleChange}
                  />
          </Form.Group>
          {errors?.set_dresser_phone?.map((message, idx) => (
            <Alert variant="warning" key={idx}>
              {message}
            </Alert>
          ))}
          </Col>
      </Row>
      <hr/>
      {/* Lead Man */}
      <h5 className="mt-1" >Lead Man</h5> 
      <Row>
          <Col xs={4} className="d-flex justify-content-center p-0 p-md-2">
          <Form.Group controlId="lead_man_name" className={`${styles.Width} `}  >
              <Form.Label className={`${styles.Bold} `} >Name</Form.Label>
              <Form.Control 
              className={`${styles.Input}`}
              type="text"
              name="lead_man_name"
              value={lead_man_name}
              onChange={handleChange}
                  />
          </Form.Group>
          {errors?.lead_man_name?.map((message, idx) => (
            <Alert variant="warning" key={idx}>
              {message}
            </Alert>
          ))}
          </Col>
          <Col xs={4} className="d-flex justify-content-center p-0 p-md-2">
          <Form.Group controlId="lead_man_email" className={`${styles.Width} `}  >
              <Form.Label className={`${styles.Bold}`} >Email</Form.Label>
              <Form.Control 
              className={`${styles.Input}`}
              type="text"
              name="lead_man_email"
              value={lead_man_email}
              onChange={handleChange}
                  />
          </Form.Group>
          {errors?.lead_man_email?.map((message, idx) => (
            <Alert variant="warning" key={idx}>
              {message}
            </Alert>
          ))}
          </Col>
          <Col xs={4} className="d-flex justify-content-center p-0 p-md-2">
          <Form.Group controlId="lead_man_phone" className={`${styles.Width} `}  >
              <Form.Label className={`${styles.Bold}`} >Phone</Form.Label>
              <Form.Control 
              className={`${styles.Input}`}
              type="text"
              name="lead_man_phone"
              value={lead_man_phone}
              onChange={handleChange}
                  />
          </Form.Group>
          {errors?.lead_man_phone?.map((message, idx) => (
            <Alert variant="warning" key={idx}>
              {message}
            </Alert>
          ))}
          </Col>
      </Row>
      <hr/>
      {/*  */}Dresser
      <h5 className="mt-1" >Dresser</h5> 
      <Row>
          <Col xs={4} className="d-flex justify-content-center p-0 p-md-2">
          <Form.Group controlId="dresser_name" className={`${styles.Width} `}  >
              <Form.Label className={`${styles.Bold} `} >Name</Form.Label>
              <Form.Control 
              className={`${styles.Input}`}
              type="text"
              name="dresser_name"
              value={dresser_name}
              onChange={handleChange}
                  />
          </Form.Group>
          {errors?.dresser_name?.map((message, idx) => (
            <Alert variant="warning" key={idx}>
              {message}
            </Alert>
          ))}
          </Col>
          <Col xs={4} className="d-flex justify-content-center p-0 p-md-2">
          <Form.Group controlId="dresser_email" className={`${styles.Width} `}  >
              <Form.Label className={`${styles.Bold}`} >Email</Form.Label>
              <Form.Control 
              className={`${styles.Input}`}
              type="text"
              name="dresser_email"
              value={dresser_email}
              onChange={handleChange}
                  />
          </Form.Group>
          {errors?.dresser_email?.map((message, idx) => (
            <Alert variant="warning" key={idx}>
              {message}
            </Alert>
          ))}
          </Col>
          <Col xs={4} className="d-flex justify-content-center p-0 p-md-2">
          <Form.Group controlId="dresser_phone" className={`${styles.Width} `}  >
              <Form.Label className={`${styles.Bold}`} >Phone</Form.Label>
              <Form.Control 
              className={`${styles.Input}`}
              type="text"
              name="dresser_phone"
              value={dresser_phone}
              onChange={handleChange}
                  />
          </Form.Group>
          {errors?.dresser_phone?.map((message, idx) => (
            <Alert variant="warning" key={idx}>
              {message}
            </Alert>
          ))}
          </Col>
      </Row>
      <hr/>
      </div>

      {/* PROPERTY */}
      <div>
      <h3 className={` my-3 py-1 ${styles.SubTitle }`} >PROPERTY</h3> 
      {/* Prop Master */}
      <h5 className="mt-1" >Prop Master</h5> 
      <Row>
          <Col xs={4} className="d-flex justify-content-center p-0 p-md-2">
          <Form.Group controlId="prop_master_name" className={`${styles.Width} `}  >
              <Form.Label className={`${styles.Bold} `} >Name</Form.Label>
              <Form.Control 
              className={`${styles.Input}`}
              type="text"
              name="prop_master_name"
              value={prop_master_name}
              onChange={handleChange}
                  />
          </Form.Group>
          {errors?.prop_master_name?.map((message, idx) => (
            <Alert variant="warning" key={idx}>
              {message}
            </Alert>
          ))}
          </Col>
          <Col xs={4} className="d-flex justify-content-center p-0 p-md-2">
          <Form.Group controlId="prop_master_email" className={`${styles.Width} `}  >
              <Form.Label className={`${styles.Bold}`} >Email</Form.Label>
              <Form.Control 
              className={`${styles.Input}`}
              type="text"
              name="prop_master_email"
              value={prop_master_email}
              onChange={handleChange}
                  />
          </Form.Group>
          {errors?.prop_master_email?.map((message, idx) => (
            <Alert variant="warning" key={idx}>
              {message}
            </Alert>
          ))}
          </Col>
          <Col xs={4} className="d-flex justify-content-center p-0 p-md-2">
          <Form.Group controlId="prop_master_phone" className={`${styles.Width} `}  >
              <Form.Label className={`${styles.Bold}`} >Phone</Form.Label>
              <Form.Control 
              className={`${styles.Input}`}
              type="text"
              name="prop_master_phone"
              value={prop_master_phone}
              onChange={handleChange}
                  />
          </Form.Group>
          {errors?.prop_master_phone?.map((message, idx) => (
            <Alert variant="warning" key={idx}>
              {message}
            </Alert>
          ))}
          </Col>
      </Row>
      <hr/>
      {/* Assistant Prop Master */}
      <h5 className="mt-1" >Assistant Prop Master</h5> 
      <Row>
          <Col xs={4} className="d-flex justify-content-center p-0 p-md-2">
          <Form.Group controlId="ass_prop_master_name" className={`${styles.Width} `}  >
              <Form.Label className={`${styles.Bold} `} >Name</Form.Label>
              <Form.Control 
              className={`${styles.Input}`}
              type="text"
              name="ass_prop_master_name"
              value={ass_prop_master_name}
              onChange={handleChange}
                  />
          </Form.Group>
          {errors?.ass_prop_master_name?.map((message, idx) => (
            <Alert variant="warning" key={idx}>
              {message}
            </Alert>
          ))}
          </Col>
          <Col xs={4} className="d-flex justify-content-center p-0 p-md-2">
          <Form.Group controlId="ass_prop_master_email" className={`${styles.Width} `}  >
              <Form.Label className={`${styles.Bold}`} >Email</Form.Label>
              <Form.Control 
              className={`${styles.Input}`}
              type="text"
              name="ass_prop_master_email"
              value={ass_prop_master_email}
              onChange={handleChange}
                  />
          </Form.Group>
          {errors?.ass_prop_master_email?.map((message, idx) => (
            <Alert variant="warning" key={idx}>
              {message}
            </Alert>
          ))}
          </Col>
          <Col xs={4} className="d-flex justify-content-center p-0 p-md-2">
          <Form.Group controlId="ass_prop_master_phone" className={`${styles.Width} `}  >
              <Form.Label className={`${styles.Bold}`} >Phone</Form.Label>
              <Form.Control 
              className={`${styles.Input}`}
              type="text"
              name="ass_prop_master_phone"
              value={ass_prop_master_phone}
              onChange={handleChange}
                  />
          </Form.Group>
          {errors?.ass_prop_master_phone?.map((message, idx) => (
            <Alert variant="warning" key={idx}>
              {message}
            </Alert>
          ))}
          </Col>
      </Row>
      <hr/>
      {/* Prop Buyer */}
      <h5 className="mt-1" >Prop Buyer</h5> 
      <Row>
          <Col xs={4} className="d-flex justify-content-center p-0 p-md-2">
          <Form.Group controlId="prop_buyer_name" className={`${styles.Width} `}  >
              <Form.Label className={`${styles.Bold} `} >Name</Form.Label>
              <Form.Control 
              className={`${styles.Input}`}
              type="text"
              name="prop_buyer_name"
              value={prop_buyer_name}
              onChange={handleChange}
                  />
          </Form.Group>
          {errors?.prop_buyer_name?.map((message, idx) => (
            <Alert variant="warning" key={idx}>
              {message}
            </Alert>
          ))}
          </Col>
          <Col xs={4} className="d-flex justify-content-center p-0 p-md-2">
          <Form.Group controlId="prop_buyer_email" className={`${styles.Width} `}  >
              <Form.Label className={`${styles.Bold}`} >Email</Form.Label>
              <Form.Control 
              className={`${styles.Input}`}
              type="text"
              name="prop_buyer_email"
              value={prop_buyer_email}
              onChange={handleChange}
                  />
          </Form.Group>
          {errors?.prop_buyer_email?.map((message, idx) => (
            <Alert variant="warning" key={idx}>
              {message}
            </Alert>
          ))}
          </Col>
          <Col xs={4} className="d-flex justify-content-center p-0 p-md-2">
          <Form.Group controlId="prop_buyer_phone" className={`${styles.Width} `}  >
              <Form.Label className={`${styles.Bold}`} >Phone</Form.Label>
              <Form.Control 
              className={`${styles.Input}`}
              type="text"
              name="prop_buyer_phone"
              value={prop_buyer_phone}
              onChange={handleChange}
                  />
          </Form.Group>
          {errors?.prop_buyer_phone?.map((message, idx) => (
            <Alert variant="warning" key={idx}>
              {message}
            </Alert>
          ))}
          </Col>
      </Row>
      <hr/>
      {/* Armorer */}
      <h5 className="mt-1" >Armorer</h5> 
      <Row>
          <Col xs={4} className="d-flex justify-content-center p-0 p-md-2">
          <Form.Group controlId="armorer_name" className={`${styles.Width} `}  >
              <Form.Label className={`${styles.Bold} `} >Name</Form.Label>
              <Form.Control 
              className={`${styles.Input}`}
              type="text"
              name="armorer_name"
              value={armorer_name}
              onChange={handleChange}
                  />
          </Form.Group>
          {errors?.armorer_name?.map((message, idx) => (
            <Alert variant="warning" key={idx}>
              {message}
            </Alert>
          ))}
          </Col>
          <Col xs={4} className="d-flex justify-content-center p-0 p-md-2">
          <Form.Group controlId="armorer_email" className={`${styles.Width} `}  >
              <Form.Label className={`${styles.Bold}`} >Email</Form.Label>
              <Form.Control 
              className={`${styles.Input}`}
              type="text"
              name="armorer_email"
              value={armorer_email}
              onChange={handleChange}
                  />
          </Form.Group>
          {errors?.armorer_email?.map((message, idx) => (
            <Alert variant="warning" key={idx}>
              {message}
            </Alert>
          ))}
          </Col>
          <Col xs={4} className="d-flex justify-content-center p-0 p-md-2">
          <Form.Group controlId="armorer_phone" className={`${styles.Width} `}  >
              <Form.Label className={`${styles.Bold}`} >Phone</Form.Label>
              <Form.Control 
              className={`${styles.Input}`}
              type="text"
              name="armorer_phone"
              value={armorer_phone}
              onChange={handleChange}
                  />
          </Form.Group>
          {errors?.armorer_phone?.map((message, idx) => (
            <Alert variant="warning" key={idx}>
              {message}
            </Alert>
          ))}
          </Col>
      </Row>
      <hr/>
      </div>

      {/* ELECTRIC */}
      <div>
      <h3 className={` my-3 py-1 ${styles.SubTitle }`} >ELECTRIC</h3> 
      {/* Gaffer */} 
      <h5 className="mt-1" >Gaffer</h5> 
      <Row>
          <Col xs={4} className="d-flex justify-content-center p-0 p-md-2">
          <Form.Group controlId="gaffer_name" className={`${styles.Width} `}  >
              <Form.Label className={`${styles.Bold} `} >Name</Form.Label>
              <Form.Control 
              className={`${styles.Input}`}
              type="text"
              name="gaffer_name"
              value={gaffer_name}
              onChange={handleChange}
                  />
          </Form.Group>
          {errors?.gaffer_name?.map((message, idx) => (
            <Alert variant="warning" key={idx}>
              {message}
            </Alert>
          ))}
          </Col>
          <Col xs={4} className="d-flex justify-content-center p-0 p-md-2">
          <Form.Group controlId="gaffer_email" className={`${styles.Width} `}  >
              <Form.Label className={`${styles.Bold}`} >Email</Form.Label>
              <Form.Control 
              className={`${styles.Input}`}
              type="text"
              name="gaffer_email"
              value={gaffer_email}
              onChange={handleChange}
                  />
          </Form.Group>
          {errors?.gaffer_email?.map((message, idx) => (
            <Alert variant="warning" key={idx}>
              {message}
            </Alert>
          ))}
          </Col>
          <Col xs={4} className="d-flex justify-content-center p-0 p-md-2">
          <Form.Group controlId="gaffer_phone" className={`${styles.Width} `}  >
              <Form.Label className={`${styles.Bold}`} >Phone</Form.Label>
              <Form.Control 
              className={`${styles.Input}`}
              type="text"
              name="gaffer_phone"
              value={gaffer_phone}
              onChange={handleChange}
                  />
          </Form.Group>
          {errors?.gaffer_phone?.map((message, idx) => (
            <Alert variant="warning" key={idx}>
              {message}
            </Alert>
          ))}
          </Col>
      </Row>
      <hr/>
      {/* Best Boy Electric */}
      <h5 className="mt-1" >Best Boy Electric</h5> 
      <Row>
          <Col xs={4} className="d-flex justify-content-center p-0 p-md-2">
          <Form.Group controlId="best_boy_electric_name" className={`${styles.Width} `}  >
              <Form.Label className={`${styles.Bold} `} >Name</Form.Label>
              <Form.Control 
              className={`${styles.Input}`}
              type="text"
              name="best_boy_electric_name"
              value={best_boy_electric_name}
              onChange={handleChange}
                  />
          </Form.Group>
          {errors?.best_boy_electric_name?.map((message, idx) => (
            <Alert variant="warning" key={idx}>
              {message}
            </Alert>
          ))}
          </Col>
          <Col xs={4} className="d-flex justify-content-center p-0 p-md-2">
          <Form.Group controlId="best_boy_electric_email" className={`${styles.Width} `}  >
              <Form.Label className={`${styles.Bold}`} >Email</Form.Label>
              <Form.Control 
              className={`${styles.Input}`}
              type="text"
              name="best_boy_electric_email"
              value={best_boy_electric_email}
              onChange={handleChange}
                  />
          </Form.Group>
          {errors?.best_boy_electric_email?.map((message, idx) => (
            <Alert variant="warning" key={idx}>
              {message}
            </Alert>
          ))}
          </Col>
          <Col xs={4} className="d-flex justify-content-center p-0 p-md-2">
          <Form.Group controlId="best_boy_electric_phone" className={`${styles.Width} `}  >
              <Form.Label className={`${styles.Bold}`} >Phone</Form.Label>
              <Form.Control 
              className={`${styles.Input}`}
              type="text"
              name="best_boy_electric_phone"
              value={best_boy_electric_phone}
              onChange={handleChange}
                  />
          </Form.Group>
          {errors?.best_boy_electric_phone?.map((message, idx) => (
            <Alert variant="warning" key={idx}>
              {message}
            </Alert>
          ))}
          </Col>
      </Row>
      <hr/>
      {/* 3rd Electric */} 
      <h5 className="mt-1" >3rd Electric</h5> 
      <Row>
          <Col xs={4} className="d-flex justify-content-center p-0 p-md-2">
          <Form.Group controlId="electric_3_name" className={`${styles.Width} `}  >
              <Form.Label className={`${styles.Bold} `} >Name</Form.Label>
              <Form.Control 
              className={`${styles.Input}`}
              type="text"
              name="electric_3_name"
              value={electric_3_name}
              onChange={handleChange}
                  />
          </Form.Group>
          {errors?.electric_3_name?.map((message, idx) => (
            <Alert variant="warning" key={idx}>
              {message}
            </Alert>
          ))}
          </Col>
          <Col xs={4} className="d-flex justify-content-center p-0 p-md-2">
          <Form.Group controlId="electric_3_email" className={`${styles.Width} `}  >
              <Form.Label className={`${styles.Bold}`} >Email</Form.Label>
              <Form.Control 
              className={`${styles.Input}`}
              type="text"
              name="electric_3_email"
              value={electric_3_email}
              onChange={handleChange}
                  />
          </Form.Group>
          {errors?.electric_3_email?.map((message, idx) => (
            <Alert variant="warning" key={idx}>
              {message}
            </Alert>
          ))}
          </Col>
          <Col xs={4} className="d-flex justify-content-center p-0 p-md-2">
          <Form.Group controlId="electric_3_phone" className={`${styles.Width} `}  >
              <Form.Label className={`${styles.Bold}`} >Phone</Form.Label>
              <Form.Control 
              className={`${styles.Input}`}
              type="text"
              name="electric_3_phone"
              value={electric_3_phone}
              onChange={handleChange}
                  />
          </Form.Group>
          {errors?.electric_3_phone?.map((message, idx) => (
            <Alert variant="warning" key={idx}>
              {message}
            </Alert>
          ))}
          </Col>
      </Row>
      <hr/>
      {/* 4th Electric */}
      <h5 className="mt-1" >4th Electric</h5> 
      <Row>
          <Col xs={4} className="d-flex justify-content-center p-0 p-md-2">
          <Form.Group controlId="electric_4_name" className={`${styles.Width} `}  >
              <Form.Label className={`${styles.Bold} `} >Name</Form.Label>
              <Form.Control 
              className={`${styles.Input}`}
              type="text"
              name="electric_4_name"
              value={electric_4_name}
              onChange={handleChange}
                  />
          </Form.Group>
          {errors?.electric_4_name?.map((message, idx) => (
            <Alert variant="warning" key={idx}>
              {message}
            </Alert>
          ))}
          </Col>
          <Col xs={4} className="d-flex justify-content-center p-0 p-md-2">
          <Form.Group controlId="electric_4_email" className={`${styles.Width} `}  >
              <Form.Label className={`${styles.Bold}`} >Email</Form.Label>
              <Form.Control 
              className={`${styles.Input}`}
              type="text"
              name="electric_4_email"
              value={electric_4_email}
              onChange={handleChange}
                  />
          </Form.Group>
          {errors?.electric_4_email?.map((message, idx) => (
            <Alert variant="warning" key={idx}>
              {message}
            </Alert>
          ))}
          </Col>
          <Col xs={4} className="d-flex justify-content-center p-0 p-md-2">
          <Form.Group controlId="electric_4_phone" className={`${styles.Width} `}  >
              <Form.Label className={`${styles.Bold}`} >Phone</Form.Label>
              <Form.Control 
              className={`${styles.Input}`}
              type="text"
              name="electric_4_phone"
              value={electric_3_phone}
              onChange={handleChange}
                  />
          </Form.Group>
          {errors?.electric_4_phone?.map((message, idx) => (
            <Alert variant="warning" key={idx}>
              {message}
            </Alert>
          ))}
          </Col>
      </Row>
      <hr/>
      </div>

      {/* drf to here  */}

      {/* GRIP */}
      <div>
      <h3 className={` my-3 py-1 ${styles.SubTitle }`} >GRIP</h3> 
      {/* Key Grip< */} 
      <h5 className="mt-1" >Key Grip</h5> 
      <Row>
          <Col xs={4} className="d-flex justify-content-center p-0 p-md-2">
          <Form.Group controlId="keygrip_name" className={`${styles.Width} `}  >
              <Form.Label className={`${styles.Bold} `} >Name</Form.Label>
              <Form.Control 
              className={`${styles.Input}`}
              type="text"
              name="keygrip_name"
              value={keygrip_name}
              onChange={handleChange}
                  />
          </Form.Group>
          {errors?.keygrip_name?.map((message, idx) => (
            <Alert variant="warning" key={idx}>
              {message}
            </Alert>
          ))}
          </Col>
          <Col xs={4} className="d-flex justify-content-center p-0 p-md-2">
          <Form.Group controlId="keygrip_email" className={`${styles.Width} `}  >
              <Form.Label className={`${styles.Bold}`} >Email</Form.Label>
              <Form.Control 
              className={`${styles.Input}`}
              type="text"
              name="keygrip_email"
              value={keygrip_email}
              onChange={handleChange}
                  />
          </Form.Group>
          {errors?.keygrip_email?.map((message, idx) => (
            <Alert variant="warning" key={idx}>
              {message}
            </Alert>
          ))}
          </Col>
          <Col xs={4} className="d-flex justify-content-center p-0 p-md-2">
          <Form.Group controlId="keygrip_phone" className={`${styles.Width} `}  >
              <Form.Label className={`${styles.Bold}`} >Phone</Form.Label>
              <Form.Control 
              className={`${styles.Input}`}
              type="text"
              name="keygrip_phone"
              value={keygrip_phone}
              onChange={handleChange}
                  />
          </Form.Group>
          {errors?.keygrip_phone?.map((message, idx) => (
            <Alert variant="warning" key={idx}>
              {message}
            </Alert>
          ))}
          </Col>
      </Row>
      <hr/>
      {/* Best Boy Grip */}
      <h5 className="mt-1" >Best Boy Grip</h5> 
      <Row>
          <Col xs={4} className="d-flex justify-content-center p-0 p-md-2">
          <Form.Group controlId="best_boy_grip_name" className={`${styles.Width} `}  >
              <Form.Label className={`${styles.Bold} `} >Name</Form.Label>
              <Form.Control 
              className={`${styles.Input}`}
              type="text"
              name="best_boy_grip_name"
              value={best_boy_grip_name}
              onChange={handleChange}
                  />
          </Form.Group>
          {errors?.best_boy_grip_name?.map((message, idx) => (
            <Alert variant="warning" key={idx}>
              {message}
            </Alert>
          ))}
          </Col>
          <Col xs={4} className="d-flex justify-content-center p-0 p-md-2">
          <Form.Group controlId="best_boy_grip_email" className={`${styles.Width} `}  >
              <Form.Label className={`${styles.Bold}`} >Email</Form.Label>
              <Form.Control 
              className={`${styles.Input}`}
              type="text"
              name="best_boy_grip_email"
              value={best_boy_grip_email}
              onChange={handleChange}
                  />
          </Form.Group>
          {errors?.best_boy_grip_email?.map((message, idx) => (
            <Alert variant="warning" key={idx}>
              {message}
            </Alert>
          ))}
          </Col>
          <Col xs={4} className="d-flex justify-content-center p-0 p-md-2">
          <Form.Group controlId="best_boy_grip_phone" className={`${styles.Width} `}  >
              <Form.Label className={`${styles.Bold}`} >Phone</Form.Label>
              <Form.Control 
              className={`${styles.Input}`}
              type="text"
              name="best_boy_grip_phone"
              value={best_boy_grip_phone}
              onChange={handleChange}
                  />
          </Form.Group>
          {errors?.best_boy_grip_phone?.map((message, idx) => (
            <Alert variant="warning" key={idx}>
              {message}
            </Alert>
          ))}
          </Col>
      </Row>
      <hr/>
      {/* Dolly Grip */} 
      <h5 className="mt-1" >Dolly Grip </h5> 
      <Row>
          <Col xs={4} className="d-flex justify-content-center p-0 p-md-2">
          <Form.Group controlId="dolly_grip_name " className={`${styles.Width} `}  >
              <Form.Label className={`${styles.Bold} `} >Name</Form.Label>
              <Form.Control 
              className={`${styles.Input}`}
              type="text"
              name="dolly_grip_name"
              value={dolly_grip_name}
              onChange={handleChange}
                  />
          </Form.Group>
          {errors?.dolly_grip_name?.map((message, idx) => (
            <Alert variant="warning" key={idx}>
              {message}
            </Alert>
          ))}
          </Col>
          <Col xs={4} className="d-flex justify-content-center p-0 p-md-2">
          <Form.Group controlId="dolly_grip_email" className={`${styles.Width} `}  >
              <Form.Label className={`${styles.Bold}`} >Email</Form.Label>
              <Form.Control 
              className={`${styles.Input}`}
              type="text"
              name="dolly_grip_email"
              value={dolly_grip_email}
              onChange={handleChange}
                  />
          </Form.Group>
          {errors?.dolly_grip_email?.map((message, idx) => (
            <Alert variant="warning" key={idx}>
              {message}
            </Alert>
          ))}
          </Col>
          <Col xs={4} className="d-flex justify-content-center p-0 p-md-2">
          <Form.Group controlId="dolly_grip_phone" className={`${styles.Width} `}  >
              <Form.Label className={`${styles.Bold}`} >Phone</Form.Label>
              <Form.Control 
              className={`${styles.Input}`}
              type="text"
              name="dolly_grip_phone"
              value={dolly_grip_phone}
              onChange={handleChange}
                  />
          </Form.Group>
          {errors?.dolly_grip_phone?.map((message, idx) => (
            <Alert variant="warning" key={idx}>
              {message}
            </Alert>
          ))}
          </Col>
      </Row>
      <hr/>
      {/* Swing G&E 1 */}
      <h5 className="mt-1" >Swing G/E 1</h5> 
      <Row>
          <Col xs={4} className="d-flex justify-content-center p-0 p-md-2">
          <Form.Group controlId="swing_ge1_name" className={`${styles.Width} `}  >
              <Form.Label className={`${styles.Bold} `} >Name</Form.Label>
              <Form.Control 
              className={`${styles.Input}`}
              type="text"
              name="swing_ge1_name"
              value={swing_ge1_name}
              onChange={handleChange}
                  />
          </Form.Group>
          {errors?.swing_ge1_name?.map((message, idx) => (
            <Alert variant="warning" key={idx}>
              {message}
            </Alert>
          ))}
          </Col>
          <Col xs={4} className="d-flex justify-content-center p-0 p-md-2">
          <Form.Group controlId="swing_ge1_email" className={`${styles.Width} `}  >
              <Form.Label className={`${styles.Bold}`} >Email</Form.Label>
              <Form.Control 
              className={`${styles.Input}`}
              type="text"
              name="swing_ge1_email"
              value={swing_ge1_email}
              onChange={handleChange}
                  />
          </Form.Group>
          {errors?.swing_ge1_email?.map((message, idx) => (
            <Alert variant="warning" key={idx}>
              {message}
            </Alert>
          ))}
          </Col>
          <Col xs={4} className="d-flex justify-content-center p-0 p-md-2">
          <Form.Group controlId="swing_ge1_phone" className={`${styles.Width} `}  >
              <Form.Label className={`${styles.Bold}`} >Phone</Form.Label>
              <Form.Control 
              className={`${styles.Input}`}
              type="text"
              name="swing_ge1_phone"
              value={swing_ge1_phone}
              onChange={handleChange}
                  />
          </Form.Group>
          {errors?.swing_ge1_phone?.map((message, idx) => (
            <Alert variant="warning" key={idx}>
              {message}
            </Alert>
          ))}
          </Col>
      </Row>
      <hr/>
      {/* Swing G&E 2 */}
      <h5 className="mt-1" >Swing G/E 2</h5> 
      <Row>
          <Col xs={4} className="d-flex justify-content-center p-0 p-md-2">
          <Form.Group controlId="swing_ge2_name" className={`${styles.Width} `}  >
              <Form.Label className={`${styles.Bold} `} >Name</Form.Label>
              <Form.Control 
              className={`${styles.Input}`}
              type="text"
              name="swing_ge2_name"
              value={swing_ge2_name}
              onChange={handleChange}
                  />
          </Form.Group>
          {errors?.swing_ge2_name?.map((message, idx) => (
            <Alert variant="warning" key={idx}>
              {message}
            </Alert>
          ))}
          </Col>
          <Col xs={4} className="d-flex justify-content-center p-0 p-md-2">
          <Form.Group controlId="swing_ge2_email" className={`${styles.Width} `}  >
              <Form.Label className={`${styles.Bold}`} >Email</Form.Label>
              <Form.Control 
              className={`${styles.Input}`}
              type="text"
              name="swing_ge2_email"
              value={swing_ge2_email}
              onChange={handleChange}
                  />
          </Form.Group>
          {errors?.swing_ge2_email?.map((message, idx) => (
            <Alert variant="warning" key={idx}>
              {message}
            </Alert>
          ))}
          </Col>
          <Col xs={4} className="d-flex justify-content-center p-0 p-md-2">
          <Form.Group controlId="swing_ge2_phone" className={`${styles.Width} `}  >
              <Form.Label className={`${styles.Bold}`} >Phone</Form.Label>
              <Form.Control 
              className={`${styles.Input}`}
              type="text"
              name="swing_ge2_phone"
              value={swing_ge2_phone}
              onChange={handleChange}
                  />
          </Form.Group>
          {errors?.swing_ge2_phone?.map((message, idx) => (
            <Alert variant="warning" key={idx}>
              {message}
            </Alert>
          ))}
          </Col>
      </Row>
      <hr/>
      {/* Swing G&E 3 */}
      <h5 className="mt-1" >Swing G/E 3</h5> 
      <Row>
          <Col xs={4} className="d-flex justify-content-center p-0 p-md-2">
          <Form.Group controlId="swing_ge3_name" className={`${styles.Width} `}  >
              <Form.Label className={`${styles.Bold} `} >Name</Form.Label>
              <Form.Control 
              className={`${styles.Input}`}
              type="text"
              name="swing_ge3_name"
              value={swing_ge3_name}
              onChange={handleChange}
                  />
          </Form.Group>
          {errors?.swing_ge3_name?.map((message, idx) => (
            <Alert variant="warning" key={idx}>
              {message}
            </Alert>
          ))}
          </Col>
          <Col xs={4} className="d-flex justify-content-center p-0 p-md-2">
          <Form.Group controlId="swing_ge3_email" className={`${styles.Width} `}  >
              <Form.Label className={`${styles.Bold}`} >Email</Form.Label>
              <Form.Control 
              className={`${styles.Input}`}
              type="text"
              name="swing_ge3_email"
              value={swing_ge3_email}
              onChange={handleChange}
                  />
          </Form.Group>
          {errors?.swing_ge3_email?.map((message, idx) => (
            <Alert variant="warning" key={idx}>
              {message}
            </Alert>
          ))}
          </Col>
          <Col xs={4} className="d-flex justify-content-center p-0 p-md-2">
          <Form.Group controlId="swing_ge3_phone" className={`${styles.Width} `}  >
              <Form.Label className={`${styles.Bold}`} >Phone</Form.Label>
              <Form.Control 
              className={`${styles.Input}`}
              type="text"
              name="swing_ge3_phone"
              value={swing_ge3_phone}
              onChange={handleChange}
                  />
          </Form.Group>
          {errors?.swing_ge3_phone?.map((message, idx) => (
            <Alert variant="warning" key={idx}>
              {message}
            </Alert>
          ))}
          </Col>
      </Row>
      <hr/>
      {/* Swing G&E 4 */}
      <h5 className="mt-1" >Swing G/E 4</h5> 
      <Row>
          <Col xs={4} className="d-flex justify-content-center p-0 p-md-2">
          <Form.Group controlId="swing_ge4_name" className={`${styles.Width} `}  >
              <Form.Label className={`${styles.Bold} `} >Name</Form.Label>
              <Form.Control 
              className={`${styles.Input}`}
              type="text"
              name="swing_ge4_name"
              value={swing_ge4_name}
              onChange={handleChange}
                  />
          </Form.Group>
          {errors?.swing_ge4_name?.map((message, idx) => (
            <Alert variant="warning" key={idx}>
              {message}
            </Alert>
          ))}
          </Col>
          <Col xs={4} className="d-flex justify-content-center p-0 p-md-2">
          <Form.Group controlId="swing_ge4_email" className={`${styles.Width} `}  >
              <Form.Label className={`${styles.Bold}`} >Email</Form.Label>
              <Form.Control 
              className={`${styles.Input}`}
              type="text"
              name="swing_ge4_email"
              value={swing_ge1_email}
              onChange={handleChange}
                  />
          </Form.Group>
          {errors?.swing_ge4_email?.map((message, idx) => (
            <Alert variant="warning" key={idx}>
              {message}
            </Alert>
          ))}
          </Col>
          <Col xs={4} className="d-flex justify-content-center p-0 p-md-2">
          <Form.Group controlId="swing_ge4_phone" className={`${styles.Width} `}  >
              <Form.Label className={`${styles.Bold}`} >Phone</Form.Label>
              <Form.Control 
              className={`${styles.Input}`}
              type="text"
              name="swing_ge4_phone"
              value={swing_ge4_phone}
              onChange={handleChange}
                  />
          </Form.Group>
          {errors?.swing_ge4_phone?.map((message, idx) => (
            <Alert variant="warning" key={idx}>
              {message}
            </Alert>
          ))}
          </Col>
      </Row>
      <hr/>
      {/* Swing G&E 5 */}
      <h5 className="mt-1" >Swing G/E 5</h5> 
      <Row>
          <Col xs={4} className="d-flex justify-content-center p-0 p-md-2">
          <Form.Group controlId="swing_ge5_name" className={`${styles.Width} `}  >
              <Form.Label className={`${styles.Bold} `} >Name</Form.Label>
              <Form.Control 
              className={`${styles.Input}`}
              type="text"
              name="swing_ge5_name"
              value={swing_ge5_name}
              onChange={handleChange}
                  />
          </Form.Group>
          {errors?.swing_ge5_name?.map((message, idx) => (
            <Alert variant="warning" key={idx}>
              {message}
            </Alert>
          ))}
          </Col>
          <Col xs={4} className="d-flex justify-content-center p-0 p-md-2">
          <Form.Group controlId="swing_ge5_email" className={`${styles.Width} `}  >
              <Form.Label className={`${styles.Bold}`} >Email</Form.Label>
              <Form.Control 
              className={`${styles.Input}`}
              type="text"
              name="swing_ge5_email"
              value={swing_ge5_email}
              onChange={handleChange}
                  />
          </Form.Group>
          {errors?.swing_ge5_email?.map((message, idx) => (
            <Alert variant="warning" key={idx}>
              {message}
            </Alert>
          ))}
          </Col>
          <Col xs={4} className="d-flex justify-content-center p-0 p-md-2">
          <Form.Group controlId="swing_ge5_phone" className={`${styles.Width} `}  >
              <Form.Label className={`${styles.Bold}`} >Phone</Form.Label>
              <Form.Control 
              className={`${styles.Input}`}
              type="text"
              name="swing_ge5_phone"
              value={swing_ge5_phone}
              onChange={handleChange}
                  />
          </Form.Group>
          {errors?.swing_ge5_phone?.map((message, idx) => (
            <Alert variant="warning" key={idx}>
              {message}
            </Alert>
          ))}
          </Col>
      </Row>
      <hr/>
      </div>

      {/* LOCATIONS */}
      <div>
      <h3 className={` my-3 py-1 ${styles.SubTitle }`} >LOCATIONS</h3> 
      {/* Location Mngr  */}
      <h5 className="mt-1" >Location Manager </h5> 
      <Row>
          <Col xs={4} className="d-flex justify-content-center p-0 p-md-2">
          <Form.Group controlId="location_mngr_name" className={`${styles.Width} `}  >
              <Form.Label className={`${styles.Bold} `} >Name</Form.Label>
              <Form.Control 
              className={`${styles.Input}`}
              type="text"
              name="location_mngr_name"
              value={location_mngr_name}
              onChange={handleChange}
                  />
          </Form.Group>
          {errors?.location_mngr_name?.map((message, idx) => (
            <Alert variant="warning" key={idx}>
              {message}
            </Alert>
          ))}
          </Col>
          <Col xs={4} className="d-flex justify-content-center p-0 p-md-2">
          <Form.Group controlId="location_mngr_email" className={`${styles.Width} `}  >
              <Form.Label className={`${styles.Bold}`} >Email</Form.Label>
              <Form.Control 
              className={`${styles.Input}`}
              type="text"
              name="location_mngr_email"
              value={location_mngr_email}
              onChange={handleChange}
                  />
          </Form.Group>
          {errors?.location_mngr_email?.map((message, idx) => (
            <Alert variant="warning" key={idx}>
              {message}
            </Alert>
          ))}
          </Col>
          <Col xs={4} className="d-flex justify-content-center p-0 p-md-2">
          <Form.Group controlId="location_mngr_phone" className={`${styles.Width} `}  >
              <Form.Label className={`${styles.Bold}`} >Phone</Form.Label>
              <Form.Control 
              className={`${styles.Input}`}
              type="text"
              name="location_mngr_phone"
              value={location_mngr_phone}
              onChange={handleChange}
                  />
          </Form.Group>
          {errors?.location_mngr_phone?.map((message, idx) => (
            <Alert variant="warning" key={idx}>
              {message}
            </Alert>
          ))}
          </Col>
      </Row>
      <hr/>
      {/* Location Assistant 1  */}
      <h5 className="mt-1" >Location Assistant 1 </h5> 
      <Row>
          <Col xs={4} className="d-flex justify-content-center p-0 p-md-2">
          <Form.Group controlId="location_ass_1_name" className={`${styles.Width} `}  >
              <Form.Label className={`${styles.Bold} `} >Name</Form.Label>
              <Form.Control 
              className={`${styles.Input}`}
              type="text"
              name="location_ass_1_name"
              value={location_ass_1_name}
              onChange={handleChange}
                  />
          </Form.Group>
          {errors?.location_ass_1_name?.map((message, idx) => (
            <Alert variant="warning" key={idx}>
              {message}
            </Alert>
          ))}
          </Col>
          <Col xs={4} className="d-flex justify-content-center p-0 p-md-2">
          <Form.Group controlId="location_ass_1_email" className={`${styles.Width} `}  >
              <Form.Label className={`${styles.Bold}`} >Email</Form.Label>
              <Form.Control 
              className={`${styles.Input}`}
              type="text"
              name="location_ass_1_email"
              value={location_ass_1_email}
              onChange={handleChange}
                  />
          </Form.Group>
          {errors?.location_ass_1_email?.map((message, idx) => (
            <Alert variant="warning" key={idx}>
              {message}
            </Alert>
          ))}
          </Col>
          <Col xs={4} className="d-flex justify-content-center p-0 p-md-2">
          <Form.Group controlId="location_ass_1_phone" className={`${styles.Width} `}  >
              <Form.Label className={`${styles.Bold}`} >Phone</Form.Label>
              <Form.Control 
              className={`${styles.Input}`}
              type="text"
              name="location_ass_1_phone"
              value={location_ass_1_phone}
              onChange={handleChange}
                  />
          </Form.Group>
          {errors?.location_ass_1_phone?.map((message, idx) => (
            <Alert variant="warning" key={idx}>
              {message}
            </Alert>
          ))}
          </Col>
      </Row>
      <hr/>
      {/* Location Assistant 2  */}
      <h5 className="mt-1" >Location Assistant 2 </h5> 
      <Row>
          <Col xs={4} className="d-flex justify-content-center p-0 p-md-2">
          <Form.Group controlId="location_ass_2_name" className={`${styles.Width} `}  >
              <Form.Label className={`${styles.Bold} `} >Name</Form.Label>
              <Form.Control 
              className={`${styles.Input}`}
              type="text"
              name="location_ass_2_name"
              value={location_ass_2_name}
              onChange={handleChange}
                  />
          </Form.Group>
          {errors?.location_ass_2_name?.map((message, idx) => (
            <Alert variant="warning" key={idx}>
              {message}
            </Alert>
          ))}
          </Col>
          <Col xs={4} className="d-flex justify-content-center p-0 p-md-2">
          <Form.Group controlId="location_ass_2_email" className={`${styles.Width} `}  >
              <Form.Label className={`${styles.Bold}`} >Email</Form.Label>
              <Form.Control 
              className={`${styles.Input}`}
              type="text"
              name="location_ass_2_email"
              value={location_ass_2_email}
              onChange={handleChange}
                  />
          </Form.Group>
          {errors?.location_ass_2_email?.map((message, idx) => (
            <Alert variant="warning" key={idx}>
              {message}
            </Alert>
          ))}
          </Col>
          <Col xs={4} className="d-flex justify-content-center p-0 p-md-2">
          <Form.Group controlId="location_ass_2_phone" className={`${styles.Width} `}  >
              <Form.Label className={`${styles.Bold}`} >Phone</Form.Label>
              <Form.Control 
              className={`${styles.Input}`}
              type="text"
              name="location_ass_2_phone"
              value={location_ass_2_phone}
              onChange={handleChange}
                  />
          </Form.Group>
          {errors?.location_ass_2_phone?.map((message, idx) => (
            <Alert variant="warning" key={idx}>
              {message}
            </Alert>
          ))}
          </Col>
      </Row>
      <hr/>
      {/* Location Assistant 3  */}
      <h5 className="mt-1" >Location Assistant 3 </h5> 
      <Row>
          <Col xs={4} className="d-flex justify-content-center p-0 p-md-2">
          <Form.Group controlId="location_ass_3_name" className={`${styles.Width} `}  >
              <Form.Label className={`${styles.Bold} `} >Name</Form.Label>
              <Form.Control 
              className={`${styles.Input}`}
              type="text"
              name="location_ass_3_name"
              value={location_ass_3_name}
              onChange={handleChange}
                  />
          </Form.Group>
          {errors?.location_ass_3_name?.map((message, idx) => (
            <Alert variant="warning" key={idx}>
              {message}
            </Alert>
          ))}
          </Col>
          <Col xs={4} className="d-flex justify-content-center p-0 p-md-2">
          <Form.Group controlId="location_ass_3_email" className={`${styles.Width} `}  >
              <Form.Label className={`${styles.Bold}`} >Email</Form.Label>
              <Form.Control 
              className={`${styles.Input}`}
              type="text"
              name="location_ass_3_email"
              value={location_ass_3_email}
              onChange={handleChange}
                  />
          </Form.Group>
          {errors?.location_ass_3_email?.map((message, idx) => (
            <Alert variant="warning" key={idx}>
              {message}
            </Alert>
          ))}
          </Col>
          <Col xs={4} className="d-flex justify-content-center p-0 p-md-2">
          <Form.Group controlId="location_ass_3_phone" className={`${styles.Width} `}  >
              <Form.Label className={`${styles.Bold}`} >Phone</Form.Label>
              <Form.Control 
              className={`${styles.Input}`}
              type="text"
              name="location_ass_3_phone"
              value={location_ass_3_phone}
              onChange={handleChange}
                  />
          </Form.Group>
          {errors?.location_ass_3_phone?.map((message, idx) => (
            <Alert variant="warning" key={idx}>
              {message}
            </Alert>
          ))}
          </Col>
      </Row>
      <hr/>
      {/* Location Assistant 4  */}
      <h5 className="mt-1" >Location Assistant 4 </h5> 
      <Row>
          <Col xs={4} className="d-flex justify-content-center p-0 p-md-2">
          <Form.Group controlId="location_ass_4_name" className={`${styles.Width} `}  >
              <Form.Label className={`${styles.Bold} `} >Name</Form.Label>
              <Form.Control 
              className={`${styles.Input}`}
              type="text"
              name="location_ass_4_name"
              value={location_ass_4_name}
              onChange={handleChange}
                  />
          </Form.Group>
          {errors?.location_ass_4_name?.map((message, idx) => (
            <Alert variant="warning" key={idx}>
              {message}
            </Alert>
          ))}
          </Col>
          <Col xs={4} className="d-flex justify-content-center p-0 p-md-2">
          <Form.Group controlId="location_ass_4_email" className={`${styles.Width} `}  >
              <Form.Label className={`${styles.Bold}`} >Email</Form.Label>
              <Form.Control 
              className={`${styles.Input}`}
              type="text"
              name="location_ass_4_email"
              value={location_ass_4_email}
              onChange={handleChange}
                  />
          </Form.Group>
          {errors?.location_ass_4_email?.map((message, idx) => (
            <Alert variant="warning" key={idx}>
              {message}
            </Alert>
          ))}
          </Col>
          <Col xs={4} className="d-flex justify-content-center p-0 p-md-2">
          <Form.Group controlId="location_ass_4_phone" className={`${styles.Width} `}  >
              <Form.Label className={`${styles.Bold}`} >Phone</Form.Label>
              <Form.Control 
              className={`${styles.Input}`}
              type="text"
              name="location_ass_4_phone"
              value={location_ass_4_phone}
              onChange={handleChange}
                  />
          </Form.Group>
          {errors?.location_ass_4_phone?.map((message, idx) => (
            <Alert variant="warning" key={idx}>
              {message}
            </Alert>
          ))}
          </Col>
      </Row>
      <hr/>
      {/* Location Security 4  */}
      <h5 className="mt-1" >Location Security </h5> 
      <Row>
          <Col xs={4} className="d-flex justify-content-center p-0 p-md-2">
          <Form.Group controlId="location_security_name" className={`${styles.Width} `}  >
              <Form.Label className={`${styles.Bold} `} >Name</Form.Label>
              <Form.Control 
              className={`${styles.Input}`}
              type="text"
              name="location_security_name"
              value={location_security_name}
              onChange={handleChange}
                  />
          </Form.Group>
          {errors?.location_security_name?.map((message, idx) => (
            <Alert variant="warning" key={idx}>
              {message}
            </Alert>
          ))}
          </Col>
          <Col xs={4} className="d-flex justify-content-center p-0 p-md-2">
          <Form.Group controlId="location_security_email" className={`${styles.Width} `}  >
              <Form.Label className={`${styles.Bold}`} >Email</Form.Label>
              <Form.Control 
              className={`${styles.Input}`}
              type="text"
              name="location_security_email"
              value={location_security_email}
              onChange={handleChange}
                  />
          </Form.Group>
          {errors?.location_security_email?.map((message, idx) => (
            <Alert variant="warning" key={idx}>
              {message}
            </Alert>
          ))}
          </Col>
          <Col xs={4} className="d-flex justify-content-center p-0 p-md-2">
          <Form.Group controlId="location_security_phone" className={`${styles.Width} `}  >
              <Form.Label className={`${styles.Bold}`} >Phone</Form.Label>
              <Form.Control 
              className={`${styles.Input}`}
              type="text"
              name="location_security_phone"
              value={location_security_phone}
              onChange={handleChange}
                  />
          </Form.Group>
          {errors?.location_security_phone?.map((message, idx) => (
            <Alert variant="warning" key={idx}>
              {message}
            </Alert>
          ))}
          </Col>
      </Row>
      <hr/>
      </div>

      {/* STUNTS */}
      <div>
      <h3 className={` my-3 py-1 ${styles.SubTitle }`} >STUNTS </h3> 
      {/* Stunt Coordinator  */}
      <h5 className="mt-1" >Stunt Coordinator </h5> 
      <Row>
          <Col xs={4} className="d-flex justify-content-center p-0 p-md-2">
          <Form.Group controlId="stunt_coordinator_name" className={`${styles.Width} `}  >
              <Form.Label className={`${styles.Bold} `} >Name</Form.Label>
              <Form.Control 
              className={`${styles.Input}`}
              type="text"
              name="stunt_coordinator_name"
              value={stunt_coordinator_name}
              onChange={handleChange}
                  />
          </Form.Group>
          {errors?.stunt_coordinator_name?.map((message, idx) => (
            <Alert variant="warning" key={idx}>
              {message}
            </Alert>
          ))}
          </Col>
          <Col xs={4} className="d-flex justify-content-center p-0 p-md-2">
          <Form.Group controlId="stunt_coordinator_email" className={`${styles.Width} `}  >
              <Form.Label className={`${styles.Bold}`} >Email</Form.Label>
              <Form.Control 
              className={`${styles.Input}`}
              type="text"
              name="stunt_coordinator_email"
              value={stunt_coordinator_email}
              onChange={handleChange}
                  />
          </Form.Group>
          {errors?.stunt_coordinator_email?.map((message, idx) => (
            <Alert variant="warning" key={idx}>
              {message}
            </Alert>
          ))}
          </Col>
          <Col xs={4} className="d-flex justify-content-center p-0 p-md-2">
          <Form.Group controlId="stunt_coordinator_phone" className={`${styles.Width} `}  >
              <Form.Label className={`${styles.Bold}`} >Phone</Form.Label>
              <Form.Control 
              className={`${styles.Input}`}
              type="text"
              name="stunt_coordinator_phone"
              value={stunt_coordinator_phone}
              onChange={handleChange}
                  />
          </Form.Group>
          {errors?.stunt_coordinator_phone?.map((message, idx) => (
            <Alert variant="warning" key={idx}>
              {message}
            </Alert>
          ))}
          </Col>
      </Row>
      <hr/>
      {/* Stunts 1  */}
      <h5 className="mt-1" >Stunts 1 </h5> 
      <Row>
          <Col xs={4} className="d-flex justify-content-center p-0 p-md-2">
          <Form.Group controlId="stunts_1_name" className={`${styles.Width} `}  >
              <Form.Label className={`${styles.Bold} `} >Name</Form.Label>
              <Form.Control 
              className={`${styles.Input}`}
              type="text"
              name="stunts_1_name"
              value={stunts_1_name}
              onChange={handleChange}
                  />
          </Form.Group>
          {errors?.stunts_1_name?.map((message, idx) => (
            <Alert variant="warning" key={idx}>
              {message}
            </Alert>
          ))}
          </Col>
          <Col xs={4} className="d-flex justify-content-center p-0 p-md-2">
          <Form.Group controlId="stunts_1_email" className={`${styles.Width} `}  >
              <Form.Label className={`${styles.Bold}`} >Email</Form.Label>
              <Form.Control 
              className={`${styles.Input}`}
              type="text"
              name="stunts_1_email"
              value={stunts_1_email}
              onChange={handleChange}
                  />
          </Form.Group>
          {errors?.stunts_1_email?.map((message, idx) => (
            <Alert variant="warning" key={idx}>
              {message}
            </Alert>
          ))}
          </Col>
          <Col xs={4} className="d-flex justify-content-center p-0 p-md-2">
          <Form.Group controlId="stunts_1_phone" className={`${styles.Width} `}  >
              <Form.Label className={`${styles.Bold}`} >Phone</Form.Label>
              <Form.Control 
              className={`${styles.Input}`}
              type="text"
              name="stunts_1_phone"
              value={stunts_1_phone}
              onChange={handleChange}
                  />
          </Form.Group>
          {errors?.stunts_1_phone?.map((message, idx) => (
            <Alert variant="warning" key={idx}>
              {message}
            </Alert>
          ))}
          </Col>
      </Row>
      <hr/>
      {/* Stunts 2  */}
      <h5 className="mt-1" >Stunts 2 </h5> 
      <Row>
          <Col xs={4} className="d-flex justify-content-center p-0 p-md-2">
          <Form.Group controlId="stunts_2_name" className={`${styles.Width} `}  >
              <Form.Label className={`${styles.Bold} `} >Name</Form.Label>
              <Form.Control 
              className={`${styles.Input}`}
              type="text"
              name="stunts_2_name"
              value={stunts_2_name}
              onChange={handleChange}
                  />
          </Form.Group>
          {errors?.stunts_2_name?.map((message, idx) => (
            <Alert variant="warning" key={idx}>
              {message}
            </Alert>
          ))}
          </Col>
          <Col xs={4} className="d-flex justify-content-center p-0 p-md-2">
          <Form.Group controlId="stunts_2_email" className={`${styles.Width} `}  >
              <Form.Label className={`${styles.Bold}`} >Email</Form.Label>
              <Form.Control 
              className={`${styles.Input}`}
              type="text"
              name="stunts_2_email"
              value={stunts_2_email}
              onChange={handleChange}
                  />
          </Form.Group>
          {errors?.stunts_2_email?.map((message, idx) => (
            <Alert variant="warning" key={idx}>
              {message}
            </Alert>
          ))}
          </Col>
          <Col xs={4} className="d-flex justify-content-center p-0 p-md-2">
          <Form.Group controlId="stunts_2_phone" className={`${styles.Width} `}  >
              <Form.Label className={`${styles.Bold}`} >Phone</Form.Label>
              <Form.Control 
              className={`${styles.Input}`}
              type="text"
              name="stunts_2_phone"
              value={stunts_2_phone}
              onChange={handleChange}
                  />
          </Form.Group>
          {errors?.stunts_2_phone?.map((message, idx) => (
            <Alert variant="warning" key={idx}>
              {message}
            </Alert>
          ))}
          </Col>
      </Row>
      <hr/>
      {/* Stunt 3  */}
      <h5 className="mt-1" >Stunts 3 </h5> 
      <Row>
          <Col xs={4} className="d-flex justify-content-center p-0 p-md-2">
          <Form.Group controlId="stunts_3_name" className={`${styles.Width} `}  >
              <Form.Label className={`${styles.Bold} `} >Name</Form.Label>
              <Form.Control 
              className={`${styles.Input}`}
              type="text"
              name="stunts_3_name"
              value={stunts_3_name}
              onChange={handleChange}
                  />
          </Form.Group>
          {errors?.stunts_3_name?.map((message, idx) => (
            <Alert variant="warning" key={idx}>
              {message}
            </Alert>
          ))}
          </Col>
          <Col xs={4} className="d-flex justify-content-center p-0 p-md-2">
          <Form.Group controlId="stunts_3_email" className={`${styles.Width} `}  >
              <Form.Label className={`${styles.Bold}`} >Email</Form.Label>
              <Form.Control 
              className={`${styles.Input}`}
              type="text"
              name="stunts_3_email"
              value={stunts_3_email}
              onChange={handleChange}
                  />
          </Form.Group>
          {errors?.stunts_3_email?.map((message, idx) => (
            <Alert variant="warning" key={idx}>
              {message}
            </Alert>
          ))}
          </Col>
          <Col xs={4} className="d-flex justify-content-center p-0 p-md-2">
          <Form.Group controlId="stunts_3_phone" className={`${styles.Width} `}  >
              <Form.Label className={`${styles.Bold}`} >Phone</Form.Label>
              <Form.Control 
              className={`${styles.Input}`}
              type="text"
              name="stunts_3_phone"
              value={stunts_3_phone}
              onChange={handleChange}
                  />
          </Form.Group>
          {errors?.stunts_3_phone?.map((message, idx) => (
            <Alert variant="warning" key={idx}>
              {message}
            </Alert>
          ))}
          </Col>
      </Row>
      <hr/>
      {/* Stunts 4  */}
      <h5 className="mt-1" >Stunts 4 </h5> 
      <Row>
          <Col xs={4} className="d-flex justify-content-center p-0 p-md-2">
          <Form.Group controlId="stunts_4_name" className={`${styles.Width} `}  >
              <Form.Label className={`${styles.Bold} `} >Name</Form.Label>
              <Form.Control 
              className={`${styles.Input}`}
              type="text"
              name="stunts_4_name"
              value={stunts_4_name}
              onChange={handleChange}
                  />
          </Form.Group>
          {errors?.stunts_4_name?.map((message, idx) => (
            <Alert variant="warning" key={idx}>
              {message}
            </Alert>
          ))}
          </Col>
          <Col xs={4} className="d-flex justify-content-center p-0 p-md-2">
          <Form.Group controlId="stunts_4_email" className={`${styles.Width} `}  >
              <Form.Label className={`${styles.Bold}`} >Email</Form.Label>
              <Form.Control 
              className={`${styles.Input}`}
              type="text"
              name="stunts_4_email"
              value={stunts_4_email}
              onChange={handleChange}
                  />
          </Form.Group>
          {errors?.stunts_4_email?.map((message, idx) => (
            <Alert variant="warning" key={idx}>
              {message}
            </Alert>
          ))}
          </Col>
          <Col xs={4} className="d-flex justify-content-center p-0 p-md-2">
          <Form.Group controlId="stunts_4_phone" className={`${styles.Width} `}  >
              <Form.Label className={`${styles.Bold}`} >Phone</Form.Label>
              <Form.Control 
              className={`${styles.Input}`}
              type="text"
              name="stunts_4_phone"
              value={stunts_4_phone}
              onChange={handleChange}
                  />
          </Form.Group>
          {errors?.stunts_4_phone?.map((message, idx) => (
            <Alert variant="warning" key={idx}>
              {message}
            </Alert>
          ))}
          </Col>
      </Row>
      <hr/>
      {/* Stunts 5  */}
      <h5 className="mt-1" >Stunts 5 </h5> 
      <Row>
          <Col xs={4} className="d-flex justify-content-center p-0 p-md-2">
          <Form.Group controlId="stunts_5_name" className={`${styles.Width} `}  >
              <Form.Label className={`${styles.Bold} `} >Name</Form.Label>
              <Form.Control 
              className={`${styles.Input}`}
              type="text"
              name="stunts_5_name"
              value={stunts_5_name}
              onChange={handleChange}
                  />
          </Form.Group>
          {errors?.stunts_5_name?.map((message, idx) => (
            <Alert variant="warning" key={idx}>
              {message}
            </Alert>
          ))}
          </Col>
          <Col xs={4} className="d-flex justify-content-center p-0 p-md-2">
          <Form.Group controlId="stunts_5_email" className={`${styles.Width} `}  >
              <Form.Label className={`${styles.Bold}`} >Email</Form.Label>
              <Form.Control 
              className={`${styles.Input}`}
              type="text"
              name="stunts_5_email"
              value={stunts_5_email}
              onChange={handleChange}
                  />
          </Form.Group>
          {errors?.stunts_5_email?.map((message, idx) => (
            <Alert variant="warning" key={idx}>
              {message}
            </Alert>
          ))}
          </Col>
          <Col xs={4} className="d-flex justify-content-center p-0 p-md-2">
          <Form.Group controlId="stunts_5_phone" className={`${styles.Width} `}  >
              <Form.Label className={`${styles.Bold}`} >Phone</Form.Label>
              <Form.Control 
              className={`${styles.Input}`}
              type="text"
              name="stunts_5_phone"
              value={stunts_5_phone}
              onChange={handleChange}
                  />
          </Form.Group>
          {errors?.stunts_5_phone?.map((message, idx) => (
            <Alert variant="warning" key={idx}>
              {message}
            </Alert>
          ))}
          </Col>
      </Row>
      <hr/>
      </div>

      {/* MEDIC / FIRE SAFETY */}
      <div>
      <h3 className={` my-3 py-1 ${styles.SubTitle }`} >MEDIC / FIRE SAFETY </h3> 
      {/* Set Medic */}
      <h5 className="mt-1" >Set Medic </h5> 
      <Row>
          <Col xs={4} className="d-flex justify-content-center p-0 p-md-2">
          <Form.Group controlId="set_medic_name" className={`${styles.Width} `}  >
              <Form.Label className={`${styles.Bold} `} >Name</Form.Label>
              <Form.Control 
              className={`${styles.Input}`}
              type="text"
              name="set_medic_name"
              value={set_medic_name}
              onChange={handleChange}
                  />
          </Form.Group>
          {errors?.set_medic_name?.map((message, idx) => (
            <Alert variant="warning" key={idx}>
              {message}
            </Alert>
          ))}
          </Col>
          <Col xs={4} className="d-flex justify-content-center p-0 p-md-2">
          <Form.Group controlId="set_medic_email" className={`${styles.Width} `}  >
              <Form.Label className={`${styles.Bold}`} >Email</Form.Label>
              <Form.Control 
              className={`${styles.Input}`}
              type="text"
              name="set_medic_email"
              value={set_medic_email}
              onChange={handleChange}
                  />
          </Form.Group>
          {errors?.set_medic_email?.map((message, idx) => (
            <Alert variant="warning" key={idx}>
              {message}
            </Alert>
          ))}
          </Col>
          <Col xs={4} className="d-flex justify-content-center p-0 p-md-2">
          <Form.Group controlId="set_medic_phone" className={`${styles.Width} `}  >
              <Form.Label className={`${styles.Bold}`} >Phone</Form.Label>
              <Form.Control 
              className={`${styles.Input}`}
              type="text"
              name="set_medic_phone"
              value={set_medic_phone}
              onChange={handleChange}
                  />
          </Form.Group>
          {errors?.set_medic_phone?.map((message, idx) => (
            <Alert variant="warning" key={idx}>
              {message}
            </Alert>
          ))}
          </Col>
      </Row>
      <hr/>
      </div>

      {/* POST PRODUCTION */}
      <div>
      <h3 className={` my-3 py-1 ${styles.SubTitle }`} >POST PRODUCTION </h3> 
      {/* Editor */}
      <h5 className="mt-1" >Editor </h5> 
      <Row>
          <Col xs={4} className="d-flex justify-content-center p-0 p-md-2">
          <Form.Group controlId="editor_name" className={`${styles.Width} `}  >
              <Form.Label className={`${styles.Bold} `} >Name</Form.Label>
              <Form.Control 
              className={`${styles.Input}`}
              type="text"
              name="editor_name"
              value={editor_name}
              onChange={handleChange}
                  />
          </Form.Group>
          {errors?.editor_name?.map((message, idx) => (
            <Alert variant="warning" key={idx}>
              {message}
            </Alert>
          ))}
          </Col>
          <Col xs={4} className="d-flex justify-content-center p-0 p-md-2">
          <Form.Group controlId="editor_email" className={`${styles.Width} `}  >
              <Form.Label className={`${styles.Bold}`} >Email</Form.Label>
              <Form.Control 
              className={`${styles.Input}`}
              type="text"
              name="editor_email"
              value={editor_email}
              onChange={handleChange}
                  />
          </Form.Group>
          {errors?.editor_email?.map((message, idx) => (
            <Alert variant="warning" key={idx}>
              {message}
            </Alert>
          ))}
          </Col>
          <Col xs={4} className="d-flex justify-content-center p-0 p-md-2">
          <Form.Group controlId="editor_phone" className={`${styles.Width} `}  >
              <Form.Label className={`${styles.Bold}`} >Phone</Form.Label>
              <Form.Control 
              className={`${styles.Input}`}
              type="text"
              name="editor_phone"
              value={editor_phone}
              onChange={handleChange}
                  />
          </Form.Group>
          {errors?.editor_phone?.map((message, idx) => (
            <Alert variant="warning" key={idx}>
              {message}
            </Alert>
          ))}
          </Col>
      </Row>
      <hr/>
      </div>

      {/* LEGAL */}
      <div>
      <h3 className={` my-3 py-1 ${styles.SubTitle }`} >LEGAL </h3> 
      {/* legal  */}
      <h5 className="mt-1" >Legal Consultant </h5> 
      <Row>
          <Col xs={4} className="d-flex justify-content-center p-0 p-md-2">
          <Form.Group controlId="legal_name" className={`${styles.Width} `}  >
              <Form.Label className={`${styles.Bold} `} >Name</Form.Label>
              <Form.Control 
              className={`${styles.Input}`}
              type="text"
              name="legal_name"
              value={legal_name}
              onChange={handleChange}
                  />
          </Form.Group>
          {errors?.legal_name?.map((message, idx) => (
            <Alert variant="warning" key={idx}>
              {message}
            </Alert>
          ))}
          </Col>
          <Col xs={4} className="d-flex justify-content-center p-0 p-md-2">
          <Form.Group controlId="legal_email" className={`${styles.Width} `}  >
              <Form.Label className={`${styles.Bold}`} >Email</Form.Label>
              <Form.Control 
              className={`${styles.Input}`}
              type="text"
              name="legal_email"
              value={legal_email}
              onChange={handleChange}
                  />
          </Form.Group>
          {errors?.legal_email?.map((message, idx) => (
            <Alert variant="warning" key={idx}>
              {message}
            </Alert>
          ))}
          </Col>
          <Col xs={4} className="d-flex justify-content-center p-0 p-md-2">
          <Form.Group controlId="legal_phone" className={`${styles.Width} `}  >
              <Form.Label className={`${styles.Bold}`} >Phone</Form.Label>
              <Form.Control 
              className={`${styles.Input}`}
              type="text"
              name="legal_phone"
              value={legal_phone}
              onChange={handleChange}
                  />
          </Form.Group>
          {errors?.legal_phone?.map((message, idx) => (
            <Alert variant="warning" key={idx}>
              {message}
            </Alert>
          ))}
          </Col>
      </Row>
      <hr/>
      </div>

      {/* CASTING/EXTRAS */}
      <div>
      <h3 className={` my-3 py-1 ${styles.SubTitle }`} >CASTING/EXTRAS </h3> 
      {/* Casting Director  */}
      <h5 className="mt-1" >Casting Director </h5> 
      <Row>
          <Col xs={4} className="d-flex justify-content-center p-0 p-md-2">
          <Form.Group controlId="casting_director_name" className={`${styles.Width} `}  >
              <Form.Label className={`${styles.Bold} `} >Name</Form.Label>
              <Form.Control 
              className={`${styles.Input}`}
              type="text"
              name="casting_director_name"
              value={casting_director_name}
              onChange={handleChange}
                  />
          </Form.Group>
          {errors?.casting_director_name?.map((message, idx) => (
            <Alert variant="warning" key={idx}>
              {message}
            </Alert>
          ))}
          </Col>
          <Col xs={4} className="d-flex justify-content-center p-0 p-md-2">
          <Form.Group controlId="casting_director_email" className={`${styles.Width} `}  >
              <Form.Label className={`${styles.Bold}`} >Email</Form.Label>
              <Form.Control 
              className={`${styles.Input}`}
              type="text"
              name="casting_director_email"
              value={casting_director_email}
              onChange={handleChange}
                  />
          </Form.Group>
          {errors?.casting_director_email?.map((message, idx) => (
            <Alert variant="warning" key={idx}>
              {message}
            </Alert>
          ))}
          </Col>
          <Col xs={4} className="d-flex justify-content-center p-0 p-md-2">
          <Form.Group controlId="casting_director_phone" className={`${styles.Width} `}  >
              <Form.Label className={`${styles.Bold}`} >Phone</Form.Label>
              <Form.Control 
              className={`${styles.Input}`}
              type="text"
              name="casting_director_phone"
              value={casting_director_phone}
              onChange={handleChange}
                  />
          </Form.Group>
          {errors?.casting_director_phone?.map((message, idx) => (
            <Alert variant="warning" key={idx}>
              {message}
            </Alert>
          ))}
          </Col>
      </Row>
      <hr/>
      {/* Extras Casting  */}
      <h5 className="mt-1" >Extras Casting </h5> 
      <Row>
          <Col xs={4} className="d-flex justify-content-center p-0 p-md-2">
          <Form.Group controlId="extras_casting_name" className={`${styles.Width} `}  >
              <Form.Label className={`${styles.Bold} `} >Name</Form.Label>
              <Form.Control 
              className={`${styles.Input}`}
              type="text"
              name="extras_casting_name"
              value={extras_casting_name}
              onChange={handleChange}
                  />
          </Form.Group>
          {errors?.extras_casting_name?.map((message, idx) => (
            <Alert variant="warning" key={idx}>
              {message}
            </Alert>
          ))}
          </Col>
          <Col xs={4} className="d-flex justify-content-center p-0 p-md-2">
          <Form.Group controlId="extras_casting_email" className={`${styles.Width} `}  >
              <Form.Label className={`${styles.Bold}`} >Email</Form.Label>
              <Form.Control 
              className={`${styles.Input}`}
              type="text"
              name="extras_casting_email"
              value={extras_casting_email}
              onChange={handleChange}
                  />
          </Form.Group>
          {errors?.extras_casting_email?.map((message, idx) => (
            <Alert variant="warning" key={idx}>
              {message}
            </Alert>
          ))}
          </Col>
          <Col xs={4} className="d-flex justify-content-center p-0 p-md-2">
          <Form.Group controlId="extras_casting_phone" className={`${styles.Width} `}  >
              <Form.Label className={`${styles.Bold}`} >Phone</Form.Label>
              <Form.Control 
              className={`${styles.Input}`}
              type="text"
              name="extras_casting_phone"
              value={extras_casting_phone}
              onChange={handleChange}
                  />
          </Form.Group>
          {errors?.casting_director_phone?.map((message, idx) => (
            <Alert variant="warning" key={idx}>
              {message}
            </Alert>
          ))}
          </Col>
      </Row>
      <hr/>
      </div>

      {/* SCRIPT */}
      <div>
      <h3 className={` my-3 py-1 ${styles.SubTitle }`} >SCRIPT </h3> 
      {/* Writer  */}
      <h5 className="mt-1" >Writer </h5> 
      <Row>
          <Col xs={4} className="d-flex justify-content-center p-0 p-md-2">
          <Form.Group controlId="writer_name" className={`${styles.Width} `}  >
              <Form.Label className={`${styles.Bold} `} >Name</Form.Label>
              <Form.Control 
              className={`${styles.Input}`}
              type="text"
              name="writer_name"
              value={writer_name}
              onChange={handleChange}
                  />
          </Form.Group>
          {errors?.writer_name?.map((message, idx) => (
            <Alert variant="warning" key={idx}>
              {message}
            </Alert>
          ))}
          </Col>
          <Col xs={4} className="d-flex justify-content-center p-0 p-md-2">
          <Form.Group controlId="writer_email" className={`${styles.Width} `}  >
              <Form.Label className={`${styles.Bold}`} >Email</Form.Label>
              <Form.Control 
              className={`${styles.Input}`}
              type="text"
              name="writer_email"
              value={writer_email}
              onChange={handleChange}
                  />
          </Form.Group>
          {errors?.writer_email?.map((message, idx) => (
            <Alert variant="warning" key={idx}>
              {message}
            </Alert>
          ))}
          </Col>
          <Col xs={4} className="d-flex justify-content-center p-0 p-md-2">
          <Form.Group controlId="writer_phone" className={`${styles.Width} `}  >
              <Form.Label className={`${styles.Bold}`} >Phone</Form.Label>
              <Form.Control 
              className={`${styles.Input}`}
              type="text"
              name="writer_phone"
              value={writer_phone}
              onChange={handleChange}
                  />
          </Form.Group>
          {errors?.writer_phone?.map((message, idx) => (
            <Alert variant="warning" key={idx}>
              {message}
            </Alert>
          ))}
          </Col>
      </Row>
      <hr/>
      </div>

      {/* VISUAL EFFECTS */}
      <div>
      <h3 className={` my-3 py-1 ${styles.SubTitle }`} >VISUAL EFFECTS </h3> 
      {/* FX  */}
      <h5 className="mt-1" >FX </h5> 
      <Row>
          <Col xs={4} className="d-flex justify-content-center p-0 p-md-2">
          <Form.Group controlId="fx_name" className={`${styles.Width} `}  >
              <Form.Label className={`${styles.Bold} `} >Name</Form.Label>
              <Form.Control 
              className={`${styles.Input}`}
              type="text"
              name="fx_name"
              value={fx_name}
              onChange={handleChange}
                  />
          </Form.Group>
          {errors?.fx_name?.map((message, idx) => (
            <Alert variant="warning" key={idx}>
              {message}
            </Alert>
          ))}
          </Col>
          <Col xs={4} className="d-flex justify-content-center p-0 p-md-2">
          <Form.Group controlId="fx_email" className={`${styles.Width} `}  >
              <Form.Label className={`${styles.Bold}`} >Email</Form.Label>
              <Form.Control 
              className={`${styles.Input}`}
              type="text"
              name="fx_email"
              value={fx_email}
              onChange={handleChange}
                  />
          </Form.Group>
          {errors?.fx_email?.map((message, idx) => (
            <Alert variant="warning" key={idx}>
              {message}
            </Alert>
          ))}
          </Col>
          <Col xs={4} className="d-flex justify-content-center p-0 p-md-2">
          <Form.Group controlId="fx_phone" className={`${styles.Width} `}  >
              <Form.Label className={`${styles.Bold}`} >Phone</Form.Label>
              <Form.Control 
              className={`${styles.Input}`}
              type="text"
              name="fx_phone"
              value={fx_phone}
              onChange={handleChange}
                  />
          </Form.Group>
          {errors?.fx_phone?.map((message, idx) => (
            <Alert variant="warning" key={idx}>
              {message}
            </Alert>
          ))}
          </Col>
      </Row>
      <hr/>
      </div>

      {/* TRANSPORTATION */}
      <div>
      <h3 className={` my-3 py-1 ${styles.SubTitle }`} >TRANSPORTATION </h3> 
      {/* Transport Captain  */} 
      <h5 className="mt-1" >Transport Captain</h5> 
      <Row>
          <Col xs={4} className="d-flex justify-content-center p-0 p-md-2">
          <Form.Group controlId="transport_captain_name" className={`${styles.Width} `}  >
              <Form.Label className={`${styles.Bold} `} >Name</Form.Label>
              <Form.Control 
              className={`${styles.Input}`}
              type="text"
              name="transport_captain_name"
              value={transport_captain_name}
              onChange={handleChange}
                  />
          </Form.Group>
          {errors?.transport_captain_name?.map((message, idx) => (
            <Alert variant="warning" key={idx}>
              {message}
            </Alert>
          ))}
          </Col>
          <Col xs={4} className="d-flex justify-content-center p-0 p-md-2">
          <Form.Group controlId="transport_captain_email" className={`${styles.Width} `}  >
              <Form.Label className={`${styles.Bold}`} >Email</Form.Label>
              <Form.Control 
              className={`${styles.Input}`}
              type="text"
              name="transport_captain_email"
              value={transport_captain_email}
              onChange={handleChange}
                  />
          </Form.Group>
          {errors?.transport_captain_email?.map((message, idx) => (
            <Alert variant="warning" key={idx}>
              {message}
            </Alert>
          ))}
          </Col>
          <Col xs={4} className="d-flex justify-content-center p-0 p-md-2">
          <Form.Group controlId="transport_captain_phone" className={`${styles.Width} `}  >
              <Form.Label className={`${styles.Bold}`} >Phone</Form.Label>
              <Form.Control 
              className={`${styles.Input}`}
              type="text"
              name="transport_captain_phone"
              value={transport_captain_phone}
              onChange={handleChange}
                  />
          </Form.Group>
          {errors?.transport_captain_phone?.map((message, idx) => (
            <Alert variant="warning" key={idx}>
              {message}
            </Alert>
          ))}
          </Col>
      </Row>
      <hr/>
      {/* Transport Manager 1  */}
      <h5 className="mt-1" >Transport Manager 1 </h5> 
      <Row>
          <Col xs={4} className="d-flex justify-content-center p-0 p-md-2">
          <Form.Group controlId="transport_manager_1_name" className={`${styles.Width} `}  >
              <Form.Label className={`${styles.Bold} `} >Name</Form.Label>
              <Form.Control 
              className={`${styles.Input}`}
              type="text"
              name="transport_manager_1_name"
              value={transport_manager_1_name}
              onChange={handleChange}
                  />
          </Form.Group>
          {errors?.transport_manager_1_name?.map((message, idx) => (
            <Alert variant="warning" key={idx}>
              {message}
            </Alert>
          ))}
          </Col>
          <Col xs={4} className="d-flex justify-content-center p-0 p-md-2">
          <Form.Group controlId="transport_manager_1_email" className={`${styles.Width} `}  >
              <Form.Label className={`${styles.Bold}`} >Email</Form.Label>
              <Form.Control 
              className={`${styles.Input}`}
              type="text"
              name="transport_manager_1_email"
              value={transport_manager_1_email}
              onChange={handleChange}
                  />
          </Form.Group>
          {errors?.transport_manager_1_email?.map((message, idx) => (
            <Alert variant="warning" key={idx}>
              {message}
            </Alert>
          ))}
          </Col>
          <Col xs={4} className="d-flex justify-content-center p-0 p-md-2">
          <Form.Group controlId="transport_manager_1_phone" className={`${styles.Width} `}  >
              <Form.Label className={`${styles.Bold}`} >Phone</Form.Label>
              <Form.Control 
              className={`${styles.Input}`}
              type="text"
              name="transport_manager_1_phone"
              value={transport_manager_1_phone}
              onChange={handleChange}
                  />
          </Form.Group>
          {errors?.transport_manager_1_phone?.map((message, idx) => (
            <Alert variant="warning" key={idx}>
              {message}
            </Alert>
          ))}
          </Col>
      </Row>
      <hr/>
      {/* Transport Manager 2  */}
      <h5 className="mt-1" >Transport Manager 2 </h5> 
      <Row>
          <Col xs={4} className="d-flex justify-content-center p-0 p-md-2">
          <Form.Group controlId="transport_manager_2_name" className={`${styles.Width} `}  >
              <Form.Label className={`${styles.Bold} `} >Name</Form.Label>
              <Form.Control 
              className={`${styles.Input}`}
              type="text"
              name="transport_manager_2_name"
              value={transport_manager_2_name}
              onChange={handleChange}
                  />
          </Form.Group>
          {errors?.transport_manager_2_name?.map((message, idx) => (
            <Alert variant="warning" key={idx}>
              {message}
            </Alert>
          ))}
          </Col>
          <Col xs={4} className="d-flex justify-content-center p-0 p-md-2">
          <Form.Group controlId="transport_manager_2_email" className={`${styles.Width} `}  >
              <Form.Label className={`${styles.Bold}`} >Email</Form.Label>
              <Form.Control 
              className={`${styles.Input}`}
              type="text"
              name="transport_manager_2_email"
              value={transport_manager_2_email}
              onChange={handleChange}
                  />
          </Form.Group>
          {errors?.transport_manager_2_email?.map((message, idx) => (
            <Alert variant="warning" key={idx}>
              {message}
            </Alert>
          ))}
          </Col>
          <Col xs={4} className="d-flex justify-content-center p-0 p-md-2">
          <Form.Group controlId="transport_manager_2_phone" className={`${styles.Width} `}  >
              <Form.Label className={`${styles.Bold}`} >Phone</Form.Label>
              <Form.Control 
              className={`${styles.Input}`}
              type="text"
              name="transport_manager_2_phone"
              value={transport_manager_2_phone}
              onChange={handleChange}
                  />
          </Form.Group>
          {errors?.transport_manager_2_phone?.map((message, idx) => (
            <Alert variant="warning" key={idx}>
              {message}
            </Alert>
          ))}
          </Col>
      </Row>
      <hr/>
      {/* Head Driver  */}
      <h5 className="mt-1" >Head Driver </h5> 
      <Row>
          <Col xs={4} className="d-flex justify-content-center p-0 p-md-2">
          <Form.Group controlId="head_driver_name" className={`${styles.Width} `}  >
              <Form.Label className={`${styles.Bold} `} >Name</Form.Label>
              <Form.Control 
              className={`${styles.Input}`}
              type="text"
              name="head_driver_name"
              value={head_driver_name}
              onChange={handleChange}
                  />
          </Form.Group>
          {errors?.head_driver_name?.map((message, idx) => (
            <Alert variant="warning" key={idx}>
              {message}
            </Alert>
          ))}
          </Col>
          <Col xs={4} className="d-flex justify-content-center p-0 p-md-2">
          <Form.Group controlId="head_driver_email" className={`${styles.Width} `}  >
              <Form.Label className={`${styles.Bold}`} >Email</Form.Label>
              <Form.Control 
              className={`${styles.Input}`}
              type="text"
              name="head_driver_email"
              value={head_driver_email}
              onChange={handleChange}
                  />
          </Form.Group>
          {errors?.head_driver_email?.map((message, idx) => (
            <Alert variant="warning" key={idx}>
              {message}
            </Alert>
          ))}
          </Col>
          <Col xs={4} className="d-flex justify-content-center p-0 p-md-2">
          <Form.Group controlId="head_driver_phone" className={`${styles.Width} `}  >
              <Form.Label className={`${styles.Bold}`} >Phone</Form.Label>
              <Form.Control 
              className={`${styles.Input}`}
              type="text"
              name="head_driver_phone"
              value={head_driver_phone}
              onChange={handleChange}
                  />
          </Form.Group>
          {errors?.head_driver_phone?.map((message, idx) => (
            <Alert variant="warning" key={idx}>
              {message}
            </Alert>
          ))}
          </Col>
      </Row>
      <hr/>
      </div>

      {/* VEHICLES */}
      <div>
      <h3 className={` my-3 py-1 ${styles.SubTitle }`} >VEHICLES </h3> 
      {/* Truck 1  */}
      <h5 className="mt-1" >Truck 1 </h5> 
      <Row>
          <Col xs={4} className="d-flex justify-content-center p-0 p-md-2">
          <Form.Group controlId="truck1_name" className={`${styles.Width} `}  >
              <Form.Label className={`${styles.Bold} `} >Name</Form.Label>
              <Form.Control 
              className={`${styles.Input}`}
              type="text"
              name="truck1_name"
              value={truck1_name}
              onChange={handleChange}
                  />
          </Form.Group>
          {errors?.truck1_name?.map((message, idx) => (
            <Alert variant="warning" key={idx}>
              {message}
            </Alert>
          ))}
          </Col>
          <Col xs={4} className="d-flex justify-content-center p-0 p-md-2">
          <Form.Group controlId="truck1_email" className={`${styles.Width} `}  >
              <Form.Label className={`${styles.Bold}`} >Email</Form.Label>
              <Form.Control 
              className={`${styles.Input}`}
              type="text"
              name="truck1_email"
              value={truck1_email}
              onChange={handleChange}
                  />
          </Form.Group>
          {errors?.truck1_email?.map((message, idx) => (
            <Alert variant="warning" key={idx}>
              {message}
            </Alert>
          ))}
          </Col>
          <Col xs={4} className="d-flex justify-content-center p-0 p-md-2">
          <Form.Group controlId="truck1_phone" className={`${styles.Width} `}  >
              <Form.Label className={`${styles.Bold}`} >Phone</Form.Label>
              <Form.Control 
              className={`${styles.Input}`}
              type="text"
              name="truck1_phone"
              value={truck1_phone}
              onChange={handleChange}
                  />
          </Form.Group>
          {errors?.truck1_phone?.map((message, idx) => (
            <Alert variant="warning" key={idx}>
              {message}
            </Alert>
          ))}
          </Col>
      </Row>
      <hr/>
      {/* Truck 2  */}
      <h5 className="mt-1" >Truck 2 </h5> 
      <Row>
          <Col xs={4} className="d-flex justify-content-center p-0 p-md-2">
          <Form.Group controlId="truck2_name" className={`${styles.Width} `}  >
              <Form.Label className={`${styles.Bold} `} >Name</Form.Label>
              <Form.Control 
              className={`${styles.Input}`}
              type="text"
              name="truck2_name"
              value={truck2_name}
              onChange={handleChange}
                  />
          </Form.Group>
          {errors?.truck2_name?.map((message, idx) => (
            <Alert variant="warning" key={idx}>
              {message}
            </Alert>
          ))}
          </Col>
          <Col xs={4} className="d-flex justify-content-center p-0 p-md-2">
          <Form.Group controlId="truck2_email" className={`${styles.Width} `}  >
              <Form.Label className={`${styles.Bold}`} >Email</Form.Label>
              <Form.Control 
              className={`${styles.Input}`}
              type="text"
              name="truck2_email"
              value={truck2_email}
              onChange={handleChange}
                  />
          </Form.Group>
          {errors?.truck2_email?.map((message, idx) => (
            <Alert variant="warning" key={idx}>
              {message}
            </Alert>
          ))}
          </Col>
          <Col xs={4} className="d-flex justify-content-center p-0 p-md-2">
          <Form.Group controlId="truck2_phone" className={`${styles.Width} `}  >
              <Form.Label className={`${styles.Bold}`} >Phone</Form.Label>
              <Form.Control 
              className={`${styles.Input}`}
              type="text"
              name="truck2_phone"
              value={truck2_phone}
              onChange={handleChange}
                  />
          </Form.Group>
          {errors?.truck2_phone?.map((message, idx) => (
            <Alert variant="warning" key={idx}>
              {message}
            </Alert>
          ))}
          </Col>
      </Row>
      <hr/>
      {/* Truck 3  */}
      <h5 className="mt-1" >Truck 3 </h5> 
      <Row>
          <Col xs={4} className="d-flex justify-content-center p-0 p-md-2">
          <Form.Group controlId="truck3_name" className={`${styles.Width} `}  >
              <Form.Label className={`${styles.Bold} `} >Name</Form.Label>
              <Form.Control 
              className={`${styles.Input}`}
              type="text"
              name="truck3_name"
              value={truck3_name}
              onChange={handleChange}
                  />
          </Form.Group>
          {errors?.truck3_name?.map((message, idx) => (
            <Alert variant="warning" key={idx}>
              {message}
            </Alert>
          ))}
          </Col>
          <Col xs={4} className="d-flex justify-content-center p-0 p-md-2">
          <Form.Group controlId="truck3_email" className={`${styles.Width} `}  >
              <Form.Label className={`${styles.Bold}`} >Email</Form.Label>
              <Form.Control 
              className={`${styles.Input}`}
              type="text"
              name="truck3_email"
              value={truck3_email}
              onChange={handleChange}
                  />
          </Form.Group>
          {errors?.truck3_email?.map((message, idx) => (
            <Alert variant="warning" key={idx}>
              {message}
            </Alert>
          ))}
          </Col>
          <Col xs={4} className="d-flex justify-content-center p-0 p-md-2">
          <Form.Group controlId="truck3_phone" className={`${styles.Width} `}  >
              <Form.Label className={`${styles.Bold}`} >Phone</Form.Label>
              <Form.Control 
              className={`${styles.Input}`}
              type="text"
              name="truck3_phone"
              value={truck3_phone}
              onChange={handleChange}
                  />
          </Form.Group>
          {errors?.truck3_phone?.map((message, idx) => (
            <Alert variant="warning" key={idx}>
              {message}
            </Alert>
          ))}
          </Col>
      </Row>
      <hr/>
      {/* Car 1  */}
      <h5 className="mt-1" >Car 1 </h5> 
      <Row>
          <Col xs={4} className="d-flex justify-content-center p-0 p-md-2">
          <Form.Group controlId="car1_name" className={`${styles.Width} `}  >
              <Form.Label className={`${styles.Bold} `} >Name</Form.Label>
              <Form.Control 
              className={`${styles.Input}`}
              type="text"
              name="car1_name"
              value={car1_name}
              onChange={handleChange}
                  />
          </Form.Group>
          {errors?.car1_name?.map((message, idx) => (
            <Alert variant="warning" key={idx}>
              {message}
            </Alert>
          ))}
          </Col>
          <Col xs={4} className="d-flex justify-content-center p-0 p-md-2">
          <Form.Group controlId="car1_email" className={`${styles.Width} `}  >
              <Form.Label className={`${styles.Bold}`} >Email</Form.Label>
              <Form.Control 
              className={`${styles.Input}`}
              type="text"
              name="car1_email"
              value={car1_email}
              onChange={handleChange}
                  />
          </Form.Group>
          {errors?.car1_email?.map((message, idx) => (
            <Alert variant="warning" key={idx}>
              {message}
            </Alert>
          ))}
          </Col>
          <Col xs={4} className="d-flex justify-content-center p-0 p-md-2">
          <Form.Group controlId="car1_phone" className={`${styles.Width} `}  >
              <Form.Label className={`${styles.Bold}`} >Phone</Form.Label>
              <Form.Control 
              className={`${styles.Input}`}
              type="text"
              name="car1_phone"
              value={car1_phone}
              onChange={handleChange}
                  />
          </Form.Group>
          {errors?.car1_phone?.map((message, idx) => (
            <Alert variant="warning" key={idx}>
              {message}
            </Alert>
          ))}
          </Col>
      </Row>
      <hr/>
      {/* Car 2 */}
      <h5 className="mt-1" >Car 2 </h5> 
      <Row>
          <Col xs={4} className="d-flex justify-content-center p-0 p-md-2">
          <Form.Group controlId="car2_name" className={`${styles.Width} `}  >
              <Form.Label className={`${styles.Bold} `} >Name</Form.Label>
              <Form.Control 
              className={`${styles.Input}`}
              type="text"
              name="car2_name"
              value={car2_name}
              onChange={handleChange}
                  />
          </Form.Group>
          {errors?.car2_name?.map((message, idx) => (
            <Alert variant="warning" key={idx}>
              {message}
            </Alert>
          ))}
          </Col>
          <Col xs={4} className="d-flex justify-content-center p-0 p-md-2">
          <Form.Group controlId="car2_email" className={`${styles.Width} `}  >
              <Form.Label className={`${styles.Bold}`} >Email</Form.Label>
              <Form.Control 
              className={`${styles.Input}`}
              type="text"
              name="car2_email"
              value={car2_email}
              onChange={handleChange}
                  />
          </Form.Group>
          {errors?.car2_email?.map((message, idx) => (
            <Alert variant="warning" key={idx}>
              {message}
            </Alert>
          ))}
          </Col>
          <Col xs={4} className="d-flex justify-content-center p-0 p-md-2">
          <Form.Group controlId="car2_phone" className={`${styles.Width} `}  >
              <Form.Label className={`${styles.Bold}`} >Phone</Form.Label>
              <Form.Control 
              className={`${styles.Input}`}
              type="text"
              name="car2_phone"
              value={car2_phone}
              onChange={handleChange}
                  />
          </Form.Group>
          {errors?.car2_phone?.map((message, idx) => (
            <Alert variant="warning" key={idx}>
              {message}
            </Alert>
          ))}
          </Col>
      </Row>
      <hr/>
      {/* Car 3  */}
      <h5 className="mt-1" >Car 3 </h5> 
      <Row>
          <Col xs={4} className="d-flex justify-content-center p-0 p-md-2">
          <Form.Group controlId="car3_name" className={`${styles.Width} `}  >
              <Form.Label className={`${styles.Bold} `} >Name</Form.Label>
              <Form.Control 
              className={`${styles.Input}`}
              type="text"
              name="car3_name"
              value={car3_name}
              onChange={handleChange}
                  />
          </Form.Group>
          {errors?.car3_name?.map((message, idx) => (
            <Alert variant="warning" key={idx}>
              {message}
            </Alert>
          ))}
          </Col>
          <Col xs={4} className="d-flex justify-content-center p-0 p-md-2">
          <Form.Group controlId="car3_email" className={`${styles.Width} `}  >
              <Form.Label className={`${styles.Bold}`} >Email</Form.Label>
              <Form.Control 
              className={`${styles.Input}`}
              type="text"
              name="car3_email"
              value={car3_email}
              onChange={handleChange}
                  />
          </Form.Group>
          {errors?.car3_email?.map((message, idx) => (
            <Alert variant="warning" key={idx}>
              {message}
            </Alert>
          ))}
          </Col>
          <Col xs={4} className="d-flex justify-content-center p-0 p-md-2">
          <Form.Group controlId="car3_phone" className={`${styles.Width} `}  >
              <Form.Label className={`${styles.Bold}`} >Phone</Form.Label>
              <Form.Control 
              className={`${styles.Input}`}
              type="text"
              name="car3_phone"
              value={car3_phone}
              onChange={handleChange}
                  />
          </Form.Group>
          {errors?.car3_phone?.map((message, idx) => (
            <Alert variant="warning" key={idx}>
              {message}
            </Alert>
          ))}
          </Col>
      </Row>
      <hr/>
      </div>

      {/* CATERING */}
      <div>
      <h3 className={` my-3 py-1 ${styles.SubTitle }`} >CATERING </h3> 
      {/* Catering Company 1 */}
      <h5 className="mt-1" >Catering Company 1 </h5> 
      <Row>
          <Col xs={4} className="d-flex justify-content-center p-0 p-md-2">
          <Form.Group controlId="catering_co_1_name" className={`${styles.Width} `}  >
              <Form.Label className={`${styles.Bold} `} >Name</Form.Label>
              <Form.Control 
              className={`${styles.Input}`}
              type="text"
              name="catering_co_1_name"
              value={catering_co_1_name}
              onChange={handleChange}
                  />
          </Form.Group>
          {errors?.catering_co_1_name?.map((message, idx) => (
            <Alert variant="warning" key={idx}>
              {message}
            </Alert>
          ))}
          </Col>
          <Col xs={4} className="d-flex justify-content-center p-0 p-md-2">
          <Form.Group controlId="catering_co_1_email" className={`${styles.Width} `}  >
              <Form.Label className={`${styles.Bold}`} >Email</Form.Label>
              <Form.Control 
              className={`${styles.Input}`}
              type="text"
              name="catering_co_1_email"
              value={catering_co_1_email}
              onChange={handleChange}
                  />
          </Form.Group>
          {errors?.catering_co_1_email?.map((message, idx) => (
            <Alert variant="warning" key={idx}>
              {message}
            </Alert>
          ))}
          </Col>
          <Col xs={4} className="d-flex justify-content-center p-0 p-md-2">
          <Form.Group controlId="catering_co_1_phone" className={`${styles.Width} `}  >
              <Form.Label className={`${styles.Bold}`} >Phone</Form.Label>
              <Form.Control 
              className={`${styles.Input}`}
              type="text"
              name="catering_co_1_phone"
              value={catering_co_1_phone}
              onChange={handleChange}
                  />
          </Form.Group>
          {errors?.catering_co_1_phone?.map((message, idx) => (
            <Alert variant="warning" key={idx}>
              {message}
            </Alert>
          ))}
          </Col>
      </Row>
      <hr/>
      {/* Catering Company 2 */}
      <h5 className="mt-1" >Catering Company 2 </h5> 
      <Row>
          <Col xs={4} className="d-flex justify-content-center p-0 p-md-2">
          <Form.Group controlId="catering_co_2_name" className={`${styles.Width} `}  >
              <Form.Label className={`${styles.Bold} `} >Name</Form.Label>
              <Form.Control 
              className={`${styles.Input}`}
              type="text"
              name="catering_co_2_name"
              value={catering_co_2_name}
              onChange={handleChange}
                  />
          </Form.Group>
          {errors?.catering_co_2_name?.map((message, idx) => (
            <Alert variant="warning" key={idx}>
              {message}
            </Alert>
          ))}
          </Col>
          <Col xs={4} className="d-flex justify-content-center p-0 p-md-2">
          <Form.Group controlId="catering_co_2_email" className={`${styles.Width} `}  >
              <Form.Label className={`${styles.Bold}`} >Email</Form.Label>
              <Form.Control 
              className={`${styles.Input}`}
              type="text"
              name="catering_co_2_email"
              value={catering_co_2_email}
              onChange={handleChange}
                  />
          </Form.Group>
          {errors?.catering_co_2_email?.map((message, idx) => (
            <Alert variant="warning" key={idx}>
              {message}
            </Alert>
          ))}
          </Col>
          <Col xs={4} className="d-flex justify-content-center p-0 p-md-2">
          <Form.Group controlId="catering_co_2_phone" className={`${styles.Width} `}  >
              <Form.Label className={`${styles.Bold}`} >Phone</Form.Label>
              <Form.Control 
              className={`${styles.Input}`}
              type="text"
              name="catering_co_2_phone"
              value={catering_co_2_phone}
              onChange={handleChange}
                  />
          </Form.Group>
          {errors?.catering_co_2_phone?.map((message, idx) => (
            <Alert variant="warning" key={idx}>
              {message}
            </Alert>
          ))}
          </Col>
      </Row>
      <hr/>
      {/* Catering Company 3 */}
      <h5 className="mt-1" >Catering Company 3 </h5> 
      <Row>
          <Col xs={4} className="d-flex justify-content-center p-0 p-md-2">
          <Form.Group controlId="catering_co_3_name" className={`${styles.Width} `}  >
              <Form.Label className={`${styles.Bold} `} >Name</Form.Label>
              <Form.Control 
              className={`${styles.Input}`}
              type="text"
              name="catering_co_3_name"
              value={catering_co_3_name}
              onChange={handleChange}
                  />
          </Form.Group>
          {errors?.catering_co_3_name?.map((message, idx) => (
            <Alert variant="warning" key={idx}>
              {message}
            </Alert>
          ))}
          </Col>
          <Col xs={4} className="d-flex justify-content-center p-0 p-md-2">
          <Form.Group controlId="catering_co_3_email" className={`${styles.Width} `}  >
              <Form.Label className={`${styles.Bold}`} >Email</Form.Label>
              <Form.Control 
              className={`${styles.Input}`}
              type="text"
              name="catering_co_3_email"
              value={catering_co_3_email}
              onChange={handleChange}
                  />
          </Form.Group>
          {errors?.catering_co_3_email?.map((message, idx) => (
            <Alert variant="warning" key={idx}>
              {message}
            </Alert>
          ))}
          </Col>
          <Col xs={4} className="d-flex justify-content-center p-0 p-md-2">
          <Form.Group controlId="catering_co_3_phone" className={`${styles.Width} `}  >
              <Form.Label className={`${styles.Bold}`} >Phone</Form.Label>
              <Form.Control 
              className={`${styles.Input}`}
              type="text"
              name="catering_co_3_phone"
              value={catering_co_3_phone}
              onChange={handleChange}
                  />
          </Form.Group>
          {errors?.catering_co_3_phone?.map((message, idx) => (
            <Alert variant="warning" key={idx}>
              {message}
            </Alert>
          ))}
          </Col>
      </Row>
      <hr/>
      </div>

      {/* CRAFT SERVICES */}
      <div>
      <h3 className={` my-3 py-1 ${styles.SubTitle }`} >CRAFT SERVICES </h3> 
      {/* Craft Service  */}
      <h5 className="mt-1" >Craft Service </h5> 
      <Row>
          <Col xs={4} className="d-flex justify-content-center p-0 p-md-2">
          <Form.Group controlId="craft_service_name" className={`${styles.Width} `}  >
              <Form.Label className={`${styles.Bold} `} >Name</Form.Label>
              <Form.Control 
              className={`${styles.Input}`}
              type="text"
              name="craft_service_name"
              value={craft_service_name}
              onChange={handleChange}
                  />
          </Form.Group>
          {errors?.craft_service_name?.map((message, idx) => (
            <Alert variant="warning" key={idx}>
              {message}
            </Alert>
          ))}
          </Col>
          <Col xs={4} className="d-flex justify-content-center p-0 p-md-2">
          <Form.Group controlId="craft_service_email" className={`${styles.Width} `}  >
              <Form.Label className={`${styles.Bold}`} >Email</Form.Label>
              <Form.Control 
              className={`${styles.Input}`}
              type="text"
              name="craft_service_email"
              value={craft_service_email}
              onChange={handleChange}
                  />
          </Form.Group>
          {errors?.craft_service_email?.map((message, idx) => (
            <Alert variant="warning" key={idx}>
              {message}
            </Alert>
          ))}
          </Col>
          <Col xs={4} className="d-flex justify-content-center p-0 p-md-2">
          <Form.Group controlId="craft_service_phone" className={`${styles.Width} `}  >
              <Form.Label className={`${styles.Bold}`} >Phone</Form.Label>
              <Form.Control 
              className={`${styles.Input}`}
              type="text"
              name="craft_service_phone"
              value={craft_service_phone}
              onChange={handleChange}
                  />
          </Form.Group>
          {errors?.craft_service_phone?.map((message, idx) => (
            <Alert variant="warning" key={idx}>
              {message}
            </Alert>
          ))}
          </Col>
      </Row>
      <hr/>
      {/* Crafty Assistant  */}
      <h5 className="mt-1" >Crafty Assistant </h5> 
      <Row>
          <Col xs={4} className="d-flex justify-content-center p-0 p-md-2">
          <Form.Group controlId="crafty_ass_name" className={`${styles.Width} `}  >
              <Form.Label className={`${styles.Bold} `} >Name</Form.Label>
              <Form.Control 
              className={`${styles.Input}`}
              type="text"
              name="crafty_ass_name"
              value={crafty_ass_name}
              onChange={handleChange}
                  />
          </Form.Group>
          {errors?.crafty_ass_name?.map((message, idx) => (
            <Alert variant="warning" key={idx}>
              {message}
            </Alert>
          ))}
          </Col>
          <Col xs={4} className="d-flex justify-content-center p-0 p-md-2">
          <Form.Group controlId="crafty_ass_email" className={`${styles.Width} `}  >
              <Form.Label className={`${styles.Bold}`} >Email</Form.Label>
              <Form.Control 
              className={`${styles.Input}`}
              type="text"
              name="crafty_ass_email"
              value={crafty_ass_email}
              onChange={handleChange}
                  />
          </Form.Group>
          {errors?.crafty_ass_email?.map((message, idx) => (
            <Alert variant="warning" key={idx}>
              {message}
            </Alert>
          ))}
          </Col>
          <Col xs={4} className="d-flex justify-content-center p-0 p-md-2">
          <Form.Group controlId="crafty_ass_phone" className={`${styles.Width} `}  >
              <Form.Label className={`${styles.Bold}`} >Phone</Form.Label>
              <Form.Control 
              className={`${styles.Input}`}
              type="text"
              name="crafty_ass_phone"
              value={crafty_ass_phone}
              onChange={handleChange}
                  />
          </Form.Group>
          {errors?.crafty_ass_phone?.map((message, idx) => (
            <Alert variant="warning" key={idx}>
              {message}
            </Alert>
          ))}
          </Col>
      </Row>
      <hr/>
      </div>

      {/* ADDITIONAL CREW POSITIONS */}
      <div>
      <h3 className={` my-3 py-1 ${styles.SubTitle }`} >ADDITIONAL CREW POSITIONS </h3> 
      {/* Additional Crew Position 1 */}
      <h5 className="mt-1" >Additional Crew Position 1</h5> 
      <Row>
          <Col xs={{span: 4, offset: 4 }} className="d-flex justify-content-center p-0 p-md-2">
          <Form.Group controlId="add_pos_1_job" className={`${styles.Width} `}  >
              <Form.Label className={`${styles.Bold} `} >Position</Form.Label>
              <Form.Control 
              className={`${styles.Input}`}
              type="text"
              name="add_pos_1_job"
              value={add_pos_1_job}
              onChange={handleChange}
                  />
          </Form.Group>
          {errors?.add_pos_1_job?.map((message, idx) => (
            <Alert variant="warning" key={idx}>
              {message}
            </Alert>
          ))}
          </Col>
      </Row>
      <Row>
          <Col xs={4} className="d-flex justify-content-center p-0 p-md-2">
          <Form.Group controlId="add_pos_1_name" className={`${styles.Width} `}  >
              <Form.Label className={`${styles.Bold} `} >Name</Form.Label>
              <Form.Control 
              className={`${styles.Input}`}
              type="text"
              name="add_pos_1_name"
              value={add_pos_1_name}
              onChange={handleChange}
                  />
          </Form.Group>
          {errors?.add_pos_1_name?.map((message, idx) => (
            <Alert variant="warning" key={idx}>
              {message}
            </Alert>
          ))}
          </Col>
          <Col xs={4} className="d-flex justify-content-center p-0 p-md-2">
          <Form.Group controlId="add_pos_1_email" className={`${styles.Width} `}  >
              <Form.Label className={`${styles.Bold}`} >Email</Form.Label>
              <Form.Control 
              className={`${styles.Input}`}
              type="text"
              name="add_pos_1_email"
              value={add_pos_1_email}
              onChange={handleChange}
                  />
          </Form.Group>
          {errors?.add_pos_1_email?.map((message, idx) => (
            <Alert variant="warning" key={idx}>
              {message}
            </Alert>
          ))}
          </Col>
          <Col xs={4} className="d-flex justify-content-center p-0 p-md-2">
          <Form.Group controlId="add_pos_1_phone" className={`${styles.Width} `}  >
              <Form.Label className={`${styles.Bold}`} >Phone</Form.Label>
              <Form.Control 
              className={`${styles.Input}`}
              type="text"
              name="add_pos_1_phone"
              value={add_pos_1_phone}
              onChange={handleChange}
                  />
          </Form.Group>
          {errors?.add_pos_1_phone?.map((message, idx) => (
            <Alert variant="warning" key={idx}>
              {message}
            </Alert>
          ))}
          </Col>
      </Row>
      <hr/>
      {/* Additional Crew Position 2 */}
      <h5 className="mt-1" >Additional Crew Position 2</h5> 
      <Row>
          <Col xs={{span: 4, offset: 4 }} className="d-flex justify-content-center p-0 p-md-2">
          <Form.Group controlId="add_pos_2_job" className={`${styles.Width} `}  >
              <Form.Label className={`${styles.Bold} `} >Position</Form.Label>
              <Form.Control 
              className={`${styles.Input}`}
              type="text"
              name="add_pos_2_job"
              value={add_pos_2_job}
              onChange={handleChange}
                  />
          </Form.Group>
          {errors?.add_pos_2_job?.map((message, idx) => (
            <Alert variant="warning" key={idx}>
              {message}
            </Alert>
          ))}
          </Col>
      </Row>
      <Row>
          <Col xs={4} className="d-flex justify-content-center p-0 p-md-2">
          <Form.Group controlId="add_pos_2_name" className={`${styles.Width} `}  >
              <Form.Label className={`${styles.Bold} `} >Name</Form.Label>
              <Form.Control 
              className={`${styles.Input}`}
              type="text"
              name="add_pos_2_name"
              value={add_pos_2_name}
              onChange={handleChange}
                  />
          </Form.Group>
          {errors?.add_pos_2_name?.map((message, idx) => (
            <Alert variant="warning" key={idx}>
              {message}
            </Alert>
          ))}
          </Col>
          <Col xs={4} className="d-flex justify-content-center p-0 p-md-2">
          <Form.Group controlId="add_pos_2_email" className={`${styles.Width} `}  >
              <Form.Label className={`${styles.Bold}`} >Email</Form.Label>
              <Form.Control 
              className={`${styles.Input}`}
              type="text"
              name="add_pos_2_email"
              value={add_pos_2_email}
              onChange={handleChange}
                  />
          </Form.Group>
          {errors?.add_pos_2_email?.map((message, idx) => (
            <Alert variant="warning" key={idx}>
              {message}
            </Alert>
          ))}
          </Col>
          <Col xs={4} className="d-flex justify-content-center p-0 p-md-2">
          <Form.Group controlId="add_pos_2_phone" className={`${styles.Width} `}  >
              <Form.Label className={`${styles.Bold}`} >Phone</Form.Label>
              <Form.Control 
              className={`${styles.Input}`}
              type="text"
              name="add_pos_2_phone"
              value={add_pos_2_phone}
              onChange={handleChange}
                  />
          </Form.Group>
          {errors?.add_pos_2_phone?.map((message, idx) => (
            <Alert variant="warning" key={idx}>
              {message}
            </Alert>
          ))}
          </Col>
      </Row>
      <hr/>
      {/* Additional Crew Position 3 */}
      <h5 className="mt-1" >Additional Crew Position 3</h5> 
      <Row>
          <Col xs={{span: 4, offset: 4 }} className="d-flex justify-content-center p-0 p-md-2">
          <Form.Group controlId="add_pos_3_job" className={`${styles.Width} `}  >
              <Form.Label className={`${styles.Bold} `} >Position</Form.Label>
              <Form.Control 
              className={`${styles.Input}`}
              type="text"
              name="add_pos_3_job"
              value={add_pos_1_job}
              onChange={handleChange}
                  />
          </Form.Group>
          {errors?.add_pos_3_job?.map((message, idx) => (
            <Alert variant="warning" key={idx}>
              {message}
            </Alert>
          ))}
          </Col>
      </Row>
      <Row>
          <Col xs={4} className="d-flex justify-content-center p-0 p-md-2">
          <Form.Group controlId="add_pos_3_name" className={`${styles.Width} `}  >
              <Form.Label className={`${styles.Bold} `} >Name</Form.Label>
              <Form.Control 
              className={`${styles.Input}`}
              type="text"
              name="add_pos_3_name"
              value={add_pos_3_name}
              onChange={handleChange}
                  />
          </Form.Group>
          {errors?.add_pos_3_name?.map((message, idx) => (
            <Alert variant="warning" key={idx}>
              {message}
            </Alert>
          ))}
          </Col>
          <Col xs={4} className="d-flex justify-content-center p-0 p-md-2">
          <Form.Group controlId="add_pos_3_email" className={`${styles.Width} `}  >
              <Form.Label className={`${styles.Bold}`} >Email</Form.Label>
              <Form.Control 
              className={`${styles.Input}`}
              type="text"
              name="add_pos_3_email"
              value={add_pos_1_email}
              onChange={handleChange}
                  />
          </Form.Group>
          {errors?.add_pos_3_email?.map((message, idx) => (
            <Alert variant="warning" key={idx}>
              {message}
            </Alert>
          ))}
          </Col>
          <Col xs={4} className="d-flex justify-content-center p-0 p-md-2">
          <Form.Group controlId="add_pos_3_phone" className={`${styles.Width} `}  >
              <Form.Label className={`${styles.Bold}`} >Phone</Form.Label>
              <Form.Control 
              className={`${styles.Input}`}
              type="text"
              name="add_pos_3_phone"
              value={add_pos_3_phone}
              onChange={handleChange}
                  />
          </Form.Group>
          {errors?.add_pos_3_phone?.map((message, idx) => (
            <Alert variant="warning" key={idx}>
              {message}
            </Alert>
          ))}
          </Col>
      </Row>
      <hr/>
      {/* Additional Crew Position 4 */}
      <h5 className="mt-1" >Additional Crew Position 4</h5> 
      <Row>
          <Col xs={{span: 4, offset: 4 }} className="d-flex justify-content-center p-0 p-md-2">
          <Form.Group controlId="add_pos_4_job" className={`${styles.Width} `}  >
              <Form.Label className={`${styles.Bold} `} >Position</Form.Label>
              <Form.Control 
              className={`${styles.Input}`}
              type="text"
              name="add_pos_4_job"
              value={add_pos_4_job}
              onChange={handleChange}
                  />
          </Form.Group>
          {errors?.add_pos_4_job?.map((message, idx) => (
            <Alert variant="warning" key={idx}>
              {message}
            </Alert>
          ))}
          </Col>
      </Row>
      <Row>
          <Col xs={4} className="d-flex justify-content-center p-0 p-md-2">
          <Form.Group controlId="add_pos_4_name" className={`${styles.Width} `}  >
              <Form.Label className={`${styles.Bold} `} >Name</Form.Label>
              <Form.Control 
              className={`${styles.Input}`}
              type="text"
              name="add_pos_4_name"
              value={add_pos_4_name}
              onChange={handleChange}
                  />
          </Form.Group>
          {errors?.add_pos_4_name?.map((message, idx) => (
            <Alert variant="warning" key={idx}>
              {message}
            </Alert>
          ))}
          </Col>
          <Col xs={4} className="d-flex justify-content-center p-0 p-md-2">
          <Form.Group controlId="add_pos_4_email" className={`${styles.Width} `}  >
              <Form.Label className={`${styles.Bold}`} >Email</Form.Label>
              <Form.Control 
              className={`${styles.Input}`}
              type="text"
              name="add_pos_4_email"
              value={add_pos_4_email}
              onChange={handleChange}
                  />
          </Form.Group>
          {errors?.add_pos_4_email?.map((message, idx) => (
            <Alert variant="warning" key={idx}>
              {message}
            </Alert>
          ))}
          </Col>
          <Col xs={4} className="d-flex justify-content-center p-0 p-md-2">
          <Form.Group controlId="add_pos_4_phone" className={`${styles.Width} `}  >
              <Form.Label className={`${styles.Bold}`} >Phone</Form.Label>
              <Form.Control 
              className={`${styles.Input}`}
              type="text"
              name="add_pos_4_phone"
              value={add_pos_4_phone}
              onChange={handleChange}
                  />
          </Form.Group>
          {errors?.add_pos_4_phone?.map((message, idx) => (
            <Alert variant="warning" key={idx}>
              {message}
            </Alert>
          ))}
          </Col>
      </Row>
      <hr/>
      {/* Additional Crew Position 5 */}
      <h5 className="mt-1" >Additional Crew Position 1</h5> 
      <Row>
          <Col xs={{span: 4, offset: 4 }} className="d-flex justify-content-center p-0 p-md-2">
          <Form.Group controlId="add_pos_5_job" className={`${styles.Width} `}  >
              <Form.Label className={`${styles.Bold} `} >Position</Form.Label>
              <Form.Control 
              className={`${styles.Input}`}
              type="text"
              name="add_pos_5_job"
              value={add_pos_5_job}
              onChange={handleChange}
                  />
          </Form.Group>
          {errors?.add_pos_5_job?.map((message, idx) => (
            <Alert variant="warning" key={idx}>
              {message}
            </Alert>
          ))}
          </Col>
      </Row>
      <Row>
          <Col xs={4} className="d-flex justify-content-center p-0 p-md-2">
          <Form.Group controlId="add_pos_5_name" className={`${styles.Width} `}  >
              <Form.Label className={`${styles.Bold} `} >Name</Form.Label>
              <Form.Control 
              className={`${styles.Input}`}
              type="text"
              name="add_pos_5_name"
              value={add_pos_5_name}
              onChange={handleChange}
                  />
          </Form.Group>
          {errors?.add_pos_5_name?.map((message, idx) => (
            <Alert variant="warning" key={idx}>
              {message}
            </Alert>
          ))}
          </Col>
          <Col xs={4} className="d-flex justify-content-center p-0 p-md-2">
          <Form.Group controlId="add_pos_5_email" className={`${styles.Width} `}  >
              <Form.Label className={`${styles.Bold}`} >Email</Form.Label>
              <Form.Control 
              className={`${styles.Input}`}
              type="text"
              name="add_pos_5_email"
              value={add_pos_5_email}
              onChange={handleChange}
                  />
          </Form.Group>
          {errors?.add_pos_5_email?.map((message, idx) => (
            <Alert variant="warning" key={idx}>
              {message}
            </Alert>
          ))}
          </Col>
          <Col xs={4} className="d-flex justify-content-center p-0 p-md-2">
          <Form.Group controlId="add_pos_5_phone" className={`${styles.Width} `}  >
              <Form.Label className={`${styles.Bold}`} >Phone</Form.Label>
              <Form.Control 
              className={`${styles.Input}`}
              type="text"
              name="add_pos_5_phone"
              value={add_pos_5_phone}
              onChange={handleChange}
                  />
          </Form.Group>
          {errors?.add_pos_5_phone?.map((message, idx) => (
            <Alert variant="warning" key={idx}>
              {message}
            </Alert>
          ))}
          </Col>
      </Row>
      <hr/>
      {/* Additional Crew Position 6 */}
      <h5 className="mt-1" >Additional Crew Position 6</h5> 
      <Row>
          <Col xs={{span: 4, offset: 4 }} className="d-flex justify-content-center p-0 p-md-2">
          <Form.Group controlId="add_pos_6_job" className={`${styles.Width} `}  >
              <Form.Label className={`${styles.Bold} `} >Position</Form.Label>
              <Form.Control 
              className={`${styles.Input}`}
              type="text"
              name="add_pos_6_job"
              value={add_pos_6_job}
              onChange={handleChange}
                  />
          </Form.Group>
          {errors?.add_pos_6_job?.map((message, idx) => (
            <Alert variant="warning" key={idx}>
              {message}
            </Alert>
          ))}
          </Col>
      </Row>
      <Row>
          <Col xs={4} className="d-flex justify-content-center p-0 p-md-2">
          <Form.Group controlId="add_pos_6_name" className={`${styles.Width} `}  >
              <Form.Label className={`${styles.Bold} `} >Name</Form.Label>
              <Form.Control 
              className={`${styles.Input}`}
              type="text"
              name="add_pos_6_name"
              value={add_pos_6_name}
              onChange={handleChange}
                  />
          </Form.Group>
          {errors?.add_pos_6_name?.map((message, idx) => (
            <Alert variant="warning" key={idx}>
              {message}
            </Alert>
          ))}
          </Col>
          <Col xs={4} className="d-flex justify-content-center p-0 p-md-2">
          <Form.Group controlId="add_pos_6_email" className={`${styles.Width} `}  >
              <Form.Label className={`${styles.Bold}`} >Email</Form.Label>
              <Form.Control 
              className={`${styles.Input}`}
              type="text"
              name="add_pos_6_email"
              value={add_pos_6_email}
              onChange={handleChange}
                  />
          </Form.Group>
          {errors?.add_pos_6_email?.map((message, idx) => (
            <Alert variant="warning" key={idx}>
              {message}
            </Alert>
          ))}
          </Col>
          <Col xs={4} className="d-flex justify-content-center p-0 p-md-2">
          <Form.Group controlId="add_pos_6_phone" className={`${styles.Width} `}  >
              <Form.Label className={`${styles.Bold}`} >Phone</Form.Label>
              <Form.Control 
              className={`${styles.Input}`}
              type="text"
              name="add_pos_6_phone"
              value={add_pos_6_phone}
              onChange={handleChange}
                  />
          </Form.Group>
          {errors?.add_pos_6_phone?.map((message, idx) => (
            <Alert variant="warning" key={idx}>
              {message}
            </Alert>
          ))}
          </Col>
      </Row>
      <hr/>
      {/* Additional Crew Position 7 */}
      <h5 className="mt-1" >Additional Crew Position 7</h5> 
      <Row>
          <Col xs={{span: 4, offset: 4 }} className="d-flex justify-content-center p-0 p-md-2">
          <Form.Group controlId="add_pos_7_job" className={`${styles.Width} `}  >
              <Form.Label className={`${styles.Bold} `} >Position</Form.Label>
              <Form.Control 
              className={`${styles.Input}`}
              type="text"
              name="add_pos_7_job"
              value={add_pos_7_job}
              onChange={handleChange}
                  />
          </Form.Group>
          {errors?.add_pos_7_job?.map((message, idx) => (
            <Alert variant="warning" key={idx}>
              {message}
            </Alert>
          ))}
          </Col>
      </Row>
      <Row>
          <Col xs={4} className="d-flex justify-content-center p-0 p-md-2">
          <Form.Group controlId="add_pos_7_name" className={`${styles.Width} `}  >
              <Form.Label className={`${styles.Bold} `} >Name</Form.Label>
              <Form.Control 
              className={`${styles.Input}`}
              type="text"
              name="add_pos_7_name"
              value={add_pos_7_name}
              onChange={handleChange}
                  />
          </Form.Group>
          {errors?.add_pos_7_name?.map((message, idx) => (
            <Alert variant="warning" key={idx}>
              {message}
            </Alert>
          ))}
          </Col>
          <Col xs={4} className="d-flex justify-content-center p-0 p-md-2">
          <Form.Group controlId="add_pos_7_email" className={`${styles.Width} `}  >
              <Form.Label className={`${styles.Bold}`} >Email</Form.Label>
              <Form.Control 
              className={`${styles.Input}`}
              type="text"
              name="add_pos_7_email"
              value={add_pos_7_email}
              onChange={handleChange}
                  />
          </Form.Group>
          {errors?.add_pos_7_email?.map((message, idx) => (
            <Alert variant="warning" key={idx}>
              {message}
            </Alert>
          ))}
          </Col>
          <Col xs={4} className="d-flex justify-content-center p-0 p-md-2">
          <Form.Group controlId="add_pos_7_phone" className={`${styles.Width} `}  >
              <Form.Label className={`${styles.Bold}`} >Phone</Form.Label>
              <Form.Control 
              className={`${styles.Input}`}
              type="text"
              name="add_pos_7_phone"
              value={add_pos_7_phone}
              onChange={handleChange}
                  />
          </Form.Group>
          {errors?.add_pos_7_phone?.map((message, idx) => (
            <Alert variant="warning" key={idx}>
              {message}
            </Alert>
          ))}
          </Col>
      </Row>
      <hr/>
      {/* Additional Crew Position 8 */}
      <h5 className="mt-1" >Additional Crew Position 8</h5> 
      <Row>
          <Col xs={{span: 4, offset: 4 }} className="d-flex justify-content-center p-0 p-md-2">
          <Form.Group controlId="add_pos_8_job" className={`${styles.Width} `}  >
              <Form.Label className={`${styles.Bold} `} >Position</Form.Label>
              <Form.Control 
              className={`${styles.Input}`}
              type="text"
              name="add_pos_8_job"
              value={add_pos_8_job}
              onChange={handleChange}
                  />
          </Form.Group>
          {errors?.add_pos_8_job?.map((message, idx) => (
            <Alert variant="warning" key={idx}>
              {message}
            </Alert>
          ))}
          </Col>
      </Row>
      <Row>
          <Col xs={4} className="d-flex justify-content-center p-0 p-md-2">
          <Form.Group controlId="add_pos_8_name" className={`${styles.Width} `}  >
              <Form.Label className={`${styles.Bold} `} >Name</Form.Label>
              <Form.Control 
              className={`${styles.Input}`}
              type="text"
              name="add_pos_8_name"
              value={add_pos_8_name}
              onChange={handleChange}
                  />
          </Form.Group>
          {errors?.add_pos_8_name?.map((message, idx) => (
            <Alert variant="warning" key={idx}>
              {message}
            </Alert>
          ))}
          </Col>
          <Col xs={4} className="d-flex justify-content-center p-0 p-md-2">
          <Form.Group controlId="add_pos_8_email" className={`${styles.Width} `}  >
              <Form.Label className={`${styles.Bold}`} >Email</Form.Label>
              <Form.Control 
              className={`${styles.Input}`}
              type="text"
              name="add_pos_8_email"
              value={add_pos_8_email}
              onChange={handleChange}
                  />
          </Form.Group>
          {errors?.add_pos_8_email?.map((message, idx) => (
            <Alert variant="warning" key={idx}>
              {message}
            </Alert>
          ))}
          </Col>
          <Col xs={4} className="d-flex justify-content-center p-0 p-md-2">
          <Form.Group controlId="add_pos_8_phone" className={`${styles.Width} `}  >
              <Form.Label className={`${styles.Bold}`} >Phone</Form.Label>
              <Form.Control 
              className={`${styles.Input}`}
              type="text"
              name="add_pos_8_phone"
              value={add_pos_8_phone}
              onChange={handleChange}
                  />
          </Form.Group>
          {errors?.add_pos_8_phone?.map((message, idx) => (
            <Alert variant="warning" key={idx}>
              {message}
            </Alert>
          ))}
          </Col>
      </Row>
      <hr/>
      {/* Additional Crew Position 9 */}
      <h5 className="mt-1" >Additional Crew Position 9</h5> 
      <Row>
          <Col xs={{span: 4, offset: 4 }} className="d-flex justify-content-center p-0 p-md-2">
          <Form.Group controlId="add_pos_9_job" className={`${styles.Width} `}  >
              <Form.Label className={`${styles.Bold} `} >Position</Form.Label>
              <Form.Control 
              className={`${styles.Input}`}
              type="text"
              name="add_pos_9_job"
              value={add_pos_9_job}
              onChange={handleChange}
                  />
          </Form.Group>
          {errors?.add_pos_9_job?.map((message, idx) => (
            <Alert variant="warning" key={idx}>
              {message}
            </Alert>
          ))}
          </Col>
      </Row>
      <Row>
          <Col xs={4} className="d-flex justify-content-center p-0 p-md-2">
          <Form.Group controlId="add_pos_9_name" className={`${styles.Width} `}  >
              <Form.Label className={`${styles.Bold} `} >Name</Form.Label>
              <Form.Control 
              className={`${styles.Input}`}
              type="text"
              name="add_pos_9_name"
              value={add_pos_9_name}
              onChange={handleChange}
                  />
          </Form.Group>
          {errors?.add_pos_9_name?.map((message, idx) => (
            <Alert variant="warning" key={idx}>
              {message}
            </Alert>
          ))}
          </Col>
          <Col xs={4} className="d-flex justify-content-center p-0 p-md-2">
          <Form.Group controlId="add_pos_9_email" className={`${styles.Width} `}  >
              <Form.Label className={`${styles.Bold}`} >Email</Form.Label>
              <Form.Control 
              className={`${styles.Input}`}
              type="text"
              name="add_pos_9_email"
              value={add_pos_9_email}
              onChange={handleChange}
                  />
          </Form.Group>
          {errors?.add_pos_9_email?.map((message, idx) => (
            <Alert variant="warning" key={idx}>
              {message}
            </Alert>
          ))}
          </Col>
          <Col xs={4} className="d-flex justify-content-center p-0 p-md-2">
          <Form.Group controlId="add_pos_9_phone" className={`${styles.Width} `}  >
              <Form.Label className={`${styles.Bold}`} >Phone</Form.Label>
              <Form.Control 
              className={`${styles.Input}`}
              type="text"
              name="add_pos_9_phone"
              value={add_pos_9_phone}
              onChange={handleChange}
                  />
          </Form.Group>
          {errors?.add_pos_9_phone?.map((message, idx) => (
            <Alert variant="warning" key={idx}>
              {message}
            </Alert>
          ))}
          </Col>
      </Row>
      <hr/>
      {/* Additional Crew Position 10 */}
      <h5 className="mt-1" >Additional Crew Position 10</h5> 
      <Row>
          <Col xs={{span: 4, offset: 4 }} className="d-flex justify-content-center p-0 p-md-2">
          <Form.Group controlId="add_pos_10_job" className={`${styles.Width} `}  >
              <Form.Label className={`${styles.Bold} `} >Position</Form.Label>
              <Form.Control 
              className={`${styles.Input}`}
              type="text"
              name="add_pos_10_job"
              value={add_pos_10_job}
              onChange={handleChange}
                  />
          </Form.Group>
          {errors?.add_pos_10_job?.map((message, idx) => (
            <Alert variant="warning" key={idx}>
              {message}
            </Alert>
          ))}
          </Col>
      </Row>
      <Row>
          <Col xs={4} className="d-flex justify-content-center p-0 p-md-2">
          <Form.Group controlId="add_pos_10_name" className={`${styles.Width} `}  >
              <Form.Label className={`${styles.Bold} `} >Name</Form.Label>
              <Form.Control 
              className={`${styles.Input}`}
              type="text"
              name="add_pos_10_name"
              value={add_pos_10_name}
              onChange={handleChange}
                  />
          </Form.Group>
          {errors?.add_pos_10_name?.map((message, idx) => (
            <Alert variant="warning" key={idx}>
              {message}
            </Alert>
          ))}
          </Col>
          <Col xs={4} className="d-flex justify-content-center p-0 p-md-2">
          <Form.Group controlId="add_pos_10_email" className={`${styles.Width} `}  >
              <Form.Label className={`${styles.Bold}`} >Email</Form.Label>
              <Form.Control 
              className={`${styles.Input}`}
              type="text"
              name="add_pos_10_email"
              value={add_pos_10_email}
              onChange={handleChange}
                  />
          </Form.Group>
          {errors?.add_pos_10_email?.map((message, idx) => (
            <Alert variant="warning" key={idx}>
              {message}
            </Alert>
          ))}
          </Col>
          <Col xs={4} className="d-flex justify-content-center p-0 p-md-2">
          <Form.Group controlId="add_pos_10_phone" className={`${styles.Width} `}  >
              <Form.Label className={`${styles.Bold}`} >Phone</Form.Label>
              <Form.Control 
              className={`${styles.Input}`}
              type="text"
              name="add_pos_10_phone"
              value={add_pos_10_phone}
              onChange={handleChange}
                  />
          </Form.Group>
          {errors?.add_pos_10_phone?.map((message, idx) => (
            <Alert variant="warning" key={idx}>
              {message}
            </Alert>
          ))}
          </Col>
      </Row>
      <hr/>
      {/* All Other Additional Crew Positions */}
      <h5 className="mt-1" >All Other Additional Crew Positions</h5>  
      <Row>
          <Col xs={{span: 10, offset: 1 }} className="d-flex justify-content-center p-0 p-md-2">
          <Form.Group controlId="all_other_add_positions" className={`${styles.Width} `}  >
              <Form.Label className={`${styles.Bold} `} >Enter: Position - Name - Email - Phone for each.</Form.Label>
              <Form.Control 
              className={`${styles.InputScene}`}
              type="text"
              as="textarea"
              rows={3}
              name="all_other_add_positions"
              value={all_other_add_positions}
              onChange={handleChange}
                  />
          </Form.Group>
          {errors?.all_other_add_positions?.map((message, idx) => (
            <Alert variant="warning" key={idx}>
              {message}
            </Alert>
          ))}
          </Col>
      </Row>
      <hr/>
      </div>
    </div>
  )

  return (
    <div>
    <TopBox work="Crew Info"
            title="Create"/>
    <Button
        className={`${btnStyles.Button} ${btnStyles.Blue} py-0 mt-1`}
        onClick={() => history.goBack()}
    >
        Back
    </Button>
    <p>Fill in this page once to create the crew info page base. Use the edit 
        buttons to add or edit at future stages</p>
    <Form className= {`my-3 ${styles.Back}`} onSubmit={handleSubmit}>
    {textFields}
    {buttons}
    </Form>
    </div>
  )
}

export default CrewInfoCreate