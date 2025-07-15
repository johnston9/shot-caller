/* Component in the TalentPage component to display the Callsheet 
   Cast items 
 * Contains the CallCastInfo component to display 
   the extra cast info 
 * Contains the CallCastInfoMob component to display 
   the extra cast info in mobile */
import React, { useState } from 'react';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import styles from "../../../styles/Callsheets.module.css";
import btnStyles from "../../../styles/Button.module.css";
import { Button } from 'react-bootstrap';
import CallCastInfo from './CallCastInfo';
import { PostDropdown } from '../../../components/PostDropdown';
import { axiosReq } from '../../../api/axiosDefaults';
import EditCast from '../CallsheetEditCast';
import CallCastInfoMob from './CallCastInfoMob';

const CallCast = (props) => {
    const [showInfo, setShowInfo] = useState(false);

    const { 
        style,
        id,
        day_id,
        cast_number,
        role,
        artist,
        contact,
        swf,
        pickup,
        call,
        hmw,
        on_set,
        inst,
      } = props

    const [castNew, setCastNew] = useState({
        id1: id,
        day_id1: day_id,
        cast_number1: cast_number,
        role1: role,
        artist1: artist,
        contact1: contact,
        swf1: swf,
        pickup1: pickup,
        call1: call,
        hmw1: hmw,
        on_set1: on_set,
        inst1: inst,
    });

    const { 
        cast_number1,
        role1,
        artist1,
        swf1,
        pickup1,
        call1,
        hmw1,
        on_set1,
      } = castNew;

    return (
        <div style={style} className={` ${styles.Bold}`} > 
        <div className='d-none d-md-block'>
            <Row className='text-center mx-0 mb-0 pb-0' >
                <Col className={`mx-0 px-0 py-2 d-flex align-items-center justify-content-center ${styles.Border2}`} xs={1} md={1}>
                    <p className={`mb-0`}>{cast_number1}</p>
                </Col>
                <Col className={`mx-0 px-0 py-2 d-flex align-items-center justify-content-center  ${styles.Border2}`} xs={2} md={2}>
                    <p className={`mb-0 pb-0 ${styles.BoldScene}`}>{role1}</p>
                </Col>
                <Col className={`mx-0 px-0 py-2 d-flex align-items-center justify-content-center  ${styles.Border2}`} xs={2} md={2}>
                    <p className={`mb-0`}>{artist1}</p>
                </Col>
                <Col className={`mx-0 px-0 py-2 d-flex align-items-center justify-content-center  ${styles.Border2}`} xs={1} md={1}>
                    <p className='mb-0'>{pickup1}</p>
                </Col>
                <Col className={`mx-0 px-0 py-2 d-flex align-items-center justify-content-center  ${styles.CastCall}`} xs={2} md={2}>
                <p className={`mb-0 pb-0 ${styles.BoldScene}`}>{call1}</p>                        
                </Col>
                <Col className={`mx-0 px-0 v d-flex align-items-center justify-content-center ${styles.Border2} `} xs={1} md={1}>
                    <p className='mb-0'>{hmw1}</p>
                </Col>
                <Col className={`mx-0 px-0 py-2 d-flex align-items-center justify-content-center ${styles.Border2} `} xs={1} md={1}>
                    <p className='mb-0'>{on_set1}</p>
                </Col>
                <Col className={`mx-0 px-0 py-2 d-flex align-items-center justify-content-center ${styles.Border2 }`} xs={1} md={1}>
                <p className='mb-0'>{swf1}</p>                        
                </Col>
                    <Col className={`mx-0 px-0 py-2 d-flex align-items-center justify-content-center ${styles.Border2} `} xs={1} md={1}>
                    <Button onClick={() => setShowInfo(showInfo => !showInfo)} 
                        className={`${btnStyles.Button} ${btnStyles.Shed}`}>
                        Info
                    </Button>
                </Col>
            </Row>
            {/* info */}
                    {!showInfo ?("") : (                       
                    <CallCastInfo {...castNew}/> 
                    ) }
              <Row>
                <Col className={`mb-0 ${styles.NextCall}`}>
                </Col>
            </Row>
        </div>
        {/* MOBILE */}
        <div className='d-block d-md-none'>
            <Row className='text-center mx-0 px-0' >
                <Col className={`mx-0 py-1  ${styles.Border2}`} xs={5}>
                    <p className={`mb-0 pb-0 ${styles.BoldScene}`}>{role1}</p>
                    <p className='mb-0'>{artist1}</p>
                </Col>
                <Col className={`mx-0 px-0 d-flex align-items-center justify-content-center ${styles.Border2}`} xs={2}>
                    <p className='mb-0'>{pickup1}</p>
                </Col> 
                <Col className={`mx-0 px-0 d-flex align-items-center justify-content-center ${styles.CastCall}`} xs={3}>
                    <p className={`mb-0 pb-0 ${styles.BoldScene}`}>{call1}</p>
                </Col>
                <Col className={`mx-0 px-0 d-flex align-items-center justify-content-center ${styles.Border2} `} xs={2} md={2}>
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
                    <CallCastInfoMob 
                    {...castNew}/> 
                    ) }
                </Col>
            </Row>
            <Row>
            <Col className={`mb-0 py-1 ${styles.NextCall}`}>
            </Col>
            </Row>     
        </div>
        </div>
    )
}
  
export default CallCast