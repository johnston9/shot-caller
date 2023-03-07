import React from 'react';
import { useRedirect } from '../../../hooks/Redirect';
import { Col, Row } from 'react-bootstrap';
import styles from "../../../styles/ScheduleCreate.module.css";

const CharSceneInfo = (props) => {
    useRedirect("loggedOut");
    const {filming_location,
        character1_number, character2_number, character3_number,
        character4_number, character5_number, character6_number, 
        character7_number, character8_number, character9_number,
        character10_number, character11_number, character12_number,
        other_characters, background_artists } = props 
  return (
    <div>
      <Row className='mt-2 text-center px-0 mx-0'>
          <Col className={`mx-0 px-0 ${styles.TitleBox2}`} xs={6}>
          <p style={{ textTransform: 'uppercase' }} className={`${styles.TitleBox}`}>Filming Loc</p>
          <p className='mb-0'>{filming_location}</p>                        
          </Col>
          <Col className={`text-center mx-0 px-0 ${styles.TitleBox2}`} xs={6}>
          <p style={{ textTransform: 'uppercase' }} className={`  ${styles.TitleBox}`}>Cast</p>
          {character1_number && <span className='mb-0'> {character1_number}, </span>}       
          {character2_number && <span className='mb-0'> {character2_number}, </span>} 
          {character3_number && <span className='mb-0'> {character3_number}, </span>} 
          {character4_number && <span className='mb-0'> {character4_number}, </span>} 
          {character5_number && <span className='mb-0'> {character5_number}, </span>} 
          {character6_number && <span className='mb-0'> {character6_number}, </span>}
          {character7_number && <span className='mb-0'> {character7_number}, </span>}       
          {character8_number && <span className='mb-0'> {character8_number}, </span>} 
          {character9_number && <span className='mb-0'> {character9_number}, </span>} 
          {character10_number && <span className='mb-0'>{character10_number} , </span>} 
          {character11_number && <span className='mb-0'> {character11_number} , </span>} 
          {character12_number && <span className='mb-0'> {character12_number} , </span>} 
          </Col> 
      </Row>
      <Row className='mt-2 text-center px-0 mx-0'>
      <Col className={`mx-0 px-0 ${styles.TitleBox2}`} xs={12}>
          <p style={{ textTransform: 'uppercase' }} className={`${styles.TitleBox}`}>BG / Standins</p>
          <p className='mb-0'>{background_artists}</p>                        
          </Col>
      </Row>
      {other_characters && (
        <Row className='mt-2 text-center px-0 mx-0'>
        <Col className={`mx-0 px-0 ${styles.TitleBox2}`} xs={12}>
            <p style={{ textTransform: 'uppercase' }} className={`${styles.TitleBox}`}>Other Characters</p>
            <p className='mb-0'>{other_characters}</p>                        
            </Col>
            {/* <Col className={`mx-0 px-0 ${styles.TitleBox2}`} xs={4}>
            <p style={{ textTransform: 'uppercase' }} className={`${styles.TitleBox}`}>INT/EXT - D/N</p>
            <p style={{ textTransform: 'uppercase' }} className='mb-0'>{int_ext} - {day_night} </p>                     
            </Col> */}
        </Row>
      ) }
    </div>
  )
}

export default CharSceneInfo