import React from 'react';
import { Col, OverlayTrigger, Row, Tooltip } from 'react-bootstrap';
import Card from "react-bootstrap/Card";
import { Link, useHistory } from 'react-router-dom';
import { axiosReq } from '../../api/axiosDefaults';
import { PostDropdown } from '../../components/PostDropdown';
import { useCurrentUser } from '../../contexts/CurrentUserContext';
import { useRedirect } from '../../hooks/Redirect';
import styles from "../../styles/Days.module.css";

const DayTop = (props) => {
    useRedirect("loggedOut")
    const {
        id,
        day,
        date,
        scene1,
        scene2,
        scene3,
        scene4,
        scene5,
        scene6,
        scene7,
        scene8,
        scene9,
        scene10,
        scene11,
        scene12,
        location1,
        location2,
        location3,
        location4,
        location5,
    } = props;
    const currentUser = useCurrentUser();
    const history = useHistory();

    const handleEdit = () => {
        history.push(`/days/${id}/edit`);
        };
    
    const handleDelete = async () => {
    try {
        await axiosReq.delete(`/days/${id}/`);
        history.push(`/days/`);
    } catch (err) {
        // console.log(err);
    }
    };

    return (
        <div>
            <Card className={`text-center ${styles.Days }`} border="info" >
                <Card.Header className="mb-0 px-2">
                <Row className='mx-0 d-flex align-items-center'>
                <Col className='mx-0 px-0' xs={1}></Col>
                <Col xs={10} className='mx-0 px-0 text-center'>
                <h5 className={` ${styles.Titlelist }`}>Day {day}
                </h5>
                </Col >
                <Col xs={1} className=' mx-0 px-0'>
                <PostDropdown
                        handleEdit={handleEdit}
                        handleDelete={handleDelete}
                    />
                </Col>
                </Row>
                <div className={` ${styles.Div25 }`}>
                <span className={styles.Italics }>{date}</span>
                </div>
                Id {id}
                </Card.Header>
                <Card.Body className="p-1" >
                    <Link to={`/days/${id}`}>
                    <div className={` ${styles.Div50 }`}>
                    <Card.Text style={{ fontWeight: '700' }} className="mb-1">
                        Scenes: {scene1} {scene2} {scene3} {scene4} {scene5}  {scene6}
                         {scene7} {scene8} {scene9} {scene10} {scene11} {scene12}
                    </Card.Text>
                    </div>
                    <hr className='m-0'/>
                    <div className={` ${styles.Div50 }`}>
                    <h5> Locations</h5>
                    <p className="mb-1">
                    {location1},
                    {location2}, {location3}, {location4}, {location5},
                    </p></div>
                    </Link>
                </Card.Body>
            </Card>
        </div>
    )
}

export default DayTop
