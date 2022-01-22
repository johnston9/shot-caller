import React, { useEffect, useState } from 'react'
import { useHistory, useParams } from 'react-router';
import { axiosReq } from '../../api/axiosDefaults';
import { useCurrentUser } from '../../contexts/CurrentUserContext';
import { useRedirect } from '../../hooks/Redirect';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import btnStyles from "../../styles/Button.module.css";
import TopBox from '../../components/TopBox';
import Location from "./Location";

const LocationPage = () => {
    useRedirect("loggedOut");
    const { id } = useParams();
    const [location, setLocation] = useState({ results: [] });
    const currentUser = useCurrentUser();
    const history = useHistory();

    useEffect(() => {
        const handleMount = async () => {
            try {
                const { data } = await axiosReq(`/locations/${id}`);
                setLocation({ results: [data] });
            } catch (err) {
                console.log(err);
              }
        }
        handleMount();
    }, [id])
    return (
        <div>
            <TopBox title="Location"/>
            <Row className="h-100">
                <Col className="mt-4">
                <Button
                    className={`${btnStyles.Button} ${btnStyles.Blue} mb-2`}
                    onClick={() => history.goBack()}
                >
                    Back
                </Button>
                <Location {...location.results[0]}
                  />
                </Col>
            </Row>   
        </div>
    )
}

export default LocationPage