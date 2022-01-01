import React, { useEffect, useState } from 'react'
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Form from 'react-bootstrap/Form';
import Container from 'react-bootstrap/Container';
import styles from "../../styles/Scene.module.css";
import btnStyles from "../../styles/Button.module.css";
import { axiosReq } from '../../api/axiosDefaults';
// import InfiniteScroll from 'react-infinite-scroll-component';
// import { fetchMoreData } from '../../utils/utils';
import NoResults from "../../assets/no-results.png";
import Asset from "../../components/Asset";
import { useRedirect } from '../../hooks/Redirect';
import appStyles from "../../App.module.css";
import { Button } from 'react-bootstrap';
import { useHistory } from 'react-router-dom/cjs/react-router-dom.min';
import TopBox from '../../components/TopBox';

const ScheduleScene = (props) => {
    useRedirect("loggedOut")
    const {day_id, day_name, day_order_number, date_value, scene_id, number, 
        act, title, int_ext, start_time, end_time, content, location,
        filming_location, day_night, time, action, info,
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
        new_info, new_content} = props

    return (
        <div>
            <Row>
                <Col>
                <p>{act} {title} {int_ext}, {start_time}, {end_time}</p>
                <p> {content}, {location},</p>
                <p>{character1}, {character1_costume},</p>
                </Col>
            </Row>         
        </div>
    )
}

export default ScheduleScene
