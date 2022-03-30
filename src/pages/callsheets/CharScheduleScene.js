import React, { useState } from 'react'
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import styles from "../../styles/Callsheets.module.css";
import { useRedirect } from '../../hooks/Redirect';
import CharSceneInfo from './CharSceneInfo';
import btnStyles from "../../styles/Button.module.css";
import { Button, OverlayTrigger, Tooltip } from 'react-bootstrap';

const CharScheduleScene = (props) => {
    useRedirect("loggedOut");
    const [showInfo, setShowInfo] = useState(false);
    const {scene, number, int_ext, start_time,
        location, filming_location, day_night, action, pages,
        new_info, style, 
        character1_number, character2_number, character3_number,
        character4_number, character5_number, character6_number, 
        character7_number, character8_number, character9_number,
        character10_number, character11_number, character12_number,
        other_characters_numbers, } = props

    return (
        <div style={style} className={` ${styles.Bold}`} > 
        <div className='d-none d-md-block'>
            <Row className='pt-2 text-center mx-0' >
                <Col className={`mx-0 px-0  ${styles.TitleBox2}`} xs={1} md={1}>
                    <p className='mb-0'>{start_time}</p>
                    {/* <p className='mb-0'>{end_time}</p> */}
                </Col>
                <Col className={`mx-0 px-0 ${styles.TitleBox2}`} xs={1} md={1}>
                    <p className='mb-0'>{number}</p>
                </Col>
                <Col className={`mx-0 px-0 ${styles.TitleBox2}`} xs={4} md={4}>
                    <p style={{ textTransform: 'uppercase'}} className='mb-0'>{int_ext}. {location}</p>
                    <p className='mb-0'>{action}</p>
                </Col>
                <Col className={`mx-0 px-0 ${styles.TitleBox2}`} xs={1} md={1}>
                    <p className='mb-0'>{day_night}</p>
                </Col>
                <Col className={`mx-0 px-0 ${styles.TitleBox2}`} xs={2} md={2}>
                <p className='mb-0'>{filming_location}</p>                        
                </Col>
                {/* cast */}
                <Col xs={2} md={2} className={`mx-0 px-0 ${styles.TitleBox2}`} >
                {character1_number && <span className='mb-0'> {character1_number}, </span>}       
                {character2_number && <span className='mb-0'> {character2_number}, </span>} 
                {character3_number && <span className='mb-0'> {character3_number}, </span>} 
                {character4_number && <span className='mb-0'> {character4_number}, </span>} 
                {character5_number && <span className='mb-0'> {character5_number}, </span>} 
                {character6_number && <span className='mb-0'> {character6_number}, </span>}
                {character7_number && <span className='mb-0'> {character7_number}, </span>}       
                {character8_number && <span className='mb-0'> {character8_number}, </span>} 
                {character9_number && <span className='mb-0'> {character9_number}, </span>} 
                {character10_number && <span className='mb-0'>{character10_number} , </span>} 
                {character11_number && <span className='mb-0'> {character11_number} , </span>} 
                {character12_number && <span className='mb-0'> {character12_number} , </span>} 
                {other_characters_numbers && <span className='mb-0'> {other_characters_numbers} </span>}   
                </Col>   
                <Col className={`mx-0 px-0 `} xs={1} md={1}>
                    <p >{pages}</p>
                </Col>
            </Row>
            {/* next */}
            {new_info ? (
            <Row className='px-3'>
                <Col className={`mb-0 py-2 ${styles.NextCall}`}>
                <p className="mb-0" >Next: {new_info} </p>
                </Col>
            </Row> 
            ) : ("") }     
        </div>
        {/* mobile */}
        <div className='d-block d-md-none'>
            <Row className='text-center mx-0 px-0' >
                <Col className={`mx-0 px-0  ${styles.TitleBox2}`} xs={2}>
                <p style={{ textTransform: 'uppercase' }} className={`  ${styles.TitleBox}`}>Time</p>
                    <p className='mb-0'>{start_time}</p>
                    {/* <p className='mb-0'>{end_time}</p> */}
                </Col>
                <Col className={`mx-0 px-0 ${styles.TitleBox2}`} xs={2}>
                <p style={{ textTransform: 'uppercase' }} className={`  ${styles.TitleBox}`}>Scene</p>
                    <p className='mb-0'>{number}</p>
                </Col>
                {/* <Col className={`mx-0 px-0 ${styles.TitleBox2}`} xs={2}>
                <p style={{ textTransform: 'uppercase' }} className={`text-center ${styles.TitleBox}`}>D/N</p>
                    <p className='mb-0'>{day_night}</p>
                </Col>   */}
                <Col className={` mx-0 px-0 ${styles.TitleBox2}`} xs={6}>
                <p style={{ textTransform: 'uppercase' }} className={`text-center ${styles.TitleBox}`}>Details</p>
                    <p style={{ textTransform: 'uppercase'}} className='mb-0'>{int_ext} - {location} - {day_night}</p>
                    <p className='mb-0'>{action}</p>
                </Col>
                <Col className={`mx-0 px-0 `} xs={2} md={1}>
                <p style={{ textTransform: 'uppercase' }} className={`text-center ${styles.TitleBox}`}>Info</p>
                    <Button onClick={() => setShowInfo(showInfo => !showInfo)} 
                        className={`${btnStyles.Button} ${btnStyles.Shed}`}>
                        I
                    </Button>
                </Col>
            </Row>
            {/* 2 */}
            <Row className='mt-2 text-center px-0 mx-0'>
                <Col className={`mx-0 px-0 ${styles.TitleBox2}`} xs={6}>
                <p style={{ textTransform: 'uppercase' }} className={`${styles.TitleBox}`}>Filming Loc</p>
                <p className='mb-0'>{filming_location}</p>                        
                </Col>
                {/* cast */}
                <Col className={`text-center mx-0 px-0 ${styles.TitleBox2}`} xs={6}>
                <p style={{ textTransform: 'uppercase' }} className={`  ${styles.TitleBox}`}>Cast</p>
                {character1_number && <span className='mb-0'> {character1_number}, </span>}       
                {character2_number && <span className='mb-0'> {character2_number}, </span>} 
                {character3_number && <span className='mb-0'> {character3_number}, </span>} 
                {character4_number && <span className='mb-0'> {character4_number}, </span>} 
                {character5_number && <span className='mb-0'> {character5_number}, </span>} 
                {character6_number && <span className='mb-0'> {character6_number}, </span>}
                {character7_number && <span className='mb-0'> {character7_number}, </span>}       
                {character8_number && <span className='mb-0'> {character8_number}, </span>} 
                {character9_number && <span className='mb-0'> {character9_number}, </span>} 
                {character10_number && <span className='mb-0'>{character10_number} , </span>} 
                {character11_number && <span className='mb-0'> {character11_number} , </span>} 
                {character12_number && <span className='mb-0'> {character12_number} , </span>} 
                {other_characters_numbers && <span className='mb-0'> {other_characters_numbers} </span>} 
                </Col>               
            </Row>
            {/* info */}
            <Row>
                <Col>
                    {!showInfo ?("") : (                       
                    <CharSceneInfo {...scene}/> 
                    ) }
                    </Col>
                </Row>
            {/* next */}
            {new_info ? (
                <Row>
                <Col className={`mb-0 py-2 ${styles.NextCall}`}>
                <p className="mb-0" >Next: {new_info} </p>
                </Col>
            </Row> 
            ) : (
                <Row>
                <Col className={`mb-0 pt-1 ${styles.NextCall}`}>
                </Col>
            </Row> 
            ) }     
        </div>
        </div>
    )
}

export default CharScheduleScene