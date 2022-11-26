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

const CharactersBG = (props) => {
    useRedirect("loggedOut");
    const [showInfo, setShowInfo] = useState(false);
    const history = useHistory();

    const { id, setShowCharactersBG } = props;
    return ( 
        <div>
            <h5 style={{ textTransform: 'uppercase'}} className={`text-center mt-1 pl-5 py-1 ${styles.SubTitle }`}>
                Characters / BG
                <span style={{ textTransform: 'none'}} className={`float-right ${styles.Close }`} onClick={() => setShowCharactersBG(false) } >Close</span>
            </h5>
            <Row>
            <Col>
            <Button
                className={`float-right py-0 my-2 ${btnStyles.Order} ${btnStyles.Button}`}
                onClick={() => setShowInfo(showInfo => !showInfo)} >INFO
            </Button> 
            </Col>
            </Row>
            <Row>
                <Col>
            {!showInfo ? (
                ""
                    ) : (
                        <InfoChar  /> 
                    ) } 
                </Col>
            </Row>
            <Row className="mt-2">
                <Col xs={{span: 10, offset: 1} } md={{span: 6, offset: 3}}>
                <NewCharacter />
                </Col>
            </Row>
            {/* ADD SCENE CHAR */}
            <Row className="mt-3">
                <Col xs={{span: 10, offset: 1} } >
                <SceneCharacterAdd
                 id={id} />
                </Col>
            </Row>
            {/* data */}
            <Row>

            </Row>
            <Row className="mt-3">
            <Col xs={{span: 10, offset: 1} }>
                <SceneBGAdd
                  id={id}  />
                </Col>
            </Row>
        </div>
    )
}

export default CharactersBG