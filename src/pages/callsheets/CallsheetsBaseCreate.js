import React, { useEffect, useRef, useState } from "react";

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
import { useHistory, useParams } from "react-router";
import { axiosReq } from "../../api/axiosDefaults";
import TopBox from "../../components/TopBox";
import { useRedirect } from "../../hooks/Redirect";

const CallsheetsBaseCreate = () => {
  useRedirect("loggedOut");
  const [errors, setErrors] = useState({});
  const { id } = useParams();
  const history = useHistory();

  const [postData, setPostData] = useState({
    set_decorator_name: "",
    set_decorator_email: "",
    set_decorator_phone: "",
    set_dresser_name: "",
    set_dresser_email: "",
    set_dresser_phone: "",
    
    production_name: "",
    production_company: "",
    company_email: "",
    company_phone: "",
    company_address: "",
    company_logo: "",
    producer_name: "",
    producer_email: "",
    producer_phone: "",
    pro_coordinator_name: "",
    pro_coordinator_email: "",
    pro_coordinator_phone: "",
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
    camera_pa__name: "",
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
    // xxxxx 
    character7: "",
    character7_costume: "",
    character8: "",
    character8_costume: "",
    character9: "",
    character9_costume: "",
    character10: "",
    character10_costume: "",
    character11: "",
    character11_costume: "",
    character12: "",
    character12_costume: "",
    other_characters: "",
    other_characters_costumes: "",
    other_characters_calltimes: "",
    other_characters_pickups: "",
    background_artists: "",
    background_artists_costumes: "",
    background_artists_calltimes: "",
    background_artists_pickups: "",
    new_info: "",
    new_content: "",
    character1_calltime: "",
    character1_pickup: "",
    character2_calltime: "",
    character2_pickup: "",
    character3_calltime: "",
    character3_pickup: "",
    character4_calltime: "",
    character4_pickup: "",
    character5_calltime: "",
    character5_pickup: "",
    character6_calltime: "",
    character6_pickup: "",
    character7_calltime: "",
    character7_pickup: "",
    character8_calltime: "",
    character8_pickup: "",
    character9_calltime: "",
    character9_pickup: "",
    character10_calltime: "",
    characte10_pickup: "",
    character11_calltime: "",
    character11_pickup: "",
    character12_calltime: "",
    character12_pickup: "",
})

  const { set_decorator_name, set_decorator_email, set_decorator_phone,
          set_dresser_name, set_dresser_email, set_dresser_phone,
          production_name, production_company, company_phone, company_email,
          company_address, company_logo, 
          producer_name, producer_email, producer_phone,
          pro_coordinator_name, pro_coordinator_email, pro_coordinator_phone,
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
          // filming_location, day_night, time, action, info, pages,
          character1, character1_costume, character2, 
          character2_costume, character3, character3_costume, character4, 
          character4_costume, character5, character5_costume, character6, 
          character6_costume, character7, character7_costume, character8,
          character8_costume, character9, character9_costume, character10,
          character10_costume, character11, character11_costume, character12,
          character12_costume, character1_calltime, character1_pickup,
          character2_calltime, character2_pickup, character3_calltime,
          character3_pickup, character4_calltime, character4_pickup,
          character5_calltime, character5_pickup, character6_calltime, 
          character6_pickup, character7_calltime, character7_pickup,
          character8_calltime, character8_pickup, character9_calltime, 
          character9_pickup, character10_calltime, character10_pickup,
          character11_calltime, character11_pickup, character12_calltime, 
          character12_pickup, other_characters, other_characters_costumes,
          background_artists, background_artists_costumes,
          other_characters_calltimes, other_characters_pickups,
          background_artists_calltimes, background_artists_pickups,
          new_info, new_content } = postData;
    
  const handleSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData();
    formData.append("set_decorator_name", set_decorator_name);
    formData.append("set_decorator_email", set_decorator_email);
    formData.append("set_decorator_phone", set_decorator_phone);
    formData.append("set_dresser_name", set_dresser_name);
    formData.append("set_dresser_email", set_dresser_email);
    formData.append("set_dresser_phone", set_dresser_phone);
    
    formData.append("production_name", production_name);
    formData.append("production_company", production_company);
    formData.append("company_phone", company_phone);
    formData.append("company_email", company_email);
    formData.append("company_address", company_address);
    formData.append("company_logo", company_logo);
    formData.append("producer_name", producer_name);
    formData.append("producer_email", producer_email);
    formData.append("producer_phone", producer_phone);  
    formData.append("pro_coordinator_name", pro_coordinator_name);
    formData.append("pro_coordinator_email", pro_coordinator_email);
    formData.append("pro_coordinator_phone", pro_coordinator_phone);
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
    // formData.append("character4", character4);
    formData.append("character4_costume", character4_costume);
    formData.append("character4_calltime", character4_calltime);
    formData.append("character4_pickup", character4_pickup);
    formData.append("character5", character5);
    formData.append("character5_costume", character5_costume);
    formData.append("character5_calltime", character5_calltime);
    formData.append("character5_pickup", character5_pickup);
    formData.append("character6", character6);
    formData.append("character6_costume", character6_costume);
    formData.append("character6_calltime", character6_calltime);
    formData.append("character6_pickup", character6_pickup);
    formData.append("character7", character7);
    formData.append("character7_costume", character7_costume);
    formData.append("character7_calltime", character7_calltime);
    formData.append("character7_pickup", character7_pickup);
    formData.append("character8", character8);
    formData.append("character8_costume", character8_costume);
    formData.append("character8_calltime", character8_calltime);
    formData.append("character8_pickup", character8_pickup);
    formData.append("character9", character9);
    formData.append("character9_costume", character9_costume);
    formData.append("character9_calltime", character9_calltime);
    formData.append("character9_pickup", character9_pickup);
    formData.append("character10", character10);
    formData.append("character10_costume", character10_costume);
    formData.append("character10_calltime", character10_calltime);
    formData.append("character10_pickup", character10_pickup);
    formData.append("character11", character11);
    formData.append("character11_costume", character11_costume);
    formData.append("character11_calltime", character11_calltime);
    formData.append("character11_pickup", character11_pickup);
    formData.append("character12", character12);
    formData.append("character12_costume", character12_costume);
    formData.append("character12_calltime", character12_calltime);
    formData.append("character12_pickup", character12_pickup);
    formData.append("other_characters", other_characters);
    formData.append("other_characters_costumes", other_characters_costumes);
    formData.append("other_characters_calltimes", other_characters_calltimes);
    formData.append("other_characters_pickups", other_characters_pickups);
    formData.append("background_artists", background_artists);
    formData.append("background_artists_costumes", background_artists_costumes);
    formData.append("background_artists_calltimes", background_artists_calltimes);
    formData.append("background_artists_pickups", background_artists_pickups);    
    formData.append("new_info", new_info);
    formData.append("new_content", new_content);
    if(imageInput1.current.files[0]) {
      formData.append("company_logo", imageInput1.current.files[0]);
    }
    try {
      await axiosReq.post("/base/callsheets/", formData);
      history.push(`/callsheets/`);
    } catch (err) {
      console.log(err);
      if (err.response?.status !== 401) {
        setErrors(err.response?.data);
      }
    }
  }

  const imageInput1 = useRef(null);
    
  const handleChange = (event) => {
    setPostData({
      ...postData,
      [event.target.name]: event.target.value,
    });
    console.log(event.target.name)
  };

  const handleChangeLogo = (event) => {
    if (event.target.files.length) {
      URL.revokeObjectURL(company_logo);
      setPostData({
        ...postData,
        company_logo: URL.createObjectURL(event.target.files[0]),
      });
    }
  };

  const buttons = (
  <div className="text-center mt-4">    
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
      <Col xs={12} md={6} className="d-flex justify-content-center p-0 p-md-2">
      <Form.Group controlId="company_address" className={`${styles.Width2} `}  >
          <Form.Label className={`${styles.Bold}`} >Company Address</Form.Label>
          <Form.Control 
              className={`${styles.InputScene}`}
              type="text"
              name="company_address"
              as="textarea"
              rows={2}
              value={company_address}
              onChange={handleChange}
              />
      </Form.Group>
      {errors?.company_address?.map((message, idx) => (
        <Alert variant="warning" key={idx}>
          {message}
        </Alert>
      ))}
      </Col>
      <Col xs={6} className="d-flex justify-content-center p-0 p-md-2">
          <div
              className={`${appStyles.Content} d-flex flex-column justify-content-center`}
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
      </Col>
      </Row>
      <hr/>
      {/* CREW INFO BY DEPARTMENTS */}
      <h3 className="my-4" >CREW INFO BY DEPARTMENT</h3> 
      </div>

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
      <h5 className="mt-1" >Production P.A.</h5> 
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
      {/* Other Production Position 1 */}
      <h5 className="mt-1" >Add Other Production Position 1</h5> 
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
      {/* Other Production Position 2 */}
      <h5 className="mt-1" >Add Other Production Position 2</h5> 
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
      {/* Other Production Position 3 */}
      <h5 className="mt-1" >Add Other Production Position 3</h5> 
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
      {/* Other Production Position 4 */}
      <h5 className="mt-1" >Add Other Production Position 4</h5> 
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
      {/* Other Production Position 5 */}
      <h5 className="mt-1" >Add Other Production Position 5</h5> 
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
      {/* Other Camera Position 1 */}
      <h5 className="mt-1" >Add Other Camera Position 1</h5> 
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
      {/* Other Camera Position 2 */}
      <h5 className="mt-1" >Add Other Camera Position 2</h5> 
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
      {/* Other Camera Position 3 */}
      <h5 className="mt-1" >Add Other Camera Position 3</h5> 
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

      {/* above added to drf */}

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

          {/* characters */}
          <div>
          <Row className="mt-2">
            <Col xs={4}>
            <p >Character</p>
            </Col>
            <Col xs={4}>
            <p >Call time</p>
            </Col>
            <Col xs={4}>
            <p >Pickup</p>
            </Col>
            </Row>    
            {/* character1 */}
            {character1 ? (
              <Row className="mt-3">
              <Col xs={4}>
              <h5 className="pt-2" >{character1}</h5> 
              </Col>
            <Col className="d-flex justify-content-center" xs={4} >
            <Form.Group controlId="character1_calltime" className={`${styles.Width2} `}>
                <Form.Label className="p-1 d-none" ></Form.Label>
                <Form.Control 
                className={`${styles.Input}`}
                type="text"
                placeholder="Call Time"
                name="character1_calltime"
                value={character1_calltime}
                onChange={handleChange}
                    />
            </Form.Group>
            {errors?.character1_calltime?.map((message, idx) => (
              <Alert variant="warning" key={idx}>
                {message}
              </Alert>
            ))}
            </Col>
            <Col className="d-flex justify-content-center" xs={4} >
            <Form.Group controlId="character1_pickup" className={`${styles.Width2} `} >
                <Form.Label className="p-1 d-none" ></Form.Label>
                <Form.Control 
                className={`${styles.Input}`}
                type="text"
                placeholder="Pickup"
                name="character1_pickup"
                value={character1_pickup}
                onChange={handleChange}
                    />
            </Form.Group>
            {errors?.character1_pickup?.map((message, idx) => (
              <Alert variant="warning" key={idx}>
                {message}
              </Alert>
            ))}
            </Col>
            </Row>
            ) : (
              ""
            )}
            {/* character2 */}
            {character2 ? (
              <Row className="mt-3">
              <Col xs={4}>
              <h5 className="pt-2" >{character2}</h5> 
              </Col>
            <Col xs={4} className="d-flex justify-content-center">
            <Form.Group controlId="character2_calltime" className={`${styles.Width2} `} >
                <Form.Label className="p-1 d-none" ></Form.Label>
                <Form.Control 
                className={`${styles.Input}`}
                type="text"
                placeholder="Call Time"
                name="character2_calltime"
                value={character2_calltime}
                onChange={handleChange}
                    />
            </Form.Group>
            {errors?.character2_calltime?.map((message, idx) => (
              <Alert variant="warning" key={idx}>
                {message}
              </Alert>
            ))}
            </Col>
            <Col xs={4} className="d-flex justify-content-center" >
            <Form.Group controlId="character2_pickup" className={`${styles.Width2} `} >
                <Form.Label className="p-1 d-none" ></Form.Label>
                <Form.Control 
                className={`${styles.Input}`}
                type="text"
                placeholder="Pickup"
                name="character2_pickup"
                value={character2_pickup}
                onChange={handleChange}
                    />
            </Form.Group>
            {errors?.character2_pickup?.map((message, idx) => (
              <Alert variant="warning" key={idx}>
                {message}
              </Alert>
            ))}
            </Col>
            </Row>
            ) : (
              ""
            )}
            {/* character3 */}
            {character3 ? (
              <Row className="mt-3">
              <Col xs={4}>
              <h5 className="pt-2" >{character3}</h5> 
              </Col>
            <Col xs={4} className="d-flex justify-content-center">
            <Form.Group controlId="character3_calltime" className={`${styles.Width2} `} >
                <Form.Label className="p-1 d-none" ></Form.Label>
                <Form.Control 
                type="text"
                className={`${styles.Input}`}
                placeholder="Call Time"
                name="character3_calltime"
                value={character3_calltime}
                onChange={handleChange}
                    />
            </Form.Group>
            {errors?.character3_calltime?.map((message, idx) => (
              <Alert variant="warning" key={idx}>
                {message}
              </Alert>
            ))}
            </Col>
            <Col xs={4} className="d-flex justify-content-center">
            <Form.Group controlId="character3_pickup" className={`${styles.Width2} `} >
                <Form.Label className="p-1 d-none" ></Form.Label>
                <Form.Control 
                className={`${styles.Input}`}
                type="text"
                placeholder="Pickup"
                name="character3_pickup"
                value={character3_pickup}
                onChange={handleChange}
                    />
            </Form.Group>
            {errors?.character3_pickup?.map((message, idx) => (
              <Alert variant="warning" key={idx}>
                {message}
              </Alert>
            ))}
            </Col>
            </Row>
            ) : (
              ""
            )}
            {/* character4 */}
            {character4 ? (
              <Row className="mt-3">
              <Col xs={4}>
              <h5 className="pt-2" >{character4}</h5> 
              </Col>
            <Col xs={4} className="d-flex justify-content-center">
            <Form.Group controlId="character4_calltime" className={`${styles.Width2} `} >
                <Form.Label className="p-1 d-none" ></Form.Label>
                <Form.Control 
                type="text"
                className={`${styles.Input}`}
                placeholder="Call Time"
                name="character4_calltime"
                value={character4_calltime}
                onChange={handleChange}
                    />
            </Form.Group>
            {errors?.character4_calltime?.map((message, idx) => (
              <Alert variant="warning" key={idx}>
                {message}
              </Alert>
            ))}
            </Col>
            <Col xs={4} className="d-flex justify-content-center">
            <Form.Group controlId="character4_pickup" className={`${styles.Width2} `} >
                <Form.Label className="p-1 d-none" ></Form.Label>
                <Form.Control 
                className={`${styles.Input}`}
                type="text"
                placeholder="Pickup"
                name="character4_pickup"
                value={character4_pickup}
                onChange={handleChange}
                    />
            </Form.Group>
            {errors?.character4_pickup?.map((message, idx) => (
              <Alert variant="warning" key={idx}>
                {message}
              </Alert>
            ))}
            </Col>
            </Row>
            ) : (
              ""
            )}
            {/* character5 */}
            {character5 ? (
              <Row className="mt-3">
              <Col xs={4}>
              <h5 className="pt-2" >{character5}</h5> 
              </Col>
            <Col xs={4} className="d-flex justify-content-center">
            <Form.Group controlId="character5_calltime" className={`${styles.Width2} `} >
                <Form.Label className="p-1 d-none" ></Form.Label>
                <Form.Control 
                type="text"
                className={`${styles.Input}`}
                placeholder="Call Time"
                name="character5_calltime"
                value={character5_calltime}
                onChange={handleChange}
                    />
            </Form.Group>
            {errors?.character5_calltime?.map((message, idx) => (
              <Alert variant="warning" key={idx}>
                {message}
              </Alert>
            ))}
            </Col>
            <Col xs={4} className="d-flex justify-content-center">
            <Form.Group controlId="character5_pickup" className={`${styles.Width2} `} >
                <Form.Label className="p-1 d-none" ></Form.Label>
                <Form.Control 
                className={`${styles.Input}`}
                type="text"
                placeholder="Pickup"
                name="character5_pickup"
                value={character5_pickup}
                onChange={handleChange}
                    />
            </Form.Group>
            {errors?.character5_pickup?.map((message, idx) => (
              <Alert variant="warning" key={idx}>
                {message}
              </Alert>
            ))}
            </Col>
            </Row>
            ) : (
              ""
            )}
            {/* character6 */}
            {character6 ? (
              <Row className="mt-3">
              <Col xs={4}>
              <h5 className="pt-2" >{character6}</h5> 
              </Col>
            <Col xs={4} className="d-flex justify-content-center">
            <Form.Group controlId="character6_calltime" className={`${styles.Width2} `} >
                <Form.Label className="p-1 d-none" ></Form.Label>
                <Form.Control 
                type="text"
                className={`${styles.Input}`}
                placeholder="Call Time"
                name="character6_calltime"
                value={character6_calltime}
                onChange={handleChange}
                    />
            </Form.Group>
            {errors?.character6_calltime?.map((message, idx) => (
              <Alert variant="warning" key={idx}>
                {message}
              </Alert>
            ))}
            </Col>
            <Col xs={4} className="d-flex justify-content-center">
            <Form.Group controlId="character6_pickup" className={`${styles.Width2} `} >
                <Form.Label className="p-1 d-none" ></Form.Label>
                <Form.Control 
                className={`${styles.Input}`}
                type="text"
                placeholder="Pickup"
                name="character6_pickup"
                value={character6_pickup}
                onChange={handleChange}
                    />
            </Form.Group>
            {errors?.character6_pickup?.map((message, idx) => (
              <Alert variant="warning" key={idx}>
                {message}
              </Alert>
            ))}
            </Col>
            </Row>
            ) : (
              ""
            )}
            {/* character7 */}
            {character7 ? (
              <Row className="mt-3">
              <Col xs={4}>
              <h5 className="pt-2" >{character7}</h5> 
              </Col>
            <Col xs={4} className="d-flex justify-content-center">
            <Form.Group controlId="character7_calltime" className={`${styles.Width2} `} >
                <Form.Label className="p-1 d-none" ></Form.Label>
                <Form.Control 
                type="text"
                className={`${styles.Input}`}
                placeholder="Call Time"
                name="character7_calltime"
                value={character7_calltime}
                onChange={handleChange}
                    />
            </Form.Group>
            {errors?.character7_calltime?.map((message, idx) => (
              <Alert variant="warning" key={idx}>
                {message}
              </Alert>
            ))}
            </Col>
            <Col xs={4} className="d-flex justify-content-center">
            <Form.Group controlId="character7_pickup" className={`${styles.Width2} `} >
                <Form.Label className="p-1 d-none" ></Form.Label>
                <Form.Control 
                className={`${styles.Input}`}
                type="text"
                placeholder="Pickup"
                name="character7_pickup"
                value={character7_pickup}
                onChange={handleChange}
                    />
            </Form.Group>
            {errors?.character7_pickup?.map((message, idx) => (
              <Alert variant="warning" key={idx}>
                {message}
              </Alert>
            ))}
            </Col>
            </Row>
            ) : (
              ""
            )}
            {/* character8 */}
            {character8 ? (
              <Row className="mt-3">
              <Col xs={4}>
              <h5 className="pt-2" >{character8}</h5> 
              </Col>
            <Col xs={4} className="d-flex justify-content-center">
            <Form.Group controlId="character8_calltime" className={`${styles.Width2} `} >
                <Form.Label className="p-1 d-none" ></Form.Label>
                <Form.Control 
                type="text"
                className={`${styles.Input}`}
                placeholder="Call Time"
                name="character8_calltime"
                value={character8_calltime}
                onChange={handleChange}
                    />
            </Form.Group>
            {errors?.character8_calltime?.map((message, idx) => (
              <Alert variant="warning" key={idx}>
                {message}
              </Alert>
            ))}
            </Col>
            <Col xs={4} className="d-flex justify-content-center">
            <Form.Group controlId="character8_pickup" className={`${styles.Width2} `} >
                <Form.Label className="p-1 d-none" ></Form.Label>
                <Form.Control 
                className={`${styles.Input}`}
                type="text"
                placeholder="Pickup"
                name="character8_pickup"
                value={character8_pickup}
                onChange={handleChange}
                    />
            </Form.Group>
            {errors?.character8_pickup?.map((message, idx) => (
              <Alert variant="warning" key={idx}>
                {message}
              </Alert>
            ))}
            </Col>
            </Row>
            ) : (
              ""
            )}
            {/* character9 */}
            {character9 ? (
              <Row className="mt-3">
              <Col xs={4}>
              <h5 className="pt-2" >{character9}</h5> 
              </Col>
            <Col xs={4} className="d-flex justify-content-center">
            <Form.Group controlId="character9_calltime" className={`${styles.Width2} `} >
                <Form.Label className="p-1 d-none" ></Form.Label>
                <Form.Control 
                type="text"
                className={`${styles.Input}`}
                placeholder="Call Time"
                name="character9_calltime"
                value={character9_calltime}
                onChange={handleChange}
                    />
            </Form.Group>
            {errors?.character9_calltime?.map((message, idx) => (
              <Alert variant="warning" key={idx}>
                {message}
              </Alert>
            ))}
            </Col>
            <Col xs={4} className="d-flex justify-content-center">
            <Form.Group controlId="character9_pickup" className={`${styles.Width2} `} >
                <Form.Label className="p-1 d-none" ></Form.Label>
                <Form.Control 
                className={`${styles.Input}`}
                type="text"
                placeholder="Pickup"
                name="character9_pickup"
                value={character9_pickup}
                onChange={handleChange}
                    />
            </Form.Group>
            {errors?.character9_pickup?.map((message, idx) => (
              <Alert variant="warning" key={idx}>
                {message}
              </Alert>
            ))}
            </Col>
            </Row>
            ) : (
              ""
            )}
            {/* character10 */}
            {character10 ? (
              <Row className="mt-3">
              <Col xs={4}>
              <h5 className="pt-2" >{character10}</h5> 
              </Col>
            <Col xs={4} className="d-flex justify-content-center">
            <Form.Group controlId="character10_calltime" className={`${styles.Width2} `} >
                <Form.Label className="p-1 d-none" ></Form.Label>
                <Form.Control 
                type="text"
                className={`${styles.Input}`}
                placeholder="Call Time"
                name="character10_calltime"
                value={character10_calltime}
                onChange={handleChange}
                    />
            </Form.Group>
            {errors?.character10_calltime?.map((message, idx) => (
              <Alert variant="warning" key={idx}>
                {message}
              </Alert>
            ))}
            </Col>
            <Col xs={4} className="d-flex justify-content-center">
            <Form.Group controlId="character10_pickup" className={`${styles.Width2} `} >
                <Form.Label className="p-1 d-none" ></Form.Label>
                <Form.Control 
                className={`${styles.Input}`}
                type="text"
                placeholder="Pickup"
                name="character10_pickup"
                value={character10_pickup}
                onChange={handleChange}
                    />
            </Form.Group>
            {errors?.character10_pickup?.map((message, idx) => (
              <Alert variant="warning" key={idx}>
                {message}
              </Alert>
            ))}
            </Col>
            </Row>
            ) : (
              ""
            )}
            {/* character11 */}
            {character11 ? (
              <Row className="mt-3">
              <Col xs={4}>
              <h5 className="pt-2" >{character11}</h5> 
              </Col>
            <Col xs={4} className="d-flex justify-content-center">
            <Form.Group controlId="character11_calltime" className={`${styles.Width2} `} >
                <Form.Label className="p-1 d-none" ></Form.Label>
                <Form.Control 
                type="text"
                className={`${styles.Input}`}
                placeholder="Call Time"
                name="character11_calltime"
                value={character11_calltime}
                onChange={handleChange}
                    />
            </Form.Group>
            {errors?.character11_calltime?.map((message, idx) => (
              <Alert variant="warning" key={idx}>
                {message}
              </Alert>
            ))}
            </Col>
            <Col xs={4} className="d-flex justify-content-center">
            <Form.Group controlId="character11_pickup" className={`${styles.Width2} `} >
                <Form.Label className="p-1 d-none" ></Form.Label>
                <Form.Control 
                className={`${styles.Input}`}
                type="text"
                placeholder="Pickup"
                name="character11_pickup"
                value={character11_pickup}
                onChange={handleChange}
                    />
            </Form.Group>
            {errors?.character11_pickup?.map((message, idx) => (
              <Alert variant="warning" key={idx}>
                {message}
              </Alert>
            ))}
            </Col>
            </Row>
            ) : (
              ""
            )}
            {/* character12 */}
            {character12 ? (
              <Row className="mt-3">
              <Col xs={4}>
              <h5 className="pt-2" >{character12}</h5> 
              </Col>
            <Col xs={4} className="d-flex justify-content-center">
            <Form.Group controlId="character12_calltime" className={`${styles.Width2} `} >
                <Form.Label className="p-1 d-none" ></Form.Label>
                <Form.Control 
                type="text"
                className={`${styles.Input}`}
                placeholder="Call Time"
                name="character12_calltime"
                value={character12_calltime}
                onChange={handleChange}
                    />
            </Form.Group>
            {errors?.character12_calltime?.map((message, idx) => (
              <Alert variant="warning" key={idx}>
                {message}
              </Alert>
            ))}
            </Col>
            <Col xs={4} className="d-flex justify-content-center">
            <Form.Group controlId="character12_pickup" className={`${styles.Width2} `} >
                <Form.Label className="p-1 d-none" ></Form.Label>
                <Form.Control 
                className={`${styles.Input}`}
                type="text"
                placeholder="Pickup"
                name="character12_pickup"
                value={character12_pickup}
                onChange={handleChange}
                    />
            </Form.Group>
            {errors?.character12_pickup?.map((message, idx) => (
              <Alert variant="warning" key={idx}>
                {message}
              </Alert>
            ))}
            </Col>
            </Row>
            ) : (
              ""
            )}
            {/* other_characters */}
            <h3 className="mt-4" >Other Characters</h3> 
            <p className={` mb-0 py-1 ${styles.SubTitle }`}></p>
            {other_characters ? (
              <Row className="mt-3">
              <Col xs={4}>
              <h5 className="pt-2" >{other_characters}</h5> 
              </Col>
            <Col xs={4} >
            <Form.Group controlId="other_characters_calltimes" className="mb-0" >
                <Form.Label className="p-1 d-none" ></Form.Label>
                <Form.Control 
                type="text"
                as="textarea"
                rows={2}
                className={`${styles.InputScene}`}
                placeholder="Call Times"
                name="other_characters_calltimes"
                value={other_characters_calltimes}
                onChange={handleChange}
                    />
            </Form.Group>
            {errors?.other_characters_calltimes?.map((message, idx) => (
              <Alert variant="warning" key={idx}>
                {message}
              </Alert>
            ))}
            </Col>
            <Col xs={4} >
            <Form.Group controlId="other_characters_pickups" className="mb-2" >
                <Form.Label className="p-1 d-none" ></Form.Label>
                <Form.Control 
                className={`${styles.InputScene}`}
                type="text"
                as="textarea"
                rows={2}
                placeholder="Pickups"
                name="other_characters_pickups"
                value={other_characters_pickups}
                onChange={handleChange}
                    />
            </Form.Group>
            {errors?.other_characters_pickups?.map((message, idx) => (
              <Alert variant="warning" key={idx}>
                {message}
              </Alert>
            ))}
            </Col>
            </Row>
            ) : (
              ""
            )}
            <h3 className="mt-4" >Background Artists</h3> 
            <p className={` mb-0 py-1 ${styles.SubTitle }`}></p>
            {/* background_artists */}
            {background_artists ? (
              <Row className="mt-3">
              <Col xs={4}>
              <h5 className="pt-2" >{background_artists}</h5> 
              </Col>
            <Col xs={4} >
            <Form.Group controlId="background_artists_calltimes" className="mb-0" >
                <Form.Label className="p-1 d-none" ></Form.Label>
                <Form.Control 
                type="text"
                className={`${styles.InputScene}`}
                as="textarea"
                rows={2}
                placeholder="Call Time"
                name="background_artists_calltimes"
                value={background_artists_calltimes}
                onChange={handleChange}
                    />
            </Form.Group>
            {errors?.background_artists_calltimes?.map((message, idx) => (
              <Alert variant="warning" key={idx}>
                {message}
              </Alert>
            ))}
            </Col>
            <Col xs={4} >
            <Form.Group controlId="background_artists_pickups" className="mb-2" >
                <Form.Label className="p-1 d-none" ></Form.Label>
                <Form.Control 
                className={`${styles.InputScene}`}
                type="text"
                as="textarea"
                rows={2}
                placeholder="Pickup"
                name="background_artists_pickups"
                value={background_artists_pickups}
                onChange={handleChange}
                    />
            </Form.Group>
            {errors?.background_artists_pickups?.map((message, idx) => (
              <Alert variant="warning" key={idx}>
                {message}
              </Alert>
            ))}
            </Col>
            </Row>
            ) : (
              ""
            )}        
            </div>     
          {/* end characters */}
    </div>
  )

  return (
    <div>
    <TopBox work="Callsheet Base"
            title="Create"/>
            <h5>Important</h5>
            <p>Only the create info button once to create the crew info callsheet base. Use the edit 
               buttons to add or edit is at future stages</p>
    {textFields}
    </div>
  )
}

export default CallsheetsBaseCreate