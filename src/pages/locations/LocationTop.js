import React from 'react'
import { Card } from 'react-bootstrap';
import { useHistory } from 'react-router';
import { Link } from 'react-router-dom';
import { axiosReq } from '../../api/axiosDefaults';
import { useRedirect } from '../../hooks/Redirect';
import styles from "../../styles/PostsPage.module.css"
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import { PostDropdown } from '../../components/PostDropdown';

const LocationTop = (props) => {
    useRedirect("loggedOut")
    const {
        id,
        name,
    } = props;
    const history = useHistory();

    const handleEdit = () => { 
        history.push(`/locations/${id}/edit`);
        };

    const handleDelete = async () => {
        try {
            await axiosReq.delete(`/locations/${id}/`);
            history.push(`/locations/`);
        } catch (err) {
        }
        };
    return (
        <div>
            <Card className={`text-center ${styles.Top}`}>
                <Link to={`/locations/${id}`}>
                <Card.Header className={`pt-2 pb-1 ${styles.Header }`}>
                  <Row className='d-flex align-items-center'>
                    <Col className='mx-0 px-0' xs={1}></Col>
                    <Col xs={10} className='mx-0 px-0 text-center'>
                    <h2 className={` ${styles.Titlelist }`}> {name}
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

export default LocationTop
