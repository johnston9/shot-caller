/* Component in the CharacterBG Component
 * Contains the NewCharacter component to add new characters 
   to the project
 * Contains the SceneCharacterAdd component to add the
   Scene characters */ 
import React, { useState } from 'react'
import { useRedirect } from '../../../hooks/Redirect';
import styles from "../../../styles/Scene.module.css";
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import btnStyles from "../../../styles/Button.module.css";
import { Button } from 'react-bootstrap';
import NewCharacter from "./NewCharacter"
import InfoChar from '../info/InfoChar';
import SceneCharacterAdd from './SceneCharacterAdd';

const CharactersAdd = (props) => {
    useRedirect("loggedOut");
    const [showInfo, setShowInfo] = useState(false);
    const [showAdd, setShowAdd] = useState(false);

    const { id, characters, setCharacters, setShowCharactersAdd } = props;
    return ( 
        <div>
            <h5 style={{ textTransform: 'uppercase'}} className={`text-center mx-5 mt-1 pl-5 py-1 ${styles.SubTitle }`}>
                Add Characters
                <span style={{ textTransform: 'none'}} className={`float-right ${styles.Close }`} onClick={() => setShowCharactersAdd(false) } >Close</span>
            </h5>
            <div className={` ${styles.AliceBlueMild }`}>        
            {/* info */}
            <Row>
            <Col className='my-3'>
            <Button
                className={`ml-5 py-0 my-2 ${btnStyles.Shed} ${btnStyles.Button}`}
                onClick={() => setShowAdd(showAdd => !showAdd)} >ADD NEW CHARACTERS
            </Button> 
            <Button
                className={`px-5 float-right mr-5 py-0 my-2 ${btnStyles.Shed} ${btnStyles.Button}`}
                onClick={() => setShowInfo(showInfo => !showInfo)} >IMPORTANT
            </Button> 
            </Col>
            </Row>
            {/* info */}
            <Row>
                <Col>
            {!showInfo ? (
                ""
                    ) : (
                        <InfoChar  /> 
                    ) } 
                </Col>
            </Row>
            {/* add new Characters */}
            <Row>
                <Col>
            {!showAdd ? (
                ""
                    ) : (
                        <NewCharacter
                        setShowAdd={setShowAdd} /> 
                    ) } 
                </Col>
            </Row>
            {/* ADD SCENE CHAR */}
                <SceneCharacterAdd
                 id={id}
                 characters={characters}
                 setCharacters={setCharacters} />
            </div>
        </div>
        
    )
}

export default CharactersAdd