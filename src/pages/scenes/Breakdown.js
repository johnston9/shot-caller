import React, { useState } from 'react'
import { Button, Card } from 'react-bootstrap';
import { useHistory } from 'react-router';
import { Link } from 'react-router-dom';
import { useCategoryContext, useSetCategoryContext, useSetDeptContext, useSetNumberContext, useSetSceneContext } from '../../contexts/DeptCategoryContext';
import { useRedirect } from '../../hooks/Redirect';
import styles from "../../styles/Scene.module.css";
import btnStyles from "../../styles/Button.module.css";
import Camera from "../../assets/dep17s.png";
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
    const { id, number, title, act, int_ext, day_night, time, location,
      filming_location, character1, character1_costume, character2, 
      character2_costume, character3, character3_costume, character4, 
      character4_costume, character5, character5_costume, character6, 
      character6_costume, character7, character7_costume, character8,
      character8_costume, character9, character9_costume, character10, 
      character10_costume, character11, character11_costume, character12,
      character12_costume, other_characters, other_characters_costumes,
      background_artists, background_artists_costumes, shooting_date,
      pages, action, content, storyboard, info, image, scene, location_detail,
      workspace_guide, setScene, setShowBreak } = props;
    return (
        <div>
            <h5 style={{ textTransform: 'uppercase'}} className={`mt-1 mb-4 pl-3 py-1 ${styles.SubTitle }`}>
                Scene breakdown
                <span style={{ textTransform: 'none'}} className={`float-right ${styles.Close }`} onClick={() => setShowBreak(false) } >Close</span>
                </h5>
            <Row>
            <Col className='mx-0 px-0' xs={12} md={4}  >
                <div className={`p-3 ${styles.BreakBox }`}>
                <h5 className={`my-2 text-center ${styles.BreakBoxTitle }`}>
                Action Content
                </h5>
                <p>{action} </p>
                <p>Pages: {pages} </p>
                <p>{content} </p>
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
                Equip Set
                </h5>
                <p>{info} </p>
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
                <p> {character1} {character2} {character3} {character4} {character5}
                {character6} {character7} {character7} {character9} {character10}
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
