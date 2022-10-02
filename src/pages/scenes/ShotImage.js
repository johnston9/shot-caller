import React from 'react'
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import { useRedirect } from '../../hooks/Redirect';
import { Image } from 'react-bootstrap';

const ShotImage = ({image} ) => {
    useRedirect("loggedOut");
    return (
        <div>
            <Row>
                <Col className='text-center'>
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
