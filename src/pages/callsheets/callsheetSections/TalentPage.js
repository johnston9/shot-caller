/* Component in the Callsheet to display the Callsheet Cast 
   items passed down from the Callsheet
 * Contains the CallCast component */
import React from 'react';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import styles from "../../../styles/Callsheets.module.css";
import CallCast from './CallCast';

const TalentPage = (props) => {
    const {cast, setShow, handleMount} = props;

  return (
    <div className='mt-3'>
        {/* titles */}
        <div className='d-none d-md-block'>
        <div className='mt-5'>
        <span className={`mt-3 pl-3 py-0 px-1 ${styles.SubTitleSpan }`} 
        style={{ textTransform: 'uppercase' }}>Talent</span></div>
        <hr className={`mb-2 pl-3 mt-0 pt-1 ${styles.Break5 }`}/>

        <Row style={{ textTransform: 'uppercase' }} className={`text-center mx-0  
            ${styles.TitleBox}`} >
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
                <p className='mb-0'>PU</p>
            </Col>
            <Col className={`mx-0 px-0 ${styles.TitleBox2}`} xs={2} md={2}>
                <p className='mb-0'>Call</p>
            </Col>
            <Col className={`mx-0 px-0 ${styles.TitleBox2}`} xs={1} md={1}>
                <p className='mb-0'>H/M/W</p>
            </Col>
            <Col className={`mx-0 px-0 ${styles.TitleBox2}`} xs={1} md={1}>
                <p className='mb-0'>Set</p>
            </Col>
            <Col className={`mx-0 px-0 ${styles.TitleBox2}`} xs={1} md={1}>
            <p className='mb-0'>SWF</p>                        
            </Col>
            <Col className={`text-center mx-0 px-0 ${styles.TitleBox2}`} xs={1} md={1}>
            <p className='mb-0'>Info</p>
            </Col>
        </Row>
        </div>
        <div className='d-block d-md-none'>
            <div className={`mb-3 text-center ${styles.SubTitle }`}>
            <span className={`float-right ${styles.Close }`} 
            onClick={() => setShow(false) } >Close</span> 
            <h5 className={`pl-5 text-center`} 
            style={{ textTransform: 'uppercase'}} >Talent </h5>
            </div>
            <Row className='text-center mx-0 px-0' >
                <Col className={`mx-0 px-0 ${styles.TitleBox2}`} xs={5}>
                <p style={{ textTransform: 'uppercase' }} className={`mb-0  ${styles.TitleBox}`}>Role</p>
                </Col>
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
                    <CallCast
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

export default TalentPage