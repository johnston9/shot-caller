/* Component in the StoryBoard Component to upload the Storyboard  */
import React, { useRef, useState } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Asset from "../../../components/Asset";
import Upload from "../../../assets/upload.png";
import styles from "../../../styles/Scene.module.css";
import appStyles from "../../../App.module.css";
import btnStyles from "../../../styles/Button.module.css";
import { Alert } from "react-bootstrap";
import { useHistory } from "react-router-dom";
import { axiosReq } from "../../../api/axiosDefaults";
import { toast } from 'react-toastify';

const StoryBoardUpload = ({storyboard1, number1, fileName1, id, setAddStory }) => {
    const [errors, setErrors] = useState({});
    const [fileName, setFileName] = useState(fileName1);
    const [postData, setPostData] = useState({
        storyboard: storyboard1,
        number: number1,
    })
    const {storyboard, number} = postData;
    const storyboardInput = useRef(null);

    const history = useHistory();

    const handleChangeStoryboard = (event) => {
      if (event.target.files.length) {
        URL.revokeObjectURL(storyboard);
        setPostData({
          ...postData,
          storyboard: URL.createObjectURL(event.target.files[0]),
        });
        setFileName(event.target.files[0].name);
      }
    };

      const handleSubmit = async (event) => {
        event.preventDefault();
        const formData = new FormData();

        formData.append("number", number);
        if (storyboardInput.current.files[0]) {
            formData.append("storyboard", storyboardInput.current.files[0]); 
        }

        try {
            const data = await axiosReq.put(`/scenes/${id}/`, formData);
            console.log(data)
            toast.success(`Storyboard "${fileName}" Added`);
            history.push(`/scenes/${id}`);
        } catch (err) {
            console.log(err);
            if (err.response?.status !== 401) {
            setErrors(err.response?.data);
            }
        }
      }

      const buttons = (
        <div className="text-center mt-3 pb-3">    
          <Button
            className={`${btnStyles.Button} ${btnStyles.Blue} px-3 px-md-5 mr-3`}
            onClick={() => setAddStory(false)}
          >
            Cancel
          </Button>
          <Button className={`${btnStyles.Button} ${btnStyles.Blue} px-3 px-md-5 ml-3`} type="submit">
            Upload
          </Button>
        </div>
      );

  return (
    <div className='mt-4 mb-5'>
      <Row >
      <Col className="py-2 p-md-2 text-center" md={{span: 10, offset: 1} }>
      <h5 className={` pl-5 ${styles.SubTitle }`}>
          ADD STORYBOARD
          <span className={`float-right ${styles.Close } pt-1`} 
                onClick={() => setAddStory(false) } >Close</span>
      </h5>
      <Form onSubmit={handleSubmit}>
      {/* storyboard */}
      <div className={` ${styles.Back} 
        d-flex flex-column justify-content-center`}>
        <Form.Group className="text-center pt-3">
            {storyboard ? (
              <>
                <figure>
                <iframe title="storyboard" alt="storyboard"
                  className={appStyles.iframe} src={storyboard} />
                </figure>
                {fileName && <p className={`${styles.Italic}`} >File name: {fileName} </p> }
                <div>
                  <Form.Label
                    className={`${btnStyles.Button} ${btnStyles.Blue} btn mt-3`}
                    htmlFor="storyboard-upload"
                  >
                    Click Here to Select Latest StoryBoard File
                  </Form.Label>
                </div>
              </>
            ) : (
              <Form.Label
                className="d-flex justify-content-center"
                htmlFor="storyboard-upload"
              >
                <Asset
                  src={Upload}
                  height={50}
                  width={50}
                  message="Upload Storyboard"
                />
              </Form.Label>
            )}

            <Form.Control
              type="file"
              id="storyboard-upload"
              onChange={handleChangeStoryboard}
              ref={storyboardInput}
            />
          </Form.Group>
          {errors?.storyboard?.map((message, idx) => (
            <Alert variant="warning" key={idx}>
              {message}
            </Alert>
          ))}
      {buttons} 
      </div>
      </Form>
      </Col>
      </Row>
        <Row className="mt-3">
        <Col xs={2} ></Col>
        <Col xs={8}>
        <hr className={`${styles.Break}`}/>
        </Col>
        </Row>
    </div>
  )
}

export default StoryBoardUpload