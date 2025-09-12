/* Component in the BgPage component to display the Callsheet 
   Background items 
 * Contains the BackgroundInfo component to display 
   the extra background info 
 * Contains the BgInfoMob component to display 
   the extra background info in mobile */
import React, { useState } from 'react';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import styles from "../../../styles/Callsheets.module.css";
import btnStyles from "../../../styles/Button.module.css";
// eslint-disable-next-line
import { Button } from 'react-bootstrap';
import BackgroundInfo from './BackgroundInfo';
import BgInfoMob from './BgInfoMob';

const Background = (props) => {
    const [showInfo, setShowInfo] = useState(false);

    const { id, day_id, qty, type, call, scenes, set, costumes,
         style} = props

    const [bgNew, setBgNew] = useState({
        id1: id,
        day_id1: day_id,
        qty1: qty,
        type1: type,
        call1: call,
        scenes1: scenes,
        set1: set,
        costumes1: costumes,
    });

    const { id1, qty1, type1, call1, } = bgNew;

  return (
    <div style={style} >
        <div className='d-none d-md-block pt-0 mt-0'>
            <Row className='text-center mx-0' >
                <Col className={`mx-0 px-0 py-1 d-flex align-items-center justify-content-center ${styles.Border2}`} xs={2} md={2}>
                    <p className={` ${styles.Bold}`}>{qty1}</p>
                </Col>
                <Col className={`mx-0 px-0 py-1 d-flex align-items-center justify-content-center ${styles.CastCall}`} xs={2} md={2}>
                    <p className={` ${styles.Bold}`}>{call1}</p>
                </Col>
                    <Col className={`mx-0 px-0 py-1 d-flex align-items-center justify-content-center ${styles.Border2}`} xs={6} md={6}>
                    <p className={` ${styles.Bold}`}>{type1}</p>
                    </Col>
                    <Col className={`mx-0 px-0 py-1 v ${styles.Border2} `} xs={2} md={2}>
                    <Button onClick={() => setShowInfo(showInfo => !showInfo)} 
                        className={`${btnStyles.Button} ${btnStyles.Shed}`}>
                        I
                    </Button>
                    </Col>
            </Row>
            {/* info */}
            <Row>
                <Col>
                    {!showInfo ?("") : (                       
                    <BackgroundInfo {...bgNew}/> 
                    ) }
                </Col>
            </Row> 
        </div>
        {/* MOBILE */}
        <div className='d-block d-md-none'>
        <Row className='text-center mx-0 mt-2' >
                <Col className={`mx-0 px-0 d-flex align-items-center justify-content-center py-1 ${styles.Border2}`} xs={2} md={2}>
                    <p className={` ${styles.Bold}`}>{qty1}</p>
                </Col>
                <Col className={`mx-0 px-0 d-flex align-items-center justify-content-center py-1 ${styles.CastCall}`} xs={2} md={2}>
                    <p className={` ${styles.Bold}`}>{call1}</p>
                </Col>
                <Col className={`mx-0 px-0 d-flex align-items-center justify-content-center py-1 ${styles.Border2}`} xs={6} md={6}>
                    <p className={` ${styles.Bold}`}>{type1}</p>
                    </Col>
                <Col className={`mx-0 px-0 d-flex align-items-center justify-content-center py-1 ${styles.Border2} `} xs={2} md={2}>
                <Button onClick={() => setShowInfo(showInfo => !showInfo)} 
                    className={`${btnStyles.Button} ${btnStyles.Shed}`}>
                    I
                </Button>
                </Col>
        </Row>
            {/* info */}
            <Row>
                <Col>
                    {!showInfo ?("") : (                       
                    <BgInfoMob 
                    {...bgNew}/> 
                    ) }
                </Col>
            </Row>
        </div>
    </div>
  )
}

export default Background