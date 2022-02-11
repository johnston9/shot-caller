import React, { useEffect, useState } from 'react'
import { useHistory, useParams } from 'react-router';
import { axiosReq } from '../../api/axiosDefaults';
import { useCurrentUser } from '../../contexts/CurrentUserContext';
import { useRedirect } from '../../hooks/Redirect';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import btnStyles from "../../styles/Button.module.css";
import Scene from './Scene';
import TopBox from '../../components/TopBox';

const ScenePage = (props) => {
    useRedirect("loggedOut");
    const { id } = useParams();
    const [scene, setScene] = useState({ results: [] });
    const currentUser = useCurrentUser();
    const history = useHistory();

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
                {/* <Button
                    className={`${btnStyles.Button} ${btnStyles.Back} my-2`}
                    onClick={() => history.push('/scenes')}
                >
                    Back
                </Button> */}
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
