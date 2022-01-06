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
            <p >Day {day} {date} </p>
            <p className='mb-0'>Shooting Order: {day_order_number} </p>
            <p className='mb-0'>Act: {act} </p>
            <p className='mb-2'>Scene Heading: <span style={{ textTransform: 'italic' }} >{title} </span> </p>
            <p className='mb-0'>Shoot Address: {location_address} </p>
            <p className='mb-0'>Equip/Set: {info} </p>
            <p className='mb-0'>Scene Content: {content} </p>
            <p className='mb-0'>New Content: {new_content} </p>
            <p className='mb-0'>Scene Time: {time} </p>
        </div>
    )
}

export default SchedSceneInfo
