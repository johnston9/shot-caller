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
            <Row className='pl-5'>
                <Col xs={12} md={4} className="" >
                <p className='mb-0'><span className={`${styles.Bold}`}>Camera/Lens:</span> {camera} {lens} </p>         
                <p className='mb-0'><span className={`${styles.Bold}`}>Focus Pulls:</span> {focus_pulls}</p>
                <p className='mb-0'><span className={`${styles.Bold}`}>Equipment:</span> {equipment}</p>
                </Col>
                <Col xs={12} md={4} className="" >        
                <p className='mb-0'><span className={`${styles.Bold}`}>Script Length:</span> {script_length} </p>
                <p className='mb-0'><span className={`${styles.Bold}`}>Script Ref:</span> {script_ref} </p>
                <p className='mb-0'><span className={`${styles.Bold}`}>Storyboard Ref:</span> {storyboard_refs} </p>
                </Col>
                <Col className="" xs={12} md={4}>
                    <p className='mb-0'><span className={`${styles.Bold}`}>Lighting:</span> {lighting} </p>
                    <p className='mb-0'><span className={`${styles.Bold}`}>FX:</span> {fx} </p>
                    <p className='mb-0'><span className={`${styles.Bold}`}>Audio:</span> {audio} </p> 
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
