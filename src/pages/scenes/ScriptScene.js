// Scene Script page
import React, { useEffect, useState } from 'react'
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
import ScriptUpload from './ScriptSceneUpload';
import { Link, useHistory, useParams } from 'react-router-dom';
import { axiosReq } from '../../api/axiosDefaults';
import InfoScriptScene from './info/InfoScriptScene';

const Script = () => {
    useRedirect("loggedOut");
    const admin = true;
    const history = useHistory();
    const { id } = useParams();
    const [addScript, setAddScript] = useState(false);
    const [showInfo, setShowInfo] = useState(false);
    const [scriptData, setScriptData] = useState({
        script: "",
        number: "",
    })
    const { script, number } = scriptData;
    const [fileName, setFileName] = useState("");
    const [hasLoaded, setHasLoaded] = useState(false);
    const getFilename = (path) => {
        const paths = path.split("/");
        const name = paths.length - 1;
        return paths[name];
     };

    useEffect(() => {
        const handleMount = async () => {
          try {
            const { data } = await axiosReq.get(`/scenes/${id}/`);
            const { script, number } = data;
            setScriptData({ script, number });
            if (script) {
              const file = getFilename(data.script);       
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
        <div>
            { hasLoaded ? (
                <>
            <Row className='my-1'>
            <Col xs={4}>
            <Button
              className={`${btnStyles.Button} ${btnStyles.Blue}`}
              onClick={() => history.goBack()}
              >
              Back
            </Button>
            </Col>
            {admin && (
              <>
              <Col className="text-center" xs={4} >
              <Button onClick={() => setAddScript(addScript => !addScript)} 
                  className={`${btnStyles.Button}  ${btnStyles.Bright}`}>
                  Add Script
              </Button>
            </Col>
            <Col xs={4}>
            <Button
            className={`float-right py-0 mt-1 ${btnStyles.Order} ${btnStyles.Button}`}
            onClick={() => setShowInfo(showInfo => !showInfo)} >INFO
            </Button>
            </Col>
            </>
            ) }
            </Row> 
            {!showInfo ? (
                ""
                    ) : (
                      <InfoScriptScene  /> 
                      ) } 
            <Row>
            <Col className='text-center'>
            {!addScript ?("") : (
                <ScriptUpload 
                 id={id}
                 script1= {script}
                 number1={number}
                 fileName1={fileName}
                 setAddScript={setAddScript} />  ) }
            </Col>
            </Row>
            <Row >
            <Col xs={12} > 
                <>
                    {script ? (
                        <> 
                        <Row>
                        <Col>
                        <div className={`${styles.Frame} mt-2`}>
                        <iframe title="Script" src={script} className={appStyles.iframeFull}
                          alt="Script"  />
                        </div>
                        </Col>
                        </Row>
                          <div className='text-center'>
                          <Link to={{ pathname: script }} target="_blank" >VIEW SCRIPT</Link>
                          </div>
                        </>
                    )
                    : (
                    <Container className={appStyles.Content}>
                        <Asset src={NoResults } message="No scene script added. Please go to
                        the Script page to view the entire script." />
                    </Container>
                    )}
                </>
            </Col>
            </Row>  
                </>
            ) : (
                <Container className={appStyles.Content}>
            <Asset spinner />
          </Container>
            )
            }          
        </div>
    )
}

export default Script