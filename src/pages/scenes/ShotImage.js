import React, { useEffect, useState } from 'react'
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Form from 'react-bootstrap/Form';
import Container from 'react-bootstrap/Container';
import styles from "../../styles/ScheduleCreate.module.css";
import { useRedirect } from '../../hooks/Redirect';
import appStyles from "../../App.module.css";
import { Image } from 'react-bootstrap';

const ShotImage = ({image} ) => {
    useRedirect("loggedOut");
    return (
        <div>
            <Row>
                <Col>
                {image ? (<> 
                    <Image src={costume8_image} alt="costume 8" height="200"  />
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
