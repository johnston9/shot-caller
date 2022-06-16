import React, { useEffect, useState } from 'react';
import Form from 'react-bootstrap/Form';
import { axiosReq } from '../../api/axiosDefaults';
import NoResults from "../../assets/no-results.png";
import Asset from "../../components/Asset";
import appStyles from "../../App.module.css";
import TopBox from '../../components/TopBox';
import { useRedirect } from '../../hooks/Redirect';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import styles from "../../styles/DayPage.module.css";
import btnStyles from "../../styles/Button.module.css";
import { useParams, useHistory } from 'react-router-dom';
import Info2 from './Info2';
import IndexShotCreate from './IndexShotCreate';
import IndexShot from './IndexShot';

const IndexShotsPage = () => {
    useRedirect("loggedOut");
    const [indexShots, setIndexShots] = useState({results: [] });
    const [indexShotsAll, setIndexShotsAll] = useState({ results: [] });
    // eslint-disable-next-line
    const [series, setSeries] = useState({ results: [] });
    const [seriesName, setSeriesName] = useState("");
    // eslint-disable-next-line
    const [error, setError] = useState({});
    const { id } = useParams();
    const [hasLoaded, setHasLoaded] = useState(false);
    const [query, setQuery] = useState("");
    const message = "No Results";
    const history = useHistory();
    const [showInfo, setShowInfo] = useState(false);
    const [hasOrder, setHasOrder] = useState(false);
    const [show, setShow] = useState(false);
    const [show2, setShow2] = useState(false);


    useEffect(() => {
          const fetchseries = async () => {
            try {
              const [{ data: seriesGet }, { data: shotsGet }] = await Promise.all([
                axiosReq.get(`/series/${id}`),
                axiosReq.get(`/indexshots/?series_id=${id}&search=${query}`)
              ])
              setSeries({ results: [seriesGet] });
              setIndexShots(shotsGet);
              setIndexShotsAll(shotsGet);
              setSeriesName(seriesGet.name);
              setHasLoaded(true);
              setHasOrder(false);
            } catch(err) {
              setError(err)
              console.log(err);
            }
          }
          setHasLoaded(false);
  
          const timer = setTimeout(() => {fetchseries();
          }, 500)
  
          return () => {
              clearTimeout(timer);
            };
        
      // eslint-disable-next-line
        }, [query, hasOrder])
      
        const handleClickAll = () => { 
          setIndexShots(indexShotsAll);
        };
      
        const handleClick1 = () => { 
          const thirty = indexShotsAll.results.filter(
            shot => shot.number > 0 && shot.number < 31 );
          console.log("thirty");
          console.log(thirty);
          setIndexShots({results: thirty});
          // var thirty = indexCardsAll.filter(function(card) {
          //   return (card.number > 0 && card.number < 31);
          // });
          // console.log("thirty");
          // console.log(thirty);
          // setIndexCards(thirty);
          // var thirty = indexCardsAll.filter(function(card) {
          //   return (card.number > 0 && card.number < 31);
          // });
          // console.log("thirty");
          // console.log(thirty);
          // setIndexCards(thirty);
        };
      
        const handleClick2 = () => { 
          const sixty = indexShotsAll.results.filter(
            shot => shot.number > 30 && shot.number < 61 );
          console.log("sixty");
          console.log(sixty);
          setIndexShots({results: sixty});
        };
      
        const handleClick3 = () => { 
          const ninety = indexShotsAll.results.filter(
            shot => shot.number > 60 && shot.number < 91 );
          console.log("ninety");
          console.log(ninety);
          setIndexShots({results: ninety});
        };
      
        const handleClick4 = () => { 
          const end = indexShotsAll.results.filter(
            shot => shot.number > 90);
          console.log("end");
          console.log(end);
          setIndexShots({results: end});
        };

    return (
        <div >
          <TopBox title={seriesName} />
          <Button
              className={`${btnStyles.Button} ${btnStyles.Blue} mt-2`}
              onClick={() => history.goBack()}
              >
              Back
          </Button>
          <Button
          className={`float-right py-0 mt-1 ${btnStyles.Order} ${btnStyles.Button}`}
          onClick={() => setShowInfo(showInfo => !showInfo)} >INFO
        </Button>
          {!showInfo ? (
              ""
                  ) : (
                    <Info2  /> 
                    ) } 
          {/* Add Index Shot */}
          <Row className='mt-0'>
            <Col className="text-center">
            <Button onClick={() => setShow(show => !show)} 
              className={`${btnStyles.Button} ${btnStyles.Wide2} ${btnStyles.Bright} `}>
              Add Index Shot</Button>
            </Col>
          </Row>
          {!show ?("") : (<IndexShotCreate 
                           seriesName={seriesName}
                           setShow={setShow} 
                           setHasOrder={setHasOrder} /> ) }
          {/* search  */}
          <Row>
            <Col className="mt-3" xs={12} sm={{ span: 6, offset: 3 }} >
            <Form
                className={styles.SearchBar}
                onSubmit={(event) => event.preventDefault()}
                >
                <Form.Control
                    value={query}
                    onChange={(event) => setQuery(event.target.value)}
                    type="text"
                    className="mr-sm-2"
                    placeholder="Search by Number"
                />
                </Form>
            </Col>
          </Row>
          {/* filter */}
          <Row className='mt-1' >
              <Col className='text-center' xs={{span: 6, offset: 3}}>
              <Button
                  className={`py-0 ${btnStyles.Button} ${btnStyles.Blue} px-5`}
                  onClick={() => handleClickAll()} >All Shots
              </Button>
              </Col>
          </Row>
          <Row className='mt-3' >
          <Col className='text-center' xs={6} md={3}>
          <Button
              className={`py-0 ${btnStyles.Button} ${btnStyles.Blue}`}
              onClick={() => handleClick1()} >Shots 1 - 30
          </Button>
          </Col>
          <Col className='text-center' xs={6} md={3}>
            <Button
                className={`py-0 ${btnStyles.Button} ${btnStyles.Blue}`}
                onClick={() => handleClick2()} >Shots 31 - 60
            </Button>
          </Col>
          <Col className='text-center' xs={6} md={3}>
          <Button
              className={`py-0 mt-2 mt-md-0 ${btnStyles.Button} ${btnStyles.Blue}`}
              onClick={handleClick3} >Shots 61 -90
          </Button> 
          </Col>
          <Col className='text-center' xs={6} md={3}>
            <Button
                className={`py-0 mt-2 mt-md-0  ${btnStyles.Button} ${btnStyles.Blue}`}
                onClick={handleClick4} >Shots 91 - end
            </Button>
          </Col>
          </Row>
            <p style={{ textTransform: 'uppercase'}} 
            className={`mt-2 pl-3 mb-0 py-1 ${styles.SubTitle }`}></p>
            {/* series */}
            <Row className="py-2 ">
              {hasLoaded ? (
              <>
                {indexShots.results.length ? (
                    indexShots.results.map((shot) => (
                      <Col xs={12}  md={6} lg={4} className="py-2">
                      <IndexShot 
                      key={shot.id} 
                      setHasOrder={setHasOrder}
                      {...shot} 
                      shot={shot}
                      setIndexShots={setIndexShots} />
                      </Col>
                    ))
                    ) 
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
            {/* add */}
            <Row className='my-3'>
              <Col className="text-center">
                <Button onClick={() => setShow2(show2 => !show2)} 
                  className={`${btnStyles.Button}  
                  ${btnStyles.Bright} `}>
                  Add Card
                </Button>
              </Col>
            </Row>
            {!show2 ?("") : (<IndexShotCreate 
                    seriesName={seriesName}
                    setShow={setShow} 
                    setHasOrder={setHasOrder} /> ) }
        </div>
    )
}

export default IndexShotsPage