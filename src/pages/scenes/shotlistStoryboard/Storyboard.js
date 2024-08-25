/* Component in the Scene Component to fetch 
   the StoryBoard page for a Scene  */
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
import StoryInfo from './StoryInfo';
import Templates from './Templates';
import StoryboardURL from './StoryboardURL';

const Storyboard = ({storyboard, setShowstory, setScene} ) => {
    const [showInfo, setShowInfo] = useState(false);
    const [addStory, setAddStory] = useState(false);
    const [addURL, setAddURL] = useState(false);
    const [templates, setTemplates] = useState(false);
    const [newStory, setNewStory] = useState(storyboard);
    return (
        <div className='mb-5'>
            <Row >
            <Col xs={12} className='text-center'>
            <h5 className={` mt-1 mb-4 pl-5 py-2 ${styles.SubTitle }`}>
                STORYBOARD PAGE<span className={`float-right ${styles.Close } pt-1`} 
                onClick={() => setShowstory(false) } >Close</span>
            </h5>
            </Col>
            </Row>
            <Row>
            <Col md={{span: 3, order: 1}} xs={{span: 6, order: 1}}
            className="text-center">
            <Button onClick={() => setTemplates(templates => !templates)} 
            className={`${btnStyles.Button}  ${btnStyles.Bright}`}>
            Templates
            </Button>
            </Col>
            <Col md={{span: 3, order: 2}} xs={{span: 6, order: 3}}
            className="text-center">
            <Button onClick={() => setAddStory(addStory => !addStory)} 
            className={`${btnStyles.Button}  ${btnStyles.Bright}`}>
            Add Storyboard
            </Button>
            </Col>
            <Col md={{span: 3, order: 3}} xs={{span: 6, order: 4}}
            className="text-center">
            <Button onClick={() => setAddURL(addURL => !addURL)} 
            className={`${btnStyles.Button}  ${btnStyles.Bright}`}>
            Storyboard URL
            </Button>
            </Col>
            <Col md={{span: 3, order: 4}} xs={{span: 6, order: 2}} 
            className="text-center">
            <Button
            className={`py-0 mt-1 ${btnStyles.Order} ${btnStyles.Button}`}
            onClick={() => setShowInfo(showInfo => !showInfo)} >INFO
            </Button>
            </Col>
            </Row>
            {!showInfo ? (
                ""
                    ) : (
                      <StoryInfo  /> 
                      ) } 
            {!addStory ?("") : (
            <StoryBoardUpload 
            setScene={setScene} 
            setNewStory={setNewStory} 
            setAddStory={setAddStory} />  ) }
            {!templates ? (
                ""
                    ) : (
                      <Templates
                      setTemplates={setTemplates}
                      /> 
                      ) } 
            {!addURL ? (
                ""
                    ) : (
                      <StoryboardURL
                      setAddURL={setAddURL}
                      setScene={setScene}
                      /> 
                      ) } 
            <Row className="h-100 my-2">
            <Col xs={12} className='text-center'> 
            <h5 className={`mb-2 py-1 ${styles.SubTitle }`}>
             STORYBOARD</h5>
                <>
                    {newStory ? (
                        <div className={`${styles.Frame} mt-2`}>
                        <iframe title="Storyboard" src={newStory} 
                         className={appStyles.iframeFull} alt="Storyboard"  />
                        </div>
                    )
                    : (
                    <Container className={appStyles.Content}>
                        <Asset src={NoResults } message="No Storyboard Added" />
                    </Container>
                    )}
                </>
            </Col>
            </Row>            
        </div>
    )
}

export default Storyboard
