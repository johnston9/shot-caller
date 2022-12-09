import React from 'react'
import { useRedirect } from '../../hooks/Redirect';
import styles from "../../styles/Scene.module.css";
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import { axiosReq } from '../../api/axiosDefaults';
import { useState } from 'react';
import { PostDropdown } from '../../components/PostDropdown';
import SceneCharacterEdit from './SceneCharacterEdit'

const Character = ({id, admin, cast_number, role, costume, 
    character, setCharacters, handleMount}) => {
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
        <div className={`${styles.n} mx-4 px-2` }>
        <Row >
        <Col className={`${styles.TitleBox3} text-center px-0 mx-0`} xs={2} >
        <p >{cast_number} </p>
        </Col>
        <Col className={`${styles.TitleBox3} text-center px-0 mx-0`}>
        <p >{role} </p>
        </Col>
        {admin ? (
            <>
            <Col xs={3} className={`${styles.TitleBox3} text-center px-0 mx-0`}>
            {costume ? (<p >{costume} </p>) : ("") }
            </Col>
            <Col className={`${styles.TitleBox3} text-center px-0 mx-0`} xs={1}>
                <PostDropdown
                    className="pb-2"
                    handleEdit={() => setShowEditForm(true)}
                    handleDelete={handleDelete}
                />
            </Col>
            </>
        ) : (
            <Col xs={3} className={`${styles.TitleBox3} text-center px-0 mx-0`}>
            {costume ? (<p >{costume} </p>) : ("") }
            </Col>
        )}
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