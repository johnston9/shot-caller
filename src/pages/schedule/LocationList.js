import React, { useEffect, useState } from "react";
import Container from "react-bootstrap/Container";
import styles from "../../styles/ScheduleCreate.module.css";
import { axiosReq } from "../../api/axiosDefaults";
import { useRedirect } from "../../hooks/Redirect";
import ScheduleSceneItem from "./ScheduleSceneItem";
import InfiniteScroll from "react-infinite-scroll-component";
import Asset from "../../components/Asset";
import { fetchMoreData } from "../../utils/utils";

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
          <Container className= {`mt-4 text-center ${styles.Scroll }`} >
          <h5 className={`text-center pb-0 mb-2 ${styles.SubTitle }`}>Select Scene</h5>
            <p className="text-center mb-2">
            Select Scene to add Scene details to the Stripboard then 
            add the Shooting Info in the form below
            </p>
            {scenes.results.length ? (
              <InfiniteScroll 
               children={scenes.results.map((scene) => {
                return (
                  <div 
                    className='d-inline-flex justify-content-space-between'>
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
                  </div>
              )})}
              dataLength={scenes.results.length}
              loader={<Asset spinner />}
              hasMore={!!scenes.next}
              next={() => fetchMoreData(scenes, setScenes )}
              />
                ) : ("")}
          </Container>                       
        </div>
    )
}
export default LocationList
