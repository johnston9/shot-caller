import React, { useEffect, useState } from "react";
import Form from "react-bootstrap/Form";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Container from "react-bootstrap/Container";

import appStyles from "../../App.module.css";
import styles from "../../styles/Indexes.module.css";
import { axiosReq } from "../../api/axiosDefaults";
import NoResults from "../../assets/no-results.png";
import btnStyles from "../../styles/Button.module.css";
import { useHistory } from 'react-router-dom';

import Asset from "../../components/Asset";
import { useRedirect } from "../../hooks/Redirect";
import { Button } from "react-bootstrap";
import TopBox from "../../components/TopBox";
import Info from "./Info";
import IndexCardCreate from "./IndexCardCreate"; 
import IndexCards from "./IndexCards"; 


const IndexCardsPage = () => {
    useRedirect("loggedOut");
  const [indexCards, setIndexCards] = useState({ results: [] });
  // eslint-disable-next-line
  const [error, setErrors] = useState({});
  const [showInfo, setShowInfo] = useState(false);
  const [hasLoaded, setHasLoaded] = useState(false);
  const [show, setShow] = useState(false);
  const [show2, setShow2] = useState(false);
  const history = useHistory();
  const filter = "";
  const [query, setQuery] = useState("");
  const [hasOrder, setHasOrder] = useState(false);

  useEffect(() => {
    const fetchCards = async () => {
      try {
        const { data } = await axiosReq.get(`/indexcards/?${filter}&search=${query}`);
        console.log(data)
        setIndexCards(data);
        setHasLoaded(true);
        setHasOrder(false);
      } catch(err) {
        console.log(err);
        if (err.response?.status !== 401) {
          setErrors(err.response?.data);
          setHasLoaded(true);
        }
      }
    }
    setHasLoaded(false);
    const timer = setTimeout(() => {
        fetchCards();
    }, 1000);

    return () => {
      clearTimeout(timer);
    };
  }, [hasOrder, query])

    return (
        <div>
            <TopBox work="Index Cards"
              />
            <Button
                    className={`${btnStyles.Button} ${btnStyles.Blue} py-0 my-2`}
                    onClick={() => history.goBack()}
                >
                    Back
            </Button>
            <Button
              className={`float-right py-0 my-2 ${btnStyles.Order} ${btnStyles.Button}`}
              onClick={() => setShowInfo(showInfo => !showInfo)} >INFO
            </Button>
              {!showInfo ? (
                  ""
                      ) : (
                        <Info  /> 
                        ) } 
            {/* add */}
          <Row className='mt-0'>
            <Col className="text-center">
              <Button onClick={() => setShow(show => !show)} 
                className={`${btnStyles.Button} ${btnStyles.Wide2} 
                ${btnStyles.Bright} `}>
                Add Index Card
              </Button>
            </Col>
          </Row>
          {!show ?("") : (<IndexCardCreate 
            setShow={setShow} 
            setIndexCards={setIndexCards}
            setHasOrder={setHasOrder} /> ) }
          {/* search setShowEdit  */}
              <Row>
              <Col className="py-2 text-center" xs={12} md={{ span: 6, offset: 3 }} >
              <Form
                  className={`${styles.SearchBar} mt-3`}
                  onSubmit={(event) => event.preventDefault()}
                  >
              <Form.Control
                  value={query}
                  onChange={(event) => setQuery(event.target.value)}
                  type="text"
                  className="mr-sm-2"
                  placeholder="Search by Card Number"
              />
              </Form>
              </Col>
              </Row>
              <Row className="py-3">
              <Col>
              {hasLoaded ? (
              <>
                {indexCards.results.length ? (
                  <>
                     <IndexCards 
                     setIndexCards={setIndexCards}
                     setHasOrder={setHasOrder}
                     indexCards={indexCards} />
                     {/* add */}
                    <Row className='mt-3'>
                      <Col className="text-center">
                        <Button onClick={() => setShow2(show2 => !show2)} 
                          className={`${btnStyles.Button}  
                          ${btnStyles.Bright} `}>
                          Add Card
                        </Button>
                      </Col>
                    </Row>
                    {!show2 ?("") : (<IndexCardCreate 
                      setShow2={setShow2} 
                      setIndexCards={setIndexCards}
                      setHasOrder={setHasOrder} /> ) }
                  </>
                     ) 
                : (
                  <Container className={appStyles.Content}>
                    <Asset src={NoResults } message="No Results" />
                  </Container>
                )}
              </>
              ) : (
                <Container className={appStyles.Content}>
                  <Asset spinner />
                </Container>
              )}  
              </Col>
              </Row>
        </div>
    )
}

export default IndexCardsPage