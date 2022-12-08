import React, { useEffect, useState } from 'react'
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import styles from "../../styles/ScheduleSceneItem.module.css";
import { useRedirect } from '../../hooks/Redirect';
import { axiosReq } from '../../api/axiosDefaults';
import SchedBackground from './SchedBackground';
import SchedCharacter from './SchedCharacter';

const ScheduleCharacters = ({scene_id}) => {
    useRedirect("loggedOut");

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
        <div className={`text-center py-2 mb-2 mx-2 mx-md-5 px-2 ${styles.White}`} >
            <h5 className={`${styles.CharactersTitle }`} >CHARACTERS</h5>
            {/* char titles */}
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
            <Col className='px-0 mx-0' xs={4}>
            <p className={`${styles.BoldTitle2} text-center`}>Costume</p></Col>
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
            <Col className='px-0 mx-0' xs={4}>
            <p className={`${styles.BoldTitle2} text-center`}>Costume</p></Col>
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
            <Col className='px-0 mx-0' xs={4}>
            <p className={`${styles.BoldTitle2} text-center`}>Costume</p></Col>
            </Row>
            </div>
            </Col>
            </Row>
            {/* chars */}
            <Row>
            {characters.results.length ? (
            characters.results.map((character, index) => (
            <Col xs={6} md={4}
            className="py-2 p-0 mx-0">
                <SchedCharacter
                // style={{ backgroundColor: (index % 3 === 0) 
                //     ? '#dbfaf9' : (index % 2 === 0) ? 
                //     'rgb(223 254 240)' : 'rgb(248 241 249)' }}
                style={{ backgroundColor: '#dbfaf9' }}
                character={character}
                key={character.id}
                {...character} />
            </Col>
            ))) 
            : (
            ""
            )}
            </Row>
            {/* Background Artists */}
            <h5 className={`${styles.CharactersTitle }`} >BG / STANDINGS</h5>
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
            <SchedBackground
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
        </div>
        )
}

export default ScheduleCharacters