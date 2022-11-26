import React, { useEffect, useState } from 'react'
import { axiosReq } from '../../api/axiosDefaults';
import { useRedirect } from '../../hooks/Redirect';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Scene from './Scene';
import { useParams } from "react-router-dom";

const ScenePage = () => {
    useRedirect("loggedOut");
    const { id } = useParams();
    const [scene, setScene] = useState({ results: [] });
    const [characters, setCharacters] = useState({ results: [] });
    const [background, setBackground] = useState({ results: [] });
    const [hasLoaded, setHasLoaded] = useState(false);

    useEffect(() => {
        const handleMount = async () => {
            try {
                const { data } = await axiosReq(`/scenes/${id}`);
                const [{ data: scenedata }, { data: castdata }, 
                    { data: bgdata }] = await Promise.all([
                    axiosReq.get(`/scenes/${id}`),
                    axiosReq.get(`/scenecharacters/?scene_id=${id}`),
                    axiosReq.get(`/scenebgs/?scene_id=${id}`),
                ])
                setScene({ results: [scenedata] });
                setCharacters({ results: [castdata] });
                setBackground({ results: [bgdata] });
                console.log(scenedata);
                console.log(castdata);
                console.log(bgdata);
            } catch (err) {
                console.log(err);
              }
        }
        handleMount();
    }, [id])

    return (
        <div>
            <Row className="h-100">
                <Col>
                <Scene 
                  {...scene.results[0]}
                  scene={scene.results[0]} 
                  setScene={setScene}
                  characters={characters.results[0]} 
                  setCharacters={setCharacters}
                  background={background.results[0]} 
                  setBackground={setBackground}
                  />

                </Col>
            </Row>
        </div>
    )
}

export default ScenePage
