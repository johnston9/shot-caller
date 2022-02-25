import React from 'react'
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import styles from "../../styles/ScheduleCreate.module.css";
import { useRedirect } from '../../hooks/Redirect';

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
        <div className={`mx-5 ${styles.SceneBox}`} >
            <hr className='mt-4'/>
            <Row style={{ textTransform: 'uppercase'}}>
                <Col className='mx-0 px-0' xs={4} >
                <p className='mb-0'>Character</p>
                </Col>
                <Col className='mx-0 px-0' xs={2} >
                <p className='mb-0'>Costume</p>
                </Col>
                <Col className='mx-0 px-0' xs={3} >
                <p className='mb-0'>Calltime</p>
                </Col>
                <Col className='mx-0 px-0' xs={3} >
                <p className='mb-0'>Pickup</p>
                </Col>
            </Row>
            <Row >
                <Col className='mx-0 px-0' xs={4} >
                <p className='mb-0'>{character1} </p>
                </Col>
                <Col className='mx-0 px-0' xs={2} >
                <p className='mb-0'>{character1_costume}</p>
                </Col>
                <Col className='mx-0 px-0' xs={3} >
                <p className='mb-0'>{character1_calltime}</p>
                </Col>
                <Col className='mx-0 px-0' xs={3} >
                <p className='mb-0'>{character1_pickup}</p>
                </Col>
            </Row>
            <Row >
                <Col className='mx-0 px-0' xs={4} >
                <p className='mb-0'>{character2} </p>
                </Col>
                <Col className='mx-0 px-0' xs={2} >
                <p className='mb-0'>{character2_costume}</p>
                </Col>
                <Col className='mx-0 px-0' xs={3} >
                <p className='mb-0'>{character2_calltime}</p>
                </Col>
                <Col className='mx-0 px-0' xs={3} >
                <p className='mb-0'>{character2_pickup}</p>
                </Col>
            </Row>
            <Row >
                <Col className='mx-0 px-0' xs={4} >
                <p className='mb-0'>{character3} </p>
                </Col>
                <Col className='mx-0 px-0' xs={2} >
                <p className='mb-0'>{character3_costume}</p>
                </Col>
                <Col className='mx-0 px-0' xs={3} >
                <p className='mb-0'>{character3_calltime}</p>
                </Col>
                <Col className='mx-0 px-0' xs={3} >
                <p className='mb-0'>{character3_pickup}</p>
                </Col>
            </Row>
            <Row >
                <Col className='mx-0 px-0' xs={4} >
                <p className='mb-0'>{character4} </p>
                </Col>
                <Col className='mx-0 px-0' xs={2} >
                <p className='mb-0'>{character4_costume}</p>
                </Col>
                <Col className='mx-0 px-0' xs={3} >
                <p className='mb-0'>{character4_calltime}</p>
                </Col>
                <Col className='mx-0 px-0' xs={3} >
                <p className='mb-0'>{character4_pickup}</p>
                </Col>
            </Row>
            <Row >
                <Col className='mx-0 px-0' xs={4} >
                <p className='mb-0'>{character5} </p>
                </Col>
                <Col className='mx-0 px-0' xs={2} >
                <p className='mb-0'>{character5_costume}</p>
                </Col>
                <Col className='mx-0 px-0' xs={3} >
                <p className='mb-0'>{character5_calltime}</p>
                </Col>
                <Col className='mx-0 px-0' xs={3} >
                <p className='mb-0'>{character5_pickup}</p>
                </Col>
            </Row>
            <Row >
                <Col className='mx-0 px-0' xs={4} >
                <p className='mb-0'>{character6} </p>
                </Col>
                <Col className='mx-0 px-0' xs={2} >
                <p className='mb-0'>{character6_costume}</p>
                </Col>
                <Col className='mx-0 px-0' xs={3} >
                <p className='mb-0'>{character6_calltime}</p>
                </Col>
                <Col className='mx-0 px-0' xs={3} >
                <p className='mb-0'>{character6_pickup}</p>
                </Col>
            </Row>
            <Row >
                <Col className='mx-0 px-0' xs={4} >
                <p className='mb-0'>{character7} </p>
                </Col>
                <Col className='mx-0 px-0' xs={2} >
                <p className='mb-0'>{character7_costume}</p>
                </Col>
                <Col className='mx-0 px-0' xs={3} >
                <p className='mb-0'>{character7_calltime}</p>
                </Col>
                <Col className='mx-0 px-0' xs={3} >
                <p className='mb-0'>{character7_pickup}</p>
                </Col>
            </Row>
            <Row >
                <Col className='mx-0 px-0' xs={4} >
                <p className='mb-0'>{character8} </p>
                </Col>
                <Col className='mx-0 px-0' xs={2} >
                <p className='mb-0'>{character8_costume}</p>
                </Col>
                <Col className='mx-0 px-0' xs={3} >
                <p className='mb-0'>{character8_calltime}</p>
                </Col>
                <Col className='mx-0 px-0' xs={3} >
                <p className='mb-0'>{character8_pickup}</p>
                </Col>
            </Row>
            <Row >
                <Col className='mx-0 px-0' xs={4} >
                <p className='mb-0'>{character9} </p>
                </Col>
                <Col className='mx-0 px-0' xs={2} >
                <p className='mb-0'>{character9_costume}</p>
                </Col>
                <Col className='mx-0 px-0' xs={3} >
                <p className='mb-0'>{character9_calltime}</p>
                </Col>
                <Col className='mx-0 px-0' xs={3} >
                <p className='mb-0'>{character9_pickup}</p>
                </Col>
            </Row>
            <Row >
                <Col className='mx-0 px-0' xs={4} >
                <p className='mb-0'>{character10} </p>
                </Col>
                <Col className='mx-0 px-0' xs={2} >
                <p className='mb-0'>{character10_costume}</p>
                </Col>
                <Col className='mx-0 px-0' xs={3} >
                <p className='mb-0'>{character10_calltime}</p>
                </Col>
                <Col className='mx-0 px-0' xs={3} >
                <p className='mb-0'>{character10_pickup}</p>
                </Col>
            </Row>
            <Row >
                <Col className='mx-0 px-0' xs={4} >
                <p className='mb-0'>{character11} </p>
                </Col>
                <Col className='mx-0 px-0' xs={2} >
                <p className='mb-0'>{character11_costume}</p>
                </Col>
                <Col className='mx-0 px-0' xs={3} >
                <p className='mb-0'>{character11_calltime}</p>
                </Col>
                <Col className='mx-0 px-0' xs={3} >
                <p className='mb-0'>{character11_pickup}</p>
                </Col>
            </Row>
            <Row >
                <Col className='mx-0 px-0' xs={4} >
                <p className='mb-0'>{character12} </p>
                </Col>
                <Col className='mx-0 px-0' xs={2} >
                <p className='mb-0'>{character12_costume}</p>
                </Col>
                <Col className='mx-0 px-0' xs={3} >
                <p className='mb-0'>{character12_calltime}</p>
                </Col>
                <Col className='mx-0 px-0' xs={3} >
                <p className='mb-0'>{character12_pickup}</p>
                </Col>
            </Row>
            {/* other */}
            <Row >
                <Col className='mx-0 px-0' xs={4} >
                <p className='mb-0'>{other_characters} </p>
                </Col>
                <Col className='mx-0 px-0' xs={2} >
                <p className='mb-0'>{other_characters_costumes}</p>
                </Col>
                <Col className='mx-0 px-0' xs={3} >
                <p className='mb-0'>{other_characters_calltimes}</p>
                </Col>
                <Col className='mx-0 px-0' xs={3} >
                <p className='mb-0'>{other_characters_pickups}</p>
                </Col>
            </Row>
            {/* <Row style={{ textTransform: 'uppercase'}}>
                <Col className='mx-0 px-0' xs={4} >
                <p className='mb-0'>{other_characters} </p>
                </Col>
                <Col className='mx-0 px-0' xs={2} >
                <p className='mb-0'>{other_characters_costumes}</p>
                </Col>
                <Col className='mx-0 px-0' xs={3} >
                <p className='mb-0'>{other_characters_calltimes}</p>
                </Col>
                <Col className='mx-0 px-0' xs={3} >
                <p className='mb-0'>{other_characters_pickups}</p>
                </Col>
            </Row> */}
            {/* <Row className='mt-3'>
                <Col className='mx-0 px-0' xs={4} >
                <p className='mb-0'>{character1}</p><hr className='my-0'/>
                <p className='mb-0' >{character2}</p><hr className='my-0'/>
                <p className='mb-0' >{character3}</p><hr className='my-0'/>
                <p className='mb-0' >{character4}</p><hr className='my-0'/>
                <p className='mb-0' >{character5}</p><hr className='my-0'/>
                <p className='mb-0' >{character6}</p><hr className='my-0'/>
                <p className='mb-0' >{character7}</p><hr className='my-0'/>
                <p className='mb-0' >{character8}</p><hr className='my-0'/>
                <p className='mb-0' >{character9}</p><hr className='my-0'/>
                <p className='mb-0' >{character10}</p><hr className='my-0'/>
                <p className='mb-0' >{character11}</p><hr className='my-0'/>
                <p className='mb-0' >{character12}</p><hr className='my-0'/>
                <p className='mb-0' >{other_characters}</p>
                </Col>
                <Col xs={2} >
                <p className='mb-0'>{character1_costume}</p><hr className='my-0'/>
                <p className='mb-0'>{character2_costume}</p><hr className='my-0'/>
                <p className='mb-0'>{character3_costume}</p><hr className='my-0'/>
                <p className='mb-0'>{character4_costume}</p><hr className='my-0'/>
                <p className='mb-0'>{character5_costume}</p><hr className='my-0'/>
                <p className='mb-0'>{character6_costume}</p><hr className='my-0'/>
                <p className='mb-0'>{character7_costume}</p><hr className='my-0'/>
                <p className='mb-0'>{character8_costume}</p><hr className='my-0'/>
                <p className='mb-0'>{character9_costume}</p><hr className='my-0'/>
                <p className='mb-0'>{character10_costume}</p><hr className='my-0'/>
                <p className='mb-0'>{character11_costume}</p><hr className='my-0'/>
                <p className='mb-0'>{character12_costume}</p><hr className='my-0'/>
                <p className='mb-0'>{other_characters_costumes}</p>
                </Col>
                <Col xs={3} >
                <p className='mb-0'>{character1_calltime}</p><hr className='my-0'/>
                <p className='mb-0'>{character2_calltime}</p><hr className='my-0'/>
                <p className='mb-0'>{character3_calltime}</p><hr className='my-0'/>
                <p className='mb-0'>{character4_calltime}</p><hr className='my-0'/>
                <p className='mb-0'>{character5_calltime}</p><hr className='my-0'/>
                <p className='mb-0'>{character6_calltime}</p><hr className='my-0'/>
                <p className='mb-0'>{character7_calltime}</p><hr className='my-0'/>
                <p className='mb-0'>{character8_calltime}</p><hr className='my-0'/>
                <p className='mb-0'>{character9_calltime}</p><hr className='my-0'/>
                <p className='mb-0'>{character10_calltime}</p><hr className='my-0'/>
                <p className='mb-0'>{character11_calltime}</p><hr className='my-0'/>
                <p className='mb-0'>{character12_calltime}</p><hr className='my-0'/>
                <p className='mb-0'>{other_characters_calltimes}</p>
                </Col>
                <Col xs={3} >
                <p className='mb-0'>{character1_pickup}</p>
                <p className='mb-0'>{character2_pickup}</p>
                <p className='mb-0'>{character3_pickup}</p>
                <p className='mb-0'>{character4_pickup}</p>
                <p className='mb-0'>{character5_pickup}</p>
                <p className='mb-0'>{character6_pickup}</p>
                <p className='mb-0'>{character7_pickup}</p>
                <p className='mb-0'>{character8_pickup}</p>
                <p className='mb-0'>{character9_pickup}</p>
                <p className='mb-0'>{character10_pickup}</p>
                <p className='mb-0'>{character11_pickup}</p>
                <p className='mb-0'>{character12_pickup}</p>
                <p className='mb-0'>{other_characters_pickups}</p>
                </Col>
            </Row> */}
            {/* <Row style={{ textTransform: 'uppercase'}}>
                <Col xs={4} >
                <p>Other Characters</p>
                <p>{other_characters}</p>
                <h5>Costumes</h5>
                <p>{other_characters_costumes}</p>
                <h5>Calltimes</h5>
                <p>{other_characters_calltimes}</p>
                <h5> Pickups</h5>
                <p>{other_characters_pickups}</p>
                </Col>
            </Row>   */}
            <hr/>
            <h5 className='text-center'>Background Artists</h5>
            <Row >
                <Col className='mx-0 px-0' xs={4}>
                <p>{background_artists}</p>
                </Col>
                <Col className='mx-0 px-0' xs={4}>
                <p>{background_artists_costumes}</p>
                </Col>
                <Col className='mx-0 px-0' xs={2}>
                <p>{background_artists_calltimes}</p>
                </Col>
                <Col className='mx-0 px-0' xs={2}>
                <p>{background_artists_pickups}</p>
                </Col>
            </Row> 
        </div>
        )
}

export default ScheduleCharacters