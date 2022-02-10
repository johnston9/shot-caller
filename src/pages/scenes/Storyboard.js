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
import styles from "../../styles/Scene.module.css";
import btnStyles from "../../styles/Button.module.css";
import appStyles from "../../App.module.css";
import TopBox from '../../components/TopBox';
import Asset from '../../components/Asset';
import NoResults from "../../assets/no-results.png";
import StoryBoardUpload from './StoryBoardUpload';
import { Image } from 'react-bootstrap';

const Storyboard = ({storyboard, setShowstory, scene, setScene} ) => {
    useRedirect("loggedOut");
    const [addStory, setAddStory] = useState(false);
    const [newStory, setNewStory] = useState(storyboard);
    return (
        <div>
            <h5 style={{ textTransform: 'uppercase'}} className={` mt-1 mb-4 pl-3 py-1 ${styles.SubTitle }`}>
                Storyboard
                <span style={{ textTransform: 'none'}} className={`float-right ${styles.Close }`} onClick={() => setShowstory(false) } >Close</span>
            </h5>
            <Row>
              <Col className="text-center">
                    <Button onClick={() => setAddStory(addStory => !addStory)} 
                    className={`${btnStyles.Button} ${btnStyles.Wide2} ${btnStyles.Bright}`}>
                    Add/Update Storyboard
                </Button>
                {!addStory ?("") : (<StoryBoardUpload setShowstory={setShowstory} setScene={setScene} setNewStory={setNewStory} setAddStory={setAddStory} />  ) }
              </Col>
            </Row> 
            <Row className="h-100 my-2">
            <Col className='px-0 mx-0'> 
                <>
                    {storyboard ? (
                        <> 
                        <Image src={newStory} alt="storyboard" height="600"  />
                        </>
                    )
                    : (
                    <Container className={appStyles.Content}>
                        <Asset src={NoResults } message="Add Storyboard" />
                    </Container>
                    )}
                </>
            </Col>
            </Row>            
        </div>
    )
}

export default Storyboard
