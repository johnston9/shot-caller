/* Component in the CharacterBG Component to display the
   Background info
 * Contains the SceneBGEdit component */
import React, { useState } from 'react'
import styles from "../../../styles/Scene.module.css";
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import { axiosReq } from '../../../api/axiosDefaults';
import { PostDropdown } from '../../../components/PostDropdown';
import SceneBGEdit from './SceneBGEdit';

const Background = ({id, quantity, role, costume, handleMount, 
    setBackground, back, admin }) => {
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
        <div className='mx-4 px-2 text-center'>
        <Row >
        <Col className={`${styles.TitleBox4} text-center px-0 mx-0`} xs={2} >
        <p className={` text-center` } >{quantity} </p>
        </Col>
        <Col xs={5} className={`${styles.TitleBox5} px-0 mx-0`}>
        <p className={`${styles.v}` } >{role} </p>
        </Col>
        {admin ? (
            <>
            <Col xs={4} className={`${styles.TitleBox3} px-0 mx-0`}>
            {costume ? (<p className='pl-2'>{costume} </p>) : ("") }
            </Col>
            <Col className={`${styles.TitleBox4} text-center px-0 mx-0`} xs={1}>
                <PostDropdown
                    className="pb-2"
                    handleEdit={() => setShowEditForm(true)}
                    handleDelete={handleDelete}
                />
            </Col>
            </>
        ) : (
            <Col xs={5} className={`${styles.TitleBox4} px-0 mx-0`}>
            {costume ? (<p className='pl-2' >{costume} </p>) : ("") }
            </Col>
        )}
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