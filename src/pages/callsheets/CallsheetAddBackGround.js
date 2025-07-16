/* Form component to add background items */
import React, { useEffect, useState } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import styles from "../../styles/Callsheets.module.css";
import btnStyles from "../../styles/Button.module.css";
import Alert from "react-bootstrap/Alert";
import { toast } from 'react-toastify';

import { axiosReq } from "../../api/axiosDefaults";
import BgPageAddBG from "./callsheetSections/BgPageAddBG";

const AddBackGround = ({id, setShow, dataDay, dataDate}) => {
    console.log(id)
    const [errors, setErrors] = useState({});
    const [background, setBackground] = useState({results: [] });

    const [postData, setPostData] = useState({
        qty: "",
        type: "",
        call: "",
        scenes: "",
        set: "",
        costumes: "",
    });

    const { qty, type, call, scenes, set, costumes } = postData;

    const handleChange = (event) => {
        setPostData({
        ...postData,
        [event.target.name]: event.target.value,
        });
    };

    const clear = () => {
        setPostData({qty: "",
                    type: "",
                    scenes: "",
                    costumes: "",
                    call: "",
                    set: "",})
    }

    const handleMount = async () => {
        try {
            const { data } = await axiosReq.get(`/backgroundcallsnew/?day_id=${id}`)
            setBackground(data);
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
    formData.append("qty", qty);
    formData.append("type", type);
    formData.append("call", call);
    formData.append("scenes", scenes);
    formData.append("set", set);
    formData.append("costumes", costumes);
    
    try {
        const { data } = await axiosReq.post("/backgroundcallsnew/", formData);
        toast.success(`"${qty} ${type}" Added to Shoot Day "${dataDay}"`); 
        setPostData({qty: "",
                    type: "",
                    scenes: "",
                    costumes: "",
                    call: "",
                    set: "",});
        setBackground((prevBack) => ({
          ...prevBack,
          results: [data, ...prevBack.results],
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
        className={`${btnStyles.Button} ${btnStyles.Blue} px-4 px-md-5 mr-3`}
        onClick={clear}
        >
        Cancel
        </Button>
        <Button className={`px-3 px-md-5 ml-3 ${btnStyles.Button} ${btnStyles.Blue}`} type="submit">
        Add BG
        </Button>
    </div>
    );

    return (
    <div className={`my-3 `}>
        <div className={`mt-0 mb-2 text-center ${styles.SubTitle }`}>
      <span className={`float-right pt-2 ${styles.Close }`} onClick={() => setShow(false) } >Close</span> 
      <h5 className={`d-block d-md-none pl-5 mb-0 text-center py-1 ${styles.Bold }`} >
      ADD BG/STANDINS</h5>
      <h5 className={`d-none d-md-block pl-5 mb-0 text-center py-1 ${styles.Bold }`} >
      ADD BACKGROUND/STANDINS</h5>
      </div>
    <div className={`mb-3 ${styles.White }`}>
    <Form className="text-center" onSubmit={handleSubmit}>
            {/* qty call set scenes*/}
        <Row className="mx-0 mt-3">
            <Col className="d-flex justify-content-center mx-0" xs={3}>
            <Form.Group controlId="qty" className={`${styles.Width} `}  >
                <Form.Label className={`${styles.BoldScene}`} >Qty</Form.Label>
                <Form.Control
                className={`${styles.Input}`} 
                type="text"
                name="qty"
                value={qty}
                onChange={handleChange}
                    />
            </Form.Group>
            {errors?.qty?.map((message, idx) => (
            <Alert variant="warning" key={idx}>
                {message}
            </Alert>
            ))}
            </Col>
            <Col className="d-flex justify-content-center mx-0 px-1"  xs={3}>
            <Form.Group controlId="call" className={`${styles.Width} `}  >
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
            <Col className="d-flex justify-content-center mx-0 px-1"  xs={3}>
            <Form.Group controlId="set" className={`${styles.Width} `}  >
                <Form.Label className={`${styles.BoldScene}`} >Set</Form.Label>
                <Form.Control 
                className={`${styles.Input}`} 
                type="text"
                name="set"
                value={set}
                onChange={handleChange}
                    />
            </Form.Group>
            {errors?.set?.map((message, idx) => (
            <Alert variant="warning" key={idx}>
                {message}
            </Alert>
            ))}
            </Col>
            <Col className="d-flex justify-content-center mx-0 px-1"  xs={3}>
            <Form.Group controlId="scenes" className={`${styles.Width} `}  >
                <Form.Label className={`${styles.BoldScene}`} >Scenes</Form.Label>
                <Form.Control 
                className={`${styles.Input}`} 
                type="text"
                name="scenes"
                value={scenes}
                onChange={handleChange}
                    />
            </Form.Group>
            {errors?.scenes?.map((message, idx) => (
            <Alert variant="warning" key={idx}>
                {message}
            </Alert>
            ))}
            </Col>
        </Row>
        <hr/>
        {/* type - costume */}
        <Row className="text-center mx-0">
        <Col className="d-flex justify-content-center mx-0 px-1"  xs={6}>
            <Form.Group controlId="type" className={`${styles.Width2} `}  >
                <Form.Label className={`${styles.BoldScene}`} >Role</Form.Label>
                <Form.Control 
                className={`${styles.Input}`} 
                type="text"
                name="type"
                value={type}
                onChange={handleChange}
                    />
            </Form.Group>
            {errors?.type?.map((message, idx) => (
            <Alert variant="warning" key={idx}>
                {message}
            </Alert>
            ))}
            </Col>
        <Col className="d-flex justify-content-center mx-0 px-1" xs={6} >
            <Form.Group controlId="costumes" className={`${styles.Width2 } `}  >
                <Form.Label className={`${styles.BoldScene}`} >Costumes</Form.Label>
                <Form.Control 
                className={`${styles.Input}`} 
                type="text"
                name="costumes"
                value={costumes}
                onChange={handleChange}
                    />
            </Form.Group>
            {errors?.costumes?.map((message, idx) => (
                <Alert variant="warning" key={idx}>
                {message}
                </Alert>
            ))}
            </Col>
        </Row>
        {/* buttons */}
        <Row className="mt-3">
        <Col className="text-center">
        <div className= {`mt-3 `} >{buttons}</div>
        </Col>
        </Row>
        </Form>
        {/* break */}
        <Row>
        <Col md={2} className="d-none d-md-block"></Col>
        <Col xs={12} md={8}>
        <hr className={`${styles.Break7 }`}/>
        </Col>
        </Row>
        {/* NEW BG ADDED */}
        <Row >
        <Col xs={12} >
        <p className={`text-center pt-2 mb-0 ${styles.BoldScene }`}>
        BACKGROUND & STANDINS ADDED
        </p>
        <p className="text-center d-none d-md-block" style={{fontStyle: 'italic'}}>
        Edit previously added BG here</p>
        <p className="text-center d-block d-md-none" style={{fontStyle: 'italic'}}>
        Edit previously added BG here from the Info button</p>
        </Col>
        </Row> 
        <BgPageAddBG
        handleMount={handleMount}
        background={background}/>
        {/* break */}
        <Row>
        <Col md={{span: 8, offset: 2}} >
        <hr className={`${styles.Break} mt-5`}/>
        </Col>
        </Row>
    </div>
    </div>
)
}

export default AddBackGround