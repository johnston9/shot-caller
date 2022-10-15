import React from 'react'
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import styles from "../../styles/ScheduleCreate.module.css";
import { useRedirect } from '../../hooks/Redirect';

const ScheduleCharacters = (props) => {
    useRedirect("loggedOut");

    const {character1, character1_costume, character2, 
        character2_costume, character3, character3_costume, character4, 
        character4_costume, character5, character5_costume, character6, 
        character6_costume, character7, character7_costume, character8,
        character8_costume, character9, character9_costume, character10,
        character10_costume, character11, character11_costume, character12,
        character12_costume, other_characters, other_characters_costumes,
        background_artists, background_artists_costumes,
    } = props

    return (
        <div className={`text-center py-2 mb-2 mx-2 mx-md-5 px-2 ${styles.SceneBox}`} >
            <p className={`mb-0 ${styles.TitleBox }`}>Character <span 
              className={`mb-0 ${styles.Costume }`}>Costume</span></p>
            <Row className='py-2'>
                <Col className='mx-5 px-0' >
                {character1 && <span className='mb-0'>{character1} <span className={`mb-0 ${styles.Costume }`}>{character1_costume}</span>, </span>}       
                {character2 && <span className='mb-0'>{character2} <span className={`mb-0 ${styles.Costume }`}>{character2_costume}</span>, </span>} 
                {character3 && <span className='mb-0'>{character3} <span className={`mb-0 ${styles.Costume }`}>{character3_costume}</span>, </span>} 
                {character4 && <span className='mb-0'>{character4} <span className={`mb-0 ${styles.Costume }`}>{character4_costume}</span>, </span>} 
                {character5 && <span className='mb-0'>{character5} <span className={`mb-0 ${styles.Costume }`}>{character5_costume}</span>, </span>} 
                {character6 && <span className='mb-0'>{character6} <span className={`mb-0 ${styles.Costume }`}>{character6_costume}</span>, </span>}
                {character7 && <span className='mb-0'>{character7} <span className={`mb-0 ${styles.Costume }`}>{character7_costume}</span>, </span>}       
                {character8 && <span className='mb-0'>{character8} <span className={`mb-0 ${styles.Costume }`}>{character8_costume}</span>, </span>} 
                {character9 && <span className='mb-0'>{character9} <span className={`mb-0 ${styles.Costume }`}>{character9_costume}</span>, </span>} 
                {character10 && <span className='mb-0'>{character10} <span className={`mb-0 ${styles.Costume }`}>{character10_costume}</span>, </span>} 
                {character11 && <span className='mb-0'>{character11} <span className={`mb-0 ${styles.Costume }`}>{character11_costume}</span>, </span>} 
                {character12 && <span className='mb-0'>{character12} <span className={`mb-0 ${styles.Costume }`}>{character12_costume}</span>, </span>} 
                {other_characters && (<div>
                    <p className='mb-0'>{other_characters}</p>
                <p className={`mb-0 ${styles.Costume }`}> ({other_characters_costumes}) </p></div>) }        
                </Col>
            </Row>
            {/* Background Artists */}
            <p className={`mb-0 ${styles.TitleBox }`}>Background Artists <span 
            className={`mb-0 ${styles.Costume }`}>Costumes</span></p>
            <Row className='mt-2'>
                <Col className='mx-0 px-0'>
                {background_artists && <p className='mt-2 mb-0'>{background_artists}</p>}
                {background_artists_costumes && <p className={`mb-0 ${styles.Costume }`}> {background_artists_costumes}</p>}   
                </Col>
            </Row>
        </div>
        )
}

export default ScheduleCharacters