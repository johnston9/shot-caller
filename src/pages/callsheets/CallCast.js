import React from 'react';
import { useRedirect } from '../../hooks/Redirect';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import styles from "../../styles/Callsheets.module.css";

const CallCast = (props) => {
    useRedirect("loggedOut");
    const { 
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
  }= props

    return (
        <div className={` ${styles.Bold}`} > 
        <div className='d-none d-md-block'>
            <Row className='text-center mx-0' >
                <Col className={`mx-0 px-0  ${styles.Border}`} xs={1} md={1}>
                    <p className='mb-0'>{cast_number}</p>
                </Col>
                <Col className={`mx-0 px-0 ${styles.Border}`} xs={2} md={2}>
                    <p className='mb-0'>{role}</p>
                </Col>
                <Col className={`mx-0 px-0 ${styles.Border}`} xs={2} md={2}>
                    <p className='mb-0'>{artist}</p>
                </Col>
                <Col className={`mx-0 px-0 ${styles.Border}`} xs={2} md={2}>
                    <p className='mb-0'>{contact}</p>
                </Col>
                <Col className={`mx-0 px-0 ${styles.Border}`} xs={1} md={1}>
                <p className='mb-0'>{swf}</p>                        
                </Col>
                <Col className={`mx-0 px-0 ${styles.Border}`} xs={1} md={1}>
                    <p >{pickup}</p>
                </Col>
                <Col className={`mx-0 px-0 ${styles.Border}`} xs={1} md={1}>
                <p className='mb-0'>{call}</p>                        
                </Col>
                <Col className={`mx-0 px-0 ${styles.Border} `} xs={1} md={1}>
                    <p >{hmw}</p>
                </Col>
                <Col className={`mx-0 px-0 ${styles.Border} `} xs={1} md={1}>
                    <p >{on_set}</p>
                </Col>
            </Row>
            {/* inst */}
            {/* {inst ? (
            <Row className='px-3'>
                <Col md={{span: 7, offset: 5} } className={`mb-0  ${styles.NextCall}`}>
                <p className="mb-0" >{inst} </p>
                </Col>
            </Row> 
            ) : (
              <Row>
                <Col className={`mb-0 ${styles.NextCall}`}>
                </Col>
            </Row> 
            ) }      */}
        </div>
        {/* mobile */}
        <div className='d-block d-md-none'>
            <Row className='text-center mx-0 px-0' >
                <Col className={`mx-0 px-0  ${styles.TitleBox2}`} xs={2}>
                <p style={{ textTransform: 'uppercase' }} className={`  ${styles.TitleBox}`}>#</p>
                    <p className='mb-0'>{cast_number}</p>
                </Col>
                <Col className={`mx-0 px-0  ${styles.TitleBox2}`} xs={2}>
                <p style={{ textTransform: 'uppercase' }} className={`  ${styles.TitleBox}`}>SWF</p>
                    <p className='mb-0'>{swf}</p>
                </Col>
                <Col className={`mx-0 px-0 ${styles.TitleBox2}`} xs={4}>
                <p style={{ textTransform: 'uppercase' }} className={`  ${styles.TitleBox}`}>Role</p>
                    <p className='mb-0'>{role}</p>
                </Col>
                <Col className={`mx-0 px-0 ${styles.TitleBox2}`} xs={2}>
                <p style={{ textTransform: 'uppercase' }} className={`text-center ${styles.TitleBox}`}>Artist</p>
                    <p className='mb-0'>{artist}</p>
                </Col>  
            </Row>
            {/* 2 */}
            <Row className='text-center mx-0 px-0' >
                <Col className={`mx-0 px-0  ${styles.TitleBox2}`} xs={4}>
                <p style={{ textTransform: 'uppercase' }} className={`  ${styles.TitleBox}`}>Contact</p>
                    <p className='mb-0'>{contact}</p>Contact
                </Col>
                <Col className={`mx-0 px-0  ${styles.TitleBox2}`} xs={2}>
                <p style={{ textTransform: 'uppercase' }} className={`  ${styles.TitleBox}`}>PU</p>
                    <p className='mb-0'>{pickup}</p>
                </Col>
                <Col className={`mx-0 px-0 ${styles.TitleBox2}`} xs={2}>
                <p style={{ textTransform: 'uppercase' }} className={`  ${styles.TitleBox}`}>Call</p>
                    <p className='mb-0'>{call}</p>
                </Col>
                <Col className={`mx-0 px-0 ${styles.TitleBox2}`} xs={2}>
                <p style={{ textTransform: 'uppercase' }} className={`text-center ${styles.TitleBox}`}>H/M/W</p>
                    <p className='mb-0'>{hmw}</p>
                </Col>  
                <Col className={`mx-0 px-0 ${styles.TitleBox2}`} xs={2}>
                <p style={{ textTransform: 'uppercase' }} className={`text-center ${styles.TitleBox}`}>Set</p>
                    <p className='mb-0'>{on_set}</p>
                </Col>  
            </Row>
            {/* inst */}
            {inst ? (
            <Row className='px-3'>
                <Col md={{span: 10, offset: 1} } className={`mb-0 py-2 ${styles.NextCall}`}>
                <p className="mb-0" >{inst} </p>
                </Col>
            </Row> 
            ) : (<Row>
            <Col className={`mb-0 pt-1 ${styles.NextCall}`}>
            </Col>
        </Row>)  }      
        </div>
        </div>
    )
}
  
export default CallCast