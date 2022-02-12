import React, { useEffect, useState } from "react";
import Container from "react-bootstrap/Container";

import styles from "../../styles/ScheduleCreate.module.css";
import appStyles from "../../App.module.css";
import { axiosReq } from "../../api/axiosDefaults";
import { useRedirect } from "../../hooks/Redirect";
import ScheduleSceneItem from "./ScheduleSceneItem";

const Act1List = ({setPostData, setShowOne, list} ) => {
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
          <Container className= {`mt-4 ${appStyles.Content} ${styles.Container}`} >
            {scenes.results.length ? (
                scenes.results.map((scene) => (
                    <ScheduleSceneItem setShowOne={setShowOne} list={list} setPostData={setPostData} scene={scene} {...scene} key={scene.id} />
                ))) : ("")}
          </Container>                            
        </div>
    )
}

export default Act1List
