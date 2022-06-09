import React from 'react';
import { Col, Row } from 'react-bootstrap';
import Card from "react-bootstrap/Card";
import { Link, useHistory } from 'react-router-dom';
import { axiosReq } from '../../api/axiosDefaults';
import { PostDropdown } from '../../components/PostDropdown';
import { useRedirect } from '../../hooks/Redirect';
import styles from "../../styles/Days.module.css";

const SeriesTop = (props) => {
    useRedirect("loggedOut")
    const {
        id,
        name,
    } = props;
    const history = useHistory();

    const handleEdit = () => {
        history.push(`/series/edit/${id}/`);
        };
    
    const handleDelete = async () => {
    try {
        await axiosReq.delete(`/series/${id}/`);
        history.push(`/home/`);
    } catch (err) {
    }
    };

    return (
        <div>
            <Card className={`text-center `}  >
                <Card.Header className={`pt-2 pb-1 ${styles.Top }`}>
                  <Row >
                    <Col className='mx-0 px-0' xs={1}></Col>
                    <Link to={`/series/${id}`}>
                    <Col xs={10} className='mx-0 px-0 text-center'>
                    <h5 className={` ${styles.Titlelist }`}>{name}
                    </h5>
                    </Col >
                    </Link>
                    <Col xs={1} className='text-center mx-0 px-0'>
                    <PostDropdown
                            handleEdit={handleEdit}
                            handleDelete={handleDelete}
                        />
                    </Col>
                  </Row>
                  </Card.Header>
            </Card>
        </div>
    )
}

export default SeriesTop