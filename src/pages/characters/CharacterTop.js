import React from 'react'
import { Card } from 'react-bootstrap';
import { useHistory } from 'react-router-dom';
import { Link } from 'react-router-dom';
import { axiosReq } from '../../api/axiosDefaults';
import { useRedirect } from '../../hooks/Redirect';
import styles from "../../styles/Characters.module.css";
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import { PostDropdown } from '../../components/PostDropdown';

const CharacterTop = (props) => {
    // useRedirect("loggedOut")
    const {
        id,
        role,
    } = props;
    const history = useHistory();

    const handleEdit = () => { 
        history.push(`/characters/${id}/edit`);
        };

    const handleDelete = async () => {
        try {
            await axiosReq.delete(`/characters/${id}/`);
            history.push(`/home/`);
        } catch (err) {
        }
        };

    return (
        <div className='mx-0'>
            <Card className={`mx-1 text-center ${styles.Top}`}>
                <Link to={`/characters/${id}`}>
                <Card.Header className={`pt-2 pb-1 ${styles.Top }`}>
                  <Row className='d-flex align-items-center'>
                    <Col className='mx-0 px-0' xs={1}></Col>
                    <Col xs={10} className='text-center px-0'>
                    <h5 className={` ${styles.Titlelist }`}> {role}
                    </h5>
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
