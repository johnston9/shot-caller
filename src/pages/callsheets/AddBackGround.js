import React, { useEffect, useState } from "react";

import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import styles from "../../styles/Callsheets.module.css";
import btnStyles from "../../styles/Button.module.css";
import Alert from "react-bootstrap/Alert";

import { axiosReq } from "../../api/axiosDefaults";
import { useRedirect } from "../../hooks/Redirect";

const AddBackGround = ({id, setShow, showSideBySide, dataDay, dataDate}) => {
    useRedirect("loggedOut");
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

    useEffect(() => {
    const handleMount = async () => {
        try {
            const { data } = await axiosReq.get(`/backgroundcallsnew/?day_id=${id}`)
            setBackground(data);
        } catch (err) {
            console.log(err);
            }
    }
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
        className={`${btnStyles.Button} ${btnStyles.Blue}`}
        onClick={clear}
        >
        Cancel
        </Button>
        <Button className={`px-4 ${btnStyles.Button} ${btnStyles.Blue}`} type="submit">
        Add
        </Button>
    </div>
    );

return (
    <div className={`my-3 `}>
    {showSideBySide ? (
        <h4 className={`mt-3 pl-3 py-0 text-center ${styles.SubTitleSpan }`} 
        style={{ textTransform: 'uppercase' }}>
        ADD BG / Standins </h4>
    ) : (
        <h4 className={`mt-3 pl-3 py-0 text-center ${styles.SubTitleSpan }`} 
        style={{ textTransform: 'uppercase' }}>
        ADD BG / Standins
        <span className={`pt-1 float-right ${styles.Close }`} 
        onClick={() => setShow(false) } >Close</span>  </h4>
    ) }
    <div className={`mb-3 ${styles.Back3 }`}>
    <Row className="mt-2 pt-0">
        <Col sm={{span: 10, offset: 1} }>
        <p className="text-center mb-0">BACKGROUND ADDED</p>
        <div className={`px-2 my-0 py-1 ${styles.CastEntered }`} >
        {background.results.length ? (
            background.results.map((back) => (
                <span key={back.id}>{back.type}, </span>
            ))) : ("")}
        </div>
        </Col>
    </Row>
    <Form className="text-center" onSubmit={handleSubmit}>
            {/* qty call set scenes*/}
        <Row className="mx-0">
            <Col className="d-flex justify-content-center mx-0" xs={3}>
            <Form.Group controlId="qty" className={`${styles.Width} `}  >
                <Form.Label className={`${styles.Bold}`} >Qty</Form.Label>
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
                <Form.Label className={`${styles.Bold}`} >Call</Form.Label>
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
                <Form.Label className={`${styles.Bold}`} >Set</Form.Label>
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
                <Form.Label className={`${styles.Bold}`} >Scenes</Form.Label>
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
        {/* type costume */}
        <Row className="text-center mx-0">
        <Col className="d-flex justify-content-center mx-0 px-1"  xs={6}>
            <Form.Group controlId="type" className={`${styles.Width2} `}  >
                <Form.Label className={`${styles.Bold}`} >Type</Form.Label>
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
                <Form.Label className={`${styles.Bold}`} >Costumes</Form.Label>
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

export default AddBackGround