import React, { useEffect, useState } from "react";
import Container from "react-bootstrap/Container";

import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { axiosReq } from "../../api/axiosDefaults";
import { useRedirect } from "../../hooks/Redirect";
import ScheduleSceneItem from "./ScheduleSceneItem";

const Act1List = ({setPostData, setShowOne, setShowTwoA, setShowTwoB, setShowThree, setShowLoc, list} ) => {
    useRedirect("loggedOut");
    const [scenes, setScenes] = useState({results: [] });
    // const [hasLoaded, setHasLoaded] = useState(false);

    useEffect(() => {
        const fetchScenes = async () => {
          try {
            const { data } = await axiosReq.get(`/scenes/?act=one`);
            setScenes(data);
            // setHasLoaded(true);
          } catch(err) {
            console.log(err);
          }
        }
        fetchScenes();    
      }, [])

    return (
        <div>
          <div className= {`mt-4`} >
            <h5 className="pb-2 text-center">Select scene</h5>
            <Row >
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
          </div>                            
        </div>
    )
}

export default Act1List
