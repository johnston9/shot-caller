import React, { useRef, useState } from "react";

import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Image from "react-bootstrap/Image";
import Alert from "react-bootstrap/Alert";
import Asset from "../../components/Asset";
import Upload from "../../assets/upload.png";
import appStyles from "../../App.module.css";
import styles from "../../styles/Callsheets.module.css";
import btnStyles from "../../styles/Button.module.css";
import { useHistory } from "react-router-dom";
import { axiosReq } from "../../api/axiosDefaults";
import TopBox from "../../components/TopBox";
import { useRedirect } from "../../hooks/Redirect";
import { useCrewInfoContext, useSetEditCrewInfoContext } from "../../contexts/BaseCallContext";

const CrewLogo = () => {
    useRedirect("loggedOut");
  const [errors, setErrors] = useState({});
  const history = useHistory();
  const setEditCrewInfo = useSetEditCrewInfoContext();
  const crewInfo = useCrewInfoContext();
  const crewInfoOne = crewInfo.results[0];
  const {company_logo} = crewInfoOne;

  const [logo, setlogo] = useState(company_logo);

  const imageInput1 = useRef(null);

  const handleChangeLogo = (event) => {
    if (event.target.files.length) {
      URL.revokeObjectURL(logo);
      setlogo( URL.createObjectURL(event.target.files[0]));
      console.log(event.target.files[0])
    }
  };

//   const handleChangeLogo = (event) => {
//     if (event.target.files.length) {
//       URL.revokeObjectURL(company_logo);
//       setPostData({
//         ...postData,
//         company_logo: URL.createObjectURL(event.target.files[0]),
//       });
//       console.log(event.target.files[0])
//     }
//   };

  const handleSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData();
    if(imageInput1.current.files[0]) {
        formData.append("company_logo", imageInput1.current.files[0]);
      }
      try {
        const {data} = await axiosReq.put(`/crewinfonew/1/`, formData);
        setEditCrewInfo(true);
        console.log(`gooooooo ${data}`)
        history.goBack();
      } catch (err) {
        console.log(`noooooo go ${err}`);
        if (err.response?.status !== 401) {
          setErrors(err.response?.data);
        }
      }

  }

  const buttons = (
    <div className="text-center pb-1 mb-0 mt-1">    
      <Button
        className={`${btnStyles.Button} ${btnStyles.Blue} mr-3`}
        onClick={() => history.goBack()}
      >
        Cancel
      </Button>
      <Button className={`${btnStyles.Button} ${btnStyles.Blue} ml-3`} type="submit">
        Create
      </Button>
    </div>
    );

  return (
    <div>
      <TopBox work="Add Logo"/>
      <Button
        className={`${btnStyles.Button} ${btnStyles.Blue} py-0 mt-1`}
        onClick={() => history.goBack()}
    >
        Back
    </Button>
        <Form className= {`mt-3 mb-1 ${styles.Back3}`} onSubmit={handleSubmit}>
        {/* logo */}
            <Row>
                <Col md={{span:6, offset:3}}>
                <div className={` ${appStyles.Content} d-flex flex-column justify-content-center`}>
                <p className={`text-center ${styles.Bold}`}>Add or Change the Company Logo</p>      
                <Form.Group className="text-center pt-3">
                    {logo ? (
                    <>
                        <figure>
                        <Image className={styles.Logo} src={logo} rounded />
                        </figure>
                        <div>
                        <Form.Label
                            className={`${btnStyles.Button} ${btnStyles.Blue} btn`}
                            htmlFor="image-upload"
                        >
                            Change the logo
                        </Form.Label>
                        </div>
                    </>
                    ) : (
                    <Form.Label
                        className="d-flex justify-content-center"
                        htmlFor="image-upload"
                    >
                        <Asset
                        src={Upload}
                        message="Upload Image"
                        />
                    </Form.Label>
                    )}

                    <Form.Control
                    type="file"
                    id="image-upload"
                    accept="image/*"
                    onChange={handleChangeLogo}
                    ref={imageInput1}
                    />
                </Form.Group>
                {errors?.company_logo?.map((message, idx) => (
                <Alert variant="warning" key={idx}>
                    {message}
                </Alert>
                ))}
                {buttons}
                </div>
                </Col>
            </Row>  
        </Form>
    </div>
  )
}

export default CrewLogo