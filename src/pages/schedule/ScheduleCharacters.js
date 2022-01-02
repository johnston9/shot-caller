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

const ScheduleCharacters = (props) => {
    useRedirect("loggedOut");

    const {character1, character1_costume, character2, 
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
    } = props

    return (
        <div className={`mt-4 p-3 ${styles.SceneBox}`} >
            <Row>
                <Col>
                <p><span style={{ textTransform: 'uppercase', fontWeight: 700 }} >  {character1}</span> - Costume {character1_costume} - Calltime {character1_calltime} - Pickup {character1_pickup} </p>
                <p>Character2 {character2} - Costume {character2_costume} - Calltime {character2_calltime} - Pickup {character2_pickup} </p>
                <p>Character3 {character3} - Costume {character3_costume} - Calltime {character3_calltime} - Pickup {character3_pickup} </p>
                <p>Character4 {character4} - Costume {character4_costume} - Calltime {character4_calltime} - Pickup {character4_pickup} </p>
                <p>Character5 {character5} - Costume {character5_costume} - Calltime {character5_calltime} - Pickup {character5_pickup} </p>
                <p>Character6 {character6} - Costume {character6_costume} - Calltime {character6_calltime} - Pickup {character6_pickup} </p>
                <p>Character9 {character7} - Costume {character7_costume} - Calltime {character7_calltime} - Pickup {character7_pickup} </p>
                <p>Character6 {character8} - Costume {character8_costume} - Calltime {character8_calltime} - Pickup {character8_pickup} </p>
                <p>Character9 {character9} - Costume {character9_costume} - Calltime {character9_calltime} - Pickup {character9_pickup} </p>
                <p>Character10 {character10} - Costume {character10_costume} - Calltime {character10_calltime} - Pickup {character10_pickup} </p>
                <p>Character11 {character11} - Costume {character11_costume} - Calltime {character11_calltime} - Pickup {character11_pickup} </p>
                <p>Character12 {character12} - Costume {character12_costume} - Calltime {character12_calltime} - Pickup {character12_pickup} </p>
                <p>other_characters {other_characters} - Costume {other_characters_costumes} - Calltimes {other_characters_calltimes} - Pickups {other_characters_pickups} </p>
                <p>background_artists {background_artists} - Costumes {background_artists_costumes} - Calltimes {background_artists_calltimes} - Pickups {background_artists_pickups} </p>
                </Col>
            </Row>  
        </div>
        )
}

export default ScheduleCharacters