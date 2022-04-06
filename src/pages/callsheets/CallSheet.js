import React from 'react';
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
import CrewCalls from './CrewCalls';

const CallSheet = (props ) => {
    useRedirect("loggedOut");
    const crewInfo = useCrewInfoContext();
    const crewInfoOne = crewInfo.results[0];
    const history = useHistory();
    console.log(props)

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
        {/* Locations producer_calltime */}
        <div className='mt-5'>
        <span className={`mt-3 pl-3 py-0 text-center ${styles.SubTitleSpan }`} style={{ textTransform: 'uppercase' }}>Locations</span>
        <Row style={{ textTransform: 'uppercase' }} className={` text-center mx-0  ${styles.TitleBox}`} >
            <Col className={`mx-0 px-0 ${styles.TitleBox2}`} xs={1} >
            <p className='my-0 py-0'>#</p>
            </Col>
            <Col className={`${styles.TitleBox2} px-0 mx-0`} xs={5}>
            <p className='my-0 py-0'><span className='d-none d-sm-inline-block'>Name -</span> Address</p>
            </Col>
            <Col className='px-0 mx-0' xs={6}>
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
        <span className={`pl-3 py-0 px-1 ${styles.SubTitleSpan }`}style={{ textTransform: 'uppercase' }}>Crew (total)</span>
        <p style={{ textTransform: 'uppercase'}} className={` pl-3 pt-1 ${styles.SubTitle }`}></p>
        {/* titles */}
        <CrewCalls callsheet={callsheet}/>
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

        {/* END Crew */}
        <div className='mt-5'>
        <span className={`mt-3 pl-3 py-0 px-1 ${styles.SubTitleSpan }`}style={{ textTransform: 'uppercase' }}>Crew (total)</span>
        {/* titles */}
        <Row>
            <Col>
            <Row style={{ textTransform: 'uppercase' }} className={` mx-0  ${styles.TitleBox}`} >
            <Col className={`mx-0  ${styles.TitleBox2}`} xs={5} >
            <p className='my-0 py-0'>Postition</p>
            </Col>
            <Col className={`${styles.TitleBox2} mx-0`} xs={5}>
            <p className='my-0 py-0'>Name</p>
            </Col>
            <Col className={` mx-0`} xs={2}>
            <p className='my-0 py-0'>Call</p>
            </Col>
            </Row>
            </Col>
            <Col className='d-none d-md-block'>
            <Row style={{ textTransform: 'uppercase' }} className={` mx-0  ${styles.TitleBox}`} >
            <Col className={`mx-0  ${styles.TitleBox2}`} xs={5} >
            <p className='my-0 py-0'>Postition</p>
            </Col>
            <Col className={`${styles.TitleBox2} mx-0`} xs={5}>
            <p className='my-0 py-0'>Name</p>
            </Col>
            <Col className={` mx-0`} xs={2}>
            <p className='my-0 py-0'>Call</p>
            </Col>
            </Row>
            </Col>
            </Row>
        {/* departments */}
        <div>
        <Row>
            {/* Production */}
            <Col className='my-0 py-0' xs={12} md={6} xl={4}>
            <div>
            <Row >
                <Col xs={12}>
                <p className={`mb-0 ${styles.Back3} pl-3`} style={{ textTransform: 'uppercase' }}  >Production</p>
                {director_calltime ? (
                    <Row className={` mx-0 `} >
                    <Col className={`mx-0 px-1 ${styles.Border}`} xs={4} >
                    <p className='my-0 py-0'>Director</p>
                    </Col>
                    <Col className={`${styles.Border} px-1 mx-0`} xs={6}>
                    <p className='my-0 py-0'>{director_name} </p>
                    </Col>
                    <Col className={`${styles.Border} px-1 mx-0`} xs={2}>
                    <p className='my-0 py-0'>{director_calltime} </p>
                    </Col>
                    </Row>
                ) : (
                    ""
                ) }
                </Col>
            </Row>
            </div>
            </Col>
            {/* AD */}
            <Col xs={12} md={6} xl={4}>
            <div>
            <Row >
                <Col xs={12}>
                <p className={`mb-0 ${styles.Back3} pl-3`} style={{ textTransform: 'uppercase' }}  >Assistant Directors</p>
                {director_calltime ? (
                    <Row className={` mx-0 `} >
                    <Col className={`mx-0  ${styles.Border}`} xs={5} >
                    <p className='my-0 py-0'>1st AD</p>
                    </Col>
                    <Col className={`${styles.Border} mx-0`} xs={5}>
                    <p className='my-0 py-0'>{director_name} </p>
                    </Col>
                    <Col className={`${styles.Border} mx-0`} xs={2}>
                    <p className='my-0 py-0'>{director_calltime} </p>
                    </Col>
                    </Row>
                ) : (
                    ""
                ) }
                </Col>
            </Row>
            </div>
            </Col>
            {/* Camera */}
            <Col xs={12} md={6} xl={4}>
            <div>
            <Row >
                <Col xs={12}>
                <p className={`mb-0 ${styles.Back3} pl-3`} style={{ textTransform: 'uppercase' }} >Camera</p>
                {director_calltime ? (
                    <Row className={` mx-0 `} >
                    <Col className={`mx-0  ${styles.Border}`} xs={5} >
                    <p className='my-0 py-0'>1st AD</p>
                    </Col>
                    <Col className={`${styles.Border} mx-0`} xs={5}>
                    <p className='my-0 py-0'>{director_name} </p>
                    </Col>
                    <Col className={`${styles.Border} mx-0`} xs={2}>
                    <p className='my-0 py-0'>{director_calltime} </p>
                    </Col>
                    </Row>
                ) : (
                    ""
                ) }
                </Col>
            </Row>
            </div>
            </Col>
            {/* Sound */}
            <Col className='my-0 py-0' xs={12} md={6}>
            <div>
            <Row >
                <Col xs={12}>
                <p className={`mb-0 ${styles.Back3} pl-3`} style={{ textTransform: 'uppercase' }}  >Sound</p>
                {director_calltime ? (
                    <Row className={` mx-0 `} >
                    <Col className={`mx-0  ${styles.Border}`} xs={5} >
                    <p className='my-0 py-0'>Director</p>
                    </Col>
                    <Col className={`${styles.Border} mx-0`} xs={5}>
                    <p className='my-0 py-0'>{director_name} </p>
                    </Col>
                    <Col className={`${styles.Border} mx-0`} xs={2}>
                    <p className='my-0 py-0'>{director_calltime} </p>
                    </Col>
                    </Row>
                ) : (
                    ""
                ) }
                </Col>
            </Row>
            </div>
            </Col>
            {/* Hair/Makeup */}
            <Col xs={12} md={6}>
            <div>
            <Row >
                <Col xs={12}>
                <p className={`mb-0 ${styles.Back3} pl-3`} style={{ textTransform: 'uppercase' }}  >Hair/Makeup</p>
                {director_calltime ? (
                    <Row className={` mx-0 `} >
                    <Col className={`mx-0  ${styles.Border}`} xs={5} >
                    <p className='my-0 py-0'>Key Hair/Makeup</p>
                    </Col>
                    <Col className={`${styles.Border} mx-0`} xs={5}>
                    <p className='my-0 py-0'>{director_name} </p>
                    </Col>
                    <Col className={`${styles.Border} mx-0`} xs={2}>
                    <p className='my-0 py-0'>{director_calltime} </p>
                    </Col>
                    </Row>
                ) : (
                    ""
                ) }
                </Col>
            </Row>
            </div>
            </Col>
            {/* Wardrobe */}
            <Col xs={12} md={6}>
            <div>
            <Row >
                <Col xs={12}>
                <p className={`mb-0 ${styles.Back3} pl-3`} style={{ textTransform: 'uppercase' }} >Wardrobe</p>
                {director_calltime ? (
                    <Row className={` mx-0 `} >
                    <Col className={`mx-0  ${styles.Border}`} xs={5} >
                    <p className='my-0 py-0'>Costume Designer</p>
                    </Col>
                    <Col className={`${styles.Border} mx-0`} xs={5}>
                    <p className='my-0 py-0'>{director_name} </p>
                    </Col>
                    <Col className={`${styles.Border} mx-0`} xs={2}>
                    <p className='my-0 py-0'>{director_calltime} </p>
                    </Col>
                    </Row>
                ) : (
                    ""
                ) }
                </Col>
            </Row>
            </div>
            </Col>
            {/* ELECTRIC */}
            <Col className='my-0 py-0' xs={12} md={6}>
            <div>
            <Row >
                <Col xs={12}>
                <p className={`mb-0 ${styles.Back3} pl-3`} style={{ textTransform: 'uppercase' }}  >ELECTRIC</p>
                {director_calltime ? (
                    <Row className={` mx-0 `} >
                    <Col className={`mx-0  ${styles.Border}`} xs={5} >
                    <p className='my-0 py-0'>Gaffer</p>
                    </Col>
                    <Col className={`${styles.Border} mx-0`} xs={5}>
                    <p className='my-0 py-0'>{director_name} </p>
                    </Col>
                    <Col className={`${styles.Border} mx-0`} xs={2}>
                    <p className='my-0 py-0'>{director_calltime} </p>
                    </Col>
                    </Row>
                ) : (
                    ""
                ) }
                </Col>
            </Row>
            </div>
            </Col>
            {/* GRIP */}
            <Col xs={12} md={6} >
            <div>
            <Row >
                <Col xs={12}>
                <p className={`mb-0 ${styles.Back3} pl-3`} style={{ textTransform: 'uppercase' }}  >GRIP</p>
                {director_calltime ? (
                    <Row className={` mx-0 `} >
                    <Col className={`mx-0  ${styles.Border}`} xs={5} >
                    <p className='my-0 py-0'>Keygrip</p>
                    </Col>
                    <Col className={`${styles.Border} mx-0`} xs={5}>
                    <p className='my-0 py-0'>{director_name} </p>
                    </Col>
                    <Col className={`${styles.Border} mx-0`} xs={2}>
                    <p className='my-0 py-0'>{director_calltime} </p>
                    </Col>
                    </Row>
                ) : (
                    ""
                ) }
                </Col>
            </Row>
            </div>
            </Col>
            {/* Camera */}
            <Col xs={12} md={6} >
            <div>
            <Row >
                <Col xs={12}>
                <p className={`mb-0 ${styles.Back3} pl-3`} style={{ textTransform: 'uppercase' }} >Camera</p>
                {director_calltime ? (
                    <Row className={` mx-0 `} >
                    <Col className={`mx-0  ${styles.Border}`} xs={5} >
                    <p className='my-0 py-0'>1st AD</p>
                    </Col>
                    <Col className={`${styles.Border} mx-0`} xs={5}>
                    <p className='my-0 py-0'>{director_name} </p>
                    </Col>
                    <Col className={`${styles.Border} mx-0`} xs={2}>
                    <p className='my-0 py-0'>{director_calltime} </p>
                    </Col>
                    </Row>
                ) : (
                    ""
                ) }
                </Col>
            </Row>
            </div>
            </Col>
            {/* Sound */}
            <Col className='my-0 py-0' xs={12} md={6}>
            <div>
            <Row >
                <Col xs={12}>
                <p className={`mb-0 ${styles.Back3} pl-3`} style={{ textTransform: 'uppercase' }}  >Sound</p>
                {director_calltime ? (
                    <Row className={` mx-0 `} >
                    <Col className={`mx-0  ${styles.Border}`} xs={5} >
                    <p className='my-0 py-0'>Director</p>
                    </Col>
                    <Col className={`${styles.Border} mx-0`} xs={5}>
                    <p className='my-0 py-0'>{director_name} </p>
                    </Col>
                    <Col className={`${styles.Border} mx-0`} xs={2}>
                    <p className='my-0 py-0'>{director_calltime} </p>
                    </Col>
                    </Row>
                ) : (
                    ""
                ) }
                </Col>
            </Row>
            </div>
            </Col>
            {/* Hair/Makeup */}
            <Col xs={12} md={6}>
            <div>
            <Row >
                <Col xs={12}>
                <p className={`mb-0 ${styles.Back3} pl-3`} style={{ textTransform: 'uppercase' }}  >Hair/Makeup</p>
                {director_calltime ? (
                    <Row className={` mx-0 `} >
                    <Col className={`mx-0  ${styles.Border}`} xs={5} >
                    <p className='my-0 py-0'>Key Hair/Makeup</p>
                    </Col>
                    <Col className={`${styles.Border} mx-0`} xs={5}>
                    <p className='my-0 py-0'>{director_name} </p>
                    </Col>
                    <Col className={`${styles.Border} mx-0`} xs={2}>
                    <p className='my-0 py-0'>{director_calltime} </p>
                    </Col>
                    </Row>
                ) : (
                    ""
                ) }
                </Col>
            </Row>
            </div>
            </Col>
            {/* Wardrobe */}
            <Col xs={12} md={6}>
            <div>
            <Row >
                <Col xs={12}>
                <p className={`mb-0 ${styles.Back3} pl-3`} style={{ textTransform: 'uppercase' }} >Wardrobe</p>
                {director_calltime ? (
                    <Row className={` mx-0 `} >
                    <Col className={`mx-0  ${styles.Border}`} xs={5} >
                    <p className='my-0 py-0'>Costume Designer</p>
                    </Col>
                    <Col className={`${styles.Border} mx-0`} xs={5}>
                    <p className='my-0 py-0'>{director_name} </p>
                    </Col>
                    <Col className={`${styles.Border} mx-0`} xs={2}>
                    <p className='my-0 py-0'>{director_calltime} </p>
                    </Col>
                    </Row>
                ) : (
                    ""
                ) }
                </Col>
            </Row>
            </div>
            </Col>
        </Row>
        </div>
        </div> 
    </div>
  )
}

export default CallSheet