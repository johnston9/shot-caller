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
        xtra_scenes,
        daysScenes,
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
            <Card className={`text-center `}  >
                <Card.Header className={`pt-2 pb-1 ${styles.Top }`}>
                  <Row >
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
                <Card.Body className={`p-1 ${styles.Bottom }`} >
                    <Link to={`/day/${id}`}>
                    {/* <div className="ml-2 mt-2">
                    <p className={` ${styles.Titledetail }`}>
                    {scene1 && <span>{scene1}, </span>}
                    {scene2 && <span>{scene2}, </span>}
                    {scene3 && <span>{scene3}, </span>}
                    {scene4 && <span>{scene4}, </span>}
                    {scene5 && <span>{scene5}, </span>}
                    {scene6 && <span>{scene6}, </span>}
                    {scene7 && <span>{scene7}, </span>}
                    {scene8 && <span>{scene8}, </span>}
                    {scene9 && <span>{scene9}, </span>}
                    {scene10 && <span>{scene10}, </span>}
                    {scene11 && <span>{scene11}, </span>}
                    {scene12 && <span>{scene12}, </span>}
                    {xtra_scenes && <span>{xtra_scenes} </span>}
                    </p>                 
                    </div> */}
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
