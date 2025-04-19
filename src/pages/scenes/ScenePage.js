/* Page to fetch the data for each Scene
 * Contains the Scene Component to which it passes the data */
import React, { useEffect, useState } from 'react'
import { axiosReq } from '../../api/axiosDefaults';
import { useRedirect } from '../../hooks/Redirect';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Scene from './Scene';
import { useParams } from "react-router-dom";

const ScenePage = () => {
    useRedirect();
    const { id } = useParams();
    const [scene, setScene] = useState({ results: [] });
    const [posts, setPosts] = useState({ results: [] }); 
    const admin = true;

    // if (scene.department = camera) {
    //    setCamera(camera + 1) 
    // }

    useEffect(() => {
        /* Fetch Scene posts */
        const fetchPosts = async () => {
            try {
                const { data } = await axiosReq.get(`/posts/?scene=${id}`);
                setPosts({ results: [data] });
                console.log(data)
            } catch (err) {
                console.log(err);
              }
        }
        fetchPosts();
    }, [id]);

    useEffect(() => {
        /* Fetch each Scene */
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
                <Scene 
                  {...scene.results[0]}
                  scene={scene.results[0]} 
                  setScene={setScene}
                  admin={admin}
                  posts={posts}
                  />
                </Col>
            </Row>
        </div>
    )
}

export default ScenePage
