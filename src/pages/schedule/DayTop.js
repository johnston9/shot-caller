import React from 'react';
import { Col, Row } from 'react-bootstrap';
import Card from "react-bootstrap/Card";
import { Link } from 'react-router-dom';
import { useRedirect } from '../../hooks/Redirect';
import styles from "../../styles/Days.module.css";

const DayTop = (props) => {
    useRedirect("loggedOut")
    const {
        id,
        day,
        date,
        daysScenes,
    } = props;

    // const handleEdit = () => {
    //     history.push(`/edit/days/${id}/`);
    //     };
    
    // const handleDelete = async () => {
    // try {
    //     await axiosReq.delete(`/days/${id}/`);
    //     history.push(`/home/`);
    // } catch (err) {
    // }
    // };

    return (
        <div>
            <Card className={`text-center `}  >
                <Card.Header className={`pt-2 pb-1 ${styles.Top }`}>
                  <Row >
                    <Col xs={12} className='mx-0 px-0 text-center d-flex align-items-center justify-content-center'>
                    <h5 className={` ${styles.Titlelist }`}>
                        Day {day} - {date}
                    </h5>
                    </Col >
                  </Row>
                </Card.Header>
                <Card.Body className={`p-1 ${styles.Bottom }`} >
                    <Link to={`/day/${id}`}>
                    <Col >  
                        <div className={` ${styles.SceneLoc }`}>                 
                        {daysScenes.results.length ? (
                            daysScenes.results.map((scene) => (
                                scene.day_id === id ? (
                                    <span className={` ${styles.Titledetail }`}>{scene.number} - {scene.location}, </span>
                                )  : ("")
                            ))) : ("")}
                        </div>
                        </Col>
                    </Link>
                </Card.Body>
            </Card>
        </div>
    )
}

export default DayTop
