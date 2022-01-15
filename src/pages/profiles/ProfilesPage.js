import React, {  useState } from 'react';
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Container from "react-bootstrap/Container";
import Button from "react-bootstrap/Button";

import { useRedirect } from '../../hooks/Redirect';
import TopBox from '../../components/TopBox';
import PopularProfiles from './PopularProfiles';
import btnStyles from "../../styles/Button.module.css";
import { useHistory } from 'react-router';

const ProfilesPage = () => {
    useRedirect("loggedOut");
    const history = useHistory() ;
    return (
        <div>
            <TopBox title="Profiles" />
            <Container>
              <Button onClick={() => history.push('/home')}
                  className={`${btnStyles.Button} ${btnStyles.Blue} my-2`}
              >
                  Back
              </Button>
              <h3 className='text-center mt-3'>View Profiles</h3>
              <Row className='mt-1'>
                  <Col className='mt-1'>
                    <PopularProfiles /> 
                  </Col>
              </Row>
              <hr/>
              <h3 className='text-center mt-3'>View Posts</h3>
              <Row className='mb-4 mt-3'>
                  <Col className='text-center' xs={4} >
                  <Button onClick={() => history.push("/archived")} 
                    className={`${btnStyles.Button} py-0 ${btnStyles.Bright}`} >Archived Posts</Button>
                  </Col>
                  <Col className='text-center' xs={4} >
                  <Button onClick={() => history.push("/posts")}
                    className={`${btnStyles.Button} py-0 ${btnStyles.Bright}`} >All Posts</Button>
                  </Col>
                  <Col className='text-center' xs={4} >
                  <Button onClick={() => history.push("/liked")} 
                    className={`${btnStyles.Button} py-0 ${btnStyles.Bright}`}>Liked Posts</Button>
                  </Col>
              </Row>
              <Row className='mt-1'>
                  <Col className='text-center' >
                  <Button onClick={() => history.push("/feed")} 
                    className={`${btnStyles.Button} ${btnStyles.Wide2} ${btnStyles.Bright}`}
                    >
                      Feed
                      </Button>
                  </Col>
              </Row>
            </Container>           
        </div>
    )
}

export default ProfilesPage
