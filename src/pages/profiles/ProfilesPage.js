import React from 'react';
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
              <Button onClick={() => history.push('/home')}
                  className={`${btnStyles.Button} ${btnStyles.Blue} my-2`}
              >
                  Back
              </Button>
              <Row >
                  <Col className='text-center' >
                    <Button onClick={() => history.push("/feed")} 
                        className={`${btnStyles.Button} ${btnStyles.Wide2} ${btnStyles.Bright}`}
                        >
                        Feed
                    </Button>
                  </Col>
              </Row>
              <PopularProfiles /> 
        </div>
    )
}

export default ProfilesPage
