/* Component in the Shot component to display 
   extra info for each Shot */
import React, { useState } from 'react'
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import styles from "../../../styles/Scene.module.css";
import btnStyles from "../../../styles/Button.module.css";
import { Button } from 'react-bootstrap';
import ShotImage from './ShotImage';

const ShotInfo = (props) => {
     const {fx, focus_pulls, lighting, camera, lens, equipment,
        script_ref, storyboard_refs, audio, image, int_ext,
        frame_rate, location, actors, notes, day_night,
        } = props;

        const [showImg, setShowImg] = useState(false);

    return ( 
        <div className={`${styles.InfoBack} mx-3 pt-3`}>
            {/* camera lens location */}
            <Row className='mt-1' >
            <Col className={`${styles.BorderRight} text-center`} xs={6} md={4} >
            <p className={`${styles.BoldTitle} 
            mb-2 text-center mx-1 mx-sm-5`}>CAMERA</p>
            <div className={`${styles.Para}`}>
            <p >{camera} </p>
            </div>
            </Col>
            <Col className={`${styles.BorderRight} text-center`} xs={6} md={4}>
            <p className={`${styles.BoldTitle} 
            mb-2 text-center mx-1 mx-sm-5`}>LENS</p>
            <div className={`${styles.Para}`}>
            <p >{lens} </p>
            </div>
            </Col>
            <Col className={`text-center`} xs={12} md={4} >
            <p className={`${styles.BoldTitle} 
            mb-2 text-center mx-1 mx-sm-5`}>LOCATION</p>
            <div className={`${styles.Para}`}>
            <p >{int_ext} {location} - {day_night} </p>
            </div>
            </Col>
            </Row>
            <Row>
            <Col xs={12}>
            <hr className={`${styles.Break1} mt-0 mb-0`}/>
            </Col>
            </Row>
            <Row>
            <Col xs={12}>
            <hr className={`${styles.Break1} mt-0 mb-0`}/>
            </Col>
            </Row>
            {/* audio focus pulls lighting */}
            <Row className='mt-3' >
            <Col className={`${styles.BorderRight} text-center`} xs={6} md={4}>
            <p className={`${styles.BoldTitle} 
            mb-2 text-center mx-1 mx-sm-5`}>AUDIO</p>
            <div className={`${styles.Para}`}>
            <p>{audio} </p>
            </div>
            </Col>
            <Col className={`${styles.BorderRight} text-center`} xs={6} md={4}>
            <p className={`${styles.BoldTitle} 
            mb-2 text-center mx-1 mx-sm-5`}>FOCUS PULLS</p>
            <div className={`${styles.Para}`}>
            <p>{focus_pulls} </p>
            </div>
            </Col>
            <Col className={`text-center`} xs={12} md={4} >
            <p className={`${styles.BoldTitle} 
            mb-2 text-center mx-1 mx-sm-5`}>LIGHTING</p>
            <div className={`${styles.Para}`}>
            <p >{lighting}</p>
            </div>
            </Col>
            </Row>
            <Row>
            <Col xs={12}>
            <hr className={`${styles.Break1} mb-0`}/>
            </Col>
            </Row>
            {/* Equipment actors FX/VFX */}
            <Row className='mt-3' >
            <Col className={`${styles.BorderRight} text-center`} xs={6} md={4} >
            <p className={`${styles.BoldTitle} 
            mb-2 text-center mx-1 mx-sm-5`}>EQUIPMENT</p>
            <div className={`${styles.Para}`}>
            <p >{equipment} </p>
            </div>
            </Col>
            <Col className={`${styles.BorderRight} text-center`} xs={6} md={4}>
            <p className={`${styles.BoldTitle} 
            mb-2 text-center mx-1 mx-sm-5`}>ACTORS</p>
            <div className={`${styles.Para}`}>
            <p>{actors} </p>
            </div>
            </Col>
            <Col className={`text-center`} xs={12} md={4}>
            <p className={`${styles.BoldTitle} 
            mb-2 text-center mx-1 mx-sm-5`}>FX/VFX</p>
            <div className={`${styles.Para}`}>
            <p>{fx} </p>
            </div>
            </Col>
            </Row>
            <Row>
            <Col xs={12}>
            <hr className={`${styles.Break1} mt-0 mb-0`}/>
            </Col>
            </Row>
            {/* script ref story ref frame rate */}
            <Row className='mt-3' >
            <Col className={`${styles.BorderRight} text-center`} xs={6} md={4}>
            <p className={`${styles.BoldTitle} 
            mb-2 text-center mx-1 mx-sm-5`}>SCRIPT REF</p>
            <div className={`${styles.Para}`}>
            <p>{script_ref} </p>
            </div>
            </Col>
            <Col className={`${styles.BorderRight} text-center`}xs={6} md={4}>
            <p className={`${styles.BoldTitle} d-none d-md-block
            mb-2 text-center mx-1 mx-sm-5`}>STORYBOARD REF</p>
            <p className={`${styles.BoldTitle} d-block d-md-none
            mb-2 text-center mx-1 mx-sm-5`}>STORYB. REF</p>
            <div className={`${styles.Para}`}>
            <p>{storyboard_refs} </p>
            </div>
            </Col>
            <Col className={`text-center`} xs={12} md={4} >
            <p className={`${styles.BoldTitle} 
            mb-2 text-center mx-1 mx-sm-5`}>FRAME RATE</p>
            <div className={`${styles.Para}`}>
            <p >{frame_rate} </p>
            </div>
            </Col>
            </Row>
            <Row>
            <Col xs={12}>
            <hr className={`${styles.Break1} mt-0 mb-0`}/>
            </Col>
            </Row>
            {/* notes */}
            <Row className='mt-3' >
            <Col className={`text-center`} xs={12} md={{span: 8, offset: 2}}>
            <p className={`${styles.BoldTitle} 
            mb-2 text-center mx-1 mx-sm-5`}>NOTES</p>
            <div className={`${styles.Para}`}>
            <p>{notes} </p>
            </div>
            </Col>
            </Row>
            <Row>
            <Col xs={12}>
            <hr className={`${styles.Break1} mb-0`}/>
            </Col>
            </Row>
            {/* image */}
            <Row >
                <Col className={`text-center`} xs={12} >
                    <Button onClick={() => setShowImg(showImg => !showImg)} 
                        className={`${btnStyles.Button} ${btnStyles.Blue} d-block d-md-none `}>
                        Image
                    </Button>                 
                </Col>
            </Row>
            <Row>
                <Col>
                    {!showImg ?("") : (                       
                    <ShotImage image={image} /> 
                    ) }
                </Col>
            </Row>
            <hr className='mt-4'/>    
        </div>
    )
}

export default ShotInfo
