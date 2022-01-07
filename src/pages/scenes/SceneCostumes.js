import React, { useState } from 'react'
import { Button, Card } from 'react-bootstrap';
import { useHistory } from 'react-router';
import { Link } from 'react-router-dom';
import { axiosReq, axiosRes } from '../../api/axiosDefaults';
import { useCurrentUser } from '../../contexts/CurrentUserContext';
import { useCategoryContext, useSetCategoryContext, useSetDeptContext, useSetNumberContext, useSetSceneContext } from '../../contexts/DeptCategoryContext';
import { useRedirect } from '../../hooks/Redirect';
import styles from "../../styles/Scene.module.css";
import btnStyles from "../../styles/Button.module.css";
import Camera from "../../assets/dep17s.png";
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import { DeptDropdown, PostDropdown } from '../../components/PostDropdown';
import Shotlist from './Shotlist';
import Storyboard from './Storyboard';

const SceneCostumes = ({scene}) => {
    useRedirect("loggedOut");
    const { character1, character1_costume, character2, 
        character2_costume, character3, character3_costume, character4, 
        character4_costume, character5, character5_costume, character6, 
        character6_costume, character7, character7_costume, character8,
        character8_costume, character9, character9_costume, character10, 
        character10_costume, character11, character11_costume, character12,
        character12_costume, other_characters_costumes,
        background_artists_costumes} = scene;
    return (
        <div>
            <Row>
                <Col xs={12} md={6} >
                    <Row>
                        <Col xs={6} >
                            <p>CHARACTER</p>
                        </Col>
                        <Col xs={6} >
                            <p>COSTUME</p>
                        </Col>
                    </Row>
                    <Row >
                        <Col className='mx-0 px-0' xs={6} >
                        <p className='mb-0'>{character1} </p>
                        </Col>
                        <Col className='mx-0 px-0' xs={6} >
                        <p className='mb-0'>{character1_costume}</p>
                        </Col>
                    </Row>
                    <Row >
                        <Col className='mx-0 px-0' xs={6} >
                        <p className='mb-0'>{character2} </p>
                        </Col>
                        <Col className='mx-0 px-0' xs={6} >
                        <p className='mb-0'>{character2_costume}</p>
                        </Col>
                    </Row>
                    <Row >
                        <Col className='mx-0 px-0' xs={6} >
                        <p className='mb-0'>{character3} </p>
                        </Col>
                        <Col className='mx-0 px-0' xs={6} >
                        <p className='mb-0'>{character3_costume}</p>
                        </Col>
                    </Row>
                    <Row >
                        <Col className='mx-0 px-0' xs={6} >
                        <p className='mb-0'>{character4} </p>
                        </Col>
                        <Col className='mx-0 px-0' xs={6} >
                        <p className='mb-0'>{character4_costume}</p>
                        </Col>
                    </Row>
                    <Row >
                        <Col className='mx-0 px-0' xs={6} >
                        <p className='mb-0'>{character5} </p>
                        </Col>
                        <Col className='mx-0 px-0' xs={6} >
                        <p className='mb-0'>{character5_costume}</p>
                        </Col>
                    </Row>
                    <Row >
                        <Col className='mx-0 px-0' xs={6} >
                        <p className='mb-0'>{character6} </p>
                        </Col>
                        <Col className='mx-0 px-0' xs={6} >
                        <p className='mb-0'>{character6_costume}</p>
                        </Col>
                    </Row>
                    <Row >
                        <Col className='mx-0 px-0' xs={6} >
                        <p className='mb-0'>{character7} </p>
                        </Col>
                        <Col className='mx-0 px-0' xs={6} >
                        <p className='mb-0'>{character7_costume}</p>
                        </Col>
                    </Row>
                    <Row >
                        <Col className='mx-0 px-0' xs={6} >
                        <p className='mb-0'>{character8} </p>
                        </Col>
                        <Col className='mx-0 px-0' xs={6} >
                        <p className='mb-0'>{character8_costume}</p>
                        </Col>
                    </Row>
                    <Row >
                        <Col className='mx-0 px-0' xs={6} >
                        <p className='mb-0'>{character9} </p>
                        </Col>
                        <Col className='mx-0 px-0' xs={6} >
                        <p className='mb-0'>{character9_costume}</p>
                        </Col>
                    </Row>
                    <Row >
                        <Col className='mx-0 px-0' xs={6} >
                        <p className='mb-0'>{character10} </p>
                        </Col>
                        <Col className='mx-0 px-0' xs={6} >
                        <p className='mb-0'>{character10_costume}</p>
                        </Col>
                    </Row>
                    <Row >
                        <Col className='mx-0 px-0' xs={6} >
                        <p className='mb-0'>{character11} </p>
                        </Col>
                        <Col className='mx-0 px-0' xs={6} >
                        <p className='mb-0'>{character11_costume}</p>
                        </Col>
                    </Row>
                    <Row >
                        <Col className='mx-0 px-0' xs={6} >
                        <p className='mb-0'>{character12} </p>
                        </Col>
                        <Col className='mx-0 px-0' xs={6} >
                        <p className='mb-0'>{character12_costume}</p>
                        </Col>
                    </Row>
                    <hr/>
                    <p className='text-center'>Other Characters</p>
                    <Row >
                        <Col className='mx-0 px-0' xs={12} >
                        <p className='mb-0'>{other_characters_costumes} </p>
                        </Col>
                    </Row>
                    <hr/>
                    <p className='text-center'>Background Artists</p>
                    <Row >
                        <Col className='mx-0 px-0' xs={12} >
                        <p className='mb-0'>{background_artists_costumes} </p>
                        </Col>
                    </Row>
                </Col>
            </Row>
        </div>
    )
}

export default SceneCostumes
