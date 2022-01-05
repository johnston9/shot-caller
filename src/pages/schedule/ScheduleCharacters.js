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
        <div className={`my-0 px-3 ${styles.SceneBox}`} >
            <Row>
                <Col xs={5} >
                    <h5>Character</h5>
                </Col>
                <Col xs={3} >
                <h5>Costume</h5>
                </Col>
                <Col xs={2} >
                <h5>Calltime</h5>
                </Col>
                <Col xs={2} >
                <h5>Pickup</h5>
                </Col>
            </Row>
            <Row>
                <Col xs={5} >
                <p style={{ textTransform: 'uppercase', fontWeight: 700 }} >{character1}</p>
                <p style={{ textTransform: 'uppercase', fontWeight: 700 }} >{character2}</p>
                <p style={{ textTransform: 'uppercase', fontWeight: 700 }} >{character3}</p>
                <p style={{ textTransform: 'uppercase', fontWeight: 700 }} >{character4}</p>
                <p style={{ textTransform: 'uppercase', fontWeight: 700 }} >{character5}</p>
                <p style={{ textTransform: 'uppercase', fontWeight: 700 }} >{character6}</p>
                <p style={{ textTransform: 'uppercase', fontWeight: 700 }} >{character7}</p>
                <p style={{ textTransform: 'uppercase', fontWeight: 700 }} >{character8}</p>
                <p style={{ textTransform: 'uppercase', fontWeight: 700 }} >{character9}</p>
                <p style={{ textTransform: 'uppercase', fontWeight: 700 }} >{character10}</p>
                <p style={{ textTransform: 'uppercase', fontWeight: 700 }} >{character11}</p>
                <p style={{ textTransform: 'uppercase', fontWeight: 700 }} >{character12}</p>
                </Col>
                <Col xs={3} >
                <p style={{ textTransform: 'uppercase', fontWeight: 700 }}>{character1_costume}</p>
                <p style={{ textTransform: 'uppercase', fontWeight: 700 }}>{character2_costume}</p>
                <p style={{ textTransform: 'uppercase', fontWeight: 700 }}>{character3_costume}</p>
                <p style={{ textTransform: 'uppercase', fontWeight: 700 }}>{character4_costume}</p>
                <p style={{ textTransform: 'uppercase', fontWeight: 700 }}>{character5_costume}</p>
                <p style={{ textTransform: 'uppercase', fontWeight: 700 }}>{character6_costume}</p>
                <p style={{ textTransform: 'uppercase', fontWeight: 700 }}>{character7_costume}</p>
                <p style={{ textTransform: 'uppercase', fontWeight: 700 }}>{character8_costume}</p>
                <p style={{ textTransform: 'uppercase', fontWeight: 700 }}>{character9_costume}</p>
                <p style={{ textTransform: 'uppercase', fontWeight: 700 }}>{character10_costume}</p>
                <p style={{ textTransform: 'uppercase', fontWeight: 700 }}>{character11_costume}</p>
                <p style={{ textTransform: 'uppercase', fontWeight: 700 }}>{character12_costume}</p>
                </Col>
                <Col xs={2} >
                <p>{character1_calltime}</p>
                <p>{character2_calltime}</p>
                <p>{character3_calltime}</p>
                <p>{character4_calltime}</p>
                <p>{character5_calltime}</p>
                <p>{character6_calltime}</p>
                <p>{character7_calltime}</p>
                <p>{character8_calltime}</p>
                <p>{character9_calltime}</p>
                <p>{character10_calltime}</p>
                <p>{character11_calltime}</p>
                <p>{character12_calltime}</p>
                </Col>
                <Col xs={2} >
                <p>{character1_pickup}</p>
                <p>{character2_pickup}</p>
                <p>{character3_pickup}</p>
                <p>{character4_pickup}</p>
                <p>{character5_pickup}</p>
                <p>{character6_pickup}</p>
                <p>{character7_pickup}</p>
                <p>{character8_pickup}</p>
                <p>{character9_pickup}</p>
                <p>{character10_pickup}</p>
                <p>{character11_pickup}</p>
                <p>{character12_pickup}</p>
                </Col>
            </Row>
            <Row>
                <Col>
                <h3>Other Characters</h3>
                <p>{other_characters}</p>
                <h5>Costumes</h5>
                <p>{other_characters_costumes}</p>
                <h5>Calltimes</h5>
                <p>{other_characters_calltimes}</p>
                <h5> Pickups</h5>
                <p>{other_characters_pickups}</p>
                </Col>
            </Row>  
            <Row>
                <Col>
                <h3>Background Artists</h3>
                <p>{background_artists}- Calltimes {other_characters_calltimes} - Pickups {other_characters_pickups} </p>
                <h5>Costumes</h5>
                <p>{background_artists_costumes}</p>
                <h5>Calltimes</h5>
                <p>{background_artists_calltimes}</p>
                <h5> Pickups</h5>
                <p>{background_artists_pickups}</p>
                </Col>
            </Row> 
        </div>
        )
}

export default ScheduleCharacters