/* Component in the StoryBoard Component to
contain and upload the Storyboard URL */
import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
import Asset from '../../../components/Asset';
import appStyles from "../../../App.module.css";
import NoResults from "../../../assets/no-results.png";
import styles from "../../../styles/Scene.module.css";
import btnStyles from "../../../styles/Button.module.css";
import UploadURL from "./UploadURL";

const StoryboardURL = ({setAddURL, id, storyboard_url, number}) => {
  const [newURL, setNewURL] = useState(false);
  // const storyboard_url1 = "https://player.vimeo.com/video/403530213"

  return (
    <div>
    <Row className="mt-2">
    <Col xs={12} className='text-center'>
    <h5 className={`mb-3 py-1 pl-5 ${styles.SubTitle }`}>STORYBOARD URL
    <span className={`float-right ${styles.Close } pt-1`} onClick={() => setAddURL(false) } >Close</span>
    </h5>
    </Col>
    </Row>
    <Row>
    <Col md={{span: 6, offset: 3 }} className="text-center">
    <Button onClick={() => setNewURL(newURL => !newURL)} 
    className={`${btnStyles.Button}  ${btnStyles.Bright}`}>
    Add/Change URL
    </Button>
    {!newURL ?("") : (
            <UploadURL 
            id={id} 
            number1={number}
            storyboard_url1={storyboard_url}
            setNewURL={setNewURL} />  ) }
    </Col>
    </Row>
    {/* video */}
    {storyboard_url ? (
      <div className="mt-3">
      <iframe width="100%" height="550" src={storyboard_url}
      alt="Storyboard URL" title="Storyboard URL"
      frameborder="0" allow="autoplay; encrypted-media" allowfullscreen="">
      </iframe>
      </div>
    ) : (
      <Container className={appStyles.Content}>
          <Asset src={NoResults } message="No Storyboard Added" />
      </Container>
      )}
    <Row>
    <Col xs={2} ></Col>
    <Col xs={8}>
    <hr className={`${styles.Break1}`}/>
    </Col>
    </Row>
    </div>
  )
}

export default StoryboardURL