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
            {/* characters */}
            <Row>
            <Col xs={12} md={6} >
            <Row className='mt-3'>
            <Col className='' xs={12}>
                <p className={`text-center ${styles.BoldTitle} 
                mb-2 mx-1 mx-sm-5`}>CHARACTERS</p>
            </Col>
            </Row>
            <Row >
            <Col className='text-center' xs={12}>
                <p> {character1 } {character2} {character3} {character4} {character5}
                {character6} {character7} {character8} {character9} {character10}
                {character11} {character12} {other_characters} </p>
                <Row>
                <Col xs={6}>
                <p
                    className={` ${styles.CostumeLink } `}
                    onClick={() => setShowCos(showCos => !showCos)} >Costumes 1
                </p>
                </Col>
                <Col xs={6}>
                <p
                    className={` ${styles.CostumeLink } `}
                    onClick={() => setShowCosOther(showCosOther => !showCosOther)} >Costumes 2
                </p>
                </Col>
                </Row>
                <div>
                {!showCos ? (
                    ""
                ) : (
                    <SceneCostumes scene={scene} />
                ) }
                </div>
                {!showCosOther ? (
                ""
                ) : (
                <SceneCosOther scene={scene} />
                ) }
            </Col>
            </Row>
            </Col>
            <Col xs={12} md={6} >
            <Row className='mt-3'>
            <Col className='text-center' xs={12}>
            <p className={`${styles.BoldTitle} 
            mb-2 text-center mx-1 mx-sm-5`}>BG/STANDINGS</p>
            </Col>
            </Row>
            <Row >
            <Col className='text-center' xs={12}>
            <p>{background_artists} </p>
            <p
                    className={`${styles.CostumeLink } `}
                    onClick={() => setShowCosBack(showCosBack => !showCosBack)} >Costumes
                </p>
            {!showCosBack ? (
                ""
                ) : (
                <SceneCosBack scene={scene} />
                ) }
            </Col>
            </Row>
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
