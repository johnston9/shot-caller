import React from 'react';
import { Col, Row } from 'react-bootstrap';
import Card from "react-bootstrap/Card";
import { Link, useHistory } from 'react-router-dom';
import { axiosReq } from '../../api/axiosDefaults';
import { PostDropdown } from '../../components/PostDropdown';
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
    const history = useHistory();

    const handleEdit = () => {
        history.push(`/edit/days/${id}/`);
        };
    
    const handleDelete = async () => {
    try {
        await axiosReq.delete(`/days/${id}/`);
        history.push(`/days/`);
    } catch (err) {
    }
    };

    return (
        <div>
            <Card className={`text-center ${styles.Days }`} border="info" >
                <Card.Header className={`pt-2 pb-1 ${styles.Header }`}>
                  <Row className='d-flex align-items-center'>
                    <Col className='mx-0 px-0' xs={1}></Col>
                    <Col xs={10} className='mx-0 px-0 text-center'>
                    <h5 className={` ${styles.Titlelist }`}>Day {day} - {date}
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
                <Card.Body className="p-1" >
                    <Link to={`/days/${id}`}>
                    <div className="ml-2 mt-2">
                      {/* Scenes:  */}
                    <p className={` ${styles.Titledetail }`}>Scenes: {scene1} {scene2} {scene3} {scene4} {scene5}  {scene6}
                            {scene7} {scene8} {scene9} {scene10} {scene11} {scene12}
                    </p>
                    {/* Location:  */}
                    <p>
                    Locations: {location1} {location2} {location3} {location4} {location5} </p>
                    
                    </div>
                    </Link>
                </Card.Body>
            </Card>
        </div>
    )
}

export default DayTop
