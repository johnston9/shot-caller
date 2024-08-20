/* Component in the Scene Component to fetch 
   the StoryBoard for a Scene
 * Contains the StoryBoardUpload component  */
import React, { useState } from 'react'
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import styles from "../../../styles/Scene.module.css";
import btnStyles from "../../../styles/Button.module.css";
import appStyles from "../../../App.module.css";
import Asset from '../../../components/Asset';
import NoResults from "../../../assets/no-results.png";
import StoryBoardUpload from './StoryBoardUpload';
import { Image } from 'react-bootstrap';

const Storyboard = ({storyboard, setShowstory, setScene} ) => {
    const [addStory, setAddStory] = useState(false);
    const [newStory, setNewStory] = useState(storyboard);
    return (
        <div className='mb-5'>
            <Row>
            <Col xs={12} className='text-center'>
            <h5 className={` mt-1 mb-4 pl-5 py-2 ${styles.SubTitle }`}>
                STORYBOARD<span className={`float-right ${styles.Close } pt-1`} 
                onClick={() => setShowstory(false) } >Close</span>
            </h5>
            </Col>
            </Row>
            <Row>
              <Col className="text-center">
                    <Button onClick={() => setAddStory(addStory => !addStory)} 
                    className={`${btnStyles.Button}  ${btnStyles.Bright}`}>
                    Add/Change Storyboard
                </Button>
                {!addStory ?("") : (
                <StoryBoardUpload 
                setScene={setScene} 
                setNewStory={setNewStory} 
                setAddStory={setAddStory} />  ) }
              </Col>
            </Row> 
            <Row className="h-100 my-2">
            <Col xs={12} > 
                <>
                    {newStory ? (
                        <> 
                        <Image className={styles.Story} src={newStory} alt="storyboard"  />
                        </>
                    )
                    : (
                    <Container className={appStyles.Content}>
                        <Asset src={NoResults } message="No results" />
                    </Container>
                    )}
                </>
            </Col>
            </Row>            
        </div>
    )
}

export default Storyboard
