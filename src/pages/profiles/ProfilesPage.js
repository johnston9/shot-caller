import React, { useEffect, useState } from 'react';
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Button from "react-bootstrap/Button";

import { useRedirect } from '../../hooks/Redirect';
import TopBox from '../../components/TopBox';
import btnStyles from "../../styles/Button.module.css";
import { useHistory } from 'react-router';
import { Form } from 'react-bootstrap';
import styles from "../../styles/Scene.module.css";
import appStyles from "../../App.module.css";
import Container from "react-bootstrap/Container";
import Asset from '../../components/Asset';
import NoResults from "../../assets/no-results.png";
import Profile from './Profile';
import { useProfileData, useSetQueryContext } from '../../contexts/ProfileDataContext';

const ProfilesPage = () => {
    useRedirect("loggedOut");
    const history = useHistory();
    const { profiles } = useProfileData();

    const setQuery = useSetQueryContext();
 
    const [name, setName] = useState("");
    const handleChange = (event) => {
        setName(event.target.value)
    }

    useEffect(() => {
        const querySet = () => {
            setQuery(name);
        }
        const timer = setTimeout(() => {
            querySet();
        }, 1000);
    
        return () => {
          clearTimeout(timer);
        };
        // eslint-disable-next-line
      }, [name])
    
    return (
        <div>
            <TopBox title="Profiles" />
              <Button onClick={() => history.goBack()}
                  className={`${btnStyles.Button} ${btnStyles.Blue} my-2`}
              >
                  Back
              </Button>
              {/* feed */}
              <Row >
                  <Col className='text-center' >
                    <Button onClick={() => history.push("/feed")} 
                        className={`${btnStyles.Button} ${btnStyles.Wide2} ${btnStyles.Bright}`}
                        >
                        Feed
                    </Button>
                  </Col>
              </Row>
              {/* form */}
              <Row>
                <Col className="text-center" xs={12} md={{ span: 6, offset: 3 }} >
                <Form
                className={`${styles.SearchBar} mt-3`}
                onSubmit={(event) => event.preventDefault()}
                >
                <Form.Control
                    value={name}
                    onChange={(event) => handleChange(event)}
                    // onChange={(event) => setQuery(event.target.value)}
                    type="text"
                    className="mr-sm-2"
                    placeholder="Search by name or position"
                />
                </Form>
                </Col>
              </Row>
              <Container 
                className={`mt-2 ${appStyles.Content}`}
                >
                {/* {hasLoaded ? ( 
                    <> */}
                {profiles.results.length ? (
                    <>
                    {profiles.results.map((profile) => (
                    <Profile key={profile.id} profile={profile}/>
                    ))}
                    </>
                    ) : (
                        <Container className={appStyles.Content}>
                        <Asset src={NoResults } message={"No Results"} />
                        </Container>
                    )
                     }
                </Container>
        </div>
    )
}

export default ProfilesPage
