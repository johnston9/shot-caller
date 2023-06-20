/* Form component to add extra crew members by department 
   These won't be on the Callsheet*/
   import React, { useEffect, useState } from "react";
   import Form from "react-bootstrap/Form";
   import Button from "react-bootstrap/Button";
   import Row from "react-bootstrap/Row";
   import Col from "react-bootstrap/Col";
   import styles from "../../../styles/Callsheets.module.css";
   import btnStyles from "../../../styles/Button.module.css";
   import Alert from "react-bootstrap/Alert";
   import { axiosReq } from "../../../api/axiosDefaults";

const ExtraCrewInfo = (props) => {
    const [errors, setErrors] = useState({});
    const [crew, setCrew] = useState({results: [] });
    const {setShow, dept} = props;

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

      useEffect(() => {
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
        handleMount();
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
    <h4 className={`mt-3 pl-3 py-0 text-center ${styles.SubTitleSpan }`} 
        style={{ textTransform: 'uppercase' }}>
            EXTRA {dept} POSITIONS <span className={`pt-1 float-right ${styles.Close }`} 
        onClick={() => setShow(false) } >Close</span>  </h4>
      <h4 className="my-3 text center">These will not be on the Callsheet</h4>
      {/* Form */}
      <p className="my-3 text center">Add Position</p>
      <div className={`mb-3 ${styles.Back3 }`}>
      <Form className="text-center" onSubmit={handleSubmit}>
      {/* position  */}
      <Row className="mx-0 my-3">
          <Col className="d-flex justify-content-center mx-0 px-1" xs={6} md={3} >
              <Form.Group controlId="position" className={`${styles.Width2} `}  >
                  <Form.Label className={`${styles.Bold}`} >Position</Form.Label>
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
          <Col className="d-flex justify-content-center mx-0 px-1" xs={6} md={3} >
          <Form.Group controlId="name" className={`${styles.Width2} `}  >
                <Form.Label className={`${styles.Bold}`} >Name</Form.Label>
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
          <Col className=" d-flex justify-content-centermx-0 px-1" xs={6} md={3}>
          <Form.Group controlId="phone" className={`${styles.Width2} `}  >
              <Form.Label className={`${styles.Bold}`} >Phone</Form.Label>
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
          <Col className="d-flex justify-content-center mx-0 px-1" xs={6} md={3}>
          <Form.Group controlId="email" className={`${styles.Width2} `} >
          <Form.Label className={`${styles.Bold}`} >Email</Form.Label>
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
      {/* crew */}
      {/* CAST ADDED */}
      <Row className="py-2">
        <Col xs={12}>
          {crew.results.length ? (
              crew.results.map((cr) => (
                <Row key={cr.id} className='text-center' >
                <Col xs={6} md={3} >
                  <p className={`${styles.CrewInfoP} `}>{cr.position}</p>
                </Col>
                <Col xs={6} md={3} >
                  <p className={`${styles.CrewInfop} `}>{cr.name} </p>
                </Col>
                <Col xs={6} md={3} >
                <p className={`${styles.CrewInfop} `}>{cr.phone}</p>
                </Col>
                <Col xs={6} md={3} >
                  <p className={`${styles.CrewInfop} `}>{cr.email}</p>
                </Col>
              </Row>
              ))) : ("")}
        </Col>
        </Row>
    </div>
  )
}

export default ExtraCrewInfo