import React from 'react'
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import styles from "../../styles/Scene.module.css";
import { useRedirect } from '../../hooks/Redirect';
import { Image } from 'react-bootstrap';

const ShotImage = ({image} ) => {
    useRedirect("loggedOut");
    return (
        <div className={`${styles.InfoBack} pl-5`}>
            <Row>
                <Col className='text-center pt-1 pb-3'>
                {image ? (<> 
                    <Image src={image} alt="costume" height="200"  />
                    </>) : (
                        <p>No image yet</p>
                    )
                    }
                </Col>
            </Row>
            
        </div>
    )
}

export default ShotImage
