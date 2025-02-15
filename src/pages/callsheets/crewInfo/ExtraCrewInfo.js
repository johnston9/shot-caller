/* Form component to add extra crew members by department 
   These won't be on the Callsheet*/
   import React, { useEffect, useState } from "react";
   import Form from "react-bootstrap/Form";
   import Button from "react-bootstrap/Button";
   import Row from "react-bootstrap/Row";
   import Col from "react-bootstrap/Col";
   import styles from "../../../styles/Callsheets.module.css";
   import btnStyles from "../../../styles/Button.module.css";
   import ExtraCrewMember from "./ExtraCrewMember"
   import Alert from "react-bootstrap/Alert";
   import { axiosReq } from "../../../api/axiosDefaults";
   import { toast } from 'react-toastify';

const ExtraCrewInfo = (props) => {
    const [errors, setErrors] = useState({});
    const [crew, setCrew] = useState({results: [] });
    const {setShow, dept} = props;
    // const admin = currentUser?.username === "admin" ;
    const admin = true;

    const [postData, setPostData] = useState({
        name: "",
        position: "",
        email: "",
        phone: "",
    });

    const { 
        name,
        position,
        email,
        phone,
    } = postData;

    const handleChange = (event) => {
        setPostData({
          ...postData,
          [event.target.name]: event.target.value,
        });
      };

      const clear = () => {
        /* Function to clear Character values */
        setPostData({
        name: "",
        position: "",
        email: "",
        phone: "",
      })
      }

      /* function to fetch the extra crew */
      const handleMount = async () => {
        try {
            const { data } = await axiosReq.get(`/extracrewinfo/?departments=${dept}`)
            setCrew(data);
            console.log(data);
        } catch (err) {
            console.log(err);
          }
    }

      useEffect(() => {
        handleMount();
        // eslint-disable-next-line
        }, [dept])
    
      const handleSubmit = async (event) => {
        event.preventDefault();
  
        const formData = new FormData();
    
        formData.append("name", name);
        formData.append("position", position);
        formData.append("departments", dept);
        formData.append("email", email);
        formData.append("phone", phone);
      
        try {
          const {data} = await axiosReq.post("/extracrewinfo/", formData);
          console.log(data);
          setPostData({
                      name: "",
                      position: "",
                      departments: "",
                      email: "",
                      phone: "",
                    });
        setCrew((prevCrew) => ({
          ...prevCrew,
          results: [data, ...prevCrew.results],
        }));
        toast.success(`${position} Added to CrewInfo`);
        } catch (err) {
          console.log(err);
          if (err.response?.status !== 401) {
            setErrors(err.response?.data);
          }
        }
      }

      const buttons = (
        <div className="mb-0 pb-3 text-center">    
          <Button
            className={`${btnStyles.Button} ${btnStyles.Blue} px-3 px-md-5 mr-3`}
            onClick={clear}
          >
            Cancel
          </Button>
          <Button className={`px-3 px-md-5 ml-3 ${btnStyles.Button} ${btnStyles.Blue}`} type="submit">
            Submit
          </Button>
        </div>
      );

  return (
    <div className={`${styles.White } mx-md-5`}>
    <div className="d-none d-md-block mt-4">
    <Row>
    <Col>
    <h5 className={`pl-5 py-0 text-center ${styles.SubTitle }`} 
        style={{ textTransform: 'uppercase' }}>
            NON-CALLSHEET/EXTRA {dept} POSITIONS 
            <span className={`pt-1 float-right ${styles.Close }`} 
        onClick={() => setShow(false) } >Close</span>
    </h5>
    </Col>
    </Row>
    {/* <Row>
    <Col>
            <span className={`pt-1 float-right ${styles.Close }`} 
        onClick={() => setShow(false) } >Close</span>
    </Col>
    </Row> */}
    </div>
    <div className="d-block d-md-none mt-3">
    <Row>
    <Col xs={12} >
    <h5 className={`py-0 text-center ${styles.SubTitle }`} 
        style={{ textTransform: 'uppercase' }}>
            EXTRA {dept} 
              </h5>
    </Col>
    </Row>
    <Row>
    <Col>
    <span className={`pt-1 float-right ${styles.Close }`} 
        onClick={() => setShow(false) } >Close</span>
    </Col>
    </Row>
    </div>
      {/* Form */}
      <div >
      <Row>
      <Col>
      <div className="d-flex justify-content-center">
      <p className={`text-center mt-3 ${styles.SubTitle3 }`}>ADD NEW POSITION</p>
      </div>
      </Col>
      </Row>
      <Form className={`text-center`} onSubmit={handleSubmit}>
      <Row className="mx-0 my-3">
          <Col className="d-flex justify-content-center mx-0 px-0" xs={12} sm={6} md={3} >
              <Form.Group controlId="position" className={`${styles.Width2} `}  >
                  <Form.Label className={`${styles.BoldScene}`} >Position</Form.Label>
                  <Form.Control 
                  className={`${styles.Input}`} 
                  type="text"
                  name="position"
                  value={position}
                  onChange={handleChange}
                      />
              </Form.Group>
              {errors?.position?.map((message, idx) => (
                <Alert variant="warning" key={idx}>
                  {message}
                </Alert>
              ))}
          </Col>
          <Col className="d-flex justify-content-center mx-0 px-0" xs={12} sm={6} md={3} >
          <Form.Group controlId="name" className={`${styles.Width2} `}  >
                <Form.Label className={`${styles.BoldScene}`} >Name</Form.Label>
                <Form.Control 
                className={`${styles.Input}`} 
                type="text"
                name="name"
                value={name}
                onChange={handleChange}
                    />
            </Form.Group>
            {errors?.name?.map((message, idx) => (
              <Alert variant="warning" key={idx}>
                {message}
              </Alert>
            ))}
          </Col>
          <Col className=" d-flex justify-content-center mx-0 px-1" xs={12} sm={6} md={3}>
          <Form.Group controlId="phone" className={`${styles.Width2} `}  >
              <Form.Label className={`${styles.BoldScene}`} >Phone</Form.Label>
              <Form.Control 
              className={`${styles.Input}`} 
              type="text"
              name="phone"
              value={phone}
              onChange={handleChange}
                  />
          </Form.Group>
          {errors?.phone?.map((message, idx) => (
            <Alert variant="warning" key={idx}>
              {message}
            </Alert>
          ))}
          </Col>
          <Col className="d-flex justify-content-center mx-0 px-0" xs={12} sm={6} md={3}>
          <Form.Group controlId="email" className={`${styles.Width2} `} >
          <Form.Label className={`${styles.BoldScene}`} >Email</Form.Label>
              <Form.Control 
              className={`${styles.Input}`} 
              type="text"
              name="email"
              value={email}
              onChange={handleChange}
                  />
          </Form.Group>
          {errors?.email?.map((message, idx) => (
            <Alert variant="warning" key={idx}>
              {message}
            </Alert>
          ))}
          </Col>
      </Row>
        {buttons}
      </Form>
      </div>
      {/* <Row>
      <Col md={{span: 8, offset: 2}} >
      <hr/>
      </Col>
      </Row> */}
      {/* crew */}
      <div className="text-center">
      <Row>
      <Col>
      <div className="d-flex justify-content-center">
      </div>
      </Col>
      </Row>
      </div>
      <Row>
      <Col>
      <div className="d-flex justify-content-center">
      <p className={`text-center mt-3 ${styles.SubTitle4 }`}>POSITIONS</p>
      </div>
      </Col>
      </Row>
      <Row className="py-3">
        <Col xs={12}>
          {crew.results.length ? (
              crew.results.map((crewone) => (
              <ExtraCrewMember
              key={crewone.id }
              {...crewone }
              handleMount={handleMount}
              crewone={crewone}
              admin={admin} />
              ))) : ("")}
        </Col>
      </Row>
      {/* Break2 */}
      <Row>
      <Col xs={{span: 8, offset: 2}} >
      <hr className={`${styles.Break2 }`}/>
      </Col>
      </Row>
    </div>
  )
}

export default ExtraCrewInfo