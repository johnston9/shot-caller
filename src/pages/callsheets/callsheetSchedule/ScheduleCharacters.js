/* Component to fetch the Schedule Scene Characters and Background data
 * Contains the SchedCharacter component
 * Contains the SchedBackground component */
import React, { useEffect, useState } from 'react'
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import styles from "../../../styles/ScheduleSceneItem.module.css";
import { axiosReq } from '../../../api/axiosDefaults';
import SchedBackground from './SchedBackground';
import SchedCharacter from './SchedCharacter';

const ScheduleCharacters = ({scene_id, showSideBySide, style}) => {

    const [characters, setCharacters] = useState({ results: [] });
    const [background, setBackground] = useState({ results: [] });

    const handleMount = async () => {
        try {
            const [{ data: castdata }, 
                { data: bgdata }] = await Promise.all([
                axiosReq.get(`/scenecharacters/?scene_id=${scene_id}`),
                axiosReq.get(`/scenebgs/?scene_id=${scene_id}`),
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
    }, [scene_id])

    return (
        <div className={`text-center mt-1 py-2 mb-2 mx-2 mx-md-5 px-2 ${styles.SceneBox}`} >
            <p className={`${styles.CharactersTitle } mt-2 mb-1`} >CHARACTERS</p>
            {showSideBySide ? (
            <>
            <Row >
            <Col xs={12} md={6}>
            <div className='px-0 mx-3'>
            <Row >
            <Col className='px-0 mx-0' xs={2}>
            <p className={`text-center ${styles.BoldTitle2}`}>#</p>
            </Col>
            <Col className='px-0 mx-0' xs={7}>
            <p className={`text-center ${styles.BoldTitle2}` }>Role</p></Col>
            <Col className='px-0 mx-0' xs={3}>
            <p className={`text-center ${styles.BoldTitle2}` }>Cos</p>
            </Col>
            </Row>
            </div>
            </Col>
            <Col className='d-none d-md-block' xs={12} md={6}>
            <div className='px-0 mx-3'>
            <Row >
            <Col className='px-0 mx-0' xs={2}>
            <p className={`text-center ${styles.BoldTitle2}` }>#</p>
            </Col>
            <Col className='px-0 mx-0' xs={7}>
            <p className={`text-center ${styles.BoldTitle2}` }>Role</p></Col>
            <Col className='px-0 mx-0' xs={3}>
            <p className={`text-center ${styles.BoldTitle2}` }>Cos</p>
            </Col>
            </Row>
            </div>
            </Col>
            </Row>
            <Row>
            {characters.results.length ? (
            characters.results.map((character) => (
            <Col xs={12} md={6}
            className="p-0 mx-0">
                <SchedCharacter
                character={character}
                key={character.id}
                {...character} />
            </Col>
            ))) 
            : (
            ""
            )}
            </Row>
            </>
            ) : (
            <>
            <Row >
            <Col xs={12} md={4}>
            <div className='px-0 mx-3'>
            <Row >
            <Col className='px-0 mx-0' xs={2}>
            <p className={`text-center ${styles.BoldTitle2}` }>#</p>
            </Col>
            <Col className='px-0 mx-0' xs={7}>
            <p className={`text-center ${styles.BoldTitle2}` }>Role</p></Col>
            <Col className='px-0 mx-0' xs={3}>
            <p className={`text-center ${styles.BoldTitle2}` }>Cos</p>
            </Col>
            </Row>
            </div>
            </Col>
            {/* 2 */}
            <Col className='d-none d-md-block' xs={12} md={4}>
            <div className='px-0 mx-3'>
            <Row >
            <Col className='px-0 mx-0' xs={2}>
            <p className={`text-center ${styles.BoldTitle2}` }>#</p>
            </Col>
            <Col className='px-0 mx-0' xs={7}>
            <p className={`text-center ${styles.BoldTitle2}` }>Role</p></Col>
            <Col className='px-0 mx-0' xs={3}>
            <p className={`text-center ${styles.BoldTitle2}` }>Cos</p>
            </Col>
            </Row>
            </div>
            </Col>
            {/* 3 */}
            <Col className='d-none d-md-block' md={4}>
            <div className='px-0 mx-3'>
            <Row >
            <Col className='px-0 mx-0' xs={2}>
            <p className={`text-center ${styles.BoldTitle2}` }>#</p>
            </Col>
            <Col className='px-0 mx-0' xs={7}>
            <p className={`text-center ${styles.BoldTitle2}` }>Role</p></Col>
            <Col className='px-0 mx-0' xs={3}>
            <p className={`text-center ${styles.BoldTitle2}` }>Cos</p>
            </Col>
            </Row>
            </div>
            </Col>
            </Row>
            <Row>
            {characters.results.length ? (
            characters.results.map((character) => (
            <Col xs={12} md={4}
            className="p-0 mx-0">
                <SchedCharacter
                character={character}
                key={character.id}
                {...character} />
            </Col>
            ))) 
            : (
            ""
            )}
            </Row>
            </>
            ) }
            <Row>
            <Col xs={12}>
            <hr className={`${styles.Break1} mt-4 mb-0`}/>
            </Col>
            </Row>
            {/* Background Artists */}
            <p className={` ${styles.CharactersTitle } mt-3 mb-1`} >BG / STANDINGS</p>
            {/* back titles */}
            <Row className='' >
            {/* 1 */}
            <Col xs={12} md={6}>
            <div className='px-0 mx-3'>
            <Row >
            <Col className='px-0 mx-0' xs={2}>
            <p className={`text-center ${styles.BoldTitle2}` }>Q</p>
            </Col>
            <Col className='px-0 mx-0' xs={5}>
            <p className={`text-center ${styles.BoldTitle2}` }>Role</p></Col>
            <Col className='px-0 mx-0' xs={5}>
            <p className={`text-center ${styles.BoldTitle2}` }>Costume</p>
            </Col>
            </Row>
            </div>
            </Col>
            {/* 2 */}
            <Col className='d-none d-md-block' xs={12} md={6}>
            <div className='px-0 mx-3'>
            <Row >
            <Col className='px-0 mx-0' xs={2}>
            <p className={`text-center ${styles.BoldTitle2}` }>Q</p>
            </Col>
            <Col className='px-0 mx-0' xs={5}>
            <p className={`text-center ${styles.BoldTitle2}` }>Role</p></Col>
            <Col className='px-0 mx-0' xs={5}>
            <p className={`text-center ${styles.BoldTitle2}` }>Costume</p>
            </Col>
            </Row>
            </div>
            </Col>
            </Row>
            {/* background data */}
            <Row>
            {background.results.length ? (
            background.results.map((back) => (
            <Col xs={12} md={6}
            className="p-0 mx-0">
            <SchedBackground
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
            </Row>
        </div>
        )
}

export default ScheduleCharacters