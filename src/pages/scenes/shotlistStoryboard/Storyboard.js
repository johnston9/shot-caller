/* Component in the Scene Component to fetch 
   the StoryBoard page for a Scene  */
import React, { useEffect, useState } from 'react'
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import styles from "../../../styles/Scene.module.css";
import btnStyles from "../../../styles/Button.module.css";
import appStyles from "../../../App.module.css";
import { useHistory, useParams } from 'react-router-dom';
import Asset from '../../../components/Asset';
import NoResults from "../../../assets/no-results.png";
import StoryBoardUpload from './StoryBoardUpload';
import StoryInfo from './StoryInfo';
import Templates from './Templates';
import StoryboardURL from './StoryboardURL';
import { axiosReq } from '../../../api/axiosDefaults';

const Storyboard = () => {
    const [showInfo, setShowInfo] = useState(false);
    const [addStory, setAddStory] = useState(false);
    const [addURL, setAddURL] = useState(false);
    const [templates, setTemplates] = useState(false);
    // eslint-disable-next-line
    const [hasLoaded, setHasLoaded] = useState(false);

    const history = useHistory();
    const { id } = useParams();

    const [postData, setPostData] = useState({
        storyboard: "",
        number: "",
    })
    const {storyboard, number} = postData;
    const [fileName, setFileName] = useState("");

    const getFilename = (path) => {
        const paths = path.split("/");
        const name = paths.length - 1;
        return paths[name];
    };

    useEffect(() => {
        const handleMount = async () => {
          try {
            const { data } = await axiosReq.get(`/scenes/${id}/`);
            const { storyboard, number } = data;
            setPostData({ storyboard, number });
            if (storyboard) {
              const file = getFilename(data.storyboard);       
              setFileName(file);
            }
            setHasLoaded(true);
          } catch (err) {
            console.log(err);
          }
        };
    
        handleMount();
      }, [id]);

    return (
        <div className='mb-5'>
            <Row >
            <Col xs={12} className='text-center'>
            <h5 className={` mt-1 mb-4 py-1 ${styles.SubTitle }`}>
                STORYBOARD PAGE
            </h5>
            </Col>
            </Row>
            <Row>
            <Col xs={4}>
            <Button
              className={`${btnStyles.Button} ${btnStyles.Blue}`}
              onClick={() => history.goBack()}
              >
              Back
            </Button>
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
            setAddStory={setAddStory}
            id={id}
            storyboard1= {storyboard}
            number1={number}
            fileName1={fileName} />  ) }
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
                      /> 
                      ) } 
            <Row className="h-100 my-2">
            <Col xs={12} className='text-center'> 
            <h5 className={`mb-2 py-1 ${styles.SubTitle }`}>
             STORYBOARD</h5>
                <>
                    {storyboard ? (
                        <div className={`${styles.Frame} mt-2`}>
                        <iframe title="Storyboard" src={storyboard} 
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
            </Row> <Row>
        <Col xs={2} ></Col>
        <Col xs={8}>
        <hr className={`${styles.Break1}`}/>
        </Col>
        </Row>         
        </div>
    )
}

export default Storyboard
