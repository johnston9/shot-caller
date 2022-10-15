import React, { useEffect, useState } from "react";
import Container from "react-bootstrap/Container";
import styles from "../../styles/ScheduleCreate.module.css";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { axiosReq } from "../../api/axiosDefaults";
import { useRedirect } from "../../hooks/Redirect";
import ScheduleSceneItem from "./ScheduleSceneItem";

const LocationList = ({setPostData, setShowOne, setShowTwoA, setShowTwoB, setShowThree, setShowLoc, list} ) => {
    useRedirect("loggedOut");
    const [scenes, setScenes] = useState({results: [] });
    useEffect(() => {
        const fetchScenes = async () => {
          try {
            const { data } = await axiosReq.get(`/scenes/?ordering=location`);
            setScenes(data);
          } catch(err) {
            console.log(err);
          }
        }
        fetchScenes();    
      }, [])
    return (
        <div>    
          <Container className= {`mt-4`} >
          <h5 className={`text-center pb-0 mb-2 ${styles.SubTitle }`}>Select Scene</h5>
            <p className="text-center mb-2">
            Select Scene to add Scene details to the Stripboard then 
            add the Shooting Info in the form below
            </p>
            <Row>
            {scenes.results.length ? (
                scenes.results.map((scene) => (
                  <Col xs={12} md={6}>
                    <ScheduleSceneItem 
                      setShowOne={setShowOne} 
                      setShowTwoA={setShowTwoA}
                      setShowTwoB={setShowTwoB}
                      setShowThree={setShowThree}
                      setShowLoc={setShowLoc} 
                      list={list} 
                      setPostData={setPostData} 
                      scene={scene} 
                      {...scene} 
                      key={scene.id} />
                  </Col>
                ))) : ("")}
            </Row>
          </Container>                       
        </div>
    )
}
export default LocationList
