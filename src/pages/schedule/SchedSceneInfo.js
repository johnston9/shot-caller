import React, { useEffect, useState } from 'react'
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Form from 'react-bootstrap/Form';
import Container from 'react-bootstrap/Container';
import styles from "../../styles/ScheduleCreate.module.css";
import btnStyles from "../../styles/Button.module.css";
import { axiosReq } from '../../api/axiosDefaults';
import { useHistory } from 'react-router';
// import InfiniteScroll from 'react-infinite-scroll-component';
// import { fetchMoreData } from '../../utils/utils';
import NoResults from "../../assets/no-results.png";
import Asset from "../../components/Asset";
import { useRedirect } from '../../hooks/Redirect';
import appStyles from "../../App.module.css";
import { Button } from 'react-bootstrap';
import TopBox from '../../components/TopBox';
import { PostDropdown } from '../../components/PostDropdown';

const SchedSceneInfo = (props) => {
    useRedirect("loggedOut");
     const {day, day_order_number, date, info, number,
            act, title, content, location_address,
            time, new_content, day_id} = props
    return (
        <div>
            <hr className='mt-4'/>
            <h5 className='text-center'>Day {day} {date} Shooting Order {day_order_number} Act {act} Scene {number} <span style={{ textTransform: 'italic' }} >{title} </span> </h5>
            {/* <h5 className='text-center'>Act {act} Scene {number} <span style={{ textTransform: 'italic' }} >{title} </span></h5> */}
            <Row>
                <Col xs={4}><h5>Shoot Address</h5> </Col>
                <Col xs={4}><h5>Equip/Set</h5> </Col>
                <Col xs={4}><h5>Content</h5> </Col>
            </Row>
            <Row>
                <Col xs={4}><p>{location_address}</p> </Col>
                <Col xs={4}><p>{info} </p> </Col>
                <Col xs={4}><p>{content} {new_content ? new_content : "" } </p>
                            <p>{time} </p>  </Col>
            </Row>
        </div>
    )
}

export default SchedSceneInfo
