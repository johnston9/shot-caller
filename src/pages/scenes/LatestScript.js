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
import { Link, useHistory } from 'react-router-dom';
import { axiosReq } from '../../api/axiosDefaults';
import InfoLatestScript from './InfoLatestScript';
import LatestScriptUpload from './LatestScriptUpload';
import LatestScriptAdd from './LatestScriptAdd';

const LatestScript = () => {
    useRedirect("loggedOut");
    const admin = true;
    const history = useHistory();
    const [addScript, setAddScript] = useState(false);
    const [editScript, setEditScript] = useState(false);
    const [showScriptInfo, setShowScriptInfo] = useState(false);
    const [scriptData, setScriptData] = useState({ results: [] })
    const script = scriptData.results[0];
    const id = scriptData.results[0]?.id;
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
            const { data } = await axiosReq.get(`/script/`);
            console.log(data);
            setScriptData(data);
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
      }, [script]);


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
            {admin ? (
              <>
              {script ? (
              <>
              <Col className="text-center" xs={4} >
              <Button onClick={() => setEditScript(editScript => !editScript)} 
                  className={`${btnStyles.Button}  ${btnStyles.Bright}`}>
                  Add Latest Script
              </Button>
            </Col>
            <Col xs={4}>
            <Button
            className={`float-right py-0 mt-1 ${btnStyles.Order} ${btnStyles.Button}`}
            onClick={() => setShowScriptInfo(showScriptInfo => !showScriptInfo)} >INFO
            </Button>
            </Col>
              </>              
              ) : (
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
            onClick={() => setShowScriptInfo(showScriptInfo => !showScriptInfo)} >INFO
            </Button>
            </Col>
              </>
              )}
            </>
            )  : ("")}
            </Row> 
            {!showScriptInfo ? (
                ""
                    ) : (
                      <InfoLatestScript  /> 
                      ) } 
            <Row>
            <Col className='text-center'>
            {!addScript ?("") : (
                <LatestScriptAdd
                 setAddScript={setAddScript} />  ) }
            {!editScript ?("") : (
                <LatestScriptUpload 
                 id={id}
                 script1= {script}
                 fileName1={fileName}
                 setEditScript={setEditScript} />  ) }
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
                        <Asset src={NoResults } message="No Results" />
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

export default LatestScript