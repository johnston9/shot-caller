import React, {  useState } from 'react';
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Container from "react-bootstrap/Container";
import Button from "react-bootstrap/Button";

import { useRedirect } from '../../hooks/Redirect';
import TopBox from '../../components/TopBox';
import PopularProfiles from './PopularProfiles';
import btnStyles from "../../styles/Button.module.css";
import { useHistory } from 'react-router-dom/cjs/react-router-dom.min';

// import appStyles from "../../App.module.css";

// import Asset from "../../components/Asset";
// import Profile from './Profile';
// import { useProfileData } from '../../contexts/ProfileDataContext';

const ProfilesPage = () => {
    useRedirect("loggedOut");
    const history = useHistory();
    return (
        <div>
            <TopBox title="Profiles" />
            <Container>
                <Row className='d-flex justify-content-between mt-4'>
                    <Col md={4} >
                    <Button onClick={() => history.push("/feed")} >Feed</Button>
                    </Col>
                    <Col md={4} >
                    <Button onClick={() => history.push("/archived")} >Archived Posts</Button>
                    </Col>
                    <Col md={4} >
                    <Button onClick={() => history.push("/posts")} >Liked Posts</Button>
                    </Col>
                </Row>
                <Row>
                    <Col className='mt-1' >
                      <PopularProfiles /> 
                    </Col>
                </Row>
            </Container>           
        </div>
    )
}

export default ProfilesPage
