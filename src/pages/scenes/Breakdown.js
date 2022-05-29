import React, { useState } from 'react'
import { useRedirect } from '../../hooks/Redirect';
import styles from "../../styles/Scene.module.css";
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import SceneCostumes from './SceneCostumes';
import SceneCosOther from './SceneCosOther';
import SceneCosBack from './SceneCosBack';

const Breakdown = (props) => {
    useRedirect("loggedOut");
    const [showCos, setShowCos] = useState(false);
    const [showCosOther, setShowCosOther] = useState(false);
    const [showCosBack, setShowCosBack] = useState(false);
    const { title, act, int_ext, day_night, time, location, location_detail,
            pages, action, scene, filming_location, shooting_date,
            dramatic_day, equip_set_props, department_info,
            character1, character2, 
            character3, character4, character5, character6, 
            character7, character8, character9, character10, 
            character11, character12, other_characters,
            background_artists, setShowBreak } = props;
    return (
        <div>
            <h5 style={{ textTransform: 'uppercase'}} className={`mt-1 mb-4 pl-3 py-1 ${styles.SubTitle }`}>
                Scene breakdown
                <span style={{ textTransform: 'none'}} className={`float-right ${styles.Close }`} onClick={() => setShowBreak(false) } >Close</span>
            </h5>
                <h4 className='text-center'>{title} - <span>Act {act} - Dramatic Day {dramatic_day} {time} </span> </h4>
            <Row>
            <Col className='mx-0 px-0' xs={12} md={4}  >
                <div className={`p-3 ${styles.BreakBox }`}>
                <h5 className={`my-2 text-center ${styles.BreakBoxTitle }`}>
                Action Pages Department Info
                </h5>
                <p>{action} </p>
                <p>Pages: {pages} </p>
                <p>{department_info} </p>
                </div>
            </Col>
            <Col xs={12} md={4} className='mx-0 px-0'>
                <div className={`p-3 mx-md-3 ${styles.BreakBox }`}>
                <h5 className={`my-2 text-center ${styles.BreakBoxTitle }`}>
                Location Shoot
                </h5>
                <p style={{textTransform: 'uppercase' }}>{int_ext}. {location} {location_detail} - {day_night} </p>
                <p>{shooting_date} </p>
                <p>{filming_location} </p>
                </div>
            </Col>
            <Col className='mx-0 px-0' xs={12} md={4} >
                <div className={`p-2 ${styles.BreakBox }`}>
                <h5 className={`my-2 text-center ${styles.BreakBoxTitle }`}>
                Equip Set Props
                </h5>
                <p>{equip_set_props} </p>
                </div>
            </Col>
            {/* </Row> */}
            {/* characters */}
            {/* <Row> */}
            <Col xs={12} md={4} >
                <div className={`p-3 mt-3 ${styles.BreakBox }`}>
                <h5 className={`my-2 text-center ${styles.BreakBoxTitle }`}>
                Main Characters
                </h5>
                <p> {character1 } {character2} {character3} {character4} {character5}
                {character6} {character7} {character8} {character9} {character10}
                {character11} {character12} </p>
                <Row>
                    <Col mx={6}></Col>
                    <Col mx={6}>
                    <p
                    className={` ${styles.CostumeLink }`}
                    onClick={() => setShowCos(showCos => !showCos)} >Costumes
                </p>
                    </Col>
                </Row>
                {!showCos ? (
                    ""
                ) : (
                    <SceneCostumes scene={scene} />
                ) }
                </div>
            </Col>
            <Col xs={12} md={4} >
                <div className={`p-3 mt-3 mx-3 ${styles.BreakBox }`}>
                <h5 className={`my-2 text-center ${styles.BreakBoxTitle }`}>
                Other Characters
                </h5>
                <p>{other_characters}</p> 
                <Row>
                    <Col mx={6}></Col>
                    <Col mx={6}>
                    <p
                    className={` ${styles.CostumeLink }`}
                    onClick={() => setShowCosOther(showCosOther => !showCosOther)} >Costumes
                </p>
                    </Col>
                </Row>
                <div>
                    {!showCosOther ? (
                    ""
                    ) : (
                    <SceneCosOther scene={scene} />
                    ) }
                </div>
                </div>
            </Col>
            <Col xs={12} md={4}>
                <div className={`p-3 mt-3 mx-3 ${styles.BreakBox }`}>
                <h5 className={`my-2 text-center ${styles.BreakBoxTitle }`}>
                Background Actors
                </h5>
                <p>{background_artists}</p>
                <Row>
                    <Col mx={6}></Col>
                    <Col mx={6}>
                    <p
                    className={`${styles.CostumeLink }`}
                    onClick={() => setShowCosBack(showCosBack => !showCosBack)} >Costumes
                </p>
                </Col>
                </Row>
                {!showCosBack ? (
                    ""
                    ) : (
                    <SceneCosBack scene={scene} />
                    ) }
                </div>
            </Col>
            </Row>
        </div>
    )
}

export default Breakdown
