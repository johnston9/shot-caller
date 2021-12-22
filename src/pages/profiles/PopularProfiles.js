import React, {  useState } from 'react';
import Container from "react-bootstrap/Container";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Button from "react-bootstrap/Button";
import btnStyles from "../../styles/Button.module.css";
import appStyles from "../../App.module.css";

import Asset from "../../components/Asset";
import Profile from './Profile';
import { useProfileData } from '../../contexts/ProfileDataContext';
import { useRedirect } from '../../hooks/Redirect';

const PopularProfiles = () => {
  useRedirect("loggedOut")
  const [show, setShow] = useState(false);
  const { popularProfiles } = useProfileData();
    return (
        <div>
          <Row>
            <Col className='text-center'>
            <Button onClick={() => setShow(show => !show)} 
              className={`${btnStyles.Button} ${btnStyles.Wide} ${btnStyles.Bright}`}>Profiles</Button>
            </Col>
          </Row>
        <Container 
          className={`mt-5 ${appStyles.Content}`}
         >
            {popularProfiles.results.length ? (
        <>
        {!show ? (
            ""
          ) : (
            popularProfiles.results.map((profile) => (
              <Profile key={profile.id} profile={profile} mobile />
            ))
          )}
      </>
      ) : (
        <Asset spinner />
      )}
        </Container>
        </div>
    )
}

export default PopularProfiles
