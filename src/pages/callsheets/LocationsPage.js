import React from 'react';
import { useRedirect } from '../../hooks/Redirect';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import styles from "../../styles/Callsheets.module.css";

const LocationsPage = ({callsheet, setShow}) => {
    useRedirect("loggedOut");
    const { basecamp_name, basecamp_address, basecamp_parking_n_notes,
            location_1_name, location_1_address, location_1_parking_n_notes,
            location_2_name, location_2_address, location_2_parking_n_notes,
            location_3_name, location_3_address, location_3_parking_n_notes,
            location_4_name, location_4_address, location_4_parking_n_notes,
            location_5_name, location_5_address, location_5_parking_n_notes,
           } = callsheet;
  return (
    <div>
        <div className='mt-3'>
        <div className='d-none d-md-block mt-5'>
        <h4 className={`mt-3 pl-3 py-0 ${styles.SubTitleSpan }`} 
        style={{ textTransform: 'uppercase' }}>Locations</h4>
        </div>
        <div className='d-block d-md-none'>
        <div className={`mb-3 text-center ${styles.SubTitle }`}>
        <span className={`float-right ${styles.Close }`} onClick={() => setShow(false) } >Close</span> 
        <h5 className={`pl-5 text-center`} 
        style={{ textTransform: 'uppercase'}} >Locations</h5>
        </div>
        </div>
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
    </div>
  )
}

export default LocationsPage