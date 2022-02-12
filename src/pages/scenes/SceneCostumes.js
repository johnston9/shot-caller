import React from 'react'
import { useRedirect } from '../../hooks/Redirect';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';

const SceneCostumes = ({scene}) => {
    useRedirect("loggedOut");
    const { character1, character1_costume, character2, 
        character2_costume, character3, character3_costume, character4, 
        character4_costume, character5, character5_costume, character6, 
        character6_costume, character7, character7_costume, character8,
        character8_costume, character9, character9_costume, character10, 
        character10_costume, character11, character11_costume, character12,
        character12_costume, } = scene;
    return (
        <div className='pl-4'>
            <Row>
                <Col xs={12}  >
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
                </Col>
            </Row>
        </div>
    )
}

export default SceneCostumes
