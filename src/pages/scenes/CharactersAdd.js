import React, { useState } from 'react'
import { useRedirect } from '../../hooks/Redirect';
import styles from "../../styles/Scene.module.css";
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import btnStyles from "../../styles/Button.module.css";
import { Button } from 'react-bootstrap';
import NewCharacter from "./NewCharacter"
import InfoChar from './InfoChar';
import SceneCharacterAdd from './SceneCharacterAdd';

const CharactersAdd = (props) => {
    useRedirect("loggedOut");
    const [showInfo, setShowInfo] = useState(false);

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
            <Col>
            <Button
                className={`float-right mr-5 py-0 my-2 ${btnStyles.Order} ${btnStyles.Button}`}
                onClick={() => setShowInfo(showInfo => !showInfo)} >INFO
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
            <Row className='mt-0'>
            <Col className="text-center">
            <p className={`${styles.CharactersTitle2 } mb-3`} >Step 1: Add any new Characters to 
            put them in the dropdown below</p>
            </Col>
          </Row>
          {/* new chars */}
            <Row className="mt-2">
                <Col xs={{span: 10, offset: 1} } md={{span: 6, offset: 3}}>
                <NewCharacter />
                </Col>
            </Row>
            <Row className='mt-3'>
            <Col className="text-center">
            <p className={`${styles.CharactersTitle2 } mb-2`} >Step 2: Add the Scene Characters</p>
            </Col>
          </Row>
            {/* ADD SCENE CHAR */}
            <Row className="my-3">
                <Col xs={{span: 10, offset: 1} } >
                <SceneCharacterAdd
                 id={id}
                 characters={characters}
                 setCharacters={setCharacters} />
                </Col>
            </Row>
            </div>
        </div>
        
    )
}

export default CharactersAdd