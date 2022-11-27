import React, { useState } from 'react'
import { useRedirect } from '../../hooks/Redirect';
import styles from "../../styles/Scene.module.css";
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import btnStyles from "../../styles/Button.module.css";
import { Button } from 'react-bootstrap';
import NewCharacter from "./NewCharacter"
import { useHistory } from "react-router-dom";
import { useCharactersContext, useSetCharactersContext } from "../../contexts/Scene_chars_locs";
import InfoChar from './InfoChar';
import SceneCharacterAdd from './SceneCharacterAdd';
import SceneBGAdd from './SceneBGAdd';
import BGAdd from './BGAdd';
import CharactersAdd from './CharactersAdd';

const CharactersBG = (props) => {
    useRedirect("loggedOut");
    const [showInfo, setShowInfo] = useState(false);
    const [showCharactersAdd, setShowCharactersAdd] = useState(false);
    const [showBGAdd, setShowBGAdd] = useState(false);
    const history = useHistory();

    const { id, characters, setCharacters, setShowCharactersBG,
        background, setBackground } = props;
    return ( 
        <div>
            <h5 style={{ textTransform: 'uppercase'}} className={`text-center mt-1 pl-5 py-1 ${styles.SubTitle }`}>
                Characters / BG
                <span style={{ textTransform: 'none'}} className={`float-right ${styles.Close }`} onClick={() => setShowCharactersBG(false) } >Close</span>
            </h5>
            {/* add new char button*/}
            <Row>
            <Col className='text-center'>
            <Button
                className={` py-0 my-3 ${btnStyles.Back} ${btnStyles.Button}`}
                onClick={() => setShowCharactersAdd(showCharactersAdd => !showCharactersAdd)} >ADD CHARACTER
            </Button> 
            </Col>
            </Row>
            {/* add new char*/}
            <Row>
            <Col>
            {!showCharactersAdd ? (
                ""
                    ) : (
                        <CharactersAdd
                        id={id}
                        characters={characters}
                        setCharacters={setCharacters}
                        setShowCharactersAdd={setShowCharactersAdd}  /> 
                    ) } 
                </Col>
            </Row>
            {/* data */}
            <Row>
            <Col>
            {characters.results.length ? (
            characters.results.map((character) => (
            <Col xs={6} md={4}
            className="py-2 p-0 mx-0">
            <p key={character.id}>
            {character.role} - {character.costume}
            </p>
            </Col>
            ))) 
            : (
            ""
            )}
            </Col>
            </Row>
            {/* add bg */}
            <Row>
            <Col className='text-center'>
            <Button
                className={`py-0 my-2 ${btnStyles.Back} ${btnStyles.Button}`}
                onClick={() => setShowBGAdd(showBGAdd => !showBGAdd)} >ADD BG / STANDINGS
            </Button> 
            </Col>
            </Row>
            <Row>
            <Col>
            {!showBGAdd ? (
                ""
                    ) : (
                        <BGAdd
                         id={id}
                         background={background}
                         setBackground={setBackground} 
                         setShowBGAdd={setShowBGAdd} /> 
                    ) } 
                </Col>
            </Row>
            {/* background data */}
            <Row>
            <Col>
            {background.results.length ? (
            background.results.map((back) => (
            <Col xs={6} md={4}
            className="py-2 p-0 mx-0">
            <p key={back.id}>
            {back.role} - {back.costume}
            </p>
            </Col>
            ))) 
            : (
            ""
            )}
            </Col>
            </Row>
            <p className={`my-3 py-1 ${styles.SubTitle }`}></p>
        </div>
    )
}

export default CharactersBG