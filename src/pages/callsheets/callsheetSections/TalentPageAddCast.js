/* Component in the Callsheet to display the Callsheet Cast 
   items passed down from the Callsheet
 * Contains the CallCast component */
import React from 'react';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import styles from "../../../styles/Callsheets.module.css";
import CallCastAddCast from './CallCastAddCast';

const TalentPageAddCast = ({cast, setShow="", handleMount}) => {

  return (
    <div className='mt-3'>
        {/* titles */}
        <div className='d-none d-md-block'>
        <Row style={{ textTransform: 'uppercase' }} className={`text-center mx-0  ${styles.TitleBox}`} >
            <Col className={`mx-0 px-0 ${styles.TitleBox2}`} xs={1} md={1}>
                <p className='mb-0'>#</p>
            </Col>
            <Col className={`mx-0 px-0 ${styles.TitleBox2}`} xs={2} md={2}>
                <p className='mb-0 pl-2'>Role</p>
            </Col>
            <Col className={`mx-0 px-0 ${styles.TitleBox2}`} xs={2} md={2}>
                <p className='mb-0'>Artist</p>
            </Col>
            <Col className={`mx-0 px-0 ${styles.TitleBox2}`} xs={1} md={1}>
            <p className='mb-0'>SWF</p>                        
            </Col>
            <Col className={`mx-0 px-0 ${styles.TitleBox2}`} xs={1} md={1}>
                <p className='mb-0'>PU</p>
            </Col>
            <Col className={`mx-0 px-0 ${styles.TitleBox2}`} xs={1} md={1}>
                <p className='mb-0'>Call</p>
            </Col>
            <Col className={`mx-0 px-0 ${styles.TitleBox2}`} xs={1} md={1}>
                <p className='mb-0'>H/M/W</p>
            </Col>
            <Col className={`mx-0 px-0 ${styles.TitleBox2}`} xs={1} md={1}>
                <p className='mb-0'>Set</p>
            </Col>
            <Col className={`text-center mx-0 px-0 ${styles.TitleBox2}`} xs={1} md={1}>
                <p className='mb-0'>Info</p>
            </Col>
            <Col className={`text-center mx-0 px-0 ${styles.TitleBox2}`} xs={1} md={1}>
                <p className='mb-0'>Edit</p>
            </Col>
        </Row>
        </div>
        <div className='d-block d-md-none'>
            <Row className='text-center mx-0 px-0' >
                {/* <Col className={`mx-0 px-0  ${styles.TitleBox2}`} xs={2}>
                <p style={{ textTransform: 'uppercase' }} className={`mb-0  ${styles.TitleBox}`}>#</p>
                </Col> */}
                <Col className={`mx-0 px-0 ${styles.TitleBox2}`} xs={5}>
                <p style={{ textTransform: 'uppercase' }} className={`mb-0  ${styles.TitleBox}`}>Role</p>
                </Col>
                {/* <Col className={` mx-0 px-0 ${styles.TitleBox2}`} xs={3}>
                <p style={{ textTransform: 'uppercase' }} className={`mb-0 text-center ${styles.TitleBox}`}>Artist</p>
                </Col> */}
                <Col className={`mx-0 px-0 `} xs={2} md={2}>
                <p style={{ textTransform: 'uppercase' }} className={`mb-0 text-center ${styles.TitleBox}`}>P/U</p>
                </Col>
                <Col className={`mx-0 px-0 `} xs={3} md={3}>
                <p style={{ textTransform: 'uppercase' }} className={`mb-0 text-center ${styles.TitleBox}`}>Call</p>
                </Col>
                <Col className={`mx-0 px-0 `} xs={2} md={2}>
                <p style={{ textTransform: 'uppercase' }} className={`mb-0 text-center ${styles.TitleBox}`}>Info</p>
                </Col>
            </Row>
        </div>
        {/* calls */}
        <Row>
            <Col>
            {cast.results.length ? (
                cast.results.map((cast_member, index) => (
                    <CallCastAddCast
                    style={{ backgroundColor: (index % 3 === 0) 
                        ? '#f6fffe' : (index % 2 === 0) ? 
                        'rgb(246 254 245)' : 'rgb(254 249 254)' }}
                        {...cast_member}
                        handleMount={handleMount}
                        cast_member={cast_member} 
                        key={cast_member.id} />
                ))) : ("")}
            </Col>
        </Row>
    </div>
  )
}

export default TalentPageAddCast