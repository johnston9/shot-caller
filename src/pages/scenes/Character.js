import React from 'react'
import { useRedirect } from '../../hooks/Redirect';
import styles from "../../styles/Scene.module.css";
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import { axiosReq } from '../../api/axiosDefaults';
import { useState } from 'react';
import { PostDropdown } from '../../components/PostDropdown';
import SceneCharacterEdit from './SceneCharacterEdit'

const Character = ({id, cast_number, role, costume, character, setCharacters, handleMount}) => {
    useRedirect("loggedOut");
    const [showEditForm, setShowEditForm] = useState(false);

    const handleDelete = async () => {
        try {
            await axiosReq.delete(`/scenecharacters/${id}/`);
            handleMount();
        } catch (err) {
            // console.log(err);
        }
        };

    return ( 
        <div className={`${styles.n} mx-3 px-2` }>
        <Row >
        <Col className='text-center ' xs={2} >
        <p >{cast_number} </p>
        </Col>
        <Col xs={6} className='text-center '>
        <p >{role} </p>
        </Col>
        <Col xs={3} className='text-center '>
        {costume ? (<p >{costume} </p>) : ("") }
        </Col>
        {/* edit */}
        <Col className={`px-0 ${styles.TitleBox2}`} xs={1}>
            <PostDropdown
                className="pb-2"
                handleEdit={() => setShowEditForm(true)}
                handleDelete={handleDelete}
            />
        </Col>
        </Row>
        {/* edit */}
        <Row>
        <Col>
            {showEditForm ? (
                <SceneCharacterEdit
                    character={character}
                    id={id}
                    handleMount={handleMount}
                    setCharacters={setCharacters}
                    setShowEditForm={setShowEditForm}
                />
            ) : (
                ""
            )}
        </Col>
        </Row> 
        <hr className='py-0 my-0' />
        </div>
    )
}

export default Character