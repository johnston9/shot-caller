import React, { useState } from 'react'
import { useRedirect } from '../../hooks/Redirect';
import styles from "../../styles/Scene.module.css";
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import btnStyles from "../../styles/Button.module.css";
import { Button } from 'react-bootstrap';
import { useHistory } from "react-router-dom";
import { useLocationsContext, useSetLocationsContext } from "../../contexts/Scene_chars_locs";
import { axiosReq } from '../../api/axiosDefaults';

const Breakdown = (props) => {
    useRedirect("loggedOut");
    const history = useHistory();
    const handleEdit = () => {
        history.push(`/scenes/${id}/edit`);
      };
    
      const handleDelete = async () => {
        try {
          await axiosReq.delete(`/scenes/${id}/`);
          history.goBack();
        } catch (err) {
        }
      };
    const { id,title, act, int_ext, day_night, time, location, location_detail,
            pages, action, scene, filming_location, shooting_date,
            dramatic_day, equip_set_props, department_info,
            setShowBreak,} = props;
    return ( 
        <div>
            <h5 style={{ textTransform: 'uppercase'}} className={`mt-1 mb-4 pl-3 py-1 ${styles.SubTitle }`}>
                Scene breakdown
                <span style={{ textTransform: 'none'}} className={`float-right ${styles.Close }`} onClick={() => setShowBreak(false) } >Close</span>
            </h5>
            <Row className='mt-0'>
            <Col className="text-center">
            <p>Add / Edit info from the Scene Edit button above</p>
            </Col>
          </Row>
            <Row>
                <Col className='text-center' xs={{span: 10, offset: 1 }} md={{span: 6, offset: 3 }}>
                <p className={`${styles.BoldTitle} 
                text-center mx-1 mx-sm-5`}>TITLE</p>
                <p>{title} </p>
                </Col>
            </Row>
            <Row className='mt-3' >
            <Col className='text-center' xs={6}>
                <p className={`${styles.BoldTitle} 
                mb-2 text-center mx-1 mx-sm-5`}>ACT</p>
                <p style={{ textTransform: 'capitalize'}}>{act} </p>
                </Col>
                <Col className='text-center' xs={6}>
                <p className={`${styles.BoldTitle} 
                mb-2 text-center mx-1 mx-sm-5`}>PAGES</p>
                <p>{pages} </p>
                </Col>
            </Row>
            <Row className='mt-3'>
            <Col className='text-center' xs={6}>
                <p className={`${styles.BoldTitle} 
                mb-2 text-center mx-1 mx-sm-5`}>DRAMATIC DAY</p>
                <p >{dramatic_day} </p>
                </Col>
                <Col className='text-center' xs={6}>
                <p className={`${styles.BoldTitle} 
                mb-2 text-center mx-1 mx-sm-5`}>TIME</p>
                <p>{time} </p>
                </Col>
            </Row>
            <Row className='mt-3'>
            <Col className='text-center' xs={6}>
                <p className={`${styles.BoldTitle} 
                mb-2 text-center mx-1 mx-sm-5`}>LOCATION</p>
                <p style={{ textTransform: 'uppercase'}} >
                {int_ext && (`${int_ext}.`)} {location} {location_detail} {day_night && (`- ${day_night}`)}</p>
            </Col>
            <Col className='text-center' xs={6}>
            <p className={`${styles.BoldTitle} 
            mb-2 text-center mx-1 mx-sm-5`}>ACTION</p>
            <p>{action} </p>
            </Col>
            </Row>
            {/* shoot info */}
            <Row>
            <Col xs={12} md={6}>
            <Row className='mt-3'>
                <Col className='text-center' xs={12}>
                <p className={`${styles.BoldTitle} 
                mb-2 text-center mx-1 mx-sm-5`}>SHOOT INFO </p>
                <p>{shooting_date} {filming_location} </p>
                </Col>
            </Row>
            </Col>
            <Col xs={12}  md={6}>
            <Row className='mt-3'>
                <Col className='text-center' xs={12} >
                <p className={`${styles.BoldTitle} 
                mb-2 text-center mx-1 mx-sm-5`}>EQUIPMENT SET PROPS</p>
                <p>{equip_set_props} </p>
                </Col>
            </Row>
            </Col>
            </Row>
            <Row className='my-3'>
                <Col className='text-center' xs={{span: 10, offset: 1 }} md={{span: 6, offset: 3 }}>
                <p className={`${styles.BoldTitle} 
                mb-2 text-center mx-1 mx-sm-5`}>DEPARTMENTS INFO </p>
                </Col>
            </Row>
            <Row >
                <Col className='text-center' xs={{span: 10, offset: 1 }} >
                <p>{department_info} </p>
                </Col>
            </Row>
        </div>
    )
}

export default Breakdown
