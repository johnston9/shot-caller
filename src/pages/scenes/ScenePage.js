import React, { useEffect, useState } from 'react'
import { axiosReq } from '../../api/axiosDefaults';
import { useRedirect } from '../../hooks/Redirect';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Scene from './Scene';
import { useParams } from "react-router";

const ScenePage = () => {
    useRedirect("loggedOut");
    const { id } = useParams();
    const [scene, setScene] = useState({ results: [] });

    useEffect(() => {
        const handleMount = async () => {
            try {
                const { data } = await axiosReq(`/scenes/${id}`);
                setScene({ results: [data] });
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
                <Scene {...scene.results[0]}
                  scene={scene.results[0]} 
                  setScene={setScene}
                  />

                </Col>
            </Row>
        </div>
    )
}

export default ScenePage
