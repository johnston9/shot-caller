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
import ScriptUpload from './ScriptUpload';
import { Link, useHistory, useParams } from 'react-router-dom';
import TopBox from '../../components/TopBox';
import { axiosReq } from '../../api/axiosDefaults';

const Script = () => {
    useRedirect("loggedOut");
    const history = useHistory();
    const { id } = useParams();
    const [addScript, setAddScript] = useState(false);
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
            const file = getFilename(data.script);       
            setFileName(file);
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
                {/* <TopBox title={`Script Scene ${number}`} /> */}
                {/* <h5 className={`text-center mt-1 mb-4 pl-3 py-1 ${styles.SubTitle }`}>
                {fileName}
            </h5> */}
            <Row className='my-1'>
            <Col xs={6}>
            <Button
              className={`${btnStyles.Button} ${btnStyles.Blue}`}
              onClick={() => history.goBack()}
              >
              Back
          </Button>
            </Col>
              <Col className="text-center" xs={6} >
                <Button onClick={() => setAddScript(addScript => !addScript)} 
                    className={`${btnStyles.Button}  ${btnStyles.Bright} float-right `}>
                    Add Script
                </Button>
              </Col>
            </Row> 
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
                        <Asset src={NoResults } message="No scene script added" />
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