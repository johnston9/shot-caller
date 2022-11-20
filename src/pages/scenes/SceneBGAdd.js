import React, { useEffect, useState } from "react";

import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import styles from "../../styles/Callsheets.module.css";
import btnStyles from "../../styles/Button.module.css";
import Alert from "react-bootstrap/Alert";
import DropdownButton from 'react-bootstrap/DropdownButton'
import { axiosReq } from "../../api/axiosDefaults";
import { useRedirect } from "../../hooks/Redirect";
import { useCharactersContext } from "../../contexts/Scene_chars_locs";
import { Dropdown } from "react-bootstrap";

const SceneBGAdd = ({id}) => {
    useRedirect("loggedOut");
    console.log(id)
    const [errors, setErrors] = useState({});
    const [cast, setCast] = useState({results: [] });
    const characters = useCharactersContext();

    const [postData, setPostData] = useState({
        cast_number: "",
        role: "",
        costume: "",
    });

    const { 
        cast_number,
        role,
        costume,
    } = postData;

    const setData = (character) => {
      const role = character.role || "";
      const number = character.number || "" ;
    
      setPostData({
        cast_number: number,
        role: role,  
      });
    }

    const handleChange = (event) => {
        setPostData({
          ...postData,
          [event.target.name]: event.target.value,
        });
      };

    const clear = () => {
    setPostData({
    cast_number: "",
    role: "",
    costume: ""
        })
        }

    useEffect(() => {
      const handleMount = async () => {
          try {
              const { data } = await axiosReq.get(`/scenecharacters/?scene_id=${id}`)
              setCast(data);
              console.log(data);
          } catch (err) {
              console.log(err);
            }
      }
      handleMount();
      }, [id])

    const handleSubmit = async (event) => {
      event.preventDefault();

      const formData = new FormData();
  
      formData.append("scene_id", id);
      formData.append("cast_number", cast_number);
      formData.append("role", role);
      formData.append("costume", costume);
    
      try {
        const {data} = await axiosReq.post("/scenecharacters/", formData);
        console.log(data);
        setPostData({cast_number: "",
                      role: "",
                      costume: "",
                    });
        setCast((prevCast) => ({
          ...prevCast,
          results: [data, ...prevCast.results],
        }));
      } catch (err) {
        console.log(err);
        if (err.response?.status !== 401) {
          setErrors(err.response?.data);
        }
      }
    }
    const buttons = (
      <div className="mb-2 text-center">    
        <Button
          className={`${btnStyles.Button} ${btnStyles.Blue} px-5 mr-4`}
          onClick={clear}
        >
          Cancel
        </Button>
        <Button className={`px-5 ml-4 ${btnStyles.Button} ${btnStyles.Blue}`} type="submit">
          Add Cast
        </Button>
      </div>
    );
    
  return (
    <div className={`my-3 `}>
      <h5 className={`text-center mb-0 py-0 ${styles.SubTitle }`} >ADD SCENE CHARACTER</h5> 
      <div className={`mb-3 ${styles.Back3 }`}>
        {/* <p className="text-center">ADD CAST</p> */}
      <Form className="text-center" onSubmit={handleSubmit}>
      {/* Dropdown DropButt */}
        <Row className="py-2">
        <Col xs={12} md={6}>
        <p className={`text-center ml-md-2 pt-2 mb-0 ${styles.Bold }`}>
        CAST ADDED
        </p>
        <div className={`ml-md-2 px-1 py-1 ${styles.CastEntered }`} >
          {cast.results.length ? (
              cast.results.map((ca) => (
                <span key={ca.id}>{ca.role}, </span>
              ))) : ("")}
          </div>
          </Col>
          <Col xs={12} md={6}>
          <p className={`text-center ml-md-2 pt-2 mb-0 ${styles.Bold }`}>
          SELECT ROLE
        </p>
          <DropdownButton id="dropdown-basic-button" 
          className={`pt-1 pl-2 ${styles.DropButt}`} title="Select">
          {characters.results.length && (
                characters.results.map((character) => (
                  <Dropdown.Item onClick={() => setData(character) } 
                  key={character.id} >{character.role}</Dropdown.Item>
                ) )) }
          </DropdownButton>
          </Col>
        </Row>
        {cast_number ? (
          <>
          <Row className="my-2">
            <Col xs={7} >
            <div className={`text-center mx-2 mt-2 py-1 ${styles.SubTitle }`}>
            <p >
            <span className="ml-2"> {cast_number}</span> - 
              <span className="mr-2">{role} </span>
            </p>
            </div>
            </Col>
            <Col className="d-flex justify-content-center mx-0 px-1" xs={5} >
            <Form.Group controlId="costume" className={`${styles.Width2} `}  >
                  <Form.Label className={`${styles.Bold}`} >Costume</Form.Label>
                  <Form.Control 
                  className={`${styles.Input}`} 
                  type="text"
                  name="costume"
                  value={costume}
                  onChange={handleChange}
                      />
              </Form.Group>
              {errors?.costume?.map((message, idx) => (
                <Alert variant="warning" key={idx}>
                  {message}
                </Alert>
              ))}
              </Col>
          </Row>
          </>
        ) : (
          <p className={`text-center mb-0 py-1 ${styles.SubTitle }`}></p>
        )}
        {/* buttons */}
        <Row>
          <Col className="text-center">
          <div className= {`mt-3 `} >{buttons}</div>
          </Col>
        </Row>
        </Form>
        </div>
    </div>
  )
}

export default SceneBGAdd