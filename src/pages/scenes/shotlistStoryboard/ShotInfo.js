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
        script_length, script_ref, storyboard_refs, audio, image,
        } = props;

        const [showImg, setShowImg] = useState(false);

    return (
        <div className={`${styles.InfoBack} mx-3 pt-3`}>
            <Row className='mt-3' >
            <Col className={`${styles.BorderRight} text-center`} xs={12} md={4} >
            <p className={`${styles.BoldTitle} 
            mb-2 text-center mx-1 mx-sm-5`}>CAMERA</p>
            <p >{camera} </p>
            </Col>
            <Col className={`text-center`} xs={12} md={4}>
            <p className={`${styles.BoldTitle} 
            mb-2 text-center mx-1 mx-sm-5`}>LENS</p>
            <p>{lens} </p>
            </Col>
            <Col className={`text-center`} xs={12} md={4}>
            <p className={`${styles.BoldTitle} 
            mb-2 text-center mx-1 mx-sm-5`}>AUDIO</p>
            <p>{audio} </p>
            </Col>
            </Row>
            <Row>
            <Col xs={12}>
            <hr className={`${styles.Break1} mb-0`}/>
            </Col>
            </Row>
            {/* 2222 */}
            <Row className='mt-3' >
            <Col className={`${styles.BorderRight} text-center`} xs={12} md={4} >
            <p className={`${styles.BoldTitle} 
            mb-2 text-center mx-1 mx-sm-5`}>SCENE LENGHT</p>
            <p >{script_length} </p>
            </Col>
            <Col className={`text-center`} xs={12} md={4}>
            <p className={`${styles.BoldTitle} 
            mb-2 text-center mx-1 mx-sm-5`}>SCRIPT REF</p>
            <p>{script_ref} </p>
            </Col>
            <Col className={`text-center`} xs={12} md={4}>
            <p className={`${styles.BoldTitle} 
            mb-2 text-center mx-1 mx-sm-5`}>STORYBOARD REF</p>
            <p>{storyboard_refs} </p>
            </Col>
            </Row>
            <Row>
            <Col xs={12}>
            <hr className={`${styles.Break1} mb-0`}/>
            </Col>
            </Row>
            {/* 3333 */}
            <Row className='mt-3' >
            <Col className={`${styles.BorderRight} text-center`} xs={12} md={4} >
            <p className={`${styles.BoldTitle} 
            mb-2 text-center mx-1 mx-sm-5`}>LIGHTING</p>
            <p >{lighting}</p>
            </Col>
            <Col className={`text-center`} xs={12} md={4}>
            <p className={`${styles.BoldTitle} 
            mb-2 text-center mx-1 mx-sm-5`}>FOCUS PULLS</p>
            <p>{focus_pulls} </p>
            </Col>
            <Col className={`text-center`} xs={12} md={4}>
            <p className={`${styles.BoldTitle} 
            mb-2 text-center mx-1 mx-sm-5`}>SPECIAL EFFECTS</p>
            <p>{fx} </p>
            </Col>
            </Row>
            <Row>
            <Col xs={12}>
            <hr className={`${styles.Break1} mb-0`}/>
            </Col>
            </Row>
            {/* 4444 */}
            {/* <Row className='mt-3' >
            <Col className={`${styles.BorderRight} text-center`} xs={12} md={4} >
            <p className={`${styles.BoldTitle} 
            mb-2 text-center mx-1 mx-sm-5`}>CAMERA</p>
            <p style={{ textTransform: 'capitalize'}}>{camera} {lens} </p>
            </Col>
            <Col className={`text-center`} xs={12} md={4}>
            <p className={`${styles.BoldTitle} 
            mb-2 text-center mx-1 mx-sm-5`}>LENS</p>
            <p>{lens} </p>
            </Col>
            <Col className={`text-center`} xs={12} md={4}>
            <p className={`${styles.BoldTitle} 
            mb-2 text-center mx-1 mx-sm-5`}>AUDIO</p>
            <p>{audio} </p>
            </Col>
            </Row>
            <Row>
            <Col xs={12}>
            <hr className={`${styles.Break1} mb-0`}/>
            </Col>
            </Row> */}
            <Row >
                <Col className="text-center" xs={12} >
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
