import React, { useState } from 'react'
import { useRedirect } from '../../hooks/Redirect';
import styles from "../../styles/Scene.module.css";
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import { axiosReq } from '../../api/axiosDefaults';
import { PostDropdown } from '../../components/PostDropdown';
import SceneBGEdit from './SceneBGEdit';

const Background = ({id, quantity, role, costume, handleMount, setBackground, back}) => {
    useRedirect("loggedOut");
    const [showEditForm, setShowEditForm] = useState(false);

    const handleDelete = async () => {
        try {
            await axiosReq.delete(`/scenebgs/${id}/`);
            handleMount();
        } catch (err) {
            // console.log(err);
        }
        };

    return ( 
        <div className='mr-3 px-2'>
        <Row >
        <Col className='px-0 mx-0' xs={2} >
        <p className={`${styles.v} text-center` } >{quantity} </p>
        </Col>
        <Col xs={5} className='px-0 mx-0'>
        <p className={`${styles.v} text-center` } >{role} </p>
        </Col>
        <Col xs={4} className='px-0 mx-0'>
        <p className={`${styles.v} text-center` }>{costume} </p>
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
                <SceneBGEdit
                    back={back}
                    id={id}
                    handleMount={handleMount}
                    setShowEditForm={setShowEditForm}
                    setBackground={setBackground}
                />
            ) : (
                ""
            )}
        </Col>
        </Row> 
        <hr className='py-0 my-0'/>
        </div>
    )
}

export default Background