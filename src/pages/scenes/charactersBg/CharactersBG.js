/* Component in the Scene Component to view and add the 
   Characters and BG
 * Contains the Character and CharactersAdd components
 * Contains the Background and SceneBGAdd components */
import React, { useState } from 'react'
import styles from "../../../styles/Scene.module.css";
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import btnStyles from "../../../styles/Button.module.css";
import { Button } from 'react-bootstrap';
import CharactersAdd from './CharactersAdd';
import Character from './Character';
import { useEffect } from 'react';
import { axiosReq } from '../../../api/axiosDefaults';
import SceneBGAdd from './SceneBGAdd';
import Background from './Background';

const CharactersBG = (props) => {
    const [showCharactersAdd, setShowCharactersAdd] = useState(false);
    const [showBGAdd, setShowBGAdd] = useState(false);
    const [characters, setCharacters] = useState({ results: [] });
    const [background, setBackground] = useState({ results: [] });
    const { id, setShowCharactersBG, admin } = props;

    const handleMount = async () => {
        try {
            const [{ data: castdata }, 
                { data: bgdata }] = await Promise.all([
                axiosReq.get(`/scenecharacters/?scene_id=${id}`),
                axiosReq.get(`/scenebgs/?scene_id=${id}`),
            ])
            setCharacters(castdata);
            setBackground(bgdata);
            console.log(castdata);
            console.log(bgdata);
        } catch (err) {
            console.log(err);
          }
    }

    useEffect(() => {
        handleMount();
    // eslint-disable-next-line
    }, [id])

    return ( 
        <div>
            <h5 className={`text-center mt-1 pl-5 py-1 ${styles.SubTitle }`}>
                CHARACTERS/BG 
                <span className={`float-right ${styles.Close } pt-1`} onClick={() => setShowCharactersBG(false) } >Close</span>
            </h5>
            <Row>
            <Col className='text-center py-3'>
            {/* add char */}
            <Button
                className={` py-0 ${btnStyles.WideChar} ${btnStyles.Back} ${btnStyles.Button}`}
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
            {/* titles */}
            <Row className='mt-3'>
            {/* titles */}
            <Col xs={12} sm={6} md={4}>
            <div className='px-0 mx-3 text-center'>
            <Row >
            <Col className={`${styles.BoldTitle2} px-0 mx-0`} xs={2} >#
            </Col>
            <Col className='px-0 mx-0 text-center' xs={6}>
            <p className={`${styles.BoldTitle2}` }>Character</p>
            </Col>
            <Col className='px-0 mx-0 text-center' xs={4}>
            <p className={`${styles.BoldTitle2} pl-2 `}>Costume</p>
            </Col>
            </Row>
            </div>
            </Col>
            {/* 2 */}
            <Col className='d-none d-sm-block' xs={12} sm={6} md={4}>
            <div className='px-0 mx-3 text-center'>
            <Row >
            <Col className={`${styles.BoldTitle2} px-0 mx-0`} xs={2} >#
            </Col>
            <Col className='px-0 mx-0' xs={6}>
            <p className={`${styles.BoldTitle2}` }>Character</p>
            </Col>
            {admin ? (
                <>
                <Col className='px-0 mx-0' xs={4}>
                <p className={`${styles.BoldTitle2} pl-2`}>Costume</p>
                </Col>
                </>
            ) : (
                <Col className='px-0 mx-0' xs={4}>
            <p className={`${styles.BoldTitle2} pl-2 `}>Costume</p>
            </Col>
            )}
            </Row>
            </div>
            </Col>
            {/* 3 */}
            <Col className='d-none d-md-block' xs={12} sm={6} md={4}>
            <div className='px-0 mx-3 text-center'>
            <Row >
            <Col className={`${styles.BoldTitle2} px-0 mx-0`} xs={2} >#
            </Col>
            <Col className='px-0 mx-0' xs={6}>
            <p className={`${styles.BoldTitle2}` }>Character</p>
            </Col>
            {admin ? (
                <>
                <Col className='px-0 mx-0' xs={4}>
                <p className={`${styles.BoldTitle2} pl-2`}>Costume</p>
                </Col>
                </>
            ) : (
                <Col className='px-0 mx-0' xs={4}>
            <p className={`${styles.BoldTitle2} pl-2 `}>Costume</p>
            </Col>
            )}
            </Row>
            </div>
            </Col>
            </Row>
            <Row>
            {characters.results.length ? (
            characters.results.map((character) => (
            <Col xs={12} sm={6} md={4}
            className="px-0 mx-0">
                <Character 
                setCharacters={setCharacters}
                handleMount={handleMount}
                character={character}
                key={character.id}
                {...character}
                admin={admin} />
            </Col>
            ))) 
            : (
            ""
            )}
            </Row>
            <Row className='mt-4'>
            <Col xs={2} ></Col>
            <Col xs={8}>
            <hr className={`${styles.Break2}`}/>
            </Col>
            </Row>
            {/* BG / STANDINGS */}
            <Row>
            <Col xs={12} className='text-center mt-4' >
            {/* add bg */}
            <Button
                className={`${btnStyles.WideChar} ${btnStyles.Back} ${btnStyles.Button}`}
                onClick={() => setShowBGAdd(showBGAdd => !showBGAdd)} >ADD BG / STANDINGS
            </Button> 
            </Col>
            </Row>
            {/* add back */}
            <Row>
            <Col>
            {!showBGAdd ? (
                ""
                    ) : (
                        <SceneBGAdd
                         id={id}
                         background={background}
                         setBackground={setBackground} 
                         setShowBGAdd={setShowBGAdd} /> 
                    ) } 
                </Col>
            </Row>
            {/* back titles */}
            <Row className='mt-3' >
            {/* 1 */}
            <Col xs={12} md={6}>
            <div className='px-0 mx-3 text-center'>
            <Row >
            <Col className={`${styles.BoldTitle2} px-0 mx-0`} xs={2}>Qty
            </Col>
            <Col className='px-0 mx-0' xs={5}>
            <p className={`${styles.BoldTitle2}` }>
            Role</p></Col>
            {admin ? (
                <>
                <Col className='px-0 mx-0' xs={5}>
                <p className={`${styles.BoldTitle2} pl-2`}>Costume</p>
                </Col>
                </>
            ) : (
                <Col className='px-0 mx-0' xs={5}>
            <p className={`${styles.BoldTitle2} pl-2`}>Costume</p>
            </Col>
            )}
            </Row>
            </div>
            </Col>
            {/* 2 */}
            <Col className='d-none d-md-block' xs={12} md={6}>
            <div className='px-0 mx-3 text-center'>
            <Row >
            <Col className={`${styles.BoldTitle2} px-0 mx-0`} xs={2}>Qty
            </Col>
            <Col className='px-0 mx-0' xs={5}>
            <p className={`${styles.BoldTitle2}` }>
            Role</p></Col>
            {admin ? (
                <>
                <Col className='px-0 mx-0' xs={5}>
                <p className={`${styles.BoldTitle2} pl-2`}>Costume</p>
                </Col>
                </>
            ) : (
                <Col className='px-0 mx-0' xs={5}>
            <p className={`${styles.BoldTitle2} pl-2`}>Costume</p>
            </Col>
            )}
            </Row>
            </div>
            </Col>
            </Row>
            {/* background data */}
            <Row>
            {background.results.length ? (
            background.results.map((back, index) => (
            <Col xs={12} md={6}
            className="p-0 mx-0">
            <Background 
              style={{ backgroundColor: (index % 3 === 0) 
                ? '#dbfaf9' : (index % 2 === 0) ? 
                'rgb(223 254 240)' : 'rgb(248 241 249)' }}
              setBackground={setBackground}
              handleMount={handleMount}
              back={back}
              admin={admin} 
              key={back.id}
              {...back} />
            </Col>
            ))) 
            : (
            ""
            )}
            </Row>
            <Row className='mt-5'>
            <Col xs={2} ></Col>
            <Col xs={8}>
            <hr className={`${styles.Break}`}/>
            </Col>
            </Row>
        </div>
    )
}

export default CharactersBG