import React, { useState } from 'react'
import { useRedirect } from '../../hooks/Redirect';
import styles from "../../styles/Scene.module.css";
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import btnStyles from "../../styles/Button.module.css";
import { Button } from 'react-bootstrap';
import CharactersAdd from './CharactersAdd';
import Character from './Character';
import { useEffect } from 'react';
import { axiosReq } from '../../api/axiosDefaults';
import SceneBGAdd from './SceneBGAdd';
import Background from './Background';

const CharactersBG = (props) => {
    useRedirect("loggedOut");
    const [showCharactersAdd, setShowCharactersAdd] = useState(false);
    const [showBGAdd, setShowBGAdd] = useState(false);
    const [characters, setCharacters] = useState({ results: [] });
    const [background, setBackground] = useState({ results: [] });
    const { id, setShowCharactersBG } = props;

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
            <h5 style={{ textTransform: 'uppercase'}} className={`text-center mt-1 pl-5 py-1 ${styles.SubTitle }`}>
                Characters / BACKGROUND
                <span style={{ textTransform: 'none'}} className={`float-right ${styles.Close }`} onClick={() => setShowCharactersBG(false) } >Close</span>
            </h5>
            <Row className='my-3'>
            <Col xs={6} className=''>
            <h5 className={`${styles.CharactersTitle }`} >CHARACTERS</h5>
            </Col>
            <Col xs={6} className=''>
            <Button
                className={`float-right py-0  ${btnStyles.Back} ${btnStyles.Button}`}
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
            <Row >
            {/* titles */}
            <Col xs={6} md={4}>
            <div className='px-0 mx-2'>
            <Row >
            <Col className='px-0 mx-0' xs={2}>
            <p className={`${styles.BoldTitle2} text-center` }>#</p>
            </Col>
            <Col className='px-0 mx-0' xs={6}>
            <p className={`${styles.BoldTitle2} text-center` }>Character</p></Col>
            <Col className='px-0 mx-0' xs={3}>
            <p className={`${styles.BoldTitle2} text-center`}>Costume</p></Col>
            <Col className='px-0 mx-0' xs={1}>
            <p className={`${styles.BoldTitle2} text-center`}>E</p></Col>
            </Row>
            </div>
            </Col>
            {/* 2 */}
            <Col xs={6} md={4}>
            <div className='px-0 mx-3'>
            <Row >
            <Col className='px-0 mx-0' xs={2}>
            <p className={`${styles.BoldTitle2} text-center` }>#</p>
            </Col>
            <Col className='px-0 mx-0' xs={6}>
            <p className={`${styles.BoldTitle2} text-center` }>Character</p></Col>
            <Col className='px-0 mx-0' xs={3}>
            <p className={`${styles.BoldTitle2} text-center`}>Costume</p></Col>
            <Col className='px-0 mx-0' xs={1}>
            <p className={`${styles.BoldTitle2} text-center`}>E</p></Col>
            </Row>
            </div>
            </Col>
            {/* 3 */}
            <Col className='d-none d-md-block' md={4}>
            <div className='px-0 mx-3'>
            <Row >
            <Col className='px-0 mx-0' xs={2}>
            <p className={`${styles.BoldTitle2} text-center` }>#</p>
            </Col>
            <Col className='px-0 mx-0' xs={6}>
            <p className={`${styles.BoldTitle2} text-center` }>Character</p></Col>
            <Col className='px-0 mx-0' xs={3}>
            <p className={`${styles.BoldTitle2} text-center`}>Costume</p></Col>
            <Col className='px-0 mx-0' xs={1}>
            <p className={`${styles.BoldTitle2} text-center`}>E</p></Col>
            </Row>
            </div>
            </Col>
            </Row>
            <Row>
            {characters.results.length ? (
            characters.results.map((character, index) => (
            <Col xs={6} md={4}
            className="py-2 p-0 mx-0">
                <Character 
                // style={{ backgroundColor: (index % 3 === 0) 
                //     ? '#dbfaf9' : (index % 2 === 0) ? 
                //     'rgb(223 254 240)' : 'rgb(248 241 249)' }}
                style={{ backgroundColor: '#dbfaf9' }}
                setCharacters={setCharacters}
                handleMount={handleMount}
                character={character}
                key={character.id}
                {...character} />
            </Col>
            ))) 
            : (
            ""
            )}
            </Row>
            {/* BG / STANDINGS */}
            <Row className='mt-5'>
            <Col xs={6} className=''>
            <h5 className={`${styles.CharactersTitle }`} >BG / STANDINGS</h5>
            </Col>
            <Col xs={6}  className=''>
            <Button
                className={`float-right py-0 ${btnStyles.Back} ${btnStyles.Button}`}
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
            <div className='px-0 mx-2'>
            <Row >
            <Col className='px-0 mx-0' xs={2}>
            <p className={`${styles.BoldTitle2} text-center` }>Quantity</p>
            </Col>
            <Col className='px-0 mx-0' xs={5}>
            <p className={`${styles.BoldTitle2} text-center` }>Role</p></Col>
            <Col className='px-0 mx-0' xs={4}>
            <p className={`${styles.BoldTitle2} text-center`}>Costume</p></Col>
            <Col className='px-0 mx-0' xs={1}>
            <p className={`${styles.BoldTitle2} text-center`}>E</p></Col>
            </Row>
            </div>
            </Col>
            {/* 2 */}
            <Col xs={12} md={6}>
            <div className='px-0 mx-2'>
            <Row >
            <Col className='px-0 mx-0' xs={2}>
            <p className={`${styles.BoldTitle2} text-center` }>Quantity</p>
            </Col>
            <Col className='px-0 mx-0' xs={6}>
            <p className={`${styles.BoldTitle2} text-center` }>Role</p></Col>
            <Col className='px-0 mx-0' xs={3}>
            <p className={`${styles.BoldTitle2} text-center`}>Costume</p></Col>
            <Col className='px-0 mx-0' xs={1}>
            <p className={`${styles.BoldTitle2} text-center`}>E</p></Col>
            </Row>
            </div>
            </Col>
            </Row>
            {/* background data */}
            <Row>
            <Col>
            {background.results.length ? (
            background.results.map((back, index) => (
            <Col xs={12} md={6}
            className="py-2 p-0 mx-0">
            <Background 
              style={{ backgroundColor: (index % 3 === 0) 
                ? '#dbfaf9' : (index % 2 === 0) ? 
                'rgb(223 254 240)' : 'rgb(248 241 249)' }}
              setBackground={setBackground}
              handleMount={handleMount}
              back={back}
              key={back.id}
              {...back} />
            </Col>
            ))) 
            : (
            ""
            )}
            </Col>
            </Row>
            <p className={`mt-5 mb-2 py-1 ${styles.SubTitle }`}></p>
        </div>
    )
}

export default CharactersBG