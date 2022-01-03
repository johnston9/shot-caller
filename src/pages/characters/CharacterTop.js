import React, { useState } from 'react'
import { Button, Card } from 'react-bootstrap';
import { useHistory } from 'react-router';
import { Link } from 'react-router-dom';
import { axiosReq, axiosRes } from '../../api/axiosDefaults';
import { useCurrentUser } from '../../contexts/CurrentUserContext';
import { useRedirect } from '../../hooks/Redirect';
import styles from "../../styles/DayPage.module.css";
import btnStyles from "../../styles/Button.module.css";
import Camera from "../../assets/dep17s.png";
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import { PostDropdown } from '../../components/PostDropdown';

const CharacterTop = (props) => {
    useRedirect("loggedOut")
    const {
        id,
        role,
    } = props;
    const currentUser = useCurrentUser();
    const history = useHistory();

    const handleEdit = () => { 
        history.push(`/characters/${id}/`);
        };

    const handleDelete = async () => {
        try {
            await axiosReq.delete(`/characters/${id}/`);
            history.push(`/characters/`);
        } catch (err) {
            // console.log(err);
        }
        };

    return (
        <div>
            <Card className={`text-center ${styles.DayPage}`}>
                <Link to={`/characters/${id}`}>
                <Card.Header className={`pt-2 pb-1 ${styles.Header }`}>
                  <Row className='d-flex align-items-center'>
                    <Col className='mx-0 px-0' xs={1}></Col>
                    <Col xs={10} className='mx-0 px-0 text-center'>
                    <h2 className={` ${styles.Titlelist }`}> {role}
                    </h2>
                    </Col >
                    <Col xs={1} className='text-center mx-0 px-0'>
                    <PostDropdown
                            handleEdit={handleEdit}
                            handleDelete={handleDelete}
                        />
                    </Col>
                  </Row>
                  </Card.Header>
                </Link>
            </Card>           
        </div>
    )
}

export default CharacterTop
