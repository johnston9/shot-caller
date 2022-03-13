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
        character1_number, character2_number, character3_number,
        character4_number, character5_number, character6_number, 
        character7_number, character8_number, character9_number,
        character10_number, character11_number, character12_number,
        other_characters_numbers,
    } = props

    return (
        <div className={`text-center py-2 mb-2 mx-5 px-2 ${styles.SceneBox}`} >
            <span className={`mb-1 px-3 ${styles.BoldTitle }`}>Character - Number - (Costume)</span>
            {/* <p className={`mb-1 mt-2 mx-5 ${styles.BoldTitle }`}>Character - Character Number - (Costume)</p> */}
            {/* <p style={{ textTransform: 'uppercase'}} className={`text-center mt-1 mb-0 ${styles.Bold}`}>Character - Character Number - (Costume)</p> */}
            {/* <p className={`mt-1 pl-3 mb-1 py-1 ${styles.SubTitle }`}></p> */}
            <Row className='py-2'>
                <Col className='mx-5 px-0' >
                {character1 && <span className='mb-0'>{character1} {character1_number} ({character1_costume}), </span>}       
                {character2 && <span className='mb-0'>{character2} {character2_number} ({character2_costume}), </span>} 
                {character3 && <span className='mb-0'>{character3} {character3_number} ({character3_costume}), </span>} 
                {character4 && <span className='mb-0'>{character4} {character4_number} ({character4_costume}), </span>} 
                {character5 && <span className='mb-0'>{character5} {character5_number} ({character5_costume}), </span>} 
                {character6 && <span className='mb-0'>{character6} {character6_number} ({character6_costume}), </span>}
                {character7 && <span className='mb-0'>{character7} {character7_number} ({character7_costume}), </span>}       
                {character8 && <span className='mb-0'>{character8} {character8_number} ({character8_costume}), </span>} 
                {character9 && <span className='mb-0'>{character9} {character9_number} ({character9_costume}), </span>} 
                {character10 && <span className='mb-0'>{character10} {character10_number} ({character10_costume}), </span>} 
                {character11 && <span className='mb-0'>{character11} {character11_number} ({character11_costume}), </span>} 
                {character12 && <span className='mb-0'>{character12} {character12_number} ({character12_costume}), </span>} 
                {other_characters && <span className='mb-0'>{other_characters} {other_characters_numbers} ({other_characters_costumes}) </span>}            
                </Col>
            </Row>
            {/* Background Artists */}
            <Row className='mt-2'>
                <Col className='mx-0 px-0'>
                <span className={`mb-1 mt-2 py-0 px-2 ${styles.BoldTitle }`}>Background Artists - (Costumes)</span>
                {/* <p style={{ textTransform: 'uppercase'}} className={`text-center mb-0 ${styles.Bold}`}>Background Artists - (Costumes) </p> */}
                {background_artists && <p className='mt-2 mb-0'>{background_artists} {background_artists_costumes && <span className='mb-0'> ({background_artists_costumes}) </span>}  </p> }   
                </Col>
            </Row>
        </div>
        )
}

export default ScheduleCharacters