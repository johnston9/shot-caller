import React, { useEffect, useState } from 'react'
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Form from 'react-bootstrap/Form';
import Container from 'react-bootstrap/Container';
import styles from "../../styles/Scene.module.css";
import { axiosReq } from '../../api/axiosDefaults';
// import InfiniteScroll from 'react-infinite-scroll-component';
// import { fetchMoreData } from '../../utils/utils';
import NoResults from "../../assets/no-results.png";
import Asset from "../../components/Asset";
import { useRedirect } from '../../hooks/Redirect';
import appStyles from "../../App.module.css";
import SceneTop from './SceneTop';

const ScenesPage = ({message}) => {
    useRedirect("loggedOut");
    const [scenes, setScenes] = useState({results: [] });
    const [hasLoaded, setHasLoaded] = useState(false);
    const [query, setQuery] = useState("");

    useEffect(() => {
        const fetchScenes = async () => {
          try {
            const { data } = await axiosReq.get(`/scenes/`);
            // const { data } = await axiosReq.get(`/scenes/&search=${query}`);
            setScenes(data);
            setHasLoaded(true);
          } catch(err) {
            console.log(err);
          }
        }
        setHasLoaded(false);
        // const delayFetchScenes = () => {
        //     const timer = setTimeout(() => {fetchScenes();
        //     }, 1000)
        // }
        // {query ? (
        //     const delayFetchScenes = () => {
        //         const timer = setTimeout(() => {fetchScenes();
        //         }, 1000)
        //     }
        // ) : fetchScenes() }

        // const timer = setTimeout(() => {
        //     fetchScenes();
        // }, 1000)

        // return () => {
        //     clearTimeout(timer);
        //   };
        fetchScenes();
    
      }, [])

    return (
        <div>
            <Row>
                <Col className="mt-5" >
                <Form
                    className={styles.SearchBar}
                    onSubmit={(event) => event.preventDefault()}
                    >
                    <Form.Control
                        value={query}
                        onChange={(event) => setQuery(event.target.value)}
                        type="text"
                        className="mr-sm-2"
                        placeholder="Search by scene number or location"
                    />
                    </Form>
                </Col>
            </Row>

            <Row className="h-100">
            {hasLoaded ? (
          <>
            {scenes.results.length ? (
                scenes.results.map((scene) => (
                  <Col xs={4} md={3} lg={2} className="py-2 p-0 p-lg-2">
                  <SceneTop key={scene.id} {...scene} setScenes={setScenes} />
                  </Col>
                ))) 

            //   <InfiniteScroll
            //   children={scenes.results.map((scene) => (
            //     <Col xs={4} md={3} lg={2} className="py-2 p-0 p-lg-2">
            //     <SceneTop key={scene.id} {...scene} setScenes={setScenes} />
            //     {/* <p>{scene.id} {scene.number}</p> */}
            //     </Col>
            //   ))}
            //   dataLength={scenes.results.length}
            //   loader={<Asset spinner />}
            //   hasMore={!!scenes.next}
            //   next={() => fetchMoreData(scenes, setScenes)}
            // />
             : (
              <Container className={appStyles.Content}>
                <Asset src={NoResults } message={message} />
              </Container>
            )}
          </>
        ) : (
          <Container className={appStyles.Content}>
            <Asset spinner />
          </Container>
        )}
            </Row>           
        </div>
    )
}

export default ScenesPage
