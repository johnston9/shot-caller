/* Form component to add cast items from a select 
   dropdown */
import React, { useEffect, useState } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import styles from "../../styles/Callsheets.module.css";
import btnStyles from "../../styles/Button.module.css";
import Alert from "react-bootstrap/Alert";
import { axiosReq } from "../../api/axiosDefaults";
import { useCharactersContext } from "../../contexts/Scene_chars_locs";
import { Dropdown } from "react-bootstrap";
import { toast } from 'react-toastify';
import TalentPageAddCast from "./callsheetSections/TalentPageAddCast";

const AddCast = ({id, setShow, dataDay, dataDate}) => {
    const [errors, setErrors] = useState({});
    const [cast, setCast] = useState({results: [] });
    const characters = useCharactersContext();

    const [postData, setPostData] = useState({
        cast_number: "",
        role: "",
        username: "",
        artist: "",
        pickup_address: "",
        make_up_time: "",
        commute_time: "",
        costume: "",
        contact: "",
        email: "",
        swf: "",
        pickup: "",
        call: "",
        hmw: "",
        on_set: "",
        inst: "",
        diet: "",
    });

    const { 
        cast_number,
        role,
        username,
        artist,
        pickup_address,
        make_up_time,
        commute_time,
        contact,
        email,
        swf,
        costume,
        pickup,
        call,
        hmw,
        on_set,
        inst,
        diet,
    } = postData;

    const setData = (character) => {
      /* Function to set character values automatically
         when a character is selected from the dropdown */
      const role = character.role || "";
      const number = character.number || "" ;
      const username = character.username || "" ;
      const artist = character.actor || "" ;
      const pickup_address = character.pickup_address || "" ;
      const make_up_time = character.make_up_time || "" ;
      const commute_time = character.commute_time || "" ;
      const contact = character.mobile || "" ;
      const email = character.email || "" ;
      const inst = character.requirements || "" ;
      const diet = character.diet || "" ;
    
      setPostData({
        cast_number: number,
        role: role,
        username: username,
        artist: artist,
        pickup_address: pickup_address,
        make_up_time: make_up_time,
        commute_time: commute_time,
        contact: contact,
        email: email,
        inst: inst,
        diet: diet,   
        swf: "",
        pickup: "",
        call: "",
        hmw: "",
        on_set: "",     
      });
    }

    const handleChange = (event) => {
        setPostData({
          ...postData,
          [event.target.name]: event.target.value,
        });
    };

    const clear = () => {
      /* Function to clear Character values */
      setPostData({cast_number: "",
      role: "",
      username: "",
      artist: "",
      pickup_address: "",
      make_up_time: "",
      commute_time: "",
      contact: "",
      email: "",
      swf: "",
      pickup: "",
      call: "",
      hmw: "",
      on_set: "",
      diet: "",
      inst: "",})
    }

    /* function to fetch the Callsheet Cast data already added */
    const handleMount = async () => {
      try {
          const { data } = await axiosReq.get(`/castcallsnew/?day_id=${id}`)
          setCast(data);
          console.log(data);
      } catch (err) {
          console.log(err);
        }
  }

    useEffect(() => {
      handleMount();
      }, [id])

    const handleSubmit = async (event) => {
      event.preventDefault();

      const formData = new FormData();
  
      formData.append("day_id", id);
      formData.append("shoot_day", dataDay);
      formData.append("shoot_date", dataDate);
      formData.append("cast_number", cast_number);
      formData.append("role", role);
      formData.append("username", username);
      formData.append("artist", artist);
      formData.append("contact", contact);
      formData.append("email", email);
      formData.append("costume", costume);
      formData.append("swf", swf);
      formData.append("pickup", pickup);
      formData.append("call", call);
      formData.append("hmw", hmw);
      formData.append("on_set", on_set);
      formData.append("inst", inst);
      formData.append("diet", diet);
    
      try {
        const {data} = await axiosReq.post("/castcallsnew/", formData);
        toast.success(`"${role}" Added to Shoot Day "${dataDay}"`); 
        setPostData({cast_number: "",
                      role: "",
                      username: "",
                      artist: "",
                      pickup_address: "",
                      make_up_time: "",
                      commute_time: "",
                      costume: "",
                      contact: "",
                      email: "",
                      swf: "",
                      pickup: "",
                      call: "",
                      hmw: "",
                      on_set: "",
                      inst: "",});
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
          className={`${btnStyles.Button} ${btnStyles.Blue} px-3 mx-md-5 mr-3`}
          onClick={clear}
        >
          Cancel
        </Button>
        <Button className={`px-3 mx-md-5 ml-3 ${btnStyles.Button} ${btnStyles.Blue}`} type="submit">
          Add Cast
        </Button>
      </div>
    );
    
  return (
    <div>
      <div className={`mt-0 mb-2 text-center ${styles.SubTitle }`}>
      <span className={`float-right pt-1 ${styles.Close }`} onClick={() => setShow(false) } >Close</span> 
      <h5 className={`pl-5 mb-0 text-center py-1 ${styles.Bold }`} >
      ADD CAST</h5>
      </div>            
      <div className={`mb-3 ${styles.White }`}>
      <Form className="text-center" onSubmit={handleSubmit}>
      {/* select */}
      <Row>
      <Col  >
      <div className={`${styles.SelectBoxv } py-0`}>  
      <Row>
      <Col xs={6} md={3} className="px-0 mx-0 mt-2" >
        {/* <DropdownButton id="dropdown-basic-button" variant="info"
        className={`pt-1 pl-2 ${styles.DropButt}`} title="Select">
        {characters.results.length && (
              characters.results.map((character) => (
                <Dropdown.Item onClick={() => setData(character) } 
                key={character.id} >{character.role}</Dropdown.Item>
              ) )) }
        </DropdownButton> */}
        <Dropdown>
        <Dropdown.Toggle variant="info" id="dropdown-basic">
          Select
        </Dropdown.Toggle>
        <Dropdown.Menu className={`pt-1 pl-2 ${styles.DropButt}`}>
        {characters.results.length && (
              characters.results.map((character) => (
                <Dropdown.Item onClick={() => setData(character) } 
                key={character.id} >{character.role}</Dropdown.Item>
              ) )) }
        </Dropdown.Menu>
        </Dropdown>
      </Col>
      <Col xs={6} md={3} className="px-0 mx-0">
      <div className={`mt-4 px-md-5 ${styles.HRGold }`}>
      <p className={``}>
      {role}
      </p>
      </div>
      </Col>
      <Col xs={12} md={6} >
      <p className={`text-center pt-2 mb-0 ${styles.BoldScene }`}>
      SELECTED ROLE INFO
      </p>
      <div className={`text-center mx-2 mt-2 py-1 ${styles.CastEntered }`}>
      {cast_number ? (
        <>
            <p>Actor: {artist}, Makeup: {make_up_time}, 
            Commute: {commute_time}, Contact: {contact}</p>
        </>
      ) : (
        ""
      )}
      </div>
      </Col>
      </Row>
      </div>
      </Col>
      </Row>
      <hr/>
      {/* number swf pickup call hmw on_set */}
      <Row className="mx-0 my-3">
        <Col className="d-flex justify-content-center mx-0 px-1" xs={3}>
            <Form.Group controlId="pickup" className={`${styles.Width2} `}  >
                <Form.Label className={`${styles.BoldScene}`} >Pickup</Form.Label>
                <Form.Control 
                className={`${styles.Input}`} 
                type="text"
                name="pickup"
                value={pickup}
                onChange={handleChange}
                    />
            </Form.Group>
            {errors?.pickup?.map((message, idx) => (
              <Alert variant="warning" key={idx}>
                {message}
              </Alert>
            ))}
        </Col>
        <Col className="d-flex justify-content-center mx-0 px-1" xs={3} >
        <Form.Group controlId="call" className={`${styles.Width2} `}  >
              <Form.Label className={`${styles.BoldScene}`} >Call</Form.Label>
              <Form.Control 
              className={`${styles.Input}`} 
              type="text"
              name="call"
              value={call}
              onChange={handleChange}
                  />
          </Form.Group>
          {errors?.call?.map((message, idx) => (
            <Alert variant="warning" key={idx}>
              {message}
            </Alert>
          ))}
          </Col>
        <Col className="d-flex justify-content-center mx-0 px-1" xs={3}>
        <Form.Group controlId="hmw" className={`${styles.Width2} `}  >
            <Form.Label className={`${styles.BoldScene}`} >H/M/W</Form.Label>
            <Form.Control 
            className={`${styles.Input}`} 
            type="text"
            name="hmw"
            value={hmw}
            onChange={handleChange}
                />
        </Form.Group>
        {errors?.hmw?.map((message, idx) => (
          <Alert variant="warning" key={idx}>
            {message}
          </Alert>
        ))}
        </Col>
        <Col className="d-flex justify-content-center mx-0 px-1" xs={3}>
        <Form.Group controlId="on_set" className={`${styles.Width2} `} >
            <Form.Label className={`${styles.BoldScene}`} >
              <span className="d-none d-sm-block">On Set</span> 
              <span className="d-sm-none">Set</span>
              </Form.Label>
            <Form.Control 
            className={`${styles.Input}`} 
            type="text"
            name="on_set"
            value={on_set}
            onChange={handleChange}
                />
        </Form.Group>
        {errors?.on_set?.map((message, idx) => (
          <Alert variant="warning" key={idx}>
            {message}
          </Alert>
        ))}
        </Col>
      </Row>
      <hr/>
      <Row className="mx-0">
        <Col className="d-flex justify-content-center mx-0 px-1" xs={3} >
          <Form.Group controlId="costume" className={`${styles.Width2 } `}  >
                <Form.Label className={`${styles.BoldScene}`} >Costume</Form.Label>
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
        <Col className="d-flex justify-content-center mx-0 px-1" xs={3}>
            <Form.Group controlId="swf" className={`${styles.Width2} `}  >
                <Form.Label className={`${styles.BoldScene}`} >SWF</Form.Label>
                <Form.Control 
                className={`${styles.Input}`} 
                type="text"
                name="swf"
                value={swf}
                onChange={handleChange}
                    />
            </Form.Group>
            {errors?.swf?.map((message, idx) => (
              <Alert variant="warning" key={idx}>
                {message}
              </Alert>
            ))}
        </Col>
        <Col className="d-flex justify-content-center mx-0 px-1"  xs={6}>
          <Form.Group controlId="inst" className={`${styles.Width95} `}  >
              <Form.Label className={`${styles.BoldScene}`} >Confirm Pickup Address</Form.Label>
              <Form.Control 
              className={`${styles.InputScene}`} 
              type="text"
              name="pickup_address"
              as="textarea"
              rows={1}
              value={pickup_address}
              onChange={handleChange}
                  />
          </Form.Group>
          {errors?.pickup_address?.map((message, idx) => (
            <Alert variant="warning" key={idx}>
              {message}
            </Alert>
          ))}
          </Col>
      </Row>
      <hr/>
      {/* buttons */}
      <Row>
        <Col className="text-center">
        <div className= {`mt-3 `} >{buttons}</div>
        </Col>
      </Row>
      </Form>
      <Row>
        <Col md={2} className="d-none d-md-block"></Col>
        <Col xs={12} md={8}>
        <hr className={`${styles.Break7 }`}/>
        </Col>
      </Row>
      {/* NEW CAST ADDED */}
      <Row >
      <Col xs={12} >
      <p className={`text-center pt-2 mb-0 ${styles.BoldScene }`}>
      CAST ADDED
      </p>
      <p className="text-center d-none d-md-block" style={{fontStyle: 'italic'}}>
        Edit previously added Cast here</p>
      <p className="text-center d-block d-md-none" style={{fontStyle: 'italic'}}>
      Edit previously added Cast here from the Info button</p>
      </Col>
      </Row>
      <TalentPageAddCast
      handleMount={handleMount}
      cast={cast}/>
      <Row>
      <Col md={{span: 8, offset: 2}} >
      <hr className={`${styles.Break} mt-5`}/>
      </Col>
      </Row>
      </div>
    </div>
  )
}

export default AddCast