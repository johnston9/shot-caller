import React, { useState } from 'react'
import { useRedirect } from '../../hooks/Redirect';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import styles from "../../styles/Scene.module.css";
import btnStyles from "../../styles/Button.module.css";
import appStyles from "../../App.module.css";
import Asset from '../../components/Asset';
import NoResults from "../../assets/no-results.png";
import StoryBoardUpload from './StoryBoardUpload';
import { Image } from 'react-bootstrap';
import ScriptUpload from './ScriptUpload';
import { Link } from 'react-router-dom';

const Script = ({script, setShowScript, setScene} ) => {
    console.log(script);
    useRedirect("loggedOut");
    const [addScript, setAddScript] = useState(false);
    const [newScript, setNewScript] = useState(script);
    return (
        <div>
            <h5 style={{ textTransform: 'uppercase'}} 
            className={` mt-1 mb-4 pl-3 py-1 ${styles.SubTitle }`}>
            Script
                <span style={{ textTransform: 'none'}} 
                className={`float-right ${styles.Close }`} 
                onClick={() => setShowScript(false) } >Close</span>
            </h5>
            <Row>
              <Col className="text-center">
                    <Button onClick={() => setAddScript(addScript => !addScript)} 
                    className={`${btnStyles.Button}  ${btnStyles.Bright}`}>
                    Add/Update Script
                </Button>
                {!addScript ?("") : (<ScriptUpload 
                setShowScript={setShowScript} setScene={setScene}
                 setNewScript={setNewScript} setAddScript={setAddScript} />  ) }
              </Col>
            </Row> 
            <Row className="h-100 my-2">
            <Col xs={12} > 
                <>
                    {script ? (
                        <> 
                        <Image className={styles.Story} src={script} 
                          alt="Script"  />
                          <div className='text-center'>
                          <Link to={{ pathname: script }} target="_blank" >VIEW SCRIPT</Link>
                          </div>
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

export default Script